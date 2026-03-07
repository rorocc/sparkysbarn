import Image from "next/image";
import Link from "next/link";
import {PostMeta} from "@/lib/posts";
type Props = {post: PostMeta, className?: string, rotation?: string};

export default function BlogOverviewCard(props: Props){

    const dateFormatted = new Date(props.post.date).toLocaleDateString("de-DE", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return(
        <Link href={'/blog/'+props.post.slug}>
            <div className={`${props.className} rounded-3xl py-8 px-6 flex flex-col gap-4 relative group`}>
                <div className={`w-full h-full bg-primary/10 group-hover:bg-primary/15 absolute top-0 left-0 ${props.rotation} rounded-3xl -z-1`}/>
                <div className={'flex md:flex-row flex-col md:gap-8 gap-6 items-center'}>
                    <div className={'w-full md:aspect-square rounded-xl overflow-hidden'}>
                        <Image src={props.post.thumbnail}
                               alt={props.post.thumbnail_alt ?? ""}
                               width={'500'} height={'500'} className={'object-cover w-full h-full'}/>
                    </div>
                    <div className={'flex flex-col gap-4 text-md leading-tight'}>
                        <div className={'flex flex-col gap-2'}>
                            <span className={'font-bold text-xl'}>{props.post.title}</span>
                            <span className={'text-sm'}>{props.post.description}</span>
                        </div>
                        <span className={'text-xs opacity-70'}>{dateFormatted}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}