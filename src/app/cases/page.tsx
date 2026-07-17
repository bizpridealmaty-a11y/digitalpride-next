import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Кейсы маркетингового агентства в Алматы',
    description: 'Результаты наших проектов: +300% РОМИ, снижение CPL на 40%. Реальные цифры и отзывы клиентов по SMM, таргету, SEO и разработке сайтов.',
    alternates: { canonical: '/cases', languages: { 'ru-KZ': '/cases', 'kk-KZ': '/kk/cases', 'x-default': '/cases' } },
    openGraph: {
        title: 'Кейсы маркетингового агентства в Алматы',
        description: 'Результаты наших проектов: +300% РОМИ, снижение CPL на 40%. Реальные цифры и отзывы клиентов по SMM, таргету, SEO и разработке сайтов.',
        url: '/cases',
    },
};

import RawFooter from '../../components/layout/RawFooter';
import CaseGrid from '../../components/case/CaseGrid';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTA from '../../components/home/CTA';

export default function Cases() {
    return (
        <>
            <main className="bg-white pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <Breadcrumbs items={[{ name: 'Кейсы', item: '/cases' }]} />
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 uppercase tracking-wider">
                            Портфолио
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Наши кейсы
                        </h1>
                        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                            Здесь мы показываем реальные цифры и результаты нашей работы. Наведите на кейс для просмотра краткой статистики.
                        </p>
                    </div>
                </div>

                {/* Featured case — plov delivery */}
                <div className="container mx-auto px-4 max-w-7xl mb-8">
                    <Link href="/cases/plov-delivery/" className="group block relative overflow-hidden rounded-3xl" style={{ background: '#FFF9F2' }}>
                        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4" style={{ background: '#FDE8E8', color: '#E31C24' }}>
                                    Новый кейс · Июнь 2026
                                </div>
                                <h2 className="text-2xl md:text-4xl font-extrabold mb-3" style={{ fontFamily: "'Unbounded', sans-serif", color: '#1A1A1A' }}>
                                    427 переписок в WhatsApp за <span style={{ color: '#E31C24' }}>$1,33</span>
                                </h2>
                                <p className="text-sm md:text-base mb-6" style={{ color: '#5E5E5E' }}>
                                    Реклама доставки плова в Алматы через Meta Ads. Лучшая связка: 259 переписок по $0,78.
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all" style={{ color: '#E31C24' }}>
                                    Смотреть кейс
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </div>
                            <div className="w-full md:w-[400px] flex-shrink-0">
                                <img
                                    src="/images/cases/plov-delivery/01_campaigns_overview.png"
                                    alt="Кейс реклама доставки плова — 427 переписок в WhatsApp"
                                    className="w-full h-auto rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                                    style={{ border: '1px solid #E8D9C4', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
                                />
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Featured case — laser epilation */}
                <div className="container mx-auto px-4 max-w-7xl mb-16">
                    <Link href="/cases/laser-epilation/" className="group block relative overflow-hidden rounded-3xl" style={{ background: '#070707' }}>
                        <div className="relative">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                poster="/images/cases/laser-epilation/hero-cover.png"
                                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                                style={{ opacity: 0.85, maxHeight: '600px' }}
                            >
                                <source src="/images/cases/laser-epilation/hero-video.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3" style={{ background: '#E62222', color: '#fff' }}>
                                    Новый кейс · Май 2026
                                </div>
                                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                    679 заявок в WhatsApp за $1,29
                                </h2>
                                <p className="text-gray-300 text-sm md:text-base max-w-xl mb-4">
                                    Таргетированная реклама в Instagram для студии лазерной эпиляции в Алматы. Снизили стоимость лида в 3 раза.
                                </p>
                                <span className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                                    Смотреть кейс
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>

                <CaseGrid />
                <CTA />
            </main >
            <RawFooter />
        </>
    );
}
