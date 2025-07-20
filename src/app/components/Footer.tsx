import GooseProgressFlag from "@/app/components/GooseProgressFlag";

export default function Footer(){
    return(
        <footer className={'mt-48 lg:mt-10'}>
            <div className={'relative '}>
                <img src={'/grass.svg'}
                     aria-hidden={true} alt={''}/>
                <div className={'absolute md:bottom-8 -bottom-3 translate-y-16 left-16 scale-50 origin-left'}>
                    <GooseProgressFlag/>
                </div>
            </div>
        </footer>
    )
}