type Props = {icon?: React.ReactNode, label: string, url: string};

export default function TreeLink(props: Props) {
    return (
        <a href={props.url} className={'group'}>
            <div
                className={'relative border-pink-200 bg-white/50 border rounded-lg text-black px-4 py-3 hover:bg-pink-100 hover:cursor-pointer'}>
                <div className={'flex flex-row gap-4 align-center items-center'}>
                    <div className={'max-w-4'}>{props.icon}</div>
                    <p>{props.label}</p>
                </div>
                <div className={'w-8 absolute right-1 top-0 translate-y-1/4 transition group-hover:translate-x-1'}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M9.5 7L14.5 12L9.5 17" stroke="#fda5d5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </a>
    )
}