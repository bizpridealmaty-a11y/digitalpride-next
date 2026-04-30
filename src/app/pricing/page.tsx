import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
    title: 'Цены на услуги маркетингового агентства Digital Pride',
    description: 'Прозрачные тарифы на SMM, таргет, контекст, SEO, разработку сайтов и брендинг в Алматы. От 150 000 ₸/мес. Гибкие пакеты под ваш бюджет.',
    alternates: { canonical: '/pricing' },
    openGraph: {
        title: 'Цены на услуги | Digital Pride',
        description: 'Прозрачные тарифы на SMM, таргет, контекст, SEO. От 150 000 ₸/мес.',
        url: '/pricing',
    },
};

export default function PricingPage() {
    return <PricingClient />;
}
