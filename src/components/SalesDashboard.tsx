'use client';

import React, { useEffect, useRef, useState } from 'react';

/** Fire once when the element first scrolls into view (plain IntersectionObserver —
 * reliable regardless of framer-motion's LazyMotion setup). */
function useInViewOnce(ref: React.RefObject<HTMLElement | null>): boolean {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === 'undefined') { setInView(true); return; }
        const obs = new IntersectionObserver((entries) => {
            if (entries.some((e) => e.isIntersecting)) { setInView(true); obs.disconnect(); }
        }, { threshold: 0.15 });
        obs.observe(el);
        return () => obs.disconnect();
    }, [ref]);
    return inView;
}

/** Count from 0 to `to` (easeOutCubic) once `active` becomes true. */
function useCountUp(to: number, active: boolean, duration = 1500): number {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!active) return;
        let raf = 0;
        let start = 0;
        const step = (ts: number) => {
            if (!start) start = ts;
            const t = Math.min(1, (ts - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(to * eased);
            if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [active, to, duration]);
    return value;
}

const fmt = (n: number) => Math.round(n).toLocaleString('ru-RU');

function Kpi({ label, value, suffix, delta, active }: { label: string; value: number; suffix: string; delta: string; active: boolean }) {
    const v = useCountUp(value, active);
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <div className="text-xs text-gray-400 mb-1">{label}</div>
            <div className="text-lg md:text-xl font-extrabold text-gray-900 tabular-nums">{fmt(v)}{suffix}</div>
            <div className="text-xs font-semibold text-emerald-500 mt-0.5">{delta}</div>
        </div>
    );
}

const funnel = [
    { stage: 'Новые лиды', value: 1250 },
    { stage: 'Квалификация', value: 860 },
    { stage: 'КП отправлено', value: 540 },
    { stage: 'Переговоры', value: 320 },
    { stage: 'Сделка', value: 170 },
];

const planFact = [
    { m: 'Янв', v: 42 }, { m: 'Фев', v: 55 }, { m: 'Мар', v: 61 },
    { m: 'Апр', v: 74 }, { m: 'Май', v: 83 }, { m: 'Июн', v: 100 },
];

const managers = [
    { name: 'Алия Н.', sum: 7850000, pct: 100, delta: '+32%' },
    { name: 'Дмитрий К.', sum: 6420000, pct: 82, delta: '+18%' },
    { name: 'Ермек А.', sum: 5210000, pct: 66, delta: '+12%' },
    { name: 'Мадина С.', sum: 4960000, pct: 63, delta: '+9%' },
];

function ManagerRow({ m, active, i }: { m: typeof managers[number]; active: boolean; i: number }) {
    const sum = useCountUp(m.sum, active);
    return (
        <div className="flex items-center gap-3">
            <div className="w-16 shrink-0 text-xs font-semibold text-gray-700">{m.name}</div>
            <div className="flex-1 h-2.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                    className="h-full rounded-full bg-indigo-500 transition-all duration-1000 ease-out"
                    style={{ width: active ? `${m.pct}%` : '0%', transitionDelay: `${i * 100}ms` }}
                />
            </div>
            <div className="w-24 shrink-0 text-right text-xs font-bold text-gray-900 tabular-nums">{fmt(sum)} ₸</div>
            <div className="w-10 shrink-0 text-right text-xs font-semibold text-emerald-500">{m.delta}</div>
        </div>
    );
}

export default function SalesDashboard() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInViewOnce(ref);
    const maxFunnel = funnel[0].value;

    return (
        <section className="py-20 bg-gray-50 text-black">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-center">
                    Собственник видит отдел продаж в цифрах, а не по ощущениям
                </h2>
                <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                    После внедрения все продажи — на одном экране: воронка, конверсия, план/факт, звонки и эффективность каждого менеджера.
                </p>

                <div ref={ref} className="rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
                    {/* Chrome */}
                    <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <div className="ml-3 flex items-center gap-2 text-sm font-bold text-gray-700">
                            <span className="w-5 h-5 rounded-md bg-indigo-600 inline-flex items-center justify-center text-white text-xs">S</span>
                            SalesSystem
                        </div>
                        <div className="ml-auto text-xs text-gray-400">Дашборд · сегодня</div>
                    </div>

                    <div className="p-5 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {/* Funnel */}
                        <div className="rounded-xl border border-gray-100 p-4">
                            <div className="text-sm font-bold text-gray-800 mb-4">Воронка продаж</div>
                            <div className="space-y-2.5">
                                {funnel.map((f, i) => (
                                    <div key={f.stage} className="flex items-center gap-3">
                                        <div className="w-28 shrink-0 text-xs text-gray-500">{f.stage}</div>
                                        <div className="flex-1 h-7 rounded-md bg-gray-100 overflow-hidden">
                                            <div
                                                className="h-full rounded-md bg-gradient-to-r from-indigo-500 to-indigo-400 flex items-center justify-end pr-2 transition-all duration-1000 ease-out"
                                                style={{ width: inView ? `${(f.value / maxFunnel) * 100}%` : '0%', transitionDelay: `${i * 120}ms` }}
                                            >
                                                <span className="text-[11px] font-bold text-white tabular-nums">{f.value}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* KPIs */}
                        <div className="grid grid-cols-2 gap-3">
                            <Kpi label="Выручка" value={24800000} suffix=" ₸" delta="+28% к плану" active={inView} />
                            <Kpi label="Конверсия" value={23} suffix="%" delta="+5 п.п." active={inView} />
                            <Kpi label="Средний чек" value={1240000} suffix=" ₸" delta="+15%" active={inView} />
                            <Kpi label="Новые лиды" value={1250} suffix="" delta="+32%" active={inView} />
                        </div>

                        {/* Plan/Fact chart */}
                        <div className="rounded-xl border border-gray-100 p-4">
                            <div className="text-sm font-bold text-gray-800 mb-4">План / Факт по месяцам</div>
                            <div className="flex items-end justify-between gap-2 h-36">
                                {planFact.map((b, i) => (
                                    <div key={b.m} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                        <div
                                            className="w-full rounded-t-md bg-gradient-to-t from-indigo-600 to-indigo-400 transition-all duration-1000 ease-out"
                                            style={{ height: inView ? `${b.v}%` : '0%', transitionDelay: `${i * 80}ms` }}
                                        />
                                        <span className="text-[10px] text-gray-400">{b.m}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Managers */}
                        <div className="rounded-xl border border-gray-100 p-4">
                            <div className="text-sm font-bold text-gray-800 mb-4">Эффективность менеджеров</div>
                            <div className="space-y-3">
                                {managers.map((m, i) => (
                                    <ManagerRow key={m.name} m={m} active={inView} i={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-xs text-gray-400 mt-4">Пример дашборда отдела продаж. Данные показаны для наглядности.</p>
            </div>
        </section>
    );
}
