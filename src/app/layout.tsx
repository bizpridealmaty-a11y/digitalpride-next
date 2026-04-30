import type { Metadata } from "next";
import "./globals.css";
import RawHeader from "../components/layout/RawHeader";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import MotionProvider from "../components/layout/MotionProvider";
import { unbounded, onest } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL('https://digitalpride.kz'),
  title: {
    default: 'Digital Pride — маркетинговое агентство в Алматы | SMM, таргет, сайты',
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
        url: '/og-image',
        width: 1200,
        height: 630,
        alt: 'Digital Pride — маркетинговое агентство в Алматы',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${onest.variable}`}>
      <head>
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/adaptive.css" />
        {/* Yandex.Metrika */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(79798549, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                trackHash:true,
                trafficSampling:10
              });`,
          }}
        />
      </head>
      <body>
        <MotionProvider>
          <RawHeader />
          {children}

          {/* Floating WhatsApp button */}
          <FloatingWhatsApp />
        </MotionProvider>

        {/* Pulse animation */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes wa-pulse {
            0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
            70% { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
            100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
          }
          a[aria-label="WhatsApp"]:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 30px rgba(37,211,102,0.6) !important;
          }
        `}} />
        {/* LocalBusiness Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://digitalpride.kz/#organization",
              "name": "Digital Pride",
              "image": "https://digitalpride.kz/fonts/new-logo.svg",
              "logo": "https://digitalpride.kz/fonts/new-logo.svg",
              "description": "Маркетинговое агентство полного цикла в Алматы. SMM, таргетированная и контекстная реклама, разработка сайтов, SEO, брендинг.",
              "url": "https://digitalpride.kz/",
              "telephone": "+77070357777",
              "priceRange": "₸₸",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "проспект Бухар-Жирау, 33, 3 этаж, студия 13",
                "addressLocality": "Алматы",
                "addressRegion": "Алматы",
                "addressCountry": "KZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.232741,
                "longitude": 76.922234
              },
              "hasMap": "https://2gis.kz/almaty/firm/70000001090336559",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/digital.pride.smm/",
                "https://t.me/timoshevskij",
                "https://wa.me/77070357777",
                "https://2gis.kz/almaty/firm/70000001090336559"
              ]
            })
          }}
        />
        {/* Organization Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Digital Pride",
              "url": "https://digitalpride.kz/",
              "logo": "https://digitalpride.kz/fonts/new-logo.svg",
              "founder": {
                "@type": "Person",
                "name": "Дмитрий Тимошевский",
                "jobTitle": "Основатель Digital Pride"
              },
              "sameAs": [
                "https://www.instagram.com/digital.pride.smm/",
                "https://t.me/timoshevskij",
                "https://wa.me/77070357777",
                "https://2gis.kz/almaty/firm/70000001090336559"
              ]
            })
          }}
        />
        {/* Founder Person Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Дмитрий Тимошевский",
              "givenName": "Дмитрий",
              "familyName": "Тимошевский",
              "additionalName": "Сергеевич",
              "jobTitle": "Основатель Digital Pride",
              "image": "https://digitalpride.kz/images/founder-portrait.webp",
              "url": "https://digitalpride.kz/",
              "worksFor": { "@id": "https://digitalpride.kz/#organization" },
              "sameAs": [
                "https://t.me/timoshevskij",
                "https://www.instagram.com/digital.pride.smm/"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
