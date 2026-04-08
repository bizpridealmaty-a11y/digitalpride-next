---
name: seo-optimization
description: |
  SEO-оптимизация любого сайта. Используй при запросах на индексацию,
  sitemap, robots.txt, Schema.org, мета-теги, Search Console, скорость загрузки,
  или "почему сайт не индексируется".
---

# SEO Optimization — Универсальный скилл

Полный чек-лист и инструкции по технической и контентной SEO-оптимизации сайтов.

---

## 1. Техническая база (обязательно для каждого сайта)

### 1.1 Sitemap
- Всегда использовать **автоматическую генерацию** sitemap (плагин фреймворка):
  - Astro: `@astrojs/sitemap` → генерирует `sitemap-index.xml` + `sitemap-0.xml`
  - Next.js: `next-sitemap` (npm-пакет)
  - Vite/React: ручной или `vite-plugin-sitemap`
- **НИКОГДА** не хранить ручной `sitemap.xml` в `public/` если есть автогенерация — они конфликтуют!
- Все URL в sitemap должны быть единообразными (со слэшем ИЛИ без — не оба)

### 1.2 robots.txt
`User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: YandexBot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://ДОМЕН/sitemap-index.xml`
> **Важно:** ссылка на Sitemap должна вести на автоматически сгенерированный файл!

### 1.3 Trailing Slash (единообразие URL)
Проблема дублей: `/about` и `/about/` — для Google это ДВЕ разных страницы.

**Решение по фреймворкам:**
- **Astro**: `trailingSlash: 'always'` в `astro.config.mjs`
- **Next.js**: `trailingSlash: true` в `next.config.js`
- **Netlify**: добавить `[[redirects]]` в `netlify.toml` или `_redirects`

### 1.4 Canonical URL
Каждая страница должна иметь `<link rel="canonical">`:
`<link rel="canonical" href="https://домен/текущий-путь/" />`
Это защита от дублей при случайных параметрах (?utm_source= и т.д.)

---

## 2. Мета-теги (для каждой страницы)

### 2.1 Обязательные теги
`<title>Ключевое слово — Бренд | Город</title>
<meta name="description" content="Описание 150-160 символов с ключевыми словами и CTA" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="canonical" href="https://домен/страница/" />`

### 2.2 Open Graph (для соцсетей)
`<meta property="og:title" content="Заголовок страницы" />
<meta property="og:description" content="Описание" />
<meta property="og:image" content="https://домен/og-image.jpg" />
<meta property="og:url" content="https://домен/страница/" />
<meta property="og:type" content="website" />`

### 2.3 Формула Title
`[Главный ключ] в [Город] | [УТП] — [Бренд]`

Пример: `Курсы SMM в Алматы | Обучение продвижению в Instagram — Digital Pride`

---

## 3. Schema.org (структурированные данные)

### 3.1 LocalBusiness (для локального бизнеса)
`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Название компании",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Алматы",
    "addressCountry": "KZ"
  },
  "url": "https://домен/",
  "telephone": "+7-XXX-XXX-XXXX"
}`

### 3.2 Article (для блог-постов)
`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Заголовок статьи",
  "datePublished": "2026-01-15",
  "author": { "@type": "Person", "name": "Автор" },
  "publisher": { "@type": "Organization", "name": "Бренд" }
}`

### 3.3 FAQPage (для попадания в rich snippets)
`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Сколько стоит SMM в Алматы?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Стоимость начинается от..."
      }
    }
  ]
}`

### 3.4 Course (для обучающих программ)
`{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Название курса",
  "description": "Описание",
  "provider": {
    "@type": "Organization",
    "name": "Школа/Компания"
  }
}`

---

## 4. Оптимизация изображений

- Конвертировать все изображения в **WebP** (`cwebp` или онлайн-сервисы)
- Максимальный вес файла: **200KB** для hero-изображений, **100KB** для остальных
- Всегда указывать `alt` с ключевыми словами:
  `<img src="team.webp" alt="Бизнес-сообщество BizPride — встреча предпринимателей в Алматы" />`
- Использовать `loading="lazy"` для изображений ниже первого экрана
- Для hero: `fetchpriority="high"` + `loading="eager"`

---

## 5. Скорость загрузки (Core Web Vitals)

