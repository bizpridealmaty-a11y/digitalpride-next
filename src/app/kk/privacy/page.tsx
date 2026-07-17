import type { Metadata } from 'next';
import Link from 'next/link';
import RawFooter from '../../../components/layout/RawFooter';
import Breadcrumbs from '../../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Құпиялылық саясаты — Digital Pride',
    description: 'Қазақстан Республикасының дербес деректер туралы заңнамасына сәйкес Digital Pride дербес деректерді өңдеу саясаты.',
    alternates: {
        canonical: '/kk/privacy',
        languages: { 'ru-KZ': '/privacy', 'kk-KZ': '/kk/privacy', 'x-default': '/privacy' },
    },
    robots: { index: true, follow: true },
};

export default function PrivacyPage() {
    return (
        <>
            <main className="bg-white pt-32 pb-24 min-h-screen">
                <article className="container mx-auto px-4 max-w-3xl">
                    <Breadcrumbs items={[{ name: 'Құпиялылық саясаты', item: '/kk/privacy' }]} />

                    <h1
                        className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight"
                        style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                        Құпиялылық саясаты
                    </h1>
                    <p className="text-gray-500 mb-12">Соңғы жаңарту күні: {new Date().toLocaleDateString('kk-KZ', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">1. Жалпы ережелер</h2>
                            <p>Осы Дербес деректерді өңдеу саясаты (бұдан әрі — «Саясат») Digital Pride маркетинг агенттігі (бұдан әрі — «Агенттік») тарапынан 2013 жылғы 21 мамырдағы «Дербес деректер және оларды қорғау туралы» Қазақстан Республикасының Заңына сәйкес әзірленген және қолданылады.</p>
                            <p>Саясат <strong>https://digitalpride.kz</strong> сайтын пайдалану кезінде дербес деректерді өңдеу тәртібін және олардың қауіпсіздігін қамтамасыз ету шараларын анықтайды.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">2. Біз қандай деректерді жинаймыз</h2>
                            <p>Сайтта өтінім қалдырғанда, кері қоңырау формасын толтырғанда, курстарға тіркелгенде немесе жаңалықтарға жазылғанда біз сұрай аламыз:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Аты-жөні</li>
                                <li>Телефон нөмірі</li>
                                <li>Электрондық пошта мекенжайы</li>
                                <li>Компания атауы / лауазымы (қалауы бойынша)</li>
                                <li>Хабарлама / тапсырма сипаттамасы</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">3. Өңдеу мақсаттары</h2>
                            <p>Дербес деректер келесі мақсаттарда өңделеді:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Пайдаланушымен оның сұрауы бойынша байланысу</li>
                                <li>Қызмет көрсету шарттарын жасасу және орындау</li>
                                <li>Жаңа қызметтер, акциялар, іс-шаралар туралы хабарлау (жеке келісіммен ғана)</li>
                                <li>Сайт тиімділігін талдау және пайдаланушы тәжірибесін жақсарту</li>
                                <li>ҚР заңнамасының талаптарын сақтау</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">4. Байланыс</h2>
                            <p><strong>Digital Pride</strong></p>
                            <p>Алматы қ., Бұхар-Жырау даңғылы, 33, 3-қабат, 13 студия</p>
                            <p>Email: digitalpride.almaty@gmail.com</p>
                            <p>Телефон: +7 (707) 035-77-77</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">5. Саясат өзгерістері</h2>
                            <p>Осы Саясат заңнаманың немесе Агенттіктің ішкі регламенттерінің жаңартылуына сәйкес өзгеруі мүмкін. Өзекті нұсқа әрқашан <Link href="/kk/privacy/" className="text-red-600 underline">https://digitalpride.kz/kk/privacy/</Link> мекенжайында қолжетімді.</p>
                        </section>
                    </div>
                </article>
            </main>
            <RawFooter />
        </>
    );
}
