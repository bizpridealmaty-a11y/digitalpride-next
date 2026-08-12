'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export type DriftTile = {
    href: string;
    img: string;
    title: string;
    tag: string;
};

/**
 * CasesDriftWall — «стена» кейсов в духе ReactBits Drift Wall: колонки плиток
 * непрерывно едут сверху вниз с разной скоростью (бесшовный цикл, чистый CSS),
 * при наведении колонка замирает, плитка приподнимается. Клик — переход в кейс.
 */
export default function CasesDriftWall({ tiles }: { tiles: DriftTile[] }) {
    const [cols, setCols] = useState(3);

    useEffect(() => {
        const decide = () => {
            const w = window.innerWidth;
            setCols(w < 640 ? 2 : w < 1024 ? 3 : 3);
        };
        decide();
        window.addEventListener('resize', decide);
        return () => window.removeEventListener('resize', decide);
    }, []);

    // Раскладываем плитки по колонкам round-robin
    const columns: DriftTile[][] = Array.from({ length: cols }, () => []);
    tiles.forEach((t, i) => columns[i % cols].push(t));

    // Разная скорость по колонкам (сек) — «дрейф» с рассинхроном
    const durations = [42, 52, 36, 48];

    return (
        <div
            className="dw-wall relative w-full overflow-hidden"
            style={{
                height: 'clamp(560px, 82vh, 900px)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 9%, #000 91%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 0%, #000 9%, #000 91%, transparent 100%)',
            }}
        >
            <div className="flex gap-4 md:gap-6 h-full px-1">
                {columns.map((colTiles, ci) => (
                    <div key={ci} className="dw-col flex-1 min-w-0 overflow-hidden">
                        <div
                            className="dw-track flex flex-col gap-4 md:gap-6"
                            style={{ animationDuration: `${durations[ci % durations.length]}s` }}
                        >
                            {[...colTiles, ...colTiles].map((tile, i) => (
                                <Link
                                    key={`${tile.href}-${i}`}
                                    href={tile.href}
                                    className="dw-tile group relative block w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)]"
                                    style={{ aspectRatio: '4 / 5' }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={tile.img}
                                        alt={tile.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                                    />
                                    <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                                    <span className="absolute top-3 left-3 inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-600 text-white">
                                        {tile.tag}
                                    </span>
                                    <span className="absolute inset-x-0 bottom-0 p-4">
                                        <span className="block text-white font-extrabold text-base md:text-lg leading-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                            {tile.title}
                                        </span>
                                        <span className="mt-1.5 inline-flex items-center gap-1.5 text-white/80 text-xs font-semibold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            Смотреть кейс
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
