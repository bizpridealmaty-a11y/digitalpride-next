import React from 'react';
import type { Metadata } from 'next';

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
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/home/CTA';
import CasesDriftWall, { type DriftTile } from '@/components/case/CasesDriftWall';

const tiles: DriftTile[] = [
    { href: '/cases/plov-delivery/', img: '/images/cases/plov-delivery/cover.jpg', title: 'Доставка плова', tag: 'Meta Ads' },
    { href: '/cases/laser-epilation/', img: '/images/cases/laser-epilation/hero-cover.png', title: 'Лазерная эпиляция', tag: 'Таргет' },
    { href: '/cases/hacker/', img: '/images/cases/ermitazh/cover.jpg', title: 'Эрмитажъ — сайт и магазин', tag: 'Сайт' },
    { href: '/cases/hyundai/', img: '/images/cases/ring-avto/cover.jpg', title: 'Ринг Авто — Hyundai', tag: 'Контекст' },
    { href: '/cases/investbridge/', img: '/images/cases/investbridge/hero-mobile.jpg', title: 'Инвестфорум Италия × Казахстан', tag: 'Сайт' },
    { href: '/cases/vinil-i-vino/', img: '/images/cases/vinil-i-vino/cover.jpg', title: 'Vinil i Vino', tag: 'SMM' },
    { href: '/cases/art-cleaning/', img: '/images/cases/art-cleaning/hero-mobile.jpg', title: 'ART Cleaning', tag: 'Сайт' },
    { href: '/cases/bao-bao/', img: '/images/cases/barhat/cover.jpg', title: 'Бархат — ресторан', tag: 'Реклама' },
    { href: '/cases/ezhovik/', img: '/images/cases/ezhovik/hero-mobile.jpg', title: 'Hericium Rex', tag: 'Магазин' },
    { href: '/cases/mozart-club/', img: '/images/cases/mozart-club/hero-mobile.jpg', title: 'Mozart Club', tag: 'Лендинг' },
    { href: '/cases/on-time-service/', img: '/images/cases/on-time-service/hero-mobile.jpg', title: 'On Time Service', tag: 'Сайт' },
];

export default function Cases() {
    return (
        <>
            <main className="bg-[#0a0a0b] text-white">
                {/* Полноэкранная стена кейсов — движение начинается с самого верха */}
                <section className="relative w-full min-h-screen overflow-hidden">
                    {/* Стена-фон на весь экран */}
                    <div className="absolute inset-0 px-2 sm:px-3">
                        <CasesDriftWall tiles={tiles} fill />
                    </div>

                    {/* Заголовок наложением поверх стены */}
                    <div className="relative z-10 pointer-events-none pt-28 md:pt-32 pb-24 text-center px-4">
                        <div
                            className="absolute inset-x-0 top-0 h-[380px] -z-10"
                            style={{ background: 'linear-gradient(to bottom, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.7) 45%, rgba(10,10,11,0) 100%)' }}
                            aria-hidden="true"
                        />
                        <div className="pointer-events-auto inline-block">
                            <Breadcrumbs items={[{ name: 'Кейсы', item: '/cases' }]} />
                        </div>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-bold mb-6 uppercase tracking-wider mt-2">
                            Портфолио
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Наши кейсы
                        </h1>
                        <p className="text-lg text-gray-300 font-medium max-w-2xl mx-auto">
                            Живая стена наших работ. Наведите — движение замрёт, кликните по любому кейсу, чтобы открыть его целиком.
                        </p>
                    </div>
                </section>

                <CTA />
            </main>
            <RawFooter />
        </>
    );
}
