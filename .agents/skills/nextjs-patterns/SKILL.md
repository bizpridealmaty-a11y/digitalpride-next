---
name: nextjs-patterns
description: |
  Архитектурные паттерны Next.js для сайта Digital Pride.
  Используй при разработке новых страниц, компонентов, или рефакторинге существующего кода.
---

# Next.js Архитектура Digital Pride

## App Router — Структура

```
src/app/
├── layout.tsx       # Корневой layout (шрифты, метаданные)
├── page.tsx         # Главная страница
├── about/page.tsx   # О компании
├── services/page.tsx # Услуги
├── cases/page.tsx   # Кейсы
└── contacts/page.tsx # Контакты
```

## Паттерны компонентов

### Серверный компонент (по умолчанию)
```tsx
// src/app/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Pride — SMM агентство в Алматы',
  description: 'Продвижение в социальных сетях, таргетированная реклама',
}

export default function Home() {
  return <main>...</main>
}
```

### Клиентский компонент (интерактивность)
```tsx
'use client'

import { useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  return <form>...</form>
}
```

## Стилизация
- **Tailwind CSS** — основная система стилей
- **Glassmorphism** — `backdrop-blur-lg bg-white/10 border border-white/20`
- **Шрифт**: Montserrat (глобально через `next/font`)
- **Hover-паттерн**: контрастный инверт при наведении

## SEO
- Используй `export const metadata` на каждой странице
- JSON-LD через `<script type="application/ld+json">`
- Geo-таргетинг на Алматы/Казахстан
