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
            <main className="bg-white pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <Breadcrumbs items={[{ name: 'Кейсы', item: '/cases' }]} />
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 uppercase tracking-wider">
                            Портфолио
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Наши кейсы
                        </h1>
                        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                            Живая стена наших работ. Наведите — движение замрёт, кликните по любому кейсу, чтобы открыть его целиком.
                        </p>
                    </div>
                </div>

                {/* Drift Wall — стена кейсов на всю ширину экрана, движение сверху вниз */}
                <div className="w-full px-2 sm:px-3 mb-16">
                    <CasesDriftWall tiles={tiles} />
                </div>

                <CTA />
            </main>
            <RawFooter />
        </>
    );
}
