'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

function ServiceCard({ service, idx }: { service: any; idx: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
            } as Variants}
            whileHover={{ scale: 1.04, y: -6 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: hovered ? '#171717' : '#ffffff',
                borderColor: hovered ? '#171717' : '#f3f4f6',
                boxShadow: hovered
                    ? '0 25px 50px -12px rgba(244,63,94,0.25)'
                    : '0 4px 20px rgba(0,0,0,0.02)',
                transition: 'background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
            }}
            className="p-8 rounded-2xl border cursor-pointer relative z-10"
        >
            <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{
                    backgroundColor: hovered ? '#ef4444' : '#fef2f2',
                    transition: 'background-color 0.4s ease, transform 0.4s ease',
                    transform: hovered ? 'scale(1.1)' : 'scale(1)',
                }}
            >
                <div style={{ color: hovered ? '#ffffff' : '#ef4444', transition: 'color 0.4s ease' }}>
                    {service.icon}
                </div>
            </div>
            <h3
                className="text-2xl font-bold mb-4"
                style={{ color: hovered ? '#ffffff' : '#171717', transition: 'color 0.4s ease' }}
            >
                {service.title}
            </h3>
            <p
                className="mb-6 leading-relaxed"
                style={{ color: hovered ? '#d1d5db' : '#4b5563', transition: 'color 0.4s ease' }}
            >
                {service.description}
            </p>

            <div
                className="mb-8 pt-4"
                style={{ borderTop: `1px solid ${hovered ? '#333' : '#f3f4f6'}`, transition: 'border-color 0.4s ease' }}
            >
                <p
                    className="text-sm font-bold mb-3"
                    style={{ color: hovered ? '#ffffff' : '#171717', transition: 'color 0.4s ease' }}
                >
                    Что входит:
                </p>
                <ul
                    className="space-y-2 text-sm font-medium"
                    style={{ color: hovered ? '#9ca3af' : '#4b5563', transition: 'color 0.4s ease' }}
                >
                    {service.id === 'marketing-strategy' && (
                        <><li>✓ Глубокий аудит бизнеса</li><li>✓ CustDev и анализ ЦА</li><li>✓ Financial Modeling</li></>
                    )}
                    {service.id === 'smm' && (
                        <><li>✓ Контент-стратегия</li><li>✓ Reels & Stories продакшн</li><li>✓ Community-менеджмент</li></>
                    )}
                    {service.id === 'target' && (
                        <><li>✓ Тестирование креативов</li><li>✓ Динамический ретаргетинг</li><li>✓ Интеграция с CRM</li></>
                    )}
                    {service.id === 'context' && (
                        <><li>✓ Сбор семантики</li><li>✓ Минусация и чистка трафика</li><li>✓ Настройка систем аналитики</li></>
                    )}
                </ul>
            </div>

            <div className="flex items-end justify-between">
                <Link
                    href={service.href}
                    className="inline-flex items-center font-bold"
                    style={{ color: hovered ? '#ffffff' : '#ef4444', transition: 'color 0.4s ease' }}
                >
                    Узнать больше
                    <svg className="w-4 h-4 ml-2" style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.3s ease' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
                {service.price && (
                    <span
                        className="text-xs font-bold px-3 py-1.5 rounded-lg"
                        style={{
                            backgroundColor: hovered ? '#ef4444' : '#f3f4f6',
                            color: hovered ? '#ffffff' : '#374151',
                            transition: 'background-color 0.4s ease, color 0.4s ease',
                        }}
                    >
                        {service.price}
                    </span>
                )}
            </div>
        </motion.div>
    );
}

export default function Services() {
    const services = [
        {
            id: 'marketing-strategy',
            title: "Маркетинговая стратегия",
            description: "Глубокий анализ рынка и конкурентов. Пошаговый план действий, который обеспечит рост вашего бизнеса на годы вперед.",
            href: "/branding",
            price: "От 100 000 ₸",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            )
        },
        {
            id: 'smm',
            title: "SMM Профи",
            description: "Комплексное ведение социальных сетей. Мы не просто постим картинки, мы строим комьюнити и прогреваем аудиторию до покупки.",
            href: "/smm",
            price: "От 100 000 ₸",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
            ),
        },
        {
            id: 'target',
            title: "Таргетированная реклама",
            description: "Facebook, Instagram, TikTok. Лазерный таргетинг на вашу идеальную целевую аудиторию, которая готова покупать прямо сейчас.",
            href: "/smm",
            price: "От 100 000 ₸",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
            ),
        },
        {
            id: 'context',
            title: "Контекстная реклама",
            description: "Google Ads и Яндекс.Директ. Перехватываем тех, кто уже ищет ваши услуги, и конвертируем их в горячие заявки с высокой прибыльностью.",
            href: "/context",
            price: "От 100 000 ₸",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            )
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <section id="services" className="py-24 bg-white overflow-hidden text-black">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Услуги, которые генерируют <span className="text-red-600">выручку</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                        Мы отказались от услуг ради услуг. Каждое наше действие направлено на конкретную метрику: снижение стоимости лида, увеличение LTV и рост продаж.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {services.map((service, idx) => (
                        <ServiceCard key={service.id} service={service} idx={idx} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
