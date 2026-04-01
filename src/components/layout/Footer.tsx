'use client';

import React from 'react';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export default function Footer() {
    return (
        <>
            <footer style={{ background: '#0a0a0a', color: '#fff', padding: '80px 0 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    {/* Top section: 4 columns */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '48px',
                        marginBottom: '60px',
                    }}>
                        {/* Brand */}
                        <div>
                            <div style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
                                Digital Pride
                            </div>
                            <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7' }}>
                                Маркетинговое агентство в Алматы. Стратегия, реклама и продвижение для бизнеса, который хочет расти.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 style={headingStyle}>Навигация</h4>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="/" style={linkStyle}>Главное</a>
                                <a href="/cases" style={linkStyle}>Кейсы</a>
                                <a href="/smm-almaty" style={linkStyle}>SMM продвижение</a>
                                <a href="/seo-almaty" style={linkStyle}>SEO продвижение</a>
                                <a href="/kontekstnaya-reklama-almaty" style={linkStyle}>Контекстная реклама</a>
                                <a href="/marketing-almaty" style={linkStyle}>Маркетинговая стратегия</a>
                                <a href="/sozdanie-sajtov-almaty" style={linkStyle}>Разработка сайтов</a>
                                <a href="/upravlenie-reputaciej-almaty" style={linkStyle}>Управление репутацией</a>
                                <a href="/bitrix24" style={linkStyle}>Внедрение Bitrix24</a>
                                <a href="/school" style={linkStyle}>Наше обучение</a>
                                <a href="/contacts" style={linkStyle}>О нас</a>
                            </nav>
                        </div>

                        {/* Contacts */}
                        <div>
                            <h4 style={headingStyle}>Контакты</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="tel:+77070357777" onClick={() => trackPhoneClick('footer')} style={{ ...linkStyle, color: '#fff', fontWeight: 700 }}>+7 707 035 7777</a>
                                <p style={{ color: '#777', fontSize: '14px', margin: 0 }}>Алматы, Казахстан</p>
                                <p style={{ color: '#777', fontSize: '14px', margin: 0 }}>пр. Бухар-Жырау 33,<br />БЦ «Женис»</p>
                            </div>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 style={headingStyle}>Мы в сети</h4>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="https://t.me/digitalpride" style={linkStyle} target="_blank" rel="noopener noreferrer">Telegram</a>
                                <a href="https://www.instagram.com/digitalpride.kz/" style={linkStyle} target="_blank" rel="noopener noreferrer">Instagram</a>
                                <a href="https://youtube.com/@digitalpride" style={linkStyle} target="_blank" rel="noopener noreferrer">YouTube</a>
                                <a href="https://wa.me/77070357777" onClick={() => trackWhatsAppClick('footer')} style={linkStyle} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            </nav>
                        </div>
                    </div>

                    {/* Map */}
                    <div style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        marginBottom: '40px',
                        border: '1px solid #222',
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.6!2d76.9292!3d43.2381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eb44c5f2d01%3A0x2c92e11d6cfb5c3e!2z0L_RgC4g0JHRg9GF0LDRgC3QltGL0YDQsNGDIDMzLCDQkNC70LzQsNGC0YssINCa0LDQt9Cw0YXRgdGC0LDQvQ!5e0!3m2!1sru!2skz!4v1709000000000"
                            width="100%"
                            height="300"
                            style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Digital Pride на карте"
                        ></iframe>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid #1a1a1a',
                    padding: '24px 0',
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '16px',
                    }}>
                        <span style={{ color: '#555', fontSize: '14px' }}>© {new Date().getFullYear()} Digital Pride</span>

                        {/* Social icons */}
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a href="https://t.me/digitalpride" target="_blank" rel="noopener noreferrer" style={iconBtnStyle} title="Telegram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/digitalpride.kz/" target="_blank" rel="noopener noreferrer" style={iconBtnStyle} title="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                            </a>
                            <a href="https://youtube.com/@digitalpride" target="_blank" rel="noopener noreferrer" style={iconBtnStyle} title="YouTube">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

const headingStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#888',
    marginBottom: '20px',
};

const linkStyle: React.CSSProperties = {
    color: '#999',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.2s',
};

const iconBtnStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888',
    textDecoration: 'none',
    transition: 'border-color 0.2s, color 0.2s',
};
