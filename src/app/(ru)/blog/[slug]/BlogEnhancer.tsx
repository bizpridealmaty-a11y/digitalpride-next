'use client';

import { useEffect } from 'react';

/**
 * Оживляет статью блога: полоса прогресса чтения, появление блоков при скролле,
 * счётчики цифр и «выезжающие» полосы диаграмм.
 *
 * Контент статьи приходит HTML-строкой через dangerouslySetInnerHTML, поэтому
 * React-компоненты внутрь не вставить — этот компонент находит уже отрендеренные
 * узлы в DOM и навешивает поведение. Так анимации работают в любой статье
 * автоматически, без правки её разметки.
 */

/** Разбирает «от 80к ₸» → ['от ', 80, 'к ₸']; «×2,7» → ['×', 2.7, '']. Без числа — null. */
function splitNumber(text: string): [string, number, string, string] | null {
    const m = text.match(/^(\D*?)(\d+(?:[.,]\d+)?)([\s\S]*)$/);
    if (!m) return null;
    const raw = m[2];
    const value = parseFloat(raw.replace(',', '.'));
    if (!isFinite(value)) return null;
    const decimalSep = raw.includes(',') ? ',' : '.';
    return [m[1], value, m[3], raw.includes(',') || raw.includes('.') ? decimalSep : ''];
}

export default function BlogEnhancer() {
    useEffect(() => {
        // Контент может быть разрезан на несколько блоков (между ними вставляется калькулятор) —
        // работаем со всеми, иначе оживёт только первая половина статьи.
        const blocks = Array.from(document.querySelectorAll<HTMLElement>('.dp-blog-article'));
        const bar = document.getElementById('dp-progress');
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // --- полоса прогресса чтения ---
        const onScroll = () => {
            if (!bar) return;
            const h = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        if (!blocks.length) return () => window.removeEventListener('scroll', onScroll);

        const queryAll = (sel: string) => blocks.flatMap((b) => Array.from(b.querySelectorAll<HTMLElement>(sel)));

        // --- что анимируем ---
        const targets = queryAll('.dp-viz, .dp-statrow, figure, table, .dp-note');
        targets.forEach((el) => el.classList.add('dp-rev'));

        if (reduce) {
            targets.forEach((el) => el.classList.add('dp-in'));
            return () => window.removeEventListener('scroll', onScroll);
        }

        // Полосы диаграмм: запоминаем целевые размеры и сбрасываем в 0 до появления.
        const bars = queryAll('.dp-range-fill, .dp-bar-fill');
        bars.forEach((el) => {
            el.dataset.w = el.style.width || '';
            el.dataset.l = el.style.left || '';
            el.style.width = '0%';
        });

        const animate = (root: HTMLElement) => {
            // счётчики
            root.querySelectorAll<HTMLElement>('.dp-stat-num, .dp-range-val, .dp-bar-val').forEach((el) => {
                if (el.dataset.done) return;
                const parsed = splitNumber(el.textContent || '');
                if (!parsed) return;
                el.dataset.done = '1';
                const [pre, to, suf, sep] = parsed;
                const decimals = sep ? 1 : 0;
                let t0: number | null = null;
                const step = (ts: number) => {
                    if (t0 === null) t0 = ts;
                    const p = Math.min((ts - t0) / 1100, 1);
                    const eased = 1 - Math.pow(1 - p, 3);
                    const v = (to * eased).toFixed(decimals);
                    el.textContent = pre + (sep === ',' ? v.replace('.', ',') : v) + suf;
                    if (p < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            });
            // полосы
            root.querySelectorAll<HTMLElement>('.dp-range-fill, .dp-bar-fill').forEach((el, i) => {
                setTimeout(() => {
                    if (el.dataset.l) el.style.left = el.dataset.l;
                    el.style.width = el.dataset.w || '';
                }, i * 90);
            });
        };

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (!e.isIntersecting) return;
                    const el = e.target as HTMLElement;
                    el.classList.add('dp-in');
                    animate(el);
                    io.unobserve(el);
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
        );
        targets.forEach((el) => io.observe(el));

        return () => {
            window.removeEventListener('scroll', onScroll);
            io.disconnect();
        };
    }, []);

    return null;
}
