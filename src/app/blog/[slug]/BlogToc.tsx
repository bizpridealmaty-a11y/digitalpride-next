'use client';

import { useEffect, useState } from 'react';

type Item = { id: string; text: string };

/**
 * Оглавление статьи. Собирается из <h2> уже отрендеренного контента, поэтому
 * работает автоматически в любой статье — размечать заголовки руками не нужно.
 * Заодно проставляет заголовкам id (если их нет) и подсвечивает активный раздел.
 */
export default function BlogToc() {
    const [items, setItems] = useState<Item[]>([]);
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        // Контент может быть разрезан на несколько блоков (калькулятор вставляется между ними),
        // поэтому собираем заголовки из ВСЕХ блоков, а не только из первого.
        const blocks = Array.from(document.querySelectorAll('.dp-blog-article'));
        if (!blocks.length) return;

        const heads = blocks.flatMap((b) => Array.from(b.querySelectorAll<HTMLHeadingElement>('h2')));
        const list: Item[] = heads.map((h, i) => {
            if (!h.id) {
                const slug = (h.textContent || '')
                    .toLowerCase()
                    .replace(/[^a-zа-яё0-9\s-]/gi, '')
                    .trim()
                    .replace(/\s+/g, '-')
                    .slice(0, 50);
                h.id = slug || `section-${i + 1}`;
            }
            h.style.scrollMarginTop = '90px';
            return { id: h.id, text: h.textContent || '' };
        });
        setItems(list);

        const onScroll = () => {
            let current = list[0]?.id ?? '';
            for (const h of heads) {
                if (h.getBoundingClientRect().top < 160) current = h.id;
            }
            setActive(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (items.length < 2) return null;

    return (
        <nav className="rounded-2xl border border-gray-200 p-5">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">
                В статье
            </div>
            {items.map((it) => (
                <a
                    key={it.id}
                    href={`#${it.id}`}
                    className={`block text-[13.5px] py-1.5 pl-3 border-l-2 transition-colors ${
                        active === it.id
                            ? 'text-red-600 border-red-500 font-bold'
                            : 'text-gray-600 border-gray-200 hover:text-black'
                    }`}
                >
                    {it.text}
                </a>
            ))}
        </nav>
    );
}
