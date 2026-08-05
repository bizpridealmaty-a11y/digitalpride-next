'use client';

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';

const PATH = 'M60,350 C240,340 260,250 430,235 S620,200 610,150 780,70 940,58';
// Позиции узлов в % контейнера (совпадают с точками кривой)
const POS = [
    { l: '9%', t: '84%' },
    { l: '31%', t: '61%' },
    { l: '52%', t: '47%' },
    { l: '73%', t: '31%' },
    { l: '91%', t: '15%' },
];

export default function Process() {
    const locale = useLocale();
    const isKk = locale === 'kk';
    const reduce = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-15% 0px' });

    const steps = [
        {
            num: '01',
            title: isKk ? 'Терең аудит' : 'Глубокий аудит',
            desc: isKk
                ? 'Бизнес-модель, сұраныс, бәсекелестер және жарнаманың тарихи деректері.'
                : 'Бизнес-модель, спрос, конкуренты и исторические данные рекламы.',
        },
        {
            num: '02',
            title: 'Стратегия',
            desc: isKk
                ? 'Digital-стратегия, медиажоспар, ROMI мен өтінім құнын болжау.'
                : 'Digital-стратегия, медиаплан, прогноз ROMI и стоимости заявки.',
        },
        {
            num: '03',
            title: isKk ? 'Науқанды іске қосу' : 'Запуск кампаний',
            desc: isKk
                ? 'Креативтер, аналитика, мақсатты аудиторияларға жарнама.'
                : 'Креативы, аналитика, реклама на целевые аудитории.',
        },
        {
            num: '04',
            title: isKk ? 'Оңтайландыру' : 'Оптимизация',
            desc: isKk
                ? 'Күнделікті сплит-тесттер, бюджетті қайта бөлу.'
                : 'Ежедневные сплит-тесты, перераспределение бюджета.',
        },
        {
            num: '05',
            title: isKk ? 'Сатылым өсімі' : 'Рост продаж',
            desc: isKk
                ? 'Сапаны жоғалтпай көлемдер мен өтінімдер санын арттыру.'
                : 'Больше заявок и объёмов без потери качества.',
        },
    ];

    const Dot = ({ num, big }: { num: string; big?: boolean }) => (
        <div
            className="rounded-full grid place-items-center font-extrabold text-white relative"
            style={{
                width: big ? 54 : 46,
                height: big ? 54 : 46,
                fontSize: big ? 17 : 15,
                background: '#E31C24',
                border: '1.5px solid #FF5A4D',
                boxShadow: '0 0 0 6px rgba(227,28,36,.16), 0 0 22px rgba(227,28,36,.55)',
            }}
        >
            {num}
        </div>
    );

    return (
        <section
            ref={ref}
            className="relative overflow-hidden py-24 lg:py-28"
            style={{ background: 'radial-gradient(120% 90% at 50% -10%, #17171f 0%, #0B0B0F 62%)' }}
        >
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Заголовок */}
                <div className="text-center mb-16 lg:mb-8">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4" style={{ background: 'rgba(227,28,36,0.14)', color: '#FF5A4D' }}>
                        {isKk ? 'Қалай жұмыс істейміз' : 'Как мы работаем'}
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                        {isKk ? <>Мөлдір <span style={{ color: '#E31C24' }}>өсу</span> процесі</> : <>Прозрачный процесс <span style={{ color: '#E31C24' }}>роста</span></>}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
                        {isKk
                            ? 'Біз жұмыс тәсілімізді жасырмаймыз. Әр әрекет құжатталған және сізбен келісілген.'
                            : 'Мы не скрываем, как работаем. Каждое действие задокументировано и согласовано с вами.'}
                    </p>
                </div>

                {/* ── Десктоп: траектория ── */}
                <div className="hidden lg:block relative mx-auto" style={{ aspectRatio: '1000 / 400', maxWidth: 1120 }}>
                    <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
                        <defs>
                            <linearGradient id="growthGrad" x1="0" y1="1" x2="1" y2="0">
                                <stop offset="0" stopColor="#E31C24" />
                                <stop offset="1" stopColor="#FF5A4D" />
                            </linearGradient>
                        </defs>
                        <path id="growthPath" d={PATH} fill="none" stroke="rgba(255,255,255,.09)" strokeWidth="2.5" />
                        <motion.path
                            d={PATH}
                            fill="none"
                            stroke="url(#growthGrad)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            style={{ filter: 'drop-shadow(0 0 7px rgba(227,28,36,.7))' }}
                            initial={{ pathLength: 0 }}
                            animate={inView || reduce ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: reduce ? 0 : 1.7, ease: 'easeInOut' }}
                        />
                        {!reduce && (
                            <circle r="5" fill="#fff" style={{ filter: 'drop-shadow(0 0 7px #FF5A4D)' }}>
                                <animateMotion dur="5s" begin="1.4s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                                    <mpath href="#growthPath" />
                                </animateMotion>
                            </circle>
                        )}
                    </svg>

                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-center"
                            style={{ left: POS[i].l, top: POS[i].t, width: 172, transform: 'translate(-50%,-50%)' }}
                            initial={{ opacity: 0, y: 14, scale: 0.82 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ delay: reduce ? 0 : 0.35 + i * 0.3, type: 'spring', stiffness: 260, damping: 20 }}
                        >
                            <div className="flex justify-center mb-3"><Dot num={s.num} big={i === 4} /></div>
                            <h3 className="text-[15px] font-extrabold text-white mb-1.5 leading-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>{s.title}</h3>
                            <p className="text-[12.5px] text-gray-400 leading-snug">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* ── Мобайл: вертикальная траектория ── */}
                <div className="lg:hidden relative max-w-md mx-auto pl-6">
                    <div className="absolute left-[10px] top-2 bottom-2 w-[2px]" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,.08), #E31C24)' }} />
                    <div className="flex flex-col gap-8">
                        {steps.map((s, i) => (
                            <motion.div
                                key={i}
                                className="relative pl-8"
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.5 }}
                            >
                                <div className="absolute -left-[7px] top-0"><Dot num={s.num} /></div>
                                <h3 className="text-lg font-extrabold text-white mb-1 mt-2.5" style={{ fontFamily: "'Unbounded', sans-serif" }}>{s.title}</h3>
                                <p className="text-sm text-gray-400 leading-snug">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
