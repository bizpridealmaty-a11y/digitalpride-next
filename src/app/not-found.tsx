import type { Metadata } from 'next';
import Link from 'next/link';
import RawFooter from '../components/layout/RawFooter';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
    title: 'Страница не найдена — 404',
    description: 'Страница, которую вы ищете, не существует или была перемещена. Перейдите к нашим услугам или вернитесь на главную.',
    robots: { index: false, follow: true },
};

const popularLinks = [
    { title: 'SMM продвижение', href: '/smm-almaty' },
    { title: 'Таргетированная реклама', href: '/target-almaty' },
    { title: 'Контекстная реклама', href: '/kontekstnaya-reklama-almaty' },
    { title: 'SEO продвижение', href: '/seo-almaty' },
    { title: 'Разработка сайтов', href: '/sozdanie-sajtov-almaty' },
    { title: 'Кейсы', href: '/cases' },
];

export default function NotFound() {
    return (
        <>
            <main className="bg-white min-h-screen flex items-center pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <div
                        className="text-[120px] md:text-[180px] font-extrabold leading-none mb-4"
                        style={{
                            fontFamily: "'Unbounded', sans-serif",
                            background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        404
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-6 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                        Страница не найдена
                    </h1>

                    <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
                        Возможно, страница была перемещена или удалена. Проверьте адрес или воспользуйтесь популярными разделами ниже.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-black text-white font-bold rounded-xl transition-all hover:scale-105 hover:bg-red-600"
                        >
                            На главную
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 border-2 border-black text-black font-bold rounded-xl transition-all hover:scale-105 hover:bg-black hover:text-white"
                        >
                            Все услуги
                        </Link>
                    </div>

                    <div className="text-left bg-gray-50 rounded-2xl p-8">
                        <h2 className="text-sm uppercase tracking-wider font-bold text-gray-500 mb-4">
                            Популярные разделы
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {popularLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                                >
                                    <span className="text-red-500 font-bold">→</span>
                                    <span className="text-black font-medium group-hover:text-red-600 transition-colors">
                                        {link.title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <RawFooter />
        </>
    );
}
