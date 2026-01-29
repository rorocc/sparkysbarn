'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type FadeInProps = {
    children: React.ReactNode
    y?: number
    duration?: number
    delay?: number
    start?: string
    once?: boolean
}

export default function FadeIn({
                                   children,
                                   y = 30,
                                   duration = 0.8,
                                   delay = 0,
                                   start = 'top 85%',
                                   once = true,
                               }: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current,
                { opacity: 0, y },
                {
                    opacity: 1,
                    y: 0,
                    duration,
                    delay,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ref.current,
                        start,
                        toggleActions: once
                            ? 'play none none none'
                            : 'play reverse play reverse',
                    },
                }
            )
        }, ref)

        return () => ctx.revert()
    }, [y, duration, delay, start, once])

    return <div ref={ref}>{children}</div>
}
