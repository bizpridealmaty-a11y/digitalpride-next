import type { Metadata } from 'next';
import SchoolClient from './SchoolClient';

export const metadata: Metadata = {
    title: 'Школа Digital Pride — обучение маркетингу в Алматы',
    description: 'Курсы по SMM, таргетированной рекламе, контексту и SEO от практикующих специалистов агентства. Реальные кейсы, поддержка кураторов, трудоустройство.',
    alternates: { canonical: '/school' },
    openGraph: {
        title: 'Школа Digital Pride — обучение маркетингу',
        description: 'Курсы SMM, таргета, SEO и контекста от практиков. Реальные кейсы.',
        url: '/school',
    },
};

export default function SchoolPage() {
    return <SchoolClient />;
}
