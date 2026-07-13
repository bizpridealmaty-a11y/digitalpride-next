import type { Metadata } from 'next';
import Link from 'next/link';
import RawFooter from '../../components/layout/RawFooter';
import Breadcrumbs from '../../components/Breadcrumbs';
import { casesData } from '../../data/cases';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
    title: 'Карта сайта Digital Pride',
    description: 'HTML-карта всех страниц сайта digitalpride.kz: услуги, кейсы, блог, контакты. Удобная навигация для пользователей и поисковиков.',
    alternates: { canonical: '/sitemap-html' },
    robots: { index: false, follow: true },
};

const sections = [
    {
        title: 'Главные разделы',
        links: [
            { href: '/', label: 'Главная' },
            { href: '/services/', label: 'Все услуги' },
            { href: '/cases/', label: 'Кейсы' },
            { href: '/pricing/', label: 'Цены' },
            { href: '/school/', label: 'Обучение' },
            { href: '/blog/', label: 'Блог' },
            { href: '/o-nas/', label: 'О нас' },
            { href: '/contacts/', label: 'Контакты' },
        ],
    },
    {
        title: 'Маркетинговые услуги',
        links: [
            { href: '/smm-almaty/', label: 'SMM продвижение в Алматы' },
            { href: '/target-almaty/', label: 'Таргетированная реклама' },
            { href: '/target-reklama-instagram-almaty/', label: 'Таргет в Instagram' },
            { href: '/target-reklama-tiktok-almaty/', label: 'Таргет в TikTok' },
            { href: '/kontekstnaya-reklama-almaty/', label: 'Контекстная реклама' },
            { href: '/kontekstnaya-reklama-google-almaty/', label: 'Google Ads' },
            { href: '/kontekstnaya-reklama-yandex-almaty/', label: 'Яндекс.Директ' },
            { href: '/seo-almaty/', label: 'SEO продвижение' },
            { href: '/marketing-almaty/', label: 'Маркетинговая стратегия' },
            { href: '/marketing-consulting-almaty/', label: 'Маркетинг-консалтинг' },
            { href: '/perfomans-marketing/', label: 'Performance-маркетинг' },
            { href: '/upravlenie-reputaciej-almaty/', label: 'Управление репутацией (SERM)' },
            { href: '/voronka-prodazh-almaty/', label: 'Воронка продаж' },
            { href: '/audit-reklamy/', label: 'Аудит рекламы' },
            { href: '/digital-marketing-almaty/', label: 'Digital-маркетинг' },
            { href: '/vneshnij-otdel-marketinga/', label: 'Внешний отдел маркетинга' },
            { href: '/threads-prodvizhenie/', label: 'Продвижение в Threads' },
        ],
    },
    {
        title: 'Разработка и брендинг',
        links: [
            { href: '/sozdanie-sajtov-almaty/', label: 'Создание сайтов' },
            { href: '/lending-almaty/', label: 'Лендинги' },
            { href: '/internet-magazin-almaty/', label: 'Интернет-магазины' },
            { href: '/firmennyj-stil-almaty/', label: 'Фирменный стиль' },
            { href: '/razrabotka-logotipa-almaty/', label: 'Разработка логотипа' },
        ],
    },
    {
        title: 'SMM по городам',
        links: [
            { href: '/smm-prodvizhenie-astana/', label: 'SMM в Астане' },
            { href: '/smm-prodvizhenie-shymkent/', label: 'SMM в Шымкенте' },
            { href: '/smm-prodvizhenie-karaganda/', label: 'SMM в Караганде' },
        ],
    },
    {
        title: 'SMM по нишам',
        links: [
            { href: '/smm-dlya-restoranov-almaty/', label: 'SMM для ресторанов' },
            { href: '/smm-dlya-stomatologii-almaty/', label: 'SMM для стоматологий' },
            { href: '/smm-dlya-nedvizhimosti-almaty/', label: 'SMM для недвижимости' },
        ],
    },
    {
        title: 'Служебные',
        links: [
            { href: '/privacy/', label: 'Политика конфиденциальности' },
        ],
    },
];

export default function HtmlSitemap() {
    const cases = casesData;
    const posts = getAllPosts();

    return (
        <>
            <main className="bg-white pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Breadcrumbs items={[{ name: 'Карта сайта', item: '/sitemap-html' }]} />

                    <h1
                        className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight"
                        style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                        Карта сайта
                    </h1>
                    <p className="text-gray-600 mb-12 text-lg">
                        Полный список всех страниц digitalpride.kz. Также доступны{' '}
                        <a href="/sitemap.xml" className="text-red-600 underline">XML-карта</a>{' '}
                        и{' '}
                        <a href="/sitemap-images.xml" className="text-red-600 underline">карта изображений</a>{' '}
                        для поисковиков.
                    </p>

                    {sections.map((section) => (
                        <section key={section.title} className="mb-10">
                            <h2 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                {section.title}
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {section.links.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="text-red-600 hover:underline text-sm">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                            Кейсы клиентов
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {cases.map((c) => (
                                <li key={c.slug}>
                                    <Link href={`/cases/${c.slug}/`} className="text-red-600 hover:underline text-sm">
                                        {c.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {posts.length > 0 && (
                        <section className="mb-10">
                            <h2 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                Статьи блога
                            </h2>
                            <ul className="grid grid-cols-1 gap-2">
                                {posts.map((p) => (
                                    <li key={p.slug}>
                                        <Link href={`/blog/${p.slug}/`} className="text-red-600 hover:underline text-sm">
                                            {p.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </main>
            <RawFooter />
        </>
    );
}
