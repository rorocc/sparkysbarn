import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import categories from "@/app/data/categories.json";
import HeaderSparky from "@/components/art/HeaderSparky";
import TextScroller from "@/components/TextScroller";

export default function Home() {
    const tickerText = "CUTE STICKER  ❤  GANZ OHNE KI  ❤  LOVE & PRIDE  ❤  CUTE MENSCHEN  ❤  ";

    return (
        <>
            <div style={{
                backgroundColor: "#F1F7FF",
                backgroundImage: 'url(/img/global/index_header_decoration.svg)',
                backgroundSize: 'cover',
                overflow: 'hidden'
            }}>
                <div className={'mx-auto'}>
                    <div className={'container mx-auto pb-8 px-4 relative'}>
                        <Navbar/>
                        <div className={'py-16 m-auto w-fit md:text-left text-center'}>
                            <h1 className={'text-8xl text-black/75 font-bold font-display uppercase my-4 animate-fade-in-left'}>
                                Impressum
                            </h1>
                            <div className={'bg-white rounded-3xl p-8 flex flex-col gap-12 max-w-[75ch]'}>
                                <p>
                                    <b>Angaben gemäß § 5 TMG:</b>
                                    <br/>
                                    Christopher Rock (Sparky's Studio / SparkysBarn) <br/>
                                    Lindenauer Markt 22 <br/>
                                    04177 Leipzig<br/>
                                    Deutschland<br/>
                                    <br/>
                                    <b>Vertreten durch:</b><br/>
                                    Christopher Rock<br/>
                                    <br/>
                                    <b>Kontakt:</b><br/>
                                    E-Mail: kontakt@sparkysbarn.de<br/>
                                    <br/>
                                    <b>Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV:</b><br/>
                                    Christopher Rock<br/>
                                </p>
                                <p>
                                    <b>Haftungsausschluss</b><br/>
                                    Die auf dieser Website gezeigten Bilder und Produktinformationen stammen ausschließlich aus dem Etsy-Shop von SparkysBarn. Diese Website dient lediglich der Präsentation der Produkte. Bei einem Klick auf ein Produkt wirst du zu dem Etsy-Shop weitergeleitet, wo du das Produkt kaufen kannst. Ich übernehme keine Haftung für etwaige Transaktionen auf Etsy oder die dort angebotenen Produkte.
                                </p>
                                <p>
                                    <b>Urheberrecht</b><br/>
                                    Die auf dieser Website verwendeten Bilder und Inhalte gehören SparkysBarn und sind urheberrechtlich geschützt. Eine Nutzung der Inhalte dieser Website ohne ausdrückliche Genehmigung ist nicht gestattet.
                                </p>
                                <p>
                                    <b>Datenschutz</b><br/>
                                    Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Sofern auf dieser Website personenbezogene Daten (wie Name, E-Mail-Adresse) erhoben werden, erfolgt dies, soweit möglich, auf freiwilliger Basis. Diese Daten werden ausschließlich zur Kontaktaufnahme oder zur Erbringung der Dienstleistung verwendet. Weitere Informationen zum Datenschutz findest du in der Datenschutzerklärung.
                                </p>
                            </div>
                        </div>
                        <img src={'/img/decoration/flower.svg'} className={'absolute top-[5%] left-0 md:block hidden'}/>
                        <img src={'/img/decoration/flower.svg'}
                             className={'w-16 absolute md:top-[25%] top-[12%] left-[90%] animate-rotate'}/>
                    </div>
                </div>
            </div>
            <div className={'w-full overflow-hidden -translate-y-[33%] -rotate-1 mb-24'}>
                <div className={'bg-primary w-[120%]'}>
                    <TextScroller>
                        <p className={'font-bold text-4xl py-4 font-display text-primary-subtle'}>{tickerText.repeat(2)}</p>
                    </TextScroller>
                </div>
            </div>
        </>
    );
}
