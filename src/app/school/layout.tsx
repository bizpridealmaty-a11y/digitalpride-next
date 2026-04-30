import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Обучение СММ и Таргету в Алматы | Курсы от Digital Pride',
    description: 'Очный курс по digital-маркетингу от практиков из агентства Digital Pride. Научим SMM, настройке таргетированной рекламы, работе с нейросетями (ChatGPT) и созданию воронок продаж.',
    alternates: { canonical: '/school' },
    openGraph: {
        title: 'Обучение Маркетингу и SMM | Digital Pride',
        description: 'Научитесь современному маркетингу у профессионалов.',
        url: '/school',
    },
};

export default function SchoolLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
