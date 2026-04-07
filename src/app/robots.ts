import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
            { userAgent: 'Googlebot', allow: '/' },
            { userAgent: 'YandexBot', allow: '/' },
            { userAgent: 'Bingbot', allow: '/' },
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'ChatGPT-User', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
        ],
        sitemap: 'https://digitalpride.kz/sitemap.xml',
    };
}
