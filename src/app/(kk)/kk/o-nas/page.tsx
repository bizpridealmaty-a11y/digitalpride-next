import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import RawFooter from '@/components/layout/RawFooter';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
    title: 'Біз туралы — Алматыдағы Digital Pride маркетинг агенттігі',
    description: 'Біз кімбіз, қалай жұмыс істейміз және неліктен Қазақстанда 100+ клиент бізге сенеді. Агенттік тарихы, негізін қалаушы Дмитрий Тимошевский, біздің құндылықтар мен тәсіл.',
    alternates: {
        canonical: '/kk/o-nas',
        languages: { 'ru-KZ': '/o-nas', 'kk-KZ': '/kk/o-nas', 'x-default': '/o-nas' },
    },
    openGraph: {
        title: 'Біз туралы | Digital Pride',
        description: 'Алматыдағы маркетинг агенттігі. Тарих, команда, құндылықтар.',
        url: '/kk/o-nas',
        type: 'website',
    },
};

const values = [
    {
        title: 'Сандар әдемі сөздерден маңызды',
        description: 'Тиімділікті лайктар мен қамтумен емес, өтінімдер, сатылымдар мен ROI-мен өлшейміз. Әр шешімді клиенттің unit-экономикасында тексереміз.',
    },
    {
        title: 'Барлық кезеңдерде ашықтық',
        description: 'Клиент науқандар дашбордын нақты уақытта көреді, апта сайын және ай сайын есептер алады, әр теңгенің қайда кеткенін кез келген сәтте біледі.',
    },
    {
        title: 'Серіктестік, мердігерлік емес',
        description: 'Біз «SMM қызметін» сатпаймыз — біз сыртқы маркетинг бөліміне айналамыз. Өнімге терең ене отырып, стратегияны талқылаймыз және сандар үшін жауапкершілік аламыз.',
    },
    {
        title: 'Бір реттік акциялар емес, жүйелілік',
        description: 'Бір вирустік Reels бизнес құрмайды. Біз қайталанатын процестерді құрамыз: контент-план, тұрақты таргет, оптимизацияланған воронка — ай сайын нәтиже беретін нәрсе.',
    },
    {
        title: 'Тек ақ әдістер',
        description: 'Жалған жазылушылар, сұр сілтемелер және алгоритмдерді алдау жоқ. Біз жасайтынның бәрі 1-3 жыл аралығында жұмыс істеуге тиіс.',
    },
    {
        title: 'Коммуникация жылдамдығы мен анықтығы',
        description: 'Жұмыс уақытында бір сағат ішінде жауап береміз. Әр шешімді жазбаша рәсімдейміз — клиентте нақты KPI мен мерзімдер болады.',
    },
];

const milestones = [
    { year: '2019', text: 'Алматыда агенттікті құру. HoReCa және жылжымайтын мүлік саласындағы алғашқы 5 клиент.' },
    { year: '2020', text: 'Таргет және контекст бағыттарын іске қосу. Команда 8 адамға дейін өсті.' },
    { year: '2021', text: 'SEO және веб-әзірлеуді ашу. ROAS × 5+ алғашқы жобалар.' },
    { year: '2022', text: 'B2B сегментіне кеңейту. Клиенттерде сквозной аналитика мен автоматтандыруды енгізу.' },
    { year: '2023', text: 'Digital Pride мектебін іске қосу. SMM, таргет және SEO бойынша мамандарды оқыту.' },
    { year: '2024', text: '100+ іске асырылған жоба. Әр түрлі бағыттағы 25+ сарапшы командасы.' },
    { year: '2025', text: 'Астана, Шымкент, Қарағандыға кеңейту. Threads-те жылжытатын алғашқы ҚР агенттіктерінің бірі.' },
    { year: '2026', text: 'Сайтты Next.js-те қайта іске қосу, жаңа контент-маркетинг стратегиясы, performance-ге фокус.' },
];

const principles = [
    {
        q: 'Біз кімге сәйкес келеміз?',
        a: 'Өнімі мен сатылымы бар, бірақ жаңа деңгейге шығуды қалайтын бизнестерге: жарнаманы масштабтау, жүйелі маркетинг құру немесе жаңа арнаға кіру.',
    },
    {
        q: 'Біз кімге сәйкес КЕЛМЕЙМІЗ?',
        a: '«Жазылушыларды жинап, тез ұмыту» қалайтындарға. Жарнамалық кабинеттер мен CRM-ге рұқсат беруге дайын емес адамдарға. Маркетингті «осы айдың жоспарын жабу» деп қарайтындарға.',
    },
    {
        q: 'Қандай салалармен жұмыс істейміз?',
        a: 'HoReCa, сұлулық индустриясы, жылжымайтын мүлік, медицина және стоматология, e-commerce, білім, B2B-қызметтер, қаржы, автомобильдер.',
    },
    {
        q: 'Бізді Алматыдағы басқа агенттіктерден не ерекшелейді?',
        a: 'Бірден 7 бағыт бойынша терең сарапшылық, жеке продакшн, жеке мектеп және клиенттің unit-экономикасына фокус. Біз «әдемі жасамаймыз» — жарнама бюджеттерін ақтаймыз.',
    },
];

