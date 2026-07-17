'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence, type Variants } from 'framer-motion';
import { trackWhatsAppClick } from '@/lib/analytics';
import Breadcrumbs from '@/components/Breadcrumbs';

const IMG = '/images/cases/laser-epilation';

/* ——— Lightbox ——— */
function useLightbox() {
    const [src, setSrc] = useState<string | null>(null);
    const open = useCallback((s: string) => setSrc(s), []);
    const close = useCallback(() => setSrc(null), []);

    useEffect(() => {
        if (!src) return;
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKey);
        return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKey); };
    }, [src, close]);

    const Overlay = () => (
        <AnimatePresence>
            {src && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={close}
                    style={{ position: 'fixed', inset: 0, zIndex: 50000, background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out', padding: 24 }}
                >
                    <motion.img
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        src={src}
                        alt=""
                        onClick={(e) => e.stopPropagation()}
                        style={{ maxWidth: '92vw', maxHeight: '90vh', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', cursor: 'default', objectFit: 'contain' }}
                    />
                    <button onClick={close} style={{ position: 'absolute', top: 20, right: 24, background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: 44, height: 44, borderRadius: 999, fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return { open, Overlay };
}

function Screenshot({ src, alt, width, height, style, openLightbox, ...rest }: { src: string; alt: string; width: number; height: number; style: React.CSSProperties; openLightbox: (s: string) => void } & Record<string, unknown>) {
    return (
        <motion.img
            {...rest}
            src={src}
            alt={alt}
            width={width}
            height={height}
            onClick={() => openLightbox(src)}
            whileHover={{ scale: 1.02 }}
            style={{ ...style, cursor: 'zoom-in' }}
        />
    );
}

function CountUp({ target, prefix = '', suffix = '', duration = 2 }: { target: number; prefix?: string; suffix?: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = target / (duration * 60);
        const id = setInterval(() => {
            start += step;
            if (start >= target) { setValue(target); clearInterval(id); }
            else setValue(Math.floor(start));
        }, 1000 / 60);
        return () => clearInterval(id);
    }, [inView, target, duration]);

    return <span ref={ref}>{prefix}{value.toLocaleString('ru-RU')}{suffix}</span>;
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const conclusions = [
    'Конкретный оффер лазерной эпиляции вместо общего «запишись»',
    'Короткий путь: реклама → WhatsApp в один клик',
    'Локальная аудитория: Алматы + 3 км, женщины 25-35',
    'Вертикальные креативы под Stories и Reels',
    'Сохранили кабинет — изменили логику, офферы и аудитории',
];

export default function LaserEpilationCase() {
    const { open: openLb, Overlay: LightboxOverlay } = useLightbox();
    return (
        <>
            <LightboxOverlay />
            <main style={{ background: '#070707', color: '#fff', fontFamily: "'Onest', sans-serif", overflow: 'hidden' }}>

                {/* ===== 1. HERO ===== */}
                <section style={{ paddingTop: 80 }}>
                    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 16px 16px' }}>
                        <Breadcrumbs items={[
                            { name: 'Кейсы', item: '/cases/' },
                            { name: 'Таргет лазерная эпиляция Алматы', item: '/cases/laser-epilation/' },
                        ]} dark />
                    </div>
                    <h1 className="sr-only">Кейс таргетированная реклама Instagram — продвижение студии лазерной эпиляции в Алматы. 679 заявок в WhatsApp, стоимость лида $1,29. Таргетолог Алматы, SMM агентство.</h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ maxWidth: 1400, margin: '0 auto', padding: '0 16px' }}
                    >
                        <img
                            src={`${IMG}/hero-cover.png`}
                            alt="Кейс Meta Ads: 679 переписок в WhatsApp для студии лазерной эпиляции. Бюджет $877,49, цена результата $1,29, 162 328 показов, 74 471 охват. Май 2026."
                            width={1920}
                            height={1080}
                            style={{ width: '100%', height: 'auto', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)' }}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        style={{ textAlign: 'center', padding: '40px 24px 0' }}
                    >
                        <motion.a
                            href="https://wa.me/77070357777?text=%D0%A5%D0%BE%D1%87%D1%83+%D1%82%D0%B0%D0%BA%D0%BE%D0%B9+%D0%B6%D0%B5+%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackWhatsAppClick('case_laser_hero')}
                            whileHover={{ scale: 1.05, boxShadow: '0 8px 40px rgba(230,34,34,0.4)' }}
                            whileTap={{ scale: 0.97 }}
                            style={{ display: 'inline-block', padding: '18px 40px', background: '#E62222', color: '#fff', fontWeight: 700, fontSize: 17, borderRadius: 12, textDecoration: 'none' }}
                        >
                            Получить разбор рекламы
                        </motion.a>
                    </motion.div>
                </section>

                {/* ===== 2. МЕТРИКИ С АНИМАЦИЕЙ ЦИФР ===== */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                    style={{ padding: '60px 0', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}
                >
                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
                            {([
                                { value: 679, prefix: '', suffix: '', label: 'переписок в WhatsApp', accent: true },
                                { value: 1.29, prefix: '$', suffix: '', label: 'цена переписки', accent: false },
                                { value: 877, prefix: '$', suffix: '', label: 'рекламный бюджет', accent: false },
                                { value: 162328, prefix: '', suffix: '', label: 'показов рекламы', accent: false },
                                { value: 74471, prefix: '', suffix: '', label: 'охват аудитории', accent: false },
                            ]).map((m) => (
                                <motion.div
                                    key={m.label}
                                    variants={scaleIn}
                                    whileHover={{ scale: 1.04, borderColor: m.accent ? 'rgba(230,34,34,0.6)' : 'rgba(255,255,255,0.15)' }}
                                    style={{ textAlign: 'center', padding: '28px 16px', background: m.accent ? 'rgba(230,34,34,0.08)' : 'rgba(255,255,255,0.03)', borderRadius: 16, border: `1px solid ${m.accent ? 'rgba(230,34,34,0.3)' : 'rgba(255,255,255,0.06)'}`, cursor: 'default', transition: 'border-color .3s' }}
                                >
                                    <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 34, fontWeight: 900, color: m.accent ? '#E62222' : '#fff', marginBottom: 8 }}>
                                        {m.value < 10
                                            ? <>{m.prefix}{m.value.toFixed(2)}</>
                                            : <CountUp target={m.value} prefix={m.prefix} suffix={m.suffix} />
                                        }
                                    </div>
                                    <div style={{ fontSize: 14, color: '#777' }}>{m.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* ===== 3. ЗАПРОС КЛИЕНТА И ПЕРЕЗАПУСК ===== */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={stagger}
                    style={{ padding: '80px 0', background: 'linear-gradient(180deg, #0B0B0D 0%, #070707 100%)', position: 'relative', overflow: 'hidden' }}
                >
                    <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '50%', background: 'radial-gradient(ellipse at 80% 30%, rgba(230,34,34,0.06) 0%, transparent 60%)' }} />
                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start' }}>
                            {/* Left column */}
                            <div style={{ flex: '1 1 420px', minWidth: 300 }}>
                                <motion.h2 variants={fadeUp} style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
                                    ЗАПРОС КЛИЕНТА<br />И <span style={{ color: '#E62222' }}>ПЕРЕЗАПУСК</span>
                                </motion.h2>
                                <motion.p variants={fadeUp} style={{ color: '#888', fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
                                    Смена подрядчика и неудовлетворённость результатом
                                </motion.p>
                                <motion.p variants={fadeUp} style={{ color: '#999', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                                    Клиент пришёл после слабых результатов у прошлого подрядчика. Средняя цена переписки была около $4. Мы сохранили рекламный кабинет и общую структуру, но переработали алгоритмы, аудитории, креативы и логику оптимизации.
                                </motion.p>

                                {/* Было / Стало */}
                                <motion.div variants={fadeUp} style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24, flexWrap: 'wrap' }}>
                                    <div style={{ padding: '16px 28px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
                                        <div style={{ fontSize: 12, color: '#777', fontWeight: 600, textTransform: 'uppercase', marginBottom: 6 }}>Было:</div>
                                        <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 32, fontWeight: 900, color: '#777' }}>~$4</div>
                                        <div style={{ fontSize: 12, color: '#555' }}>за переписку</div>
                                    </div>
                                    <div style={{ color: '#E62222', fontSize: 24 }}>→</div>
                                    <div style={{ padding: '16px 28px', border: '1px solid rgba(230,34,34,0.4)', borderRadius: 12, textAlign: 'center', background: 'rgba(230,34,34,0.06)' }}>
                                        <div style={{ fontSize: 12, color: '#E62222', fontWeight: 600, textTransform: 'uppercase', marginBottom: 6 }}>Стало:</div>
                                        <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 32, fontWeight: 900, color: '#E62222' }}>$1,29</div>
                                        <div style={{ fontSize: 12, color: '#999' }}>за переписку</div>
                                    </div>
                                </motion.div>

                                {/* Badge */}
                                <motion.div variants={fadeUp} style={{ display: 'inline-block', padding: '10px 24px', border: '1px solid rgba(230,34,34,0.4)', borderRadius: 999, marginBottom: 28, background: 'rgba(230,34,34,0.04)' }}>
                                    <span style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 14, fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: 1 }}>
                                        Снижение почти в <span style={{ color: '#E62222' }}>3 раза</span>
                                    </span>
                                </motion.div>

                                {/* Checkpoints */}
                                <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                                    {[
                                        'Сохранили кабинет и текущую структуру',
                                        'Переделали алгоритмы, офферы и логику запуска',
                                        'Улучшили результативность без полной перестройки',
                                    ].map((text, i) => (
                                        <motion.div key={i} variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#E62222" fillOpacity="0.15"/><path d="M6 10l3 3 5-5" stroke="#E62222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            <span style={{ fontSize: 14, color: '#ccc' }}>{i + 1}. {text}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Tags */}
                                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="13" stroke="#E62222" strokeWidth="1.5"/><circle cx="14" cy="14" r="6" fill="#E62222" fillOpacity="0.2"/></svg>
                                    <span style={{ fontSize: 13, color: '#999' }}>Кейс Meta Ads</span>
                                    <span style={{ color: '#E62222' }}>·</span>
                                    <span style={{ fontSize: 13, color: '#999' }}>Лазерная эпиляция</span>
                                    <span style={{ color: '#E62222' }}>·</span>
                                    <span style={{ fontSize: 13, color: '#999' }}>Алматы</span>
                                </motion.div>
                            </div>

                            {/* Right column — 3 screenshots stacked vertically, equal height to left */}
                            <motion.div variants={stagger} style={{ flex: '1 1 500px', minWidth: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <Screenshot openLightbox={openLb} src={`${IMG}/01_campaigns_overview.png`} alt="Результаты таргетированной рекламы лазерной эпиляции в Instagram — обзор кампаний Ads Manager Алматы" width={700} height={400} style={{ ...imgStyle, borderRadius: 14 }} />
                                <Screenshot openLightbox={openLb} src={`${IMG}/11_performance_graph.png`} alt="Стоимость заявки лазерная эпиляция — график снижения цены лида в Instagram" width={700} height={400} style={{ ...imgStyle, borderRadius: 14 }} />
                                <Screenshot openLightbox={openLb} src={`${IMG}/02_adsets_overview.png`} alt="Настройка таргетированной рекламы Instagram — группы объявлений для салона красоты Алматы" width={700} height={400} style={{ ...imgStyle, borderRadius: 14 }} />
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* ===== 4. ЦЕЛЕВАЯ АУДИТОРИЯ ===== */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger} style={{ padding: '80px 0' }}>
                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                        <motion.h2 variants={fadeUp} style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
                            ЦЕЛЕВАЯ АУДИТОРИЯ<br />И <span style={{ color: '#E62222' }}>НАСТРОЙКИ</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} style={{ color: '#888', fontSize: 15, marginBottom: 40, maxWidth: 500 }}>
                            Как мы настроили гео, интересы и плейсменты под локальную услугу
                        </motion.p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'stretch' }}>
                            {/* Left — params, stretched full height */}
                            <motion.div variants={stagger} style={{ flex: '1 1 340px', minWidth: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 0 }}>
                                {[
                                    { icon: '👩', text: 'Точный возрастной таргетинг', detail: 'Женщины 25-35 лет — основная аудитория услуг лазерной эпиляции в Алматы' },
                                    { icon: '📍', text: 'Гео Алматы + 3 км', detail: 'Локальная аудитория рядом со студией. Радиус обеспечивает высокую конверсию в визит' },
                                    { icon: '🌐', text: 'Русский язык', detail: 'Фильтрация аудитории по языку интерфейса. Отсекаем нецелевой трафик' },
                                    { icon: '✨', text: 'Интересы: лазер, эпиляция, воск', detail: 'Advantage+ автоматически расширяет аудиторию на похожих пользователей' },
                                    { icon: '📱', text: 'Плейсменты Instagram Stories и Reels', detail: 'Вертикальный формат на весь экран — максимальное вовлечение и досмотры' },
                                ].map((item) => (
                                    <motion.div key={item.text} variants={fadeUp} whileHover={{ x: 6, borderColor: 'rgba(230,34,34,0.3)' }} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '20px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', cursor: 'default', transition: 'border-color .3s', flex: 1 }}>
                                        <span style={{ fontSize: 28, lineHeight: 1 }}>{item.icon}</span>
                                        <div>
                                            <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{item.text}</div>
                                            <div style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>{item.detail}</div>
                                        </div>
                                    </motion.div>
                                ))}
                                {/* Bottom tags */}
                                <motion.div variants={fadeUp} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingTop: 16 }}>
                                    {['Женщины 25-35', 'Алматы + 3 км', 'Русский язык', 'Stories + Reels'].map((tag) => (
                                        <span key={tag} style={{ padding: '10px 18px', borderRadius: 999, background: 'rgba(230,34,34,0.08)', border: '1px solid rgba(230,34,34,0.2)', fontSize: 13, fontWeight: 600, color: '#E62222' }}>{tag}</span>
                                    ))}
                                </motion.div>
                            </motion.div>
                            {/* Right — screenshots */}
                            <motion.div variants={fadeUp} style={{ flex: '1 1 450px', minWidth: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <Screenshot openLightbox={openLb} src={`${IMG}/05_geo_age_language.png`} alt="Таргетолог Алматы — настройки гео, возраста и языка для рекламы лазерной эпиляции" width={600} height={380} style={{ ...imgStyle, borderRadius: 14, flex: 1, objectFit: 'cover' }} />
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                    <Screenshot openLightbox={openLb} src={`${IMG}/06_advantage_audience_interests.png`} alt="Таргетированная реклама Алматы — Advantage+ аудитория для студии эпиляции" width={300} height={200} style={{ ...imgStyle, borderRadius: 14 }} />
                                    <Screenshot openLightbox={openLb} src={`${IMG}/08_ad_preview_creatives.png`} alt="Реклама лазерной эпиляции в инстаграм — предпросмотр креативов" width={300} height={200} style={{ ...imgStyle, borderRadius: 14 }} />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* ===== 5. ПЛЕЙСМЕНТЫ И WHATSAPP ===== */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger} style={{ padding: '80px 0', background: '#0B0B0D' }}>
                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                        <motion.h2 variants={fadeUp} style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
                            ПЛЕЙСМЕНТЫ<br />И СООБЩЕНИЕ В <span style={{ color: '#E62222' }}>WHATSAPP</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} style={{ color: '#888', fontSize: 15, marginBottom: 40, maxWidth: 550 }}>
                            Кампания переводит пользователей из Stories и Reels напрямую в WhatsApp для быстрой консультации и записи
                        </motion.p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'stretch' }}>
                            {/* Left — features, stretched to match right column */}
                            <motion.div variants={stagger} style={{ flex: '1 1 320px', minWidth: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16 }}>
                                {[
                                    { icon: '🎯', label: 'Цель: начало переписки', detail: 'Оптимизация кампании на переписки в мессенджере' },
                                    { icon: '💬', label: 'Место назначения: WhatsApp', detail: 'Пользователь пишет напрямую в WhatsApp студии' },
                                    { icon: '📱', label: 'Плейсменты: Instagram Stories и Reels', detail: 'Вертикальные форматы с максимальным вовлечением' },
                                    { icon: '✉️', label: 'Шаблон сообщения ускоряет запись', detail: 'Авторитетное приветственное сообщение с ценой' },
                                ].map((f) => (
                                    <motion.div key={f.label} variants={fadeUp} whileHover={{ x: 6, borderColor: 'rgba(230,34,34,0.3)' }} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '20px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', cursor: 'default', transition: 'border-color .3s', flex: 1 }}>
                                        <span style={{ fontSize: 26, lineHeight: 1 }}>{f.icon}</span>
                                        <div>
                                            <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{f.label}</div>
                                            <div style={{ fontSize: 13, color: '#666', lineHeight: 1.4 }}>{f.detail}</div>
                                        </div>
                                    </motion.div>
                                ))}
                                {/* Bottom badges */}
                                <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                    {[
                                        { title: 'WhatsApp как место назначения', sub: 'Прямой переход в чат из рекламы' },
                                        { title: 'Шаблон сообщения', sub: 'Экономит время и повышает ответы' },
                                        { title: 'Stories и Reels', sub: 'Максимальный охват целевой аудитории' },
                                        { title: 'Быстрый результат', sub: 'Больше записей по лучшей цене' },
                                    ].map((b) => (
                                        <div key={b.title} style={{ padding: '16px', background: 'rgba(230,34,34,0.04)', borderRadius: 12, border: '1px solid rgba(230,34,34,0.15)' }}>
                                            <div style={{ fontSize: 13, fontWeight: 700, color: '#E62222', marginBottom: 5 }}>{b.title}</div>
                                            <div style={{ fontSize: 12, color: '#666', lineHeight: 1.4 }}>{b.sub}</div>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                            {/* Right — screenshots 2×2 grid */}
                            <motion.div variants={fadeUp} style={{ flex: '1 1 500px', minWidth: 300, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 16 }}>
                                <Screenshot openLightbox={openLb} src={`${IMG}/04_conversion_whatsapp_destination.png`} alt="Настройка рекламы WhatsApp бизнес — место назначения переписки" width={350} height={250} style={{ ...imgStyle, borderRadius: 14, height: '100%', objectFit: 'cover' }} />
                                <Screenshot openLightbox={openLb} src={`${IMG}/10_whatsapp_message_template.png`} alt="Стоимость лида Instagram — шаблон приветственного сообщения WhatsApp" width={350} height={250} style={{ ...imgStyle, borderRadius: 14, height: '100%', objectFit: 'cover' }} />
                                <Screenshot openLightbox={openLb} src={`${IMG}/07_placements_stories_reels.png`} alt="Продвижение студии эпиляции в инстаграм — плейсменты Stories и Reels" width={350} height={250} style={{ ...imgStyle, borderRadius: 14, height: '100%', objectFit: 'cover' }} />
                                <Screenshot openLightbox={openLb} src={`${IMG}/09_single_story_creatives.png`} alt="Таргет для салона красоты Алматы — креатив для Instagram Stories" width={350} height={250} style={{ ...imgStyle, borderRadius: 14, height: '100%', objectFit: 'cover' }} />
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* ===== 6. КРЕАТИВЫ ===== */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={stagger}
                    style={{ padding: '80px 0', background: '#0B0B0D' }}
                >
                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                        <motion.h2 variants={fadeUp} style={h2Style}>Рекламные креативы</motion.h2>
                        <motion.p variants={fadeUp} style={{ ...textStyle, maxWidth: 600, marginBottom: 40 }}>
                            Вертикальные визуалы с конкретным оффером и ценой. Короткие, яркие, с чётким призывом к действию.
                        </motion.p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
                            {['08_ad_preview_creatives.png', '09_single_story_creatives.png'].map((file) => (
                                <motion.div key={file} variants={scaleIn} whileHover={{ scale: 1.02 }} style={{ overflow: 'hidden', borderRadius: 12 }}>
                                    <Screenshot openLightbox={openLb} src={`${IMG}/${file}`} alt="Кейс таргетированная реклама Instagram — рекламные креативы лазерной эпиляции" width={600} height={400} style={imgStyle} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* ===== 7. РЕЗУЛЬТАТЫ И АНАЛИТИКА ===== */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger} style={{ padding: '80px 0' }}>
                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                        <motion.h2 variants={fadeUp} style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
                            РЕЗУЛЬТАТЫ<br />И <span style={{ color: '#E62222' }}>АНАЛИТИКА</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} style={{ color: '#888', fontSize: 15, marginBottom: 32, maxWidth: 600 }}>
                            Показываем результаты рекламных кампаний, достоверную статистику и портрет нашей аудитории
                        </motion.p>
                        {/* Metric cards */}
                        <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16, marginBottom: 40 }}>
                            {[
                                { val: '679', label: 'переписок', accent: true },
                                { val: '$1,29', label: 'цена результата', accent: false },
                                { val: '$877,49', label: 'бюджет', accent: false },
                                { val: '162 328', label: 'показов', accent: false },
                                { val: '74 471', label: 'охват', accent: false },
                            ].map((m) => (
                                <motion.div key={m.label} variants={scaleIn} style={{ padding: '20px 14px', textAlign: 'center', background: m.accent ? 'rgba(230,34,34,0.08)' : 'rgba(255,255,255,0.03)', borderRadius: 12, border: `1px solid ${m.accent ? 'rgba(230,34,34,0.3)' : 'rgba(255,255,255,0.06)'}` }}>
                                    <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 22, fontWeight: 900, color: m.accent ? '#E62222' : '#fff', marginBottom: 4 }}>{m.val}</div>
                                    <div style={{ fontSize: 12, color: '#666' }}>{m.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                        {/* Screenshots grid */}
                        <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                            {[
                                { src: '01_campaigns_overview.png', caption: 'Обзор кампаний в Ads Manager' },
                                { src: '02_adsets_overview.png', caption: 'Группы объявлений' },
                                { src: '11_performance_graph.png', caption: 'Динамика переписок за месяц' },
                                { src: '12_video_retention.png', caption: 'Удержание видео аудитории' },
                                { src: '13_demographics_gender_age.png', caption: 'Демография: 85% — женщины 25-34' },
                                { src: '03_ads_overview.png', caption: 'Все объявления' },
                            ].map((s) => (
                                <motion.div key={s.src} variants={scaleIn} whileHover={{ scale: 1.02 }} style={{ overflow: 'hidden', borderRadius: 14 }}>
                                    <Screenshot openLightbox={openLb} src={`${IMG}/${s.src}`} alt={s.caption} width={400} height={260} style={imgStyle} />
                                    <p style={{ fontSize: 12, color: '#555', marginTop: 8, textAlign: 'center' }}>{s.caption}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                        {/* Bottom insight */}
                        <motion.div variants={fadeUp} style={{ marginTop: 32, padding: '16px 24px', background: 'rgba(230,34,34,0.06)', border: '1px solid rgba(230,34,34,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
                            <span style={{ fontSize: 20 }}>📊</span>
                            <span style={{ fontSize: 14, color: '#ccc' }}><strong style={{ color: '#E62222' }}>Ключевой инсайт:</strong> Женщины в возрасте 25-34 лет — основная конверсионная аудитория по количеству переписок и стоимости</span>
                        </motion.div>
                    </div>
                </motion.section>

                {/* ===== 8. ОТ ПЕРЕПИСКИ ДО ВЫРУЧКИ ===== */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger} style={{ padding: '80px 0', background: '#0B0B0D' }}>
                    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
                        <motion.h2 variants={fadeUp} style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 12, textAlign: 'center' }}>
                            ОТ ПЕРЕПИСКИ ДО <span style={{ color: '#E62222' }}>ВЫРУЧКИ</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} style={{ color: '#888', fontSize: 15, marginBottom: 48, maxWidth: 600, textAlign: 'center', margin: '0 auto 48px' }}>
                            Все сообщения уходили в единую CRM, обрабатывались менеджером и превращались в продажи
                        </motion.p>

                        {/* Funnel steps */}
                        <motion.div variants={stagger} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginBottom: 48 }}>
                            {[
                                { num: '1', icon: '📱', title: 'Instagram Stories / Reels' },
                                { num: '2', icon: '💬', title: 'Переписка в WhatsApp' },
                                { num: '3', icon: '📋', title: 'Единая CRM' },
                                { num: '4', icon: '👩‍💼', title: 'Обработка менеджером' },
                                { num: '5', icon: '💰', title: 'Покупка услуги' },
                            ].map((step, i, arr) => (
                                <React.Fragment key={step.num}>
                                    <motion.div variants={scaleIn} whileHover={{ scale: 1.06, borderColor: 'rgba(230,34,34,0.4)' }} style={{ textAlign: 'center', padding: '20px 18px', background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', minWidth: 140, flex: '1 1 140px', maxWidth: 190, cursor: 'default', transition: 'border-color .3s' }}>
                                        <div style={{ width: 28, height: 28, borderRadius: 999, background: '#E62222', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, margin: '0 auto 10px' }}>{step.num}</div>
                                        <div style={{ fontSize: 28, marginBottom: 8 }}>{step.icon}</div>
                                        <div style={{ fontWeight: 700, fontSize: 13, color: '#fff' }}>{step.title}</div>
                                    </motion.div>
                                    {i < arr.length - 1 && <div style={{ display: 'flex', alignItems: 'center', color: '#E62222', fontSize: 22, fontWeight: 900 }}>→</div>}
                                </React.Fragment>
                            ))}
                        </motion.div>

                        {/* Screenshots row */}
                        <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 48 }}>
                            {[
                                { src: '04_conversion_whatsapp_destination.png', caption: 'WhatsApp как единственный канал' },
                                { src: '10_whatsapp_message_template.png', caption: 'Шаблон сообщения WhatsApp' },
                                { src: '01_campaigns_overview.png', caption: '679 переписок (начатые переписки в WhatsApp)' },
                                { src: '11_performance_graph.png', caption: 'Общая результативность' },
                            ].map((s) => (
                                <motion.div key={s.caption} variants={scaleIn} whileHover={{ scale: 1.02 }} style={{ overflow: 'hidden', borderRadius: 12 }}>
                                    <Screenshot openLightbox={openLb} src={`${IMG}/${s.src}`} alt={s.caption} width={300} height={190} style={imgStyle} />
                                    <p style={{ fontSize: 11, color: '#555', marginTop: 6, textAlign: 'center' }}>{s.caption}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Economy — full-width large numbers */}
                        <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginBottom: 48, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                            {[
                                { val: '679', sub: 'переписок', accent: true },
                                { val: '$877,49', sub: 'рекламный бюджет', accent: false },
                                { val: '5%', sub: 'конверсия в покупателя', accent: false },
                                { val: '≈ 34', sub: 'клиентов', accent: false },
                                { val: '$25,85', sub: 'стоимость клиента', accent: false },
                            ].map((e, i) => (
                                <motion.div key={e.sub} variants={scaleIn} style={{ textAlign: 'center', padding: 'clamp(20px, 3vw, 40px) 12px', background: e.accent ? 'rgba(230,34,34,0.08)' : 'rgba(255,255,255,0.02)', borderRight: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                                    <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(24px, 3.5vw, 48px)', fontWeight: 900, color: e.accent ? '#E62222' : '#fff', lineHeight: 1 }}>{e.val}</div>
                                    <div style={{ fontSize: 'clamp(10px, 1.1vw, 14px)', color: '#666', marginTop: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>{e.sub}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Revenue + ROMI — large */}
                        <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
                            <div style={{ padding: 'clamp(28px, 4vw, 48px) 24px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', textAlign: 'center' }}>
                                <div style={{ fontSize: 14, color: '#777', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Выручка</div>
                                <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900, color: '#fff' }}>≈ 678 661 ₸</div>
                            </div>
                            <div style={{ padding: 'clamp(28px, 4vw, 48px) 24px', borderRadius: 20, border: '1px solid rgba(230,34,34,0.4)', background: 'rgba(230,34,34,0.06)', textAlign: 'center' }}>
                                <div style={{ fontSize: 14, color: '#E62222', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>ROMI</div>
                                <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900, color: '#E62222' }}>≈ 51,6%</div>
                            </div>
                        </motion.div>

                        <motion.p variants={fadeUp} style={{ textAlign: 'center', color: '#555', fontSize: 13, marginTop: 16 }}>
                            * Расчёт при курсе 510 ₸/$, среднем чеке 19 990 ₸ и конверсии менеджера 5%
                        </motion.p>
                        <motion.div variants={fadeUp} style={{ marginTop: 24, padding: '18px 32px', background: 'rgba(230,34,34,0.06)', border: '1px solid rgba(230,34,34,0.2)', borderRadius: 14, textAlign: 'center' }}>
                            <span style={{ fontSize: 15, color: '#ccc' }}>Короткий путь до заявки + CRM + обработка менеджером = <strong style={{ color: '#E62222' }}>контролируемая экономика рекламы</strong></span>
                        </motion.div>
                    </div>
                </motion.section>

                {/* ===== 9. ВЫВОДЫ ===== */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={stagger}
                    style={{ padding: '80px 0', background: '#0B0B0D' }}
                >
                    <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
                        <motion.h2 variants={fadeUp} style={h2Style}>Почему это сработало</motion.h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {conclusions.map((c, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    whileHover={{ x: 8, borderColor: 'rgba(230,34,34,0.3)' }}
                                    style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 24px', background: 'rgba(255,255,255,0.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', cursor: 'default', transition: 'border-color .3s' }}
                                >
                                    <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(230,34,34,0.12)', color: '#E62222', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{i + 1}</div>
                                    <p style={{ margin: 0, fontSize: 16, color: '#ccc', lineHeight: 1.5 }}>{c}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* ===== 10. CTA ===== */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                    style={{ padding: '100px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at center, rgba(230,34,34,0.1) 0%, transparent 60%)' }} />
                    <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
                        <motion.h2 variants={fadeUp} style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
                            Хотите снизить стоимость заявки в&nbsp;своей рекламе?
                        </motion.h2>
                        <motion.p variants={fadeUp} style={{ color: '#777', fontSize: 18, marginBottom: 40, lineHeight: 1.6 }}>
                            Напишите нам — разберём вашу рекламу и покажем, где теряются деньги
                        </motion.p>
                        <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
                            <motion.a
                                href="https://wa.me/77070357777?text=%D0%A5%D0%BE%D1%87%D1%83+%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80+%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackWhatsAppClick('case_laser_cta')}
                                whileHover={{ scale: 1.05, boxShadow: '0 8px 40px rgba(230,34,34,0.4)' }}
                                whileTap={{ scale: 0.97 }}
                                style={{ display: 'inline-block', padding: '18px 40px', background: '#E62222', color: '#fff', fontWeight: 700, fontSize: 17, borderRadius: 12, textDecoration: 'none' }}
                            >
                                Получить разбор рекламы
                            </motion.a>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                                <Link
                                    href="/cases/"
                                    style={{ display: 'inline-block', padding: '18px 40px', background: 'rgba(255,255,255,0.06)', color: '#fff', fontWeight: 600, fontSize: 17, borderRadius: 12, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    Смотреть другие кейсы
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>

            </main>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    headline: '679 переписок в WhatsApp для студии лазерной эпиляции',
                    description: 'Снизили цену переписки с $4 до $1,29 через Meta Ads → WhatsApp за один месяц.',
                    author: { '@type': 'Person', name: 'Дмитрий Тимошевский', url: 'https://digitalpride.kz/o-nas/' },
                    publisher: { '@type': 'Organization', name: 'Digital Pride', logo: { '@type': 'ImageObject', url: 'https://digitalpride.kz/fonts/new-logo.svg' } },
                    datePublished: '2026-06-01',
                    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://digitalpride.kz/cases/laser-epilation/' },
                }) }}
            />
        </>
    );
}

function SlideBlock({ src, alt, srTitle }: { src: string; alt: string; srTitle: string }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ padding: '24px 0' }}
        >
            <h2 className="sr-only">{srTitle}</h2>
            <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 16px' }}>
                <motion.img
                    src={src}
                    alt={alt}
                    width={1920}
                    height={1080}
                    whileHover={{ scale: 1.005 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%', height: 'auto', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)' }}
                />
            </div>
        </motion.section>
    );
}

const h2Style: React.CSSProperties = {
    fontFamily: "'Unbounded', sans-serif",
    fontSize: 'clamp(24px, 3.5vw, 36px)',
    fontWeight: 900,
    marginBottom: 32,
    letterSpacing: '-0.5px',
};

const textStyle: React.CSSProperties = {
    fontSize: 17,
    color: '#999',
    lineHeight: 1.7,
    marginBottom: 16,
};

const imgStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.08)',
};
