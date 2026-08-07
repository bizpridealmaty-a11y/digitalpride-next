import React from 'react';
import type { Metadata } from 'next';

import RawFooter from '@/components/layout/RawFooter';
import CTA from '@/components/home/CTA';
import CaseCharts from '@/components/case/CaseCharts';
import CaseGallery from '@/components/case/CaseGallery';
import LiveSiteScroll from '@/components/case/LiveSiteScroll';
import AdScreenshot from '@/components/case/AdScreenshot';
import { casesData } from '@/data/cases';
import Link from 'next/link';

type CaseParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return casesData.map((c) => ({
        slug: c.slug,
    }));
}

export async function generateMetadata({ params }: CaseParams): Promise<Metadata> {
    const { slug } = await params;
    const caseStudy = casesData.find((c) => c.slug === slug);
    if (!caseStudy) {
        return { title: 'Кейс не найден', robots: { index: false } };
    }
    const cats = caseStudy.categories.join(', ');
    return {
        title: `Кейс ${caseStudy.client} — ${cats}`,
        description: `Реальный кейс агентства Digital Pride: ${caseStudy.title}. Категории: ${cats}. Цифры до и после, стратегия, результаты.`,
        alternates: { canonical: `/cases/${caseStudy.slug}` },
        openGraph: {
            title: `Кейс ${caseStudy.client} | Digital Pride`,
            description: `${caseStudy.title} — реальный результат работы агентства.`,
            url: `/cases/${caseStudy.slug}`,
            type: 'article',
            images: caseStudy.coverImage ? [{ url: caseStudy.coverImage, alt: caseStudy.title }] : undefined,
        },
    };
}

