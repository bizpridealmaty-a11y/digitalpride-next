'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackPhoneClick } from '@/lib/analytics';
import { getLocaleFromPath, getDict, localizedPath, toRuPath, toKkPath } from '@/lib/i18n';
import CallbackModal from './CallbackModal';

export default function RawHeader() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [callbackOpen, setCallbackOpen] = useState(false);
    // Auto-hide header
    const [hidden, setHidden] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const hideTimerRef = useRef<number | null>(null);

    // Language: detect from pathname
    const locale = getLocaleFromPath(pathname);
    const isKz = locale === 'kk';
    const t = getDict(locale);
    const lp = (path: string) => localizedPath(path, locale);

    const services = [
        { href: lp('/smm-almaty'), label: t.smmPromo },
        { href: lp('/seo-almaty'), label: t.seoPromo },
        { href: lp('/sozdanie-sajtov-almaty'), label: t.webDev },
        { href: lp('/upravlenie-reputaciej-almaty'), label: t.serm },
        { href: lp('/marketing-almaty'), label: t.strategy },
        { href: lp('/kontekstnaya-reklama-almaty'), label: t.ppc },
        { href: lp('/target-almaty'), label: t.targetAds },
    ];

    const navItems = [
        { href: lp('/'), label: t.home },
        { href: lp('/services'), label: t.services, dropdown: services },
        { href: lp('/cases'), label: t.cases },
        { href: lp('/pricing'), label: t.pricing },
        { href: lp('/school'), label: t.training },
        { href: lp('/blog'), label: t.blog },
        { href: lp('/o-nas'), label: t.about },
        { href: lp('/contacts'), label: t.contacts },
    ];

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    // Detect touch device — on touch we don't auto-hide (no hover available)
    useEffect(() => {
        const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouch(touch);
    }, []);

    // Auto-hide logic for desktop
    useEffect(() => {
        if (isTouch) return; // no hover on touch
        if (mobileOpen) return; // keep visible while menu is open

        const HIDE_DELAY = 2500;       // ms before header hides after mouse leaves trigger zone
        const INITIAL_DELAY = 5000;    // ms — after page load, header is visible this long
        const TRIGGER_TOP_PX = 80;     // top zone height that triggers reveal

        const scheduleHide = () => {
            if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
            hideTimerRef.current = window.setTimeout(() => setHidden(true), HIDE_DELAY);
        };

        const cancelHide = () => {
            if (hideTimerRef.current) {
                window.clearTimeout(hideTimerRef.current);
                hideTimerRef.current = null;
            }
        };

        // Initial: visible, then hide after INITIAL_DELAY
        const initialTimer = window.setTimeout(() => {
            setHidden(true);
        }, INITIAL_DELAY);

        const handleMove = (e: MouseEvent) => {
            const inHotZone = e.clientY <= TRIGGER_TOP_PX;
            if (inHotZone) {
                cancelHide();
                window.clearTimeout(initialTimer);
                setHidden(false);
            } else {
                if (!hidden) scheduleHide();
            }
        };

        const handleLeave = () => scheduleHide();

        window.addEventListener('mousemove', handleMove, { passive: true });
        document.addEventListener('mouseleave', handleLeave);

        return () => {
            window.clearTimeout(initialTimer);
            cancelHide();
            window.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseleave', handleLeave);
        };
    }, [isTouch, mobileOpen, hidden]);

    return (
        <>
            {/* Invisible hot zone in the top-right corner — triggers reveal even when header is fully hidden.
              * Always present so users can find the menu. Larger than just a corner so it's easy to hit. */}
            <div
                aria-hidden="true"
                onMouseEnter={() => setHidden(false)}
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '320px',
                    height: '40px',
                    zIndex: 10002,
                    pointerEvents: isTouch || mobileOpen || !hidden ? 'none' : 'auto',
                }}
            />

            {/* Edge hint — subtle indicator in top-right that shows the menu is hideable.
              * Visible only when header is hidden, fades out on hover. */}
            {!isTouch && hidden && !mobileOpen && (
                <button
                    type="button"
                    aria-label={t.showMenu}
                    onClick={() => setHidden(false)}
                    onMouseEnter={() => setHidden(false)}
                    style={{
                        position: 'fixed',
                        top: '12px',
                        right: '20px',
                        zIndex: 10003,
                        background: 'rgba(0, 0, 0, 0.55)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '999px',
                        padding: '6px 14px',
                        cursor: 'pointer',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '0.4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        opacity: 0.75,
                        transition: 'opacity 0.2s ease',
                    }}
                >
                    <span
                        style={{
                            width: '14px',
                            height: '2px',
                            background: '#fff',
                            borderRadius: '2px',
                            display: 'inline-block',
                            position: 'relative',
                        }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>{t.menu}</span>
                </button>
            )}

            <header
                className="dp-header"
                onMouseEnter={() => setHidden(false)}
                onMouseLeave={() => {
                    if (!isTouch && !mobileOpen) {
                        if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
                        hideTimerRef.current = window.setTimeout(() => setHidden(true), 1500);
                    }
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    width: '100vw',
                    zIndex: 9999,
                    background: '#000',
                    backgroundColor: '#000',
                    color: '#fff',
                    height: '72px',
                    display: 'flex',
                    alignItems: 'center',
                    border: 'none',
                    boxShadow: 'none',
                    overflow: 'visible',
                    transform: hidden && !isTouch ? 'translateY(-100%)' : 'translateY(0)',
                    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <div
                    style={{
                        maxWidth: '1280px',
                        width: '100%',
                        margin: '0 auto',
                        padding: '0 24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                    }}
                >
                    {/* Desktop nav */}
                    <nav className="dp-nav-desktop" aria-label={t.mainMenu} style={{ display: 'none' }}>
                        <ul style={{ display: 'flex', alignItems: 'center', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                            {navItems.map((item) => (
                                <li
                                    key={item.href}
                                    style={{ position: 'relative' }}
                                    className={item.dropdown ? 'dp-has-dropdown' : ''}
                                >
                                    <Link
                                        href={item.href}
                                        style={{
                                            color: '#fff',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            textDecoration: 'none',
                                            padding: '8px 0',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                        }}
                                    >
                                        {item.label}
                                        {item.dropdown && (
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        )}
                                    </Link>
                                    {item.dropdown && (
                                        <ul
                                            className="dp-dropdown"
                                            style={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: 0,
                                                minWidth: '240px',
                                                background: 'rgba(10, 10, 10, 0.85)',
                                                backdropFilter: 'blur(20px) saturate(180%)',
                                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: '14px',
                                                padding: '8px 0',
                                                margin: 0,
                                                listStyle: 'none',
                                                opacity: 0,
                                                visibility: 'hidden',
                                                transform: 'translateY(8px)',
                                                transition: 'opacity .2s, visibility .2s, transform .2s',
                                                boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
                                            }}
                                        >
                                            {item.dropdown.map((d) => (
                                                <li key={d.href}>
                                                    <Link
                                                        href={d.href}
                                                        style={{
                                                            display: 'block',
                                                            padding: '10px 20px',
                                                            color: '#ccc',
                                                            fontSize: '14px',
                                                            textDecoration: 'none',
                                                        }}
                                                    >
                                                        {d.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                            <li>
                                <Link
                                    href={lp('/threads-prodvizhenie')}
                                    style={{
                                        background: '#39FF14',
                                        color: '#000',
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        textDecoration: 'none',
                                        boxShadow: '0 0 12px rgba(57,255,20,0.4)',
                                    }}
                                >
                                    {t.threads}
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Phone */}
                    <a
                        href="tel:+77070357777"
                        onClick={() => trackPhoneClick('header')}
                        className="dp-header-phone"
                        style={{
                            color: '#fff',
                            fontSize: '14px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            marginLeft: 'auto',
                            display: 'none',
                        }}
                    >
                        +7 (707) 035-77-77
                    </a>

                    {/* Callback button */}
                    <button
                        type="button"
                        onClick={() => setCallbackOpen(true)}
                        className="dp-header-callback"
                        style={{
                            background: '#ef4444',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '10px',
                            fontWeight: 700,
                            fontSize: '13px',
                            cursor: 'pointer',
                            display: 'none',
                            transition: 'transform .15s, box-shadow .15s',
                        }}
                    >
                        {t.callback}
                    </button>

                    {/* Language switcher */}
                    <div className="dp-lang-switch" style={{ display: 'flex', alignItems: 'center', gap: '0', marginLeft: '8px' }}>
                        <a
                            href={toRuPath(pathname)}
                            aria-current={!isKz ? 'true' : undefined}
                            style={{
                                padding: '8px 14px',
                                borderRadius: '10px 0 0 10px',
                                fontSize: '13px',
                                fontWeight: 700,
                                letterSpacing: '0.5px',
                                color: isKz ? 'rgba(255,255,255,0.45)' : '#fff',
                                background: isKz ? 'transparent' : 'rgba(255,255,255,0.15)',
                                border: '1px solid rgba(255,255,255,0.18)',
                                borderRight: 'none',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all .2s',
                            }}
                        >
                            RU
                        </a>
                        <a
                            href={toKkPath(pathname)}
                            aria-current={isKz ? 'true' : undefined}
                            style={{
                                padding: '8px 14px',
                                borderRadius: '0 10px 10px 0',
                                fontSize: '13px',
                                fontWeight: 700,
                                letterSpacing: '0.5px',
                                color: isKz ? '#fff' : 'rgba(255,255,255,0.45)',
                                background: isKz ? 'rgba(255,255,255,0.15)' : 'transparent',
                                border: '1px solid rgba(255,255,255,0.18)',
                                borderLeft: 'none',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all .2s',
                            }}
                        >
                            KZ
                        </a>
                    </div>

                    {/* Burger */}
                    <button
                        type="button"
                        aria-label={t.openMenu}
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen(true)}
                        className="dp-burger"
                        style={{
                            marginLeft: 'auto',
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.2)',
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '4px',
                            padding: 0,
                        }}
                    >
                        <span style={{ width: '18px', height: '2px', background: '#fff', borderRadius: '2px' }} />
                        <span style={{ width: '18px', height: '2px', background: '#fff', borderRadius: '2px' }} />
                        <span style={{ width: '18px', height: '2px', background: '#fff', borderRadius: '2px' }} />
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            {mobileOpen && (
                <>
                    <div
                        onClick={() => setMobileOpen(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.6)',
                            zIndex: 10000,
                        }}
                        aria-hidden="true"
                    />
                    <div
                        role="dialog"
                        aria-label={t.mobileMenu}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '320px',
                            maxWidth: '90vw',
                            height: '100dvh',
                            background: 'rgba(10, 10, 10, 0.85)',
                            backdropFilter: 'blur(24px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                            zIndex: 10001,
                            padding: '80px 24px 40px',
                            overflowY: 'auto',
                            transform: 'translateX(0)',
                        }}
                    >
                        <button
                            type="button"
                            aria-label={t.closeMenu}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'none',
                                border: 'none',
                                color: '#fff',
                                fontSize: '28px',
                                cursor: 'pointer',
                                width: '40px',
                                height: '40px',
                            }}
                        >
                            ✕
                        </button>

                        <nav aria-label={t.mobileMenu} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <Link href={lp('/')} onClick={() => setMobileOpen(false)} style={mLink}>{t.home}</Link>
                            {services.map((s) => (
                                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} style={mLink}>
                                    {s.label}
                                </Link>
                            ))}
                            <div style={{ height: '1px', background: '#2a2a2a', margin: '8px 0' }} />
                            <Link href={lp('/cases')} onClick={() => setMobileOpen(false)} style={mLink}>{t.cases}</Link>
                            <Link href={lp('/pricing')} onClick={() => setMobileOpen(false)} style={mLink}>{t.pricing}</Link>
                            <Link href={lp('/school')} onClick={() => setMobileOpen(false)} style={mLink}>{t.training}</Link>
                            <Link href={lp('/blog')} onClick={() => setMobileOpen(false)} style={mLink}>{t.blog}</Link>
                            <Link href={lp('/o-nas')} onClick={() => setMobileOpen(false)} style={mLink}>{t.about}</Link>
                            <Link href={lp('/contacts')} onClick={() => setMobileOpen(false)} style={mLink}>{t.contacts}</Link>
                            <div style={{ height: '1px', background: '#2a2a2a', margin: '8px 0' }} />
                            <Link
                                href={lp('/threads-prodvizhenie')}
                                onClick={() => setMobileOpen(false)}
                                style={{ ...mLink, color: '#39FF14', fontWeight: 800, background: 'rgba(57,255,20,0.08)', borderRadius: '12px' }}
                            >
                                {t.threadsFull}
                            </Link>
                            <div style={{ height: '1px', background: '#2a2a2a', margin: '8px 0' }} />
                            <a
                                href="tel:+77070357777"
                                onClick={() => { trackPhoneClick('mobile_menu'); setMobileOpen(false); }}
                                style={{ ...mLink, color: '#ef4444', fontWeight: 800 }}
                            >
                                {t.phone}
                            </a>
                            <button
                                type="button"
                                onClick={() => { setMobileOpen(false); setCallbackOpen(true); }}
                                style={{
                                    marginTop: '12px',
                                    background: '#ef4444',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '14px',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                }}
                            >
                                {t.orderCallback}
                            </button>
                        </nav>
                    </div>
                </>
            )}

            {/* Inline responsive styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 1024px) {
                    .dp-nav-desktop { display: block !important; }
                    .dp-burger { display: none !important; }
                }
                @media (min-width: 1200px) {
                    .dp-header-phone { display: inline-block !important; }
                    .dp-header-callback { display: inline-block !important; }
                }
                .dp-has-dropdown:hover .dp-dropdown {
                    opacity: 1 !important;
                    visibility: visible !important;
                    transform: translateY(0) !important;
                }
                .dp-header-callback:hover { transform: scale(1.04); box-shadow: 0 6px 24px rgba(239,68,68,0.4); }
                `
            }} />

            <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
        </>
    );
}

const mLink: React.CSSProperties = {
    display: 'block',
    padding: '12px 16px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '15px',
    borderRadius: '8px',
};
