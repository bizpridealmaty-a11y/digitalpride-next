export interface CaseMetric {
    label: string;
    before: number;
    after: number;
    suffix?: string;
}

export interface ChartPoint {
    month: string;
    value: number;
}

export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    client: string;
    categories: string[];
    coverImage: string;
    hoverDescription: string;
    hoverMetrics: { label: string; value: string }[];
    content: {
        problem: string;
        solution: string[];
        results: string;
        fullDescription: string;
    };
    adPlatform: 'yandex' | 'google' | 'facebook';
    adScreenshot: string;
    barMetrics: CaseMetric[];
    chartData: ChartPoint[];
    timeline: string;
}

export const casesData: CaseStudy[] = [
    {
        id: "case-1",
        slug: "vinil-i-vino",
        title: "Vinil I Vino",
        client: "Ресторан Vinil I Vino",
        categories: ["SMM", "BRANDING"],
        coverImage: "/images/case1.255cfc5308a1a095855ea220b16b741b134.jpg",
        hoverDescription: "Комплексное продвижение ресторана премиум-класса. Увеличение бронирований через Instagram на 150%.",
        hoverMetrics: [
            { label: "Рост заявок", value: "+150%" },
            { label: "Охваты", value: "2M+" }
        ],
        content: {
            problem: "Низкая узнаваемость нового ресторана, отсутствие стабильного потока бронирований. Конкурентная среда в Алматы крайне насыщенная — десятки ресторанов премиум-класса борются за внимание одной и той же аудитории.",
            solution: [
                "Разработка уникального визуального стиля и Tone of Voice для Instagram",
                "Запуск таргетированной рекламы на аудиторию 25-45 лет с высоким доходом",
                "Организация коллабораций с популярными food-блогерами Алматы",
                "Внедрение системы UGC-контента от гостей ресторана"
            ],
            results: "За 3 месяца работы добились полной посадки каждые выходные. Органический охват профиля вырос до 2 миллионов в месяц. Бронирования через Instagram увеличились на 150%, а средний чек гостей из соцсетей оказался на 25% выше, чем у остальных.",
            fullDescription: "Для ресторана Vinil I Vino была разработана полноценная SMM-стратегия, включающая профессиональный продакшн с фото- и видеосъемками блюд в атмосферном интерьере, контент-маркетинг с историями шеф-повара и performance-таргетинг с оптимизацией на бронирования."
        },
        adPlatform: "facebook",
        adScreenshot: "/images/ad-facebook-ads.png",
        barMetrics: [
            { label: "Бронирования/мес", before: 80, after: 200, suffix: "" },
            { label: "Охват Instagram", before: 150000, after: 2000000, suffix: "" },
            { label: "Средний чек, ₸", before: 12000, after: 15000, suffix: "₸" }
        ],
        chartData: [
            { month: "Янв", value: 80 }, { month: "Фев", value: 95 },
            { month: "Мар", value: 120 }, { month: "Апр", value: 155 },
            { month: "Май", value: 180 }, { month: "Июн", value: 200 }
        ],
        timeline: "6 месяцев"
    },
    {
        id: "case-2",
        slug: "bao-bao",
        title: "BAO BAO",
        client: "Паназиатское бистро BAO BAO",
        categories: ["SMM"],
        coverImage: "/images/case2.255cfc5308a1a095855ea220b16b741b134.jpg",
        hoverDescription: "Упаковка соцсетей и запуск таргетированной рекламы с окупаемостью (ROMI) 320%.",
        hoverMetrics: [
            { label: "ROMI", value: "320%" },
            { label: "Цена лида", value: "-45%" }
        ],
        content: {
            problem: "Слабая активность в соцсетях, высокая стоимость привлечения гостя. Доставка приносила минимум выручки, а конкуренция среди паназиатских заведений в Алматы росла каждый месяц.",
            solution: [
                "Создание яркого визуального контента с акцентом на подачу блюд",
                "Запуск акций и интерактивов для увеличения вовлечённости",
                "Настройка таргета на радиус 5 км от ресторана",
                "Интеграция Instagram Shopping для заказа доставки"
            ],
            results: "Снижение CPA на 45%, кратный рост выручки с доставки. ROMI рекламных кампаний достиг 320%. Количество подписчиков выросло с 2 000 до 18 000 за 4 месяца.",
            fullDescription: "Команда Digital Pride взяла на себя полное управление соцсетями проекта BAO BAO. Мы изменили Tone of Voice, внедрили креативные рубрики и запустили лидогенерацию через квиз-воронки и акции в Stories."
        },
        adPlatform: "facebook",
        adScreenshot: "/images/ad-facebook-ads.png",
        barMetrics: [
            { label: "ROMI, %", before: 80, after: 320, suffix: "%" },
            { label: "CPA, ₸", before: 4500, after: 2475, suffix: "₸" },
            { label: "Подписчики", before: 2000, after: 18000, suffix: "" }
        ],
        chartData: [
            { month: "Янв", value: 80 }, { month: "Фев", value: 120 },
            { month: "Мар", value: 190 }, { month: "Апр", value: 250 },
            { month: "Май", value: 290 }, { month: "Июн", value: 320 }
        ],
        timeline: "4 месяца"
    },
    {
        id: "case-3",
        slug: "hacker",
        title: "Фирменный салон немецких кухонь Hacker",
        client: "Hacker",
        categories: ["SEO", "SITE"],
        coverImage: "/images/hacker.3e12f445d37bed70255f390787e8bf93134.png",
        hoverDescription: "SEO-продвижение сайта в топ-3 Google по высокочастотным коммерческим запросам.",
        hoverMetrics: [
            { label: "Трафик", value: "+400%" },
            { label: "Позиции", value: "Топ-3" }
        ],
        content: {
            problem: "Отсутствие органического трафика, сайт находился за пределами топ-50 по основным коммерческим запросам. Конкуренты-импортёры кухонной мебели доминировали в выдаче Google и Яндекс.",
            solution: [
                "Полный технический аудит и устранение 200+ ошибок",
                "Сбор семантического ядра из 1 500 запросов с кластеризацией",
                "Оптимизация структуры каталога и создание SEO-посадочных",
                "Наращивание качественной ссылочной массы через тематические площадки"
            ],
            results: "80% горячих ключей вышли в топ-10 Яндекса и Google. Органический трафик вырос на 400% за 8 месяцев. Количество SEO-лидов увеличилось с 5 до 35 в месяц.",
            fullDescription: "Сложная ниша премиум-кухонь требовала ювелирной работы с SEO. Мы переработали каталог, написали экспертный контент и нарастили качественную ссылочную массу через строительные порталы и дизайн-площадки."
        },
        adPlatform: "google",
        adScreenshot: "/images/ad-google-ads.png",
        barMetrics: [
            { label: "Орг. трафик/мес", before: 800, after: 4000, suffix: "" },
            { label: "Позиции в топ-10", before: 12, after: 95, suffix: "%" },
            { label: "SEO-лиды/мес", before: 5, after: 35, suffix: "" }
        ],
        chartData: [
            { month: "Янв", value: 800 }, { month: "Фев", value: 1100 },
            { month: "Мар", value: 1600 }, { month: "Апр", value: 2200 },
            { month: "Май", value: 2900 }, { month: "Июн", value: 4000 }
        ],
        timeline: "8 месяцев"
    },
    {
        id: "case-4",
        slug: "miele",
        title: "Miele бытовая техника",
        client: "Официальный дилер Miele",
        categories: ["SEO", "CONTEXT"],
        coverImage: "/images/miele.3e12f445d37bed70255f390787e8bf93134.png",
        hoverDescription: "Мультиканальный performance-маркетинг: контекст + SEO для премиум сегмента.",
        hoverMetrics: [
            { label: "Конверсия", value: "4.2%" },
            { label: "Выручка", value: "x3" }
        ],
        content: {
            problem: "Низкая конверсия сайта при дорогом трафике из контекста. Рекламный бюджет тратился неэффективно — CPA составлял 15 000 ₸, а конверсия не превышала 1.2%.",
            solution: [
                "Реструктуризация рекламных кампаний Google Ads по SKU-модели",
                "Настройка сквозной аналитики Roistat + CRM",
                "Внедрение Smart Bidding стратегий с оптимизацией на покупку",
                "Редизайн посадочных страниц с фокусом на UX/UI"
            ],
            results: "Утроение продаж флагманских моделей. Конверсия сайта выросла с 1.2% до 4.2%. ROMI составил 580% — каждый вложенный тенге приносил 5.8 тенге выручки.",
            fullDescription: "Техника Miele продается через экспертность и доверие. Мы настроили гиперсегментированные рекламные кампании на уровне отдельных моделей и оптимизировали посадочные страницы, увеличив время на сайте в 2 раза."
        },
        adPlatform: "google",
        adScreenshot: "/images/ad-google-ads.png",
        barMetrics: [
            { label: "Конверсия, %", before: 1.2, after: 4.2, suffix: "%" },
            { label: "CPA, ₸", before: 15000, after: 5200, suffix: "₸" },
            { label: "Выручка, млн ₸", before: 8, after: 24, suffix: "М" }
        ],
        chartData: [
            { month: "Янв", value: 8 }, { month: "Фев", value: 10 },
            { month: "Мар", value: 13 }, { month: "Апр", value: 17 },
            { month: "Май", value: 21 }, { month: "Июн", value: 24 }
        ],
        timeline: "6 месяцев"
    },
    {
        id: "case-5",
        slug: "hyundai",
        title: "Сеть автосалонов Hyundai",
        client: "Hyundai Центр",
        categories: ["CONTEXT", "ANALYTICS"],
        coverImage: "/images/hyundai.3e12f445d37bed70255f390787e8bf93134.png",
        hoverDescription: "Генерация целевых лидов на тест-драйв с помощью Google Ads и Яндекс.Директ.",
        hoverMetrics: [
            { label: "Лиды", value: "600/мес" },
            { label: "CPA", value: "-30%" }
        ],
        content: {
            problem: "Нестабильный поток заявок на покупку авто, отсутствие понимания какие каналы приносят реальные продажи. Конверсия из лида в продажу не превышала 3%.",
            solution: [
                "Полная настройка call-трекинга и сквозной аналитики",
                "Создание квиз-лендингов для каждой модели авто",
                "Построение автоворонки: лид → звонок → тест-драйв → продажа",
                "Оптимизация рекламных кампаний по CPA в Google Ads и Яндекс.Директ"
            ],
            results: "Стабильное перевыполнение плана продаж автосалоном на 20%. Количество целевых лидов выросло до 600 в месяц. Конверсия из лида в продажу увеличилась с 3% до 8%.",
            fullDescription: "Для сети автосалонов была выстроена плотная performance-структура с детализацией до ключевого слова. Каждый канал отслеживался от клика до выезда из салона, что позволило точно знать стоимость проданного авто в разрезе кампаний."
        },
        adPlatform: "yandex",
        adScreenshot: "/images/ad-yandex-direct.png",
        barMetrics: [
            { label: "Лиды/мес", before: 200, after: 600, suffix: "" },
            { label: "CPA, ₸", before: 8500, after: 5950, suffix: "₸" },
            { label: "Конверсия в продажу, %", before: 3, after: 8, suffix: "%" }
        ],
        chartData: [
            { month: "Янв", value: 200 }, { month: "Фев", value: 280 },
            { month: "Мар", value: 350 }, { month: "Апр", value: 430 },
            { month: "Май", value: 520 }, { month: "Июн", value: 600 }
        ],
        timeline: "6 месяцев"
    },
    {
        id: "case-6",
        slug: "dental-smile",
        title: "Стоматология Dental Smile",
        client: "Стоматологическая клиника Dental Smile",
        categories: ["CONTEXT", "SEO"],
        coverImage: "/images/case-dental.png",
        hoverDescription: "Рост первичных пациентов на 240% через связку контекстной рекламы и SEO.",
        hoverMetrics: [
            { label: "Пациенты", value: "+240%" },
            { label: "ROI", value: "520%" }
        ],
        content: {
            problem: "Клиника открылась 6 месяцев назад и не могла набрать стабильный поток первичных пациентов. Запись была заполнена на 30%, при этом клиника вложила серьёзные средства в оборудование и персонал.",
            solution: [
                "Аудит и перезапуск рекламных кампаний в Яндекс.Директ с разделением по услугам (имплантация, виниры, отбеливание)",
                "SEO-продвижение по медицинским запросам с экспертными статьями врачей",
                "Настройка геотаргетинга на радиус 10 км от клиники",
                "Подключение онлайн-записи и отслеживание через CRM"
            ],
            results: "Количество первичных пациентов увеличилось на 240% за 5 месяцев. Загрузка кресел достигла 92%. ROI рекламных кампаний составил 520%. Средний чек первичного пациента — 85 000 ₸.",
            fullDescription: "Стоматология — одна из самых конкурентных ниш в контекстной рекламе. Мы применили стратегию микросегментации: каждая услуга получила отдельную кампанию, посадочную страницу и уникальное торговое предложение. Параллельно запустили SEO с экспертным контентом от врачей клиники, что дало долгосрочный органический трафик."
        },
        adPlatform: "yandex",
        adScreenshot: "/images/ad-yandex-direct.png",
        barMetrics: [
            { label: "Первичные пациенты/мес", before: 25, after: 85, suffix: "" },
            { label: "Загрузка кресел, %", before: 30, after: 92, suffix: "%" },
            { label: "ROI, %", before: 120, after: 520, suffix: "%" }
        ],
        chartData: [
            { month: "Мар", value: 25 }, { month: "Апр", value: 38 },
            { month: "Май", value: 52 }, { month: "Июн", value: 65 },
            { month: "Июл", value: 78 }, { month: "Авг", value: 85 }
        ],
        timeline: "5 месяцев"
    },
    {
        id: "case-7",
        slug: "alma-flowers",
        title: "Alma Flowers",
        client: "Сеть цветочных магазинов Alma Flowers",
        categories: ["SMM", "BRANDING"],
        coverImage: "/images/case-flowers.png",
        hoverDescription: "Полная упаковка бренда и рост продаж через Instagram на 180%.",
        hoverMetrics: [
            { label: "Продажи", value: "+180%" },
            { label: "Подписчики", value: "45K" }
        ],
        content: {
            problem: "Бренд не имел узнаваемого визуального стиля. Instagram аккаунт вёлся хаотично, без стратегии. Продажи через соцсети составляли менее 10% от общей выручки.",
            solution: [
                "Разработка полной айдентики бренда: логотип, фирменные цвета, шрифты",
                "Создание контент-стратегии с рубрикатором и редакционным планом",
                "Запуск таргетированной рекламы в Instagram с Look-alike аудиториями",
                "Внедрение чат-бота для автоматизации приёма заказов через Direct"
            ],
            results: "Рост продаж через Instagram на 180%. Количество подписчиков увеличилось с 3 000 до 45 000. Доля онлайн-продаж выросла с 10% до 45% от общей выручки.",
            fullDescription: "Для Alma Flowers мы создали полноценную бренд-экосистему. Новая айдентика задала премиальный тон, контент-стратегия обеспечила стабильный поток подписчиков, а таргетированная реклама конвертировала аудиторию в покупателей. Особый успех показал чат-бот, который обрабатывал до 70% входящих заказов без участия менеджера."
        },
        adPlatform: "facebook",
        adScreenshot: "/images/ad-facebook-ads.png",
        barMetrics: [
            { label: "Продажи через Instagram, шт/мес", before: 40, after: 112, suffix: "" },
            { label: "Подписчики", before: 3000, after: 45000, suffix: "" },
            { label: "Доля онлайн-продаж, %", before: 10, after: 45, suffix: "%" }
        ],
        chartData: [
            { month: "Янв", value: 40 }, { month: "Фев", value: 55 },
            { month: "Мар", value: 68 }, { month: "Апр", value: 82 },
            { month: "Май", value: 98 }, { month: "Июн", value: 112 }
        ],
        timeline: "6 месяцев"
    },
    {
        id: "case-8",
        slug: "kazlogistics",
        title: "KazLogistics",
        client: "Транспортно-логистическая компания KazLogistics",
        categories: ["SEO", "SITE"],
        coverImage: "/images/case-logistics.png",
        hoverDescription: "Разработка корпоративного сайта и SEO-продвижение для B2B логистики.",
        hoverMetrics: [
            { label: "Трафик", value: "+350%" },
            { label: "B2B лиды", value: "120/мес" }
        ],
        content: {
            problem: "Устаревший сайт на WordPress с минимальным функционалом и нулевым SEO. Клиенты не могли найти компанию через поиск. 90% заявок приходили через холодные звонки.",
            solution: [
                "Разработка нового корпоративного сайта с калькулятором стоимости доставки",
                "Создание посадочных страниц под ключевые направления перевозок",
                "SEO-оптимизация под B2B-запросы: грузоперевозки, карго, логистика Казахстан",
                "Интеграция с CRM-системой для автоматической обработки заявок"
            ],
            results: "Органический трафик вырос на 350%. Количество B2B-лидов через сайт достигло 120 в месяц. Средний объём контракта — 2.5 млн ₸. Стоимость привлечения клиента снизилась на 60%.",
            fullDescription: "B2B-маркетинг в логистике требует точности и системности. Мы создали сайт, который не только привлекает трафик, но и конвертирует его в качественные заявки. Калькулятор стоимости стал главным конверсионным элементом — 40% посетителей взаимодействовали с ним."
        },
        adPlatform: "google",
        adScreenshot: "/images/ad-google-ads.png",
        barMetrics: [
            { label: "Орг. трафик/мес", before: 500, after: 2250, suffix: "" },
            { label: "B2B лиды/мес", before: 15, after: 120, suffix: "" },
            { label: "Ср. контракт, млн ₸", before: 1.2, after: 2.5, suffix: "М" }
        ],
        chartData: [
            { month: "Янв", value: 500 }, { month: "Фев", value: 720 },
            { month: "Мар", value: 980 }, { month: "Апр", value: 1350 },
            { month: "Май", value: 1800 }, { month: "Июн", value: 2250 }
        ],
        timeline: "7 месяцев"
    },
    {
        id: "case-9",
        slug: "beauty-lab",
        title: "Beauty Lab",
        client: "Салон красоты Beauty Lab",
        categories: ["SMM", "CONTEXT"],
        coverImage: "/images/case-beauty.png",
        hoverDescription: "Комплексное digital-продвижение салона красоты: SMM + контекст = загрузка 95%.",
        hoverMetrics: [
            { label: "Загрузка", value: "95%" },
            { label: "CPA", value: "1 200₸" }
        ],
        content: {
            problem: "Загрузка салона составляла 40%. Мастера простаивали в будние дни. Клиенты не возвращались — отсутствовала система удержания и коммуникации с базой.",
            solution: [
                "Создание привлекательного Instagram-профиля с реальными работами мастеров",
                "Запуск таргетированной рекламы на записи к конкретным мастерам",
                "Настройка контекстной рекламы в Яндекс.Директ по гео-запросам",
                "Внедрение программы лояльности и автоматических напоминаний через WhatsApp"
            ],
            results: "Загрузка салона выросла с 40% до 95%. CPA составил всего 1 200 ₸ при среднем чеке 15 000 ₸. Доля повторных клиентов увеличилась с 20% до 65%.",
            fullDescription: "Beauty Lab — это история о том, как правильная связка SMM и performance-маркетинга может полностью загрузить бьюти-бизнес. Мы не просто привлекали новых клиентов — мы выстроили систему удержания, которая превращала разовых посетителей в постоянных гостей."
        },
        adPlatform: "yandex",
        adScreenshot: "/images/ad-yandex-direct.png",
        barMetrics: [
            { label: "Загрузка, %", before: 40, after: 95, suffix: "%" },
            { label: "CPA, ₸", before: 4800, after: 1200, suffix: "₸" },
            { label: "Повторные клиенты, %", before: 20, after: 65, suffix: "%" }
        ],
        chartData: [
            { month: "Фев", value: 40 }, { month: "Мар", value: 52 },
            { month: "Апр", value: 65 }, { month: "Май", value: 78 },
            { month: "Июн", value: 88 }, { month: "Июл", value: 95 }
        ],
        timeline: "5 месяцев"
    },
    {
        id: "case-10",
        slug: "technodom-partner",
        title: "ТехноДом Партнёр",
        client: "Партнёр сети электроники ТехноДом",
        categories: ["CONTEXT", "ANALYTICS"],
        coverImage: "/images/case-electronics.png",
        hoverDescription: "Масштабирование контекстной рекламы с 200 до 3 000 заказов в месяц.",
        hoverMetrics: [
            { label: "Заказы", value: "3 000/мес" },
            { label: "ROAS", value: "780%" }
        ],
        content: {
            problem: "Крупный интернет-магазин электроники генерировал только 200 онлайн-заказов в месяц при каталоге из 15 000 SKU. Рекламный бюджет расходовался на нерентабельные категории товаров.",
            solution: [
                "Полная реструктуризация Google Ads: создание 500+ кампаний по категориям",
                "Настройка динамического ремаркетинга с персонализированными креативами",
                "Внедрение системы автоматических ставок на базе ROAS-целей",
                "Подключение Google Merchant Center и запуск Performance Max кампаний"
            ],
            results: "Количество онлайн-заказов выросло с 200 до 3 000 в месяц. ROAS составил 780%. Стоимость привлечения заказа снизилась с 5 500 ₸ до 1 800 ₸.",
            fullDescription: "Для e-commerce с большим каталогом ключевой подход — автоматизация и data-driven оптимизация. Мы создали систему из 500+ кампаний, каждая из которых автоматически оптимизировалась по ROAS. Performance Max кампании обеспечили дополнительные 30% конверсий из ранее не охваченных каналов."
        },
        adPlatform: "google",
        adScreenshot: "/images/ad-google-ads.png",
        barMetrics: [
            { label: "Заказы/мес", before: 200, after: 3000, suffix: "" },
            { label: "ROAS, %", before: 180, after: 780, suffix: "%" },
            { label: "CPA, ₸", before: 5500, after: 1800, suffix: "₸" }
        ],
        chartData: [
            { month: "Янв", value: 200 }, { month: "Фев", value: 450 },
            { month: "Мар", value: 850 }, { month: "Апр", value: 1400 },
            { month: "Май", value: 2200 }, { month: "Июн", value: 3000 }
        ],
        timeline: "6 месяцев"
    },
    {
        id: "case-11",
        slug: "arman-group",
        title: "Arman Group Недвижимость",
        client: "Застройщик Arman Group",
        categories: ["SEO", "CONTEXT"],
        coverImage: "/images/case-realestate.png",
        hoverDescription: "Лидогенерация для застройщика: 150 целевых заявок в месяц на квартиры.",
        hoverMetrics: [
            { label: "Лиды", value: "150/мес" },
            { label: "Продажи", value: "+65%" }
        ],
        content: {
            problem: "Застройщик выводил на рынок новый ЖК бизнес-класса в Алматы. Необходим стабильный поток целевых заявок от покупателей с бюджетом от 30 млн ₸. Конкуренция за внимание покупателей среди застройщиков — одна из самых высоких.",
            solution: [
                "Создание квиз-лендинга с подбором планировки и расчётом ипотеки",
                "Запуск контекстной рекламы в Google Ads по целевым запросам о покупке",
                "SEO-продвижение по запросам «купить квартиру Алматы бизнес-класс»",
                "Настройка CRM-воронки с автоматическими сценариями дожима"
            ],
            results: "Стабильный поток из 150 целевых заявок в месяц. Конверсия из заявки в просмотр квартиры — 35%. Продажи выросли на 65% за квартал. Средняя сделка — 42 млн ₸.",
            fullDescription: "Маркетинг недвижимости бизнес-класса — это не массовый охват, а точечная работа с платёжеспособной аудиторией. Мы выстроили воронку, которая квалифицировала каждый лид до звонка менеджера. Квиз-лендинг стал главным инструментом — он не только собирал контакты, но и определял бюджет, предпочтения по планировке и срочность покупки."
        },
        adPlatform: "google",
        adScreenshot: "/images/ad-google-ads.png",
        barMetrics: [
            { label: "Заявки/мес", before: 35, after: 150, suffix: "" },
            { label: "Конверсия в просмотр, %", before: 12, after: 35, suffix: "%" },
            { label: "Продажи, млн ₸", before: 280, after: 462, suffix: "М" }
        ],
        chartData: [
            { month: "Янв", value: 35 }, { month: "Фев", value: 55 },
            { month: "Мар", value: 80 }, { month: "Апр", value: 110 },
            { month: "Май", value: 135 }, { month: "Июн", value: 150 }
        ],
        timeline: "6 месяцев"
    },
    {
        id: "case-12",
        slug: "silk-way-travel",
        title: "Silk Way Travel",
        client: "Туристическое агентство Silk Way Travel",
        categories: ["SMM", "BRANDING"],
        coverImage: "/images/case-travel.png",
        hoverDescription: "Ребрендинг и digital-упаковка турагентства — рост бронирований на 200%.",
        hoverMetrics: [
            { label: "Брони", value: "+200%" },
            { label: "Охват", value: "5M+" }
        ],
        content: {
            problem: "Турагентство воспринималось как «бабушкин офис» с устаревшим имиджем. Молодая аудитория 25-35 лет предпочитала самостоятельно бронировать поездки через OTA-платформы.",
            solution: [
                "Полный ребрендинг: новый логотип, фирменный стиль, упаковка соцсетей",
                "Создание контент-стратегии с travel-блогом и Reels-форматом",
                "Запуск таргетированной рекламы на горячие направления",
                "Внедрение системы мгновенного расчёта тура через WhatsApp-бот"
            ],
            results: "Количество бронирований увеличилось на 200%. Суммарный охват контента превысил 5 миллионов. Средний возраст клиента снизился с 45 до 32 лет. Доля онлайн-бронирований выросла до 70%.",
            fullDescription: "Silk Way Travel — это трансформация классического турагентства в современный digital-бренд. Ребрендинг полностью изменил восприятие компании. Reels с лайфхаками и обзорами отелей набирали по 100-500K просмотров, а WhatsApp-бот автоматизировал 60% коммуникации с клиентами."
        },
        adPlatform: "facebook",
        adScreenshot: "/images/ad-facebook-ads.png",
        barMetrics: [
            { label: "Бронирования/мес", before: 30, after: 90, suffix: "" },
            { label: "Охват/мес", before: 200000, after: 5000000, suffix: "" },
            { label: "Онлайн-брони, %", before: 15, after: 70, suffix: "%" }
        ],
        chartData: [
            { month: "Янв", value: 30 }, { month: "Фев", value: 42 },
            { month: "Мар", value: 55 }, { month: "Апр", value: 68 },
            { month: "Май", value: 80 }, { month: "Июн", value: 90 }
        ],
        timeline: "6 месяцев"
    }
];

export const getAllCategories = () => {
    const cats = new Set<string>();
    casesData.forEach(c => c.categories.forEach(cat => cats.add(cat)));
    return Array.from(cats);
}
