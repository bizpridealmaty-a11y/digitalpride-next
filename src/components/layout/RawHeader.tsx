'use client';

import React, { useEffect } from 'react';

export default function RawHeader() {
    useEffect(() => {
        // Mobile burger menu handler
        const burgers = document.querySelectorAll('.nav_burger');
        const mobileMenu = document.getElementById('dp-mobile-menu');
        const overlay = document.getElementById('dp-mobile-overlay');

        const toggleMenu = () => {
            mobileMenu?.classList.toggle('dp-mobile-open');
            overlay?.classList.toggle('dp-overlay-visible');
            document.body.style.overflow = mobileMenu?.classList.contains('dp-mobile-open') ? 'hidden' : '';
        };

        burgers.forEach(b => b.addEventListener('click', toggleMenu));
        overlay?.addEventListener('click', toggleMenu);

        // Close menu on link click
        const links = mobileMenu?.querySelectorAll('a');
        links?.forEach(l => l.addEventListener('click', () => {
            mobileMenu?.classList.remove('dp-mobile-open');
            overlay?.classList.remove('dp-overlay-visible');
            document.body.style.overflow = '';
        }));

        return () => {
            burgers.forEach(b => b.removeEventListener('click', toggleMenu));
            overlay?.removeEventListener('click', toggleMenu);
        };
    }, []);

    return <>
        <div dangerouslySetInnerHTML={{
            __html: `
<main class="main">
    <style>
        .header .nav-link, .header .nav-link:hover,
        .header .dropdown-toggle, .header .dropdown-toggle:hover,
        .header .h-tel a, .header .h-tel a:hover,
        .header .btn-primary,
        .header a { color: #fff !important; }
        .header .top-logo img { transform: scale(0.9); }
        .header .nav_burger { border-color: #fff; }
        .header .nav_burger::before, .header .nav_burger::after { background: #fff; }
        .header .dropdown-menu {
            background: #111 !important;
            border: 1px solid #333 !important;
            border-radius: 8px !important;
            padding: 8px 0 !important;
            min-width: 220px !important;
            box-shadow: 0 12px 40px rgba(0,0,0,0.6) !important;
        }
        .header .dropdown-item {
            color: #ccc !important;
            padding: 8px 20px !important;
            font-size: 14px !important;
            transition: background 0.2s, color 0.2s;
        }
        .header .dropdown-item:hover, .header .dropdown-item:focus {
            background: #222 !important;
            color: #fff !important;
        }
    </style>
    <div class="header" id="sticky" style="background:#000;color:#fff;position:fixed;top:0;left:0;right:0;z-index:9990">
        <div class="container">
            <div class="row header-row">
                <div class="col-3 col-sm-4 col-md-2 align-self-center">
                <div class="top-logo">
                    <a href="/">
                        <img src="fonts/new-logo.svg" alt="logo" class="" style="filter:brightness(0) invert(1)">
                    </a>
                </div>
            </div>
            
            <div class="col-2 col-sm-2 col-md-5 header-col-menu menu d-none d-lg-block">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Главное</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="/services" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Услуги</a>
                          <div class="dropdown-menu">
                            <a href="/smm" class="dropdown-item">SMM продвижение</a>
                            <a href="/seo" class="dropdown-item">SEO продвижение</a>
                            <a href="/site" class="dropdown-item">Разработка сайтов</a>
                            <a href="/serm" class="dropdown-item">Управление репутацией (SERM)</a>
                            <a href="/branding" class="dropdown-item">Брендинг и стратегия</a>
                            <a href="/context" class="dropdown-item">Контекстная реклама (PPC)</a>
                            <a href="/bitrix24" class="dropdown-item">Внедрение Bitrix24</a>
                          </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/case">Кейсы</a>
                    </li>
                    <!--<li class="nav-item">
                        <a class="nav-link" href="prices.html">Цены</a>
                    </li>-->
                    <li class="nav-item">
                        <a class="nav-link" href="/school">Наше обучение</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">О нас</a>
                    </li>
                </ul>
            </div>
            
            <div class="col-8 col-sm-6 col-md-2 align-self-center d-none d-xl-block">
                <div class="text-right h-tel">
                    <a href="tel:+77070357777">+7 (707) 035-77-77</a>
                </div>
            </div>
            
            <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 align-self-center">
                <div class="text-center text-xl-right">
                    <button class="btn btn-primary tel_head-feedback_button" data-toggle="modal" data-target="#modal_form-feed">Обратный звонок</button>
                </div>
            </div>
            <div class="col-3 col-sm-2 col-md-4 col-lg-1 align-self-center d-xl-none">
                <div class="">
                    <div class="nav_burger"></div>
                </div>
            </div>
            </div>
        </div>
    </div>

<div class="header" id="myHeader" style="background:#000;color:#fff">
    <div class="container">
        <div class="row header-row">
            <div class="col-3 col-sm-4 col-md-2 align-self-center">
                <div class="top-logo">
                    <a href="/">
                        <img src="fonts/new-logo.svg" alt="logo" class="" style="filter:brightness(0) invert(1)">
                    </a>
                </div>
            </div>
            
            <div class="col-2 col-sm-2 col-md-5 header-col-menu menu d-none d-xl-block">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Главное</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="/services" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Услуги</a>
                          <div class="dropdown-menu">
                            <a href="/smm" class="dropdown-item">SMM продвижение</a>
                            <a href="/seo" class="dropdown-item">SEO продвижение</a>
                            <a href="/site" class="dropdown-item">Разработка сайтов</a>
                            <a href="/serm" class="dropdown-item">Управление репутацией (SERM)</a>
                            <a href="/branding" class="dropdown-item">Брендинг и стратегия</a>
                            <a href="/context" class="dropdown-item">Контекстная реклама (PPC)</a>
                            <a href="/bitrix24" class="dropdown-item">Внедрение Bitrix24</a>
                          </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/case">Кейсы</a>
                    </li>
                    <!--<li class="nav-item">
                        <a class="nav-link" href="prices.html">Цены</a>
                    </li>-->
                    <li class="nav-item">
                        <a class="nav-link" href="/school">Наше обучение</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">О нас</a>
                    </li>
                </ul>
            </div>
            
            <div class="col-8 col-sm-6 col-md-2 align-self-center d-none d-xl-block">
                <div class="text-right h-tel">
                    <a href="tel:+77070357777">+7 (707) 035-77-77</a>
                </div>
            </div>
            
            <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 align-self-center">
                <div class="text-center text-xl-right">
                    <button class="btn btn-primary tel_head-feedback_button" data-toggle="modal" data-target="#modal_form-feed">Обратный звонок</button>
                </div>
            </div>
            <div class="col-3 col-sm-2 col-md-4 col-lg-1 align-self-center d-xl-none">
                <div class="">
                    <div class="nav_burger"></div>
                </div>
            </div>
        </div>
    </div>
</div>
` }} />

        {/* Dark overlay */}
        <div id="dp-mobile-overlay" style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 9998,
            opacity: 0,
            visibility: 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease',
        }}></div>

        {/* Slide-out mobile menu */}
        <div id="dp-mobile-menu" style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '300px',
            maxWidth: '85vw',
            height: '100vh',
            background: '#111',
            zIndex: 9999,
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            overflowY: 'auto',
            padding: '80px 24px 40px',
        }}>
            {/* Close button */}
            <button onClick={() => {
                document.getElementById('dp-mobile-menu')?.classList.remove('dp-mobile-open');
                document.getElementById('dp-mobile-overlay')?.classList.remove('dp-overlay-visible');
                document.body.style.overflow = '';
            }} style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '28px',
                cursor: 'pointer',
                padding: '8px',
            }}>✕</button>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a href="/" style={linkStyle}>Главное</a>
                <a href="/smm" style={linkStyle}>SMM продвижение</a>
                <a href="/seo" style={linkStyle}>SEO продвижение</a>
                <a href="/site" style={linkStyle}>Разработка сайтов</a>
                <a href="/serm" style={linkStyle}>Управление репутацией</a>
                <a href="/branding" style={linkStyle}>Брендинг и стратегия</a>
                <a href="/context" style={linkStyle}>Контекстная реклама</a>
                <a href="/bitrix24" style={linkStyle}>Внедрение Bitrix24</a>
                <div style={{ height: '1px', background: '#333', margin: '8px 0' }}></div>
                <a href="/case" style={linkStyle}>Кейсы</a>
                <a href="/school" style={linkStyle}>Наше обучение</a>
                <a href="/contact" style={linkStyle}>О нас</a>
                <div style={{ height: '1px', background: '#333', margin: '8px 0' }}></div>
                <a href="tel:+77070357777" style={{ ...linkStyle, color: '#ef4444', fontWeight: 800 }}>+7 (707) 035-77-77</a>
            </nav>
        </div>

        {/* Inline styles for mobile menu states */}
        <style dangerouslySetInnerHTML={{
            __html: `
            .dp-mobile-open {
                transform: translateX(0) !important;
            }
            .dp-overlay-visible {
                opacity: 1 !important;
                visibility: visible !important;
            }
        `}} />
    </>;
}

const linkStyle: React.CSSProperties = {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 600,
    padding: '12px 16px',
    borderRadius: '12px',
    transition: 'background 0.2s, color 0.2s',
    display: 'block',
};
