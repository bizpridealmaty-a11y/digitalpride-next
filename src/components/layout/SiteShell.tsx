import DpCardNav from './DpCardNav';
import Footer from './Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import MotionProvider from './MotionProvider';
import { LocaleProvider } from '@/lib/locale-context';
import { unbounded, onest } from '@/lib/fonts';

/**
 * Общая оболочка сайта: <html>, <head>, <body> и всё, что в них.
 *
 * Живёт отдельным компонентом, потому что корневых layout теперь ДВА —
 * app/(ru)/layout.tsx и app/(kk)/layout.tsx. В App Router тег <html> может
 * отдать только корневой layout, вложенный не может; поэтому чтобы у /kk/
 * в ОТДАВАЕМОМ html стоял lang="kk" (а не проставлялся скриптом после
 * гидрации, как было раньше), языковые версии разведены по route-группам.
 * Группы в скобках на URL не влияют.
 *
 * Всё, что не зависит от языка, держим здесь в одном экземпляре — иначе две
 * копии layout неизбежно разъедутся.
 */
export default function SiteShell({
    locale,
    children,
}: {
    locale: 'ru' | 'kk';
    children: React.ReactNode;
}) {
    const inLanguage = locale === 'kk' ? 'kk-KZ' : 'ru-KZ';

    return (
        <html lang={locale} className={`${unbounded.variable} ${onest.variable}`}>
            <head>
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
                {/* Google Analytics 4 (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-XCWF6RR7KM" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XCWF6RR7KM');`,
                    }}
                />
            </head>
            <body>
                <LocaleProvider locale={locale}>
                    <MotionProvider>
                        <DpCardNav />
                        {children}
                        <Footer />

                        {/* Floating WhatsApp button */}
                        <FloatingWhatsApp />
                    </MotionProvider>
                </LocaleProvider>

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
                {/* WebSite Schema.org with SearchAction (sitelinks search box) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "@id": "https://digitalpride.kz/#website",
                            "url": "https://digitalpride.kz/",
                            "name": "Digital Pride",
                            "description": "Маркетинговое агентство в Алматы — SMM, таргет, контекст, SEO, разработка сайтов, брендинг",
                            "publisher": { "@id": "https://digitalpride.kz/#organization" },
                            "inLanguage": inLanguage,
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": {
                                    "@type": "EntryPoint",
                                    "urlTemplate": "https://digitalpride.kz/blog?q={search_term_string}"
                                },
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}
                />
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
                                "https://www.instagram.com/digitalpride.kz/",
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
                                "https://www.instagram.com/digitalpride.kz/",
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
                                "https://www.instagram.com/digitalpride.kz/"
                            ]
                        })
                    }}
                />
            </body>
        </html>
    );
}