- **LCP < 2.5s**: Оптимизировать hero-изображение, шрифты, CSS
- **FID / INP < 200ms**: Минимизировать JS на первом экране
- **CLS < 0.1**: Указывать `width`/`height` для изображений, резервировать место для шрифтов
- Шрифты: `font-display: swap` + `preload`
`<link rel="preload" href="/fonts/font.woff2" as="font" type="font/woff2" crossorigin />`

---

## 6. Geo-таргетинг (региональное SEO)

### 6.1 URL-структура для кластеров
`/услуга-город (например: /smm-almaty, /target-almaty)`

### 6.2 Типы кластеров
- **Коммерческий**: Отдельные страницы на каждую услугу + город
- **Кейсовый**: `/cases/target-restoran-almaty` — доказательство компетенций
- **Экспертный**: Блог-статьи по вопросам аудитории (`Сколько стоит таргет в Алматы?`)

### 6.3 Внешние сигналы
- Google My Business — синхронизировать с `LocalBusiness` Schema
- 2GIS — актуальные данные (адрес, телефон, часы работы)
- Яндекс.Бизнес — для Yandex-индексации

---

## 7. Google Search Console — диагностика

### 7.1 Подключение
1. Добавить сайт как **domain property** (через DNS TXT-запись) или **URL prefix** (через HTML-файл)
2. Файл верификации хранить в `/public/` (например, `googleff0513db75db1b92.html`)
3. Подождать 24-48 часов для первых данных

### 7.2 Типичные проблемы индексации

| Статус | Причина | Решение |
|--------|---------|---------|
| Обнаружена, не проиндексирована | Google не успел обойти | Подождать или «Запросить индексирование» вручную (3-5 URL/день) |
| Просканирована, не проиндексирована | Мало контента / дубль | Улучшить контент, добавить уникальность |
| Страница с переадресацией | Дубли со/без слэша | Настроить `trailingSlash` |
| Исключено тегом noindex | `<meta name="robots" content="noindex">` | Убрать тег |
| Ошибка 404 | Страница удалена | Удалить из sitemap или создать redirect |
| Дубликат без canonical | Несколько URL с одинаковым контентом | Добавить `rel="canonical"` |

### 7.3 Ручное индексирование
В Search Console → строка «Проверка URL» → вставить URL → «Запросить индексирование»
- Лимит: ~10-20 запросов в день
- Результат: индексация через 1-3 дня

---

## 8. Netlify-специфика

### 8.1 Заголовки кеширования (`public/_headers`)
`/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate`

### 8.2 SPA-маршрутизация (`public/_redirects`)
`/*    /index.html   200`

### 8.3 Деплой
`npx netlify-cli deploy --prod --dir=dist`

---

## 9. Чек-лист перед запуском

- [ ] `robots.txt` — корректный, ссылается на правильный sitemap
- [ ] Sitemap — автогенерируемый, все URL единообразные
- [ ] `trailingSlash` — настроен в конфиге фреймворка
- [ ] `<title>` и `<meta description>` — уникальные на каждой странице
- [ ] `<link rel="canonical">` — на каждой странице
- [ ] Schema.org JSON-LD — минимум `LocalBusiness` или `Organization`
- [ ] Open Graph теги — для корректного отображения в соцсетях
- [ ] Изображения — WebP, с `alt`, `loading="lazy"`
- [ ] Шрифты — `preload` + `font-display: swap`
- [ ] Google Search Console — сайт добавлен и верифицирован
- [ ] Яндекс.Вебмастер — сайт добавлен (файл `yandex_XXXXX.html`)
- [ ] Нет конфликтующих sitemap-файлов
- [ ] Core Web Vitals — проверены через PageSpeed Insights

---

## 10. Контентная SEO-стратегия для блога

### 10.1 Принципы статей
- Минимум **1500 слов** для экспертных статей
- Ключевые слова в H1, H2, первом абзаце, alt изображений
- Внутренняя перелинковка: каждая статья ссылается на 2-3 другие страницы сайта
- Уникальный `<title>` и `<meta description>` для каждой статьи

### 10.2 Формула URL для статей
`/blog/ключевое-слово-транслитом/`
Пример: `/blog/luchshie-business-cluby-almaty/`

### 10.3 Частота публикаций
- Минимум 2-4 статьи в месяц для активного роста
- После публикации — ручной запрос индексации в Search Console
