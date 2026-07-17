import type { Metadata } from 'next';
import '../globals.css';
import SiteShell from '@/components/layout/SiteShell';

/**
 * Корневой layout КАЗАХСКОЙ версии — второй root layout наравне с app/(ru)/layout.tsx.
 *
 * Ради него всё и затевалось: <html lang="kk"> теперь стоит в ОТДАВАЕМОМ HTML.
 * Раньше язык проставлял клиентский HtmlLang уже после гидрации, и краулер без
 * JS (в частности Яндекс, а он для КЗ важен) видел казахские страницы русскими.
 */
export const metadata: Metadata = {
    metadataBase: new URL('https://digitalpride.kz'),
    title: {
        default: 'Digital Pride — Алматыдағы маркетинг агенттігі | SMM, таргет, сайттар',
        template: '%s | Digital Pride',
    },
    description: 'Digital Pride — Алматыдағы толық циклді перформанс-агенттік. SMM, таргеттелген және контекстік жарнама, сайт жасау, SEO, брендинг. Нәтижеге жұмыс істейміз.',
    authors: [{ name: 'Digital Pride' }],
    alternates: {
        canonical: '/kk',
        languages: {
            'ru-KZ': '/',
            'kk-KZ': '/kk',
            'x-default': '/',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'kk_KZ',
        siteName: 'Digital Pride',
        images: [
            {
                url: '/og-image/',
                width: 1200,
                height: 630,
                alt: 'Digital Pride — Алматыдағы маркетинг агенттігі',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['/og-image/'],
    },
    verification: {
        google: 'SUwnZjQm4Rz0VgQ6e1rxRI7vL3XiOQGteqMKuKFZ-Mc',
        yandex: 'caabe2be285a3cb5',
    },
};

export default function KkRootLayout({ children }: { children: React.ReactNode }) {
    return <SiteShell locale="kk">{children}</SiteShell>;
}
