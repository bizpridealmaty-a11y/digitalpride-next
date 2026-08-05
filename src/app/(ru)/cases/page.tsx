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

import RawFooter from '@/components/layout/RawFooter';
import CaseGrid from '@/components/case/CaseGrid';
import PhoneScroller from '@/components/motion/PhoneScroller';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/home/CTA';

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

                {/* Featured case — plov delivery (full-bleed обложка с дымом) */}
                <div className="container mx-auto px-4 max-w-7xl mb-8">
                    <Link href="/cases/plov-delivery/" className="group block relative overflow-hidden rounded-3xl" style={{ background: '#0a0603' }}>
                        <div className="relative">
                            <img
                                src="/images/cases/plov-delivery/cover.jpg"
                                alt="Кейс реклама доставки плова — 427 переписок в WhatsApp"
                                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                                style={{ maxHeight: '600px' }}
                            />
                            {/* Анимированный дым, поднимающийся над пловом */}
                            <div className="plov-cover-smoke" aria-hidden="true">
                                <span className="plov-smoke s1" />
                                <span className="plov-smoke s2" />
                                <span className="plov-smoke s3" />
                                <span className="plov-smoke s4" />
                            </div>
                            {/* Затемнение снизу и слева — под читаемость заголовка */}
                            <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,0.05) 70%)' }} />
                            <div className="absolute inset-0 z-[2] hidden md:block" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 45%, transparent 70%)' }} />
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-[3]">
                                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3" style={{ background: '#E31C24', color: '#fff' }}>
                                    Новый кейс · Июнь 2026
                                </div>
                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 max-w-2xl" style={{ fontFamily: "'Unbounded', sans-serif", textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}>
                                    Вложили $567 в рекламу — вернули <span style={{ color: '#FF6B4A' }}>≈1,68 млн ₸</span>
                                </h2>
                                <p className="text-gray-200 text-sm md:text-base max-w-xl mb-4" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.7)' }}>
                                    Доставка домашнего плова в Алматы через Meta Ads: 427 переписок в WhatsApp → ~60 заказов при среднем чеке 28 000 ₸.
                                </p>
                                <span className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                                    Смотреть кейс
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
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

                {/* Кейсы по сайтам — сетка */}
                <div className="container mx-auto px-4 max-w-7xl mb-16">
                    <div className="mb-12 text-center">
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3" style={{ background: '#FDE8E8', color: '#E31C24' }}>
                            Разработка сайтов
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold" style={{ fontFamily: "'Unbounded', sans-serif", color: '#1A1A1A' }}>
                            Сайты, которые мы сделали
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mt-3">
                            Наведите на телефон — и загляните в каждый проект.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 justify-items-center">
                        {[
                            { href: '/cases/investbridge/', img: '/images/cases/investbridge/hero-mobile.jpg', scroll: '/images/cases/investbridge/scroll-m.jpg', scrollH: 4200, dur: 15, accent: '#C9A24B', title: 'Инвестфорум Италия × Казахстан', desc: 'Официальный сайт форума: 4 языка, программа, участники, заявки.' },
                            { href: '/cases/art-cleaning/', img: '/images/cases/art-cleaning/hero-mobile.jpg', scroll: '/images/cases/art-cleaning/scroll-m.jpg', scrollH: 4200, dur: 11, accent: '#28C5C8', title: 'ART Cleaning — B2B-клининг', desc: 'Сайт-продавец: технология, калькулятор, кейсы, WhatsApp.' },
                            { href: '/cases/ezhovik/', img: '/images/cases/ezhovik/hero-mobile.jpg', scroll: '/images/cases/ezhovik/scroll-m.jpg', scrollH: 4200, dur: 18, accent: '#C77D3E', title: 'Hericium Rex — грибные БАД', desc: 'Интернет-магазин с корзиной, протоколами приёма и доставкой.' },
                            { href: '/cases/mozart-club/', img: '/images/cases/mozart-club/hero-mobile.jpg', scroll: '/images/cases/mozart-club/scroll-m.jpg', scrollH: 4200, dur: 13, accent: '#E11D2A', title: 'Mozart Club — запчасти', desc: 'Лендинг клубных карт: тарифы, сравнение цен, WhatsApp.' },
                            { href: '/cases/on-time-service/', img: '/images/cases/on-time-service/hero-mobile.jpg', scroll: '/images/cases/on-time-service/scroll-m.jpg', scrollH: 4200, dur: 16, accent: '#E0A126', title: 'On Time Service — логистика', desc: 'Сайт грузоперевозок: 8 услуг, калькулятор, SEO по регионам.' },
                        ].map((c) => (
                            <Link key={c.href} href={c.href} className="group flex flex-col items-center text-center w-full max-w-[210px] h-full">
                                <div className="dp-iphone">
                                    <div className="dp-iphone__island" />
                                    <div className="dp-iphone__screen">
                                        {c.scroll
                                            ? <PhoneScroller src={c.scroll} heightPx={c.scrollH} duration={c.dur} alt={`Сайт ${c.title} на мобильном`} />
                                            : <img src={c.img} alt={`Сайт ${c.title} на мобильном`} loading="lazy" />}
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-col flex-1 w-full items-center">
                                    <div className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: c.accent }}>Разработка сайта</div>
                                    <h3 className="text-base font-extrabold mb-1.5" style={{ fontFamily: "'Unbounded', sans-serif", color: '#1A1A1A' }}>{c.title}</h3>
                                    <p className="text-gray-500 text-sm mb-4 leading-snug">{c.desc}</p>
                                    <span className="mt-auto inline-flex items-center justify-center gap-1.5 font-bold text-sm text-white rounded-full px-5 py-2.5 group-hover:gap-2.5 transition-all" style={{ background: '#E31C24' }}>
                                        Смотреть кейс
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <CaseGrid />
                <CTA />
            </main >
            <RawFooter />
        </>
    );
}
