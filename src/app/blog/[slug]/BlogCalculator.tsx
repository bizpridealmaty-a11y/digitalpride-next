'use client';

import { useState } from 'react';
import type { BlogCalculatorConfig } from '@/lib/blog';

/**
 * Интерактивный калькулятор внутри статьи: читатель отмечает нужные работы
 * и сам собирает вилку бюджета. Универсальный — вся конфигурация приходит
 * из данных статьи (поле `calculator` в BlogPost).
 *
 * Смысл в редполитике: не продаём, а даём инструмент. Поэтому здесь же честный
 * вердикт — если бюджет ниже рабочего порога, прямо говорим об этом.
 */
export default function BlogCalculator({ config }: { config: BlogCalculatorConfig }) {
    const [on, setOn] = useState<boolean[]>(() => config.options.map((o) => !!o.default));

    const sum = (once: boolean) =>
        config.options.reduce(
            (acc, o, i) => {
                if (!on[i] || !!o.once !== once) return acc;
                return { min: acc.min + o.min, max: acc.max + o.max };
            },
            { min: 0, max: 0 },
        );

    const monthly = sum(false);
    const upfront = sum(true);
    const fmt = (n: number) => (n * 1000).toLocaleString('ru-RU').replace(/ /g, ' ');

    const belowFloor = config.floor !== undefined && monthly.max > 0 && monthly.max < config.floor;

    return (
        <section className="my-11 rounded-3xl overflow-hidden border border-zinc-800" style={{ background: 'linear-gradient(165deg,#15141a,#1e1a1f)' }}>
            <div className="px-6 pt-6 sm:px-7">
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-red-500">{config.kicker}</div>
                <h3 className="text-white text-xl sm:text-2xl font-extrabold mt-2 mb-1.5" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                    {config.title}
                </h3>
                <p className="text-white/50 text-[13.5px] m-0">{config.subtitle}</p>
            </div>

            <div className="grid lg:grid-cols-[1fr_260px] gap-6 p-6 sm:p-7">
                <div>
                    {config.options.map((o, i) => (
                        <label
                            key={i}
                            className={`flex items-start gap-3 p-3.5 rounded-xl mb-2.5 cursor-pointer border transition-colors ${
                                on[i] ? 'border-red-500 bg-red-500/10' : 'border-zinc-700 bg-white/[0.02] hover:border-zinc-600'
                            }`}
                        >
                            <input
                                type="checkbox"
                                checked={on[i]}
                                onChange={() => setOn((prev) => prev.map((v, j) => (j === i ? !v : v)))}
                                className="mt-1 w-4 h-4 flex-none accent-red-500"
                            />
                            <span className="min-w-0">
                                <span className="block text-white text-sm font-semibold">{o.name}</span>
                                <span className="block text-white/45 text-xs mt-0.5">{o.desc}</span>
                            </span>
                            <span className="ml-auto pl-2 text-red-300 text-[12.5px] font-bold whitespace-nowrap tabular-nums">
                                {o.min}–{o.max}к{o.once ? '' : '/мес'}
                            </span>
                        </label>
                    ))}
                </div>

                <div className="self-start lg:sticky lg:top-24 rounded-2xl border border-zinc-700 bg-white/[0.04] p-5">
                    <div className="text-[11px] font-extrabold uppercase tracking-widest text-white/40">Ежемесячно</div>
                    <div className="text-white font-extrabold text-2xl mt-2 mb-0.5 tabular-nums leading-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                        {monthly.min ? `${fmt(monthly.min)} – ${fmt(monthly.max)} ₸` : '—'}
                    </div>
                    <div className="text-white/45 text-xs">за постоянные работы</div>

                    <hr className="border-zinc-700 my-4" />

                    <div className="text-[11px] font-extrabold uppercase tracking-widest text-white/40">Разово на старте</div>
                    <div className="text-white font-extrabold text-lg mt-2 mb-0.5 tabular-nums" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                        {upfront.min ? `${fmt(upfront.min)} – ${fmt(upfront.max)} ₸` : '—'}
                    </div>
                    <div className="text-white/45 text-xs">{config.upfrontLabel ?? 'единоразовые работы'}</div>

                    <hr className="border-zinc-700 my-4" />

                    <p className={`text-[13px] leading-snug m-0 ${belowFloor ? 'text-red-300' : monthly.min ? 'text-green-300' : 'text-white/40'}`}>
                        {monthly.min === 0
                            ? 'Отметьте хотя бы одну ежемесячную работу.'
                            : belowFloor
                              ? config.floorNote
                              : (config.okNote ?? '✓ Бюджет в рабочем диапазоне рынка.')}
                    </p>
                </div>
            </div>
        </section>
    );
}
