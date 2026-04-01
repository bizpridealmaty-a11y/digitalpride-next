'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { trackWhatsAppClick } from '@/lib/analytics';

interface ServiceFeature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface ServicePageProps {
    title: string;
    accentWord: string;
    subtitle: string;
    description: string;
    features: ServiceFeature[];
    process: { step: string; title: string; description: string }[];
    pricing?: { name: string; price: string; features: string[] }[];
    faq: { q: string; a: string }[];
    seoContent?: { title?: string; text: React.ReactNode | string }[];
}

export default function ServicePageTemplate({
    title,
    accentWord,
    subtitle,
    description,
    features,
    process,
    pricing,
    faq,
    seoContent,
}: ServicePageProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } },
    };

    // WhatsApp handler
    const handleCTA = () => {
        const message = `Здравствуйте! Интересует услуга: ${title} ${accentWord}. Хотел(а) бы узнать подробнее.`;
        trackWhatsAppClick('service_page_cta');
        window.open(`https://wa.me/77070357777?text=${encodeURIComponent(message)}`, '_blank');
    };

    // Schema.org JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["Service", "LocalBusiness"],
        "name": `${title} ${accentWord}`,
        "description": description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Digital Pride",
            "image": "https://digitalpride.kz/logo.png",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Алматы",
                "addressCountry": "KZ"
            }
        },
        "areaServed": "KZ"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <section className="relative bg-zinc-950 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px]" style={{ backgroundColor: '#ef4444' }}></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ backgroundColor: '#ef4444' }}></div>
                </div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/#services" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors font-medium">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            Все услуги
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {title} <span style={{ color: '#ef4444' }}>{accentWord}</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mb-8 font-medium leading-relaxed">
                            {subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={handleCTA}
                                className="px-8 py-4 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 hover:shadow-lg"
                                style={{ backgroundColor: '#ef4444' }}
                            >
                                Получить консультацию
                            </button>
                            <Link href="/#cases" className="px-8 py-4 border border-zinc-700 text-white font-bold rounded-xl text-lg hover:bg-zinc-800 transition-all">
                                Смотреть кейсы
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Description */}
            <section className="py-20 bg-white text-black">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Что мы делаем</h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">{description}</p>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-gray-50 text-black">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-extrabold mb-12 tracking-tight text-center"
                    >
                        Что входит в услугу
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#fef2f2' }}>
                                    <div style={{ color: '#ef4444' }}>{feature.icon}</div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20 bg-white text-black">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-extrabold mb-12 tracking-tight text-center"
                    >
                        Как мы работаем
                    </motion.h2>
                    <div className="space-y-0">
                        {process.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex items-start gap-6 py-8 border-b border-gray-100 last:border-0"
                            >
                                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white font-extrabold text-lg" style={{ backgroundColor: '#ef4444' }}>
                                    {step.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Content */}
            {seoContent && seoContent.length > 0 && (
                <section className="py-20 bg-white text-black">
                    <div className="container mx-auto px-4 max-w-4xl">
                        {seoContent.map((block, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="mb-12 last:mb-0"
                            >
                                {block.title && (
                                    <h3 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight">{block.title}</h3>
                                )}
                                <div className="text-lg text-gray-600 leading-relaxed space-y-6 font-medium">
                                    {typeof block.text === 'string' ? <p>{block.text}</p> : block.text}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* FAQ */}
            <section className="py-20 bg-gray-50 text-black">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-extrabold mb-12 tracking-tight text-center"
                    >
                        Частые вопросы
                    </motion.h2>
                    <div className="space-y-4">
                        {faq.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left font-bold text-lg hover:bg-gray-50 transition-colors"
                                >
                                    {item.q}
                                    <svg className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">{item.a}</div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-white" style={{ backgroundColor: '#ef4444' }}>
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Готовы начать?
                        </h2>
                        <p className="text-xl mb-8 opacity-90 font-medium">
                            Оставьте заявку и получите бесплатную консультацию от наших экспертов
                        </p>
                        <button
                            onClick={handleCTA}
                            className="px-10 py-5 bg-white font-bold rounded-xl text-lg hover:scale-105 transition-transform"
                            style={{ color: '#ef4444' }}
                        >
                            Написать в WhatsApp
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
