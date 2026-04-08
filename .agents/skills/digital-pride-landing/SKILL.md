---
name: digital-pride-landing
description: |
  Создание лендинг-страниц в фирменном стиле Digital Pride. Используй этот скилл ВСЕГДА, когда пользователь просит создать лендинг, посадочную страницу, страницу услуги, сервисную страницу или любую веб-страницу для Digital Pride или в стиле Digital Pride.
  ОБЯЗАТЕЛЬНЫЕ ТРИГГЕРЫ: лендинг Digital Pride, страница услуги, посадочная страница, новая страница сайта, создать страницу, сделай страницу, лендинг для услуги, страница продвижения, landing page Digital Pride.
  Этот скилл содержит полный эталонный шаблон с дизайн-системой (шрифты, цвета, текстуры, компоненты, анимации, SEO-структура, форма WhatsApp).
---

# Digital Pride Landing Page — Фирменный стиль

Этот скилл определяет фирменный стиль и структуру всех лендинг-страниц Digital Pride. Перед созданием любой новой страницы **обязательно** прочитай эталонный шаблон:

```
view /path/to/this/skill/references/template.html
```

## Дизайн-система

### Шрифты
- **Заголовки:** `Unbounded` (Google Fonts) — weight 400–900
- **Текст:** `Onest` (Google Fonts) — weight 300–700
- **НИКОГДА не используй:** Inter, Roboto, Arial, system fonts

### Цветовая палитра
```css
--black: #0a0a0a;        /* Основной фон */
--white: #f5f5f0;        /* Текст */
--accent: #E8FF00;       /* Акцент — кислотно-жёлтый */
--accent-dim: #c4d900;   /* Приглушённый акцент */
--gray-1: #1a1a1a;       /* Карточки, секции */
--gray-2: #2a2a2a;       /* Бордеры */
--gray-3: #888;          /* Вторичный текст */
--red: #ff3b3b;          /* Акцент негатив */
--green: #00e676;        /* Рост, позитив */
--blue: #4d8fff;         /* Дополнительный */
```

### Текстуры и эффекты
- **Зернистость (grain overlay):** SVG feTurbulence через `body::after`, opacity 0.03, `pointer-events: none`, `z-index: 9999`
- **Градиентные сферы:** `radial-gradient` на pseudo-элементах секций — accent с opacity 0.06–0.08
- **Backdrop blur:** Хедер — `rgba(10,10,10,0.85)` + `backdrop-filter: blur(20px)`

### Компоненты

#### Header
- Fixed, backdrop-blur, тонкий бордер снизу `rgba(255,255,255,0.06)`
- Логотип: `DIGITAL` белый + `PRIDE` accent цветом
- CTA-кнопка: pill-shape, accent фон, чёрный текст

#### Hero-секция
- Min-height 100vh, grid 1.1fr / 0.9fr
- Badge с пульсирующей точкой (анимация `pulse`)
- Заголовок h1 с `.highlight` — gradient text (`-webkit-background-clip: text`)
- Мокап телефона с контентом (border-radius 36px, notch, shadow)
- Плавающие стат-карточки с анимацией `float`
- Кнопки: `.btn-primary` (accent pill) + `.btn-secondary` (ghost pill)

#### Stats Bar
- 4 колонки, gradient text числа, серый label

#### Карточки (why-card, service-card)
- `background: var(--black/gray-1)`, border `var(--gray-2)`, border-radius 20px
- Hover: border-color accent, translateY(-4px)
- Accent-линия сверху через `::before` (opacity 0→1)

#### Screenshots / Кейсы
- Мокапы постов Threads внутри карточек
- Аватары с gradient фоном
- Статистика engagement внизу

#### Графики статистики
- Bar chart: flex, align-items end, bars с hover-эффектом, `.active` = accent цвет
- Line chart: SVG path + linearGradient fill
- Метрики: 3-колоночный grid, accent числа, green изменения

#### Процесс / Timeline
- Вертикальная линия слева (gradient accent→transparent)
- Круглые маркеры с номерами (border accent)

#### Форма заявки → WhatsApp
- Поля: чёрный фон, gray-2 бордер, border-radius 12px, focus = accent border
- Кнопка submit: full-width, accent, иконка WhatsApp SVG
- JS: сборка текста → `window.open(wa.me/NUMBER?text=...)`
- Маска телефона: автоформат +7 (___) ___-__-__

#### FAQ
- Аккордеон с toggle (+), active = accent фон, rotate 45deg
- max-height анимация

#### Footer
- 3-колоночный layout: бренд + навигация + контакты
- Нижняя строка: копирайт + дескриптор

### Анимации
- `fadeInUp`: opacity 0→1, translateY 30→0, staggered delays
- `float`: translateY 0→-10px→0, 4s ease infinite
- `pulse`: opacity + scale, 2s infinite
- Scroll IntersectionObserver: элементы появляются при скролле

### SEO-обязательные элементы
1. `<title>` с ключевыми словами + бренд
2. `<meta name="description">` — 150-160 символов, с CTA
3. `<meta name="keywords">` — 8-12 ключей
4. Open Graph теги (og:title, og:description, og:type, og:locale)
5. `<link rel="canonical">`
6. Schema.org JSON-LD (`ProfessionalService` или подходящий тип)
7. Семантические теги: `<header>`, `<section>`, `<article>`, `<footer>`
8. `<h1>` единственный, с основным ключом
9. `<h2>` в каждой секции с LSI-ключами

### Адаптивность
- Breakpoint 900px: grid → 1 колонка, phone меньше
- Breakpoint 600px: кнопки full-width, форма compact
- Все размеры через clamp() для типографики

## Процесс создания новой страницы

1. **Прочитай template.html** из references/ — это эталон
2. **Определи тему** страницы (услуга, продукт, направление)
3. **Сохрани ВСЮ дизайн-систему** — шрифты, цвета, текстуры, анимации, grain overlay
4. **Адаптируй контент** — заголовки, тексты, карточки, кейсы, статистику
5. **SEO** — уникальные мета-теги, Schema.org, семантика
6. **Форма → WhatsApp** — с тем же JS-механизмом
7. **Проверь адаптивность** — все breakpoints
