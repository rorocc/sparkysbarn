import Image from "next/image";
import TreeLink from "@/components/TreeLink";
import SocialLink from "@/components/SocialLink";
import TreeProduct from "@/components/TreeProduct";
import ButtonCTA from "@/components/ButtonCTA";
import TextScroller from "@/components/TextScroller";

export default function Home() {
    const today = new Date();
    const start = new Date(today.getFullYear(), 7, 13); // 14. August (Monat 7)
    const end = new Date(today.getFullYear(), 7, 19);
    const isInRange = today >= start && today <= end;

  return (
      <>
          <div
              className="items-center justify-items-center md:pt-12 pt-0 font-[family-name:var(--font-geist-sans)]">
              <main className="flex flex-col w-full gap-12">
                  <div className={'relative w-full overflow-visible'}>
                      <div className={'flex flex-col gap-4'}>
                          <div className={'max-w-96 m-auto'}>
                              <img src={'heading.webp'}
                                   height={'1.75rem'}
                                   width={'auto'}
                                   className={'h-[1.75rem] mb-2'}
                                   alt={'Sticker mit Pride und ohne KI'}
                              />
                              <div className={'w-full grid grid-cols-2 gap-4 justify-evenly'}>
                                  <TreeProduct
                                      imgUrl={'https://i.etsystatic.com/58598025/r/il/ad1a6b/7092541142/il_600x600.7092541142_k3fa.jpg'}
                                      url={'https://sparkysbarn.etsy.com/de/listing/4348591482/aufkleber-zauberer-gans-hocus-pocus-i'}
                                      title={'Zauberer Gans "Hocus Pocus I can\'t Focus" | ohne KI | Handgemachter Vinyl Freiform Sticker | Silly Goose Cute Ente'}
                                      label={'Chicis Choice'}/>
                                  <TreeProduct
                                      imgUrl={'https://i.etsystatic.com/58598025/c/1875/1875/187/752/il/1ad006/7092573708/il_800x800.7092573708_k20e.jpg'}
                                      url={'https://sparkysbarn.etsy.com/de/listing/4348687495/gans-sonnenbrille-homophobia-is-for'}
                                      title={'Gans Sonnenbrille "Homophobia is for silly fucks" | ohne KI | Handgemachter Vinyl Freiform Sticker | Silly Goose Cute Ente'}
                                      label={'Chris\' Choice'}/>
                                  <TreeProduct
                                      imgUrl={'https://i.etsystatic.com/58598025/c/1530/1530/287/849/il/9caf07/7107590552/il_600x600.7107590552_onfh.jpg'}
                                      url={'https://sparkysbarn.etsy.com/listing/4334303624'}
                                      title={'Gans Progress Flag "Being straight was never an option" | ohne KI | Handgemachter Vinyl Freiform Sticker | Silly Goose Cute Ente'}
                                  />
                                  <TreeProduct
                                      imgUrl={'https://i.etsystatic.com/58598025/c/2008/2008/92/586/il/aab93b/7043110821/il_600x600.7043110821_ixzr.jpg'}
                                      url={'https://sparkysbarn.etsy.com/de/listing/4308807221/aufkleber-dino-bi-pride-flag'}
                                      title={'Dino Bi Pride Flag Aufkleber | Freiform Sticker Vinyl'}
                                  />
                                  <TreeProduct
                                      imgUrl={'https://i.etsystatic.com/58598025/r/il/2d6db7/7107563210/il_600x600.7107563210_qd0d.jpg'}
                                      url={'https://sparkysbarn.etsy.com/listing/4351504489'}
                                      title={'Frosch Demo Schild "Fick Nazis" | ohne KI | Handgemachter Vinyl Freiform Sticker | Cute Frog'}
                                  />
                                  <TreeProduct
                                      imgUrl={'https://i.etsystatic.com/58598025/c/2045/2045/102/640/il/afc93e/7043147315/il_800x800.7043147315_hae2.jpg'}
                                      url={'https://sparkysbarn.etsy.com/de/listing/4330633562/aufkleber-gans-mit-pilzhut-o-ohne-ki'}
                                      title={'Gans mit Pilzhut | ohne KI | Handgemachter Vinyl Freiform Sticker | Silly Goose Cute Ente'}
                                  />
                              </div>

                          </div>
                      </div>
                  </div>
                  <div className={'mx-auto'}>
                      <ButtonCTA url={'https://sparkysbarn.etsy.com'} label={'Alle Sticker ansehen'}/>
                  </div>
                  <div className={'flex items-center justify-center w-full gap-4 -mt-4 mb-2'}>
                      <SocialLink icon={<img src={"/icons/tiktok-logo-icon.svg"}/>}
                                  url={'https://tiktok.com/@sparkysbarn_shop'}/>
                      <SocialLink icon={<img src={"/icons/instagram-logo-icon.svg"}/>}
                                  url={'https://instagram.com/sparkysbarn_shop'}/>
                  </div>
              </main>
          </div>
      </>
  );
}
