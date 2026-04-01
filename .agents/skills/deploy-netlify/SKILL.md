---
name: deploy-netlify
description: |
  Деплой сайта агентства Digital Pride (Next.js) на Netlify.
  Используй при запросах о деплое, публикации, или обновлении основного сайта агентства.
---

# Деплой Digital Pride (Next.js) на Netlify

## Стек
- **Framework**: Next.js (App Router) + TypeScript
- **Стили**: Tailwind CSS + PostCSS
- **Хостинг**: Netlify
- **CI/CD**: GitHub → Netlify

## Перед деплоем
1. Проверь что `next.config.ts` содержит `output: 'export'` (для статического экспорта) или настроен `@netlify/plugin-nextjs`
2. Убедись что все изменения сохранены

## Команды

```bash
# Билд
npm run build

# Деплой (если Netlify CLI настроен)
npx netlify-cli deploy --prod --dir=.next
```

## Структура проекта
```
digitalpride-next/
├── src/              # Исходный код
├── public/           # Статические файлы
├── next.config.ts    # Конфигурация Next.js
├── postcss.config.mjs
└── tsconfig.json
```

## Особенности
- App Router — страницы в `src/app/`
- Используется `next-env.d.ts` для TypeScript типов
- Есть утилита `extract-layout.js` для клонирования макетов
