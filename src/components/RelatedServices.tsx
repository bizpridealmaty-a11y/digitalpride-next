'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Related = {
    href: string;
    title: string;
    description: string;
};

const ALL: Related[] = [
    { href: '/smm-almaty/', title: 'SMM продвижение', description: 'Контент, Reels, Stories, комьюнити-менеджмент.' },
    { href: '/target-almaty/', title: 'Таргетированная реклама', description: 'Instagram, Facebook, TikTok. Заявки от 3 дней.' },
    { href: '/target-reklama-instagram-almaty/', title: 'Таргет Instagram', description: 'Точечная реклама в Instagram под ваш бизнес.' },
    { href: '/target-reklama-tiktok-almaty/', title: 'Таргет TikTok', description: 'Реклама в самой быстрорастущей соцсети.' },
    { href: '/kontekstnaya-reklama-almaty/', title: 'Контекстная реклама', description: 'Google Ads и Яндекс.Директ — заявки с первого дня.' },
    { href: '/kontekstnaya-reklama-google-almaty/', title: 'Google Ads', description: 'Поисковая реклама в Google.' },
    { href: '/kontekstnaya-reklama-yandex-almaty/', title: 'Яндекс.Директ', description: 'Реклама в Яндекс для KZ-аудитории.' },
    { href: '/seo-almaty/', title: 'SEO продвижение', description: 'Вывод сайта в ТОП-10 Google и Яндекс.' },
    { href: '/sozdanie-sajtov-almaty/', title: 'Разработка сайтов', description: 'Лендинги, корпоративные, e-commerce.' },
    { href: '/lending-almaty/', title: 'Лендинги', description: 'Продающие посадочные страницы.' },
    { href: '/internet-magazin-almaty/', title: 'Интернет-магазины', description: 'E-commerce под ключ.' },
    { href: '/marketing-almaty/', title: 'Маркетинговая стратегия', description: 'Системный план роста бизнеса.' },
    { href: '/marketing-consulting-almaty/', title: 'Маркетинг-консалтинг', description: 'Часовая консультация эксперта.' },
    { href: '/perfomans-marketing/', title: 'Performance-маркетинг', description: 'Платные каналы с фокусом на ROAS.' },
    { href: '/upravlenie-reputaciej-almaty/', title: 'Управление репутацией', description: 'SERM: работа с отзывами и негативом.' },
    { href: '/firmennyj-stil-almaty/', title: 'Фирменный стиль', description: 'Логотип, брендбук, визуальная упаковка.' },
    { href: '/razrabotka-logotipa-almaty/', title: 'Разработка логотипа', description: 'Узнаваемый знак для вашего бренда.' },
    { href: '/voronka-prodazh-almaty/', title: 'Воронка продаж', description: 'От первого касания до повторной покупки.' },
    { href: '/audit-reklamy/', title: 'Аудит рекламы', description: 'Бесплатный разбор ваших кампаний.' },
    { href: '/threads-prodvizhenie/', title: 'Threads', description: 'Продвижение в новой соцсети Meta.' },
    { href: '/digital-marketing-almaty/', title: 'Digital-маркетинг', description: 'Комплексное продвижение онлайн.' },
    { href: '/vneshnij-otdel-marketinga/', title: 'Внешний отдел маркетинга', description: 'Полная команда маркетинга на аутсорсе.' },
];

