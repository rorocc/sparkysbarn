import Image from "next/image";
import authors from "@/app/data/blog/authors.json"
type Props = {author: string};

export default function AuthorBlock(props: Props){

    let author = authors.find((author) => author.id === props.author.toLowerCase());
    return(
        <div className={'rounded-3xl py-12 px-8 flex flex-col gap-4 relative'}>
            <div className={'w-full h-full bg-primary/10 absolute top-0 left-0 -rotate-2 rounded-3xl -z-1'}/><div className={'flex flex-row gap-4 items-center'}>
                <Image src={'/img/blog/authors/' + props.author.toLowerCase() + '.webp'}
                       alt={'Profilbild von ' + props.author}
                       width={'200'} height={'200'} className={'w-16'}/>
                <div className={'flex flex-col gap-0 justify-center text-md leading-tight'}>
                    <span className={'font-bold'}>{author?.name}</span>
                    <span className={'text-sm'}>{author?.title}</span>
                </div>
            </div>
            <span>
                {author?.description}
            </span>
        </div>
    )
}