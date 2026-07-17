import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import RawFooter from '@/components/layout/RawFooter';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
    title: 'О нас — маркетинговое агентство Digital Pride в Алматы',
    description: 'Кто мы, как работаем и почему нам доверяют 100+ клиентов в Казахстане. История агентства, основатель Дмитрий Тимошевский, наши ценности и подход к проектам.',
    alternates: { canonical: '/o-nas', languages: { 'ru-KZ': '/o-nas', 'kk-KZ': '/kk/o-nas', 'x-default': '/o-nas' } },
    openGraph: {
        title: 'О нас | Digital Pride',
        description: 'Маркетинговое агентство в Алматы. История, команда, ценности.',
        url: '/o-nas',
        type: 'website',
    },
};

const values = [
    {
        title: 'Цифры важнее красивых слов',
        description: 'Мы измеряем эффективность не лайками и охватами, а заявками, продажами и ROI. Каждое решение проверяем на unit-экономике клиента.',
    },
    {
        title: 'Прозрачность на всех этапах',
        description: 'Клиент видит дашборд кампаний в реальном времени, получает еженедельные и месячные отчёты, и в любой момент знает, на что уходит каждый тенге.',
    },
    {
        title: 'Партнёрство, а не подряд',
        description: 'Мы не продаём «услугу SMM» — мы становимся внешним отделом маркетинга. Глубоко погружаемся в продукт, обсуждаем стратегию и берём ответственность за цифры.',
    },
    {
        title: 'Системность вместо разовых акций',
        description: 'Один вирусный Reels не строит бизнес. Мы выстраиваем повторяемые процессы: контент-план, регулярный таргет, оптимизированную воронку — то, что приносит результат месяц за месяцем.',
    },
    {
        title: 'Только белые методы',
        description: 'Никаких накруток, серых ссылок и обмана алгоритмов. Всё, что мы делаем, должно работать на дистанции 1–3 года, а не до ближайшего апдейта Google или Яндекса.',
    },
    {
        title: 'Скорость и ясность коммуникации',
        description: 'Отвечаем в течение часа в рабочее время. Каждое решение оформляем письменно, чтобы у клиента были чёткие KPI и таймлайны, а не «обсудим по звонку».',
    },
];

const milestones = [
    { year: '2019', text: 'Основание агентства в Алматы. Первые 5 клиентов из ниши HoReCa и недвижимости.' },
    { year: '2020', text: 'Запуск направлений таргета и контекста. Команда выросла до 8 человек.' },
    { year: '2021', text: 'Открытие SEO- и web-разработки. Первые проекты с ROAS × 5+.' },
    { year: '2022', text: 'Расширение в B2B-сегмент. Внедрение сквозной аналитики и автоматизации у клиентов.' },
    { year: '2023', text: 'Запуск школы Digital Pride. Обучение специалистов по SMM, таргету и SEO.' },
    { year: '2024', text: '100+ реализованных проектов. Команда из 25+ экспертов разных направлений.' },
    { year: '2025', text: 'Расширение на Астану, Шымкент, Караганду. Один из первых KZ-агентств с продвижением в Threads.' },
    { year: '2026', text: 'Перезапуск сайта на Next.js, новая стратегия контент-маркетинга, фокус на performance.' },
];

const principles = [
    {
        q: 'Кому мы подходим?',
        a: 'Бизнесам, у которых уже есть продукт и есть продажи, но они хотят выйти на новый уровень: масштабировать рекламу, выстроить системный маркетинг или войти в новый канал. Стартапам без продукта мы рекомендуем сначала найти product-market fit — реклама не починит то, что не покупают.',
    },
    {
        q: 'Кому мы НЕ подходим?',
        a: 'Тем, кто хочет «накрутить подписчиков и быстро забыть». Тем, кто не готов делиться доступами к рекламным кабинетам и CRM. Тем, для кого маркетинг — это разовая задача «закройте план на этот месяц», а не системная работа.',
    },
    {
        q: 'С какими нишами работаем?',
        a: 'HoReCa, бьюти-индустрия, недвижимость, медицина и стоматология, e-commerce, образование, B2B-услуги, финансы, автомобили. Не работаем с алкоголем, табаком, MLM и финансовыми пирамидами.',
    },
    {
        q: 'Что отличает нас от других агентств в Алматы?',
        a: 'Глубокая экспертиза по 7 направлениям сразу, собственный продакшн (Reels, фото, дизайн), своя школа (мы знаем рынок специалистов изнутри) и фокус на unit-экономику клиента. Мы не «делаем красиво» — мы окупаем рекламные бюджеты.',
    },
];