const RELATIONS: Record<string, string[]> = {
    '/smm-almaty': ['/target-almaty', '/target-reklama-instagram-almaty', '/firmennyj-stil-almaty', '/threads-prodvizhenie'],
    '/target-almaty': ['/smm-almaty', '/target-reklama-instagram-almaty', '/target-reklama-tiktok-almaty', '/kontekstnaya-reklama-almaty'],
    '/target-reklama-instagram-almaty': ['/target-almaty', '/smm-almaty', '/target-reklama-tiktok-almaty', '/kontekstnaya-reklama-almaty'],
    '/target-reklama-tiktok-almaty': ['/target-almaty', '/smm-almaty', '/target-reklama-instagram-almaty', '/perfomans-marketing'],
    '/kontekstnaya-reklama-almaty': ['/kontekstnaya-reklama-google-almaty', '/kontekstnaya-reklama-yandex-almaty', '/seo-almaty', '/perfomans-marketing'],
    '/kontekstnaya-reklama-google-almaty': ['/kontekstnaya-reklama-almaty', '/kontekstnaya-reklama-yandex-almaty', '/seo-almaty', '/audit-reklamy'],
    '/kontekstnaya-reklama-yandex-almaty': ['/kontekstnaya-reklama-almaty', '/kontekstnaya-reklama-google-almaty', '/seo-almaty', '/audit-reklamy'],
    '/seo-almaty': ['/sozdanie-sajtov-almaty', '/kontekstnaya-reklama-almaty', '/marketing-almaty', '/digital-marketing-almaty'],
    '/sozdanie-sajtov-almaty': ['/lending-almaty', '/internet-magazin-almaty', '/seo-almaty', '/firmennyj-stil-almaty'],
    '/lending-almaty': ['/sozdanie-sajtov-almaty', '/kontekstnaya-reklama-almaty', '/target-almaty', '/voronka-prodazh-almaty'],
    '/internet-magazin-almaty': ['/sozdanie-sajtov-almaty', '/seo-almaty', '/perfomans-marketing', '/kontekstnaya-reklama-almaty'],
    '/marketing-almaty': ['/marketing-consulting-almaty', '/perfomans-marketing', '/vneshnij-otdel-marketinga', '/voronka-prodazh-almaty'],
    '/marketing-consulting-almaty': ['/marketing-almaty', '/audit-reklamy', '/voronka-prodazh-almaty', '/vneshnij-otdel-marketinga'],
    '/perfomans-marketing': ['/target-almaty', '/kontekstnaya-reklama-almaty', '/marketing-almaty', '/audit-reklamy'],
    '/upravlenie-reputaciej-almaty': ['/seo-almaty', '/smm-almaty', '/marketing-almaty', '/firmennyj-stil-almaty'],
    '/firmennyj-stil-almaty': ['/razrabotka-logotipa-almaty', '/sozdanie-sajtov-almaty', '/smm-almaty', '/marketing-almaty'],
    '/razrabotka-logotipa-almaty': ['/firmennyj-stil-almaty', '/sozdanie-sajtov-almaty', '/smm-almaty', '/marketing-almaty'],
    '/voronka-prodazh-almaty': ['/marketing-almaty', '/lending-almaty', '/marketing-consulting-almaty', '/perfomans-marketing'],
    '/audit-reklamy': ['/target-almaty', '/kontekstnaya-reklama-almaty', '/marketing-consulting-almaty', '/perfomans-marketing'],
    '/threads-prodvizhenie': ['/smm-almaty', '/target-almaty', '/target-reklama-instagram-almaty', '/target-reklama-tiktok-almaty'],
    '/digital-marketing-almaty': ['/seo-almaty', '/target-almaty', '/marketing-almaty', '/perfomans-marketing'],
    '/vneshnij-otdel-marketinga': ['/marketing-almaty', '/marketing-consulting-almaty', '/perfomans-marketing', '/voronka-prodazh-almaty'],
    '/smm-prodvizhenie-astana': ['/smm-almaty', '/target-almaty', '/target-reklama-instagram-almaty', '/firmennyj-stil-almaty'],
    '/smm-prodvizhenie-shymkent': ['/smm-almaty', '/smm-prodvizhenie-astana', '/target-almaty', '/firmennyj-stil-almaty'],
    '/smm-prodvizhenie-karaganda': ['/smm-almaty', '/smm-prodvizhenie-astana', '/target-almaty', '/firmennyj-stil-almaty'],
    '/smm-dlya-restoranov-almaty': ['/smm-almaty', '/target-almaty', '/upravlenie-reputaciej-almaty', '/firmennyj-stil-almaty'],
    '/smm-dlya-stomatologii-almaty': ['/smm-almaty', '/target-almaty', '/seo-almaty', '/upravlenie-reputaciej-almaty'],
    '/smm-dlya-nedvizhimosti-almaty': ['/smm-almaty', '/target-almaty', '/kontekstnaya-reklama-almaty', '/sozdanie-sajtov-almaty'],
};

export default function RelatedServices() {
    const pathname = usePathname() || '';
    const slugs = RELATIONS[pathname] || ['/smm-almaty', '/target-almaty', '/seo-almaty', '/sozdanie-sajtov-almaty'];
    const items = slugs
        .map((s) => ALL.find((a) => a.href === s))
        .filter(Boolean) as Related[];

    if (items.length === 0) return null;

    return (
        <section className="py-20 bg-white text-black">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-center">
                    Похожие услуги
                </h2>
                <p className="text-center text-gray-500 mb-12">
                    Закажите комплекс — получите скидку
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {items.map((it) => (
                        <Link
                            key={it.href}
                            href={it.href}
                            className="group block p-6 rounded-2xl border border-gray-200 bg-white hover:border-red-400 hover:shadow-lg transition-all"
                        >
                            <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">
                                {it.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                {it.description}
                            </p>
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                                Подробнее
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
