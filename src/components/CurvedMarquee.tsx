"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CurvedMarquee() {
    const textPathRef = useRef<SVGTextPathElement>(null);

    useEffect(() => {
        if (!textPathRef.current) return;

        gsap.to(textPathRef.current, {
            attr: { startOffset: "-50%" },
            duration: 8,
            ease: "linear",
            repeat: -1,
        });
    }, []);

    const text =
        "MIT LIEBE AUS LEIPZIG ❤ ";

    return (
        <svg viewBox="0 0 1000 150" width="120%" height="auto">
            <defs>
                <path
                    id="curve"
                    d="M 50 100 C 250 0, 750 200, 950 100"
                    fill="none"
                />
            </defs>

            <text fontSize="56" fontWeight="600" className={'font-display tracking-wide fill-primary'}>
                <textPath ref={textPathRef} href="#curve">
                    {text}
                    {text}
                    {text}
                    {text}
                    {text}
                    {text}
                    {text}
                </textPath>
            </text>
        </svg>
    );
}
