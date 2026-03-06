// scripts/generate-sitemap.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");
const baseUrl = "https://sparkysbarn.de";

function getAllPosts() {
    return fs
        .readdirSync(postsDirectory)
        .filter((name) => name.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const { data } = matter(fs.readFileSync(path.join(postsDirectory, fileName), "utf8"));
            return { slug, date: data.date };
        });
}

function generateSitemap() {
    const posts = getAllPosts();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  ${posts
        .map(
            (post) => `<url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
        )
        .join("\n  ")}
</urlset>`;

    fs.writeFileSync(path.join(process.cwd(), "public/sitemap.xml"), xml);
    console.log("✅ sitemap.xml generiert");
}

generateSitemap();