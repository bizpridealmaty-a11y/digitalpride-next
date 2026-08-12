'use client';

import React, { useEffect, useState } from 'react';
import { useLocale } from '@/lib/locale-context';
import Stepper, { Step } from '@/components/motion/Stepper';
import Galaxy from '@/components/motion/Galaxy';

export default function Process() {
    const locale = useLocale();
    const isKk = locale === 'kk';
    // WebGL-галактику включаем только на клиенте и без reduce-motion
    const [showGalaxy, setShowGalaxy] = useState(false);
    useEffect(() => {
        setShowGalaxy(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }, []);

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

    return (
        <section
            className="relative overflow-hidden py-24 lg:py-28"
            style={{ background: 'radial-gradient(120% 90% at 50% -10%, #17171f 0%, #0B0B0F 62%)' }}
        >
            {showGalaxy && (
                <div className="absolute inset-0 z-0 pointer-events-none opacity-90" aria-hidden="true">
                    <Galaxy
                        transparent
                        hueShift={0}
                        saturation={0}
                        glowIntensity={0.85}
                        density={1.25}
                        twinkleIntensity={0.6}
                        rotationSpeed={0.06}
                        starSpeed={0.55}
                        speed={1.0}
                        mouseInteraction={false}
                        mouseRepulsion={false}
                    />
                </div>
            )}
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Заголовок */}
                <div className="text-center mb-12 lg:mb-14">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4" style={{ background: 'rgba(227,28,36,0.14)', color: '#FF5A4D' }}>
                        {isKk ? 'Қалай жұмыс істейміз' : 'Как мы работаем'}
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                        {isKk ? <>Мөлдір <span style={{ color: '#E31C24' }}>өсу</span> процесі</> : <>Прозрачный процесс <span style={{ color: '#E31C24' }}>роста</span></>}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
                        {isKk
                            ? 'Біз жұмыс тәсілімізді жасырмаймыз. Әр әрекет құжатталған және сізбен келісілген. Қадамдарды басып, әр кезеңмен танысыңыз.'
                            : 'Мы не скрываем, как работаем. Каждое действие задокументировано и согласовано с вами. Кликайте по этапам и листайте.'}
                    </p>
                </div>

                {/* Stepper — интерактивное переключение этапов */}
                <div className="max-w-2xl mx-auto">
                    <Stepper
                        backButtonText={isKk ? 'Артқа' : 'Назад'}
                        nextButtonText={isKk ? 'Келесі' : 'Далее'}
                        completeButtonText={isKk ? 'Дайын' : 'Готово'}
                    >
                        {steps.map((s, i) => (
                            <Step key={i}>
                                <div className="min-h-[140px] flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-3">
                                    <div
                                        className="leading-none font-black shrink-0"
                                        style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(3rem, 8vw, 4.5rem)', color: 'rgba(227,28,36,0.92)' }}
                                    >
                                        {s.num}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2.5 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                            {s.title}
                                        </h3>
                                        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                                            {s.desc}
                                        </p>
                                    </div>
                                </div>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            </div>
        </section>
    );
}
