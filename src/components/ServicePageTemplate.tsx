'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import { trackWhatsAppClick, trackLeadFormSubmit } from '@/lib/analytics';
import RelatedServices from './RelatedServices';

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
    heroImage?: string;
    heroImageAlt?: string;
    heroBackground?: string;
    dashboard?: React.ReactNode;
    gallery?: { src: string; alt: string; caption?: string }[];
    galleryTitle?: string;
    gallerySubtitle?: string;
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
    heroImage,
    heroImageAlt,
    heroBackground,
    dashboard,
    gallery,
    galleryTitle,
    gallerySubtitle,
}: ServicePageProps) {
    const pathname = usePathname();
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

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
        "@type": "Service",
        "name": `${title} ${accentWord}`.trim(),
        "description": description,
        "serviceType": `${title} ${accentWord}`.trim(),
        "provider": {
            "@type": "LocalBusiness",
            "@id": "https://digitalpride.kz/#organization",
            "name": "Digital Pride",
            "image": "https://digitalpride.kz/fonts/new-logo.svg",
            "telephone": "+77070357777",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Алматы",
                "addressRegion": "Алматы",
                "addressCountry": "KZ"
            },
            "url": "https://digitalpride.kz/"
        },
        "areaServed": [
            { "@type": "City", "name": "Алматы" },
            { "@type": "City", "name": "Астана" },
            { "@type": "Country", "name": "Казахстан" }
        ],
        "url": pathname ? `https://digitalpride.kz${pathname}` : "https://digitalpride.kz/"
    };

    const breadcrumbJsonLd = pathname ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://digitalpride.kz/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Услуги",
                "item": "https://digitalpride.kz/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `${title} ${accentWord}`.trim(),
                "item": `https://digitalpride.kz${pathname}`
            }
        ]
    } : null;

    const faqJsonLd = faq && faq.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    } : null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (submitting) return;
        const form = e.currentTarget;
        const fd = new FormData(form);
        const name = String(fd.get('name') || '').trim();
        const phone = String(fd.get('phone') || '').trim();
        if (!name || !phone) return;
        setSubmitting(true);
        try {
            await fetch('/api/telegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    phone,
                    source: `Service page: ${title} ${accentWord} (${pathname})`,
                }),
            });
            trackLeadFormSubmit();
            setSubmitted(true);
            form.reset();
        } catch {
            setSubmitted(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}
            {breadcrumbJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                />
            )}
            {/* Hero Section */}
            <section className={`relative bg-zinc-950 text-white pt-32 pb-20 overflow-hidden ${heroBackground ? 'md:min-h-[580px] md:flex md:items-center' : ''}`}>
                {heroBackground ? (
                    <div className="absolute inset-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={heroBackground} alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 md:via-zinc-950/80 to-zinc-950/30"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent"></div>
                    </div>
                ) : (
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px]" style={{ backgroundColor: '#ef4444' }}></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ backgroundColor: '#ef4444' }}></div>
                    </div>
                )}
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={heroBackground ? 'md:max-w-[52%]' : undefined}
                    >
                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-400">
                                <li>
                                    <Link href="/" className="hover:text-white transition-colors">Главная</Link>
                                </li>
                                <li className="mx-1 text-gray-600">/</li>
                                <li>
                                    <Link href="/services/" className="hover:text-white transition-colors">Услуги</Link>
                                </li>
                                <li className="mx-1 text-gray-600">/</li>
                                <li className="text-white font-medium">{title} {accentWord}</li>
                            </ol>
                        </nav>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {title} <span style={{ color: '#ef4444' }}>{accentWord}</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mb-8 font-medium leading-relaxed">
                            {subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => {
                                    document.getElementById('service-cta-form')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-8 py-4 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 hover:shadow-lg"
                                style={{ backgroundColor: '#ef4444' }}
                            >
                                Получить консультацию
                            </button>
                            <Link href="/#cases" className="px-8 py-4 border border-zinc-700 text-white font-bold rounded-xl text-lg hover:bg-zinc-800 transition-all">
                                Смотреть кейсы
                            </Link>
                        </div>
                        {heroImage && (
                            <div className="mt-14">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={heroImage}
                                    alt={heroImageAlt || `${title} ${accentWord}`.trim()}
                                    className="w-full rounded-2xl border border-zinc-700/60 shadow-2xl"
                                    loading="eager"
                                />
                            </div>
                        )}
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

            {/* Animated dashboard (optional) */}
            {dashboard}

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

            {/* Gallery */}
            {gallery && gallery.length > 0 && (
                <section className="py-20 bg-white text-black">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-center"
                        >
                            {galleryTitle || 'Как это работает'}
                        </motion.h2>
                        {gallerySubtitle && (
                            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">{gallerySubtitle}</p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {gallery.map((g, i) => (
                                <motion.figure
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={g.src} alt={g.alt} loading="lazy" className="w-full block bg-gray-50" />
                                    {g.caption && (
                                        <figcaption className="p-5 text-sm text-gray-600 font-medium border-t border-gray-100">{g.caption}</figcaption>
                                    )}
                                </motion.figure>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Pricing */}
            {pricing && pricing.length > 0 && (
                <section className="py-20 bg-gray-50 text-black">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-center"
                        >
                            Стоимость
                        </motion.h2>
                        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                            Точная стоимость зависит от объёма задач, количества каналов и интеграций и обсуждается на брифе.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {pricing.map((tier, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-lg transition-shadow"
                                >
                                    <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                                    <div className="text-3xl font-extrabold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>{tier.price}</div>
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {tier.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-gray-600 font-medium">
                                                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        type="button"
                                        onClick={() => document.getElementById('service-cta-form')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="mt-auto block w-full text-center py-3 rounded-xl font-bold bg-gray-100 text-black hover:bg-red-600 hover:text-white transition-all"
                                    >
                                        Обсудить проект
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

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
                                <div className={`px-6 pb-6 text-gray-600 leading-relaxed ${openFaq === i ? 'block' : 'hidden'}`}>{item.a}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related services */}
            <RelatedServices />

            {/* CTA */}
            <section id="service-cta-form" className="py-20 text-white" style={{ backgroundColor: '#ef4444' }}>
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Готовы начать?
                        </h2>
                        <p className="text-xl mb-12 opacity-90 font-medium">
                            Оставьте заявку и получите бесплатную консультацию от наших экспертов
                        </p>

                        {submitted ? (
                            <div className="max-w-md mx-auto mb-10 bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl text-center">
                                <div className="text-5xl mb-4">✓</div>
                                <div className="text-2xl font-extrabold mb-2">Заявка принята</div>
                                <div className="text-white/90">Свяжемся с вами в ближайшее время.</div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-10 bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl">
                                <div className="mb-5 text-left">
                                    <label htmlFor="svc-name" className="block text-sm font-semibold mb-2 ml-1 text-white/90">Имя</label>
                                    <input id="svc-name" name="name" type="text" placeholder="Введите ваше имя" required className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none border-2 border-transparent focus:border-red-300 transition-all font-medium placeholder:text-gray-400" />
                                </div>
                                <div className="mb-8 text-left">
                                    <label htmlFor="svc-phone" className="block text-sm font-semibold mb-2 ml-1 text-white/90">Телефон</label>
                                    <input id="svc-phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none border-2 border-transparent focus:border-red-300 transition-all font-medium placeholder:text-gray-400" />
                                </div>
                                <button type="submit" disabled={submitting} className="w-full py-4 bg-white text-red-600 font-extrabold rounded-xl text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-xl disabled:opacity-60">
                                    {submitting ? 'Отправляем…' : 'Оставить заявку'}
                                </button>
                            </form>
                        )}

                        <div className="flex items-center justify-center gap-4 text-white/80 max-w-sm mx-auto mb-6">
                            <hr className="w-full border-white/30" />
                            <span className="text-sm font-medium uppercase tracking-widest">или</span>
                            <hr className="w-full border-white/30" />
                        </div>

                        <button
                            onClick={handleCTA}
                            className="flex items-center justify-center gap-3 mx-auto px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl text-lg hover:scale-105 transition-transform shadow-lg"
                        >
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                            Написать в WhatsApp
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
