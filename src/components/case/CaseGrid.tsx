'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { casesData, getAllCategories } from '../../data/cases';

export default function CaseGrid() {
    const [filter, setFilter] = useState<string>('ALL');
    const categories = ['ALL', ...getAllCategories()];

    const filteredCases = filter === 'ALL' ? casesData : casesData.filter(c => c.categories.includes(filter));

    return (
        <div className="container mx-auto px-4 max-w-6xl py-12">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all border uppercase tracking-wider ${filter === cat ? 'bg-red-600 border-red-600 text-white' : 'bg-transparent border-gray-300 text-gray-600 hover:border-red-400'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredCases.map(item => (
                    <div key={item.id} className="group relative rounded-3xl overflow-hidden aspect-square cursor-pointer shadow-xl bg-black">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700" />
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-300"></div>

                        {/* Category Badges — top-right corner */}
                        <div className="absolute top-3 right-3 z-20 flex flex-wrap justify-end gap-1.5 max-w-[60%] group-hover:opacity-0 transition-opacity duration-300">
                            {item.categories.slice(0, 2).map((cat, i) => (
                                <span key={i} className="text-[9px] font-semibold text-white bg-red-600 px-2.5 py-1 rounded-full uppercase tracking-wider">
                                    {cat}
                                </span>
                            ))}
                        </div>

                        {/* Hover Info Overlay (Hidden by default, slides up on hover) */}
                        <div className="absolute inset-0 bg-red-900/95 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex flex-col justify-center p-6 lg:p-8 translate-y-6 group-hover:translate-y-0">
                            <h3 className="text-xl lg:text-3xl font-extrabold text-white mb-3 leading-tight font-sans tracking-tight">{item.title}</h3>
                            <p className="text-red-50 text-xs lg:text-sm mb-6 leading-relaxed">
                                {item.hoverDescription}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-red-500/30">
                                {item.hoverMetrics.map((m, i) => (
                                    <div key={i}>
                                        <div className="text-2xl lg:text-3xl font-extrabold text-white">{m.value}</div>
                                        <div className="text-[10px] lg:text-xs text-red-200 uppercase tracking-widest">{m.label}</div>
                                    </div>
                                ))}
                            </div>

                            <Link href={`/case/${item.slug}`} className="mt-auto inline-flex items-center text-white font-bold text-xs lg:text-sm bg-white/20 hover:bg-white/30 px-5 py-3 rounded-xl w-max transition-colors">
                                Полный кейс
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </Link>
                        </div>

                        {/* Default View (Title at bottom) */}
                        <div className="absolute bottom-0 left-0 p-6 z-10 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300 w-full">
                            <div className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                {item.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
