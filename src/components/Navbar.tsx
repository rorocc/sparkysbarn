"use client";

import Image from "next/image";
import ButtonCTA from "@/components/ButtonCTA";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <nav className="mx-auto mt-8 bg-white px-2 py-1 rounded-full w-fit z-50 relative">
                <div className="flex flex-row items-center justify-between md:max-w-156 w-full gap-6 md:gap-12">
                    {/* Logo */}
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        <Image
                            src="/logo-word.webp"
                            alt="SparkysBarn – mit Liebe aus Leipzig"
                            width={256}
                            height={72}
                            priority
                            className="md:w-48 w-40"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex flex-row gap-6 text-black">
                        <Link href="/">Startseite</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/#faq">FAQ</Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <ButtonCTA url="https://sparkysbarn.etsy.com" label="Zum Shop" />
                    </div>

                    {/* Mobile: Hamburger Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-full focus:outline-none"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                    >
                        <span
                            className={`block h-0.5 w-5 bg-black rounded transition-all duration-300 ${
                                menuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-black rounded transition-all duration-300 ${
                                menuOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-black rounded transition-all duration-300 ${
                                menuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Popup */}
            <div
                className={`fixed rounded-l-3xl top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl flex flex-col p-8 gap-8 transition-transform duration-300 md:hidden ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button
                    className="self-end text-black font-bold text-2xl leading-none"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Menü schließen"
                >
                    ✕
                </button>

                <nav className="flex flex-col gap-4 text-5xl font-medium font-display uppercase text-zinc-700">
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        Startseite
                    </Link>
                    <Link href="/blog" onClick={() => setMenuOpen(false)}>
                        Blog
                    </Link>
                    <Link href="/#faq" onClick={() => setMenuOpen(false)}>
                        FAQ
                    </Link>
                    <Link href="https://sparkysbarn.etsy.com" target={'_blank'}
                          className={'flex flex-row gap-2 text-5xl font-medium font-display uppercase text-primary w-fit'} onClick={() => setMenuOpen(false)}>
                        <span>Zum Shop</span>
                        <svg width={'1.5rem'} id="Layer_1" fill={'currentColor'} viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                            <path
                                d="m12 5c-.552 0-1-.448-1-1v-3c0-.552.448-1 1-1s1 .448 1 1v3c0 .552-.448 1-1 1zm-5 5c0-.552-.448-1-1-1h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1zm1.433-3.458c.391-.391.391-1.023 0-1.414l-2.122-2.122c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l2.122 2.122c.391.391 1.023.391 1.414 0zm8.517-.077 2.121-2.121c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-2.121 2.121c-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0zm4.638 8.849-7.961-7.785c-1.421-1.206-3.627-.214-3.627 1.63v11.24c0 1.176 1.41 1.804 2.311 1.03l2.014-1.802 1.608 3.259c.587 1.142 2.073 1.46 3.093.709.824-.604 1.018-1.763.556-2.675l-1.424-2.91 2.64-.371c1.141-.156 1.607-1.527.791-2.325z"/>
                        </svg>
                    </Link>
                </nav>
            </div>
        </>
    );
}