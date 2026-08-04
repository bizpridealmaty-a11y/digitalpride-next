'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * WaveText — буквы заголовка «всплывают» волной при появлении в вьюпорте.
 * ScrambleText — буквы расшифровываются из случайных символов при наведении.
 * Обе — свои реализации в духе SmoothUI под наш стек. reduced-motion aware.
 */

export function WaveText({
    text,
    className = '',
    step = 0.028,
    immediate = false,
}: {
    text: string;
    className?: string;
    step?: number;
    /** true — запускать по монтированию (для контента на первом экране, чтобы не
     * зависеть от IntersectionObserver). По умолчанию — по появлению в вьюпорте. */
    immediate?: boolean;
}) {
    const reduce = useReducedMotion();
    if (reduce) return <span className={className}>{text}</span>;

    const words = text.split(' ');
    let charCounter = 0;
    const reveal = { y: 0, opacity: 1 };

    return (
        <span className={className} style={{ display: 'inline-block' }} aria-label={text}>
            {words.map((word, wi) => (
                <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }} aria-hidden>
                    {word.split('').map((ch, ci) => {
                        const delay = charCounter++ * step;
                        return (
                            <motion.span
                                key={ci}
                                style={{ display: 'inline-block' }}
                                initial={{ y: '0.55em', opacity: 0 }}
                                {...(immediate
                                    ? { animate: reveal }
                                    : { whileInView: reveal, viewport: { once: true, margin: '-8% 0px' } })}
                                transition={{ delay, type: 'spring', stiffness: 320, damping: 24 }}
                            >
                                {ch}
                            </motion.span>
                        );
                    })}
                    {wi < words.length - 1 && <span>&nbsp;</span>}
                </span>
            ))}
        </span>
    );
}

const GLYPHS = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&<>/';

export function ScrambleText({
    text,
    className = '',
}: {
    text: string;
    className?: string;
}) {
    const [display, setDisplay] = useState(text);
    const timer = useRef<ReturnType<typeof setInterval> | null>(null);
    const reduce = useReducedMotion();

    const run = useCallback(() => {
        if (reduce) return;
        if (timer.current) clearInterval(timer.current);
        const chars = text.split('');
        const plan = chars.map((c) => ({
            c,
            start: Math.floor(Math.random() * 8),
            end: 8 + Math.floor(Math.random() * 10),
        }));
        let frame = 0;
        timer.current = setInterval(() => {
            let out = '';
            let done = 0;
            for (const p of plan) {
                if (p.c === ' ') { out += ' '; done++; continue; }
                if (frame >= p.end) { out += p.c; done++; }
                else if (frame >= p.start) { out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]; }
                else { out += p.c; }
            }
            setDisplay(out);
            frame++;
            if (done === plan.length && timer.current) {
                clearInterval(timer.current);
                timer.current = null;
                setDisplay(text);
            }
        }, 42);
    }, [text, reduce]);

    return (
        <span
            className={className}
            style={{ display: 'inline-block', cursor: 'default' }}
            onMouseEnter={run}
            onFocus={run}
            tabIndex={0}
            aria-label={text}
        >
            <span aria-hidden>{display}</span>
        </span>
    );
}
