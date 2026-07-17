import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Алматыдағы маркетинг агенттігінің кейстері',
    description: 'Жобаларымыздың нәтижелері: ROMI +300%, CPL 40%-ға төмендеу. SMM, таргет, SEO және сайт жасау бойынша нақты сандар мен клиенттер пікірлері.',
    alternates: {
        canonical: '/kk/cases',
        languages: { 'ru-KZ': '/cases', 'kk-KZ': '/kk/cases', 'x-default': '/cases' },
    },
    openGraph: {
        title: 'Алматыдағы маркетинг агенттігінің кейстері',
        description: 'Жобаларымыздың нәтижелері: ROMI +300%, CPL 40%-ға төмендеу. Нақты сандар мен клиенттер пікірлері.',
        url: '/kk/cases',
    },
};

import RawFooter from '../../../components/layout/RawFooter';
import CaseGrid from '../../../components/case/CaseGrid';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTA from '../../../components/home/CTA';

export default function Cases() {
    return (
        <>
            <main className="bg-white pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <Breadcrumbs items={[{ name: 'Кейстер', item: '/kk/cases' }]} />
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 uppercase tracking-wider">
                            Портфолио
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Біздің кейстер
                        </h1>
                        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                            Мұнда біз жұмысымыздың нақты сандары мен нәтижелерін көрсетеміз. Қысқаша статистиканы көру үшін кейске апарыңыз.
                        </p>
                    </div>
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
                                    Жаңа кейс · Мамыр 2026
                                </div>
                                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                    WhatsApp-қа 679 өтінім $1,29-ға
                                </h2>
                                <p className="text-gray-300 text-sm md:text-base max-w-xl mb-4">
                                    Алматыдағы лазерлік эпиляция студиясы үшін Instagram-да таргеттелген жарнама. Лид құнын 3 есе төмендеттік.
                                </p>
                                <span className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                                    Кейсті көру
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>

                <CaseGrid />
                <CTA />
            </main>
            <RawFooter />
        </>
    );
}
