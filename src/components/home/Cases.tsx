'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import NumberFlow from '@/components/motion/NumberFlow';

export default function Cases() {
    const locale = useLocale();
    const isKk = locale === 'kk';

    const cases = [
        {
            id: 1,
            client: isKk ? "Үй пловын жеткізу" : "Доставка домашнего плова",
            industry: isKk ? "Тамақ жеткізу" : "Доставка еды",
            image: "/images/cases/plov-delivery/cover.jpg",
            href: "/cases/plov-delivery/",
            problem: isKk
                ? "Тек қамту мен лайк емес, жеткізуге нақты тапсырыстар керек болды."
                : "Нужны были живые заказы на доставку, а не просто охваты и лайки.",
            solution: isKk
                ? ["Meta Ads", "WhatsApp трафигі", "Сатушы креативтер", "Жеткізу офферы"]
                : ["Meta Ads", "Трафик в WhatsApp", "Продающие креативы", "Оффер на доставку"],
            results: isKk
                ? [
                    { label: "WhatsApp-та жазылым", value: "427", highlight: "WhatsApp" },
                    { label: "Тапсырысқа айналуы", value: "14%", highlight: "Тапсырысқа" },
                    { label: "Жарнамаға қайтарым", value: "×6", highlight: "қайтарым" },
                ]
                : [
                    { label: "Переписок в WhatsApp", value: "427", highlight: "WhatsApp" },
                    { label: "Конверсия в заказ", value: "14%", highlight: "заказ" },
                    { label: "Возврат на рекламу", value: "×6", highlight: "рекламу" },
                ]
        },
        {
            id: 2,
            client: isKk ? "Лазерлік эпиляция студиясы" : "Студия лазерной эпиляции",
            industry: isKk ? "Сұлулық қызметтері" : "Бьюти-услуги",
            image: "/images/cases/laser-epilation/hero-cover.png",
            href: "/cases/laser-epilation/",
            problem: isKk
                ? "Қымбат өтінімдер — жарнама бюджеті кетті, ал жазылу көбеймеді."
                : "Дорогие заявки — рекламный бюджет уходил, а записей не прибавлялось.",
            solution: isKk
                ? ["Instagram таргет", "Lead-форма → WhatsApp", "A/B креативтер", "Өтінімге оңтайландыру"]
                : ["Таргет в Instagram", "Lead-форма → WhatsApp", "A/B креативы", "Оптимизация на заявки"],
            results: isKk
                ? [
                    { label: "WhatsApp-та өтінім", value: "679", highlight: "WhatsApp" },
                    { label: "Өтінім бағасы", value: "$1,29", highlight: "бағасы" },
                    { label: "Лид бағасының төмендеуі", value: "×3", highlight: "бағасының" },
                ]
                : [
                    { label: "Заявок в WhatsApp", value: "679", highlight: "WhatsApp" },
                    { label: "Цена заявки", value: "$1,29", highlight: "заявки" },
                    { label: "Снижение цены лида", value: "×3", highlight: "лида" },
                ]
        }
    ];

    return (
        <section className="py-24 bg-zinc-950 text-white overflow-hidden perspective-1000">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {isKk ? 'Дәлелденген' : 'Доказанные'} <span className="text-red-500">{isKk ? 'нәтижелер' : 'результаты'}</span>
                        </h2>
                        <p className="text-lg text-gray-400 font-medium">
                            {isKk
                                ? 'Біз жұмыс сағатын сатпаймыз. Біз сіздің бизнесіңіздің өсуін сатамыз. Әр түрлі салаларда міндеттерді қалай шешкенімізді қараңыз.'
                                : 'Мы не продаем часы работы. Мы продаем рост вашего бизнеса. Посмотрите, как мы решали задачи в разных нишах.'}
                        </p>
                    </div>
                    <Link href={isKk ? "/kk/cases/" : "/cases/"} className="whitespace-nowrap px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#ef4444', color: '#ffffff' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#ef4444'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ef4444'; e.currentTarget.style.color = '#ffffff'; }}>
                        {isKk ? 'Барлық кейстерді көру' : 'Смотреть все кейсы'}
                    </Link>
                </motion.div>

                <div className="space-y-12">
                    {cases.map((item, idx) => (
                        <Link key={item.id} href={item.href} className="block">
                        <motion.div
                            initial={{ opacity: 0, y: 100, rotateX: 20 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group flex flex-col lg:flex-row bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-700 transition-colors shadow-2xl cursor-pointer"
                        >
                            {/* Image side */}
                            <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent z-10 lg:hidden"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 lg:bg-gradient-to-l lg:from-transparent"></div>
                                <img
                                    src={item.image}
                                    alt={item.client}
                                    width={600}
                                    height={400}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-gray-300">
                                    {item.industry}
                                </div>
                            </div>

                            {/* Content side */}
                            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                                <h3 className="text-2xl lg:text-3xl font-bold mb-6 group-hover:text-red-400 transition-colors">{item.client}</h3>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <div className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">{isKk ? 'Мәселе' : 'Проблема'}</div>
                                        <p className="text-gray-300 font-medium">{item.problem}</p>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">{isKk ? 'Шешім' : 'Рeшение'}</div>
                                        <ul className="flex flex-wrap gap-2">
                                            {item.solution.map(s => (
                                                <li key={s} className="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded">{s}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/50">
                                    <div className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wide">{isKk ? 'Жұмыс нәтижелері' : 'Результаты работы'}</div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        {item.results.map((res, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.05 }}
                                                className="transition-transform duration-300"
                                            >
                                                <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1 group-hover:text-red-500 transition-colors"><NumberFlow value={res.value} /></div>
                                                <div className="text-sm text-gray-400 font-medium">
                                                    {res.label.split(res.highlight).map((part, j, arr) => (
                                                        <React.Fragment key={j}>
                                                            {part}
                                                            {j !== arr.length - 1 && <span className="text-red-400">{res.highlight}</span>}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
