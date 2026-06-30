import type { Metadata } from 'next';
import { LocaleProvider } from '@/lib/locale-context';

export const metadata: Metadata = {
    title: {
        default: 'Digital Pride — Алматыдағы маркетинг агенттігі | SMM, таргет, сайттар',
        template: '%s | Digital Pride',
    },
    description: 'Digital Pride — Алматыдағы толық циклді перформанс-агенттік. SMM, таргеттелген және контекстік жарнама, сайт жасау, SEO, брендинг. Нәтижеге жұмыс істейміз.',
    robots: {
        index: false,
        follow: true,
    },
    alternates: {
        canonical: '/kk',
        languages: {
            'ru-KZ': '/',
            'kk-KZ': '/kk',
        },
    },
    openGraph: {
        locale: 'kk_KZ',
    },
};

export default function KkLayout({ children }: { children: React.ReactNode }) {
    return (
        <LocaleProvider locale="kk">
            <div lang="kk">{children}</div>
        </LocaleProvider>
    );
}
