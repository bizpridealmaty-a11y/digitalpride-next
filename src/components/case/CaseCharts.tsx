'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { CaseMetric, ChartPoint } from '../../data/cases';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
    const [display, setDisplay] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 1500;
                    const startTime = performance.now();
                    const animate = (now: number) => {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setDisplay(Math.round(eased * value));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            {display.toLocaleString('ru-RU')}{suffix}
        </div>
    );
}

function BarChart({ metrics }: { metrics: CaseMetric[] }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="space-y-8">
            {metrics.map((m, i) => {
                const maxVal = Math.max(m.before, m.after);
                const beforePct = (m.before / maxVal) * 100;
                const afterPct = (m.after / maxVal) * 100;

                return (
                    <div key={i} className="space-y-3">
                        <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">{m.label}</div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-gray-400 w-12 shrink-0">До</span>
                                <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                                    <div
                                        className="h-full bg-gray-300 rounded-full flex items-center justify-end pr-3 transition-all duration-1000 ease-out"
                                        style={{ width: visible ? `${Math.max(beforePct, 8)}%` : '0%' }}
                                    >
                                        <span className="text-xs font-bold text-gray-600 whitespace-nowrap">
                                            {m.before.toLocaleString('ru-RU')}{m.suffix}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-red-500 w-12 shrink-0">После</span>
                                <div className="flex-1 bg-red-50 rounded-full h-8 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-end pr-3 transition-all duration-1000 ease-out"
                                        style={{ width: visible ? `${Math.max(afterPct, 8)}%` : '0%', transitionDelay: `${i * 200}ms` }}
                                    >
                                        <span className="text-xs font-bold text-white whitespace-nowrap">
                                            {m.after.toLocaleString('ru-RU')}{m.suffix}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function LineChart({ data, label }: { data: ChartPoint[]; label: string }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const maxVal = Math.max(...data.map(d => d.value));
    const minVal = Math.min(...data.map(d => d.value));
    const range = maxVal - minVal || 1;

    const svgW = 500;
    const svgH = 200;
    const padX = 40;
    const padY = 20;
    const chartW = svgW - padX * 2;
    const chartH = svgH - padY * 2;

    const points = data.map((d, i) => {
        const x = padX + (i / (data.length - 1)) * chartW;
        const y = padY + chartH - ((d.value - minVal) / range) * chartH;
        return { x, y, ...d };
    });

    const polyline = points.map(p => `${p.x},${p.y}`).join(' ');
    const areaPath = `M${points[0].x},${padY + chartH} ${points.map(p => `L${p.x},${p.y}`).join(' ')} L${points[points.length - 1].x},${padY + chartH} Z`;

    return (
        <div ref={ref}>
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">{label}</div>
            <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full" style={{ maxHeight: '250px' }}>
                {/* Grid lines */}
                {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => (
                    <line
                        key={i}
                        x1={padX}
                        y1={padY + chartH * (1 - pct)}
                        x2={svgW - padX}
                        y2={padY + chartH * (1 - pct)}
                        stroke="#f1f5f9"
                        strokeWidth="1"
                    />
                ))}

                {/* Area fill */}
                <path
                    d={areaPath}
                    fill="url(#areaGradient)"
                    opacity={visible ? 0.3 : 0}
                    style={{ transition: 'opacity 1s ease-out 0.5s' }}
                />

                {/* Line */}
                <polyline
                    points={polyline}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={visible ? '0' : '2000'}
                    strokeDashoffset={visible ? '0' : '2000'}
                    style={{ transition: 'stroke-dasharray 1.5s ease-out, stroke-dashoffset 1.5s ease-out' }}
                />

                {/* Data points */}
                {points.map((p, i) => (
                    <g key={i}>
                        <circle
                            cx={p.x}
                            cy={p.y}
                            r={visible ? 5 : 0}
                            fill="white"
                            stroke="#ef4444"
                            strokeWidth="2.5"
                            style={{ transition: `r 0.3s ease-out ${0.5 + i * 0.15}s` }}
                        />
                        <text
                            x={p.x}
                            y={p.y - 12}
                            textAnchor="middle"
                            className="text-[10px] font-bold fill-gray-500"
                            opacity={visible ? 1 : 0}
                            style={{ transition: `opacity 0.3s ease-out ${0.5 + i * 0.15}s` }}
                        >
                            {p.value.toLocaleString('ru-RU')}
                        </text>
                    </g>
                ))}

                {/* X axis labels */}
                {points.map((p, i) => (
                    <text
                        key={`label-${i}`}
                        x={p.x}
                        y={svgH - 2}
                        textAnchor="middle"
                        className="text-[10px] font-medium fill-gray-400"
                    >
                        {p.month}
                    </text>
                ))}

                <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export default function CaseCharts({ barMetrics, chartData, timeline }: {
    barMetrics: CaseMetric[];
    chartData: ChartPoint[];
    timeline: string;
}) {
    return (
        <div className="space-y-12">
            {/* Timeline badge */}
            <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-red-50 rounded-xl border border-red-100">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Срок проекта: </span>
                    <span className="text-sm font-extrabold text-red-700">{timeline}</span>
                </div>
            </div>

            {/* Bar chart comparison */}
            <div className="bg-zinc-50 p-6 md:p-10 rounded-3xl border border-gray-100">
                <h3 className="text-lg font-bold text-black mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </span>
                    Сравнение «До» и «После»
                </h3>
                <BarChart metrics={barMetrics} />
            </div>

            {/* Line chart */}
            <div className="bg-zinc-50 p-6 md:p-10 rounded-3xl border border-gray-100">
                <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </span>
                    Динамика роста
                </h3>
                <LineChart data={chartData} label="Ключевой показатель по месяцам" />
            </div>
        </div>
    );
}
