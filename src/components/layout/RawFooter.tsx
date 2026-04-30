import React from 'react';
import Script from 'next/script';

export default function RawFooter() {
    return (
        <>
            {/* Bitrix24 site button widget */}
            <Script
                id="bitrix24-widget"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b5200063/crm/site_button/loader_7_f036wh.js');`,
                }}
            />

            {/* Meta Pixel */}
            <Script
                id="meta-pixel"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','519871262919971');fbq('track','PageView');`,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    alt=""
                    src="https://www.facebook.com/tr?id=519871262919971&ev=PageView&noscript=1"
                />
            </noscript>
        </>
    );
}
