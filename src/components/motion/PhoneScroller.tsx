'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * PhoneScroller — «живой» экран телефона: реальный полностраничный мобильный
 * скриншот сайта плавно прокручивается сверху вниз и обратно в цикле, как
 * запись экрана. Дистанция измеряется по факту (высота картинки минус высота
 * экрана), поэтому корректно работает при любой ширине карточки.
 * prefers-reduced-motion — статичный первый экран, без движения.
 */
export default function PhoneScroller({ src, alt }: { src: string; alt: string }) {
    const screenRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [distance, setDistance] = useState(0);
    const reduce = useReducedMotion();

    useEffect(() => {
        const measure = () => {
            const screen = screenRef.current;
            const img = imgRef.current;
            if (!screen || !img) return;
            const d = img.clientHeight - screen.clientHeight;
            setDistance(d > 4 ? d : 0);
        };
        const img = imgRef.current;
        if (img?.complete) measure();
        img?.addEventListener('load', measure);
        window.addEventListener('resize', measure);
        return () => {
            img?.removeEventListener('load', measure);
            window.removeEventListener('resize', measure);
        };
    }, []);

    const animate = !reduce && distance > 0;
    // ~48 px/сек вниз, столько же вверх; минимум 9 сек на цикл
    const duration = Math.max(9, (distance * 2) / 48);

    return (
        <div ref={screenRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <motion.img
                ref={imgRef}
                src={src}
                alt={alt}
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
                animate={animate ? { y: [0, -distance, 0] } : { y: 0 }}
                transition={
                    animate
                        ? { duration, times: [0, 0.5, 1], repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }
                        : undefined
                }
            />
        </div>
    );
}
