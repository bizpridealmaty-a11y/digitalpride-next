import type { Metadata } from 'next';
import Link from 'next/link';
import RawFooter from '../../../components/layout/RawFooter';
import Footer from '../../../components/layout/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTA from '../../../components/home/CTA';

export const metadata: Metadata = {
    title: 'Digital Pride маркетинг агенттігінің қызметтері — Алматы',
    description: 'Digital-қызметтердің толық спектрі: SMM, таргет, контекст, SEO, сайт жасау, брендинг және SERM. Ашық KPI, өтінімдер 3 күннен, 100+ кейс.',
    alternates: {
        canonical: '/kk/services',
        languages: {
            'ru-KZ': '/services',
            'kk-KZ': '/kk/services',
        },
    },
    openGraph: {
        title: 'Маркетинг агенттігінің қызметтері | Digital Pride',
        description: 'SMM, таргет, контекст, SEO, сайт жасау, брендинг — барлығы кешенді.',
        url: '/kk/services',
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
        title: 'SMM жылжыту',
        description: 'Контент, Reels, Stories және комьюнити-менеджмент Instagram, TikTok, Facebook желілерінде. Алғашқы нәтижелер 2 аптадан.',
        href: '/kk/smm-almaty/',
        accent: 'red',
    },
    {
        title: 'Таргеттелген жарнама',
        description: 'Instagram, Facebook, TikTok. Look-alike, ретаргетинг, A/B-креатив тесттері. Өтінімдер 3 күннен.',
        href: '/kk/target-almaty/',
    },
    {
        title: 'Контекстік жарнама (PPC)',
        description: 'Google Ads және Яндекс.Директ. Іске қосылған күннен бастап өтінімдер, ашық сквозной аналитика.',
        href: '/kk/kontekstnaya-reklama-almaty/',
    },
    {
        title: 'SEO жылжыту',
        description: 'Сайтты Google және Яндекс ТОП-10-ға шығару. Техаудит, семантика, контент, линкбилдинг.',
        href: '/kk/seo-almaty/',
    },
    {
        title: 'Сайт жасау',
        description: 'Лендингтер, корпоративтік сайттар, интернет-дүкендер Next.js және WordPress платформаларында. 300 000 ₸-ден.',
        href: '/kk/sozdanie-sajtov-almaty/',
    },
    {
        title: 'Маркетингтік стратегия',
        description: 'Нарық, мақсатты аудитория, бәсекелестерді терең талдау. Өсу мен жүйелі маркетингтің жол картасы.',
        href: '/kk/marketing-almaty/',
    },
    {
        title: 'Беделді басқару (SERM)',
        description: 'Пікірлермен жұмыс, атаулардың мониторингі, іздеу ТОП-тан негативті ығыстыру.',
        href: '/kk/upravlenie-reputaciej-almaty/',
    },
    {
        title: 'Брендинг және фирмалық стиль',
        description: 'Логотип, фирмалық стиль, брендбук әзірлеу. Бизнесіңіздің визуалдық қаптамасы.',
        href: '/kk/firmennyj-stil-almaty/',
    },
    {
        title: 'Жарнама аудиті',
        description: 'Ағымдағы науқандарыңыздың тегін аудиті. Ақша жоғалтып жатқан жеріңізді табамыз.',
        href: '/kk/audit-reklamy/',
        badge: 'Тегін',
        accent: 'red',
    },
    {
        title: 'Сату воронкасы',
        description: 'Алғашқы жанасудан қайта сатуға дейінгі жүйелі воронка құру.',
        href: '/kk/voronka-prodazh-almaty/',
    },
    {
        title: 'Performance-маркетинг',
        description: 'ROAS және unit-экономикаға бағытталған ақылы арналарға кешенді көзқарас.',
        href: '/kk/perfomans-marketing/',
    },
    {
        title: 'Threads — жылжыту',
        description: 'Қазақстандағы алғашқылардың бірі — Meta-ның жаңа әлеуметтік желісінде жылжыту.',
        href: '/kk/threads-prodvizhenie/',
        badge: '🔥 Trend',
        accent: 'red',
    },
    {
        title: 'Маркетинг-консалтинг',
        description: 'Жобаңыз бойынша маркетолог-сарапшының сағаттық немесе ай сайынғы кеңесі.',
        href: '/kk/marketing-consulting-almaty/',
    },
    {
        title: 'Сыртқы маркетинг бөлімі',
        description: 'Аутсорстағы толық маркетинг бөлімі. Стратег, таргетолог, дизайнер, копирайтер — бір командада.',
        href: '/kk/vneshnij-otdel-marketinga/',
    },
];

export default function ServicesHub() {
    return (
        <>
            <main className="bg-white pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-4 max-w-7xl">
                    <Breadcrumbs items={[{ name: 'Қызметтер', item: '/kk/services' }]} />

                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 uppercase tracking-wider">
                            Толық циклді digital-маркетинг
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                            Digital Pride қызметтері
                        </h1>
                        <p className="text-lg text-gray-600 font-medium">
                            Алматыдағы маркетинг агенттігі. Кез келген күрделіліктегі жобаларды қабылдаймыз — алғашқы жарнамалық науқанды іске қосудан бастап маркетинг бөлімін жүйелі құруға дейін.
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
                                    Толығырақ
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-20 max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-black mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                            Қажетті қызметті таппадыңыз ба?
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Тапсырма туралы айтыңыз — команда жинап, бизнесіңіз бен бюджетіңізге шешім ұсынамыз.
                        </p>
                    </div>
                </div>

                <CTA />
            </main>
            <Footer />
            <RawFooter />
        </>
    );
}
