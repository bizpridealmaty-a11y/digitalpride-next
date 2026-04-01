import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Контекстная реклама Google Ads в Алматы',
    description: 'Настройка Google Ads в Алматы ✦ Поисковая реклама, КМС, YouTube Ads, Performance Max. Заявки с первого дня. Сквозная аналитика. Прозрачные отчёты.',
    keywords: 'google ads алматы, контекстная реклама google алматы, реклама в гугл казахстан, google adwords алматы, настройка google ads, ppc google алматы',
    alternates: { canonical: '/kontekstnaya-reklama-google-almaty' },
    openGraph: {
        title: 'Google Ads в Алматы — Digital Pride',
        description: 'Поисковая реклама, КМС, YouTube Ads. Заявки с первого дня запуска.',
        url: '/kontekstnaya-reklama-google-almaty',
    },
};

const icon = (d: string) => <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d}></path></svg>;

export default function GoogleAdsPage() {
    return (
        <ServicePageTemplate
            title="Google Ads"
            accentWord="реклама"
            subtitle="Google Ads — главный инструмент для перехвата горячего спроса. Мы настраиваем рекламу, которая показывается людям, уже ищущим ваш продукт прямо сейчас."
            description="Google обрабатывает 90% всех поисковых запросов в Казахстане. Мы выводим ваше предложение на первые позиции через поисковую рекламу, контекстно-медийную сеть (КМС), YouTube Ads и Performance Max. Глубокий сбор семантики, тщательная минусация и ежедневная оптимизация ставок обеспечивают максимальный ROI."
            features={[
                { title: 'Поисковая реклама', description: 'Ваши объявления в ТОП-4 Google по ключевым запросам. Платите только за клики.', icon: icon('M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z') },
                { title: 'Performance Max', description: 'Умные кампании Google с AI-оптимизацией по всем каналам одновременно.', icon: icon('M13 10V3L4 14h7v7l9-11h-7z') },
                { title: 'YouTube Ads', description: 'Видеореклама перед и во время YouTube-видео для максимального охвата.', icon: icon('M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z') },
                { title: 'Ремаркетинг', description: 'Возвращаем посетителей сайта, которые не оставили заявку, через баннеры в КМС.', icon: icon('M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15') },
                { title: 'Сбор семантики', description: '1000+ ключевых слов, кластеризация, минус-слова для чистого целевого трафика.', icon: icon('M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2') },
                { title: 'Сквозная аналитика', description: 'Google Analytics 4 + CRM: видим путь клиента от клика до продажи.', icon: icon('M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z') },
            ]}
            process={[
                { step: '01', title: 'Аудит и семантика', description: 'Анализируем нишу, собираем 1000+ ключевых слов, кластеризуем.' },
                { step: '02', title: 'Структура аккаунта', description: 'Создаём правильную структуру кампаний, групп объявлений и расширений.' },
                { step: '03', title: 'Запуск', description: 'Пишем объявления, настраиваем расширения, запускаем кампании.' },
                { step: '04', title: 'Оптимизация', description: 'Ежедневно корректируем ставки, минусуем, тестируем объявления.' },
                { step: '05', title: 'Масштабирование', description: 'Расширяем семантику, подключаем Performance Max и YouTube.' },
            ]}
            faq={[
                { q: 'Сколько стоит клик в Google Ads?', a: 'В Казахстане средняя стоимость клика — от 50 до 700 ₸ в зависимости от ниши. Мы оптимизируем для минимальной стоимости лида.' },
                { q: 'Google Ads лучше Яндекс.Директ?', a: 'Google занимает 90% поискового рынка в Казахстане. Для максимального охвата рекомендуем оба канала, но Google — приоритет.' },
                { q: 'Какой минимальный бюджет?', a: 'Рекомендуем от 200 000 ₸/мес на рекламный бюджет для тестов. Для стабильного потока — от 400 000 ₸/мес.' },
                { q: 'Что такое Performance Max?', a: 'Это новый тип кампаний Google, который использует AI для показа рекламы во всех каналах Google: поиск, YouTube, КМС, Gmail, Maps.' },
            ]}
            seoContent={[
                {
                    title: 'Google Ads в Алматы — перехват горячего спроса в поиске',
                    text: <>
                        <p>Google обрабатывает более 90% всех поисковых запросов в Казахстане — это главный канал для перехвата людей, которые прямо сейчас ищут ваш продукт или услугу. Google Ads позволяет вашему бизнесу появиться на первых позициях поисковой выдачи в Алматы уже в день запуска, не дожидаясь результатов SEO.</p>
                        <p>Digital Pride специализируется на настройке и ведении Google Ads для бизнесов Алматы: поисковая реклама для горячих запросов, Performance Max для AI-оптимизированного охвата всех каналов Google (поиск, YouTube, КМС, Gmail, Maps), ремаркетинг для возврата тех, кто не оставил заявку с первого визита. Мы собираем семантическое ядро из 1000+ ключевых слов, тщательно минусуем нецелевой трафик и оптимизируем ставки ежедневно.</p>
                        <p>Для полного охвата рынка дополните Google Ads рекламой в <a href="/kontekstnaya-reklama-yandex-almaty" className="text-red-500 hover:underline">Яндекс.Директ</a> и <a href="/target-reklama-instagram-almaty" className="text-red-500 hover:underline">Instagram</a>.</p>
                    </>
                },
            ]}
        />
    );
}
