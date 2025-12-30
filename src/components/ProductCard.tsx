type Props = {id: string, title: string,price?: string, url: string, img: string, category: string, className?: string, size?: string};
//import styles from '@/components/style/ButtonCTA.module.css'

export default function ProductCard(data: Props){
    return (
            <a key={data.id} href={data.url} target={'_blank'}>
                <div
                    className={data.className + ' bg-white rounded-lg overflow-hidden flex flex-col gap-3 hover:rotate-1 hover:drop-shadow-lg hover:scale-105 transition'}>
                    <div className={'relative'}>
                        <img className={'w-full'} src={data.img}
                             alt={''}/>
                        {getFlag(data.category, data.title)}
                    </div>
                    <div className={'flex flex-col gap-1 px-4 pt-2 pb-4'}>
                        <p className={'line-clamp-3 text-sm'}>
                            {data.title}
                        </p>
                        <div className={'flex items-center w-full justify-between mt-2'}>
                            <span className={'text-sm uppercase tracking-loose opacity-60'}>
                                            {data.category}
                                        </span>
                            <span className={'font-bold'}>
                            {(data.price)?(data.price + " €"):""}
                            </span>
                        </div>
                    </div>
                </div>
            </a>
    )
}

function getFlag(category: string, title: string) {
    if (category.toLowerCase().includes('pride')){
        console.log(title)
        let titleLower = title.toLowerCase();
        let flag = ""
        if(titleLower.includes('enby')){
            flag = "/img/flags/enby.webp"
        }else if(titleLower.includes('ace')){
            flag = "/img/flags/ace.webp"
        }else if(titleLower.includes('gay')){
            flag = "/img/flags/gay.webp"
        }else if(titleLower.includes('lesbian')){
            flag = "/img/flags/lesbian.svg"
        }else if(titleLower.includes('trans')){
            flag = "/img/flags/trans.webp"
        }else if(titleLower.includes(' bi ')){
            flag = "/img/flags/bi.svg"
        }else{
            flag = "/img/flags/progress.webp"
        }

        return(
            <>
                <div
                    className={'aspect-square w-7 h-7 overflow-hidden rounded-full absolute bottom-1 right-1 border border-solid border-white border-2'}>
                    <img src={flag}
                         className={'object-cover w-full h-full'}/>
                </div>
            </>
        )
    }else return
}