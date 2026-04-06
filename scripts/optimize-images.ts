import sharp from "sharp";
import fs from "fs";
import path from "path";

const ASSETS_DIR = path.join(process.cwd(), "public", "assets");

const sizes = {
  thumbnail: 400,
  small: 800,
  medium: 1200,
  large: 1600,
};

const formatOptions = {
  webp: { quality: 80 },
  jpeg: { quality: 80, mozjpeg: true },
};

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

async function getFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...await getFiles(fullPath));
    } else {
      const ext = path.extname(item).toLowerCase();
      if (imageExtensions.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

async function compressImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const dir = path.dirname(inputPath);
  const filename = path.basename(inputPath, ext);
  
  console.log(`\n📦 Processing: ${filename}`);
  
  try {
    const metadata = await sharp(inputPath).metadata();
    const width = metadata.width || 0;
    const height = metadata.height || 0;
    
    console.log(`   Original: ${width}x${height}, ${(fs.statSync(inputPath).size / 1024).toFixed(1)}KB`);
    
    if (ext === ".webp") {
      console.log(`   ⏭️  Already WebP, optimizing...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(inputPath);
      
      const newSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
      console.log(`   ✅ Optimized: ${newSize}KB`);
      return;
    }
    
    if (ext === ".png" && metadata.hasAlpha) {
      console.log(`   ⏭️  PNG with transparency, keeping format...`);
      await sharp(inputPath)
        .png({ compressionLevel: 9, quality: 80 })
        .toFile(inputPath);
      
      const newSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
      console.log(`   ✅ Optimized: ${newSize}KB`);
      return;
    }
    
    const webpPath = path.join(dir, `${filename}.webp`);
    
    await sharp(inputPath)
      .resize(width > 1600 ? 1600 : width, null, {
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(webpPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
    
    console.log(`   ✅ Converted to WebP: ${(webpSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    
    fs.unlinkSync(inputPath);
    console.log(`   🗑️  Removed original: ${filename}${ext}`);
    
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
  }
}

async function main() {
  console.log("🖼️  Image Optimization Script");
  console.log("============================\n");
  
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error("❌ Assets directory not found:", ASSETS_DIR);
    process.exit(1);
  }
  
  const files = await getFiles(ASSETS_DIR);
  console.log(`Found ${files.length} images to process\n`);
  
  let processed = 0;
  let failed = 0;
  
  for (const file of files) {
    try {
      await compressImage(file);
      processed++;
    } catch (error) {
      console.error(`\n❌ Failed to process ${file}:`, error.message);
      failed++;
    }
  }
  
  console.log("\n============================");
  console.log(`✅ Processed: ${processed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log("============================");
}

main();