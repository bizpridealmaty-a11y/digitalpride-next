'use client';

import React from 'react';
import { motion } from 'framer-motion';
import RawFooter from '@/components/layout/RawFooter';
import Breadcrumbs from '@/components/Breadcrumbs';
import { trackWhatsAppClick } from '@/lib/analytics';

/**
 * Переиспользуемый шаблон кейса по разработке сайта.
 * Тёмная премиальная подача (как утверждённый прототип), структура
 * «Точка А → что сделали → Точка Б». Все данные приходят в props —
 * чтобы новый кейс добавлялся одним объектом.
 */
export type WebsiteCaseData = {
    brand: string;
    casePath: string;                // внутренний путь кейса для хлебных крошек
    url: string;
    urlLabel: string;
    eyebrow: string;
    title: React.ReactNode;
    lede: string;
    accent?: string;                 // акцент сайта (для чипов/фактов); по умолчанию красный DP
    heroDesktop: string;
    heroMobile: string;
    heroDesktopAlt: string;
    heroMobileAlt: string;
    chips: { title: string; sub: string }[];
    pointA: { title: React.ReactNode; text: React.ReactNode; pains: { h: string; p: string }[] };
    didTitle: React.ReactNode;
    didSubtitle?: string;
    did: { icon: string; h: string; p: string }[];
    pointB: { title: React.ReactNode; subtitle?: string; facts: { b: string; s: string }[]; slot?: React.ReactNode };
    gallery: { src: string; alt: string; cap: string }[];
    flow: { n: string; h: string; p: string }[];
    stack: string[];
    testimonial?: { text: string; who: string; role: string };
    waLink: string;
    waSource: string;
};

const C = {
    ink: '#0E0E12', surface: '#16161C', surface2: '#1E1E26', line: '#2A2A34',
    text: '#F4F2F8', muted: '#9A93A8', accent: '#E31C24', accentSoft: '#FF5A4D',
};
const fadeUp = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div variants={fadeUp} className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {children}
        </motion.div>
    );
}

function AbBadge({ point, children }: { point: 'А' | 'Б'; children: React.ReactNode }) {
    const isB = point === 'Б';
    return (
        <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="grid place-items-center rounded-lg font-extrabold text-white" style={{ width: 32, height: 32, fontSize: 16, background: isB ? C.accent : '#8A8072', fontFamily: "'Unbounded', sans-serif" }}>{point}</span>
            <span className="font-extrabold uppercase" style={{ fontSize: 12.5, letterSpacing: 1, color: isB ? C.accentSoft : C.muted }}>{children}</span>
        </div>
    );
}

