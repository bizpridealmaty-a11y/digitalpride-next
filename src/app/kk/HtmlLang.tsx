'use client';

import { useEffect } from 'react';

/**
 * Корневой layout отдаёт единственный <html lang="ru"> — вложенный layout его
 * переопределить не может (ограничение App Router). На /kk/ это неверно.
 *
 * Google атрибут lang игнорирует (язык определяет по контенту + hreflang), а вот
 * браузеры используют его для авто-перевода и скринридеров — поэтому правим на клиенте.
 * Контент дополнительно обёрнут в <div lang="kk"> в kk/layout.tsx.
 *
 * Полное решение — рефакторинг на сегмент [locale]; пока не делаем, чтобы не ломать
 * статическую генерацию 70+ страниц ради атрибута, который поисковик не читает.
 */
export default function HtmlLang({ lang }: { lang: string }) {
    useEffect(() => {
        const previous = document.documentElement.lang;
        document.documentElement.lang = lang;
        return () => {
            document.documentElement.lang = previous;
        };
    }, [lang]);

    return null;
}
