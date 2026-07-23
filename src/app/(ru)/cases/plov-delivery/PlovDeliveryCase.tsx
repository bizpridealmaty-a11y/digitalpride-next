'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RawFooter from '@/components/layout/RawFooter';
import Breadcrumbs from '@/components/Breadcrumbs';
import { trackWhatsAppClick } from '@/lib/analytics';

const IMG = '/images/cases/plov-delivery';
const VID = '/videos/cases/plov';

// Реальные рекламные креативы (ролики), которые крутились в кампании.
const CREATIVES = [
    { src: `${VID}/domashniy.mp4`, poster: `${IMG}/poster-domashniy.jpg`, label: 'Домашний обед с пловом' },
    { src: `${VID}/dr-1.mp4`, poster: `${IMG}/poster-dr-1.jpg`, label: 'Плов на день рождения' },
    { src: `${VID}/prazdnik.mp4`, poster: `${IMG}/poster-prazdnik.jpg`, label: 'Праздник без хлопот' },
    { src: `${VID}/obed-komanda.mp4`, poster: `${IMG}/poster-obed-komanda.jpg`, label: 'Офисный обед для команды' },
    { src: `${VID}/dr-2.mp4`, poster: `${IMG}/poster-dr-2.jpg`, label: 'День рождения без хлопот' },
];
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const COLORS = {
    bg: '#FFF9F2',
    card: '#FFFFFF',
    text: '#1A1A1A',
    muted: '#5E5E5E',
    red: '#E31C24',
    gold: '#F2A93B',
    border: '#E8D9C4',
    whatsapp: '#25D366',
    lightRed: '#FDE8E8',
};

function CountUp({ end, prefix = '', suffix = '' }: { end: number; prefix?: string; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0;
                const dur = 1200;
                const step = (ts: number) => { if (!start) start = ts; const p = Math.min((ts - start) / dur, 1); setCount(Math.floor(p * end)); if (p < 1) requestAnimationFrame(step); };
                requestAnimationFrame(step);
                observer.disconnect();
            }
        }, { threshold: 0.3 });
        observer.observe(el);
        return () => observer.disconnect();
    }, [end]);
    return <span ref={ref}>{prefix}{count.toLocaleString('ru-RU')}{suffix}</span>;
}

