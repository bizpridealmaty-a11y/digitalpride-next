'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';

export default function SocialProof() {
    const locale = useLocale();
    const isKk = locale === 'kk';

    const stats = [
        { label: isKk ? "Портфельдегі клиенттер" : "Клиентов в портфеле", value: "500+", delay: 0 },
        { label: isKk ? "Басқарудағы бюджеттер" : "Бюджетами под управлением", value: "$3M+", delay: 0.1 },
        { label: isKk ? "Генерацияланған лидтер" : "Сгенерировано лидов", value: "150K+", delay: 0.2 },
        { label: isKk ? "Нарықтағы тәжірибе жылдары" : "Лет экспертизы на рынке", value: "10+", delay: 0.3 },
    ];

    // Рекламные платформы и инструменты, с которыми мы работаем (Simple Icons CDN).
    // Здесь ТОЛЬКО платформы — не логотипы клиентов: заявлять чужие бренды клиентами
    // без договора нельзя (доверие + чужие торговые марки).
    // Яндекс и 2ГИС из Simple Icons УДАЛЕНЫ (их slug'и отдают 404) — а это как раз
    // ключевые для Казахстана площадки. Раньше их иконки просто молча пропадали:
    // onError прячет картинку, поэтому визуально «не сломано», но платформы исчезали
    // из строки, и каждая загрузка страницы делала 4 неудачных запроса.
    // Рисовать чужой логотип самим нельзя (торговая марка), поэтому показываем
    // текстовое начертание — честно и не зависит от внешнего CDN.
    const brands: { name: string; icon?: string }[] = [
        { name: 'Google', icon: 'https://cdn.simpleicons.org/google/999' },
        { name: 'Google Ads', icon: 'https://cdn.simpleicons.org/googleads/999' },
        { name: 'Google Analytics', icon: 'https://cdn.simpleicons.org/googleanalytics/999' },
        { name: 'Яндекс Директ' },
        { name: 'Meta', icon: 'https://cdn.simpleicons.org/meta/999' },
        { name: 'Facebook', icon: 'https://cdn.simpleicons.org/facebook/999' },
        { name: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/999' },
        { name: 'TikTok', icon: 'https://cdn.simpleicons.org/tiktok/999' },
        { name: 'YouTube', icon: 'https://cdn.simpleicons.org/youtube/999' },
        { name: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp/999' },
        { name: 'Telegram', icon: 'https://cdn.simpleicons.org/telegram/999' },
        { name: '2ГИС' },
    ];

    // Double logos for seamless loop
    const logos = [...brands, ...brands];

    return (
        <section className="py-16 bg-zinc-50 border-b border-gray-200 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10"
                >
                    {isKk ? 'Жарнама платформаларымен жұмыс істейміз' : 'Работаем с рекламными платформами'}
                </motion.p>
            </div>

            {/* Infinite scrolling logo marquee */}
            <div className="relative mb-16">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to right, rgb(250,250,250), transparent)' }}></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to left, rgb(250,250,250), transparent)' }}></div>

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex items-center gap-12 shrink-0"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            x: {
                                duration: 30,
                                repeat: Infinity,
                                ease: 'linear',
                            },
                        }}
                    >
                        {logos.map((logo, i) => (
                            <div key={i} className="flex-shrink-0 px-6 flex items-center">
                                {logo.icon ? (
                                    <img
                                        src={logo.icon}
                                        alt={logo.name}
                                        title={logo.name}
                                        width={56}
                                        height={56}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-10 md:h-14 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-500"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <span
                                        title={logo.name}
                                        className="h-10 md:h-14 flex items-center whitespace-nowrap text-lg md:text-2xl font-extrabold tracking-tight text-gray-500 opacity-40 hover:opacity-100 transition-all duration-500"
                                    >
                                        {logo.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-x-0 lg:divide-x divide-gray-200">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: stat.delay, type: "spring" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="text-center px-4"
                        >
                            <h3 className="text-4xl md:text-5xl font-extrabold text-black mb-2 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                {stat.value}
                            </h3>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
