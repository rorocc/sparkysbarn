import Image from "next/image";
import TreeLink from "@/components/TreeLink";
import ButtonCTA from "@/components/ButtonCTA";
import TextScroller from "@/components/TextScroller";
import Navbar from "@/components/Navbar";
import categories from "@/app/data/categories.json"

export default function Header() {
    return (
            <header style={{
                backgroundColor: "#F1F7FF",
                backgroundImage: 'url(/img/global/index_header_decoration.svg)',
                backgroundSize: 'cover',
                overflow: 'hidden'
            }}>
                <img src={'/grass.svg'} className={'w-full absolute md:-bottom-[5%] bottom-5'}/>
                <img src={'/img/global/index_header_sparky.svg'} className={'absolute right-[-5%] -bottom-[30%] md:block hidden'}/>
                <div className={'mx-auto'}>
                    <div className={'container mx-auto pb-8 px-4 relative'}>
                        <Navbar/>
                        <div className={'py-16 md:text-left text-center'}>
                            <h1 className={'text-8xl text-black/75 font-bold font-display uppercase my-4 animate-fade-in-left'}>
                                Sticker für alle
                            </h1>
                            <p className={'max-w-[50ch] py-3 animate-fade-in-left'}>
                                Setze ein Zeichen für Gleichberechtigung & Liebe mit unseren liebevoll gestalteten und
                                produzierten Aufklebern, die für alle da sind.
                            </p>
                            <div className={'mt-6 flex flex-row gap-2 w-full md:justify-start justify-center'}>
                                {
                                    categories.filter(i => {
                                        return i.highlight
                                    }).map((category,i) => (
                                        <a href={'#'+category.id} target={'_self'} key={category.label+category.id}
                                           style={{ animationDelay: `${(i+1)*100}ms` }}
                                           className={'opacity-0 animate-fade-in-left bg-white/75 backdrop-blur-xs border border-white/75 hover:bg-white/85 rounded-full px-4 py-2'}>
                                            {category.label}
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                        <img src={'/img/decoration/flower.svg'} className={'absolute top-[5%] left-0 md:block hidden'}/>
                        <img src={'/img/decoration/flower.svg'} className={'w-16 absolute md:top-[25%] top-[12%] left-[65%] animate-rotate'}/>
                    </div>
                </div>
            </header>
    )
}