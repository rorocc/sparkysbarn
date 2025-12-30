import Image from "next/image";
import ButtonCTA from "@/components/ButtonCTA";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={'mx-auto my-8 bg-white px-2 py-1 rounded-full w-fit z-99'}>
                    <div className={'flex flex-row items-center justify-between md:max-w-156 w-full gap-12'}>
                        <Image
                            src="/logo-word.webp"
                            alt="SparkysBarn – mit Liebe aus Leipzig"
                            width={256}
                            height={72}
                            priority
                            className={'md:w-48 w-40'}
                        />
                        <div className={'md:flex flex-row gap-6 text-black hidden'}>
                            <Link href={'/'}>Startseite</Link>
                            <Link href={'/#faq'}>FAQ</Link>
                        </div>
                        <div>
                            <ButtonCTA url={'https://sparkysbarn.etsy.com'} label={'Zum Shop'} />
                        </div>
                    </div>
        </nav>
    )
}