import type { MetadataRoute } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import { posts } from '@/lib/blog';
import { casesData } from '@/data/cases';

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

type PageMeta = {
    url: string;
    priority: number;
    changeFrequency: ChangeFreq;
};

const pages: PageMeta[] = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/smm-almaty', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/target-almaty', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/kontekstnaya-reklama-almaty', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/sozdanie-sajtov-almaty', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/marketing-almaty', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/seo-almaty', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/upravlenie-reputaciej-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/marketing-consulting-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/voronka-prodazh-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/audit-reklamy', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/perfomans-marketing', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/target-reklama-instagram-almaty', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/target-reklama-tiktok-almaty', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/kontekstnaya-reklama-google-almaty', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/kontekstnaya-reklama-yandex-almaty', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/razrabotka-logotipa-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/firmennyj-stil-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/lending-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/internet-magazin-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/smm-prodvizhenie-astana', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/smm-prodvizhenie-shymkent', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/smm-prodvizhenie-karaganda', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/smm-dlya-restoranov-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/smm-dlya-stomatologii-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/smm-dlya-nedvizhimosti-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/digital-marketing-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/vneshnij-otdel-marketinga', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/services', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/school', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/cases', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/contacts', priority: 0.6, changeFrequency: 'yearly' },
    { url: '/o-nas', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/sitemap-html', priority: 0.4, changeFrequency: 'weekly' },
    { url: '/pricing', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/threads-prodvizhenie', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/chat-boty-almaty', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/otdel-prodazh-pod-klyuch', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/cases/laser-epilation', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/cases/plov-delivery', priority: 0.7, changeFrequency: 'monthly' },
];

function pageMtime(slug: string): Date {
    const rel = slug === '/' ? 'page.tsx' : `${slug.replace(/^\//, '')}/page.tsx`;
    const filePath = path.join(process.cwd(), 'src', 'app', rel);
    try {
        return fs.statSync(filePath).mtime;
    } catch {
        return new Date();
    }
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://digitalpride.kz';

    // Ensure trailing slash on all URLs to match trailingSlash:true in next.config
    const withSlash = (u: string) => (u.endsWith('/') ? u : `${u}/`);

    const staticEntries = pages.map((page) => ({
        url: withSlash(`${baseUrl}${page.url}`),
        lastModified: pageMtime(page.url),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));

    const blogEntries = posts.map((post) => ({
        url: withSlash(`${baseUrl}/blog/${post.slug}`),
        lastModified: new Date(post.updatedAt ?? post.publishedAt),
        changeFrequency: 'monthly' as ChangeFreq,
        priority: 0.6,
    }));

    const caseEntries = casesData.map((c) => ({
        url: withSlash(`${baseUrl}/cases/${c.slug}`),
        lastModified: pageMtime('/cases'),
        changeFrequency: 'monthly' as ChangeFreq,
        priority: 0.6,
    }));

    // KK-версия открыта для индексации (noindex снят, hreflang взаимный).
    // Включаем только те /kk/-страницы, для которых реально есть файл перевода.
    const kkEntries = pages
        .filter((page) => {
            const rel = page.url === '/' ? 'kk/page.tsx' : `kk${page.url}/page.tsx`;
            return fs.existsSync(path.join(process.cwd(), 'src', 'app', rel));
        })
        .map((page) => {
            const kkUrl = page.url === '/' ? '/kk' : `/kk${page.url}`;
            return {
                url: withSlash(`${baseUrl}${kkUrl}`),
                lastModified: pageMtime(kkUrl),
                changeFrequency: page.changeFrequency,
                // Чуть ниже приоритет: RU — основная языковая версия
                priority: Math.max(0.3, Number((page.priority - 0.1).toFixed(1))),
            };
        });

    return [...staticEntries, ...blogEntries, ...caseEntries, ...kkEntries];
}
