import Image from "next/image";
import authors from "@/app/data/blog/authors.json"
type Props = {author: string};

export default function AuthorBlock(props: Props){

    let author = authors.find((author) => author.id === props.author.toLowerCase());
    return(
        <div className={'rounded-3xl pt-4 pb-8 px-6 flex flex-col gap-2 relative bg-pink-100'}>
            <div className={'flex flex-row gap-4 items-center pl-2 pr-8 py-4 w-fit rounded-xl'}>
                <Image src={'/img/blog/authors/' + props.author.toLowerCase() + '.webp'}
                       alt={'Profilbild von ' + props.author}
                       width={'200'} height={'200'} className={'w-16'}/>
                <div className={'flex flex-col gap-0 justify-center text-md leading-tight'}>
                    <span className={'font-bold'}>{author?.name}</span>
                    <span className={'text-sm'}>{author?.title}</span>
                </div>
            </div>
            <span className={'leading-normal max-w-[50ch] opacity-85'}>
                {author?.description}
            </span>
        </div>
    )
}