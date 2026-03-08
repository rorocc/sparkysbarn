import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    author: string;
    status: "published" | "draft";
    dateModified?: string;
    description: string;
    thumbnail: string;
    thumbnail_source?: string;
    thumbnail_alt?: string;
    categories?: string[];
    sources?: {
        title: string;
        url?: string;
        author?: string;
        year?: number;
    }[];
}

export function getAllPosts(): PostMeta[] {
    return fs
        .readdirSync(postsDirectory)
        .filter((name) => name.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const { data } = matter(fs.readFileSync(path.join(postsDirectory, fileName), "utf8"));
            return { slug, ...data } as PostMeta;
        })
        .filter((post) => post.status === "published") // ← Drafts rausfiltern
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
    return getAllPosts() // ← getAllPosts statt readdirSync, erbt den Filter
        .map((post) => ({ slug: post.slug }));
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