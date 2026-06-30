import type { Metadata } from 'next';
import Link from 'next/link';
import RawFooter from '../../../components/layout/RawFooter';
import Footer from '../../../components/layout/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTA from '../../../components/home/CTA';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
    title: 'Блог — маркетинг, SMM, жарнама және SEO туралы мақалалар',
    description: 'Қазақстандағы digital-маркетинг туралы пайдалы мақалалар: SMM, таргет, контекст, SEO, сайт жасау. Кейстер, талдаулар және бизнеске арналған нұсқаулықтар.',
    alternates: {
        canonical: '/kk/blog',
        languages: {
            'ru-KZ': '/blog',
            'kk-KZ': '/kk/blog',
        },
    },
    openGraph: {
        title: 'Блог — маркетинг, SMM, жарнама және SEO туралы мақалалар',
        description: 'Бизнеске арналған Қазақстандағы digital-маркетинг туралы мақалалар.',
        url: '/kk/blog',
    },
};

const placeholderTopics = [
    { title: 'Алматыда SMM қанша тұрады — 2026 нарық талдауы', category: 'SMM' },
    { title: 'Таргетологты қалай таңдауға болады: 7 критерий', category: 'Таргет' },
    { title: 'Қазақстандағы бизнес үшін SEO: 2026 жылы не жұмыс істейді', category: 'SEO' },
    { title: 'Кейс: интернет-дүкенді 4 айда Google ТОП-3-ке шығару', category: 'SEO' },
    { title: 'Reels немесе TikTok — KZ-да қайда жылжытуды бастау керек', category: 'SMM' },
    { title: 'Контекстік жарнама vs таргет: қашан нені таңдау керек', category: 'Контекст' },
];

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <>
            <main className="bg-white pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-4 max-w-7xl">
                    <Breadcrumbs items={[{ name: 'Блог', item: '/kk/blog' }]} />

                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 uppercase tracking-wider">
                            Пайдалы материалдар
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                            Digital Pride блогы
                        </h1>
                        <p className="text-lg text-gray-600 font-medium">
                            Қазақстандағы бизнеске арналған digital-маркетинг бойынша талдаулар, кейстер және нұсқаулықтар.
                        </p>
                    </div>

                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((p) => (
                                <Link
                                    key={p.slug}
                                    href={`/kk/blog/${p.slug}/`}
                                    className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3 text-xs">
                                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 font-bold uppercase tracking-wider">
                                                {p.category}
                                            </span>
                                            <span className="text-gray-500">{p.readingTime} мин</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                                            {p.title}
                                        </h2>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                            {p.excerpt}
                                        </p>
                                        <div className="text-sm text-gray-500">
                                            {new Date(p.publishedAt).toLocaleDateString('kk-KZ', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-10 text-center">
                                <div className="text-5xl mb-4">📚</div>
                                <h2 className="text-2xl font-bold mb-3">Контент дайындалуда</h2>
                                <p className="text-gray-600 mb-8">
                                    Жақында мұнда мақалалар мен кейстер пайда болады. Жарияланымдарды жіберіп алмау үшін Telegram-ға жазылыңыз.
                                </p>
                                <a
                                    href="https://t.me/timoshevskij"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-bold rounded-xl hover:scale-105 transition-transform"
                                >
                                    Telegram-ға жазылу
                                </a>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-sm uppercase tracking-wider font-bold text-gray-500 mb-4 text-center">
                                    Дайындап жатқан тақырыптар
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {placeholderTopics.map((t, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                                        >
                                            <span className="px-2 py-0.5 rounded text-xs font-bold uppercase bg-red-100 text-red-600 flex-shrink-0">
                                                {t.category}
                                            </span>
                                            <span className="text-sm text-gray-700">{t.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-20">
                    <CTA />
                </div>
            </main>
            <Footer />
            <RawFooter />
        </>
    );
}
