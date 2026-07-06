'use client';

import React, { useMemo, useState } from 'react';
import { trackLeadFormSubmit } from '@/lib/analytics';

type Service = {
    id: string;
    label: string;
    price: number;
    note?: string;
    group: 'Платные каналы' | 'Контент' | 'Сайт' | 'Стратегия' | 'Дополнительно';
};

const services: Service[] = [
    { id: 'smm-1', label: 'SMM — ведение 1 соцсети', price: 200000, group: 'Контент' },
    { id: 'smm-2', label: 'SMM — ведение 2 соцсетей', price: 350000, group: 'Контент' },
    { id: 'reels', label: 'Reels-продакшн (8 роликов/мес)', price: 180000, group: 'Контент' },
    { id: 'photo', label: 'Фотосъёмка раз в месяц', price: 90000, group: 'Контент' },
    { id: 'target', label: 'Таргетированная реклама', price: 250000, note: 'без рекламного бюджета', group: 'Платные каналы' },
    { id: 'context', label: 'Контекстная реклама (Google + Яндекс)', price: 400000, note: 'без рекламного бюджета', group: 'Платные каналы' },
    { id: 'seo', label: 'SEO-продвижение', price: 300000, group: 'Платные каналы' },
    { id: 'tiktok', label: 'Таргет TikTok', price: 250000, note: 'без рекламного бюджета', group: 'Платные каналы' },
    { id: 'audit', label: 'Аудит текущей рекламы', price: 0, note: 'бесплатно', group: 'Дополнительно' },
    { id: 'landing', label: 'Лендинг (одностраничный сайт)', price: 300000, note: 'единоразово', group: 'Сайт' },
    { id: 'corporate', label: 'Корпоративный сайт', price: 800000, note: 'единоразово', group: 'Сайт' },
    { id: 'shop', label: 'Интернет-магазин', price: 1500000, note: 'единоразово', group: 'Сайт' },
    { id: 'strategy', label: 'Маркетинговая стратегия', price: 1000000, note: 'единоразово', group: 'Стратегия' },
    { id: 'consulting', label: 'Маркетинг-консалтинг (4 ч/мес)', price: 120000, group: 'Стратегия' },
    { id: 'funnel', label: 'Воронки продаж', price: 1300000, note: 'единоразово', group: 'Стратегия' },
    { id: 'sales-dept', label: 'Отдел продаж под ключ', price: 2000000, note: 'единоразово', group: 'Стратегия' },
    { id: 'logo', label: 'Разработка логотипа', price: 150000, note: 'единоразово', group: 'Дополнительно' },
    { id: 'brand', label: 'Фирменный стиль и брендбук', price: 500000, note: 'единоразово', group: 'Дополнительно' },
    { id: 'serm', label: 'Управление репутацией (SERM)', price: 130000, group: 'Дополнительно' },
    { id: 'chatbot', label: 'Чат-боты', price: 250000, note: 'единоразово', group: 'Дополнительно' },
];

const groups: Service['group'][] = ['Платные каналы', 'Контент', 'Сайт', 'Стратегия', 'Дополнительно'];

function formatPrice(value: number): string {
    return value.toLocaleString('ru-RU').replace(/,/g, ' ') + ' ₸';
}

