import type { Metadata } from 'next';
// Клиент общий с русской версией, а она теперь в route-группе (ru).
import SchoolClient from '@/app/(ru)/school/SchoolClient';

export const metadata: Metadata = {
    title: 'Digital Pride мектебі — Алматыда маркетингті оқыту',
    description: 'Агенттіктің тәжірибелі мамандарынан SMM, таргеттелген жарнама, контекст және SEO курстары. Нақты кейстер, куратор қолдауы, жұмысқа орналастыру.',
    alternates: {
        canonical: '/kk/school',
        languages: { 'ru-KZ': '/school', 'kk-KZ': '/kk/school', 'x-default': '/school' },
    },
    openGraph: {
        title: 'Digital Pride мектебі — маркетингті оқыту',
        description: 'Тәжірибешілерден SMM, таргет, SEO және контекст курстары. Нақты кейстер.',
        url: '/kk/school',
    },
};

export default function SchoolPage() {
    return <SchoolClient />;
}