export default function ONasPage() {
    const aboutJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'О Digital Pride',
        url: 'https://digitalpride.kz/o-nas',
        mainEntity: {
            '@id': 'https://digitalpride.kz/#organization',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
            />
            <main className="bg-white pt-32 pb-24">
                {/* Hero */}
                <section className="container mx-auto px-4 max-w-4xl">
                    <Breadcrumbs items={[{ name: 'О нас', item: '/o-nas' }]} />

                    <div className="mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 uppercase tracking-wider">
                            Digital Pride с 2019 года
                        </div>
                        <h1
                            className="text-4xl md:text-6xl font-extrabold text-black mb-8 tracking-tight leading-tight"
                            style={{ fontFamily: "'Unbounded', sans-serif" }}
                        >
                            Перформанс-агентство, которое<br />
                            <span className="text-red-600">приносит прибыль</span>, а не просто красивые цифры
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            Мы не верим в маркетинг ради маркетинга. Каждая рекламная кампания, каждый пост и каждая
                            строка кода на сайте клиента должны окупаться. Это и есть наш единственный KPI.
                        </p>
                    </div>
                </section>

                {/* Founder block */}
                <section className="container mx-auto px-4 max-w-5xl mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-zinc-950 to-zinc-900 rounded-3xl p-8 md:p-16 text-white">
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-black">
                            <Image
                                src="/images/founder-portrait.webp"
                                alt="Дмитрий Тимошевский — основатель Digital Pride"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 500px"
                            />
                        </div>
                        <div>
                            <div className="text-red-500 text-sm font-bold uppercase tracking-wider mb-3">
                                Основатель
                            </div>
                            <h2
                                className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight"
                                style={{ fontFamily: "'Unbounded', sans-serif" }}
                            >
                                Дмитрий Тимошевский
                            </h2>
                            <p className="text-gray-400 mb-6">
                                Тимошевский Дмитрий Сергеевич — основатель и CEO Digital Pride
                            </p>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    «Я начинал в digital в 2014 году с настройки контекстной рекламы для небольших
                                    бизнесов. За эти годы я увидел изнутри тысячи кампаний, провёл миллионы тенге
                                    рекламных бюджетов и понял главное: маркетинг работает только тогда, когда
                                    им управляет команда, которая разбирается в бизнесе клиента глубже, чем сам клиент».
                                </p>
                                <p>
                                    «Digital Pride я создал в 2019 году с одной идеей — сделать агентство, которое
                                    я сам бы захотел нанять. Без размытых обещаний „увеличим узнаваемость“. Без
                                    отчётов, в которых главная метрика — количество публикаций. Только цифры,
                                    прозрачность и фокус на бизнес-результате клиента».
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <a
                                    href="https://t.me/timoshevskij"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
                                >
                                    Telegram
                                </a>
                                <a
                                    href="https://www.instagram.com/digitalpride.kz/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
                                >
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Numbers */}
                <section className="container mx-auto px-4 max-w-5xl mb-24">
                    <h2
                        className="text-3xl md:text-5xl font-extrabold text-black mb-12 tracking-tight text-center"
                        style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                        Digital Pride в цифрах
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Лет на рынке', value: '7+' },
                            { label: 'Реализованных проектов', value: '100+' },
                            { label: 'Специалистов в команде', value: '25+' },
                            { label: 'Управляемых бюджетов', value: '$3M+' },
                            { label: 'Городов присутствия', value: '4' },
                            { label: 'Направлений услуг', value: '15' },
                            { label: 'Средний рост ROI', value: '×3,2' },
                            { label: 'NPS клиентов', value: '92' },
                        ].map((s) => (
                            <div
                                key={s.label}
                                className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100"
                            >
                                <div className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2"
                                    style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                    {s.value}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values */}
                <section className="container mx-auto px-4 max-w-6xl mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2
                            className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight"
                            style={{ fontFamily: "'Unbounded', sans-serif" }}
                        >
                            Принципы, по которым работаем
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Это не корпоративные слайды для красивой презентации. Это правила, по которым
                            мы выбираем клиентов, нанимаем людей и принимаем решения каждый день.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((v, i) => (
                            <div
                                key={v.title}
                                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all"
                            >
                                <div className="text-5xl font-extrabold text-red-100 mb-3"
                                    style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                    0{i + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-black">{v.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Timeline */}
                <section className="container mx-auto px-4 max-w-4xl mb-24">
                    <h2
                        className="text-3xl md:text-5xl font-extrabold text-black mb-12 tracking-tight text-center"
                        style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                        История агентства
                    </h2>
                    <div className="space-y-0">
                        {milestones.map((m, i) => (
                            <div
                                key={m.year}
                                className="flex items-start gap-6 py-6 border-b border-gray-100 last:border-0"
                            >
                                <div
                                    className="flex-shrink-0 text-3xl md:text-4xl font-extrabold text-red-600 w-24"
                                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                                >
                                    {m.year}
                                </div>
                                <p className="text-gray-700 leading-relaxed flex-1 pt-2">{m.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Principles FAQ */}
                <section className="container mx-auto px-4 max-w-4xl mb-24">
                    <h2
                        className="text-3xl md:text-5xl font-extrabold text-black mb-12 tracking-tight text-center"
                        style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                        Честно о работе с нами
                    </h2>
                    <div className="space-y-5">
                        {principles.map((p) => (
                            <div key={p.q} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold mb-3 text-black">{p.q}</h3>
                                <p className="text-gray-700 leading-relaxed">{p.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Office */}
                <section className="container mx-auto px-4 max-w-4xl mb-16">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 text-center">
                        <h2
                            className="text-3xl font-extrabold text-black mb-4 tracking-tight"
                            style={{ fontFamily: "'Unbounded', sans-serif" }}
                        >
                            Приходите в гости
                        </h2>
                        <p className="text-gray-700 text-lg mb-2">
                            г. Алматы, проспект Бухар-Жирау, 33
                        </p>
                        <p className="text-gray-600 mb-8">
                            3 этаж, студия 13 · работаем пн–пт с 09:00 до 18:00
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/contacts/"
                                className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:scale-105 transition-transform"
                            >
                                Все контакты
                            </Link>
                            <a
                                href="https://wa.me/77070357777"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:scale-105 transition-transform"
                            >
                                Написать в WhatsApp
                            </a>
                        </div>
                    </div>
                </section>

                {/* Our projects */}
                <section className="py-20 bg-zinc-50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                            Наши проекты
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <a href="https://smm-school.kz/" target="_blank" rel="noopener noreferrer" className="group block p-8 bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all">
                                <div className="text-3xl mb-4">🎓</div>
                                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors">SMM School</h3>
                                <p className="text-gray-600">Онлайн-школа маркетинга — курсы по SMM, таргету, нейросетям и автоматизации для специалистов и предпринимателей.</p>
                                <span className="inline-block mt-4 text-red-600 font-bold text-sm">smm-school.kz →</span>
                            </a>
                            <a href="https://bizpride.kz/" target="_blank" rel="noopener noreferrer" className="group block p-8 bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all">
                                <div className="text-3xl mb-4">🤝</div>
                                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors">BizPride — Бизнес-клуб Алматы</h3>
                                <p className="text-gray-600">Сообщество предпринимателей Алматы — бизнес-бранчи, нетворкинг, воркшопы и обмен опытом. Присоединяйтесь к нам.</p>
                                <span className="inline-block mt-4 text-red-600 font-bold text-sm">bizpride.kz →</span>
                            </a>
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <RawFooter />
        </>
    );
}
