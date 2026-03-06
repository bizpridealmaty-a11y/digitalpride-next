'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RawFooter from '@/components/layout/RawFooter';

const skills = [
    { title: 'ChatGPT и нейросети', description: 'Научитесь работать с ИИ-инструментами: генерировать контент, автоматизировать рутину и повышать эффективность в разы.', icon: '🧠' },
    { title: 'Таргетированная реклама', description: 'Запускайте рекламу в Meta с минимальными бюджетами. Создавайте воронки, которые реально продают товары и услуги.', icon: '🎯' },
    { title: 'Контент и SMM', description: 'Создавайте вирусный контент, выстраивайте аккаунты, растите аудиторию и превращайте подписчиков в покупателей.', icon: '⚡' },
    { title: 'Чат-боты и автоматизация', description: 'Управляйте чат-ботами, CRM и воронками в мессенджерах. Автоматизируйте диалоги и экономьте сотни часов в год.', icon: '🤖' },
];

const blocks = [
    { id: '01', title: 'Блок 1 — Основы SMM', topics: ['Основы Social Media и построение стратегии в Instagram, Facebook', 'Теоретические основы менеджмента, продаж и интернет-маркетинга', 'Подбор социально-медийных площадок для продвижения', 'Особенности контента в социальных медиа'] },
    { id: '02', title: 'Блок 2 — Контент и Копирайтинг', topics: ['Оформление ежедневных постов и основы копирайтинга', 'Структура постинга, работа с Chat GPT и нейросетями', 'Контентная стратегия, инструменты отложенного постинга', 'Форматы рекламных объявлений и написание продающих текстов'] },
    { id: '03', title: 'Блок 3 — Визуальный контент', topics: ['Визуальный контент и дизайн в социальных сетях', 'Работа с Canva — от шаблонов до кастомных макетов', 'Видеомонтаж и рилсы в CupCut', 'Брендинг аккаунта: шрифты, палитры, концепция'] },
    { id: '04', title: 'Блок 4 — Таргетированная реклама', topics: ['Основы таргетированной рекламы в Instagram и Facebook (Meta)', 'Обзор основных инструментов таргет-рекламы', 'Структура: цели, аудитории, плейсменты', 'Ретаргетинг и парсинг аудиторий в соцсетях'] },
    { id: '05', title: 'Блок 5 — Стратегия и Воронки', topics: ['Подход к реализации стратегии, создание рабочих связок', 'Продвижение через таргет Facebook и Instagram', 'Лидогенерация: сбор заявок через рекламные кампании', 'Разработка воронок продаж в социальных сетях'] },
    { id: '06', title: 'Блок 6 — Комьюнити и Аналитика', topics: ['Комьюнити-менеджмент: повышение активности', 'Обработка позитивных и негативных сообщений', 'Управление коммуникациями в социальных интернет-медиа', 'Основные показатели эффективности (KPI) в соцсетях'] },
    { id: '07', title: 'Блок 7 — Бюджет и KPI', topics: ['Прогнозирование и оптимизация рекламного бюджета', 'Правильная постановка целей и KPI для бизнеса', 'Воронка продаж соцсетей и интеграция с CRM', 'Отчётность: как показать клиенту результаты работы'] },
];

const plans = [
    {
        name: 'Онлайн обучение',
        price: '125 000 ₸',
        description: 'Полный курс в записи — учитесь в своём темпе из любой точки мира.',
        features: ['43 видео-урока в 12 модулях', 'Доступ к материалам на 6 месяцев', 'Гайды, шаблоны, инструкции', 'Тестирование после каждого модуля', 'Воркшопы (только в записи)'],
        excluded: ['Обратная связь от куратора', 'Сертификат о прохождении', 'Стажировка в Digital Pride'],
        popular: false,
    },
    {
        name: 'Очное в группе',
        price: '250 000 ₸',
        description: 'Живые занятия с кураторами — максимальная практика и нетворкинг.',
        features: ['43 видео-урока в 12 модулях', 'Доступ к материалам на 1 год', 'Гайды, шаблоны, инструкции', 'Участие в онлайн воркшопах вживую', 'Обратная связь куратора по ДЗ', 'Сертификат о прохождении', 'Стажировка в Digital Pride', 'Бессрочная поддержка'],
        excluded: [],
        popular: true,
    },
    {
        name: 'Индивидуальное',
        price: '1 000 000 ₸',
        description: 'Персональный коучинг 1-на-1 с экспертом под ваш бизнес.',
        features: ['Индивидуальный план обучения', 'Личные сессии с топовым ментором', 'Разбор вашего бизнеса', 'Настройка рекламы под ваш продукт', 'Доступ ко всем материалам бессрочно', 'Сертификат о прохождении', 'Стажировка в Digital Pride', 'Бессрочная поддержка'],
        excluded: [],
        popular: false,
    },
];

const tools = [
    { name: 'HeyGen', sub: 'AI-видео с аватаром' },
    { name: 'Kling AI', sub: 'Генерация видео' },
    { name: 'Sora', sub: 'Видео от OpenAI' },
    { name: 'Midjourney', sub: 'Генерация изображений' },
    { name: 'Runway', sub: 'AI видео-редактор' },
    { name: 'ChatGPT', sub: 'Тексты и автоматизация' },
    { name: 'Canva', sub: 'Дизайн и визуалы' },
    { name: 'Meta Ads', sub: 'Таргетированная реклама' },
];

