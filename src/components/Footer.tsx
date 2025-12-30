import GooseProgressFlag from "@/components/art/GooseProgressFlag";
import Link from "next/link";
import categories from "@/app/data/categories.json"

const year = new Date().getFullYear()

export default function Footer(){
    return(
        <footer className={'md:mt-8 mt-50 text-white'}>
            <div className={'relative '}>
                <img src={'/grass.svg'}
                     aria-hidden={true} alt={''}/>
                <div className={'absolute md:bottom-8 -bottom-3 translate-y-16 left-16 scale-50 origin-left'}>
                    <GooseProgressFlag/>
                </div>
            </div>
            <div style={{backgroundColor: '#95C121'}}>
                <div className={'max-w-96 md:max-w-156 w-full mx-auto pb-16 flex flex-row justify-between flex-wrap gap-16'}>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'font-bold text-xl pb-2'}>Social Media</span>
                        <div className={'flex flex-row gap-2'}>
                            <a href={'https://sparkysbarn.etsy.com'} target={'_blank'}
                               className={'w-9 h-9 bg-sparky-pink hover:bg-primary transition hover:scale-110 rounded-full flex justify-center items-center '}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.72823 1.63067C5.72823 1.41333 5.75023 1.28267 6.11956 1.28267H11.0976C11.9669 1.28267 12.4456 2.022 12.7929 3.41333L13.0756 4.522H13.9236C14.0762 1.36933 14.2069 0 14.2069 0C14.2069 0 12.0762 0.239333 10.8156 0.239333H4.44556L1.03223 0.130667V1.044L2.18423 1.26133C2.98889 1.41333 3.18423 1.58733 3.24956 2.32667C3.24956 2.32667 3.31489 4.50067 3.31489 8.08733C3.31489 11.674 3.24956 13.8267 3.24956 13.8267C3.24956 14.4787 2.98889 14.718 2.18423 14.87L1.03289 15.0867V16L4.44623 15.8913H10.1416C11.4242 15.8913 14.4022 16 14.4022 16C14.4676 15.2173 14.9022 11.674 14.9676 11.2827H14.1629L13.3149 13.2173C12.6409 14.7393 11.6629 14.848 10.5756 14.848H7.33623C6.24956 14.848 5.72756 14.4133 5.72756 13.4787V8.522C5.72756 8.522 8.14089 8.522 8.92289 8.58733C9.53156 8.63067 9.90089 8.80467 10.0969 9.65267L10.3576 10.7833H11.2922L11.2269 7.93533L11.3576 5.066H10.4229L10.1182 6.32667C9.92289 7.15267 9.79223 7.30467 8.94423 7.392C7.83556 7.50067 5.72689 7.47867 5.72689 7.47867V1.63067H5.72823Z"
                                        fill="white"/>
                                </svg>
                            </a>
                            <a href={'https://instagram.com/sparkysbarn_shop'} target={'blank'}
                               className={'w-9 h-9 bg-sparky-pink hover:bg-primary transition hover:scale-110 rounded-full flex justify-center items-center '}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1753_2161)">
                                        <path
                                            d="M8 1.44133C10.136 1.44133 10.3893 1.44933 11.2327 1.488C12.1047 1.528 13.0027 1.72667 13.638 2.362C14.2793 3.00333 14.472 3.89267 14.512 4.76733C14.5507 5.61067 14.5587 5.864 14.5587 8C14.5587 10.136 14.5507 10.3893 14.512 11.2327C14.4727 12.1 14.2693 13.0067 13.638 13.638C12.9967 14.2793 12.108 14.472 11.2327 14.512C10.3893 14.5507 10.136 14.5587 8 14.5587C5.864 14.5587 5.61067 14.5507 4.76733 14.512C3.90667 14.4727 2.988 14.2647 2.362 13.638C1.724 13 1.528 12.102 1.488 11.2327C1.44933 10.3893 1.44133 10.136 1.44133 8C1.44133 5.864 1.44933 5.61067 1.488 4.76733C1.52733 3.90333 1.73267 2.99133 2.362 2.362C3.002 1.722 3.89467 1.528 4.76733 1.488C5.61067 1.44933 5.864 1.44133 8 1.44133ZM8 0C5.82733 0 5.55467 0.00933333 4.70133 0.048C3.46467 0.104667 2.23667 0.448667 1.34267 1.34267C0.445333 2.24 0.104667 3.46533 0.048 4.70133C0.00933333 5.55467 0 5.82733 0 8C0 10.1727 0.00933333 10.4453 0.048 11.2987C0.104667 12.534 0.45 13.7653 1.34267 14.6573C2.23933 15.554 3.46667 15.8953 4.70133 15.952C5.55467 15.9907 5.82733 16 8 16C10.1727 16 10.4453 15.9907 11.2987 15.952C12.5347 15.8953 13.764 15.5507 14.6573 14.6573C15.5553 13.7593 15.8953 12.5347 15.952 11.2987C15.9907 10.4453 16 10.1727 16 8C16 5.82733 15.9907 5.55467 15.952 4.70133C15.8953 3.46467 15.5507 2.236 14.6573 1.34267C13.762 0.447333 12.5313 0.104 11.2987 0.048C10.4453 0.00933333 10.1727 0 8 0Z"
                                            fill="white"/>
                                        <path
                                            d="M8.00009 3.89209C5.73142 3.89209 3.89209 5.73142 3.89209 8.00009C3.89209 10.2688 5.73142 12.1081 8.00009 12.1081C10.2688 12.1081 12.1081 10.2688 12.1081 8.00009C12.1081 5.73142 10.2688 3.89209 8.00009 3.89209ZM8.00009 10.6668C6.52742 10.6668 5.33342 9.47276 5.33342 8.00009C5.33342 6.52742 6.52742 5.33342 8.00009 5.33342C9.47276 5.33342 10.6668 6.52742 10.6668 8.00009C10.6668 9.47276 9.47276 10.6668 8.00009 10.6668Z"
                                            fill="white"/>
                                        <path
                                            d="M12.2705 4.68953C12.8007 4.68953 13.2305 4.25972 13.2305 3.72953C13.2305 3.19934 12.8007 2.76953 12.2705 2.76953C11.7404 2.76953 11.3105 3.19934 11.3105 3.72953C11.3105 4.25972 11.7404 4.68953 12.2705 4.68953Z"
                                            fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1753_2161">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href={'https://tiktok.com/@sparkysbarn_shop'} target={'_blank'}
                               className={'w-9 h-9 bg-sparky-pink hover:bg-primary transition hover:scale-110 rounded-full flex justify-center items-center '}>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8.36899C14.3647 8.36899 12.8486 7.84605 11.6116 6.95767V13.3682C11.6116 16.5701 9.00688 19.174 5.80581 19.174C4.56881 19.174 3.42125 18.7841 2.47859 18.122C0.981651 17.0708 0 15.3323 0 13.3682C0 10.1664 2.60474 7.56165 5.80658 7.56165C6.07263 7.56165 6.33257 7.58382 6.58869 7.61822V8.36516V10.8384C6.34098 10.7612 6.07951 10.7161 5.80658 10.7161C4.3448 10.7161 3.1552 11.9057 3.1552 13.3682C3.1552 14.3866 3.73318 15.2711 4.57722 15.7153C4.94495 15.9087 5.36315 16.0196 5.80734 16.0196C7.23547 16.0196 8.40061 14.8835 8.45413 13.4676L8.45642 0.826172H11.6109C11.6109 1.09987 11.6376 1.36669 11.685 1.62663C11.9075 2.82847 12.6208 3.85981 13.6093 4.50431C14.2974 4.95308 15.1185 5.21532 15.9992 5.21532L16 8.36899Z"
                                        fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className={'flex flex-row gap-12'}>
                        <div className={'flex flex-col'}>
                            <span className={'font-bold text-xl pb-2'}>Seiten</span>
                            <ul>
                                <li>
                                    <Link href={'/'}>Startseite</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={'flex flex-col'}>
                            <span className={'font-bold text-xl pb-2'}>Kategorien</span>
                            <ul>
                                {categories.map(category => (
                                    <li key={'footerLink_'+ category.label}>
                                        <a href={'/#'+category.id} target={'_self'}>
                                            {category.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'w-full mx-auto pb-16 text-center flex flex-col gap-4 p-global'}>
                    <img className={'max-w-120 w-full mx-auto'} src={'/img/footer/sparkys_wordmark.svg'}/>
                    <p>© SparkysBarn {year} – Designed & powered by <a target={'_blank'} href={'https://chrisrock.rocks'}>chrisrock.rocks</a></p>
                </div>
            </div>
        </footer>
    )
}