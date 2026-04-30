import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Цены на услуги маркетингового агентства | Digital Pride Алматы',
    description: 'Прайс-лист на услуги маркетинга: SMM, SEO, разработка сайтов, контекстная реклама, таргетинг в Алматы от агентства Digital Pride. Прозрачные цены без скрытых переплат.',
    alternates: { canonical: '/pricing' },
    openGraph: {
        title: 'Цены и Услуги | Digital Pride',
        description: 'Узнайте стоимость маркетинговых услуг в агентстве Digital Pride.',
        url: '/pricing',
    },
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
