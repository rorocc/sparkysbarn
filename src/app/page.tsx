import Image from "next/image";
import TreeLink from "@/app/components/TreeLink";

export default function Home() {
  return (
    <div className=" items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Image
          src="/logo.png"
          alt="SparkysBarn logo"
          width={321}
          height={321}
          priority
        />
          <div className={'text-center mx-auto px-4 py-2 bg-white/55 backdrop-blur-xs border border-white -translate-y-[80%] -rotate-2 hover:-rotate-4 transition rounded-full'}>
              <h1 className={' text-black/90 text-md font-[family-name:var(--font-geist-sans)] leading-tight'}>
                  Sticker mit <span className={'font-bold'}>Pride</span> und  <span className={'font-bold'}>ohne KI 🌈</span>
              </h1>
          </div>
          <div className={'w-full flex gap-2 flex-col my-2'}>
              <TreeLink icon={<img src={"/icons/etsy-logo-icon.svg"}/>}  label={'Etsy Shop'} url={'https://sparkysbarn.etsy.com'}/>
          </div>
      </main>
    </div>
  );
}
