'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * CaseGallery — крупная интерактивная витрина работ внутри кейса:
 * большие изображения на всю ширину, появление при скролле (framer-motion),
 * лёгкий зум при наведении и полноэкранный просмотр по клику (лайтбокс).
 */
export default function CaseGallery({ images, title }: { images: string[]; title: string }) {
    const [open, setOpen] = useState<string | null>(null);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
    }, [open]);

    return (
        <>
            <div className="grid gap-6 md:gap-8">
                {images.map((src, i) => (
                    <motion.button
                        key={i}
                        type="button"
                        onClick={() => setOpen(src)}
                        initial={{ opacity: 0, y: 48 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-90px' }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -6 }}
                        className="group relative block w-full overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)] cursor-zoom-in"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={src}
                            alt={`${title} — изображение ${i + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full block transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                        />
                        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/70 text-white text-xs font-bold px-3 py-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                            Открыть крупно
                        </span>
                    </motion.button>
                ))}
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(null)}
                        className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/92 p-4 md:p-10 cursor-zoom-out"
                    >
                        <button type="button" aria-label="Закрыть" className="absolute top-5 right-5 z-10 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
                        </button>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <motion.img
                            key={open}
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            src={open}
                            alt=""
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-full max-h-full rounded-2xl shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
