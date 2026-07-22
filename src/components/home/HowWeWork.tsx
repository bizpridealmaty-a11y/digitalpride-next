'use client';

import { motion } from 'framer-motion';

/**
 * Блок «как мы работаем» для главной.
 *
 * Главная состояла из 9 секций, и на всех вместе была ровно одна картинка —
 * постер видео. Правило владельца: на изображениях обязательно люди, потому что
 * «человек в кадре ищет себя». Здесь тот же приём, что уже принят на 27 страницах
 * услуг (ServicePageTemplate → alternating): чередование текст+фото.
 *
 * Вёрстка намеренно повторяет alternating из ServicePageTemplate — чтобы главная
 * и внутренние страницы читались как один сайт.
 */

type Row = {
    chip: string;
    title: string;
    text: string;
    points: string[];
    image: string;
    imageAlt: string;
};

const ROWS: Row[] = [
    {
        chip: 'Шаг 1',
        title: 'Сначала разбираемся, а потом предлагаем',
        text: 'Не начинаем с «давайте запустим таргет». Сначала считаем экономику: сколько стоит клиент сейчас, сколько он приносит и где деньги теряются. Иногда выясняется, что рекламу запускать рано — и мы говорим об этом прямо.',
        points: ['Разбор ниши, спроса и конкурентов', 'Считаем, при какой цене заявки вы в плюсе'],
        image: '/images/services/home-brief.jpg',
        imageAlt: 'Маркетологи Digital Pride обсуждают задачу с клиентом в офисе в Алматы',
    },
    {
        chip: 'Шаг 2',
        title: 'Работаем командой, а не одним подрядчиком',
        text: 'Над проектом работают таргетолог, специалист по контексту, дизайнер и аналитик. Вам не нужно собирать их по отдельности и следить, чтобы они друг друга слышали — это наша забота.',
        points: ['Одна точка входа — ваш проектный менеджер', 'Каналы не конкурируют, а дополняют друг друга'],
        image: '/images/services/home-work.jpg',
        imageAlt: 'Команда маркетингового агентства Digital Pride за работой в Алматы',
    },
    {
        chip: 'Шаг 3',
        title: 'Отчитываемся цифрами, а не «охватами»',
        text: 'Каждую неделю показываем не количество показов, а сколько заявок пришло, сколько стоила каждая и что с ними стало дальше. Если канал не окупается — выключаем его, а не рисуем красивый отчёт.',
        points: ['Сквозная аналитика от клика до продажи', 'Понятный ROMI, а не «вовлечённость»'],
        image: '/images/services/home-result.jpg',
        imageAlt: 'Владелец бизнеса и маркетолог Digital Pride обсуждают результаты в Алматы',
    },
];

export default function HowWeWork() {
    return (
        <section className="py-20 bg-white text-black">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-14 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                        Как мы работаем
                    </h2>
                    <p className="text-gray-500">
                        Без «уникальных методик». Просто понятный порядок работы, который держит
                        деньги под контролем.
                    </p>
                </div>

                <div className="space-y-16 md:space-y-24">
                    {ROWS.map((row, i) => (
                        <div key={i} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={i % 2 === 1 ? 'md:order-2' : ''}
                            >
                                <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-500 bg-red-50 rounded-full px-3 py-1 mb-4">
                                    {row.chip}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
                                    {row.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-4">{row.text}</p>
                                <ul className="space-y-2">
                                    {row.points.map((p, j) => (
                                        <li key={j} className="flex gap-2 text-gray-700">
                                            <span className="text-red-500 font-bold">→</span>
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={i % 2 === 1 ? 'md:order-1' : ''}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={row.image}
                                    alt={row.imageAlt}
                                    loading="lazy"
                                    className="w-full aspect-[4/3] object-cover rounded-2xl border border-gray-200 shadow-xl"
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
