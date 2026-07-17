import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
    title: 'Алматыда Google Ads контекстік жарнама',
    description: 'Алматыда Google Ads орнату ✦ Іздеу жарнамасы, КМС, YouTube Ads, Performance Max. Алғашқы күннен бастап өтінімдер.',
    alternates: {
        canonical: '/kk/kontekstnaya-reklama-google-almaty',
        languages: { 'ru-KZ': '/kontekstnaya-reklama-google-almaty', 'kk-KZ': '/kk/kontekstnaya-reklama-google-almaty', 'x-default': '/kontekstnaya-reklama-google-almaty' },
    },
    openGraph: {
        title: 'Алматыда Google Ads',
        description: 'Іздеу жарнамасы, КМС, YouTube Ads. Алғашқы күннен бастап өтінімдер.',
        url: '/kk/kontekstnaya-reklama-google-almaty',
    },
};

const icon = (d: string) => <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d}></path></svg>;

export default function GoogleAdsPageKk() {
    return (
        <ServicePageTemplate
            title="Google Ads жарнамасы"
            accentWord="Алматыда"
            subtitle="Google Ads — ыстық сұранысты ұстаудың басты құралы. Біз сіздің өніміңізді дәл қазір іздеп жүрген адамдарға көрсетілетін жарнаманы орнатамыз."
            description="Google Қазақстандағы барлық іздеу сұраныстарының 90%-ын өңдейді. Біз сіздің ұсынысыңызды іздеу жарнамасы, контексттік-медиалық желі (КМС), YouTube Ads және Performance Max арқылы алғашқы позицияларға шығарамыз. Тереңдетілген семантика жинау, мұқият минусация және күнделікті ставкаларды оңтайландыру максималды ROI қамтамасыз етеді."
            stats={[
                { value: '×4', label: 'жарнама өтелімі' },
                { value: '−30%', label: 'клик бағасы' },
                { value: 'ТОП-3', label: 'Google-дегі орын' },
                { value: '5 күн', label: 'іске қосуға дейін' },
            ]}
            painSolution={{
                painTitle: 'Әдеттегідей',
                winTitle: 'Digital Pride-пен',
                pains: [
                    'Клик бар, ал қоңырау жоқ',
                    'Бюджет мақсатсыз сұраныстарға кетеді',
                    'Хабарландырулар Google іздеуінде байқалмайды',
                    'Конверсия аналитикасы жоқ',
                ],
                wins: [
                    'Нишаңызға семантика мен минус-сөздер',
                    'Тек мақсатты трафикке төлем',
                    'Google топындағы сататын хабарландырулар',
                    'Өтінім мен бағасы бойынша есептер',
                ],
            }}
            alternatingTitle="Клиент әкелетін Google-жарнама"
            alternatingSubtitle="Іздеу мен КМС-ті сізді дәл сұраныс сәтінде табатындай баптаймыз."
            alternating={[
                {
                    chip: 'Іздеу',
                    title: 'Сұраныс сәтіндегі көрсетілім',
                    text: 'Семантиканы жинап, минус-сөздерді тазалап, дәл сіздің клиенттеріңіз басатын хабарландырулар жазамыз.',
                    points: ['Іздеу, КМС, ретаргет', 'Нишаға дәл семантика'],
                    image: '/images/services/kontekstnaya-reklama-almaty-alt-1.jpg',
                    imageAlt: 'Google Ads баптау — Digital Pride',
                },
                {
                    chip: 'Нәтиже',
                    title: 'Клик емес, өтінім',
                    text: 'Аналитиканы баптап, науқандарды өтінім бағасы бойынша оңтайландырамыз — жарнама өзін ақтасын.',
                    points: ['Сквозной аналитика', 'Өтінім бағасын оңтайландыру'],
                    image: '/images/services/kontekstnaya-reklama-almaty-alt-2.jpg',
                    imageAlt: 'Google Ads аналитикасы — Digital Pride',
                },
            ]}
            metricBand={{
                title: 'Өзін ақтайтын Google Ads',
                subtitle: 'Дәл науқандар мен аналитика кликтерді өтінімге айналдырады.',
                image: '/images/services/kontekstnaya-reklama-google-almaty-hero.jpg',
                stats: [
                    { value: '×4', label: 'өтелім' },
                    { value: '−30%', label: 'клик бағасы' },
                    { value: '5 күн', label: 'старт' },
                ],
            }}
            features={[
                { title: 'Іздеу жарнамасы', description: 'Сіздің жарнамаларыңыз Google-да кілт сұраныстар бойынша ТОП-4-те. Тек кликтер үшін төлейсіз.', icon: icon('M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z') },
                { title: 'Performance Max', description: 'Google-дың AI-оңтайландыруы бар ақылды науқандары барлық арналарда бір уақытта жұмыс істейді.', icon: icon('M13 10V3L4 14h7v7l9-11h-7z') },
                { title: 'YouTube Ads', description: 'YouTube бейнелерінен алдын және кезінде максималды қамту үшін бейнежарнама.', icon: icon('M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z') },
                { title: 'Ремаркетинг', description: 'Сайтқа кіріп, өтінім қалдырмаған келушілерді КМС-тегі баннерлер арқылы қайтарамыз.', icon: icon('M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15') },
                { title: 'Семантика жинау', description: '1000+ кілт сөз, кластерлеу, таза мақсатты трафик үшін минус-сөздер.', icon: icon('M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2') },
                { title: 'Толық аналитика', description: 'Google Analytics 4 + CRM: кликтен сатуға дейінгі клиент жолын көреміз.', icon: icon('M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z') },
            ]}
            process={[
                { step: '01', title: 'Аудит және семантика', description: 'Тауашаны талдаймыз, 1000+ кілт сөз жинаймыз, кластерлейміз.' },
                { step: '02', title: 'Аккаунт құрылымы', description: 'Науқандардың, жарнама топтарының және кеңейтімдердің дұрыс құрылымын жасаймыз.' },
                { step: '03', title: 'Іске қосу', description: 'Жарнамалар жазамыз, кеңейтімдерді баптаймыз, науқандарды іске қосамыз.' },
                { step: '04', title: 'Оңтайландыру', description: 'Күн сайын ставкаларды түзетеміз, минусация жасаймыз, жарнамаларды тестілейміз.' },
                { step: '05', title: 'Масштабтау', description: 'Семантиканы кеңейтеміз, Performance Max және YouTube-ды қосамыз.' },
            ]}
            faq={[
                { q: 'Google Ads-та бір клик қанша тұрады?', a: 'Қазақстанда кликтің орташа құны тауашаға байланысты 50-ден 700 ₸ дейін. Біз лидтің минималды құнына оңтайландырамыз.' },
                { q: 'Google Ads Яндекс.Директтен жақсы ма?', a: 'Google Қазақстанда іздеу нарығының 90%-ын алады. Максималды қамту үшін екі арнаны да ұсынамыз, бірақ Google — басымдық.' },
                { q: 'Ең аз бюджет қандай?', a: 'Тестілеу үшін жарнама бюджетіне айына 200 000 ₸-ден ұсынамыз. Тұрақты ағын үшін — айына 400 000 ₸-ден.' },
                { q: 'Performance Max дегеніміз не?', a: 'Бұл Google-дың барлық арналарында жарнама көрсету үшін AI пайдаланатын жаңа науқан түрі: іздеу, YouTube, КМС, Gmail, Maps.' },
            ]}
            seoContent={[
                {
                    title: 'Алматыда Google Ads — іздеуде ыстық сұранысты ұстау',
                    text: <>
                        <p>Google Қазақстандағы барлық іздеу сұраныстарының 90%-дан астамын өңдейді — бұл сіздің өніміңізді немесе қызметіңізді дәл қазір іздеп жүрген адамдарды ұстаудың басты арнасы. Google Ads сіздің бизнесіңіздің Алматыдағы іздеу нәтижелерінде SEO нәтижелерін күтпей, іске қосылған күні-ақ алғашқы позицияларда пайда болуына мүмкіндік береді.</p>
                        <p>Digital Pride Алматы бизнестері үшін Google Ads орнату мен жүргізуге маманданады: ыстық сұраныстар үшін іздеу жарнамасы, Google-дың барлық арналарын (іздеу, YouTube, КМС, Gmail, Maps) AI-оңтайландырумен қамтитын Performance Max, алғашқы кіруден өтінім қалдырмағандарды қайтару үшін ремаркетинг. Біз 1000+ кілт сөзден тұратын семантикалық ядро жинаймыз, мақсатсыз трафикті мұқият минусациялаймыз және ставкаларды күн сайын оңтайландырамыз.</p>
                        <p>Нарықты толық қамту үшін Google Ads-ты <a href="/kk/kontekstnaya-reklama-yandex-almaty/" className="text-red-500 hover:underline">Яндекс.Директтегі</a> және <a href="/kk/target-reklama-instagram-almaty/" className="text-red-500 hover:underline">Instagram-дағы</a> жарнамамен толықтырыңыз.</p>
                    </>
                },
            ]}
        />
    );
}
