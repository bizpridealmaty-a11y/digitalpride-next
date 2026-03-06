'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SocialProof() {
    const stats = [
        { label: "Клиентов в портфеле", value: "500+", delay: 0 },
        { label: "Бюджетами под управлением", value: "$3M+", delay: 0.1 },
        { label: "Сгенерировано лидов", value: "150K+", delay: 0.2 },
        { label: "Лет экспертизы на рынке", value: "10+", delay: 0.3 },
    ];

    // Brand logos via Simple Icons CDN (doubled for seamless loop)
    const brands = [
        { name: 'Yandex', icon: '/images/yandex.png' },
        { name: 'Google', icon: 'https://cdn.simpleicons.org/google/999' },
        { name: 'Facebook', icon: 'https://cdn.simpleicons.org/facebook/999' },
        { name: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/999' },
        { name: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp/999' },
        { name: 'Coca-Cola', icon: 'https://cdn.simpleicons.org/cocacola/999' },
        { name: 'TikTok', icon: 'https://cdn.simpleicons.org/tiktok/999' },
        { name: 'Red Bull', icon: 'https://cdn.simpleicons.org/redbull/999' },
        { name: 'Hyundai', icon: 'https://cdn.simpleicons.org/hyundai/999' },
        { name: 'BMW', icon: 'https://cdn.simpleicons.org/bmw/999' },
        { name: 'Mercedes', icon: 'https://cdn.simpleicons.org/mercedesbenz/999' },
        { name: 'Audi', icon: 'https://cdn.simpleicons.org/audi/999' },
        { name: 'Kia', icon: 'https://cdn.simpleicons.org/kia/999' },
        { name: 'Ford', icon: 'https://cdn.simpleicons.org/ford/999' },
        { name: 'Apple', icon: 'https://cdn.simpleicons.org/apple/999' },
        { name: 'Samsung', icon: 'https://cdn.simpleicons.org/samsung/999' },
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
                    Я доверяю лидерам рынка
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
                                <img
                                    src={logo.icon}
                                    alt={logo.name}
                                    title={logo.name}
                                    className="h-10 md:h-14 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
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
