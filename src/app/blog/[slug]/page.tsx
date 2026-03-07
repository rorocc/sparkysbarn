import {MDXRemote} from "next-mdx-remote/rsc";
import {mdxComponents} from "@/components/mdx/mdx-components"
import {getAllPostSlugs, getPostBySlug} from "@/lib/posts";
import {notFound} from "next/navigation";
import Navbar from "@/components/Navbar";
import AuthorBlock from "@/components/blog/authorBlock";
import type { Metadata } from "next";
import Carousel from "@/components/Carousel";

export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs;
}

const components = {};

// src/app/blog/[slug]/page.tsx
export default async function PostPage({params,}: { params: Promise<{ slug: string }>; // ← Promise!
}) {
    const { slug } = await params;

    let frontmatter, content;
    try {
        ({ frontmatter, content } = await getPostBySlug(slug));
    } catch (e) {
        console.error(e);
        notFound();
    }

    const dateFormatted = new Date(frontmatter.date).toLocaleDateString("de-DE", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const dateModifiedFormatted = frontmatter?.dateModified
        ? new Date(frontmatter.dateModified).toLocaleDateString("de-DE", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })
        : null;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: frontmatter.title,
        description: frontmatter.description,
        datePublished: frontmatter.date,
        dateModified: frontmatter.dateModified,
        author: {
            "@type": "Person",
            name: frontmatter.author,
        },
        image: frontmatter.thumbnail,
        url: `https://meineblog.de/blog/${slug}`,
    };

    return (
        <div>
            <article className={'w-full mx-auto pb-24 leading-loose'}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
                />
                <header className={'w-full bg-primary/5'}>
                    <Navbar/>
                    <div className={'max-w-[75ch] mx-auto py-8 flex flex-col gap-4'}>
                        <div className={'flex flex-row gap-2 mb-2 text-sm items-center flex-wrap'}>
                            {
                                frontmatter.categories.map((category: String, index: number) => (
                                    <div key={'categoryTag' + index}
                                         className={'bg-primary/10 px-3 py-1 rounded-full text-primary'}>{category}</div>
                                ))
                            }
                        </div>
                        <h1 className={'font-bold text-5xl'}>{frontmatter.title}</h1>
                        <p className={'max-w-[60ch]'}>{frontmatter.description}</p>
                        {!frontmatter.dateModified ? <time className={'opacity-70'}>{dateFormatted}</time> :
                            <span className={'opacity-70'}>Aktualisiert am <time>{dateModifiedFormatted}</time></span>}
                        <div className={'my-8 text-right leading-tight flex flex-col gap-2'}>
                            <img className={'rounded-4xl'} src={frontmatter.thumbnail}
                                 alt={frontmatter.thumbnail_alt}/>
                            <span className={'text-sm opacity-50'}>{frontmatter.thumbnail_source}</span>
                        </div>

                    </div>
                </header>
                <section className={'max-w-[65ch] mx-auto py-8'}>
                    <MDXRemote source={content} components={{...mdxComponents, ...components}}/>
                </section>
                <footer className={'max-w-[65ch] mx-auto'}>
                    <div className={'mt-12'}>
                        <AuthorBlock author={frontmatter.author}/>
                    </div>
                </footer>
            </article>
        </div>
    );
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const {slug} = await params;
    const {frontmatter} = await getPostBySlug(slug);

    return {
        title: frontmatter.title,
        description: frontmatter.description,
        authors: [{name: frontmatter.author}],
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: "article",
            publishedTime: frontmatter.date,
            modifiedTime: frontmatter.dateModified,
            url: `https://meineblog.de/blog/${slug}`,
            images: frontmatter.thumbnail
                ? [{url: frontmatter.thumbnail, width: 1200, height: 630}]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title: frontmatter.title,
            description: frontmatter.description,
            images: frontmatter.thumbnail ? [frontmatter.thumbnail] : [],
        },
        alternates: {
            canonical: `https://meineblog.de/blog/${slug}`,
        },
    };
}