import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    author: string;
    dateModified?: string;
    description: string;
    thumbnail: string;
    thumbnail_source?: string;
    thumbnail_alt?: string;
    categories: string[];


}

export function getAllPosts(): PostMeta[] {
    if (!fs.existsSync(postsDirectory)) return [];

    return fs
        .readdirSync(postsDirectory)
        .filter((name) => name.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const { data } = matter(fs.readFileSync(fullPath, "utf8"));
            return { slug, ...data } as PostMeta;
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
    if (!fs.existsSync(postsDirectory)) return [];

    return fs
        .readdirSync(postsDirectory)
        .filter((name) => name.endsWith(".mdx"))
        .map((fileName) => ({ slug: fileName.replace(/\.mdx$/, "") }));
}

export async function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        frontmatter: data as PostMeta,
        content,
    };
}