export default function WebsiteCase({ data }: { data: WebsiteCaseData }) {
    const accent = data.accent || C.accent;
    return (
        <>
            <main style={{ background: C.ink, color: C.text }}>
                {/* HERO */}
                <section style={{ paddingTop: 120, paddingBottom: 56, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(900px 500px at 80% 8%, ${accent}22, transparent 60%)` }} />
                    <div className="container mx-auto px-4 max-w-6xl relative">
                        <Breadcrumbs items={[{ name: 'Кейсы', item: '/cases' }, { name: data.brand, item: data.casePath }]} />
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mt-6">
                            <motion.div initial="hidden" animate="visible" variants={stagger}>
                                <motion.span variants={fadeUp} className="block font-bold uppercase" style={{ fontSize: 12, letterSpacing: 2, color: C.accentSoft }}>{data.eyebrow}</motion.span>
                                <motion.h1 variants={fadeUp} className="font-extrabold tracking-tight my-4" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(28px, 4.4vw, 46px)', lineHeight: 1.08 }}>{data.title}</motion.h1>
                                <motion.p variants={fadeUp} className="text-lg mb-6" style={{ color: C.muted, maxWidth: 480, lineHeight: 1.6 }}>{data.lede}</motion.p>
                                <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-7">
                                    {data.chips.map((ch, i) => (
                                        <div key={i} className="rounded-xl px-4 py-3" style={{ background: C.surface, border: `1px solid ${C.line}` }}>
                                            <div className="font-extrabold" style={{ fontSize: 16 }}>{ch.title}</div>
                                            <div className="font-semibold uppercase mt-0.5" style={{ fontSize: 10, letterSpacing: .5, color: C.muted }}>{ch.sub}</div>
                                        </div>
                                    ))}
                                </motion.div>
                                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                                    <a href={data.waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(data.waSource)} className="inline-flex items-center gap-2.5 rounded-xl font-bold text-white px-6 py-3.5" style={{ background: C.accent, boxShadow: '0 12px 34px rgba(227,28,36,.32)' }}>
                                        Хочу такой сайт
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </a>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl font-bold px-6 py-3.5" style={{ border: `1px solid ${C.line}`, color: C.text }}>Открыть сайт →</a>
                                </motion.div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="relative">
                                <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.line}`, background: C.surface, boxShadow: '0 30px 80px rgba(0,0,0,.55)' }}>
                                    <div className="flex items-center gap-2 px-3.5 py-2.5" style={{ background: C.surface2, borderBottom: `1px solid ${C.line}` }}>
                                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                                        <span className="ml-2 flex-1 rounded-md px-3 py-1" style={{ background: C.ink, border: `1px solid ${C.line}`, fontFamily: "'Consolas', monospace", fontSize: 11, color: C.muted }}>{data.urlLabel}</span>
                                    </div>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={data.heroDesktop} alt={data.heroDesktopAlt} className="w-full block" />
                                </div>
                                <div className="absolute rounded-[20px] overflow-hidden hidden sm:block" style={{ right: -10, bottom: -28, width: 124, border: '6px solid #24242e', boxShadow: '0 30px 80px rgba(0,0,0,.55)' }}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={data.heroMobile} alt={data.heroMobileAlt} className="w-full block" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ТОЧКА А */}
                <section style={{ paddingTop: 64, paddingBottom: 64, borderTop: `1px solid ${C.line}` }}>
                    <div className="container mx-auto px-4 max-w-6xl">
                        <Reveal className="mb-8" >
                            <AbBadge point="А">Отправная точка — с чего начали</AbBadge>
                            <h2 className="font-extrabold tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(23px, 3.4vw, 36px)', lineHeight: 1.12 }}>{data.pointA.title}</h2>
                            <p className="mt-3 text-lg" style={{ color: C.muted, maxWidth: '62ch' }}>{data.pointA.text}</p>
                        </Reveal>
                        <motion.div className="grid md:grid-cols-3 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            {data.pointA.pains.map((p, i) => (
                                <motion.div key={i} variants={fadeUp} className="rounded-xl p-5" style={{ background: C.surface, border: `1px solid ${C.line}`, borderLeft: '3px solid #8A8072' }}>
                                    <h3 className="font-bold mb-1.5" style={{ fontSize: 16 }}>{p.h}</h3>
                                    <p style={{ color: C.muted, fontSize: 14, margin: 0 }}>{p.p}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ЧТО СДЕЛАЛИ */}
                <section style={{ paddingTop: 64, paddingBottom: 64, borderTop: `1px solid ${C.line}` }}>
                    <div className="container mx-auto px-4 max-w-6xl">
                        <Reveal className="mb-8">
                            <span className="block font-bold uppercase mb-2" style={{ fontSize: 12, letterSpacing: 2, color: C.accentSoft }}>Что сделали</span>
                            <h2 className="font-extrabold tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(23px, 3.4vw, 36px)', lineHeight: 1.12 }}>{data.didTitle}</h2>
                            {data.didSubtitle && <p className="mt-3 text-lg" style={{ color: C.muted, maxWidth: '62ch' }}>{data.didSubtitle}</p>}
                        </Reveal>
                        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            {data.did.map((d, i) => (
                                <motion.div key={i} variants={fadeUp} className="rounded-2xl p-6" style={{ background: C.surface, border: `1px solid ${C.line}` }}>
                                    <div className="grid place-items-center rounded-xl mb-3.5" style={{ width: 42, height: 42, background: `${accent}22`, fontSize: 21 }}>{d.icon}</div>
                                    <h3 className="font-bold mb-1.5" style={{ fontSize: 15.5 }}>{d.h}</h3>
                                    <p style={{ color: C.muted, fontSize: 14, margin: 0, lineHeight: 1.6 }}>{d.p}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ТОЧКА Б */}
                <section style={{ paddingTop: 64, paddingBottom: 64, borderTop: `1px solid ${C.line}` }}>
                    <div className="container mx-auto px-4 max-w-6xl">
                        <Reveal className="mb-8">
                            <AbBadge point="Б">Что стало — результат</AbBadge>
                            <h2 className="font-extrabold tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(23px, 3.4vw, 36px)', lineHeight: 1.12 }}>{data.pointB.title}</h2>
                            {data.pointB.subtitle && <p className="mt-3 text-lg" style={{ color: C.muted, maxWidth: '62ch' }}>{data.pointB.subtitle}</p>}
                        </Reveal>
                        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            {data.pointB.facts.map((f, i) => (
                                <motion.div key={i} variants={fadeUp} className="rounded-2xl p-5 text-center" style={{ background: C.surface, border: `1px solid ${C.line}` }}>
                                    <div className="font-extrabold tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(24px, 3.2vw, 34px)', color: accent, fontVariantNumeric: 'tabular-nums' }}>{f.b}</div>
                                    <div className="font-semibold uppercase mt-1" style={{ fontFamily: "'Consolas', monospace", fontSize: 11, letterSpacing: .5, color: C.muted }}>{f.s}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                        {data.pointB.slot && (
                            <div className="mt-4 rounded-xl px-5 py-4 text-sm" style={{ background: C.surface2, border: `1px dashed ${C.line}`, color: C.muted }}>{data.pointB.slot}</div>
                        )}
                    </div>
                </section>

                {/* СТРАНИЦЫ */}
                <section style={{ paddingTop: 64, paddingBottom: 64, borderTop: `1px solid ${C.line}` }}>
                    <div className="container mx-auto px-4 max-w-6xl">
                        <Reveal className="mb-8">
                            <span className="block font-bold uppercase mb-2" style={{ fontSize: 12, letterSpacing: 2, color: C.accentSoft }}>Страницы сайта</span>
                            <h2 className="font-extrabold tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(23px, 3.4vw, 36px)' }}>Как это выглядит</h2>
                        </Reveal>
                        <motion.div className="grid sm:grid-cols-2 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            {data.gallery.map((g, i) => (
                                <motion.div key={i} variants={fadeUp} className="rounded-xl overflow-hidden" style={{ background: C.surface, border: `1px solid ${C.line}` }}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={g.src} alt={g.alt} loading="lazy" className="w-full block" style={{ borderBottom: `1px solid ${C.line}` }} />
                                    <div className="px-3.5 py-3 font-semibold" style={{ fontSize: 13, color: C.muted }}>{g.cap}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* КАК ДЕЛАЛИ */}
                <section style={{ paddingTop: 64, paddingBottom: 64, borderTop: `1px solid ${C.line}` }}>
                    <div className="container mx-auto px-4 max-w-6xl">
                        <Reveal className="mb-8">
                            <span className="block font-bold uppercase mb-2" style={{ fontSize: 12, letterSpacing: 2, color: C.accentSoft }}>Как делали</span>
                            <h2 className="font-extrabold tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(23px, 3.4vw, 36px)' }}>От брифа до запуска</h2>
                        </Reveal>
                        <motion.div className="grid grid-cols-2 lg:grid-cols-5 gap-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            {data.flow.map((st, i) => (
                                <motion.div key={i} variants={fadeUp} className="rounded-xl p-4" style={{ background: C.surface, border: `1px solid ${C.line}` }}>
                                    <div className="font-extrabold" style={{ fontFamily: "'Consolas', monospace", fontSize: 13, color: C.accentSoft }}>{st.n}</div>
                                    <h3 className="font-bold mt-2 mb-1" style={{ fontSize: 14.5 }}>{st.h}</h3>
                                    <p style={{ color: C.muted, fontSize: 13, margin: 0 }}>{st.p}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {data.stack.map((t, i) => (
                                <span key={i} className="rounded-lg px-3 py-1.5" style={{ background: C.surface2, border: `1px solid ${C.line}`, fontFamily: "'Consolas', monospace", fontSize: 12, color: C.muted }}>{t}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ОТЗЫВ */}
                {data.testimonial && (
                    <section style={{ paddingTop: 64, paddingBottom: 64, borderTop: `1px solid ${C.line}` }}>
                        <div className="container mx-auto px-4 max-w-6xl">
                            <Reveal>
                                <div className="rounded-2xl p-8 md:p-10" style={{ background: C.surface, border: `1px solid ${C.line}` }}>
                                    <p className="mb-5" style={{ fontSize: 'clamp(17px, 2vw, 22px)', lineHeight: 1.5 }}>«{data.testimonial.text}»</p>
                                    <div className="flex items-center gap-3.5">
                                        <div style={{ width: 46, height: 46, borderRadius: '50%', background: `linear-gradient(135deg, ${accent}, #7a1015)` }} />
                                        <div>
                                            <b className="block">{data.testimonial.who}</b>
                                            <span style={{ color: C.muted, fontSize: 14 }}>{data.testimonial.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section style={{ paddingTop: 64, paddingBottom: 88 }}>
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="rounded-3xl text-center text-white" style={{ background: 'linear-gradient(135deg, #E31C24, #B0141B)', padding: 'clamp(36px, 6vw, 60px) 24px' }}>
                            <h2 className="font-extrabold mb-3 text-white" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(24px, 3.6vw, 38px)' }}>Соберём такой же сайт для вашего бизнеса</h2>
                            <p className="mx-auto mb-6" style={{ color: 'rgba(255,255,255,.9)', maxWidth: '46ch' }}>Многостраничный, адаптивный, с калькулятором и заявками в WhatsApp. Обсудим задачу и покажем примеры.</p>
                            <a href={data.waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(data.waSource + '_cta')} className="inline-flex items-center gap-2.5 rounded-xl font-bold px-7 py-4" style={{ background: '#fff', color: C.accent, boxShadow: '0 12px 34px rgba(0,0,0,.28)' }}>
                                Написать в WhatsApp
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <RawFooter />
        </>
    );
}
