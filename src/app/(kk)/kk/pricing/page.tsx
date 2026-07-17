import type { Metadata } from 'next';
// Клиент общий с русской версией, а она теперь в route-группе (ru).
import PricingClient from '@/app/(ru)/pricing/PricingClient';

export const metadata: Metadata = {
    title: 'Digital Pride маркетинг агенттігі қызметтерінің бағалары',
    description: 'Алматыда SMM, таргет, контекст, SEO, сайт жасау және брендинг бойынша ашық тарифтер. 150 000 ₸/ай-дан. Бюджетіңізге бейімделген пакеттер.',
    alternates: {
        canonical: '/kk/pricing',
        languages: { 'ru-KZ': '/pricing', 'kk-KZ': '/kk/pricing', 'x-default': '/pricing' },
    },
    openGraph: {
        title: 'Қызметтер бағасы | Digital Pride',
        description: 'SMM, таргет, контекст, SEO бойынша ашық тарифтер. 150 000 ₸/ай-дан.',
        url: '/kk/pricing',
    },
};

export default function PricingPage() {
    return <PricingClient />;
}