function Scr({ src, alt, label, onClick }: { src: string; alt: string; label?: string; onClick: () => void }) {
    return (
        <motion.div variants={fadeUp} className="cursor-pointer group">
            <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${COLORS.border}`, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', transition: 'transform 0.3s, box-shadow 0.3s' }} className="group-hover:shadow-xl group-hover:-translate-y-1" onClick={onClick}>
                <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
            </div>
            {label && <p className="text-xs font-semibold mt-3 text-center" style={{ color: COLORS.muted }}>{label}</p>}
        </motion.div>
    );
}

// Видео-креатив: сначала показываем постер + кнопку play (5 роликов не грузим
// разом — preload='none'), по клику подставляем <video> с controls и звуком.
// Это РЕАЛЬНЫЕ ролики, которые крутились в Meta Ads — вертикальный формат 9:16.
function Vid({ src, poster, label }: { src: string; poster: string; label: string }) {
    const [playing, setPlaying] = useState(false);
    return (
        <motion.div variants={fadeUp}>
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', border: `1px solid ${COLORS.border}`, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', aspectRatio: '9 / 16', background: '#000' }}>
                {playing ? (
                    <video
                        src={src}
                        poster={poster}
                        controls
                        autoPlay
                        playsInline
                        loop
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ) : (
                    <button
                        type="button"
                        onClick={() => setPlaying(true)}
                        aria-label={`Смотреть креатив: ${label}`}
                        className="absolute inset-0 w-full h-full group cursor-pointer"
                    >
                        <img src={poster} alt={label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <span className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.12)' }}>
                            <span className="flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110" style={{ width: 64, height: 64, background: 'rgba(255,255,255,0.92)', boxShadow: '0 8px 30px rgba(0,0,0,0.35)' }}>
                                <svg width="26" height="26" viewBox="0 0 24 24" fill={COLORS.red} style={{ marginLeft: 4 }}><path d="M8 5v14l11-7z" /></svg>
                            </span>
                        </span>
                    </button>
                )}
            </div>
            <p className="text-xs font-semibold mt-3 text-center" style={{ color: COLORS.muted }}>{label}</p>
        </motion.div>
    );
}

function KpiCard({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
    return (
        <div className="text-center p-4 md:p-5 rounded-2xl" style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold" style={{ fontFamily: "'Unbounded', sans-serif", color: accent ? COLORS.red : COLORS.text }}>{value}</div>
            <div className="text-[10px] sm:text-xs font-bold mt-1" style={{ color: COLORS.muted, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</div>
        </div>
    );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
    return <div className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ background: COLORS.lightRed, color: COLORS.red }}>{children}</div>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }}>{children}</h2>;
}

const WA_LINK = 'https://wa.me/77070357777?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B';

export default function PlovDeliveryCase() {
    const [lightbox, setLightbox] = useState<string | null>(null);
    const open = useCallback((src: string) => setLightbox(src), []);
    const close = useCallback(() => setLightbox(null), []);

    return (
        <>
            <main style={{ background: COLORS.bg, color: COLORS.text }}>

                {/* ========== 1. HERO ========== */}
                <section style={{ paddingTop: 140, paddingBottom: 60 }}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <Breadcrumbs items={[{ name: 'Кейсы', item: '/cases' }, { name: 'Доставка плова', item: '/cases/plov-delivery' }]} />

                        <div className="flex flex-col lg:flex-row gap-10 items-start mt-8">
                            <div className="flex-1 min-w-0">
                                <motion.div initial="hidden" animate="visible" variants={stagger}>
                                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: COLORS.lightRed, color: COLORS.red }}>
                                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: COLORS.red, display: 'inline-block' }} />
                                        Лучшая связка: 259 переписок по $0,78
                                    </motion.div>

                                    <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                        427 ПЕРЕПИСОК В WHATSAPP ДЛЯ <span style={{ color: COLORS.red }}>ДОСТАВКИ ПЛОВА</span> В АЛМАТЫ
                                    </motion.h1>

                                    <motion.p variants={fadeUp} className="text-base md:text-lg mb-8" style={{ color: COLORS.muted, maxWidth: 560, lineHeight: 1.7 }}>
                                        Настроили рекламу в Meta Ads, протестировали креативы и привлекли обращения в WhatsApp для заказа горячего плова с доставкой.
                                    </motion.p>

                                    <motion.div variants={fadeUp} className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-8">
                                        <KpiCard value="427" label="переписок" accent />
                                        <KpiCard value="$1,33" label="средняя цена" />
                                        <KpiCard value="$566,86" label="бюджет" />
                                        <KpiCard value="93 875" label="показов" />
                                        <KpiCard value="62 716" label="охват" />
                                    </motion.div>

                                    <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
                                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('plov_hero')}
                                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base transition-transform hover:scale-105"
                                            style={{ background: COLORS.red, boxShadow: '0 8px 30px rgba(227,28,36,0.3)' }}>
                                            Получить разбор рекламы
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </a>
                                        <span className="text-sm" style={{ color: COLORS.muted }}>Разберём вашу рекламу и дадим рекомендации</span>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* В герое — настоящий креатив (аппетитный визуал сразу цепляет),
                                а скриншот-доказательство «427 переписок» лежит первой карточкой
                                в evidence-trail прямо под героем. */}
                            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="w-full lg:w-[400px] flex-shrink-0">
                                <div className="max-w-[340px] mx-auto lg:mx-0">
                                    <Vid src={`${VID}/dr-1.mp4`} poster={`${IMG}/poster-dr-1.jpg`} label="Один из роликов кампании — «Плов на день рождения»" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Evidence trail — 5 mini-cards */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
                            {[
                                { label: 'Результаты кампании', desc: '427 переписок в WhatsApp по средней цене $1,33', img: `${IMG}/01_campaigns_overview.png` },
                                { label: 'Настройки кампании', desc: 'Оптимизация на переписки в WhatsApp, бюджет $30 в день', img: `${IMG}/04_campaign_settings_budget_goal.png` },
                                { label: 'Настройка переписки', desc: 'WhatsApp выбран как основной канал для получения обращений', img: `${IMG}/05_whatsapp_destination_settings.png` },
                                { label: 'Рекламный креатив', desc: 'Тестирование короткометражных роликов с акцентом на вкус и подачу', img: `${IMG}/06_ad_preview_source_creative.png` },
                                { label: 'Предпросмотр в Stories', desc: 'Объявления показывались в Stories Instagram и Facebook', img: `${IMG}/08_instagram_stories_placements.png` },
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="p-4 rounded-xl cursor-pointer group" style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }} onClick={() => open(item.img)}>
                                    <div className="text-xs font-bold mb-1" style={{ color: COLORS.red, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.label}</div>
                                    <div className="text-xs" style={{ color: COLORS.muted, lineHeight: 1.5 }}>{item.desc}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <p className="text-xs mt-6 text-center" style={{ color: COLORS.muted }}>
                            <span style={{ color: COLORS.red }}>●</span> Тестировали разные креативы, аудитории и настройки, чтобы найти связку, которая даёт максимум обращений по минимальной цене.
                        </p>
                    </div>
                </section>

                {/* ========== 2. ЗАПРОС КЛИЕНТА ========== */}
                <section style={{ paddingTop: 80, paddingBottom: 80, background: COLORS.card }}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.div variants={fadeUp} className="text-center mb-12">
                                <SectionBadge>Запрос клиента</SectionBadge>
                                <SectionTitle>Клиент хотел <span style={{ color: COLORS.red }}>заказы через WhatsApp</span></SectionTitle>
                                <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.muted }}>
                                    Доставка домашнего плова в Алматы. Без сайта и промежуточных форм — только горячие заявки напрямую в WhatsApp.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-3 mb-12">
                                {['Instagram / Facebook', 'Клик по креативу', 'WhatsApp', 'Сообщение', 'Заказ'].map((step, i) => (
                                    <React.Fragment key={i}>
                                        {i > 0 && <span className="text-xl font-bold" style={{ color: COLORS.red }}>→</span>}
                                        <div className="px-5 py-3 rounded-xl font-bold text-sm" style={{
                                            background: step === 'WhatsApp' ? COLORS.whatsapp : COLORS.bg,
                                            color: step === 'WhatsApp' ? '#fff' : COLORS.text,
                                            border: step === 'WhatsApp' ? 'none' : `1px solid ${COLORS.border}`
                                        }}>{step}</div>
                                    </React.Fragment>
                                ))}
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Scr src={`${IMG}/04_campaign_settings_budget_goal.png`} alt="Настройки кампании: цель — вовлечённость, бюджет $30/день" label="Цель: вовлечённость, бюджет $30/день" onClick={() => open(`${IMG}/04_campaign_settings_budget_goal.png`)} />
                                <Scr src={`${IMG}/05_whatsapp_destination_settings.png`} alt="WhatsApp как место назначения рекламы" label="WhatsApp — основной канал заявок" onClick={() => open(`${IMG}/05_whatsapp_destination_settings.png`)} />
                                <Scr src={`${IMG}/09_whatsapp_message_template.png`} alt="Шаблон автоматического сообщения WhatsApp" label="Автоматическое приветствие в чате" onClick={() => open(`${IMG}/09_whatsapp_message_template.png`)} />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ========== 3. РЕКЛАМНАЯ СТРАТЕГИЯ ========== */}
                <section style={{ paddingTop: 80, paddingBottom: 80 }}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.div variants={fadeUp} className="text-center mb-12">
                                <SectionBadge>Стратегия</SectionBadge>
                                <SectionTitle>Рекламная <span style={{ color: COLORS.red }}>стратегия</span></SectionTitle>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { icon: '🎯', title: 'Цель — вовлечённость', desc: 'Оптимизация на начало переписки в WhatsApp. Не лиды, не трафик — именно живой диалог с клиентом.' },
                                    { icon: '💰', title: 'Бюджет $30/день', desc: 'Стратегия ставок: максимальное количество результатов. Общий бюджет кампании — $566,86 за месяц.' },
                                    { icon: '📱', title: 'WhatsApp как канал', desc: 'Все объявления ведут прямо в чат WhatsApp. Без сайтов, форм и промежуточных шагов.' },
                                ].map((s, i) => (
                                    <motion.div key={i} variants={fadeUp} className="p-8 rounded-2xl" style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                                        <div className="text-3xl mb-4">{s.icon}</div>
                                        <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                                        <p className="text-sm" style={{ color: COLORS.muted, lineHeight: 1.7 }}>{s.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ========== 4. КРЕАТИВЫ ========== */}
                <section style={{ paddingTop: 80, paddingBottom: 80, background: COLORS.card }}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.div variants={fadeUp} className="text-center mb-12">
                                <SectionBadge>Рекламные креативы</SectionBadge>
                                <SectionTitle>Ролики, которые мы <span style={{ color: COLORS.red }}>крутили в рекламе</span></SectionTitle>
                                <p className="text-lg mt-2 max-w-2xl mx-auto" style={{ color: COLORS.muted }}>
                                    Это не стоки, а наши реальные креативы — вертикальные ролики для Stories и Reels. Нажмите на любой, чтобы посмотреть.
                                </p>
                            </motion.div>

                            {/* 5 реальных видео-креативов */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-14 max-w-5xl mx-auto">
                                {CREATIVES.map((c) => (
                                    <Vid key={c.src} src={c.src} poster={c.poster} label={c.label} />
                                ))}
                            </div>

                            {/* Статичные версии для ленты + доказательство запуска в кабинете */}
                            <motion.div variants={fadeUp} className="text-center mb-8">
                                <h3 className="text-xl md:text-2xl font-bold">Статичные объявления и подтверждение запуска</h3>
                                <p className="text-sm mt-2 max-w-2xl mx-auto" style={{ color: COLORS.muted }}>
                                    Те же связки в статике для ленты — и скриншоты из рекламного кабинета, что креативы реально откручены.
                                </p>
                            </motion.div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start">
                                <Scr src={`${IMG}/creative-birthday-family.jpg`} alt="Статичный креатив: плов на день рождения, пирог в подарок" label="Статика: плов на день рождения" onClick={() => open(`${IMG}/creative-birthday-family.jpg`)} />
                                <Scr src={`${IMG}/creative-birthday-friends.jpg`} alt="Статичный креатив: день рождения без хлопот" label="Статика: день рождения без хлопот" onClick={() => open(`${IMG}/creative-birthday-friends.jpg`)} />
                                <Scr src={`${IMG}/07_uploaded_media_files.png`} alt="Загруженные медиафайлы в рекламном кабинете" label="Кабинет: загруженные креативы" onClick={() => open(`${IMG}/07_uploaded_media_files.png`)} />
                                <Scr src={`${IMG}/08_instagram_stories_placements.png`} alt="Предпросмотр в Instagram Stories с кнопкой WhatsApp" label="Stories: кнопка «Написать в WhatsApp»" onClick={() => open(`${IMG}/08_instagram_stories_placements.png`)} />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ========== 5. РЕЗУЛЬТАТЫ ========== */}
                <section style={{ paddingTop: 80, paddingBottom: 80 }}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.div variants={fadeUp} className="text-center mb-12">
                                <SectionBadge>Результаты</SectionBadge>
                                <SectionTitle>Результаты рекламной <span style={{ color: COLORS.red }}>кампании</span></SectionTitle>
                            </motion.div>

                            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
                                <KpiCard value="427" label="переписок" accent />
                                <KpiCard value="$1,33" label="средняя цена" accent />
                                <KpiCard value="$566,86" label="бюджет" />
                                <KpiCard value="259" label="лучшая связка" accent />
                                <KpiCard value="$0,78" label="лучшая цена" accent />
                                <KpiCard value="93 875" label="показов" />
                            </motion.div>

                            <motion.div variants={fadeUp} className="p-6 rounded-2xl mb-10" style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: COLORS.whatsapp, color: '#fff' }}>Главный инсайт</span>
                                </div>
                                <p className="font-bold text-lg">Кампания «Закажи Общий Домой» на плейсменте <strong>Stories</strong> показала лучшие результаты — <span style={{ color: COLORS.red }}>259 переписок по $0,78</span> за переписку. Это в 1,7 раза дешевле среднего показателя.</p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Scr src={`${IMG}/02_adsets_overview.png`} alt="Группы объявлений — разбивка по связкам" label="Группы объявлений: результаты по связкам" onClick={() => open(`${IMG}/02_adsets_overview.png`)} />
                                <Scr src={`${IMG}/03_ads_level_best_creative.png`} alt="Лучший креатив — 259 переписок по $0,78" label="Лучший креатив: 259 переписок по $0,78" onClick={() => open(`${IMG}/03_ads_level_best_creative.png`)} />
                                <Scr src={`${IMG}/10_results_overview_demographics.png`} alt="Обзор результативности и демография" label="Обзор результативности и демография" onClick={() => open(`${IMG}/10_results_overview_demographics.png`)} />
                                <Scr src={`${IMG}/01_campaigns_overview.png`} alt="Общий обзор кампаний" label="Общий обзор: все кампании" onClick={() => open(`${IMG}/01_campaigns_overview.png`)} />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ========== 5.5. ОТ ПЕРЕПИСОК К ДЕНЬГАМ ========== */}
                <section style={{ paddingTop: 80, paddingBottom: 80, background: `linear-gradient(180deg, ${COLORS.bg} 0%, #FFF3E6 100%)` }}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.div variants={fadeUp} className="text-center mb-12">
                                <SectionBadge>Деньги</SectionBadge>
                                <SectionTitle>От переписок <span style={{ color: COLORS.red }}>к деньгам</span></SectionTitle>
                                <p className="text-lg mt-2 max-w-2xl mx-auto" style={{ color: COLORS.muted }}>
                                    Переписки — это ещё не результат. Важно, сколько из них дошли до реальной продажи и сколько денег принесли.
                                </p>
                            </motion.div>

                            {/* Воронка: переписки → заказы → выручка */}
                            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
                                {[
                                    { top: '427', label: 'переписки в WhatsApp', sub: 'Все обращения из рекламы', accent: false },
                                    { top: '~60', label: 'реальных заказов', sub: 'Конверсия в продажу — 14%', accent: false },
                                    { top: '≈1,68 млн ₸', label: 'выручка с рекламы', sub: 'Средний чек — 28 000 ₸', accent: true },
                                ].map((s, i) => (
                                    <React.Fragment key={i}>
                                        <div className="p-8 rounded-2xl text-center relative" style={{ background: s.accent ? COLORS.red : COLORS.card, border: `1px solid ${s.accent ? COLORS.red : COLORS.border}`, color: s.accent ? '#fff' : COLORS.text }}>
                                            <div className="text-3xl md:text-4xl font-extrabold mb-2" style={{ fontFamily: "'Unbounded', sans-serif", color: s.accent ? '#fff' : COLORS.red }}>{s.top}</div>
                                            <div className="text-sm font-bold mb-1">{s.label}</div>
                                            <div className="text-xs" style={{ color: s.accent ? 'rgba(255,255,255,0.85)' : COLORS.muted }}>{s.sub}</div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </motion.div>

                            {/* Ключевая связка «потратили → вернули» */}
                            <motion.div variants={fadeUp} className="p-8 md:p-10 rounded-2xl text-center" style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-4">
                                    <div>
                                        <div className="text-2xl md:text-3xl font-extrabold" style={{ fontFamily: "'Unbounded', sans-serif" }}>~$567</div>
                                        <div className="text-xs font-bold uppercase tracking-wide" style={{ color: COLORS.muted }}>вложили в рекламу</div>
                                    </div>
                                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" stroke={COLORS.red} strokeWidth="2.5" className="rotate-90 sm:rotate-0"><path d="M2 12h34M28 4l8 8-8 8" /></svg>
                                    <div>
                                        <div className="text-2xl md:text-3xl font-extrabold" style={{ fontFamily: "'Unbounded', sans-serif", color: COLORS.whatsapp }}>≈1,68 млн ₸</div>
                                        <div className="text-xs font-bold uppercase tracking-wide" style={{ color: COLORS.muted }}>получили выручки</div>
                                    </div>
                                    <div className="hidden sm:block" style={{ width: 1, height: 48, background: COLORS.border }} />
                                    <div>
                                        <div className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Unbounded', sans-serif", color: COLORS.red }}>×6</div>
                                        <div className="text-xs font-bold uppercase tracking-wide" style={{ color: COLORS.muted }}>возврат на рекламу*</div>
                                    </div>
                                </div>
                                <p className="text-sm max-w-3xl mx-auto" style={{ color: COLORS.muted, lineHeight: 1.7 }}>
                                    Каждый вложенный доллар вернулся выручкой примерно в 6 раз. Стоимость одного заказа — около <strong style={{ color: COLORS.text }}>4 500 ₸</strong> при среднем чеке <strong style={{ color: COLORS.text }}>28 000 ₸</strong>.
                                </p>
                                <p className="text-xs mt-4" style={{ color: COLORS.muted }}>
                                    * Расчёт выручки: 427 переписок × 14% конверсии в продажу × средний чек 28 000 ₸. Возврат на рекламу приведён при курсе ≈480 ₸/$.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ========== 6. ДЕМОГРАФИЯ ========== */}
                <section style={{ paddingTop: 80, paddingBottom: 80, background: COLORS.card }}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.div variants={fadeUp} className="text-center mb-12">
                                <SectionBadge>Аудитория</SectionBadge>
                                <SectionTitle>Аудитория, которая <span style={{ color: COLORS.red }}>покупает плов</span></SectionTitle>
                            </motion.div>

                            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                                <KpiCard value="80%" label="женщины" accent />
                                <KpiCard value="206" label="переписок от женщин" accent />
                                <KpiCard value="$0,67" label="цена у женщин" accent />
                            </motion.div>

                            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 rounded-2xl" style={{ background: COLORS.bg, border: `1px solid ${COLORS.border}` }}>
                                    <h3 className="font-bold text-lg mb-3">Женщины — 80% результатов</h3>
                                    <p className="text-sm mb-2" style={{ color: COLORS.muted }}>206 переписок из 259 в лучшей связке. Стабильная стоимость $0,67 за результат — на 49% дешевле мужской аудитории.</p>
                                    <p className="text-sm" style={{ color: COLORS.muted }}>Мужчины: 14%, 36 переписок, $1,26 за результат.</p>
                                </div>
                                <div className="p-6 rounded-2xl" style={{ background: COLORS.bg, border: `1px solid ${COLORS.border}` }}>
                                    <h3 className="font-bold text-lg mb-3">Advantage+ аудитория</h3>
                                    <p className="text-sm" style={{ color: COLORS.muted }}>Использовали широкий таргетинг Advantage+ с автоматической оптимизацией. Алгоритм сам нашёл самых активных пользователей среди женщин 25-44 лет в Алматы.</p>
                                </div>
                            </motion.div>

                            <Scr src={`${IMG}/11_demographics_advantage_plus.png`} alt="Демография: Advantage+, женщины 80%, $0,67" label="Демография: Advantage+ аудитория" onClick={() => open(`${IMG}/11_demographics_advantage_plus.png`)} />
                        </motion.div>
                    </div>
                </section>

                {/* ========== 7. ВИДЕОАНАЛИТИКА ========== */}
                <section style={{ paddingTop: 80, paddingBottom: 80 }}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.div variants={fadeUp} className="text-center mb-12">
                                <SectionBadge>Видеоаналитика</SectionBadge>
                                <SectionTitle>Результативность <span style={{ color: COLORS.red }}>видеоконтента</span></SectionTitle>
                            </motion.div>

                            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                                <KpiCard value="40 130" label="воспроизведений" />
                                <KpiCard value="00:02" label="среднее время" />
                                <KpiCard value="26%" label="привлечение внимания" />
                                <KpiCard value="32,85%" label="удержание" />
                            </motion.div>

                            <motion.div variants={fadeUp} className="p-6 rounded-2xl mb-10" style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                                <p className="text-sm" style={{ color: COLORS.muted, lineHeight: 1.7 }}>
                                    Видеоролик длительностью 10 секунд с аппетитным food-визуалом. <strong>40 130 воспроизведений</strong> при бюджете $566. Захват внимания 26% — каждый четвёртый зритель досматривал до ключевого момента. Удержание 32,85% — треть аудитории видела полный ролик с CTA.
                                </p>
                            </motion.div>

                            <Scr src={`${IMG}/12_video_performance.png`} alt="Видеоаналитика: 40 130 воспроизведений, 26% захват" label="Видеоаналитика: воспроизведения, захват, удержание" onClick={() => open(`${IMG}/12_video_performance.png`)} />
                        </motion.div>
                    </div>
                </section>

                {/* ========== 8. ЧТО СРАБОТАЛО ========== */}
                <section style={{ paddingTop: 80, paddingBottom: 80, background: COLORS.card }}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.div variants={fadeUp} className="text-center mb-12">
                                <SectionTitle>Что сработало <span style={{ color: COLORS.red }}>лучше всего</span></SectionTitle>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: '🍛', title: 'Аппетитный food-визуал', desc: 'Чёткие домашние кадры плова выделяются на фоне ресторанных и студийных снимков конкурентов.' },
                                    { icon: '💬', title: 'Короткий путь в WhatsApp', desc: 'Реклама ведёт прямо в чат. Без форм, лендингов и промежуточных шагов. Увидел — написал — заказал.' },
                                    { icon: '👨‍👩‍👧‍👦', title: 'Семейный сценарий', desc: 'Акцент на совместном обеде. «А давайте закажем?» — сценарий, который аудитория узнаёт и действует.' },
                                    { icon: '📝', title: 'Понятный оффер', desc: 'Конкретное блюдо, понятная логика, финал с призывом без лишних обещаний и фильтров.' },
                                ].map((item, i) => (
                                    <motion.div key={i} variants={fadeUp} className="p-8 rounded-2xl text-center" style={{ background: COLORS.bg, border: `1px solid ${COLORS.border}` }}>
                                        <div className="text-4xl mb-4">{item.icon}</div>
                                        <h3 className="text-base font-bold mb-3">{item.title}</h3>
                                        <p className="text-sm" style={{ color: COLORS.muted, lineHeight: 1.6 }}>{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ========== 9. ЭКОНОМИКА ========== */}
                <section style={{ paddingTop: 80, paddingBottom: 80 }}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.div variants={fadeUp} className="text-center mb-12">
                                <SectionBadge>Экономика</SectionBadge>
                                <SectionTitle>Экономика <span style={{ color: COLORS.red }}>кампании</span></SectionTitle>
                            </motion.div>

                            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="p-8 rounded-2xl text-center" style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                                    <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ fontFamily: "'Unbounded', sans-serif", color: COLORS.red }}>$566,86</div>
                                    <div className="text-sm font-bold" style={{ color: COLORS.muted }}>Общий бюджет за месяц</div>
                                </div>
                                <div className="p-8 rounded-2xl text-center" style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                                    <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ fontFamily: "'Unbounded', sans-serif", color: COLORS.red }}>$1,33</div>
                                    <div className="text-sm font-bold" style={{ color: COLORS.muted }}>Средняя цена переписки</div>
                                </div>
                                <div className="p-8 rounded-2xl text-center" style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                                    <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ fontFamily: "'Unbounded', sans-serif", color: COLORS.whatsapp }}>$0,78</div>
                                    <div className="text-sm font-bold" style={{ color: COLORS.muted }}>Лучшая цена переписки</div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="p-8 rounded-2xl" style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}>
                                <h3 className="text-xl font-bold mb-4">Выводы</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm mb-3" style={{ color: COLORS.muted, lineHeight: 1.7 }}>
                                            <strong style={{ color: COLORS.text }}>Food-визуал + WhatsApp = конверсия.</strong> Аппетитный контент в формате Stories с прямым путём в чат показал стоимость переписки в 1,7 раза ниже среднего.
                                        </p>
                                        <p className="text-sm" style={{ color: COLORS.muted, lineHeight: 1.7 }}>
                                            <strong style={{ color: COLORS.text }}>Женская аудитория — ядро.</strong> 80% результатов дали женщины со стоимостью $0,67. Это подтверждает: для доставки еды ключевая аудитория — женщины 25-44.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm mb-3" style={{ color: COLORS.muted, lineHeight: 1.7 }}>
                                            <strong style={{ color: COLORS.text }}>Advantage+ работает.</strong> Широкий таргетинг с автооптимизацией Meta нашёл конверсионную аудиторию лучше, чем ручные настройки.
                                        </p>
                                        <p className="text-sm" style={{ color: COLORS.muted, lineHeight: 1.7 }}>
                                            <strong style={{ color: COLORS.text }}>Видео в 10 секунд.</strong> Короткий ролик с retention 32,85% — оптимальный формат для food-доставки. Длинные ролики теряют аудиторию.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ========== 10. CTA ========== */}
                <section style={{ paddingTop: 80, paddingBottom: 100, background: `linear-gradient(135deg, ${COLORS.red} 0%, #C41018 100%)` }}>
                    <div className="container mx-auto px-4 max-w-4xl text-center text-white">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                Готовы запустить рекламу и получать заявки в WhatsApp?
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
                                Бесплатно разберём вашу текущую рекламу и дадим рекомендации. Или запустим кампанию с нуля — от стратегии до первых заявок.
                            </motion.p>
                            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('plov_final')}
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-bold text-lg transition-transform hover:scale-105" style={{ background: '#fff', color: COLORS.red }}>
                                    Получить разбор рекламы
                                </a>
                                <a href="https://wa.me/77070357777?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D1%82%D0%B8%D1%82%D1%8C%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%83"
                                    target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('plov_final_launch')}
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-bold text-lg transition-transform hover:scale-105" style={{ background: COLORS.whatsapp, color: '#fff' }}>
                                    Запустить рекламу в WhatsApp
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <RawFooter />

            {/* Sticky mobile CTA */}
            <div className="dp-plov-sticky-cta" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9000, display: 'none', padding: '12px 16px', background: 'rgba(255,249,242,0.95)', backdropFilter: 'blur(12px)', borderTop: `1px solid ${COLORS.border}` }}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('plov_sticky')}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white text-base"
                    style={{ background: COLORS.red, boxShadow: '0 4px 20px rgba(227,28,36,0.3)' }}>
                    Получить разбор рекламы
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `@media(max-width:768px){.dp-plov-sticky-cta{display:block!important}}` }} />

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}
                        style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, cursor: 'zoom-out' }}>
                        <motion.img initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            src={lightbox} alt="Увеличенный скриншот" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                            onClick={(e) => e.stopPropagation()} />
                        <button onClick={close} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: 48, height: 48, cursor: 'pointer', color: '#fff', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
