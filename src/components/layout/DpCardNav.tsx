'use client';

import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
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

type NavCardLink = { label: string; href: string };
type NavCard = { label: string; bgColor: string; textColor: string; links: NavCardLink[] };

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

    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const ease = 'power3.out';

    const groupTitles = isKz
        ? ['Жылжыту', 'Әзірлеу және стратегия', 'Компания']
        : ['Продвижение', 'Разработка и стратегия', 'Компания'];

    const items: NavCard[] = [
        {
            label: groupTitles[0],
            bgColor: '#E31C24',
            textColor: '#ffffff',
            links: [
                { label: t.smmPromo, href: lp('/smm-almaty') },
                { label: t.targetAds, href: lp('/target-almaty') },
                { label: t.ppc, href: lp('/kontekstnaya-reklama-almaty') },
                { label: t.seoPromo, href: lp('/seo-almaty') },
            ],
        },
        {
            label: groupTitles[1],
            bgColor: '#17171c',
            textColor: '#ffffff',
            links: [
                { label: t.webDev, href: lp('/sozdanie-sajtov-almaty') },
                { label: t.strategy, href: lp('/marketing-almaty') },
                { label: t.serm, href: lp('/upravlenie-reputaciej-almaty') },
                { label: t.cases, href: lp('/cases') },
            ],
        },
        {
            label: groupTitles[2],
            bgColor: '#2A2930',
            textColor: '#ffffff',
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
        if (!tl) { setIsExpanded(false); return; }
        tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
        tl.reverse();
    }, []);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
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

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => { if (el) cardsRef.current[i] = el; };

    const langPill = (active: boolean): React.CSSProperties => ({
        padding: '6px 11px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.4px',
        color: active ? '#fff' : '#9a9aa2', background: active ? '#111' : 'transparent',
        textDecoration: 'none', transition: 'all .2s', lineHeight: 1,
    });

    return (
        <>
            <div className="card-nav-container fixed left-1/2 -translate-x-1/2 w-[92%] max-w-[900px] z-[9999] top-3 md:top-4">
                <div
                    ref={navRef}
                    className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-2xl relative overflow-hidden will-change-[height] border border-black/5`}
                    style={{ backgroundColor: '#ffffff', boxShadow: '0 18px 50px -18px rgba(0,0,0,0.35)' }}
                >
                    {/* Верхняя полоса */}
                    <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-2 pl-4 z-[2]">
                        {/* Гамбургер */}
                        <div
                            className="hamburger-menu group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none"
                            onClick={toggleMenu}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); } }}
                            role="button"
                            aria-label={isExpanded ? t.closeMenu : t.openMenu}
                            aria-expanded={isExpanded}
                            tabIndex={0}
                            style={{ color: '#111' }}
                        >
                            <div className={`w-[30px] h-[2px] bg-current transition-transform duration-300 ease-linear origin-center ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''} group-hover:opacity-75`} />
                            <div className={`w-[30px] h-[2px] bg-current transition-transform duration-300 ease-linear origin-center ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''} group-hover:opacity-75`} />
                        </div>

                        {/* Логотип */}
                        <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
                            <Link href={lp('/')} aria-label="Digital Pride — главная" onClick={() => isExpanded && collapse()}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/fonts/new-logo.svg" alt="Digital Pride" className="h-[30px] w-auto" />
                            </Link>
                        </div>

                        {/* Правая группа: язык + CTA (десктоп) */}
                        <div className="hidden md:flex items-center gap-3 order-3">
                            <div className="flex items-center rounded-full overflow-hidden border border-black/10">
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
                                className="nav-card select-none relative flex flex-col gap-2 px-4 py-3 rounded-xl min-w-0 flex-[1_1_auto] min-h-[70px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
                                style={{ backgroundColor: item.bgColor, color: item.textColor }}
                            >
                                <div className="nav-card-label font-semibold tracking-[-0.5px] text-[17px] md:text-[20px]">{item.label}</div>
                                <div className="nav-card-links mt-auto flex flex-col gap-[3px]">
                                    {item.links.map((lnk, i) => (
                                        <Link
                                            key={`${lnk.label}-${i}`}
                                            href={lnk.href}
                                            onClick={() => collapse()}
                                            className="inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-70 text-[14px] md:text-[15px]"
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
                            <div className="flex items-center rounded-full overflow-hidden border border-black/10 bg-white">
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
                                className="inline-flex items-center h-[38px] px-4 rounded-xl font-bold text-sm border border-black/10 text-black"
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
