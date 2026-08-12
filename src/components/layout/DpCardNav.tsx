'use client';

import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { trackPhoneClick } from '@/lib/analytics';
import { getLocaleFromPath, getDict, localizedPath, toRuPath, toKkPath } from '@/lib/i18n';
import CallbackModal from './CallbackModal';

/** Стрелка «вверх-вправо» — вместо react-icons, инлайном. */
const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
        <path d="M7 17L17 7M8 7h9v9" />
    </svg>
);

/** Иконки разделов (stroke = currentColor). */
const IconPromo = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11l15-6v14L3 13v-2z" /><path d="M3 11v2a2 2 0 002 2h1" /><path d="M8 15v4a1 1 0 001 1h1a1 1 0 001-1v-3" /><path d="M18 8a3 3 0 010 6" />
    </svg>
);
const IconBuild = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="13" rx="2" /><path d="M8 21h8M12 16v5" /><path d="M7 8h4M7 11h7" />
    </svg>
);
const IconCompany = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21V7l7-4v18" /><path d="M10 21V9l8 3v9" /><path d="M3 21h18" /><path d="M14 13h.01M14 16h.01M6 11h.01M6 14h.01M6 17h.01" />
    </svg>
);

type NavCardLink = { label: string; href: string };
type NavCard = { label: string; subtitle: string; icon: React.ReactNode; accent?: boolean; links: NavCardLink[] };

/**
 * DpCardNav — навигация в стиле ReactBits Card Nav, адаптированная под DigitalPride:
 * плавающая плашка, раскрывающаяся в 3 карточки с разделами (GSAP-анимация высоты +
 * stagger карточек), переключатель языка, CTA на модалку обратного звонка, i18n.
 */
