'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="py-32 bg-zinc-950 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full border border-zinc-800 rounded-full opacity-20 hidden md:block"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full border border-zinc-700 rounded-full opacity-30 hidden md:block"></div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Готовы кратно увеличить <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">продажи</span>?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                        Давайте обсудим ваш проект. Оставьте заявку, и мы свяжемся с вами в течение 10 минут в рабочее время.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <button
                            data-toggle="modal"
                            data-target="#modal_form-feed"
                            className="px-10 py-5 bg-white text-black hover:bg-gray-100 font-extrabold rounded-full transition-colors text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
                        >
                            Обсудить проект
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
