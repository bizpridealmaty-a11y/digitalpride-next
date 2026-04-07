import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import RawHeader from "../components/layout/RawHeader";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL('https://digitalpride.kz'),
  title: {
    default: 'Digital Pride — маркетинговое агентство в Алматы | SMM, таргет, сайты',
    template: '%s | Digital Pride',
  },
  description: 'Digital Pride — перформанс-агентство полного цикла в Алматы. SMM, таргетированная и контекстная реклама, разработка сайтов, SEO, брендинг. Работаем на результат.',
  keywords: 'маркетинговое агентство алматы, digital агентство казахстан, smm алматы, таргетированная реклама алматы, создание сайтов алматы, seo продвижение алматы',
  authors: [{ name: 'Digital Pride' }],
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    siteName: 'Digital Pride',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preload" href="/fonts/Unbounded-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Unbounded-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Onest-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Onest-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700&family=Unbounded:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/bootstrap_custom.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link href="/css/all.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/adaptive.css" />
        <link rel="stylesheet" href="/css/main_new.css" />
        <link rel="stylesheet" href="/css/default.css" />
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
                trackHash:true
              });`,
          }}
        />
      </head>
      <body>
        <RawHeader />
        {children}

        {/* Floating WhatsApp button */}
        <FloatingWhatsApp />

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
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js" strategy="lazyOnload" />
        <Script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/js/popper.min.js" strategy="lazyOnload" />
        <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/parallax.min.js" strategy="lazyOnload" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="/js/mask.js" strategy="lazyOnload" />
        <Script src="/js/main-new.js" strategy="lazyOnload" />
        <Script src="/js/default.js" strategy="lazyOnload" />

        {/* LocalBusiness Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Digital Pride",
              "image": "https://digitalpride.kz/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Алматы",
                "addressCountry": "KZ"
              },
              "url": "https://digitalpride.kz/",
              "telephone": "+7-707-035-7777"
            })
          }}
        />
      </body>
    </html>
  );
}

