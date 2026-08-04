'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export type StackItem = {
    meta?: string;
    title: string;
    text: string;
    accent?: string;
};

/**
 * CardStack — стопка карточек (в духе SmoothUI Scrollable Card Stack): верхнюю
 * можно смахнуть в сторону или нажать «Дальше» — она уезжает назад стопки,
 * следующая поднимается. Своя реализация на framer-motion, data-driven.
 * reduced-motion: пружины отключаются, остаётся простое переключение.
 */
export default function CardStack({
    items,
    className = '',
    height = 260,
}: {
    items: StackItem[];
    className?: string;
    height?: number;
}) {
    const [order, setOrder] = useState(() => items.map((_, i) => i));
    const reduce = useReducedMotion();

    const send = () => setOrder((o) => [...o.slice(1), o[0]]);

    const spring = reduce
        ? { duration: 0.2 }
        : { type: 'spring' as const, stiffness: 320, damping: 30 };

    return (
        <div className={className} style={{ position: 'relative', height }}>
            {order.map((idx, pos) => {
                const item = items[idx];
                const accent = item.accent || '#E31C24';
                const isTop = pos === 0;
                return (
                    <motion.div
                        key={idx}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            zIndex: items.length - pos,
                            cursor: isTop ? 'grab' : 'default',
                            background: '#141319',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: 22,
                            padding: '26px 28px',
                            boxShadow: '0 24px 50px -24px rgba(0,0,0,0.6)',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        animate={{
                            y: pos * 16,
                            scale: 1 - pos * 0.05,
                            opacity: pos > 2 ? 0 : 1,
                        }}
                        transition={spring}
                        drag={isTop ? 'x' : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.6}
                        whileDrag={{ cursor: 'grabbing' }}
                        onDragEnd={(_, info) => {
                            if (Math.abs(info.offset.x) > 110) send();
                        }}
                    >
                        {item.meta && (
                            <div className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: accent }}>
                                {item.meta}
                            </div>
                        )}
                        <h4 className="text-lg font-extrabold text-white mb-2" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                            {item.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed flex-1">{item.text}</p>
                        {isTop && (
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-[11px] text-gray-500">Смахните или нажмите →</span>
                                <button
                                    type="button"
                                    onClick={send}
                                    className="inline-flex items-center gap-1.5 text-sm font-bold text-white rounded-full px-4 py-1.5 transition-colors"
                                    style={{ background: accent }}
                                >
                                    Дальше
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}
