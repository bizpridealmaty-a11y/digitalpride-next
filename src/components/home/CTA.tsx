'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/telegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, source: 'Обсудить проект' })
            });
            if (res.ok) {
                setStatus('success');
                setTimeout(() => {
                    setIsModalOpen(false);
                    setStatus('idle');
                    setName('');
                    setPhone('');
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <>
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

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                console.log("Open modal clicked");
                                setIsModalOpen(true);
                            }}
                            className="inline-block px-10 py-5 bg-white text-black hover:bg-gray-100 font-extrabold rounded-full transition-colors text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] cursor-pointer"
                        >
                            Обсудить проект
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2147483647] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        style={{ position: 'fixed' }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full relative text-center"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-5 right-5 text-gray-400 hover:text-black transition-colors cursor-pointer"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                            <h3 className="text-2xl font-extrabold mb-2 text-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>Обсудить проект</h3>
                            <p className="text-gray-500 mb-6 text-sm">Заполните форму и мы свяжемся с вами в течение 10 минут.</p>

                            <form onSubmit={handleSubmit} className="space-y-5 text-left">
                                <div>
                                    <label className="block text-sm font-semibold mb-1.5 text-gray-800">Ваше имя</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-black placeholder-gray-400"
                                        placeholder="Иван Иванов"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1.5 text-gray-800">Телефон</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-black placeholder-gray-400"
                                        placeholder="+7 (___) ___ - __ - __"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className={`w-full py-4 rounded-xl font-bold transition-all text-lg cursor-pointer shadow-lg ${status === 'success' ? 'bg-green-600 text-white shadow-green-500/30' : 'bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600 shadow-red-500/30 disabled:opacity-70'}`}
                                >
                                    {status === 'loading' ? 'Отправка...' : status === 'success' ? '✓ Отправлено' : 'Офигеете от результата'}
                                </button>
                                {status === 'error' && (
                                    <p className="text-red-500 text-sm text-center mt-2">Произошла ошибка. Попробуйте еще раз.</p>
                                )}
                                <p className="text-gray-400 text-xs text-center pt-1">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
