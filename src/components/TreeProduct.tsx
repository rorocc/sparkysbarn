type Props = {icon?: React.ReactNode, title:string, label?:string, imgUrl: string, url: string};

export default function TreeProduct(props: Props) {
    return (
        <a href={props.url} target={'_blank'} className={'group'}>
            <div className={'rounded-lg bg-white overflow-clip border border-pink-200'}>
                <div className={'relative overflow-hidden'}>
                    <img className={'group-hover:scale-110 transition'}
                        src={props.imgUrl}/>
                    {props.label &&
                        <div className={'text-xs font-medium bg-white/75 border border-white backdrop-blur-xs absolute top-1 left-1 text-black px-2 py-[0.5] rounded-lg'}>
                            {props.label}
                        </div>
                    }
                </div>
                <div className={'px-3 py-2 text-black'}>
                    <p className={'truncate text-sm'}>
                        {props.title}
                    </p>
                </div>
            </div>
        </a>
    )
}