import GooseProgressFlag from "@/components/GooseProgressFlag";

export default function Footer(){
    return(
        <footer className={'md:mt-8 mt-50'}>
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