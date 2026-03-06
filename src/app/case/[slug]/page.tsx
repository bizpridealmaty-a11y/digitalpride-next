import React from 'react';

import RawFooter from '../../../components/layout/RawFooter';
import CTA from '../../../components/home/CTA';
import CaseCharts from '../../../components/case/CaseCharts';
import AdScreenshot from '../../../components/case/AdScreenshot';
import { casesData } from '../../../data/cases';
import Link from 'next/link';

export function generateStaticParams() {
    return casesData.map((c) => ({
        slug: c.slug,
    }));
}

export default async function CaseDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const caseStudy = casesData.find(c => c.slug === slug);

    if (!caseStudy) {
        return (
            <>

                <div className="py-32 text-center bg-white min-h-screen">
                    <h1 className="text-4xl font-bold mb-4 text-black">Кейс не найден</h1>
                    <Link href="/case" className="text-red-600 hover:text-red-700 underline font-bold">Вернуться к списку кейсов</Link>
                </div>
                <RawFooter />
            </>
        );
    }

    return (
        <>

            <main className="bg-zinc-50 pb-24">
                {/* Banner */}
                <div className="relative h-[60vh] min-h-[400px] w-full bg-black flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0 scale-105">
                        <img src={caseStudy.coverImage} alt={caseStudy.title} className="w-full h-full object-cover opacity-40 blur-sm" />
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
                                    01. Проблема
                                </h2>
                                <p className="text-xl text-gray-700 leading-relaxed font-medium">{caseStudy.content.problem}</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-red-600 mb-6 uppercase tracking-widest text-sm flex items-center gap-3">
                                    <span className="w-8 h-px bg-red-600 inline-block"></span>
                                    02. Что мы сделали
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

                            {/* Charts Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-red-600 mb-8 uppercase tracking-widest text-sm flex items-center gap-3">
                                    <span className="w-8 h-px bg-red-600 inline-block"></span>
                                    03. Динамика показателей
                                </h2>
                                <CaseCharts
                                    barMetrics={caseStudy.barMetrics}
                                    chartData={caseStudy.chartData}
                                    timeline={caseStudy.timeline}
                                />
                            </div>

                            {/* Ad Screenshot Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-red-600 mb-8 uppercase tracking-widest text-sm flex items-center gap-3">
                                    <span className="w-8 h-px bg-red-600 inline-block"></span>
                                    04. Рекламный кабинет
                                </h2>
                                <AdScreenshot
                                    platform={caseStudy.adPlatform}
                                    screenshot={caseStudy.adScreenshot}
                                />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-red-600 mb-6 uppercase tracking-widest text-sm flex items-center gap-3">
                                    <span className="w-8 h-px bg-red-600 inline-block"></span>
                                    05. Результат
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

                    {/* Navigation */}
                    <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/case" className="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 shadow-sm hover:shadow-md hover:border-gray-300 hover:text-red-600 font-bold transition-all">
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
