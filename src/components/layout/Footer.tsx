'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { localizedPath, getLocaleFromPath } from '@/lib/i18n';

export default function Footer() {
    const pathname = usePathname() || '/';
    const locale = getLocaleFromPath(pathname);
    const isKk = locale === 'kk';
    const lp = (path: string) => localizedPath(path, locale);
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
                                {isKk ? 'Алматыдағы маркетинг агенттігі. Өсуді қалайтын бизнеске арналған стратегия, жарнама және жылжыту.' : 'Маркетинговое агентство в Алматы. Стратегия, реклама и продвижение для бизнеса, который хочет расти.'}
                            </p>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 style={headingStyle}>{isKk ? 'Навигация' : 'Навигация'}</h4>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href={lp('/')} style={linkStyle}>{isKk ? 'Басты' : 'Главное'}</a>
                                <a href={lp('/cases')} style={linkStyle}>{isKk ? 'Кейстер' : 'Кейсы'}</a>
                                <a href={lp('/smm-almaty')} style={linkStyle}>{isKk ? 'SMM жылжыту' : 'SMM продвижение'}</a>
                                <a href={lp('/seo-almaty')} style={linkStyle}>{isKk ? 'SEO жылжыту' : 'SEO продвижение'}</a>
                                <a href={lp('/kontekstnaya-reklama-almaty')} style={linkStyle}>{isKk ? 'Контекстік жарнама' : 'Контекстная реклама'}</a>
                                <a href={lp('/marketing-almaty')} style={linkStyle}>{isKk ? 'Маркетингтік стратегия' : 'Маркетинговая стратегия'}</a>
                                <a href={lp('/sozdanie-sajtov-almaty')} style={linkStyle}>{isKk ? 'Сайт жасау' : 'Разработка сайтов'}</a>
                                <a href={lp('/upravlenie-reputaciej-almaty')} style={linkStyle}>{isKk ? 'Беделді басқару' : 'Управление репутацией'}</a>
                                <a href={lp('/school')} style={linkStyle}>{isKk ? 'Біздің оқыту' : 'Наше обучение'}</a>
                                <a href={lp('/blog')} style={linkStyle}>{isKk ? 'Блог' : 'Блог'}</a>
                                <a href={lp('/o-nas')} style={linkStyle}>{isKk ? 'Біз туралы' : 'О нас'}</a>
                                <a href={lp('/contacts')} style={linkStyle}>{isKk ? 'Байланыс' : 'Контакты'}</a>
                            </nav>
                        </div>

                        {/* Contacts */}
                        <div>
                            <h4 style={headingStyle}>{isKk ? 'Байланыс' : 'Контакты'}</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="tel:+77070357777" onClick={() => trackPhoneClick('footer')} style={{ ...linkStyle, color: '#fff', fontWeight: 700 }}>+7 (707) 035-77-77</a>
                                <p style={{ color: '#777', fontSize: '14px', margin: 0 }}>{isKk ? 'Алматы, Қазақстан' : 'Алматы, Казахстан'}</p>
                                <p style={{ color: '#777', fontSize: '14px', margin: 0 }}>{isKk ? 'Бұхар-Жырау даңғылы, 33,' : 'проспект Бухар-Жирау, 33,'}<br />{isKk ? '3-қабат, 13 студия' : '3 этаж, студия 13'}</p>
                            </div>
                        </div>

                        {/* Social + Projects */}
                        <div>
                            <h4 style={headingStyle}>{isKk ? 'Біз желіде' : 'Мы в сети'}</h4>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="https://wa.me/77070357777" onClick={() => trackWhatsAppClick('footer')} style={linkStyle} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                                <a href="https://t.me/timoshevskij" style={linkStyle} target="_blank" rel="noopener noreferrer">Telegram</a>
                                <a href="https://www.instagram.com/digitalpride.kz/" style={linkStyle} target="_blank" rel="noopener noreferrer">Instagram</a>
                                <a href="https://2gis.kz/almaty/firm/70000001090336559" style={linkStyle} target="_blank" rel="noopener noreferrer">2GIS</a>
                            </nav>
                            <h4 style={{ ...headingStyle, marginTop: '28px' }}>{isKk ? 'Біздің жобалар' : 'Наши проекты'}</h4>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="https://smm-school.kz/" style={{ ...linkStyle, color: '#ef4444' }} target="_blank" rel="noopener noreferrer">{isKk ? 'SMM School — маркетингті оқыту' : 'SMM School — обучение маркетингу'}</a>
                                <a href="https://bizpride.kz/" style={{ ...linkStyle, color: '#ef4444' }} target="_blank" rel="noopener noreferrer">{isKk ? 'BizPride — Алматы бизнес-клубы' : 'BizPride — бизнес-клуб Алматы'}</a>
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
                            src="https://maps.google.com/maps?q=43.232741,76.922234&hl=ru&z=17&output=embed"
                            width="100%"
                            height="300"
                            style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Digital Pride — Алматы, проспект Бухар-Жирау, 33, студия 13"
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                            <span style={{ color: '#555', fontSize: '14px' }}>© {new Date().getFullYear()} Digital Pride</span>
                            <a href={lp('/privacy')} style={{ color: '#555', fontSize: '13px', textDecoration: 'none', borderLeft: '1px solid #333', paddingLeft: '16px' }}>{isKk ? 'Құпиялылық саясаты' : 'Политика конфиденциальности'}</a>
                        </div>

                        {/* Social icons */}
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a href="https://t.me/timoshevskij" target="_blank" rel="noopener noreferrer" style={iconBtnStyle} title="Telegram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/digitalpride.kz/" target="_blank" rel="noopener noreferrer" style={iconBtnStyle} title="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                            </a>
                            <a href="https://2gis.kz/almaty/firm/70000001090336559" target="_blank" rel="noopener noreferrer" style={iconBtnStyle} title="Digital Pride на 2GIS">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.589 2 4 5.589 4 10c0 5.255 7.061 11.522 7.362 11.787a1 1 0 001.276 0C12.939 21.522 20 15.255 20 10c0-4.411-3.589-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" /></svg>
                            </a>
                            <a href="https://wa.me/77070357777" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('footer_icon')} style={iconBtnStyle} title="WhatsApp">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.549 4.106 1.513 5.837L.06 23.46a.5.5 0 00.627.616l5.573-1.492A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.757-.556-5.293-1.517l-.38-.228-3.334.893.882-3.384-.236-.387A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
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