export default function ONasPage() {
    const aboutJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Digital Pride туралы',
        url: 'https://digitalpride.kz/kk/o-nas',
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
                <section className="container mx-auto px-4 max-w-4xl">
                    <Breadcrumbs items={[{ name: 'Біз туралы', item: '/kk/o-nas' }]} />

                    <div className="mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 uppercase tracking-wider">
                            Digital Pride 2019 жылдан бері
                        </div>
                        <h1
                            className="text-4xl md:text-6xl font-extrabold text-black mb-8 tracking-tight leading-tight"
                            style={{ fontFamily: "'Unbounded', sans-serif" }}
                        >
                            Жай әдемі сандар емес,<br />
                            <span className="text-red-600">пайда әкелетін</span> перформанс-агенттік
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            Біз маркетинг үшін маркетингке сенбейміз. Әр жарнамалық науқан, әр пост және клиент сайтындағы әр код жолы ақталуы тиіс. Бұл біздің жалғыз KPI.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 max-w-5xl mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-zinc-950 to-zinc-900 rounded-3xl p-8 md:p-16 text-white">
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-black">
                            <Image
                                src="/images/founder-portrait.webp"
                                alt="Дмитрий Тимошевский — Digital Pride негізін қалаушы"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 500px"
                            />
                        </div>
                        <div>
                            <div className="text-red-500 text-sm font-bold uppercase tracking-wider mb-3">
                                Негізін қалаушы
                            </div>
                            <h2
                                className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight"
                                style={{ fontFamily: "'Unbounded', sans-serif" }}
                            >
                                Дмитрий Тимошевский
                            </h2>
                            <p className="text-gray-400 mb-6">
                                Тимошевский Дмитрий Сергеевич — Digital Pride негізін қалаушы және CEO
                            </p>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    «Мен digital-ға 2014 жылы шағын бизнестерге контекстік жарнама орнатудан бастадым. Осы жылдар ішінде мыңдаған науқандарды ішінен көрдім, миллиондаған теңге жарнама бюджеттерін жүргіздім және басты нәрсені түсіндім: маркетинг тек клиенттің бизнесін клиенттің өзінен терең түсінетін команда басқарғанда ғана жұмыс істейді».
                                </p>
                                <p>
                                    «Digital Pride-ды 2019 жылы бір идеямен құрдым — мен өзім жалдағысы келетін агенттік жасау. Бұлыңғыр «танымалдылықты арттырамыз» уәделерсіз. Басты метрика — жарияланымдар саны болатын есептерсіз. Тек сандар, ашықтық және клиенттің бизнес-нәтижесіне фокус».
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

                <section className="container mx-auto px-4 max-w-5xl mb-24">
                    <h2
                        className="text-3xl md:text-5xl font-extrabold text-black mb-12 tracking-tight text-center"
                        style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                        Digital Pride сандармен
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Нарықтағы жылдар', value: '7+' },
                            { label: 'Іске асырылған жобалар', value: '100+' },
                            { label: 'Командадағы мамандар', value: '25+' },
                            { label: 'Басқарылған бюджеттер', value: '$3M+' },
                            { label: 'Қатысу қалалары', value: '4' },
                            { label: 'Қызмет бағыттары', value: '15' },
                            { label: 'Орташа ROI өсімі', value: '×3,2' },
                            { label: 'Клиенттер NPS', value: '92' },
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

                <section className="container mx-auto px-4 max-w-6xl mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2
                            className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight"
                            style={{ fontFamily: "'Unbounded', sans-serif" }}
                        >
                            Жұмыс қағидаларымыз
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Бұл әдемі презентацияға арналған корпоративтік слайдтар емес. Бұл біз клиенттерді таңдайтын, адамдарды жалдайтын және күн сайын шешім қабылдайтын ережелер.
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

                <section className="container mx-auto px-4 max-w-4xl mb-24">
                    <h2
                        className="text-3xl md:text-5xl font-extrabold text-black mb-12 tracking-tight text-center"
                        style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                        Агенттік тарихы
                    </h2>
                    <div className="space-y-0">
                        {milestones.map((m) => (
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

                <section className="container mx-auto px-4 max-w-4xl mb-24">
                    <h2
                        className="text-3xl md:text-5xl font-extrabold text-black mb-12 tracking-tight text-center"
                        style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                        Бізбен жұмыс туралы шынайы
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

                <section className="container mx-auto px-4 max-w-4xl mb-16">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 text-center">
                        <h2
                            className="text-3xl font-extrabold text-black mb-4 tracking-tight"
                            style={{ fontFamily: "'Unbounded', sans-serif" }}
                        >
                            Қонаққа келіңіз
                        </h2>
                        <p className="text-gray-700 text-lg mb-2">
                            Алматы қ., Бұхар-Жырау даңғылы, 33
                        </p>
                        <p className="text-gray-600 mb-8">
                            3-қабат, 13 студия · дс–жм 09:00-ден 18:00-ге дейін
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/kk/contacts/"
                                className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:scale-105 transition-transform"
                            >
                                Барлық байланыстар
                            </Link>
                            <a
                                href="https://wa.me/77070357777"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:scale-105 transition-transform"
                            >
                                WhatsApp-қа жазу
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
