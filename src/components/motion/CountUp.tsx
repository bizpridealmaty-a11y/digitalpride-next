'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

/**
 * CountUp — плавно «накручивает» число от 0 до целевого при появлении в поле зрения.
 * Понимает префикс и суффикс: «$3M+», «150K+», «500+», «10+».
 */
export default function CountUp({
    value,
    duration = 2.2,
    className,
}: {
    value: string;
    duration?: number;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const reduce = useReducedMotion();

    const m = value.match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/);
    const prefix = m?.[1] ?? '';
    const numRaw = m?.[2] ?? '0';
    const suffix = m?.[3] ?? '';
    const target = parseFloat(numRaw.replace(',', '.'));
    const decimals = numRaw.includes('.') || numRaw.includes(',') ? numRaw.replace(',', '.').split('.')[1].length : 0;

    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (reduce) { setDisplay(target); return; }
        const controls = animate(0, target, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => setDisplay(v),
        });
        return () => controls.stop();
    }, [inView, reduce, target, duration]);

    const formatted = decimals > 0
        ? display.toFixed(decimals)
        : Math.round(display).toLocaleString('ru-RU');

    return <span ref={ref} className={className}>{prefix}{formatted}{suffix}</span>;
}
