'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);

    const steps = [
        {
            num: "01",
            title: <>Глубокий<br />Аудит</>,
            desc: "Анализ бизнес-модели, спроса, конкурентов и исторических данных рекламы.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 mx-auto text-zinc-800">
                    <circle cx="10" cy="14" r="6" />
                    <path d="M14.5 18.5l4.5 4.5M8 12v4m4-2v2M6 14v2m12-10V4a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h2" />
                </svg>
            )
        },
        {
            num: "02",
            title: "Стратегия",
            desc: "Разработка digital-стратегии, медиаплана, прогноз РОМИ и стоимости заявки.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 mx-auto text-zinc-800">
                    <path d="M9 4.5l-4 2A2 2 0 004 8.3v10.4a2 2 0 002.8 1.9l2.4-1.2 4.8 2.4a2 2 0 001.8 0l4-2a2 2 0 001.2-1.9V7.5a2 2 0 00-2.8-1.9l-2.4 1.2-4.8-2.4a2 2 0 00-1.8 0z" />
                    <path d="M10 4v16M15 6v15" />
                </svg>
            )
        },
        {
            num: "03",
            title: <>Запуск<br />кампаний</>,
            desc: "Создание креативов, настройка аналитики, запуск рекламы на целевые аудитории.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 mx-auto text-zinc-800">
                    <path d="M11 5.5l5-2.5 3 3-2.5 5-7-1.5L7 12H4l2-4 1.5-2.5z" />
                    <path d="M8 18v3l3-2h4a2 2 0 002-2v-4" />
                    <path d="M15 13l3 3m-1-5l3 3" />
                </svg>
            )
        },
        {
            num: "04",
            title: "Оптимизация",
            desc: "Ежедневные сплит-тесты креативов, перераспределение бюджета.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 mx-auto text-zinc-800">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
            )
        },
        {
            num: "05",
            title: <>Рост<br />продаж</>,
            desc: "Увеличение объемов и количества заявок без потери качества.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 mx-auto text-zinc-800">
                    <path d="M3 3v18h18M7 16l5-5 4 4 5-5M16 10h5v5" />
                </svg>
            )
        }
    ];

    const cardVariants: any = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom beautiful cubic-bezier for smooth landing
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-32 bg-gradient-to-b from-[#f8f9fa] to-white overflow-hidden relative" ref={containerRef}>
            <div className="container mx-auto px-4 max-w-[1440px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 lg:mb-28 relative z-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] mb-6 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Прозрачный процесс <span className="text-[#f43f5e]">роста</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        Мы не скрываем, как работаем. Каждое действие задокументировано и согласовано с вами.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-y-12 lg:gap-x-4 relative min-h-[400px] lg:min-h-[500px] px-0 xl:px-8">

                    {steps.map((step, idx) => {
                        // Precise vertical translation to create the staircase from bottom-left to top-right
                        const yOffsets = [
                            "translate-y-0 lg:translate-y-[200px]",    // Step 1: Lowest
                            "translate-y-0 lg:translate-y-[150px]",    // Step 2
                            "translate-y-0 lg:translate-y-[100px]",    // Step 3
                            "translate-y-0 lg:translate-y-[50px]",     // Step 4
                            "translate-y-0 lg:translate-y-[0px]"       // Step 5: Highest
                        ];

                        return (
                            <div
                                key={idx}
                                className={`w-full lg:w-1/5 flex justify-center relative ${yOffsets[idx]}`}
                            >
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover={{ y: -8, scale: 1.03 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    // Reduced height and paddings for a more laconic layout where texts fit centrally
                                    className="flex flex-col items-center justify-center bg-white rounded-[2rem] px-4 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100/80 hover:shadow-[0_20px_60px_rgba(244,63,94,0.12)] hover:border-[#f43f5e]/20 transition-all duration-500 w-full max-w-[280px] lg:max-w-full h-[360px] relative z-20 group"
                                >
                                    <div className="flex-grow flex flex-col items-center justify-center w-full relative">
                                        {/* Icon Area */}
                                        <motion.div variants={itemVariants} className="mb-6 flex justify-center w-full text-zinc-800 group-hover:text-[#f43f5e] transition-colors duration-500">
                                            {step.icon}
                                        </motion.div>

                                        {/* Number Circle with Coral Style */}
                                        <motion.div variants={itemVariants} className="mb-6 w-full flex justify-center">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f43f5e] to-[#e11d48] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(244,63,94,0.4)] relative group-hover:scale-110 transition-transform duration-500 z-20">
                                                <span className="font-extrabold text-lg tracking-tight relative z-10">{step.num}</span>
                                                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 border-[2px] border-white scale-90 group-hover:scale-100 transition-all duration-500"></div>
                                            </div>
                                        </motion.div>

                                        {/* Text Container */}
                                        <div className="text-center px-1 w-full flex flex-col items-center justify-center">
                                            <motion.h3 variants={itemVariants} className="text-lg font-extrabold text-[#111827] mb-3 group-hover:text-[#f43f5e] transition-colors duration-500 leading-tight">
                                                {step.title}
                                            </motion.h3>
                                            <motion.p variants={itemVariants} className="text-[13px] text-gray-500 leading-snug font-medium mx-auto max-w-[220px]">
                                                {step.desc}
                                            </motion.p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}

                    {/* Large Background Diagonal Arrow under all cards */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="hidden lg:block absolute bottom-[-40px] xl:left-[4%] xl:right-[4%] h-[120px] pointer-events-none z-0 left-0 right-0 overflow-visible"
                    >
                        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                            {/* Arrow Body */}
                            <motion.path
                                d="M 20,80 L 980,20"
                                stroke="url(#gradientBottomArrow)"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                            />
                            {/* Arrow Head */}
                            <motion.path
                                d="M 960,18 L 983,19 L 977,35"
                                stroke="url(#gradientBottomArrow)"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 1.2 }}
                            />
                            <defs>
                                <linearGradient id="gradientBottomArrow" x1="0" y1="80" x2="1000" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#f43f5e" stopOpacity="0.1" />
                                    <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.6" />
                                    <stop offset="1" stopColor="#e11d48" stopOpacity="1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
