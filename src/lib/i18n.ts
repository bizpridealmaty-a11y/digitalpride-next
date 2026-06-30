export type Locale = 'ru' | 'kk';

export const defaultLocale: Locale = 'ru';

export const locales: Locale[] = ['ru', 'kk'];

/** Common UI strings used across components */
export const ui = {
    ru: {
        // Header nav
        home: 'Главное',
        services: 'Услуги',
        cases: 'Кейсы',
        pricing: 'Цены',
        training: 'Наше обучение',
        blog: 'Блог',
        about: 'О нас',
        contacts: 'Контакты',
        callback: 'Обратный звонок',
        orderCallback: 'Заказать обратный звонок',
        menu: 'Меню',
        showMenu: 'Показать меню',
        openMenu: 'Открыть меню',
        closeMenu: 'Закрыть меню',
        mobileMenu: 'Мобильное меню',
        mainMenu: 'Главное меню',
        threads: 'Threads 🔥',
        threadsFull: '🔥 Threads — Продвижение',

        // Services dropdown
        smmPromo: 'SMM продвижение',
        seoPromo: 'SEO продвижение',
        webDev: 'Разработка сайтов',
        serm: 'Управление репутацией (SERM)',
        strategy: 'Маркетинговая стратегия',
        ppc: 'Контекстная реклама (PPC)',
        targetAds: 'Таргетированная реклама',

        // Footer & CTA
        allRights: '© 2024 Digital Pride. Все права защищены.',
        privacyPolicy: 'Политика конфиденциальности',

        // Common
        readMore: 'Подробнее',
        sendRequest: 'Оставить заявку',
        phone: '+7 (707) 035-77-77',
        minRead: 'мин чтения',
        relatedService: 'Услуга по теме',
        readAlso: 'Читайте также',
        allArticles: '← Все статьи',

        // Hero
        heroTitle: 'Мы — Digital Pride',
        heroSubtitle: 'Маркетинговое агентство полного цикла в Алматы',
        heroCta: 'Обсудить проект',
        heroBadge: 'Top Digital Agency in Kazakhstan',
        heroHeadline: 'Маркетинг, который приносит',
        heroAccent: 'прибыль',
        heroDescription: 'Индивидуальная маркетинговая стратегия для роста вашего бизнеса в Алматы и по всему Казахстану. Мы не просто льем трафик, мы строим предсказуемый поток клиентов.',
        heroAudit: 'Получить бесплатный аудит',
        heroWhatsApp: 'Написать в WhatsApp',
        heroSrOnly: 'Digital Pride — маркетинговое агентство полного цикла в Алматы',
        islandCases: 'Кейсы',
        islandCasesSub: '12 проектов',
        islandServices: 'Услуги',
        islandServicesSub: '7 направлений',
        islandContacts: 'Контакты',
        islandContactsSub: 'Связаться',

        // Benefits (rotating)
        benefits: [
            'Увеличение заявок', 'Рост ROI', 'Масштабирование рекламы',
            'Снижение стоимости лида', 'Рост продаж', 'Упаковка продукта',
            'Аналитика рекламы', 'Четкая маркетинговая стратегия', 'Рост конверсии сайта',
            'Автоматизация заявок', 'Построение воронки продаж', 'Генерация лидов',
            'Контроль рекламного бюджета', 'Оптимизация рекламных кампаний',
            'Привлечение целевой аудитории', 'Системный маркетинг',
            'Запуск рекламы за 24 часа', 'Прозрачная аналитика',
        ] as string[],

        // Contact form
        yourName: 'Ваше имя',
        yourPhone: 'Ваш телефон',
        send: 'Отправить',
        sending: 'Отправляем...',
        thankYou: 'Спасибо! Мы свяжемся с вами.',
    },
    kk: {
        // Header nav
        home: 'Басты',
        services: 'Қызметтер',
        cases: 'Кейстер',
        pricing: 'Бағалар',
        training: 'Біздің оқыту',
        blog: 'Блог',
        about: 'Біз туралы',
        contacts: 'Байланыс',
        callback: 'Кері қоңырау',
        orderCallback: 'Кері қоңырауға тапсырыс беру',
        menu: 'Мәзір',
        showMenu: 'Мәзірді көрсету',
        openMenu: 'Мәзірді ашу',
        closeMenu: 'Мәзірді жабу',
        mobileMenu: 'Мобильді мәзір',
        mainMenu: 'Негізгі мәзір',
        threads: 'Threads 🔥',
        threadsFull: '🔥 Threads — Жарнама',

        // Services dropdown
        smmPromo: 'SMM жарнама',
        seoPromo: 'SEO жылжыту',
        webDev: 'Сайт жасау',
        serm: 'Беделді басқару (SERM)',
        strategy: 'Маркетинг стратегиясы',
        ppc: 'Контекстік жарнама (PPC)',
        targetAds: 'Таргеттелген жарнама',

        // Footer & CTA
        allRights: '© 2024 Digital Pride. Барлық құқықтар қорғалған.',
        privacyPolicy: 'Құпиялылық саясаты',

        // Common
        readMore: 'Толығырақ',
        sendRequest: 'Өтінім қалдыру',
        phone: '+7 (707) 035-77-77',
        minRead: 'мин оқу',
        relatedService: 'Тақырып бойынша қызмет',
        readAlso: 'Тағы оқыңыз',
        allArticles: '← Барлық мақалалар',

        // Hero
        heroTitle: 'Біз — Digital Pride',
        heroSubtitle: 'Алматыдағы толық циклді маркетинг агенттігі',
        heroCta: 'Жобаны талқылау',
        heroBadge: 'Қазақстандағы үздік Digital агенттік',
        heroHeadline: 'Маркетинг, ол',
        heroAccent: 'пайда әкеледі',
        heroDescription: 'Алматыда және бүкіл Қазақстан бойынша бизнесіңіздің өсуіне арналған жеке маркетинг стратегиясы. Біз тек трафик құймаймыз, біз болжамды клиент ағынын құрамыз.',
        heroAudit: 'Тегін аудит алу',
        heroWhatsApp: 'WhatsApp-қа жазу',
        heroSrOnly: 'Digital Pride — Алматыдағы толық циклді маркетинг агенттігі',
        islandCases: 'Кейстер',
        islandCasesSub: '12 жоба',
        islandServices: 'Қызметтер',
        islandServicesSub: '7 бағыт',
        islandContacts: 'Байланыс',
        islandContactsSub: 'Хабарласу',

        // Benefits (rotating)
        benefits: [
            'Өтінімдер көбею', 'ROI өсуі', 'Жарнаманы масштабтау',
            'Лид құнын төмендету', 'Сатылым өсуі', 'Өнімді безендіру',
            'Жарнама аналитикасы', 'Нақты маркетинг стратегиясы', 'Сайт конверсиясын арттыру',
            'Өтінімдерді автоматтандыру', 'Сату воронкасын құру', 'Лидтер генерациясы',
            'Жарнама бюджетін бақылау', 'Жарнама науқандарын оңтайландыру',
            'Мақсатты аудиторияны тарту', 'Жүйелі маркетинг',
            'Жарнаманы 24 сағатта іске қосу', 'Ашық аналитика',
        ] as string[],

        // Contact form
        yourName: 'Сіздің атыңыз',
        yourPhone: 'Сіздің телефоныңыз',
        send: 'Жіберу',
        sending: 'Жіберілуде...',
        thankYou: 'Рахмет! Біз сізбен хабарласамыз.',
    },
} as const;