export default function DpCardNav() {
    const pathname = usePathname();
    const locale = getLocaleFromPath(pathname);
    const isKz = locale === 'kk';
    const t = getDict(locale);
    const lp = useCallback((p: string) => localizedPath(p, locale), [locale]);

    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [callbackOpen, setCallbackOpen] = useState(false);
    // Автоскрытие: плашка прячется, остаётся только компактный триггер из двух полосок
    const [revealed, setRevealed] = useState(true);
    const [isTouch, setIsTouch] = useState(false);

    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const hideTimer = useRef<number | null>(null);
    const revealedRef = useRef(true);
    const expandedRef = useRef(false);
    const ease = 'power3.out';

    useEffect(() => { revealedRef.current = revealed; }, [revealed]);
    useEffect(() => { expandedRef.current = isExpanded; }, [isExpanded]);

    const groupTitles = isKz
        ? ['Жылжыту', 'Әзірлеу және стратегия', 'Компания']
        : ['Продвижение', 'Разработка и стратегия', 'Компания'];

    const subtitles = isKz
        ? ['4 қызмет', '4 бағыт', '5 бөлім']
        : ['4 услуги', '4 направления', '5 разделов'];

    const items: NavCard[] = [
        {
            label: groupTitles[0],
            subtitle: subtitles[0],
            icon: <IconPromo />,
            accent: true,
            links: [
                { label: t.smmPromo, href: lp('/smm-almaty') },
                { label: t.targetAds, href: lp('/target-almaty') },
                { label: t.ppc, href: lp('/kontekstnaya-reklama-almaty') },
                { label: t.seoPromo, href: lp('/seo-almaty') },
            ],
        },
        {
            label: groupTitles[1],
            subtitle: subtitles[1],
            icon: <IconBuild />,
            links: [
                { label: t.webDev, href: lp('/sozdanie-sajtov-almaty') },
                { label: t.strategy, href: lp('/marketing-almaty') },
                { label: t.serm, href: lp('/upravlenie-reputaciej-almaty') },
                { label: t.cases, href: lp('/cases') },
            ],
        },
        {
            label: groupTitles[2],
            subtitle: subtitles[2],
            icon: <IconCompany />,
            links: [
                { label: t.pricing, href: lp('/pricing') },
                { label: t.training, href: lp('/school') },
                { label: t.blog, href: lp('/blog') },
                { label: t.about, href: lp('/o-nas') },
                { label: t.contacts, href: lp('/contacts') },
            ],
        },
    ];

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 280;
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
            const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement | null;
            if (contentEl) {
                const prev = {
                    v: contentEl.style.visibility, p: contentEl.style.pointerEvents,
                    pos: contentEl.style.position, h: contentEl.style.height,
                };
                contentEl.style.visibility = 'visible';
                contentEl.style.pointerEvents = 'auto';
                contentEl.style.position = 'static';
                contentEl.style.height = 'auto';
                void contentEl.offsetHeight;
                const total = 60 + contentEl.scrollHeight + 16;
                contentEl.style.visibility = prev.v;
                contentEl.style.pointerEvents = prev.p;
                contentEl.style.position = prev.pos;
                contentEl.style.height = prev.h;
                return total;
            }
        }
        return 280;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;
        gsap.set(navEl, { height: 60, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });
        const tl = gsap.timeline({ paused: true });
        tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });
        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');
        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;
        return () => { tl?.kill(); tlRef.current = null; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;
            tlRef.current.kill();
            const newTl = createTimeline();
            if (newTl) {
                if (isExpanded) newTl.progress(1);
                tlRef.current = newTl;
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isExpanded]);

    const collapse = useCallback(() => {
        const tl = tlRef.current;
        setIsHamburgerOpen(false);
        const finish = () => {
            setIsExpanded(false);
            // На touch сразу прячем плашку до компактного триггера
            if ('ontouchstart' in window || navigator.maxTouchPoints > 0) setRevealed(false);
        };
        if (!tl) { finish(); return; }
        tl.eventCallback('onReverseComplete', finish);
        tl.reverse();
    }, []);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setRevealed(true);
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            collapse();
        }
    };

    // Закрыть меню при смене маршрута
    const prevPath = useRef(pathname);
    useLayoutEffect(() => {
        if (prevPath.current !== pathname) {
            prevPath.current = pathname;
            if (tlRef.current) { tlRef.current.pause(0); }
            if (navRef.current) gsap.set(navRef.current, { height: 60 });
            setIsExpanded(false);
            setIsHamburgerOpen(false);
        }
    }, [pathname]);

    // Escape + клик вне меню
    useLayoutEffect(() => {
        if (!isExpanded) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') collapse(); };
        const onDown = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) collapse();
        };
        document.addEventListener('keydown', onKey);
        document.addEventListener('mousedown', onDown);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('mousedown', onDown);
        };
    }, [isExpanded, collapse]);

    // Определяем touch-устройство (там нет наведения — плашка сразу в покое)
    useEffect(() => {
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    // Автоскрытие на десктопе: у верхней кромки — показать плашку, иначе спрятать
    useEffect(() => {
        if (isTouch) { setRevealed(false); return; }
        const TOP = 90;      // зона у верха, вызывающая появление
        const HIDE = 2500;   // мс бездействия до скрытия
        const INITIAL = 4000;// мс показа после загрузки

        const cancel = () => { if (hideTimer.current) { window.clearTimeout(hideTimer.current); hideTimer.current = null; } };
        const scheduleHide = () => { if (!hideTimer.current) hideTimer.current = window.setTimeout(() => { if (!expandedRef.current) setRevealed(false); hideTimer.current = null; }, HIDE); };

        const onMove = (e: MouseEvent) => {
            if (e.clientY <= TOP) { cancel(); setRevealed(true); }
            else if (revealedRef.current && !expandedRef.current) { scheduleHide(); }
        };
        window.addEventListener('mousemove', onMove, { passive: true });
        const initial = window.setTimeout(() => { if (!expandedRef.current) setRevealed(false); }, INITIAL);
        return () => { window.removeEventListener('mousemove', onMove); window.clearTimeout(initial); cancel(); };
    }, [isTouch]);

    // Открыть меню прямо из компактного триггера (две полоски)
    const openFromPeek = () => {
        setRevealed(true);
        const tl = tlRef.current;
        if (!tl) return;
        setIsHamburgerOpen(true);
        setIsExpanded(true);
        tl.play(0);
    };

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => { if (el) cardsRef.current[i] = el; };

    const langPill = (active: boolean): React.CSSProperties => ({
        padding: '6px 11px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.4px',
        color: active ? '#fff' : 'rgba(255,255,255,0.5)', background: active ? 'rgba(255,255,255,0.16)' : 'transparent',
        textDecoration: 'none', transition: 'all .2s', lineHeight: 1,
    });

    // Тёмное «стекло» — как у карточек-островков на герое
    const GLASS = 'rgba(20,20,26,0.55)';

    const showBar = revealed || isExpanded;

    return (
        <>
            {/* Компактный триггер — две полоски. Виден, когда плашка спрятана. */}
            <button
                type="button"
                aria-label={t.openMenu}
                onClick={openFromPeek}
                onMouseEnter={() => { if (!isTouch) setRevealed(true); }}
                className="fixed left-1/2 top-3 md:top-4 z-[9998] flex flex-col items-center justify-center gap-[6px] w-[60px] h-[40px] rounded-full border border-white/15 transition-[opacity,transform] duration-300 hover:scale-105"
                style={{
                    backgroundColor: GLASS,
                    backdropFilter: 'blur(16px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                    boxShadow: '0 12px 34px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
                    opacity: showBar ? 0 : 1,
                    pointerEvents: showBar ? 'none' : 'auto',
                    transform: `translateX(-50%) translateY(${showBar ? '-140%' : '0'})`,
                }}
            >
                <span className="w-[26px] h-[2.5px] rounded-full bg-white" />
                <span className="w-[26px] h-[2.5px] rounded-full bg-white" />
            </button>

            <div
                className="card-nav-container fixed left-1/2 w-[92%] max-w-[900px] z-[9999] top-3 md:top-4"
                style={{
                    transform: `translateX(-50%) translateY(${showBar ? '0' : '-160%'})`,
                    opacity: showBar ? 1 : 0,
                    pointerEvents: showBar ? 'auto' : 'none',
                    transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
                }}
            >
                <div
                    ref={navRef}
                    className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-2xl relative overflow-hidden will-change-[height] border border-white/12`}
                    style={{
                        backgroundColor: GLASS,
                        backdropFilter: 'blur(20px) saturate(160%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                        boxShadow: '0 24px 60px -20px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.08)',
                    }}
                >
                    {/* Верхняя полоса */}
                    <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-3 md:px-4 z-[2]">
                        {/* Левый кластер: гамбургер + логотип */}
                        <div className="flex items-center gap-3">
                            <div
                                className="hamburger-menu group h-[60px] flex flex-col items-center justify-center cursor-pointer gap-[6px]"
                                onClick={toggleMenu}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); } }}
                                role="button"
                                aria-label={isExpanded ? t.closeMenu : t.openMenu}
                                aria-expanded={isExpanded}
                                tabIndex={0}
                                style={{ color: '#fff' }}
                            >
                                <div className={`w-[28px] h-[2px] bg-current transition-transform duration-300 ease-linear origin-center ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''} group-hover:opacity-75`} />
                                <div className={`w-[28px] h-[2px] bg-current transition-transform duration-300 ease-linear origin-center ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''} group-hover:opacity-75`} />
                            </div>
                            <Link href={lp('/')} aria-label="Digital Pride — главная" onClick={() => isExpanded && collapse()} className="flex items-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/fonts/new-logo.svg" alt="Digital Pride" className="h-[28px] w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
                            </Link>
                        </div>

                        {/* Правая группа: язык + CTA (десктоп) */}
                        <div className="hidden md:flex items-center gap-3">
                            <div className="flex items-center rounded-full overflow-hidden border border-white/15">
                                <a href={toRuPath(pathname)} aria-current={!isKz ? 'true' : undefined} style={langPill(!isKz)}>RU</a>
                                <a href={toKkPath(pathname)} aria-current={isKz ? 'true' : undefined} style={langPill(isKz)}>KZ</a>
                            </div>
                            <button
                                type="button"
                                onClick={() => setCallbackOpen(true)}
                                className="inline-flex items-center h-[40px] px-5 rounded-xl font-bold text-sm cursor-pointer transition-transform hover:scale-[1.04]"
                                style={{ backgroundColor: '#E31C24', color: '#fff' }}
                            >
                                {t.callback}
                            </button>
                        </div>
                    </div>

                    {/* Раскрывающееся содержимое */}
                    <div
                        className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'} md:flex-row md:items-end md:gap-3`}
                        aria-hidden={!isExpanded}
                    >
                        {items.map((item, idx) => (
                            <div
                                key={`${item.label}-${idx}`}
                                ref={setCardRef(idx)}
                                className={`nav-card select-none relative flex flex-col gap-3 px-4 py-3.5 rounded-2xl min-w-0 flex-[1_1_auto] min-h-[70px] md:h-full md:min-h-0 md:flex-[1_1_0%] border ${item.accent ? 'border-white/15' : 'border-white/12'} text-white`}
                                style={item.accent
                                    ? { background: 'linear-gradient(135deg, #E31C24 0%, #b3141b 100%)', boxShadow: '0 18px 50px -20px rgba(227,28,36,0.6)' }
                                    : { background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }
                                }
                            >
                                {/* Заголовок карточки: иконка + название + подзаголовок */}
                                <div className="flex items-center gap-3">
                                    <div className={`shrink-0 grid place-items-center w-10 h-10 rounded-xl ${item.accent ? 'bg-white/20' : 'bg-white/10'}`}>
                                        {item.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="nav-card-label font-bold leading-tight text-[17px] md:text-[19px]">{item.label}</div>
                                        <div className={`text-[12px] font-medium ${item.accent ? 'text-white/70' : 'text-white/45'}`}>{item.subtitle}</div>
                                    </div>
                                </div>
                                <div className="nav-card-links mt-auto flex flex-col gap-[3px]">
                                    {item.links.map((lnk, i) => (
                                        <Link
                                            key={`${lnk.label}-${i}`}
                                            href={lnk.href}
                                            onClick={() => collapse()}
                                            className={`inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-70 text-[14px] md:text-[15px] ${item.accent ? 'text-white' : 'text-white/90'}`}
                                        >
                                            <ArrowIcon />
                                            {lnk.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Мобильная утилита: язык + звонок + телефон */}
                        <div className="md:hidden flex items-center flex-wrap gap-2 pt-1">
                            <div className="flex items-center rounded-full overflow-hidden border border-white/15">
                                <a href={toRuPath(pathname)} aria-current={!isKz ? 'true' : undefined} style={langPill(!isKz)}>RU</a>
                                <a href={toKkPath(pathname)} aria-current={isKz ? 'true' : undefined} style={langPill(isKz)}>KZ</a>
                            </div>
                            <button
                                type="button"
                                onClick={() => { collapse(); setCallbackOpen(true); }}
                                className="inline-flex items-center h-[38px] px-4 rounded-xl font-bold text-sm"
                                style={{ backgroundColor: '#E31C24', color: '#fff' }}
                            >
                                {t.callback}
                            </button>
                            <a
                                href="tel:+77070357777"
                                onClick={() => { trackPhoneClick('cardnav_mobile'); collapse(); }}
                                className="inline-flex items-center h-[38px] px-4 rounded-xl font-bold text-sm border border-white/15 text-white"
                            >
                                +7 (707) 035-77-77
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
        </>
    );
}
