'use client';

import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * NumberFlow — «прокручивающиеся» цифры (в духе SmoothUI Number Flow),
 * реализовано своими руками под наш стек. Каждая цифра — вертикальная лента
 * 0–9, которая доезжает до нужного значения пружинным easing со сдвигом по
 * позиции. Не-цифровые символы (пробел, ₸, %, +, ×) остаются статичными.
 *
 * Запускается при попадании в вьюпорт. Уважает prefers-reduced-motion —
 * тогда сразу показывает финальное значение.
 */
function Digit({ target, delay, active }: { target: number; delay: number; active: boolean }) {
    return (
        <span style={{ display: 'inline-block', height: '1em', overflow: 'hidden', lineHeight: 1, verticalAlign: 'bottom' }}>
            <span
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    transform: `translateY(-${active ? target : 0}em)`,
                    transition: `transform 1100ms cubic-bezier(.22,1,.36,1) ${delay}ms`,
                    willChange: 'transform',
                }}
            >
                {Array.from({ length: 10 }, (_, i) => (
                    <span key={i} style={{ height: '1em', lineHeight: 1, textAlign: 'center' }}>
                        {i}
                    </span>
                ))}
            </span>
        </span>
    );
}

export default function NumberFlow({
    value,
    className = '',
    delayStep = 70,
}: {
    /** Готовая строка значения, напр. "679", "28 000", "+300", "1 680 000" */
    value: string;
    className?: string;
    /** Пошаговая задержка между разрядами, мс */
    delayStep?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-12% 0px' });
    const reduce = useReducedMotion();
    const active = inView || !!reduce;

    let digitIndex = 0;
    const chars = value.split('');

    return (
        <span ref={ref} className={className} style={{ display: 'inline-flex', alignItems: 'baseline', fontVariantNumeric: 'tabular-nums' }}>
            {chars.map((ch, i) => {
                if (/[0-9]/.test(ch)) {
                    const d = digitIndex++;
                    return <Digit key={i} target={parseInt(ch, 10)} delay={reduce ? 0 : d * delayStep} active={active} />;
                }
                return (
                    <span key={i} style={{ whiteSpace: 'pre' }}>
                        {ch}
                    </span>
                );
            })}
        </span>
    );
}
