import type { Metadata } from 'next';
import Link from 'next/link';
import RawFooter from '../../components/layout/RawFooter';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTA from '../../components/home/CTA';

export const metadata: Metadata = {
    title: 'Услуги маркетингового агентства Digital Pride в Алматы',
    description: 'Полный спектр digital-услуг: SMM, таргет, контекст, SEO, разработка сайтов, брендинг и SERM. Прозрачные KPI, заявки от 3 дней, кейсы 100+.',
    alternates: { canonical: '/services' },
    openGraph: {
        title: 'Услуги маркетингового агентства | Digital Pride',
        description: 'SMM, таргет, контекст, SEO, разработка сайтов, брендинг — всё под ключ.',
        url: '/services',
    },
};

type ServiceCard = {
    title: string;
    description: string;
    href: string;
    accent?: 'red' | 'neutral';
    badge?: string;
};

const services: ServiceCard[] = [
    {
        title: 'SMM продвижение',
        description: 'Контент, Reels, Stories и комьюнити-менеджмент в Instagram, TikTok, Facebook. Первые результаты от 2 недель.',
        href: '/smm-almaty/',
        accent: 'red',
    },
    {
        title: 'Таргетированная реклама',
        description: 'Instagram, Facebook, TikTok. Look-alike, ретаргетинг, A/B-тесты креативов. Заявки от 3 дней.',
        href: '/target-almaty/',
    },
    {
        title: 'Контекстная реклама (PPC)',
        description: 'Google Ads и Яндекс.Директ. Заявки с первого дня запуска, прозрачная сквозная аналитика.',
        href: '/kontekstnaya-reklama-almaty/',
    },
    {
        title: 'SEO продвижение',
        description: 'Вывод сайта в ТОП-10 Google и Яндекс. Техаудит, семантика, контент, линкбилдинг.',
        href: '/seo-almaty/',
    },
    {
        title: 'Разработка сайтов',
        description: 'Лендинги, корпоративные сайты, интернет-магазины на Next.js и WordPress. От 300 000 ₸.',
        href: '/sozdanie-sajtov-almaty/',
    },
    {
        title: 'Маркетинговая стратегия',
        description: 'Глубокий анализ рынка, ЦА, конкурентов. Дорожная карта роста и системного маркетинга.',
        href: '/marketing-almaty/',
    },
    {
        title: 'Управление репутацией (SERM)',
        description: 'Работа с отзывами, мониторинг упоминаний, вытеснение негатива из ТОПа поиска.',
        href: '/upravlenie-reputaciej-almaty/',
    },
    {
        title: 'Брендинг и фирменный стиль',
        description: 'Разработка логотипа, фирменного стиля, брендбука. Визуальная упаковка вашего бизнеса.',
        href: '/firmennyj-stil-almaty/',
    },
    {
        title: 'Аудит рекламы',
        description: 'Бесплатный аудит ваших текущих кампаний. Найдём, где вы теряете деньги.',
        href: '/audit-reklamy/',
        badge: 'Бесплатно',
        accent: 'red',
    },
    {
        title: 'Воронка продаж',
        description: 'Построение системной воронки от первого касания до повторной продажи.',
        href: '/voronka-prodazh-almaty/',
    },
    {
        title: 'Performance-маркетинг',
        description: 'Комплексный подход к платным каналам с фокусом на ROAS и unit-экономику.',
        href: '/perfomans-marketing/',
    },
    {
        title: 'Threads — продвижение',
        description: 'Один из первых в Казахстане — продвижение в новой соцсети Meta.',
        href: '/threads-prodvizhenie/',
        badge: '🔥 Trend',
        accent: 'red',
    },
    {
        title: 'Маркетинг-консалтинг',
        description: 'Часовая или ежемесячная консультация маркетолога-эксперта по вашему проекту.',
        href: '/marketing-consulting-almaty/',
    },
    {
        title: 'Внешний отдел маркетинга',
        description: 'Полный маркетинг-отдел на аутсорсе. Стратег, таргетолог, дизайнер, копирайтер — в одной команде.',
        href: '/vneshnij-otdel-marketinga/',
    },
];

export default function ServicesHub() {
    return (
        <>
            <main className="bg-white pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-4 max-w-7xl">
                    <Breadcrumbs items={[{ name: 'Услуги', item: '/services' }]} />

                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 uppercase tracking-wider">
                            Полный цикл digital-маркетинга
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                            Услуги Digital Pride
                        </h1>
                        <p className="text-lg text-gray-600 font-medium">
                            Маркетинговое агентство в Алматы. Берёмся за проекты любой сложности — от запуска первой рекламной кампании до системного построения отдела маркетинга.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className={`group relative block p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                                    s.accent === 'red'
                                        ? 'border-red-200 bg-gradient-to-br from-red-50 to-white hover:border-red-400'
                                        : 'border-gray-200 bg-white hover:border-gray-400'
                                }`}
                            >
                                {s.badge && (
                                    <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${
                                        s.accent === 'red' ? 'bg-red-600 text-white' : 'bg-gray-900 text-white'
                                    }`}>
                                        {s.badge}
                                    </span>
                                )}
                                <h2 className={`text-xl font-bold mb-3 ${s.accent === 'red' ? 'text-red-700' : 'text-black'}`}>
                                    {s.title}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {s.description}
                                </p>
                                <div className={`inline-flex items-center gap-2 text-sm font-semibold ${s.accent === 'red' ? 'text-red-600' : 'text-black'}`}>
                                    Подробнее
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-20 max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-black mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                            Не нашли нужную услугу?
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Расскажите о задаче — соберём команду и предложим решение под ваш бизнес и бюджет.
                        </p>
                    </div>
                </div>

                <CTA />
            </main>
            <RawFooter />
        </>
    );
}
