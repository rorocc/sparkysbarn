"use client";

import { useRef, useState, useEffect, useCallback, ReactNode } from "react";

// ─── Arrow Button ─────────────────────────────────────────────────────────────

function ArrowButton({
                         direction,
                         onClick,
                         visible,
                     }: {
    direction: "left" | "right";
    onClick: () => void;
    visible: boolean;
}) {
    return (
        <button
            onClick={onClick}
            aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
            className={[
                "hidden md:flex",
                "absolute top-1/2 -translate-y-1/2 z-20",
                direction === "left" ? "-left-5" : "-right-5",
                "w-11 h-11 rounded-full items-center justify-center",
                "bg-white border border-zinc-200 shadow-lg",
                "transition-all duration-300 ease-out",
                "hover:scale-110 hover:shadow-xl active:scale-95",
                visible
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none",
            ].join(" ")}
        >
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className={direction === "left" ? "" : "rotate-180"}
            >
                <path
                    d="M11 4L6 9L11 14"
                    stroke="#111"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

// ─── Dot Indicators ───────────────────────────────────────────────────────────

function Dots({
                  count,
                  active,
                  onSelect,
              }: {
    count: number;
    active: number;
    onSelect: (i: number) => void;
}) {
    if (count <= 1) return null;

    return (
        <div
            className="flex items-center justify-center gap-2 mt-6"
            role="tablist"
            aria-label="Slides"
        >
            {Array.from({ length: count }).map((_, i) => (
                <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => onSelect(i)}
                    className={[
                        "rounded-full transition-all duration-300 ease-out",
                        i === active
                            ? "w-6 h-2.5 bg-zinc-900"
                            : "w-2.5 h-2.5 bg-zinc-300 hover:bg-zinc-400",
                    ].join(" ")}
                />
            ))}
        </div>
    );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

interface CarouselProps {
    children: ReactNode;
    /** Matches the background color the carousel sits on — used for the edge fade gradient. Defaults to white. */
    fadeColor?: string;
    /** Optional headline above the carousel. */
    title?: string;
    /** Optional tagline / eyebrow text above the title. */
    tagline?: string;
    className?: string;
}

export default function Carousel({
                                     children,
                                     fadeColor = "var(--background)",
                                     title,
                                     tagline,
                                     className,
                                 }: CarouselProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeDot, setActiveDot] = useState(0);
    const [dotCount, setDotCount] = useState(1);

    const syncState = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;

        const scrollLeft = el.scrollLeft;
        const viewWidth = el.clientWidth;
        const maxScroll = el.scrollWidth - viewWidth;

        setCanScrollLeft(scrollLeft > 4);
        setCanScrollRight(scrollLeft < maxScroll - 4);

        const views = maxScroll > 0 ? Math.round(el.scrollWidth / viewWidth) : 1;
        setDotCount(views);

        const active =
            maxScroll > 0 ? Math.round((scrollLeft / maxScroll) * (views - 1)) : 0;
        setActiveDot(active);
    }, []);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        syncState();
        el.addEventListener("scroll", syncState, { passive: true });
        const ro = new ResizeObserver(syncState);
        ro.observe(el);
        return () => {
            el.removeEventListener("scroll", syncState);
            ro.disconnect();
        };
    }, [syncState]);

    const scrollByView = (dir: "left" | "right") => {
        const el = trackRef.current;
        if (!el) return;
        el.scrollBy({
            left: dir === "left" ? -el.clientWidth : el.clientWidth,
            behavior: "smooth",
        });
    };

    const scrollToView = (index: number) => {
        const el = trackRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        el.scrollTo({
            left: (index / (dotCount - 1)) * maxScroll,
            behavior: "smooth",
        });
    };

    // Build CSS gradient strings from the provided fadeColor
    const fadeRight = `linear-gradient(to left, ${fadeColor}, transparent)`;
    const fadeLeft = `linear-gradient(to right, ${fadeColor}, transparent)`;

    return (
        <div className={className}>
            {/* Optional header */}
            {(tagline || title) && (
                <div>
                    {tagline && (
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-1">
                            {tagline}
                        </p>
                    )}
                    {title && (
                        <h2
                            className="text-3xl sm:text-4xl font-black text-zinc-900 leading-tight"

                        >
                            {title}
                        </h2>
                    )}
                </div>
            )}

            <div className="relative">
                <ArrowButton
                    direction="left"
                    onClick={() => scrollByView("left")}
                    visible={canScrollLeft}
                />
                <ArrowButton
                    direction="right"
                    onClick={() => scrollByView("right")}
                    visible={canScrollRight}
                />

                {/* Track */}
                <div
                    ref={trackRef}
                    className={[
                        "flex gap-4 overflow-x-auto scroll-smooth",
                        "scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                        "snap-x snap-mandatory md:snap-none",
                    ].join(" ")}
                    style={{ WebkitOverflowScrolling: "touch" }}
                >
                    {children}
                    {/* Right padding spacer */}
                    <div className="flex-shrink-0 w-1" aria-hidden="true" />
                </div>

                {/* Edge fade — right */}
                <div
                    className={[
                        "absolute top-0 right-0 h-full w-8 pointer-events-none transition-opacity duration-300",
                        canScrollRight ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    style={{ background: fadeRight }}
                    aria-hidden="true"
                />
                {/* Edge fade — left */}
                <div
                    className={[
                        "absolute top-0 left-0 h-full w-8 pointer-events-none transition-opacity duration-300",
                        canScrollLeft ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    style={{ background: fadeLeft }}
                    aria-hidden="true"
                />
            </div>

            <Dots count={dotCount} active={activeDot} onSelect={scrollToView} />
        </div>
    );
}