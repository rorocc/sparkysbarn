import Navbar from "@/components/Navbar";
import TextScroller from "@/components/TextScroller";
import "../components/style/SparkyAccordion.module.css"
import SparkyAccordion from "@/components/SparkyAccordion";
import "./style.css";
import items from "./data/items.json"
import prideItems from "./data/items/pride.json"
import feminismItems from "./data/items/feminism.json"
import adhdItems from "./data/items/adhd.json"
import topItems from "./data/items/teaser_top.json"
import ProductCard from "@/components/ProductCard";
import RatingCard from "@/components/RatingCard";
import ButtonCTA from "@/components/ButtonCTA";
import CurvedMarquee from "@/components/CurvedMarquee";
import PrideCircle from "@/components/art/PrideCircle";
import Header from "@/components/Header";

const tickerText = "CUTE STICKER  ❤  GANZ OHNE KI  ❤  LOVE & PRIDE  ❤  CUTE MENSCHEN  ❤  ";
const beliebteStickerIds = [4,13,10,5];
const wieWaersStickerIds = [13,14,15,16];
const headerCategoryTags = [
    {
        "label": "Pride", "id": "category-pride"
    },
    {
        "label": "Feminismus", "id": "category-feminism"
    },
    {
        "label": "ADHD", "id": "category-adhd"
    }
]
const accordionItems = [
    {
        label: "Wird künstliche Intelligenz für die Designs verwendet?",
        value: "item-1",
        content: <p><b>Nein, jeder einzelne Sticker von SparkysBarn wurde ohne KI gestaltet.</b> SparkysBarn ist als
            kreatives Hobby von Chici & Chris gestartet, bei dem es darum ging, Freude mit selbst gestalteten Aufklebern
            zu verbreiten – und dabei wird es auch in Zukunft bleiben.</p>
    },
    {
        label: "Wie werden die Sticker hergestellt?",
        value: "item-2",
        content: <p>Wir drucken und schneiden die Sticker selbst auf hochwertigem Vinylpapier nachdem deine Bestellung
            eingegangen ist. Die Aufkleber werden nach dem Druck mit einer Schutzfolie versehen, sodass diese vor
            Schmutz und Spritzwasser geschützt sind.</p>
    },
    {
        label: "Kann man personalisierte Aufkleber bestellen?",
        value: "item-3",
        content: <p>Natürlich! Schreib uns einfach eine Nachricht und die Reise deines ganz eigenen Stickers
            beginnt.</p>
    },
    {
        label: "Wie kann man bei SparkysBarn bestellen?",
        value: "item-4",
        content: <p>Aktuell können wir nur Bestellungen über unseren <a className={'underline'} href={'https://sparkysbarn.etsy.com'}
                                                                        target={'_blank'}>Etsy-Shop</a> annehmen. Dort
            kannst du auch ganz einfach ohne Account deine Bestellung bezahlen.</p>
    },
    {
        label: "Wie lange beträgt die Versandzeit bei SparkysBarn?",
        value: "item-5",
        content: <p>Wir verschicken die Aufkleber schnellstmöglich per Brief – üblicherweise innerhalb von 3 Tagen.
            Beachte allerdings, dass wir deine Sticker immer erst nach Eingang der Bestellung selbst herstellen. Daher
            kann die Versandzeit variieren. <br/>Bei besonders eiligen Bestellungen wähle Expressversand aus oder trete
            mit uns in Kontakt.</p>
    },
    {
        label: "In welche Länder verschickt SparkysBarn Sticker?",
        value: "item-6",
        content: <p>Zur Zeit können wir Sticker nur an Adressen innerhalb Deutschlands versenden.</p>
    }
]

