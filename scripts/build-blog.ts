import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  lastUpdated?: string;
  image: string;
  imgWidth: number;
  imgHeight: number;
  excerpt: string;
  content: string;
  htmlContent: string;
  tags?: string[];
  relatedServiceId?: string;
  featured?: boolean;
  schemaMarkup?: object;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  internalLinks?: Array<{text: string, url: string}>;
  externalLinks?: Array<{text: string, url: string}>;
}

interface PillarPost extends BlogPost {
  clusters: string[]; // slugs of related cluster posts
  tableOfContents?: Array<{level: number, text: string, id: string}>;
}

const calculateReadTime = (text: string): string => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

const generateTOC = (html: string): Array<{level: number, text: string, id: string}> => {
  const toc: Array<{level: number, text: string, id: string}> = [];
  const headingRegex = /<h([2-4])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[2-4]>/g;
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const id = match[2];
    const text = match[3].replace(/<[^>]*>/g, ''); // Remove any nested tags
    toc.push({ level, text, id });
  }

  return toc;
};

const processMarkdownFile = (filePath: string, type: 'post' | 'pillar' = 'post'): BlogPost | PillarPost => {
  const fileContent = readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content: markdownContent } = matter(fileContent);

  // Configure marked for better HTML output
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const htmlContent = marked(markdownContent);
  const slug = basename(filePath, '.md');

  const post: BlogPost = {
    id: slug,
    slug,
    title: frontmatter.title || 'Untitled',
    category: frontmatter.category || 'Blog',
    readTime: frontmatter.readTime || calculateReadTime(markdownContent),
    author: frontmatter.author || 'Bestricky',
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    lastUpdated: frontmatter.lastUpdated,
    image: frontmatter.image || '/assets/blog-default.webp',
    imgWidth: frontmatter.imgWidth || 1200,
    imgHeight: frontmatter.imgHeight || 800,
    excerpt: frontmatter.excerpt || markdownContent.substring(0, 160).replace(/\n/g, ' '),
    content: markdownContent,
    htmlContent,
    tags: frontmatter.tags || [],
    relatedServiceId: frontmatter.relatedServiceId,
    featured: frontmatter.featured || false,
    metaTitle: frontmatter.metaTitle,
    metaDescription: frontmatter.metaDescription,
    keywords: frontmatter.keywords || [],
    internalLinks: frontmatter.internalLinks || [],
    externalLinks: frontmatter.externalLinks || [],
  };

  // Generate schema markup
  post.schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://bestricky.vercel.app/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bestricky",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bestricky.vercel.app/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.lastUpdated || post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bestricky.vercel.app/blog/${post.slug}`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".speakable-content"]
    }
  };

  // Add pillar-specific properties
  if (type === 'pillar') {
    const pillarPost = post as PillarPost;
    pillarPost.clusters = frontmatter.clusters || [];
    pillarPost.tableOfContents = generateTOC(htmlContent);
  }

  return post;
};

const processDirectory = (dirPath: string, type: 'post' | 'pillar' = 'post'): BlogPost[] => {
  const files = readdirSync(dirPath);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (extname(file) === '.md') {
      const filePath = join(dirPath, file);
      try {
        const post = processMarkdownFile(filePath, type);
        posts.push(post);
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
      }
    }
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

const generateSitemap = (posts: BlogPost[], pillars: PillarPost[]): string => {
  const baseUrl = 'https://bestricky.vercel.app';
  const urls: string[] = [];

  // Add blog posts
  posts.forEach(post => {
    urls.push(`<url><loc>${baseUrl}/blog/${post.slug}</loc><lastmod>${post.lastUpdated || post.date}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
  });

  // Add pillar pages
  pillars.forEach(pillar => {
    urls.push(`<url><loc>${baseUrl}/blog/${pillar.slug}</loc><lastmod>${pillar.lastUpdated || pillar.date}</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>`);
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
};

const main = () => {
  console.log('Building blog content...');

  // Process posts and pillars
  const posts = processDirectory('./blog/posts', 'post');
  const pillars = processDirectory('./blog/pillars', 'pillar') as PillarPost[];

  // Generate combined data
  const blogData = {
    posts,
    pillars,
    lastUpdated: new Date().toISOString(),
  };

  // Write blog data to both locations
  writeFileSync('./blog/_data/blog-data.json', JSON.stringify(blogData, null, 2));
  writeFileSync('./public/blog/_data/blog-data.json', JSON.stringify(blogData, null, 2));
  console.log(`Processed ${posts.length} posts and ${pillars.length} pillars`);

  // Generate sitemap
  const sitemap = generateSitemap(posts, pillars);
  writeFileSync('./public/sitemap-blog.xml', sitemap);
  console.log('Generated sitemap-blog.xml');

  // Update main sitemap index if it exists
  try {
    const mainSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://bestricky.vercel.app/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://bestricky.vercel.app/sitemap-blog.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;
    writeFileSync('./public/sitemap.xml', mainSitemap);
    console.log('Updated main sitemap index');
  } catch (error) {
    console.log('Main sitemap not found, skipping index update');
  }

  console.log('Blog build complete!');
};

main();