export default function Calculator() {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const [contactOpen, setContactOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const toggle = (id: string) => {
        setSelected((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const { monthly, oneTime, totalFirstMonth } = useMemo(() => {
        let m = 0;
        let o = 0;
        for (const s of services) {
            if (!selected.has(s.id)) continue;
            if (s.note?.includes('единоразово')) o += s.price;
            else m += s.price;
        }
        return { monthly: m, oneTime: o, totalFirstMonth: m + o };
    }, [selected]);

    const discount = useMemo(() => {
        const count = selected.size;
        if (count >= 5) return 0.15;
        if (count >= 3) return 0.10;
        if (count >= 2) return 0.05;
        return 0;
    }, [selected]);

    const monthlyDiscounted = Math.round(monthly * (1 - discount));
    const oneTimeDiscounted = Math.round(oneTime * (1 - discount));
    const totalDiscounted = monthlyDiscounted + oneTimeDiscounted;
    const savings = totalFirstMonth - totalDiscounted;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (submitting) return;
        const form = e.currentTarget;
        const fd = new FormData(form);
        const name = String(fd.get('name') || '').trim();
        const phone = String(fd.get('phone') || '').trim();
        if (!name || !phone) return;
        setSubmitting(true);
        try {
            const list = services
                .filter((s) => selected.has(s.id))
                .map((s) => `• ${s.label} — ${formatPrice(s.price)}`)
                .join('\n');
            const summary = `\n\n${list}\n\nЕжемесячно: ${formatPrice(monthlyDiscounted)}\nЕдиноразово: ${formatPrice(oneTimeDiscounted)}${discount > 0 ? `\nСкидка: ${(discount * 100).toFixed(0)}%` : ''}`;
            await fetch('/api/telegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    phone,
                    source: `Калькулятор стоимости${summary}`,
                }),
            });
            trackLeadFormSubmit();
            setSubmitted(true);
        } catch {
            setSubmitted(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-white text-black">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 uppercase tracking-wider">
                        Калькулятор
                    </div>
                    <h2
                        className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight"
                        style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                        Рассчитайте стоимость услуг
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Выберите нужные направления — мы покажем итоговый бюджет с учётом скидки за комплекс.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Левая колонка: сервисы */}
                    <div className="lg:col-span-2 space-y-8">
                        {groups.map((g) => (
                            <div key={g}>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">{g}</h3>
                                <div className="space-y-2">
                                    {services
                                        .filter((s) => s.group === g)
                                        .map((s) => {
                                            const isSelected = selected.has(s.id);
                                            return (
                                                <button
                                                    key={s.id}
                                                    type="button"
                                                    onClick={() => toggle(s.id)}
                                                    className={`w-full flex items-center justify-between p-5 rounded-xl border-2 transition-all text-left ${
                                                        isSelected
                                                            ? 'bg-red-50 border-red-400 shadow-sm'
                                                            : 'bg-white border-gray-200 hover:border-gray-400'
                                                    }`}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div
                                                            className={`flex-shrink-0 w-6 h-6 rounded-md border-2 mt-0.5 flex items-center justify-center transition-all ${
                                                                isSelected ? 'bg-red-600 border-red-600' : 'border-gray-300'
                                                            }`}
                                                        >
                                                            {isSelected && (
                                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold">{s.label}</div>
                                                            {s.note && <div className="text-xs text-gray-500 mt-0.5">{s.note}</div>}
                                                        </div>
                                                    </div>
                                                    <div className="text-right ml-4 flex-shrink-0">
                                                        <div className="font-bold text-black">
                                                            {s.price > 0 ? `от ${formatPrice(s.price)}` : 'Бесплатно'}
                                                        </div>
                                                        {!s.note?.includes('единоразово') && s.price > 0 && (
                                                            <div className="text-xs text-gray-500">в месяц</div>
                                                        )}
                                                    </div>
                                                </button>
                                            );
                                        })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Правая колонка: итог */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 bg-zinc-950 text-white rounded-2xl p-8 shadow-2xl">
                            <h3
                                className="text-2xl font-extrabold mb-6 tracking-tight"
                                style={{ fontFamily: "'Unbounded', sans-serif" }}
                            >
                                Ваша смета
                            </h3>

                            {selected.size === 0 ? (
                                <p className="text-gray-400 text-sm">
                                    Выберите услуги слева — здесь появится итоговая стоимость с учётом скидки за комплекс.
                                </p>
                            ) : (
                                <>
                                    <div className="space-y-3 mb-6 pb-6 border-b border-zinc-800 max-h-72 overflow-y-auto">
                                        {services
                                            .filter((s) => selected.has(s.id))
                                            .map((s) => (
                                                <div key={s.id} className="flex justify-between items-start text-sm gap-3">
                                                    <span className="text-gray-300 leading-tight">{s.label}</span>
                                                    <span className="text-white font-semibold whitespace-nowrap">
                                                        {s.price > 0 ? formatPrice(s.price) : 'бесплатно'}
                                                    </span>
                                                </div>
                                            ))}
                                    </div>

                                    {monthly > 0 && (
                                        <div className="flex justify-between items-baseline mb-2">
                                            <span className="text-gray-400 text-sm">Ежемесячно</span>
                                            <span className="text-xl font-bold">
                                                {discount > 0 && (
                                                    <span className="text-gray-500 line-through text-sm font-normal mr-2">
                                                        {formatPrice(monthly)}
                                                    </span>
                                                )}
                                                {formatPrice(monthlyDiscounted)}
                                            </span>
                                        </div>
                                    )}
                                    {oneTime > 0 && (
                                        <div className="flex justify-between items-baseline mb-2">
                                            <span className="text-gray-400 text-sm">Единоразово</span>
                                            <span className="text-xl font-bold">
                                                {discount > 0 && (
                                                    <span className="text-gray-500 line-through text-sm font-normal mr-2">
                                                        {formatPrice(oneTime)}
                                                    </span>
                                                )}
                                                {formatPrice(oneTimeDiscounted)}
                                            </span>
                                        </div>
                                    )}
                                    {discount > 0 && (
                                        <div className="bg-red-600/20 border border-red-600/40 text-red-300 text-sm rounded-lg p-3 mt-4">
                                            🎁 Скидка {(discount * 100).toFixed(0)}% за комплекс — экономия {formatPrice(savings)}
                                        </div>
                                    )}
                                    <div className="mt-6 pt-6 border-t border-zinc-800">
                                        <div className="text-gray-400 text-xs mb-1">Итого первый месяц</div>
                                        <div
                                            className="text-3xl font-extrabold text-red-500"
                                            style={{ fontFamily: "'Unbounded', sans-serif" }}
                                        >
                                            {formatPrice(totalDiscounted)}
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setContactOpen(true)}
                                        className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors"
                                    >
                                        Получить точный расчёт
                                    </button>
                                    <p className="text-xs text-gray-500 mt-3 text-center">
                                        Точная стоимость зависит от объёма работ и обсуждается на брифе.
                                    </p>
                                </>
                            )}
                        </div>
                    </aside>
                </div>
            </div>

            {/* Модальное окно контактов */}
            {contactOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setContactOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.7)',
                        zIndex: 10000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px',
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: '#fff',
                            borderRadius: '20px',
                            padding: '40px 32px',
                            maxWidth: '440px',
                            width: '100%',
                            position: 'relative',
                        }}
                    >
                        <button
                            type="button"
                            aria-label="Закрыть"
                            onClick={() => setContactOpen(false)}
                            style={{
                                position: 'absolute', top: '12px', right: '12px',
                                background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#888',
                            }}
                        >
                            ✕
                        </button>

                        {submitted ? (
                            <div className="text-center py-4">
                                <div className="text-5xl mb-4">✓</div>
                                <h3 className="text-xl font-extrabold mb-2 text-black">Заявка отправлена</h3>
                                <p className="text-gray-600">
                                    Менеджер свяжется в течение часа с подробным расчётом и предложением по вашему набору услуг.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-extrabold mb-2 text-black">
                                    Получить точный расчёт
                                </h3>
                                <p className="text-gray-600 text-sm mb-6">
                                    Отправим детальное коммерческое предложение под ваши задачи в течение часа.
                                </p>
                                <form onSubmit={handleSubmit} className="space-y-3">
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Ваше имя"
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-400 outline-none text-black"
                                    />
                                    <input
                                        name="phone"
                                        type="tel"
                                        placeholder="+7 (___) ___-__-__"
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-400 outline-none text-black"
                                    />
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-colors"
                                    >
                                        {submitting ? 'Отправляем…' : 'Получить расчёт'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
