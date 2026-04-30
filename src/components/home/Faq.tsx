import React from 'react';

const faqs = [
    {
        q: 'Сколько стоит SMM продвижение в Алматы?',
        a: 'Стоимость SMM зависит от ваших целей и текущего состояния проекта. Мы предлагаем комплексные пакеты от 150 000 ₸. В эту стоимость входит стратегия, контент-план, продакшн, копирайтинг и администрирование.',
    },
    {
        q: 'Когда я увижу первые результаты от контекстной рекламы?',
        a: 'Первые заявки могут поступить уже через 24-48 часов после запуска кампаний в Google Ads или Яндекс.Директ. Однако полноценная оптимизация алгоритмов занимает до 14 дней.',
    },
    {
        q: 'Вы даете гарантии на SEO продвижение?',
        a: 'Мы не даем пустых гарантий на «топ-1 за месяц», так как алгоритмы поисковиков постоянно меняются. Но мы гарантируем прозрачный рост целевого органического трафика и позиций по коммерческим запросам в течение 3-6 месяцев.',
    },
    {
        q: 'Работаете ли вы с малым бизнесом?',
        a: 'Да, наша экспертиза охватывает как крупные бренды, так и локальный малый бизнес. Главное условие — готовность к системной работе и партнерскому подходу.',
    },
    {
        q: 'Зачем мне маркетинговая стратегия, если можно просто запустить таргет?',
        a: 'Запуск таргета без стратегии — это вероятность слить бюджет впустую. Стратегия позволяет понять, ЧТО мы продаем, КОМУ мы это продаем, и ПОЧЕМУ они должны купить именно у вас.',
    },
];

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
        },
    })),
};

export default function Faq() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <section className="py-24 bg-zinc-50 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2
                            className="text-3xl md:text-5xl font-extrabold text-black mb-6 tracking-tight"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            Частые <span className="text-red-600">вопросы</span> (FAQ)
                        </h2>
                        <p className="text-lg text-gray-600 font-medium">
                            Всё, что вы хотели знать о работе с нашим агентством.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <details
                                key={idx}
                                className="dp-faq-item group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-red-300 open:border-red-500 open:shadow-lg transition-all duration-300"
                                {...(idx === 0 ? { open: true } : {})}
                            >
                                <summary className="px-6 py-5 cursor-pointer list-none flex justify-between items-center font-bold text-lg text-gray-900 group-open:text-red-600 transition-colors">
                                    <span>{faq.q}</span>
                                    <svg
                                        className="w-5 h-5 flex-shrink-0 ml-4 text-gray-400 group-open:text-red-500 transition-all group-open:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                                        {faq.a}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                        .dp-faq-item summary::-webkit-details-marker { display: none; }
                        .dp-faq-item summary::marker { display: none; content: ''; }
                    `,
                }} />
            </section>
        </>
    );
}
