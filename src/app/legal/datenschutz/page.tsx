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
                                Datenschutz
                            </h1>
                            <div className={'bg-white rounded-3xl p-8 flex flex-col gap-4 max-w-[75ch]'}>
                                <h2>1. Allgemeine Hinweise</h2>
                                <p>
                                    Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend
                                    informieren wir Sie darüber,
                                    welche Daten beim Besuch dieser Website verarbeitet werden.
                                </p>
                                <p>
                                    Diese Website dient ausschließlich der Präsentation der Produkte von SparkysBarn.
                                    Beim Anklicken eines Produkts
                                    werden Sie zu unserem Etsy-Shop weitergeleitet.
                                </p>

                                <h2>2. Verantwortlicher</h2>
                                <p>
                                    Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                                </p>
                                <p>
                                    Christopher Rock (SparkysBarn / Sparky's Studio)<br/>
                                    Lindenauer Markt 22<br/>
                                    04177 Leipzig <br/>
                                    <br/>
                                    kontakt@sparkysbarn.de
                                </p>

                                <h2>3. Hosting über GitHub Pages</h2>
                                <p>
                                    Diese Website wird über GitHub (GitHub Pages) bereitgestellt.
                                </p>
                                <p>
                                    Beim Aufruf der Website werden automatisch sogenannte Server-Logfiles erfasst. Dazu
                                    gehören insbesondere:
                                </p>
                                <ul>
                                    <li>IP-Adresse</li>
                                    <li>Datum und Uhrzeit der Anfrage</li>
                                    <li>Browsertyp und Browserversion</li>
                                    <li>verwendetes Betriebssystem</li>
                                    <li>Referrer-URL</li>
                                </ul>
                                <p>
                                    Diese Daten sind technisch erforderlich, um die Website bereitzustellen sowie die
                                    Stabilität und Sicherheit zu gewährleisten.
                                    Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub:
                                    <a href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement"
                                       target="_blank" rel="noopener noreferrer">
                                        https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement
                                    </a>
                                </p>

                                <h2>4. Domain-Registrierung und DNS über netcup</h2>
                                <p>
                                    Die Domain dieser Website wird über netcup verwaltet.
                                </p>
                                <p>
                                    Im Rahmen der technischen Bereitstellung können ebenfalls Logdaten (z.B. IP-Adresse)
                                    verarbeitet werden. Diese Verarbeitung erfolgt zur Aufrechterhaltung des
                                    Serverbetriebs und der Sicherheit.
                                    Weitere Informationen: <a
                                    href="https://www.netcup.de/kontakt/datenschutzerklaerung.php" target="_blank"
                                    rel="noopener noreferrer">
                                    https://www.netcup.de/kontakt/datenschutzerklaerung.php
                                </a>
                                </p>

                                <h2>5. Einbindung von Bildern (Etsy)</h2>
                                <p>
                                    Die auf dieser Website dargestellten Produktbilder werden direkt von den Servern von
                                    Etsy geladen (sogenanntes Hotlinking).
                                    Beim Aufruf einer Seite mit eingebundenen Bildern wird eine direkte Verbindung zu
                                    den Servern von Etsy hergestellt.
                                    Dabei können folgende Daten an Etsy übermittelt werden:
                                </p>
                                <ul>
                                    <li>Ihre IP-Adresse</li>
                                    <li>Datum und Uhrzeit des Zugriffs</li>
                                    <li>Browserinformationen</li>
                                    <li>Referrer-URL</li>
                                </ul>
                                <p>
                                    Weitere Informationen zur Datenverarbeitung durch Etsy finden Sie hier: <a
                                    href="https://www.etsy.com/legal/privacy" target="_blank"
                                    rel="noopener noreferrer">
                                    https://www.etsy.com/legal/privacy
                                </a>
                                </p>

                                <h2>6. Weiterleitung zu Etsy</h2>
                                <p>
                                    Beim Anklicken eines Produkts werden Sie auf unseren Etsy-Shop weitergeleitet.
                                    Ab diesem Zeitpunkt erfolgt die Datenverarbeitung ausschließlich durch Etsy.
                                    Es gelten die Datenschutzbestimmungen von Etsy.
                                </p>

                                <h2>7. Verwendung von Google Fonts</h2>
                                <p>
                                    Diese Website verwendet Google Fonts zur einheitlichen Darstellung von Schriftarten.
                                    Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriftarten von Servern von
                                    Google.
                                    Dadurch kann Google Kenntnis darüber erlangen, dass über Ihre IP-Adresse diese
                                    Website aufgerufen wurde. <br/> <br/>
                                    Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank"
                                                              rel="noopener noreferrer">
                                    https://policies.google.com/privacy
                                </a>
                                </p>

                                <h2>8. Tracking</h2>
                                <p>
                                    Auf dieser Website wird SimpleAnalytics verwendet – ein datenschutzfreundlicher Analysedienst der Simple Analytics B.V. (Niederlande). Simple Analytics erfasst keine personenbezogenen Daten und setzt keine Cookies. Es werden ausschließlich aggregierte, anonyme Nutzungsstatistiken erhoben – etwa Seitenaufrufe und Herkunftsland des Besuchs – ohne individuelle Nutzerprofile zu erstellen oder IP-Adressen zu speichern.
                                    Da keine personenbezogenen Daten verarbeitet werden, ist für den Einsatz von Simple Analytics keine Einwilligung nach Art. 6 DSGVO erforderlich.
                                    Weitere Informationen zum Datenschutz bei Simple Analytics findest du unter: simpleanalytics.com/privacy
                                </p>

                                <h2>9. Ihre Rechte nach DSGVO</h2>
                                <p>
                                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
                                </p>
                                <ul>
                                    <li>Auskunft über Ihre gespeicherten Daten</li>
                                    <li>Berichtigung unrichtiger Daten</li>
                                    <li>Löschung Ihrer Daten</li>
                                    <li>Einschränkung der Verarbeitung</li>
                                    <li>Datenübertragbarkeit</li>
                                    <li>Widerspruch gegen die Verarbeitung</li>
                                </ul>
                                <p>
                                    Außerdem steht Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu.
                                </p>

                                <h2>10. SSL- bzw. TLS-Verschlüsselung</h2>
                                <p>
                                    Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.
                                    Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres
                                    Browsers.
                                </p>

                                <h2>11. Hinweis</h2>
                                <p>
                                    Diese Datenschutzerklärung stellt keine Rechtsberatung dar. Trotz sorgfältiger
                                    Erstellung
                                    kann keine Gewähr für Vollständigkeit und Richtigkeit übernommen werden.
                                    Eine rechtliche Prüfung wird empfohlen.
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
