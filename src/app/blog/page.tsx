import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import BlogOverviewCard from "@/components/blog/BlogOverviewCard";
import TextScroller from "@/components/TextScroller";

export default function BlogPage() {
    const posts = getAllPosts();
    const tickerText = "CUTE STICKER  ❤  GANZ OHNE KI  ❤  LOVE & PRIDE  ❤  CUTE MENSCHEN  ❤  ";

    return (
        <>
            <div style={{
                backgroundColor: "#F1F7FF",
                backgroundImage: 'url(/img/global/index_header_decoration.svg)',
                backgroundSize: 'cover',
                overflow: 'hidden'
            }}>
                <div className={'mx-auto'}>
                    <div className={'container mx-auto pb-8 px-4 relative'}>
                        <Navbar/>
                        <div className={'py-16 m-auto w-fit md:text-left text-center'}>
                            <h1 className={'md:text-8xl text-6xl text-black/75 font-bold font-display uppercase animate-fade-in-left'}>
                                Aktuelle Beiträge
                            </h1>
                        </div>
                        <img src={'/img/decoration/flower.svg'} className={'absolute top-[5%] left-0 md:block hidden'}/>
                        <img src={'/img/decoration/flower.svg'}
                             className={'w-16 absolute md:top-[25%] top-[12%] left-[90%] animate-rotate'}/>
                    </div>
                </div>
            </div>
            <div className={'w-full overflow-hidden -translate-y-[33%] -rotate-1 mb-12'}>
                <div className={'bg-primary w-[120%]'}>
                    <TextScroller>
                        <p className={'font-bold text-4xl py-4 font-display text-primary-subtle'}>{tickerText.repeat(2)}</p>
                    </TextScroller>
                </div>
            </div>
            <div className={'max-w-2xl mx-auto px-4'}>
                <ul className="space-y-8">
                    {posts.map((post, index) => (
                        <li key={post.slug}>
                            <BlogOverviewCard post={post}
                                              rotation={index % 2 === 0 ? "-rotate-1" : "rotate-1"}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}