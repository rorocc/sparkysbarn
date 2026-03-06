import { getAllPosts } from "@/lib/posts";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();

    const postEntries = posts.map((post) => ({
        url: `https://sparkysbarn.de/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [
        {
            url: "https://sparkysbarn.de",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://sparkysbarn.de/blog",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...postEntries,
    ];
}