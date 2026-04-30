import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Кейсы маркетингового агентства Digital Pride в Алматы',
    description: 'Результаты наших проектов: +300% РОМИ, снижение CPL на 40%. Реальные цифры и отзывы клиентов по SMM, таргету, SEO и разработке сайтов.',
    alternates: { canonical: '/cases' },
    openGraph: {
        title: 'Кейсы маркетингового агентства | Digital Pride',
        description: 'Ознакомьтесь с нашими кейсами и результатами маркетинговых кампаний.',
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

                <CaseGrid />
                <CTA />
            </main >
            <RawFooter />
        </>
    );
}
