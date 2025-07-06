import Image from "next/image";
import TreeLink from "@/app/components/TreeLink";
import SocialLink from "@/app/components/SocialLink";
import TreeProduct from "@/app/components/TreeProduct";

export default function Home() {
  return (
    <div className="max-w-96 m-auto items-center justify-items-center py-12 md:py-8 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-4">
            <Image
                src="/logo.png"
                alt="SparkysBarn logo"
                width={289}
                height={289}
                priority
                className={'mx-auto'}
            />
            <div
                className={'text-center -mb-6 mx-auto px-4 py-2 bg-white/55 backdrop-blur-xs border border-white -translate-y-[120%] -rotate-2 hover:-rotate-4 transition rounded-full'}>
                <h1 className={' text-black/90 text-md font-[family-name:var(--font-geist-sans)] leading-tight'}>
                    Sticker mit <span className={'font-bold'}>Pride</span> und <span
                    className={'font-bold'}>ohne KI 🌈</span>
                </h1>
            </div>
            <div className={'flex items-center justify-center w-full gap-4 -mt-4 mb-2'}>
                <SocialLink icon={<img src={"/icons/tiktok-logo-icon.svg"}/>}
                            url={'https://tiktok.com/@sparkysbarn_shop'}/>
                <SocialLink icon={<img src={"/icons/instagram-logo-icon.svg"}/>}
                            url={'https://instagram.com/sparkysbarn_shop'}/>
            </div>
            <div className={'w-full flex gap-2 flex-col mb-4'}>
                <TreeLink icon={<img src={"/icons/etsy-logo-icon.svg"}/>} label={'Etsy Shop'}
                          url={'https://sparkysbarn.etsy.com'}/>
            </div>
            <div className={'w-full grid grid-cols-2 gap-4 justify-evenly'}>
                <TreeProduct
                    imgUrl={'https://i.etsystatic.com/58598025/c/2045/2045/102/640/il/afc93e/7043147315/il_600x600.7043147315_hae2.jpg'}
                    url={'https://sparkysbarn.etsy.com/listing/4330633562'}
                    title={'Gans mit Pilzhut Aufkleber | Vinyl Freiform Silly Goose Cute Ente'}
                    label={'Chicis Choice'}/>
                <TreeProduct
                    imgUrl={'https://i.etsystatic.com/58598025/c/2008/2008/92/586/il/aab93b/7043110821/il_600x600.7043110821_ixzr.jpg'}
                    url={'https://sparkysbarn.etsy.com/listing/4308807221'}
                    title={'Dino Bi Pride Flag Aufkleber | Freiform Sticker Vinyl'}
                    label={'Chris\' Choice'}/>
            </div>
        </main>
    </div>
  );
}
