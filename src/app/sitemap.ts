import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://digitalpride.kz';

    const pages = [
        { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/smm-almaty', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/target-almaty', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/kontekstnaya-reklama-almaty', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/sozdanie-sajtov-almaty', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/marketing-almaty', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/seo-almaty', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/upravlenie-reputaciej-almaty', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/marketing-consulting-almaty', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/voronka-prodazh-almaty', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/audit-reklamy', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/bitrix24', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/perfomans-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/target-reklama-instagram-almaty', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/target-reklama-tiktok-almaty', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/kontekstnaya-reklama-google-almaty', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/kontekstnaya-reklama-yandex-almaty', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/razrabotka-logotipa-almaty', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/firmennyj-stil-almaty', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/lending-almaty', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/internet-magazin-almaty', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/smm-prodvizhenie-astana', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/digital-marketing-almaty', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/school', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/cases', priority: 0.7, changeFrequency: 'weekly' as const },
        { url: '/contacts', priority: 0.6, changeFrequency: 'yearly' as const },
        { url: '/pricing', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/threads-prodvizhenie', priority: 0.8, changeFrequency: 'monthly' as const },
    ];

    return pages.map((page) => ({
        url: `${baseUrl}${page.url}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));
}
