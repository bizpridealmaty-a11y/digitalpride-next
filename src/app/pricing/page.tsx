'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import RawFooter from '@/components/layout/RawFooter';
import { trackWhatsAppClick } from '@/lib/analytics';

const plans = [
    {
        name: 'Маркетинговая стратегия',
        price: 'От 1 000 000 ₸',
        features: ['Глубокий аудит бизнеса', 'CustDev и анализ ЦА', 'Financial Modeling', 'Конкурентная разведка', 'Дорожная карта на 12 мес.'],
        href: '/marketing-almaty',
        popular: false,
    },
    {
        name: 'SMM: комплексное ведение',
        price: 'От 700 000 ₸',
        features: ['Контент-стратегия', 'Reels & Stories продакшн', 'Community-менеджмент', 'Визуальный дизайн ленты', 'Ежемесячная аналитика'],
        href: '/smm-almaty',
        popular: true,
    },
    {
        name: 'Таргетированная реклама',
        price: 'От 250 000 ₸',
        features: ['Тестирование креативов', 'Динамический ретаргетинг', 'Look-alike аудитории', 'Интеграция с CRM', 'A/B тесты посадочных'],
        href: '/target-almaty',
        popular: false,
    },
    {
        name: 'Контекстная реклама',
        price: 'От 400 000 ₸',
        features: ['Сбор семантики', 'Минусация и чистка трафика', 'Настройка аналитики', 'Оптимизация ставок', 'Еженедельные отчёты'],
        href: '/kontekstnaya-reklama-almaty',
        popular: false,
    },
    {
        name: 'SEO продвижение',
        price: 'От 300 000 ₸',
        features: ['Технический аудит сайта', 'Сбор семантического ядра', 'Оптимизация контента', 'Наращивание ссылочной массы', 'Отчёты по позициям'],
        href: '/seo-almaty',
        popular: false,
    },
    {
        name: 'Разработка сайтов',
        price: 'От 500 000 ₸',
        features: ['UX/UI дизайн', 'Адаптивная вёрстка', 'SEO-оптимизация', 'Интеграция с CRM', 'Техподдержка 3 мес.'],
        href: '/sozdanie-sajtov-almaty',
        popular: false,
    },
];

export default function PricingPage() {
    return (
        <>
            <main className="bg-white pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 uppercase tracking-wider">
                            Прайс-лист
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Цены на <span className="text-red-600">услуги</span>
                        </h1>
                        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                            Прозрачное ценообразование без скрытых платежей. Стоимость зависит от объёма работ и масштаба проекта.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative rounded-2xl flex flex-col transition-all duration-300 border ${plan.popular ? 'border-red-500 bg-zinc-950 text-white shadow-2xl scale-105 z-10' : 'border-gray-200 bg-white text-black hover:bg-zinc-950 hover:text-white hover:border-zinc-950 hover:shadow-2xl cursor-pointer group'}`}
                            >
                                <Link href={plan.href} className="flex flex-col h-full p-8 outline-none">
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider z-20">
                                            Популярный
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300">{plan.name}</h3>
                                    <div className="text-3xl font-extrabold mb-6 transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                        {plan.price}
                                    </div>
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${plan.popular ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-300'}`}>
                                                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div
                                        className={`mt-auto block text-center py-3 rounded-xl font-bold transition-all duration-300 ${plan.popular ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-100 text-black group-hover:bg-red-600 group-hover:text-white'}`}
                                    >
                                        Подробнее →
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-gray-500 mb-4">Не нашли нужную услугу? Свяжитесь с нами для индивидуального расчёта</p>
                        <a
                            href="https://wa.me/77070357777?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D1%8E%D1%82%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-red-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-red-700 transition-all"
                            onClick={() => trackWhatsAppClick('pricing_cta')}
                        >
                            Получить индивидуальный расчёт
                        </a>
                    </div>
                </div>
            </main>
            <RawFooter />
        </>
    );
}
