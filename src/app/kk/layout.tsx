import type { Metadata } from 'next';
import { LocaleProvider } from '@/lib/locale-context';
import HtmlLang from './HtmlLang';

export const metadata: Metadata = {
    title: {
        default: 'Digital Pride — Алматыдағы маркетинг агенттігі | SMM, таргет, сайттар',
        template: '%s | Digital Pride',
    },
    description: 'Digital Pride — Алматыдағы толық циклді перформанс-агенттік. SMM, таргеттелген және контекстік жарнама, сайт жасау, SEO, брендинг. Нәтижеге жұмыс істейміз.',
    alternates: {
        canonical: '/kk',
        languages: {
            'ru-KZ': '/',
            'kk-KZ': '/kk',
            'x-default': '/',
        },
    },
    openGraph: {
        locale: 'kk_KZ',
    },
};

export default function KkLayout({ children }: { children: React.ReactNode }) {
    return (
        <LocaleProvider locale="kk">
            <HtmlLang lang="kk" />
            <div lang="kk">{children}</div>
        </LocaleProvider>
    );
}