export default function SchoolPage() {
    const [openBlock, setOpenBlock] = useState<number | null>(null);

    return (
        <>
            <main className="bg-white text-black">
                {/* Hero */}
                <section className="pt-32 pb-20 bg-zinc-950 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-transparent" />
                    <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 text-red-400 text-sm font-bold mb-6 uppercase tracking-wider border border-red-500/30">
                            Маркетинг нового уровня · Digital Pride
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            <span className="text-red-500">МАНУФАКТУРА</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl font-semibold text-white/80 uppercase tracking-widest mb-6">
                            Обучающий очный курс
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-2 mb-8">
                            {['Таргетированная реклама', 'AI-инструменты', 'Нейросети и чат-боты', 'Генерация видео и фото'].map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-red-500/40 text-red-300 bg-red-600/10">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
                            Получи образование, которое изменит твою жизнь и твой бизнес. Освой инструменты, которые принесут реальные заявки и продажи уже через 2 месяца.
                        </motion.p>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-gray-500 mb-10">
                            SMM · Таргет · ChatGPT · Нейросети · Чат-боты · Генерация контента
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#tariffs" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all text-lg shadow-[0_0_30px_rgba(224,48,48,0.5)]">
                                Получить образование →
                            </a>
                            <a href="#program" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-lg">
                                Изучить программу
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Skills */}
                <section className="py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="text-xs uppercase tracking-widest text-red-600 font-bold mb-4">Что вы освоите</div>
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Навыки <span className="text-red-600">2026 года</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                После курса вы станете востребованным специалистом уже через 2–3 месяца обучения.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skills.map((skill, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-7 hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                                    <div className="text-4xl mb-4">{skill.icon}</div>
                                    <h3 className="text-lg font-bold mb-3">{skill.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* AI Tools */}
                        <div className="mt-16 text-center">
                            <div className="text-xs uppercase tracking-widest text-red-600 font-bold mb-2">Инструменты курса</div>
                            <h3 className="text-2xl font-bold mb-2">Мы обучаем работе с топовыми <span className="text-red-600">нейросетями</span></h3>
                            <p className="text-gray-500 text-sm mb-8">Генерация видео, фото, голоса и автоматизация — всё в одном курсе</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {tools.map((tool, i) => (
                                <motion.div key={tool.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-gray-50 rounded-xl p-4 flex items-center gap-3 border border-gray-100">
                                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold text-lg flex-shrink-0">
                                        {tool.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">{tool.name}</div>
                                        <div className="text-gray-500 text-xs">{tool.sub}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
                            {[
                                { title: 'Масштабируйте бизнес', desc: 'Узнаете, как масштабировать количество заявок и вывести бизнес на новый уровень с помощью digital.' },
                                { title: 'Сэкономьте бюджет', desc: 'Сэкономите деньги, время и нервы, научившись самостоятельно настраивать рекламу и вести аккаунты.' },
                                { title: 'Повысьте продажи', desc: 'Повысите продажи и лояльность аудитории через грамотное управление коммуникациями в соцсетях.' },
                            ].map((b, i) => (
                                <div key={i}>
                                    <h4 className="text-lg font-bold mb-2">{b.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Program */}
                <section id="program" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="mb-16">
                            <div className="text-xs uppercase tracking-widest text-red-600 font-bold mb-4">43 видео-урока · 12 модулей</div>
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Программа <span className="text-red-600">Курса</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-3xl">
                                Структурированная программа от нуля до профессионального SMM-специалиста. Инструменты 2026 года: ChatGPT, Canva, Meta Ads и нейросети.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {blocks.map((block, i) => (
                                <motion.div key={block.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                                >
                                    <button onClick={() => setOpenBlock(openBlock === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl font-black text-red-500/30">{block.id}</span>
                                            <h3 className="text-lg font-bold">{block.title}</h3>
                                        </div>
                                        <svg className={`w-5 h-5 text-gray-400 transition-transform ${openBlock === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                    {openBlock === i && (
                                        <div className="px-6 pb-6">
                                            <ul className="space-y-2 pl-12">
                                                {block.topics.map((t, ti) => (
                                                    <li key={ti} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                                                        {t}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            {/* Special block */}
                            <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">⭐</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-red-600">Поддержка внутри — Бессрочно</h3>
                                        <p className="text-sm text-gray-600 mt-1">Бессрочная поддержка выпускников · Постоянно пополняемая база знаний · Комьюнити единомышленников · Лучшего студента пригласят на работу!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section id="tariffs" className="py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="text-xs uppercase tracking-widest text-red-600 font-bold mb-4">Инвестиция в себя</div>
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Выберите свой <span className="text-red-600">Тариф</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Одна инвестиция — и вы получаете навыки, которые будут приносить доход годами.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {plans.map((plan, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className={`rounded-2xl p-8 border flex flex-col ${plan.popular ? 'border-red-500 bg-zinc-950 text-white shadow-2xl scale-105 relative' : 'border-gray-200 bg-white'}`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                            Хит продаж
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                    <div className="text-3xl font-extrabold mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{plan.price}</div>
                                    <span className="text-xs text-gray-500 uppercase tracking-wide mb-4">единоразово</span>
                                    <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>{plan.description}</p>
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {plan.features.map((f, fi) => (
                                            <li key={fi} className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                                                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                                {f}
                                            </li>
                                        ))}
                                        {plan.excluded.map((f, fi) => (
                                            <li key={`ex-${fi}`} className="flex items-start gap-2 text-sm text-gray-400 line-through">
                                                <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">—</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="https://wa.me/77070327777?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BA%D1%83%D1%80%D1%81"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`block text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-red-600 text-white hover:bg-red-700 shadow-[0_0_25px_rgba(224,48,48,0.4)]' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                                    >
                                        Записаться →
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center text-gray-500 text-sm mt-8">
                            Есть вопросы? Напишите нам в{' '}
                            <a href="https://wa.me/77070327777" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">WhatsApp</a>
                            {' '}— подберём лучший вариант лично для вас.
                        </p>
                    </div>
                </section>
            </main>
            <RawFooter />
        </>
    );
}
