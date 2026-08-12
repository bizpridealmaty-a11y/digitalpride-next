'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations, useLocale } from '@/lib/locale-context';
import { localizedPath } from '@/lib/i18n';
import { WaveText } from '@/components/motion/AnimatedHeading';

export default function Hero() {
    const t = useTranslations();
    const locale = useLocale();
    const lp = (path: string) => localizedPath(path, locale);
    const ref = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // hero.mp4 весит ~14 МБ. Раньше он грузился сразу (preload="auto" + fetchpriority="high"),
    // забирая канал у контента: страница весила 14,5 МБ, и это било по LCP, особенно на мобильных.
    // Теперь сразу показываем постер (~140 КБ), а видео цепляем ПОСЛЕ загрузки страницы, в простое,
    // и только там, где это уместно: не на мобильных, не при экономии трафика, не на медленной сети.
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
        const saveData = conn?.saveData === true;
        const slowNetwork = /(^|-)2g$/.test(conn?.effectiveType ?? '');
        const smallScreen = window.matchMedia('(max-width: 768px)').matches;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (saveData || slowNetwork || smallScreen || reduceMotion) return;

        let cancelled = false;
        const start = () => { if (!cancelled) setShowVideo(true); };
        const schedule = () => {
            const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => void }).requestIdleCallback;
            if (ric) ric(start, { timeout: 2500 });
            else setTimeout(start, 1200);
        };

        if (document.readyState === 'complete') schedule();
        else window.addEventListener('load', schedule, { once: true });

        return () => { cancelled = true; window.removeEventListener('load', schedule); };
    }, []);

    // Надёжный автозапуск: браузеры блокируют autoplay, если muted не выставлен как DOM-свойство
    // (известный баг с JSX-пропом muted). Ставим свойство и вызываем play() принудительно.
    useEffect(() => {
        if (!showVideo) return;
        const v = videoRef.current;
        if (!v) return;
        v.muted = true;
        v.defaultMuted = true;
        const tryPlay = () => { const p = v.play(); if (p && typeof p.catch === 'function') p.catch(() => { }); };
        tryPlay();
        v.addEventListener('loadeddata', tryPlay);
        v.addEventListener('canplay', tryPlay);
        return () => { v.removeEventListener('loadeddata', tryPlay); v.removeEventListener('canplay', tryPlay); };
    }, [showVideo]);

    const islands = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: t.islandCases,
            subtitle: t.islandCasesSub,
            href: lp("/cases"),
            delay: 0.3,
            yOffset: [0, -12, 0],
            color: "from-red-600 to-red-700",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: t.islandServices,
            subtitle: t.islandServicesSub,
            href: "#services",
            delay: 0.5,
            yOffset: [0, -8, 0],
            color: "from-white/15 to-white/5",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: t.islandContacts,
            subtitle: t.islandContactsSub,
            href: "tel:+77070357777",
            delay: 0.7,
            yOffset: [0, -15, 0],
            color: "from-white/15 to-white/5",
        },
    ];

    return (
        <section ref={ref} className="relative overflow-hidden bg-black text-white pt-32 pb-16 lg:pt-48 lg:pb-24 min-h-[94vh] flex items-end">
            {/* SEO: скрытый осмысленный текст для поисковиков (видео не индексируется как контент) */}
            <p className="sr-only">{t.heroSrOnly}</p>

            {/* Background: постер показываем всегда, видео — только когда решили его грузить (см. useEffect выше) */}
            <motion.div style={{ y: bgY, opacity }} className="absolute inset-0 z-0" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/videos/hero-poster.jpg"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        filter: 'brightness(0.55)',
                        objectPosition: 'center top',
                        backgroundColor: '#000',
                    }}
                />
                {showVideo && (
                    <video
                        ref={videoRef}
                        src="/videos/hero.mp4"
                        poster="/videos/hero-poster.jpg"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                        tabIndex={-1}
                        onPlaying={(e) => { e.currentTarget.style.opacity = '1'; }}
                        onCanPlay={(e) => { e.currentTarget.style.opacity = '1'; }}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                        style={{
                            opacity: 0,
                            filter: 'brightness(0.55)',
                            objectPosition: 'center top',
                            backgroundColor: '#000',
                        }}
                    />
                )}
                {/* Vignette overlay — darkened edges for text contrast */}
                <div className="absolute inset-0" style={{
                    background: `
                        radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.75) 70%, rgba(0,0,0,0.95) 100%)
                    `,
                }}></div>
                {/* Bottom fade to black for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-48" style={{
                    background: 'linear-gradient(to top, #000 0%, transparent 100%)',
                }}></div>
                {/* Left side darken for text readability */}
                <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.05) 65%, transparent 80%)',
                }}></div>
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    <motion.div
                        style={{ y: textY, opacity }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-3/5 text-left"
                    >
                        <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900 }}>
                            <WaveText text={t.heroHeadline} immediate /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">{t.heroAccent}</span>
                        </h1>
                    </motion.div>

                    {/* Floating navigation islands */}
                    <div className="w-full lg:w-2/5 hidden md:flex flex-col items-end gap-5 mt-32 self-end">
                        {islands.map((island, i) => (
                            <motion.a
                                key={i}
                                href={island.href}
                                initial={{ opacity: 0, x: 60, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ delay: island.delay, duration: 0.6, type: "spring", stiffness: 80 }}
                                className="group w-full max-w-[360px] cursor-pointer"
                            >
                                <motion.div
                                    animate={{ y: island.yOffset }}
                                    transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut" }}
                                    className={`relative bg-gradient-to-br ${island.color} backdrop-blur-xl rounded-3xl px-8 py-7 flex items-center gap-5 border border-white/10 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:border-white/25 group-hover:shadow-[0_20px_60px_-15px_rgba(239,68,68,0.3)]`}
                                >
                                    {/* Icon */}
                                    <div className="p-4 bg-white/10 rounded-2xl text-white group-hover:bg-white/20 transition-colors [&_svg]:w-8 [&_svg]:h-8">
                                        {island.icon}
                                    </div>
                                    {/* Text */}
                                    <div>
                                        <div className="text-white font-bold text-2xl leading-tight">{island.title}</div>
                                        <div className="text-white/50 text-base font-medium">{island.subtitle}</div>
                                    </div>
                                    {/* Arrow */}
                                    <svg className="w-7 h-7 text-white/30 ml-auto group-hover:text-white/70 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>

                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                                        background: 'radial-gradient(circle at 30% 50%, rgba(239,68,68,0.2) 0%, transparent 70%)',
                                    }}></div>
                                </motion.div>
                            </motion.a>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
