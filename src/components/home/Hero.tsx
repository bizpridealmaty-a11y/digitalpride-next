'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Rotating benefits
    const allBenefits = [
        'Увеличение заявок', 'Рост ROI', 'Масштабирование рекламы',
        'Снижение стоимости лида', 'Рост продаж', 'Упаковка продукта',
        'Аналитика рекламы', 'Четкая маркетинговая стратегия', 'Рост конверсии сайта',
        'Автоматизация заявок', 'Построение воронки продаж', 'Генерация лидов',
        'Контроль рекламного бюджета', 'Оптимизация рекламных кампаний',
        'Привлечение целевой аудитории', 'Системный маркетинг',
        'Запуск рекламы за 24 часа', 'Прозрачная аналитика',
    ];

    const pickRandom = useCallback(() => {
        const shuffled = [...allBenefits].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 3);
    }, []);

    const [visibleBenefits, setVisibleBenefits] = useState(() => allBenefits.slice(0, 3));

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleBenefits(pickRandom());
        }, 2500);
        return () => clearInterval(interval);
    }, [pickRandom]);

    const islands = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: "Кейсы",
            subtitle: "12 проектов",
            href: "/case",
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
            title: "Услуги",
            subtitle: "7 направлений",
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
            title: "Контакты",
            subtitle: "Связаться",
            href: "tel:+77070357777",
            delay: 0.7,
            yOffset: [0, -15, 0],
            color: "from-white/15 to-white/5",
        },
    ];

    return (
        <section ref={ref} className="relative overflow-hidden bg-black text-white pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[90vh] flex items-center">
            {/* Background photo */}
            <motion.div style={{ y: bgY, opacity }} className="absolute inset-0 -top-16 z-0">
                <img
                    src="/images/founder-portrait.png"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.7)', objectPosition: 'center top' }}
                />
                {/* Vignette overlay — darkened edges */}
                <div className="absolute inset-0" style={{
                    background: `
                        radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.95) 100%)
                    `,
                }}></div>
                {/* Bottom fade to black for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-48" style={{
                    background: 'linear-gradient(to top, #000 0%, transparent 100%)',
                }}></div>
                {/* Left side darken for text readability */}
                <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, transparent 65%)',
                }}></div>
            </motion.div>

            {/* Subtle ambient glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3 z-[1]"></div>

            <div className="container relative z-10 mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    <motion.div
                        style={{ y: textY, opacity }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-3/5 text-left"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium mb-6 uppercase tracking-wider text-gray-300"
                        >
                            Top Digital Agency in Kazakhstan
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Маркетинг, который приносит <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">прибыль</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl font-medium">
                            Индивидуальная маркетинговая стратегия для роста вашего бизнеса в Алматы и по всему Казахстану. Мы не просто льем трафик, мы строим предсказуемый поток клиентов.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                            <button
                                data-toggle="modal"
                                data-target="#modal_form-feed"
                                className="px-8 py-4 text-white font-bold rounded-full transition-all transform hover:scale-105"
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: '9999px',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                                }}
                            >
                                Получить маркетинговую стратегию
                            </button>
                        </div>

                        {/* Rotating Benefits */}
                        <div className="mt-10 flex flex-wrap justify-start gap-6 text-sm text-gray-400 font-medium h-8 relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={visibleBenefits.join(',')}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="flex flex-wrap gap-6 absolute"
                                >
                                    {visibleBenefits.map((b) => (
                                        <div key={b} className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            {b}
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
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
                                className="group w-full max-w-[260px] cursor-pointer"
                            >
                                <motion.div
                                    animate={{ y: island.yOffset }}
                                    transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut" }}
                                    className={`relative bg-gradient-to-br ${island.color} backdrop-blur-xl rounded-2xl px-6 py-5 flex items-center gap-4 border border-white/10 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:border-white/25 group-hover:shadow-[0_20px_60px_-15px_rgba(239,68,68,0.3)]`}
                                >
                                    {/* Icon */}
                                    <div className="p-3 bg-white/10 rounded-xl text-white group-hover:bg-white/20 transition-colors">
                                        {island.icon}
                                    </div>
                                    {/* Text */}
                                    <div>
                                        <div className="text-white font-bold text-lg leading-tight">{island.title}</div>
                                        <div className="text-white/50 text-sm font-medium">{island.subtitle}</div>
                                    </div>
                                    {/* Arrow */}
                                    <svg className="w-5 h-5 text-white/30 ml-auto group-hover:text-white/70 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
