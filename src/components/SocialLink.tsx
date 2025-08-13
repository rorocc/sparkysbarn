type Props = {icon?: React.ReactNode, url: string};

export default function SocialLink(props: Props) {
    return (
        <a href={props.url} target={'_blank'} className={'group'}>
            <div
                className={'relative border-pink-200 border rounded-lg text-black px-3 py-3 hover:bg-pink-100 hover:cursor-pointer'}>
                <div className={'flex flex-row gap-4 align-center items-center'}>
                    <div className={'w-4'}>{props.icon}</div>
                </div>
            </div>
        </a>
    )
}