/** Widened type: each key maps to string (or string[] for benefits) */
export type UiDict = { [K in keyof typeof ui.ru]: (typeof ui.ru)[K] extends readonly string[] ? string[] : string };

/** Get the UI dictionary for a locale */
export function getDict(locale: Locale): UiDict {
    return ui[locale] as unknown as UiDict;
}

/** Determine locale from pathname */
export function getLocaleFromPath(pathname: string): Locale {
    return pathname.startsWith('/kk') ? 'kk' : 'ru';
}

/** Build localized path (always with trailing slash for Netlify) */
export function localizedPath(path: string, locale: Locale): string {
    // Strip any existing /kk prefix
    let clean = path.replace(/^\/kk\/?/, '/').replace(/\/+$/, '') || '';
    // For root, clean is empty string
    if (locale === 'kk') {
        return clean ? `/kk${clean}/` : '/kk/';
    }
    return clean ? `${clean}/` : '/';
}

/** Get the RU equivalent of the current path */
export function toRuPath(pathname: string): string {
    const clean = pathname.replace(/^\/kk\/?/, '/').replace(/\/+$/, '');
    return clean ? `${clean}/` : '/';
}

/** Get the KK equivalent of the current path.
 * Detail pages (blog posts, case studies) have no KK translation, so the
 * language switcher falls back to the KK section listing instead of 404. */
export function toKkPath(pathname: string): string {
    const clean = pathname.replace(/^\/kk\/?/, '/').replace(/\/+$/, '');
    if (!clean) return '/kk/';
    if (/^\/blog\/.+/.test(clean)) return '/kk/blog/';
    if (/^\/cases\/.+/.test(clean)) return '/kk/cases/';
    if (clean === '/sitemap-html') return '/kk/';
    return `/kk${clean}/`;
}
