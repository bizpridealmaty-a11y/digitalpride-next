import type { Metadata } from "next";
import "../globals.css";
import SiteShell from "@/components/layout/SiteShell";

/**
 * Корневой layout РУССКОЙ версии. Второй корневой — app/(kk)/layout.tsx.
 * Разметка общая и живёт в SiteShell; здесь только метаданные.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://digitalpride.kz'),
  title: {
    default: 'Digital Pride — маркетинговое агентство в Алматы',
    template: '%s | Digital Pride',
  },
  description: 'Digital Pride — перформанс-агентство полного цикла в Алматы. SMM, таргетированная и контекстная реклама, разработка сайтов, SEO, брендинг. Работаем на результат.',
  authors: [{ name: 'Digital Pride' }],
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    siteName: 'Digital Pride',
    images: [
      {
        url: '/og-image/',
        width: 1200,
        height: 630,
        alt: 'Digital Pride — маркетинговое агентство в Алматы',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image/'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'ru-KZ': '/',
      'kk-KZ': '/kk',
      'x-default': '/',
    },
  },
  verification: {
    google: 'SUwnZjQm4Rz0VgQ6e1rxRI7vL3XiOQGteqMKuKFZ-Mc',
    yandex: 'caabe2be285a3cb5',
    // Bing: добавьте реальный код из Bing Webmaster Tools, когда зарегистрируете сайт
    // other: { 'msvalidate.01': ['РЕАЛЬНЫЙ_КОД'] },
  },
};

export default function RuRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell locale="ru">{children}</SiteShell>;
}
