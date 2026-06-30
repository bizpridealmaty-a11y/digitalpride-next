# Digital Pride — digitalpride.kz

Сайт маркетингового агентства Digital Pride (Алматы, Казахстан).
Владелец: Дмитрий Тимошевский. Домен: **digitalpride.kz**

## Стек

- **Next.js 16.1.6** (App Router, Turbopack), React 19, TypeScript 5
- **Tailwind CSS 4** (через @tailwindcss/postcss)
- **Framer Motion 12** — анимации (fadeUp, stagger, AnimatePresence)
- **Netlify** — хостинг и деплой (site ID: `mellow-shortbread-935a82`)
- Шрифты: **Unbounded** (заголовки) + **Onest** (текст) через `next/font/google`

## Команды

```bash
npm run dev      # dev-сервер (Turbopack)
npm run build    # production build
netlify deploy --prod  # деплой на Netlify (билдит сам)
```

**Важно при деплое**: dev-сервер должен быть остановлен, иначе `.next` заблокирован и деплой падает с "Failed publishing static content". Если случилось — `Stop-Process -Name node -Force`, удалить `.next`, деплоить заново.

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx              # Root layout (RU), Yandex.Metrika, Schema.org
│   ├── page.tsx                # Главная
│   ├── api/telegram/route.ts   # POST API для форм → Telegram бот
│   ├── kk/                     # Казахская версия (28+ страниц)
│   │   ├── layout.tsx          # KK layout, locale="kk", robots noindex
│   │   └── [все страницы]/page.tsx
│   ├── cases/
│   │   ├── page.tsx            # Листинг кейсов
│   │   ├── [slug]/page.tsx     # Динамические кейсы из casesData
│   │   ├── laser-epilation/    # Standalone кейс
│   │   └── plov-delivery/      # Standalone кейс
│   ├── blog/
│   │   ├── page.tsx            # Блог
│   │   └── [slug]/page.tsx     # Посты из lib/blog.ts
│   ├── pricing/                # Тарифы (PricingClient.tsx)
│   ├── contacts/               # Контакты (ContactsClient.tsx)
│   ├── school/                 # Обучение (SchoolClient.tsx)
│   └── [28 сервисных страниц]/ # SMM, SEO, таргет и т.д.
├── components/
│   ├── NewLandingTemplate.tsx   # Шаблон для "маркетинговых" страниц
│   ├── ServicePageTemplate.tsx  # Шаблон для сервисных страниц
│   ├── Breadcrumbs.tsx
│   ├── Calculator.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── RelatedServices.tsx
│   ├── home/                    # Секции главной страницы
│   │   ├── Hero.tsx, Services.tsx, Cases.tsx, Process.tsx
│   │   ├── CTA.tsx, Faq.tsx, LeadMagnet.tsx, SocialProof.tsx
│   ├── case/                    # Компоненты кейсов
│   │   ├── CaseGrid.tsx, CaseCharts.tsx, AdScreenshot.tsx
│   └── layout/
│       ├── RawHeader.tsx        # Хедер (auto-hide, language switcher)
│       ├── RawFooter.tsx        # Футер (HTML-версия)
│       ├── Footer.tsx           # Футер (React)
│       ├── CallbackModal.tsx    # Модалка обратного звонка
│       └── MotionProvider.tsx   # LazyMotion обёртка
├── lib/
│   ├── i18n.ts                  # Словари RU/KK, хелперы getLocaleFromPath, localizedPath, toKkPath, toRuPath
│   ├── locale-context.tsx       # LocaleProvider, useLocale(), useTranslations()
│   ├── fonts.ts                 # Unbounded + Onest
│   ├── analytics.ts             # Yandex.Metrika (Counter: 79798549)
│   └── blog.ts                  # Массив постов блога с HTML-контентом
└── data/
    └── cases.ts                 # CaseStudy[], 12 кейсов с метриками
