import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/og-image', '/assets/components/'],
            },
            { userAgent: 'Googlebot', allow: '/', disallow: ['/api/', '/_next/'] },
            { userAgent: 'YandexBot', allow: '/', disallow: ['/api/', '/_next/'], crawlDelay: 1 },
            { userAgent: 'Bingbot', allow: '/', disallow: ['/api/', '/_next/'] },
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'ChatGPT-User', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
            { userAgent: 'GoogleOther', allow: '/' },
            { userAgent: 'Google-Extended', allow: '/' },
            { userAgent: 'YandexImages', allow: '/' },
            { userAgent: 'TwoGisBot', allow: '/' },
        ],
        sitemap: [
            'https://digitalpride.kz/sitemap-index.xml',
            'https://digitalpride.kz/sitemap.xml',
            'https://digitalpride.kz/sitemap-images.xml',
        ],
        host: 'https://digitalpride.kz',
    };
}