export default function Home() {

    return (
        <>
            <Header />
            <div className={'w-full overflow-hidden -translate-y-[33%] -rotate-1'}>
                <div className={'bg-primary w-[120%]'}>
                    <TextScroller>
                        <p className={'font-bold text-4xl py-4 font-display text-primary-subtle'}>{tickerText.repeat(2)}</p>
                    </TextScroller>
                </div>
            </div>
            <section className={'relative -mb-8 -mt-32 py-24'}>
                <div className={'tablecloth w-full h-full absolute -z-1'}/>
                <div>
                    <div className={'container mx-auto p-global py-12 text-center'}>
                    <div className={'flex bg-white px-4 py-2 w-fit mx-auto my-12'}>
                            <h2 className={'uppercase text-black/75'}>Ein paar unserer <span
                                className={'text-primary'}>schönsten</span> Sticker</h2>
                        </div>
                        <div className={'grid md:grid-cols-3 grid-cols-2 md:gap-12 gap-6 items-center mx-auto justify-center'}>
                            {
                                topItems.map((item: any, index: number) => (
                                    <div key={item["_container"]}
                                         className={'md:odd:translate-y-5 odd:rotate-1 even:-rotate-2 w-fit'}>
                                        <ProductCard title={item["v2-listing-card--title"]}
                                                     id={item["_container"]}
                                                     url={item["_container_link"]}
                                                     img={item["wt-image--cover"]}
                                                     category={""}
                                                     price={item['currency-value']}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section id={'category-pride'} className={'articleWindow-cloud'}>
                <div className={'bg-secondary-subtle py-8'}>
                    <div className={'container flex md:flex-row flex-col mx-auto p-global py-4 relative gap-4'}>
                        <PrideCircle className={'w-36 right-5 -top-38 absolute bottom-80 rotate-16'}/>
                        <div
                            className={'min-w-70 md:max-w-86 flex flex-col bg-white rounded-lg p-4 h-fit md:sticky top-4 mx-auto'}>
                            <div className={'flex w-full justify-between space-between mb-4'}>
                                <h2 className={'text-sm'}>
                                    <span className={'text-pink-500'}>Be loud</span>
                                    <br/>
                                    <span className={'text-sky-400'}>Be proud</span>
                                </h2>
                                <img src={'/img/global/rainbow-ui-sticker.svg'}
                                     className={'right-0 -top-2 md:absolute bottom-80 md:w-fit w-20 rotate-16'}/>
                            </div>
                            <p className={'opacity-75'}>
                                Sei laut und zeige mit diesen Aufklebern, wer du bist ❤
                            </p>
                            <a href={'https://sparkysbarn.etsy.com/?section_id=54686929'} target={'_blank'}
                               className={'py-2 mt-12 px-2 text-center bg-sky-100 hover:bg-sky-200/90 text-sky-800 rounded-xl'}>
                                Alle Pride Sticker
                            </a>
                        </div>
                        <div className={'grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-center md:justify-start'}>
                            {
                                prideItems.map((item: any, index: number) => (
                                    <div key={item["_container"]}>
                                        <ProductCard title={item["v2-listing-card--title"]}
                                                     id={item["_container"]}
                                                     url={item["_container_link"]}
                                                     img={item["wt-image--cover"]}
                                                     category={"Pride"}
                                                     price={item['currency-value']}
                                                     key={index}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section id={'category-adhd'}>
                <div>
                    <div className={'container mx-auto p-global py-12'}>
                        <h2 className={'mb-4'}>ADHD Sticker</h2>
                        <div className={'grid grid-cols-2 md:grid-cols-4 gap-4 justify-center md:justify-start'}>
                            {
                                adhdItems.map((item: any, index: number) => (
                                    <ProductCard title={item["v2-listing-card--title"]}
                                                 id={item["_container"]}
                                                 url={item["_container_link"]}
                                                 img={item["wt-image--cover"]}
                                                 category={"Adhd"}
                                                 price={item['currency-value']}
                                                 className={'max-w-56'}
                                                 key={index}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className={'container mx-auto p-global py-12'}>
                        <h2 className={'mb-4'}>Wie wär's hier mit?</h2>
                        <div className={'grid grid-cols-2 md:grid-cols-4 gap-4 justify-center md:justify-start'}>
                            {
                                items.filter((i) => {
                                    return wieWaersStickerIds.includes(i.id)
                                }).map((item: any, index: number) => (
                                    <ProductCard title={item.title}
                                                 id={item.id}
                                                 url={item.url}
                                                 img={item.img}
                                                 category={item.category}
                                                 className={'max-w-56'}
                                                 key={index}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className={'overflow-hidden'}>
                <div className={'-translate-x-[10%]'}>
                    <CurvedMarquee/>
                </div>
            </section>
            <section id={'category-feminism'}>
                <div>
                    <div className={'container mx-auto p-global py-12'}>
                        <h2 className={'mb-4'}>Feministische Sticker</h2>
                        <div className={'grid grid-cols-2 md:grid-cols-4 gap-4 justify-center md:justify-start'}>
                            {
                                feminismItems.map((item: any, index: number) => (
                                    <ProductCard title={item["v2-listing-card--title"]}
                                                 id={item["_container"]}
                                                 url={item["_container_link"]}
                                                 img={item["wt-image--cover"]}
                                                 category={"Feminism"}
                                                 price={item['currency-value']}
                                                 className={'max-w-56'}
                                                 key={index}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className={'pt-16 pb-20 my-16 bg-blue-100'}>
                <div className={'container p-global text-center mx-auto uppercase flex flex-col gap-2'}>
                    <span className={'text-secondary font-bold'}>
                        Ohne KI gestaltet und mit viel Liebe produziert
                    </span>
                    <div className={'relative'}>
                        <span className={'md:text-8xl text-6xl font-display md:leading-[6rem]'}>
                            Selbst hergestellt, <br/> <span className={'doodlebadged'}>nur</span> für <span
                            className={'underdoodled'}>dich</span>.
                        </span>
                    </div>

                </div>
            </section>
            <section id={'reviews'}>
                <div className={'container mx-auto p-global pb-32 flex flex-col gap-6'}>
                    <div>
                        <span
                            className={'text-primary uppercase font-bold text-sm'}>
                            Vielfalt, Freude & süße Sticker
                        </span>
                        <h2 className={'mb-4'}>So seht ihr SparkysBarn</h2>
                    </div>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}>
                        <div className={'flex flex-col gap-8'}>
                            <RatingCard name={'Julian'} date={'25.05.2025'} rating={5}
                                        reviewContent={<p><b>Kreative Sticker</b>, die toll aussehen, Freude bringen und
                                            meine Freund:innen zum Lächeln bringen. Kam auch super als Geschenk an.
                                        </p>}/>
                            <div
                                style={{backgroundImage: 'url(https://i.etsystatic.com/58598025/r/il/679ee0/7156112742/il_1588xN.7156112742_s3wm.jpg)'}}
                                className={'h-80 overflow-hidden rounded-xl justify-center bg-cover bg-center'}/>
                            <RatingCard name={'Lea'} date={'22.10.2025'} rating={5}
                                        reviewContent={<p>Richtig, richtig schöne, hochwertige Sticker!</p>}
                            />
                        </div>
                        <div className={'flex flex-col gap-8'}>
                            <div
                                style={{backgroundImage: 'url(https://i.etsystatic.com/58598025/r/il/5eabff/7140499215/il_1588xN.7140499215_in6z.jpg)'}}
                                className={'h-115 overflow-hidden rounded-xl justify-center bg-cover bg-center'}/>
                            <RatingCard name={'Celina'} date={'27.07.2025'} rating={5}
                                        reviewContent={<p>Super süße und kreative Designs! Sehr gute Qualität und
                                            schneller Versand. Große Empfehlung und perfekt als kleines Geschenk.</p>}/>
                        </div>
                        <div className={'flex flex-col gap-8'}>
                            <RatingCard name={'Hannah'} date={'01.10.2025'} rating={5}
                                        reviewContent={<p>Tolle Sticker in top Qualität. Versand mit persönlicher
                                            Ansprache und kleinen Goodies. Werde auf jeden Fall nochmal
                                            bestellen!</p>}/>
                            <div
                                style={{backgroundImage: 'url(https://i.etsystatic.com/58598025/r/il/aab93b/7043110821/il_1588xN.7043110821_ixzr.jpg)'}}
                                className={'h-80 overflow-hidden rounded-xl justify-center bg-cover bg-center'}/>
                            <RatingCard name={'Simon'} date={'21.07.2025'} rating={5}
                                        reviewContent={<p>Die Aufkleber haben eine tolle Qualität und es ist für jede*n
                                            etwas dabei!</p>}/>
                        </div>
                    </div>
                    <div className={'flex w-full justify-center text-lg'}>
                        <a href={'https://sparkysbarn.etsy.com/#reviews'} target={'_blank'}
                           className={'py-3 px-6 bg-primary hover:bg-primary/90 text-white rounded-xl'}>
                            Alle Bewertungen bei Etsy ansehen
                        </a>
                    </div>
                </div>
            </section>
            <section id={'faq'}>
                <div className={'container mx-auto p-global'}>
                    <div className={'flex flex-row gap-8 justify-center flex-wrap'}>
                        <div
                            className={'w-fit h-fit p-14 pb-16 font-display font-bold text-primary uppercase relative'}>
                            <img src={'/img/global/cloud_bg.svg'}
                                 className={'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] absolute -z-1'}/>
                            <p className={'text-4xl text-center -rotate-3'}>Noch <br/> Fragen?</p>
                        </div>
                        <SparkyAccordion props={accordionItems}/>
                    </div>
                </div>
            </section>
        </>
    );
}