export default async function CaseDetail({ params }: CaseParams) {
    const { slug } = await params;
    const caseStudy = casesData.find(c => c.slug === slug);

    if (!caseStudy) {
        return (
            <>

                <div className="py-32 text-center bg-white min-h-screen">
                    <h1 className="text-4xl font-bold mb-4 text-black">Кейс не найден</h1>
                    <Link href="/cases/" className="text-red-600 hover:text-red-700 underline font-bold">Вернуться к списку кейсов</Link>
                </div>
                <RawFooter />
            </>
        );
    }

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: caseStudy.title,
        description: `Кейс агентства Digital Pride для ${caseStudy.client}. Категории: ${caseStudy.categories.join(', ')}.`,
        image: caseStudy.coverImage ? `https://digitalpride.kz${caseStudy.coverImage}` : undefined,
        author: {
            '@type': 'Organization',
            name: 'Digital Pride',
            url: 'https://digitalpride.kz',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Digital Pride',
            logo: { '@type': 'ImageObject', url: 'https://digitalpride.kz/fonts/new-logo.svg' },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://digitalpride.kz/cases/${caseStudy.slug}`,
        },
        keywords: caseStudy.categories.join(', '),
        about: {
            '@type': 'Thing',
            name: caseStudy.client,
        },
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://digitalpride.kz/' },
            { '@type': 'ListItem', position: 2, name: 'Кейсы', item: 'https://digitalpride.kz/cases' },
            { '@type': 'ListItem', position: 3, name: caseStudy.title, item: `https://digitalpride.kz/cases/${caseStudy.slug}` },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <main className="bg-zinc-50 pb-24 overflow-x-clip">
                {/* Banner */}
                <div className="relative h-[60vh] min-h-[400px] w-full bg-black flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0 scale-105">
                        <img src={caseStudy.coverImage} alt={caseStudy.title} loading="eager" fetchPriority="high" decoding="async" className="w-full h-full object-cover opacity-40 blur-sm" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-transparent z-10"></div>

                    <div className="relative z-20 container mx-auto px-4 max-w-4xl text-center mt-20">
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {caseStudy.categories.map((cat, i) => (
                                <span key={i} className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded uppercase tracking-wider">{cat}</span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {caseStudy.title}
                        </h1>
                        <p className="text-xl text-gray-300 font-medium">Клиент: <span className="text-white font-bold">{caseStudy.client}</span></p>
                        {caseStudy.status && (
                            <p className="text-sm text-gray-400 mt-3">{caseStudy.status}</p>
                        )}
                        {(caseStudy.website || caseStudy.instagram) && (
                            <div className="flex flex-wrap justify-center gap-3 mt-7">
                                {caseStudy.website && (
                                    <a href={caseStudy.website} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-white text-black font-bold text-sm rounded-full px-5 py-2.5 hover:scale-105 transition-transform">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z" /></svg>
                                        Сайт
                                    </a>
                                )}
                                {caseStudy.instagram && (
                                    <a href={caseStudy.instagram} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 text-white font-bold text-sm rounded-full px-5 py-2.5 hover:scale-105 transition-transform" style={{ background: '#E31C24' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                                        Instagram
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 max-w-4xl -mt-20 relative z-30">
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-16">

                        {/* Quick Metrics */}
                        <div className="grid grid-cols-2 gap-6 mb-16 pb-12 border-b border-gray-100">
                            {caseStudy.hoverMetrics.map((m, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl md:text-6xl font-extrabold text-black mb-2 tracking-tight">{m.value}</div>
                                    <div className="text-sm font-bold text-red-600 uppercase tracking-widest">{m.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Story */}
                        <div className="space-y-16">
                            <div>
                                <h2 className="text-2xl font-bold text-red-600 mb-6 uppercase tracking-widest text-sm flex items-center gap-3">
                                    <span className="w-8 h-px bg-red-600 inline-block"></span>
                                    Проблема
                                </h2>
                                <p className="text-xl text-gray-700 leading-relaxed font-medium">{caseStudy.content.problem}</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-red-600 mb-6 uppercase tracking-widest text-sm flex items-center gap-3">
                                    <span className="w-8 h-px bg-red-600 inline-block"></span>
                                    Что мы сделали
                                </h2>
                                <ul className="space-y-6">
                                    {caseStudy.content.solution.map((sol, i) => (
                                        <li key={i} className="flex items-start bg-zinc-50 p-6 rounded-2xl border border-gray-100">
                                            <div className="mt-1 bg-red-100 p-2 rounded-full mr-4 flex-shrink-0">
                                                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            <span className="text-lg text-gray-900 font-bold">{sol}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Charts Section — только если есть реальные данные */}
                            {caseStudy.barMetrics.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-bold text-red-600 mb-8 uppercase tracking-widest text-sm flex items-center gap-3">
                                        <span className="w-8 h-px bg-red-600 inline-block"></span>
                                        Динамика показателей
                                    </h2>
                                    <CaseCharts
                                        barMetrics={caseStudy.barMetrics}
                                        chartData={caseStudy.chartData}
                                        timeline={caseStudy.timeline}
                                    />
                                </div>
                            )}

                            {/* Ad Screenshot Section — только если есть реальный скрин */}
                            {caseStudy.adScreenshot && (
                                <div>
                                    <h2 className="text-2xl font-bold text-red-600 mb-8 uppercase tracking-widest text-sm flex items-center gap-3">
                                        <span className="w-8 h-px bg-red-600 inline-block"></span>
                                        Рекламный кабинет
                                    </h2>
                                    <AdScreenshot
                                        platform={caseStudy.adPlatform}
                                        screenshot={caseStudy.adScreenshot}
                                    />
                                </div>
                            )}

                            <div>
                                <h2 className="text-2xl font-bold text-red-600 mb-6 uppercase tracking-widest text-sm flex items-center gap-3">
                                    <span className="w-8 h-px bg-red-600 inline-block"></span>
                                    Результат
                                </h2>
                                <p className="text-xl text-gray-700 leading-relaxed font-medium">{caseStudy.content.results}</p>
                            </div>

                            <div className="p-8 md:p-12 bg-zinc-950 text-white rounded-3xl relative overflow-hidden">
                                {/* Decorative quotes */}
                                <div className="absolute top-4 outline-none right-8 text-8xl text-zinc-800 font-serif opacity-50 select-none">&quot;</div>
                                <h2 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-widest text-sm">Полное описание</h2>
                                <p className="text-gray-300 italic leading-relaxed text-xl relative z-10">{caseStudy.content.fullDescription}</p>
                            </div>

                        </div>

                    </div>

                    {/* Как это выглядит — крупная витрина на всю ширину */}
                    {(caseStudy.liveScroll || (caseStudy.gallery && caseStudy.gallery.length > 0)) && (
                        <div className="relative left-1/2 -translate-x-1/2 w-screen mt-16 md:mt-20">
                            <div className="mx-auto max-w-6xl px-4">
                                <div className="mb-8 md:mb-12 text-center">
                                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-red-100 text-red-600">Как это выглядит</div>
                                    <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Живой результат работы</h2>
                                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                                        {caseStudy.liveScroll ? 'Смотрите, как настоящий сайт прокручивается сверху вниз.' : 'Нажмите на изображение, чтобы рассмотреть крупно.'}
                                    </p>
                                </div>
                                {caseStudy.liveScroll ? (
                                    <LiveSiteScroll
                                        desktop={caseStudy.liveScroll.desktop}
                                        mobile={caseStudy.liveScroll.mobile}
                                        url={caseStudy.liveScroll.url}
                                        title={caseStudy.title}
                                    />
                                ) : (
                                    <CaseGallery images={caseStudy.gallery!} title={caseStudy.title} />
                                )}
                            </div>
                        </div>
                    )}

                    {/* Related Services */}
                    {(() => {
                        const catToService: Record<string, { href: string; label: string }> = {
                            'SMM': { href: '/smm-almaty/', label: 'SMM продвижение' },
                            'BRANDING': { href: '/firmennyj-stil-almaty/', label: 'Фирменный стиль' },
                            'SEO': { href: '/seo-almaty/', label: 'SEO продвижение' },
                            'SITE': { href: '/sozdanie-sajtov-almaty/', label: 'Создание сайтов' },
                            'CONTEXT': { href: '/kontekstnaya-reklama-almaty/', label: 'Контекстная реклама' },
                            'ANALYTICS': { href: '/marketing-almaty/', label: 'Маркетинговая стратегия' },
                        };
                        const services = caseStudy.categories
                            .map(cat => catToService[cat])
                            .filter(Boolean);
                        return services.length > 0 ? (
                            <div className="mt-12 p-6 md:p-8 bg-zinc-50 rounded-2xl border border-gray-100">
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Услуги в этом кейсе</p>
                                <div className="flex flex-wrap gap-3">
                                    {services.map((s) => (
                                        <Link key={s!.href} href={s!.href} className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-900 hover:border-red-300 hover:text-red-600 transition-all shadow-sm">
                                            {s!.label} →
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : null;
                    })()}

                    {/* Navigation */}
                    <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/cases/" className="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 shadow-sm hover:shadow-md hover:border-gray-300 hover:text-red-600 font-bold transition-all">
                            <svg className="w-5 h-5 mr-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            Назад ко всем кейсам
                        </Link>
                    </div>
                </div>
            </main>
            <CTA />
            <RawFooter />
        </>
    );
}
