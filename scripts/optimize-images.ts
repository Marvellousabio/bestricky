import sharp from "sharp";
import fs from "fs";
import path from "path";

const ASSETS_DIR = path.join(process.cwd(), "public", "assets");

const sizes = {
	icon: 128,
	thumbnail: 400,
	small: 600,
	medium: 800,
	large: 1200,
	xlarge: 1600,
};

const formatOptions = {
	webp: { quality: 80 },
	jpeg: { quality: 80, mozjpeg: true },
};

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

// Map of project images to their aspect ratios to maintain proper sizing
const aspectRatios: Record<string, { width: number; height: number }> = {
	'lumina.webp': { width: 1600, height: 901 },
	'precisionapex.webp': { width: 1600, height: 897 },
	'Arial.webp': { width: 1600, height: 900 },
	'elysian.webp': { width: 1600, height: 901 },
	'construction.webp': { width: 680, height: 850 },
	'aura.webp': { width: 1600, height: 901 },
	'realestate.webp': { width: 736, height: 922 },
	'victoroshimen.webp': { width: 1600, height: 896 },
	'healthcare.webp': { width: 736, height: 920 },
	'brand.webp': { width: 736, height: 918 },
	'ecommerce.webp': { width: 736, height: 921 },
	'vine.webp': { width: 1600, height: 900 },
	'neonpulse.webp': { width: 1600, height: 900 },
	'synapse.webp': { width: 1600, height: 900 },
	'nook.webp': { width: 1600, height: 900 },
	'djcuppy.webp': { width: 1600, height: 900 },
	'gourmet.webp': { width: 1600, height: 900 },
	'necole.webp': { width: 1600, height: 900 },
	'coco.webp': { width: 1600, height: 900 },
	'benelytics.webp': { width: 1600, height: 900 },
	'B.webp': { width: 500, height: 500 },
};

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
				// Skip responsive variants (e.g., image-400.webp) and temp files
				const basename = path.basename(item, ext);
				if (/-(\d+)$/.test(basename) || basename.includes('.optimizing')) {
					continue;
				}
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
		const originalWidth = metadata.width || 0;
		const originalHeight = metadata.height || 0;
		
		console.log(`   Original: ${originalWidth}x${originalHeight}, ${(fs.statSync(inputPath).size / 1024).toFixed(1)}KB`);
		
		// Get aspect ratio info if available
		const aspectInfo = aspectRatios[`${filename}${ext}`];
		
		let webpPath: string;
		let originalSize: number;
		
		// For WebP files, we'll use the existing file as source for variants.
		// We'll skip re-optimizing to avoid Windows file lock issues.
		if (ext === ".webp") {
			webpPath = inputPath;
			const originalSize = fs.statSync(inputPath).size;
			console.log(`   ✅ Using existing WebP: ${(originalSize / 1024).toFixed(1)}KB`);
		} else {
			// Convert any other format to WebP
			webpPath = path.join(dir, `${filename}.webp`);
			await sharp(inputPath)
				.resize(originalWidth > 1600 ? 1600 : originalWidth, null, {
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
		}
		
		// Generate responsive variants
		await generateResponsiveVariants(webpPath, aspectInfo);
		
	} catch (error) {
		console.error(`   ❌ Error: ${error.message}`);
	}
}

async function generateResponsiveVariants(sourcePath: string, aspectInfo?: { width: number; height: number }) {
	const ext = path.extname(sourcePath).toLowerCase();
	const dir = path.dirname(sourcePath);
	const filename = path.basename(sourcePath, ext);
	
	const targetWidths = [400, 600, 800, 1200, 1600];
	
	// Determine aspect ratio
	let aspectRatio: number | undefined;
	if (aspectInfo) {
		aspectRatio = aspectInfo.width / aspectInfo.height;
	}
	
	for (const targetWidth of targetWidths) {
		// Skip if original width is smaller than target
		const metadata = await sharp(sourcePath).metadata();
		if (metadata.width <= targetWidth) {
			continue;
		}
		
		const targetHeight = aspectRatio ? Math.round(targetWidth / aspectRatio) : null;
		
		const outputFilename = `${filename}-${targetWidth}.webp`;
		const outputPath = path.join(dir, outputFilename);
		
		await sharp(sourcePath)
			.resize(targetWidth, targetHeight || null, {
				withoutEnlargement: true,
			})
			.webp({ quality: 80 })
			.toFile(outputPath);
		
		const sizeKB = (fs.statSync(outputPath).size / 1024).toFixed(1);
		console.log(`   📏 Generated ${targetWidth}w variant: ${sizeKB}KB`);
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