```

## Шаблоны страниц

### ServicePageTemplate
Для сервисных страниц (smm-almaty, seo-almaty и т.д.):
```tsx
<ServicePageTemplate
  title="SMM продвижение"
  accentWord="в Алматы"
  subtitle="..."
  description="..."
  features={[{ title, description, icon }]}
  process={[{ step: '01', title, description }]}
  pricing={[{ name, price, features[], isPopular? }]}
  faq={[{ q, a }]}
  seoContent={[{ title?, text }]}
/>
```

### NewLandingTemplate
Для маркетинговых лендингов (vneshnij-otdel-marketinga и т.д.) — похож на ServicePageTemplate, но с другим дизайном hero, stats, badgeText.

## Интернационализация (i18n)

- Два языка: `ru` (дефолт), `kk` (казахский)
- Маршрутизация через папку: `/` = RU, `/kk/` = KK
- **Root layout** оборачивает `<LocaleProvider locale="ru">`, **kk/layout.tsx** оборачивает `<LocaleProvider locale="kk">`
- В компонентах: `const locale = useLocale(); const isKk = locale === 'kk';` → тернарники для текста
- Хелперы: `localizedPath('/services', locale)` → `/services/` или `/kk/services/`
- Переключатель языка в хедере: `<a href={toKkPath(pathname)}>` (полная перезагрузка)
- **KK-страницы имеют `robots: { index: false }`** — пока не индексируются
- Сервисные KK-страницы — standalone компоненты с полным переводом props в ServicePageTemplate

## Хедер (RawHeader.tsx)

- Auto-hide при скролле вниз, появляется при скролле вверх
- Невидимая "горячая зона" сверху для показа хедера при наведении мыши
- `pointerEvents: isTouch || mobileOpen || !hidden ? 'none' : 'auto'` — чтобы не блокировать клики по KZ-кнопке
- Мобильное меню — полноэкранное с анимацией
- z-index хедера: 9999

## Формы → Telegram

Все формы (CTA, LeadMagnet, CallbackModal, и т.д.) отправляют POST на `/api/telegram`:
```tsx
fetch('/api/telegram', {
  method: 'POST',
  body: JSON.stringify({ name, phone, source: 'CTA' })
})
```
Env-переменные на Netlify: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`

## Кейсы

Два типа кейсов:
1. **Динамические** (`/cases/[slug]`) — рендерятся из `casesData` в `src/data/cases.ts` (12 кейсов: vinil-i-vino, bao-bao, hacker, miele, hyundai, dental-smile, alma-flowers, kazlogistics, beauty-lab, technodom-partner, arman-group, silk-way-travel)
2. **Standalone** — полностью кастомные компоненты:
   - `/cases/laser-epilation/` — `LaserEpilationCase.tsx`
   - `/cases/plov-delivery/` — `PlovDeliveryCase.tsx` (светлая тема #FFF9F2, 12 скриншотов, sticky mobile CTA)

## SEO

- `trailingSlash: true` в next.config — все URL с `/` на конце
- Sitemap: `src/app/sitemap.ts` — статические + блог + кейсы
- Отдельный image sitemap: `sitemap-images.xml/route.ts`
- Schema.org: WebSite, LocalBusiness, Organization, Person (в layout.tsx)
- Редиректы: legacy .html → новые URL, короткие формы → полные slug
- Security headers: HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy
- Кэширование: fonts/images/css/videos — `max-age=31536000, immutable`

## Аналитика

- **Yandex.Metrika**: Counter 79798549 (clickmap, trackLinks, webvisor, trackHash)
- Кастомные цели в `lib/analytics.ts`: WhatsApp клик, телефон, форма заявки, школа

## Деплой

Netlify, site `mellow-shortbread-935a82`:
```bash
netlify deploy --prod
```
Плагин `@netlify/plugin-nextjs` v5 обрабатывает `.next` output. Нельзя деплоить с `--no-build` — будет 422 ошибка.

## Контакты агентства (для контента)

- Телефон: +7 (707) 035-77-77
- WhatsApp: wa.me/77070357777
- Instagram: @digitalpride.kz
- Telegram: @timoshevskij
- Адрес: проспект Бухар-Жирау, 33, 3 этаж, студия 13, Алматы
- 2GIS: https://2gis.kz/almaty/firm/70000001090336559
