'use client';

import React, { useState } from 'react';
import Head from 'next/head';

interface NewLandingTemplateProps {
  title: string;
  accentWord: string;
  subtitle: string;
  description?: string;
  badgeText?: string;
  stats?: { label: string; value: string }[];
  features: { title: string; description: string; icon?: React.ReactNode }[];
  process: { step: string; title: string; description: string }[];
  pricing?: { name: string; price: string; features: string[]; isPopular?: boolean }[];
  faq: { q: string; a: string }[];
  seoContent?: { title: string; text: React.ReactNode }[];
}

export default function NewLandingTemplate({
  title,
  accentWord,
  subtitle,
  description,
  badgeText = "Новые места ограничены",
  stats = [
    { label: "Клиентов", value: "300+" },
    { label: "Кейсов", value: "150+" },
    { label: "Экспертов", value: "25+" },
    { label: "Рост ROI", value: "300%" }
  ],
  features,
  process,
  pricing,
  faq,
  seoContent
}: NewLandingTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const text = `Здравствуйте! Меня зовут ${name}, мой номер ${phone}. Меня интересует ${title} ${accentWord}.`;
    window.open(`https://wa.me/77000000000?text=${encodeURIComponent(text)}`, '_blank'); // Замените на реальный номер DP
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800;900&family=Onest:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <style dangerouslySetInnerHTML={{
        __html: `
                :root {
                  --black: #0a0a0a;
                  --white: #f5f5f0;
                  --accent: #E8FF00;
                  --accent-dim: #c4d900;
                  --gray-1: #1a1a1a;
                  --gray-2: #2a2a2a;
                  --gray-3: #888;
                  --red: #ff3b3b;
                  --green: #00e676;
                  --blue: #4d8fff;
                }

                .landing-root {
                  font-family: 'Onest', sans-serif;
                  background: var(--black);
                  color: var(--white);
                  overflow-x: hidden;
                  line-height: 1.6;
                  position: relative;
                }

                .landing-root::after {
                  content: '';
                  position: fixed;
                  inset: 0;
                  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
                  pointer-events: none;
                  z-index: 9999;
                }

                .landing-root h1, .landing-root h2, .landing-root h3, .landing-root h4 { 
                    font-family: 'Unbounded', sans-serif; 
                    line-height: 1.15; 
                }

                .l-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

                /* ===== HERO ===== */
                .hero {
                  min-height: 100vh;
                  display: flex; align-items: center;
                  padding: 140px 0 80px;
                  position: relative;
                  overflow: hidden;
                }
                .hero::before {
                  content: '';
                  position: absolute;
                  width: 600px; height: 600px;
                  background: radial-gradient(circle, rgba(232,255,0,0.08) 0%, transparent 70%);
                  top: -100px; right: -100px;
                  border-radius: 50%;
                }
                .hero-grid {
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 60px;
                  align-items: center;
                  position: relative; z-index: 1;
                  text-align: center;
                }
                .hero-badge {
                  display: inline-flex; align-items: center; gap: 8px;
                  background: rgba(232,255,0,0.1);
                  border: 1px solid rgba(232,255,0,0.25);
                  padding: 8px 18px; border-radius: 50px;
                  font-size: 0.85rem; font-weight: 500;
                  color: var(--accent);
                  margin: 0 auto 28px;
                  animation: fadeInUp 0.8s ease;
                }
                .hero-badge .pulse {
                  width: 8px; height: 8px;
                  background: var(--accent);
                  border-radius: 50%;
                  animation: pulse 2s infinite;
                }
                @keyframes pulse {
                  0%, 100% { opacity: 1; transform: scale(1); }
                  50% { opacity: 0.5; transform: scale(1.5); }
                }
                .hero h1 {
                  font-size: clamp(2.4rem, 5vw, 4.2rem);
                  font-weight: 900;
                  letter-spacing: -1.5px;
                  margin-bottom: 24px;
                  animation: fadeInUp 0.8s ease 0.1s both;
                }
                .highlight {
                  background: linear-gradient(135deg, var(--accent), #b8ff00);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                }
                .hero-subtitle {
                  font-size: 1.15rem;
                  color: var(--gray-3);
                  max-width: 620px;
                  margin: 0 auto 36px;
                  animation: fadeInUp 0.8s ease 0.2s both;
                }
                .hero-buttons {
                  display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
                  animation: fadeInUp 0.8s ease 0.3s both;
                }
                .btn-primary {
                  display: inline-flex; align-items: center; gap: 10px;
                  background: var(--accent); color: var(--black);
                  padding: 16px 36px; border-radius: 60px;
                  font-weight: 700; font-size: 1rem;
                  text-decoration: none;
                  transition: all 0.3s;
                  font-family: 'Onest', sans-serif;
                  border: none; cursor: pointer;
                }
                .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(232,255,0,0.25); }

                @keyframes fadeInUp {
                  from { opacity: 0; transform: translateY(30px); }
                  to { opacity: 1; transform: translateY(0); }
                }

                /* ===== STATS BAR ===== */
                .stats-bar {
                  padding: 60px 0;
                  border-top: 1px solid var(--gray-2);
                  border-bottom: 1px solid var(--gray-2);
                }
                .stats-grid {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  gap: 32px;
                  text-align: center;
                }
                .stat-item-num {
                  font-family: 'Unbounded';
                  font-size: clamp(2rem, 4vw, 3rem);
                  font-weight: 900;
                  background: linear-gradient(135deg, var(--accent), #b8ff00);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                }
                .stat-item-label { color: var(--gray-3); font-size: 0.9rem; margin-top: 6px; }

                /* ===== PRICING ===== */
                .pricing-sec { padding: 100px 0; }
                .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; align-items: center; margin-top: 40px; }
                .pricing-card { background: var(--black); border: 1px solid var(--gray-2); border-radius: 20px; padding: 40px 30px; transition: all 0.3s; position: relative; }
                .pricing-card.popular { border-color: var(--accent); box-shadow: 0 10px 40px rgba(232,255,0,0.1); z-index: 2; transform: scale(1.05); }
                .pricing-badge { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--accent); color: var(--black); padding: 6px 16px; border-radius: 20px; font-weight: 700; font-size: 0.8rem; }
                .pricing-name { font-size: 1.5rem; font-weight: 800; margin-bottom: 10px; font-family: 'Unbounded'; }
                .pricing-price { font-size: 2.5rem; font-weight: 900; margin-bottom: 20px; color: var(--accent); font-family: 'Unbounded'; }
                .pricing-features { list-style: none; padding: 0; margin-bottom: 30px; }
                .pricing-features li { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; font-size: 0.95rem; color: var(--gray-3); }
                .pricing-features li::before { content: '✓'; color: var(--accent); font-weight: bold; }
                @media (max-width: 900px) { .pricing-card.popular { transform: none; } }

                /* ===== SEC COMMON ===== */
                .l-section { padding: 100px 0; }
                .section-label {
                  display: inline-flex; align-items: center; gap: 8px;
                  font-size: 0.8rem; font-weight: 600;
                  text-transform: uppercase; letter-spacing: 2px;
                  color: var(--accent);
                  margin-bottom: 20px;
                }
                .section-label::before {
                  content: ''; width: 30px; height: 2px; background: var(--accent);
                }
                .section-title {
                  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
                  font-weight: 800;
                  letter-spacing: -1px;
                  margin-bottom: 20px;
                }

                /* ===== WHY GRID ===== */
                .why-sec { background: var(--gray-1); }
                .why-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                  gap: 24px;
                }
                .why-card {
                  background: var(--black);
                  border: 1px solid var(--gray-2);
                  border-radius: 20px;
                  padding: 36px 28px;
                  transition: all 0.4s;
                  position: relative;
                  overflow: hidden;
                }
                .why-card:hover { border-color: var(--accent); transform: translateY(-4px); }
                .why-card::before {
                  content: '';
                  position: absolute; top: 0; left: 0; right: 0;
                  height: 3px;
                  background: linear-gradient(90deg, var(--accent), transparent);
                  opacity: 0; transition: opacity 0.4s;
                }
                .why-card:hover::before { opacity: 1; }
                .why-icon {
                  width: 56px; height: 56px;
                  background: rgba(232,255,0,0.08);
                  border-radius: 14px;
                  display: flex; align-items: center; justify-content: center;
                  font-size: 1.6rem;
                  margin-bottom: 20px;
                  color: var(--accent);
                }
                .why-card h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; }
                .why-card p { font-size: 0.9rem; color: var(--gray-3); line-height: 1.6; }

                /* ===== PROCESS ===== */
                .process-timeline {
                  position: relative;
                  max-width: 800px;
                  margin: 0 auto 60px;
                }
                .process-timeline::before {
                  content: '';
                  position: absolute;
                  left: 32px; top: 0; bottom: 0;
                  width: 2px;
                  background: linear-gradient(to bottom, var(--accent), transparent);
                }
                .process-step {
                  display: flex; gap: 32px;
                  margin-bottom: 48px;
                  position: relative;
                }
                .step-marker {
                  width: 64px; height: 64px; min-width: 64px;
                  background: var(--black);
                  border: 2px solid var(--accent);
                  border-radius: 50%;
                  display: flex; align-items: center; justify-content: center;
                  font-family: 'Unbounded';
                  font-weight: 800; font-size: 1.2rem;
                  color: var(--accent);
                  z-index: 1;
                }
                .step-content h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; }
                .step-content p { font-size: 0.9rem; color: var(--gray-3); line-height: 1.7; }

                /* ===== CTA / FORM ===== */
                .cta-section {
                  background: linear-gradient(135deg, var(--gray-1) 0%, var(--black) 100%);
                  position: relative;
                  overflow: hidden;
                }
                .cta-grid {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 60px;
                  align-items: center;
                  position: relative; z-index: 1;
                }
                .cta-form {
                  background: var(--gray-1);
                  border: 1px solid var(--gray-2);
                  border-radius: 24px;
                  padding: 40px;
                }
                .form-group { margin-bottom: 18px; }
                .form-group label {
                  display: block; font-size: 0.8rem; font-weight: 500;
                  color: var(--gray-3); margin-bottom: 6px;
                }
                .form-group input, .form-group textarea {
                  width: 100%; background: var(--black);
                  border: 1px solid var(--gray-2); border-radius: 12px;
                  padding: 14px 16px; color: var(--white);
                  font-family: 'Onest', sans-serif; font-size: 0.95rem;
                  transition: border-color 0.3s; outline: none;
                }
                .form-group input:focus { border-color: var(--accent); }
                .form-submit {
                  width: 100%; background: var(--accent); color: var(--black);
                  padding: 16px; border-radius: 14px;
                  font-weight: 700; font-size: 1rem;
                  border: none; cursor: pointer;
                  font-family: 'Onest', sans-serif; transition: all 0.3s;
                }
                .form-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,255,0,0.25); }

                /* ===== FAQ ===== */
                .faq-list { max-width: 800px; margin-top: 40px; }
                .faq-item { border-bottom: 1px solid var(--gray-2); padding: 24px 0; }
                .faq-q {
                  font-weight: 600; font-size: 1.05rem; cursor: pointer;
                  display: flex; justify-content: space-between; align-items: center; transition: color 0.3s; font-family: 'Onest', sans-serif;
                }
                .faq-q:hover { color: var(--accent); }
                .faq-q .toggle {
                  width: 28px; height: 28px; border-radius: 50%;
                  border: 1px solid var(--gray-2); display: flex; align-items: center; justify-content: center;
                  font-size: 1.2rem; color: var(--gray-3); transition: all 0.3s; min-width: 28px;
                }
                .faq-item.active .faq-q .toggle { background: var(--accent); color: var(--black); border-color: var(--accent); transform: rotate(45deg); }
                .faq-a { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.4s ease; }
                .faq-item.active .faq-a { max-height: 400px; padding-top: 16px; }
                .faq-a p { font-size: 0.9rem; color: var(--gray-3); line-height: 1.7; }

                /* SEO TEXT */
                .seo-text p { color: var(--gray-3); margin-bottom: 1em; font-size: 0.95rem; }
                .seo-text a { color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent); }
                .seo-text a:hover { color: var(--white); border-color: var(--white); }

                @media (max-width: 900px) {
                  .cta-grid { grid-template-columns: 1fr; }
                  .stats-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 600px) {
                  .process-timeline::before { left: 24px; }
                  .step-marker { width: 48px; height: 48px; min-width: 48px; font-size: 1rem; }
                  .process-step { gap: 20px; }
                }
            `}} />

      <div className="landing-root">
        {/* HERO */}
        <section className="hero">
          <div className="l-container">
            <div className="hero-grid">
              <div className="hero-text">
                <div className="hero-badge">
                  <span className="pulse"></span>
                  {badgeText}
                </div>
                <h1>{title} <span className="highlight">{accentWord}</span></h1>
                <p className="hero-subtitle">{subtitle}</p>
                <div className="hero-buttons">
                  <a href="#form" className="btn-primary">Оставить заявку</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        {stats && stats.length > 0 && (
          <div className="stats-bar">
            <div className="l-container">
              <div className="stats-grid">
                {stats.map((s, idx) => (
                  <div key={idx} className="stat-item">
                    <div className="stat-item-num">{s.value}</div>
                    <div className="stat-item-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FEATURES (WHY-GRID) */}
        <section className="l-section why-sec">
          <div className="l-container">
            <div className="section-label">Почему мы</div>
            <h2 className="section-title">Что входит в <span className="highlight">продвижение</span></h2>
            <p className="hero-subtitle" style={{ textAlign: 'left', margin: '0 0 50px 0' }}>{description}</p>

            <div className="why-grid">
              {features.map((f, idx) => (
                <div key={idx} className="why-card">
                  {f.icon && <div className="why-icon">{f.icon}</div>}
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="l-section">
          <div className="l-container">
            <div className="section-label">Этапы работы</div>
            <h2 className="section-title">Как мы <span className="highlight">работаем</span></h2>

            <div className="process-timeline">
              {process.map((p, idx) => (
                <div key={idx} className="process-step">
                  <div className="step-marker">{p.step}</div>
                  <div className="step-content">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        {pricing && pricing.length > 0 && (
          <section className="l-section pricing-sec">
            <div className="l-container">
              <div className="section-label">Тарифы</div>
              <h2 className="section-title">Прозрачные <span className="highlight">инвестиции</span></h2>
              <div className="pricing-grid">
                {pricing.map((p, idx) => (
                  <div key={idx} className={`pricing-card ${p.isPopular ? 'popular' : ''}`}>
                    {p.isPopular && <div className="pricing-badge">Хит продаж</div>}
                    <div className="pricing-name">{p.name}</div>
                    <div className="pricing-price">{p.price}</div>
                    <ul className="pricing-features">
                      {p.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                    <a href="#form" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Выбрать</a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA FORM */}
        <section id="form" className="l-section cta-section">
          <div className="l-container">
            <div className="cta-grid">
              <div>
                <h2 className="section-title">Готовы к <span className="highlight">росту</span>?</h2>
                <p style={{ color: 'var(--gray-3)', marginBottom: '30px' }}>Оставьте заявку, и мы бесплатно разработаем стратегию продвижения для вашего бизнеса.</p>
              </div>
              <div className="cta-form">
                <h3 style={{ fontFamily: 'Unbounded', fontSize: '1.5rem', marginBottom: '10px' }}>Обсудить проект</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--gray-3)', marginBottom: '20px' }}>Ответим в WhatsApp в течение 15 минут</div>
                <form onSubmit={handleWhatsApp}>
                  <div className="form-group">
                    <label>Ваше имя</label>
                    <input type="text" name="name" required placeholder="Например, Александр" />
                  </div>
                  <div className="form-group">
                    <label>Ваш телефон</label>
                    <input type="tel" name="phone" required placeholder="+7 (___) ___-__-__" />
                  </div>
                  <button type="submit" className="form-submit">Получить стратегию</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="l-section why-sec">
          <div className="l-container">
            <h2 className="section-title">Частые <span className="highlight">вопросы</span></h2>
            <div className="faq-list">
              {faq.map((item, idx) => (
                <div key={idx} className={`faq-item ${openFaq === idx ? 'active' : ''}`}>
                  <div className="faq-q" onClick={() => toggleFaq(idx)}>
                    {item.q}
                    <div className="toggle">+</div>
                  </div>
                  <div className="faq-a">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        {seoContent && seoContent.length > 0 && (
          <section className="l-section">
            <div className="l-container">
              {seoContent.map((seo, idx) => (
                <div key={idx} style={{ marginBottom: '40px' }}>
                  <h3 style={{ fontFamily: 'Unbounded', fontSize: '1.5rem', marginBottom: '20px' }}>{seo.title}</h3>
                  <div className="seo-text">{seo.text}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
