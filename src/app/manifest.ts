import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Digital Pride — маркетинговое агентство в Алматы',
        short_name: 'Digital Pride',
        description: 'Маркетинговое агентство полного цикла в Алматы. SMM, таргет, контекст, SEO, разработка сайтов.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#ef4444',
        lang: 'ru',
        icons: [
            {
                src: '/fonts/new-logo.svg',
                sizes: 'any',
                type: 'image/svg+xml',
                purpose: 'any',
            },
            {
                src: '/favicon.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
        ],
        categories: ['business', 'marketing'],
    };
}
