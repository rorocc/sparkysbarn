import Image from "next/image";
import TreeLink from "@/components/TreeLink";
import ButtonCTA from "@/components/ButtonCTA";
import TextScroller from "@/components/TextScroller";

export default function Header() {
    return (
        <>
            <header className={'relative'}>
                <nav className={'flex flex-row py-6 justify-center mx-auto'}>
                    <div className={'flex flex-row items-center justify-between max-w-96 md:max-w-156 w-full gap-2'}>
                        <Image
                            src="/logo-word.webp"
                            alt="SparkysBarn – mit Liebe aus Leipzig"
                            width={500}
                            height={72}
                            priority
                            className={'md:w-80 w-50'}
                        />
                        <div>
                            <ButtonCTA url={'https://sparkysbarn.etsy.com'} label={'Alle Sticker'} />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}