'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LeadMagnet() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [site, setSite] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !phone.trim()) {
            alert('Пожалуйста, заполните имя и телефон.');
            return;
        }

        // Compose message for WhatsApp
        const message = `🔥 Новая заявка на аудит!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}${site ? `\n🌐 Сайт/Инстаграм: ${site}` : ''}`;

        // WhatsApp number (without +)
        const waNumber = '77070357777';
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(waUrl, '_blank');

        // Show success state
        setSent(true);
        setTimeout(() => {
            setSent(false);
            setName('');
            setPhone('');
            setSite('');
        }, 3000);
    };

    return (
        <section className="py-24 relative overflow-hidden flex items-center justify-center min-h-[60vh]" style={{ backgroundColor: '#ef4444' }}>
            {/* Background visual elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 z-0" style={{ backgroundColor: '#f87171' }}
            ></motion.div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] transform -translate-x-1/3 translate-y-1/3 z-0" style={{ backgroundColor: '#dc2626' }}></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="bg-zinc-950 text-white rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-12 border border-zinc-800" style={{ boxShadow: '0 25px 50px -12px rgba(244,63,94,0.5)' }}
                >
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Закажите бесплатный <span style={{ color: '#fb7185' }}>маркетинговый аудит</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 font-medium">
                            Мы разберем ваши текущие рекламные кампании, сайт и воронку продаж. Покажем, где вы теряете деньги, и составим action-plan для быстрого роста.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-300 font-medium">
                                <svg className="w-5 h-5 mr-4" style={{ color: '#fb7185' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Анализ конкурентов (Traffic, SEO)
                            </li>
                            <li className="flex items-center text-gray-300 font-medium">
                                <svg className="w-5 h-5 mr-4" style={{ color: '#fb7185' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Проверка юзабилити и конверсии сайта
                            </li>
                            <li className="flex items-center text-gray-300 font-medium">
                                <svg className="w-5 h-5 mr-4" style={{ color: '#fb7185' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Поиск "узких мест" в рекламе
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2">
                        <motion.form
                            onSubmit={handleSubmit}
                            whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
                            style={{ perspective: 1000 }}
                            className="bg-white p-8 rounded-2xl text-black shadow-lg"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-center">Получить аудит</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Ваше имя</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f43f5e] transition-shadow"
                                        placeholder="Иван Иванов"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Телефон</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f43f5e] transition-shadow"
                                        placeholder="+7 (___) ___ - __ - __"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Сайт или Инстаграм (необязательно)</label>
                                    <input
                                        type="text"
                                        value={site}
                                        onChange={(e) => setSite(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f43f5e] transition-shadow"
                                        placeholder="example.kz"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={sent}
                                    className="w-full px-6 py-4 text-white font-bold rounded-lg transition-all mt-4 text-lg disabled:opacity-70"
                                    style={{ backgroundColor: sent ? '#22c55e' : '#ef4444' }}
                                >
                                    {sent ? '✓ Заявка отправлена!' : 'Оставить заявку на аудит'}
                                </button>
                                <p className="text-xs text-center text-gray-400 mt-4">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
                            </div>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
