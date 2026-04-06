/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';
import React, { useEffect, useState } from 'react';

export default function ThreadsClient() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const phoneInput = document.getElementById('f-phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', function(e) {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length > 0) {
          if (val[0] === '8') val = '7' + val.substring(1);
          if (val[0] !== '7') val = '7' + val;
        }
        let formatted = '';
        if (val.length > 0) formatted = '+' + val[0];
        if (val.length > 1) formatted += ' (' + val.substring(1, 4);
        if (val.length > 4) formatted += ') ' + val.substring(4, 7);
        if (val.length > 7) formatted += '-' + val.substring(7, 9);
        if (val.length > 9) formatted += '-' + val.substring(9, 11);
        e.target.value = formatted;
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.why-card, .service-card, .screenshot-card, .stats-card, .process-step, .faq-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }, []);

  const toggleFaq = (e) => {
    const item = e.currentTarget.closest('.faq-item');
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  };

  const submitForm = (e) => {
    e.preventDefault();
    const name = document.getElementById('f-name').value.trim();
    const phone = document.getElementById('f-phone').value.trim();
    const niche = document.getElementById('f-niche').value;
    const link = document.getElementById('f-link').value.trim();

    if (!name) { alert('Пожалуйста, введите ваше имя'); return; }
    if (!phone) { alert('Пожалуйста, введите номер WhatsApp'); return; }

    const whatsappNumber = '77478051680'; 

    let message = '🔥 *Заявка на продвижение в Threads*\n\n';
    message += '👤 Имя: ' + name + '\n';
    message += '📱 Телефон: ' + phone + '\n';
    if (niche) message += '🎯 Ниша: ' + niche + '\n';
    if (link) message += '🔗 Аккаунт: ' + link + '\n';
    message += '\n📍 Источник: сайт Digital Pride';

    const encoded = encodeURIComponent(message);
    window.open('https://wa.me/' + whatsappNumber + '?text=' + encoded, '_blank');
  };

  return (
    <div className="threads-page-isolation">
      <style dangerouslySetInnerHTML={{__html: `

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --black: #0a0a0a;
  --white: #f5f5f0;
  --accent: #E8FF00;
  --accent-dim: #c4d900;
  --threads: #000000;
  --threads-border: #333;
  --gray-1: #1a1a1a;
  --gray-2: #2a2a2a;
  --gray-3: #888;
  --red: #ff3b3b;
  --green: #00e676;
  --blue: #4d8fff;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Onest', sans-serif;
  background: var(--black);
  color: var(--white);
  overflow-x: hidden;
  line-height: 1.6;
}

/* GRAIN OVERLAY */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}

h1, h2, h3, h4 { font-family: 'Unbounded', sans-serif; line-height: 1.15; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* ===== HEADER ===== */
.site-header {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 18px 0;
  background: rgba(10,10,10,0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.site-header .container {
  display: flex; align-items: center; justify-content: space-between;
}
.logo {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.3rem; font-weight: 800;
  color: var(--white);
  text-decoration: none;
  letter-spacing: -0.5px;
}
.logo span { color: var(--accent); }
.header-cta {
  background: var(--accent); color: var(--black);
  padding: 10px 24px; border-radius: 50px;
  font-weight: 600; font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s;
  font-family: 'Onest', sans-serif;
}
.header-cta:hover { transform: scale(1.05); box-shadow: 0 0 30px rgba(232,255,0,0.3); }

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
.hero::after {
  content: '';
  position: absolute;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(77,143,255,0.06) 0%, transparent 70%);
  bottom: -50px; left: -50px;
  border-radius: 50%;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
  position: relative; z-index: 1;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(232,255,0,0.1);
  border: 1px solid rgba(232,255,0,0.25);
  padding: 8px 18px; border-radius: 50px;
  font-size: 0.85rem; font-weight: 500;
  color: var(--accent);
  margin-bottom: 28px;
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
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 900;
  letter-spacing: -1.5px;
  margin-bottom: 24px;
  animation: fadeInUp 0.8s ease 0.1s both;
}
.hero h1 .highlight {
  background: linear-gradient(135deg, var(--accent), #b8ff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-subtitle {
  font-size: 1.15rem;
  color: var(--gray-3);
  max-width: 520px;
  margin-bottom: 36px;
  animation: fadeInUp 0.8s ease 0.2s both;
}
.hero-buttons {
  display: flex; gap: 16px; flex-wrap: wrap;
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
.btn-secondary {
  display: inline-flex; align-items: center; gap: 10px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  color: var(--white);
  padding: 16px 36px; border-radius: 60px;
  font-weight: 500; font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  font-family: 'Onest', sans-serif;
}
.btn-secondary:hover { border-color: var(--accent); color: var(--accent); }

/* Hero visual */
.hero-visual {
  position: relative;
  animation: fadeInUp 0.8s ease 0.4s both;
}
.hero-phone {
  width: 300px; margin: 0 auto;
  background: var(--gray-1);
  border-radius: 36px;
  border: 2px solid var(--gray-2);
  padding: 12px;
  position: relative;
  box-shadow: 0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
}
.phone-notch {
  width: 100px; height: 24px;
  background: var(--black);
  border-radius: 0 0 16px 16px;
  margin: 0 auto 12px;
}
.phone-screen {
  background: var(--black);
  border-radius: 24px;
  padding: 20px 16px;
  min-height: 440px;
}
.phone-header {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 20px; padding-bottom: 14px;
  border-bottom: 1px solid var(--gray-2);
}
.phone-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #b8ff00);
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 0.75rem; color: var(--black);
  font-family: 'Unbounded', sans-serif;
}
.phone-username { font-weight: 600; font-size: 0.85rem; }
.phone-handle { font-size: 0.75rem; color: var(--gray-3); }
.phone-post {
  background: var(--gray-1);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 12px;
  border: 1px solid var(--gray-2);
}
.phone-post p { font-size: 0.8rem; line-height: 1.5; margin-bottom: 10px; }
.phone-post-stats {
  display: flex; gap: 16px;
  font-size: 0.7rem; color: var(--gray-3);
}
.phone-post-stats span { display: flex; align-items: center; gap: 4px; }
.stat-fire { color: #ff6b35; }
.stat-up { color: var(--green); }
.hero-float-stat {
  position: absolute;
  background: var(--gray-1);
  border: 1px solid var(--gray-2);
  border-radius: 16px;
  padding: 14px 18px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}
.float-stat-1 { top: 30px; left: -60px; animation: float 4s ease-in-out infinite; }
.float-stat-2 { bottom: 60px; right: -50px; animation: float 4s ease-in-out infinite 1s; }
.float-stat-number { font-family: 'Unbounded'; font-weight: 800; font-size: 1.4rem; color: var(--accent); }
.float-stat-label { font-size: 0.7rem; color: var(--gray-3); margin-top: 2px; }
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

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

/* ===== SECTION COMMON ===== */
section { padding: 100px 0; }
.section-label {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 0.8rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 20px;
}
.section-label::before {
  content: '';
  width: 30px; height: 2px;
  background: var(--accent);
}
.section-title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 20px;
}
.section-subtitle {
  font-size: 1.05rem; color: var(--gray-3);
  max-width: 600px; margin-bottom: 50px;
}

/* ===== WHY THREADS ===== */
.why-threads { background: var(--gray-1); }
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
}
.why-card h3 {
  font-size: 1.15rem; font-weight: 700;
  margin-bottom: 12px;
}
.why-card p { font-size: 0.9rem; color: var(--gray-3); line-height: 1.6; }

/* ===== SERVICES ===== */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.service-card {
  background: var(--gray-1);
  border: 1px solid var(--gray-2);
  border-radius: 20px;
  padding: 40px 32px;
  transition: all 0.4s;
  position: relative;
}
.service-card:hover { border-color: rgba(232,255,0,0.3); }
.service-num {
  font-family: 'Unbounded';
  font-size: 3rem; font-weight: 900;
  color: rgba(232,255,0,0.08);
  position: absolute; top: 20px; right: 28px;
}
.service-card h3 {
  font-size: 1.2rem; font-weight: 700;
  margin-bottom: 14px;
  padding-right: 60px;
}
.service-card p { font-size: 0.9rem; color: var(--gray-3); line-height: 1.7; }
.service-tag {
  display: inline-block;
  background: rgba(232,255,0,0.1);
  color: var(--accent);
  font-size: 0.75rem; font-weight: 600;
  padding: 4px 12px; border-radius: 20px;
  margin-top: 16px;
}

/* ===== SCREENSHOTS ===== */
.screenshots { background: var(--gray-1); }
.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.screenshot-card {
  background: var(--black);
  border: 1px solid var(--gray-2);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s;
}
.screenshot-card:hover { transform: translateY(-4px); border-color: var(--accent); }
.screenshot-img {
  width: 100%;
  aspect-ratio: 9/16;
  background: var(--gray-2);
  display: flex; flex-direction: column;
  padding: 20px 16px;
  position: relative;
}
.thread-mock {
  flex: 1;
  display: flex; flex-direction: column;
  gap: 12px;
}
.thread-mock-header {
  display: flex; align-items: center; gap: 8px;
  padding-bottom: 10px;
}
.thread-mock-ava {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35, #ff3b3b);
}
.thread-mock-ava.green { background: linear-gradient(135deg, var(--green), #00b0ff); }
.thread-mock-ava.blue { background: linear-gradient(135deg, var(--blue), #7c4dff); }
.thread-mock-name { font-size: 0.75rem; font-weight: 600; }
.thread-mock-time { font-size: 0.65rem; color: var(--gray-3); }
.thread-mock-text {
  font-size: 0.8rem; line-height: 1.5;
  flex: 1;
}
.thread-mock-engagement {
  display: flex; gap: 20px;
  padding-top: 12px;
  border-top: 1px solid var(--gray-2);
  font-size: 0.75rem; color: var(--gray-3);
}
.thread-mock-engagement .hot { color: var(--red); font-weight: 600; }
.screenshot-label {
  padding: 16px 20px;
  display: flex; justify-content: space-between; align-items: center;
}
.screenshot-label-text { font-size: 0.85rem; font-weight: 600; }
.screenshot-label-stat {
  font-size: 0.8rem; color: var(--accent); font-weight: 600;
}

/* ===== STATS SHOWCASE ===== */
.stats-showcase-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.stats-card {
  background: var(--gray-1);
  border: 1px solid var(--gray-2);
  border-radius: 20px;
  padding: 32px;
  transition: all 0.4s;
}
.stats-card:hover { border-color: rgba(232,255,0,0.3); }
.stats-card-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 24px;
}
.stats-card-title { font-weight: 700; font-size: 1rem; }
.stats-card-period { font-size: 0.8rem; color: var(--gray-3); }
.stats-bar-chart {
  display: flex; align-items: flex-end;
  gap: 6px; height: 140px;
  margin-bottom: 20px;
}
.bar {
  flex: 1;
  background: rgba(232,255,0,0.15);
  border-radius: 4px 4px 0 0;
  position: relative;
  transition: all 0.3s;
  min-height: 10px;
}
.bar:hover { background: rgba(232,255,0,0.35); }
.bar.active { background: var(--accent); }
.stats-card-metrics {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 16px; padding-top: 16px;
  border-top: 1px solid var(--gray-2);
}
.metric-val {
  font-family: 'Unbounded';
  font-size: 1.2rem; font-weight: 800;
  color: var(--accent);
}
.metric-label { font-size: 0.7rem; color: var(--gray-3); margin-top: 2px; }
.metric-change { font-size: 0.7rem; color: var(--green); margin-top: 2px; }

/* Line chart mock */
.stats-line-chart {
  height: 140px; margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}
.line-path {
  width: 100%; height: 100%;
}
.line-path svg { width: 100%; height: 100%; }

/* ===== PROCESS ===== */
.process { background: var(--gray-1); }
.process-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
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
.process-step:last-child { margin-bottom: 0; }
.step-marker {
  width: 64px; height: 64px;
  min-width: 64px;
  background: var(--black);
  border: 2px solid var(--accent);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Unbounded';
  font-weight: 800; font-size: 1.2rem;
  color: var(--accent);
  z-index: 1;
}
.step-content h3 {
  font-size: 1.15rem; font-weight: 700;
  margin-bottom: 8px;
}
.step-content p { font-size: 0.9rem; color: var(--gray-3); line-height: 1.7; }

/* ===== CTA / FORM ===== */
.cta-section {
  background: linear-gradient(135deg, var(--gray-1) 0%, var(--black) 100%);
  position: relative;
  overflow: hidden;
}
.cta-section::before {
  content: '';
  position: absolute;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(232,255,0,0.06) 0%, transparent 70%);
  top: -150px; right: -100px;
  border-radius: 50%;
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
.cta-form h3 {
  font-size: 1.3rem; font-weight: 700;
  margin-bottom: 8px;
}
.cta-form .form-sub {
  font-size: 0.9rem; color: var(--gray-3);
  margin-bottom: 28px;
}
.form-group { margin-bottom: 18px; }
.form-group label {
  display: block;
  font-size: 0.8rem; font-weight: 500;
  color: var(--gray-3);
  margin-bottom: 6px;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  background: var(--black);
  border: 1px solid var(--gray-2);
  border-radius: 12px;
  padding: 14px 16px;
  color: var(--white);
  font-family: 'Onest', sans-serif;
  font-size: 0.95rem;
  transition: border-color 0.3s;
  outline: none;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--accent);
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: rgba(255,255,255,0.2); }
.form-group select option { background: var(--black); }
.form-group textarea { resize: vertical; min-height: 80px; }
.form-submit {
  width: 100%;
  background: var(--accent); color: var(--black);
  padding: 16px;
  border-radius: 14px;
  font-weight: 700; font-size: 1rem;
  border: none; cursor: pointer;
  font-family: 'Onest', sans-serif;
  transition: all 0.3s;
  display: flex; align-items: center; justify-content: center; gap: 10px;
  margin-top: 8px;
}
.form-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,255,0,0.25); }
.form-note {
  font-size: 0.75rem; color: var(--gray-3);
  text-align: center; margin-top: 14px;
}

/* ===== FAQ ===== */
.faq-list { max-width: 800px; }
.faq-item {
  border-bottom: 1px solid var(--gray-2);
  padding: 24px 0;
}
.faq-q {
  font-weight: 600; font-size: 1.05rem;
  cursor: pointer;
  display: flex; justify-content: space-between; align-items: center;
  transition: color 0.3s;
}
.faq-q:hover { color: var(--accent); }
.faq-q .toggle {
  width: 28px; height: 28px;
  border-radius: 50%;
  border: 1px solid var(--gray-2);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; color: var(--gray-3);
  transition: all 0.3s;
  min-width: 28px;
}
.faq-item.active .faq-q .toggle { background: var(--accent); color: var(--black); border-color: var(--accent); transform: rotate(45deg); }
.faq-a {
  max-height: 0; overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
}
.faq-item.active .faq-a { max-height: 200px; padding-top: 16px; }
.faq-a p { font-size: 0.9rem; color: var(--gray-3); line-height: 1.7; }

/* ===== FOOTER ===== */
.site-footer {
  padding: 60px 0 30px;
  border-top: 1px solid var(--gray-2);
}
.footer-top {
  display: flex; justify-content: space-between; align-items: flex-start;
  margin-bottom: 40px; flex-wrap: wrap; gap: 30px;
}
.footer-brand .logo { font-size: 1.5rem; display: block; margin-bottom: 12px; }
.footer-brand p { font-size: 0.85rem; color: var(--gray-3); max-width: 300px; }
.footer-links h4 {
  font-size: 0.8rem; text-transform: uppercase;
  letter-spacing: 1px; margin-bottom: 16px;
  color: var(--gray-3);
}
.footer-links a {
  display: block; color: var(--white);
  text-decoration: none; font-size: 0.9rem;
  margin-bottom: 10px; transition: color 0.3s;
}
.footer-links a:hover { color: var(--accent); }
.footer-bottom {
  padding-top: 24px;
  border-top: 1px solid var(--gray-2);
  display: flex; justify-content: space-between; align-items: center;
  font-size: 0.8rem; color: var(--gray-3);
  flex-wrap: wrap; gap: 16px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; gap: 40px; }
  .hero-visual { order: -1; }
  .hero-phone { width: 260px; }
  .float-stat-1 { left: -20px; }
  .float-stat-2 { right: -10px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .why-grid { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: 1fr; }
  .screenshots-grid { grid-template-columns: 1fr; }
  .stats-showcase-grid { grid-template-columns: 1fr; }
  .cta-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .hero-buttons { flex-direction: column; }
  .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
  .cta-form { padding: 28px 20px; }
  .footer-top { flex-direction: column; }
}

/* Schema.org hidden */
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }

        
        /* HIDING GLOBAL ELEMENTS FOR PURE ISLAND */
        .threads-page-isolation {
          background-color: var(--black);
          position: relative;
          z-index: 999; 
        }
        .header-area { display: none !important; }
        footer:not(.site-footer) { display: none !important; }
        .footer-area { display: none !important; }
        .floating-whatsapp { display: none !important; } 
      `}} />
      

{/*  */}


{/*  */}
<header className="site-header">
  <div className="container">
    <a href="/" className="logo">DIGITAL<span>PRIDE</span></a>
    <a href="#form" className="header-cta">Оставить заявку</a>
  </div>
</header>

{/*  */}
<section className="hero">
  <div className="container">
    <div className="hero-grid">
      <div className="hero-text">
        <div className="hero-badge">
          <span className="pulse"></span>
          Набираем клиентов — осталось 4 места
        </div>
        <h1>Комплексное продвижение в <span className="highlight">Threads</span> для экспертов</h1>
        <p className="hero-subtitle">Выведем ваш личный бренд в топ Threads за 30 дней. Вирусный контент, органический рост аудитории и поток заявок — без накруток и серых схем.</p>
        <div className="hero-buttons">
          <a href="#form" className="btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
            Получить стратегию бесплатно
          </a>
          <a href="#services" className="btn-secondary">Что входит в продвижение ↓</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-phone">
          <div className="phone-notch"></div>
          <div className="phone-screen">
            <div className="phone-header">
              <div className="phone-avatar">DP</div>
              <div>
                <div className="phone-username">digitalpride</div>
                <div className="phone-handle">127K подписчиков</div>
              </div>
            </div>
            <div className="phone-post">
              <p>90% экспертов сливают деньги на таргет, когда в Threads можно бесплатно получать по 50 заявок в неделю. Рассказываю как 👇</p>
              <div className="phone-post-stats">
                <span className="stat-fire">❤️ 2.4K</span>
                <span>💬 312</span>
                <span className="stat-up">🔄 876</span>
              </div>
            </div>
            <div className="phone-post">
              <p>Клиент пришёл с 200 подписчиками. Через месяц — 14 000 и очередь из клиентов. Без вложений в рекламу.</p>
              <div className="phone-post-stats">
                <span className="stat-fire">❤️ 1.8K</span>
                <span>💬 241</span>
                <span className="stat-up">🔄 534</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-float-stat float-stat-1">
          <div className="float-stat-number">+847%</div>
          <div className="float-stat-label">Рост охватов за месяц</div>
        </div>
        <div className="hero-float-stat float-stat-2">
          <div className="float-stat-number">52</div>
          <div className="float-stat-label">Заявки в неделю</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  */}
<div className="stats-bar">
  <div className="container">
    <div className="stats-grid">
      <div className="stat-item">
        <div className="stat-item-num">230+</div>
        <div className="stat-item-label">Клиентов продвинули</div>
      </div>
      <div className="stat-item">
        <div className="stat-item-num">14 дн</div>
        <div className="stat-item-label">Первые заявки</div>
      </div>
      <div className="stat-item">
        <div className="stat-item-num">50M+</div>
        <div className="stat-item-label">Суммарный охват</div>
      </div>
      <div className="stat-item">
        <div className="stat-item-num">93%</div>
        <div className="stat-item-label">Клиентов продлевают</div>
      </div>
    </div>
  </div>
</div>

{/*  */}
<section className="why-threads" id="why">
  <div className="container">
    <div className="section-label">Почему Threads</div>
    <h2 className="section-title">Threads — самая быстрорастущая площадка для экспертов в 2025–2026</h2>
    <p className="section-subtitle">Пока конкуренты бьются за внимание в перегретых соцсетях, Threads даёт органический охват, о котором Instagram и Telegram могут только мечтать.</p>
    <div className="why-grid">
      <article className="why-card">
        <div className="why-icon">🚀</div>
        <h3>Органический охват без бюджета</h3>
        <p>Алгоритмы Threads активно продвигают новый контент. Один вирусный пост может набрать сотни тысяч просмотров без вложений в рекламу и продвижение.</p>
      </article>
      <article className="why-card">
        <div className="why-icon">🎯</div>
        <h3>Платёжеспособная аудитория</h3>
        <p>Аудитория Threads — предприниматели, эксперты и активные пользователи Instagram. Это люди, которые готовы покупать услуги и продукты.</p>
      </article>
      <article className="why-card">
        <div className="why-icon">⚡</div>
        <h3>Низкая конкуренция</h3>
        <p>Большинство экспертов ещё не освоили Threads. Зайти сейчас — значит занять свою нишу, пока конкуренты не пришли и площадка максимально лояльна к авторам.</p>
      </article>
      <article className="why-card">
        <div className="why-icon">🔗</div>
        <h3>Связка с Instagram</h3>
        <p>Threads интегрирован с Instagram. Посты из Threads видны в ленте Instagram, а подписчики легко переходят между платформами, увеличивая точки касания.</p>
      </article>
      <article className="why-card">
        <div className="why-icon">📈</div>
        <h3>Быстрый рост подписчиков</h3>
        <p>Средний аккаунт наших клиентов растёт на 3 000–15 000 подписчиков в месяц. Это реальные люди, заинтересованные в вашей экспертизе.</p>
      </article>
      <article className="why-card">
        <div className="why-icon">💬</div>
        <h3>Высокий уровень вовлечения</h3>
        <p>Текстовый формат Threads стимулирует дискуссии. Комментарии и репосты усиливают охват — каждый ваш пост работает как вирусный двигатель.</p>
      </article>
    </div>
  </div>
</section>

{/*  */}
<section className="services" id="services">
  <div className="container">
    <div className="section-label">Что входит</div>
    <h2 className="section-title">Комплексное продвижение в Threads — всё включено</h2>
    <p className="section-subtitle">Мы берём на себя весь цикл продвижения: от разработки контент-стратегии до публикации вирусных постов и привлечения целевой аудитории.</p>
    <div className="services-grid">
      <article className="service-card">
        <div className="service-num">01</div>
        <h3>Разработка контент-стратегии</h3>
        <p>Анализируем вашу нишу, конкурентов и целевую аудиторию. Создаём контент-план на месяц с учётом алгоритмов Threads: рубрики, форматы, триггеры вовлечения и расписание публикаций.</p>
        <span className="service-tag">Стратегия</span>
      </article>
      <article className="service-card">
        <div className="service-num">02</div>
        <h3>Создание вирусного контента</h3>
        <p>Пишем посты, которые залетают: провокационные тезисы, экспертные разборы, вовлекающие треды. Каждый пост оптимизирован под алгоритмы Threads для максимального органического охвата.</p>
        <span className="service-tag">Контент</span>
      </article>
      <article className="service-card">
        <div className="service-num">03</div>
        <h3>Комментинг и нетворкинг</h3>
        <p>Стратегическое комментирование популярных постов от имени вашего аккаунта. Каждый комментарий — это точка касания с тысячами потенциальных подписчиков и клиентов.</p>
        <span className="service-tag">Охват</span>
      </article>
      <article className="service-card">
        <div className="service-num">04</div>
        <h3>Аналитика и оптимизация</h3>
        <p>Еженедельные отчёты с ключевыми метриками: рост подписчиков, охваты, вовлечённость, конверсия в заявки. Корректируем стратегию на основе данных для максимальной эффективности.</p>
        <span className="service-tag">Данные</span>
      </article>
      <article className="service-card">
        <div className="service-num">05</div>
        <h3>Упаковка профиля</h3>
        <p>Оптимизируем ваш профиль в Threads: продающая биография, визуальное оформление, ссылки и призывы к действию. Профиль, который конвертирует посетителей в подписчиков.</p>
        <span className="service-tag">Брендинг</span>
      </article>
      <article className="service-card">
        <div className="service-num">06</div>
        <h3>Адаптация топовых постов</h3>
        <p>Мониторим вирусные посты в вашей нише и адаптируем лучшие форматы под ваш бренд. Проверенные механики, которые уже собрали тысячи лайков и репостов.</p>
        <span className="service-tag">Тренды</span>
      </article>
    </div>
  </div>
</section>

{/*  */}
<section className="screenshots" id="cases">
  <div className="container">
    <div className="section-label">Примеры постов</div>
    <h2 className="section-title">Вирусные посты наших клиентов в Threads</h2>
    <p className="section-subtitle">Реальные результаты — посты, которые набирают тысячи реакций и привлекают целевую аудиторию.</p>
    <div className="screenshots-grid">
      <div className="screenshot-card">
        <div className="screenshot-img">
          <div className="thread-mock">
            <div className="thread-mock-header">
              <div className="thread-mock-ava"></div>
              <div>
                <div className="thread-mock-name">маркетолог_про</div>
                <div className="thread-mock-time">2 ч.</div>
              </div>
            </div>
            <div className="thread-mock-text">
              Я потратил 500 000₽ на таргетированную рекламу и получил 12 клиентов.<br /><br />Потом начал писать в Threads по стратегии Digital Pride — и за месяц пришло 47 клиентов. Бесплатно.<br /><br />Вот что я делал 🧵👇
            </div>
            <div className="thread-mock-engagement">
              <span className="hot">❤️ 3 841</span>
              <span>💬 487</span>
              <span>🔄 1 204</span>
            </div>
          </div>
        </div>
        <div className="screenshot-label">
          <span className="screenshot-label-text">Кейс: маркетолог</span>
          <span className="screenshot-label-stat">+8 700 подписчиков</span>
        </div>
      </div>
      <div className="screenshot-card">
        <div className="screenshot-img">
          <div className="thread-mock">
            <div className="thread-mock-header">
              <div className="thread-mock-ava green"></div>
              <div>
                <div className="thread-mock-name">бизнес_наставник</div>
                <div className="thread-mock-time">5 ч.</div>
              </div>
            </div>
            <div className="thread-mock-text">
              3 вещи, которые отделяют эксперта с доходом 100К от эксперта с доходом 1М:<br /><br />1. Система привлечения клиентов<br />2. Присутствие на растущих платформах<br />3. Контент, который продаёт без продаж<br /><br />Threads закрывает все три. Объясняю ↓
            </div>
            <div className="thread-mock-engagement">
              <span className="hot">❤️ 5 203</span>
              <span>💬 612</span>
              <span>🔄 2 087</span>
            </div>
          </div>
        </div>
        <div className="screenshot-label">
          <span className="screenshot-label-text">Кейс: наставник</span>
          <span className="screenshot-label-stat">+14 200 подписчиков</span>
        </div>
      </div>
      <div className="screenshot-card">
        <div className="screenshot-img">
          <div className="thread-mock">
            <div className="thread-mock-header">
              <div className="thread-mock-ava blue"></div>
              <div>
                <div className="thread-mock-name">психолог_анна</div>
                <div className="thread-mock-time">8 ч.</div>
              </div>
            </div>
            <div className="thread-mock-text">
              Мне говорили: «Психологу не нужны соцсети, клиенты придут сами».<br /><br />Сами пришли — 0.<br />Из Threads за 3 недели — 23 записи на консультацию.<br /><br />Секрет? Не экспертные посты, а провокации, которые заставляют думать.
            </div>
            <div className="thread-mock-engagement">
              <span className="hot">❤️ 2 156</span>
              <span>💬 334</span>
              <span>🔄 891</span>
            </div>
          </div>
        </div>
        <div className="screenshot-label">
          <span className="screenshot-label-text">Кейс: психолог</span>
          <span className="screenshot-label-stat">+6 400 подписчиков</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  */}
<section className="stats-showcase" id="stats">
  <div className="container">
    <div className="section-label">Статистика</div>
    <h2 className="section-title">Реальные цифры роста аккаунтов наших клиентов</h2>
    <p className="section-subtitle">Прозрачная аналитика — каждый клиент видит рост в реальном времени.</p>
    <div className="stats-showcase-grid">
      <div className="stats-card">
        <div className="stats-card-header">
          <span className="stats-card-title">Рост подписчиков</span>
          <span className="stats-card-period">Последние 30 дней</span>
        </div>
        <div className="stats-bar-chart">
          <div className="bar" style={{"height":"15%"}}></div>
          <div className="bar" style={{"height":"22%"}}></div>
          <div className="bar" style={{"height":"18%"}}></div>
          <div className="bar" style={{"height":"35%"}}></div>
          <div className="bar" style={{"height":"28%"}}></div>
          <div className="bar" style={{"height":"42%"}}></div>
          <div className="bar" style={{"height":"38%"}}></div>
          <div className="bar" style={{"height":"55%"}}></div>
          <div className="bar" style={{"height":"48%"}}></div>
          <div className="bar" style={{"height":"62%"}}></div>
          <div className="bar" style={{"height":"70%"}}></div>
          <div className="bar" style={{"height":"65%"}}></div>
          <div className="bar" style={{"height":"78%"}}></div>
          <div className="bar active" style={{"height":"92%"}}></div>
          <div className="bar active" style={{"height":"100%"}}></div>
        </div>
        <div className="stats-card-metrics">
          <div>
            <div className="metric-val">12.4K</div>
            <div className="metric-label">Новых подписчиков</div>
            <div className="metric-change">↑ 340% к прошлому месяцу</div>
          </div>
          <div>
            <div className="metric-val">847</div>
            <div className="metric-label">В среднем в день</div>
            <div className="metric-change">↑ 215%</div>
          </div>
          <div>
            <div className="metric-val">0.3%</div>
            <div className="metric-label">Отписок</div>
            <div className="metric-change">Минимум</div>
          </div>
        </div>
      </div>
      <div className="stats-card">
        <div className="stats-card-header">
          <span className="stats-card-title">Охват публикаций</span>
          <span className="stats-card-period">Последние 30 дней</span>
        </div>
        <div className="stats-line-chart">
          <svg viewBox="0 0 400 140" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(232,255,0,0.3)"/>
                <stop offset="100%" stopColor="rgba(232,255,0,0)"/>
              </linearGradient>
            </defs>
            <path d="M0 120 Q30 115 50 110 T100 95 T150 80 T200 55 T250 45 T300 25 T350 18 T400 8" fill="none" stroke="var(--accent)" strokeWidth="2.5"/>
            <path d="M0 120 Q30 115 50 110 T100 95 T150 80 T200 55 T250 45 T300 25 T350 18 T400 8 L400 140 L0 140 Z" fill="url(#lineGrad)"/>
          </svg>
        </div>
        <div className="stats-card-metrics">
          <div>
            <div className="metric-val">2.8M</div>
            <div className="metric-label">Суммарный охват</div>
            <div className="metric-change">↑ 520%</div>
          </div>
          <div>
            <div className="metric-val">186K</div>
            <div className="metric-label">Лучший пост</div>
            <div className="metric-change">Рекорд аккаунта</div>
          </div>
          <div>
            <div className="metric-val">8.7%</div>
            <div className="metric-label">Вовлечённость</div>
            <div className="metric-change">↑ в 4 раза</div>
          </div>
        </div>
      </div>
      <div className="stats-card">
        <div className="stats-card-header">
          <span className="stats-card-title">Конверсия в заявки</span>
          <span className="stats-card-period">Последние 30 дней</span>
        </div>
        <div className="stats-bar-chart">
          <div className="bar" style={{"height":"20%"}}></div>
          <div className="bar" style={{"height":"25%"}}></div>
          <div className="bar" style={{"height":"30%"}}></div>
          <div className="bar" style={{"height":"40%"}}></div>
          <div className="bar" style={{"height":"35%"}}></div>
          <div className="bar" style={{"height":"50%"}}></div>
          <div className="bar" style={{"height":"55%"}}></div>
          <div className="bar" style={{"height":"65%"}}></div>
          <div className="bar active" style={{"height":"75%"}}></div>
          <div className="bar active" style={{"height":"85%"}}></div>
          <div className="bar active" style={{"height":"90%"}}></div>
          <div className="bar active" style={{"height":"100%"}}></div>
        </div>
        <div className="stats-card-metrics">
          <div>
            <div className="metric-val">147</div>
            <div className="metric-label">Заявок за месяц</div>
            <div className="metric-change">↑ 280%</div>
          </div>
          <div>
            <div className="metric-val">34%</div>
            <div className="metric-label">Конверсия в оплату</div>
            <div className="metric-change">↑ 12%</div>
          </div>
          <div>
            <div className="metric-val">₽0</div>
            <div className="metric-label">Затраты на рекламу</div>
            <div className="metric-change">Только органика</div>
          </div>
        </div>
      </div>
      <div className="stats-card">
        <div className="stats-card-header">
          <span className="stats-card-title">Рост вовлечённости</span>
          <span className="stats-card-period">Динамика за квартал</span>
        </div>
        <div className="stats-line-chart">
          <svg viewBox="0 0 400 140" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(0,230,118,0.2)"/>
                <stop offset="100%" stopColor="rgba(0,230,118,0)"/>
              </linearGradient>
            </defs>
            <path d="M0 130 Q25 125 50 118 T100 105 T150 88 T200 72 T250 50 T300 35 T350 22 T400 12" fill="none" stroke="var(--green)" strokeWidth="2.5"/>
            <path d="M0 130 Q25 125 50 118 T100 105 T150 88 T200 72 T250 50 T300 35 T350 22 T400 12 L400 140 L0 140 Z" fill="url(#lineGrad2)"/>
          </svg>
        </div>
        <div className="stats-card-metrics">
          <div>
            <div className="metric-val" style={{"color":"var(--green)"}}>8.7%</div>
            <div className="metric-label">ER текущий</div>
            <div className="metric-change">Было 1.2%</div>
          </div>
          <div>
            <div className="metric-val" style={{"color":"var(--green)"}}>×7.2</div>
            <div className="metric-label">Рост за квартал</div>
            <div className="metric-change">Стабильный тренд</div>
          </div>
          <div>
            <div className="metric-val" style={{"color":"var(--green)"}}>92%</div>
            <div className="metric-label">Комменты — живые</div>
            <div className="metric-change">Без ботов</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  */}
<section className="process" id="process">
  <div className="container">
    <div className="section-label">Как мы работаем</div>
    <h2 className="section-title">Путь от заявки до первых результатов</h2>
    <p className="section-subtitle">Прозрачный процесс — вы видите каждый этап и контролируете результат.</p>
    <div className="process-timeline">
      <div className="process-step">
        <div className="step-marker">1</div>
        <div className="step-content">
          <h3>Бесплатная консультация</h3>
          <p>Созваниваемся, разбираем вашу нишу и текущую ситуацию. Вы получаете предварительную стратегию продвижения в Threads — без обязательств и оплаты.</p>
        </div>
      </div>
      <div className="process-step">
        <div className="step-marker">2</div>
        <div className="step-content">
          <h3>Анализ и упаковка профиля</h3>
          <p>Проводим аудит вашего аккаунта, оформляем профиль, пишем продающую биографию. Анализируем конкурентов и находим контентные пробелы в вашей нише.</p>
        </div>
      </div>
      <div className="process-step">
        <div className="step-marker">3</div>
        <div className="step-content">
          <h3>Запуск контент-машины</h3>
          <p>Начинаем публикации по утверждённому контент-плану. Вирусные посты, треды, провокации — каждый пост нацелен на максимальный охват и вовлечение.</p>
        </div>
      </div>
      <div className="process-step">
        <div className="step-marker">4</div>
        <div className="step-content">
          <h3>Масштабирование и рост</h3>
          <p>Анализируем метрики, оптимизируем стратегию, масштабируем то, что работает. Подключаем комментинг топовых постов для дополнительного притока аудитории.</p>
        </div>
      </div>
      <div className="process-step">
        <div className="step-marker">5</div>
        <div className="step-content">
          <h3>Поток заявок и клиентов</h3>
          <p>Вы получаете стабильный поток целевых обращений. Средний результат — 30–50 заявок в неделю от людей, готовых покупать ваши услуги и продукты.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  */}
<section className="cta-section" id="form">
  <div className="container">
    <div className="cta-grid">
      <div className="cta-text">
        <div className="section-label">Начать сейчас</div>
        <h2 className="section-title">Готовы получать клиентов из Threads?</h2>
        <p className="section-subtitle" style={{"marginBottom":"28px"}}>Заполните форму — мы свяжемся с вами в WhatsApp в течение 2 часов и проведём бесплатную консультацию по продвижению вашего аккаунта в Threads.</p>
        <div style={{"display":"flex","flexDirection":"column","gap":"20px"}}>
          <div style={{"display":"flex","alignItems":"center","gap":"14px"}}>
            <div style={{"width":"44px","height":"44px","background":"rgba(232,255,0,0.1)","borderRadius":"12px","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.2rem","minWidth":"44px"}}>✅</div>
            <div><strong>Бесплатная стратегия</strong><br /><span style={{"color":"var(--gray-3)","fontSize":"0.85rem"}}>Получите персональный план продвижения</span></div>
          </div>
          <div style={{"display":"flex","alignItems":"center","gap":"14px"}}>
            <div style={{"width":"44px","height":"44px","background":"rgba(232,255,0,0.1)","borderRadius":"12px","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.2rem","minWidth":"44px"}}>⚡</div>
            <div><strong>Ответ за 2 часа</strong><br /><span style={{"color":"var(--gray-3)","fontSize":"0.85rem"}}>Напишем вам в WhatsApp максимально быстро</span></div>
          </div>
          <div style={{"display":"flex","alignItems":"center","gap":"14px"}}>
            <div style={{"width":"44px","height":"44px","background":"rgba(232,255,0,0.1)","borderRadius":"12px","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.2rem","minWidth":"44px"}}>🔒</div>
            <div><strong>Без обязательств</strong><br /><span style={{"color":"var(--gray-3)","fontSize":"0.85rem"}}>Консультация бесплатна, решение за вами</span></div>
          </div>
        </div>
      </div>
      <div className="cta-form" id="lead-form">
        <h3>Заявка на продвижение в Threads</h3>
        <p className="form-sub">Заполните форму — мы свяжемся в WhatsApp</p>
        <div className="form-group">
          <label>Ваше имя</label>
          <input type="text" id="f-name" placeholder="Как к вам обращаться?" required />
        </div>
        <div className="form-group">
          <label>Номер WhatsApp</label>
          <input type="tel" id="f-phone" placeholder="+7 (___) ___-__-__" required />
        </div>
        <div className="form-group">
          <label>Ваша ниша / сфера деятельности</label>
          <select id="f-niche">
            <option value="">Выберите нишу</option>
            <option value="Маркетинг">Маркетинг и SMM</option>
            <option value="Психология">Психология и коучинг</option>
            <option value="Бизнес">Бизнес и предпринимательство</option>
            <option value="Образование">Образование и наставничество</option>
            <option value="Здоровье">Здоровье и фитнес</option>
            <option value="Красота">Красота и стиль</option>
            <option value="Финансы">Финансы и инвестиции</option>
            <option value="IT">IT и технологии</option>
            <option value="Другое">Другое</option>
          </select>
        </div>
        <div className="form-group">
          <label>Ссылка на ваш Threads или Instagram (необязательно)</label>
          <input type="url" id="f-link" placeholder="https://threads.net/@ваш_аккаунт" />
        </div>
        <button className="form-submit" onClick={(e) => submitForm(e)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/><path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c-.001 2.096.546 4.142 1.587 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.578 0 11.937-5.336 11.94-11.893.002-3.178-1.234-6.165-3.47-8.452zm-8.475 18.3h-.004a9.867 9.867 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885z" fill="currentColor"/></svg>
          Отправить заявку в WhatsApp
        </button>
        <p className="form-note">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
      </div>
    </div>
  </div>
</section>

{/*  */}
<section className="faq" id="faq">
  <div className="container">
    <div className="section-label">Вопросы</div>
    <h2 className="section-title">Частые вопросы о продвижении в Threads</h2>
    <div className="faq-list">
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => toggleFaq(e)}>
          <span>Сколько стоит продвижение в Threads?</span>
          <span className="toggle">+</span>
        </div>
        <div className="faq-a">
          <p>Стоимость зависит от объёма работ и ваших целей. На бесплатной консультации мы разберём вашу ситуацию и предложим оптимальный пакет. Инвестиции окупаются уже в первый месяц за счёт потока заявок из Threads.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => toggleFaq(e)}>
          <span>Когда появятся первые результаты?</span>
          <span className="toggle">+</span>
        </div>
        <div className="faq-a">
          <p>Первые вирусные посты и рост подписчиков вы увидите уже на первой неделе. Стабильный поток заявок формируется в среднем через 14–21 день. Полный эффект стратегии раскрывается к концу первого месяца.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => toggleFaq(e)}>
          <span>Вы используете накрутки или ботов?</span>
          <span className="toggle">+</span>
        </div>
        <div className="faq-a">
          <p>Категорически нет. Мы работаем только с органическим ростом: качественный контент, стратегический комментинг, оптимизация под алгоритмы. Все подписчики — реальные люди, заинтересованные в вашей экспертизе.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => toggleFaq(e)}>
          <span>Подходит ли продвижение для моей ниши?</span>
          <span className="toggle">+</span>
        </div>
        <div className="faq-a">
          <p>Threads эффективен для экспертов, наставников, коучей, психологов, маркетологов, предпринимателей и специалистов из десятков ниш. На консультации мы оценим потенциал вашей темы и честно скажем, стоит ли вкладываться.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => toggleFaq(e)}>
          <span>Нужно ли мне самому что-то делать?</span>
          <span className="toggle">+</span>
        </div>
        <div className="faq-a">
          <p>Мы берём на себя создание контента, публикацию и продвижение. От вас нужна обратная связь по контент-плану и доступ к аккаунту. Весь операционный процесс — на нашей стороне.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => toggleFaq(e)}>
          <span>Можно ли совмещать с продвижением в других соцсетях?</span>
          <span className="toggle">+</span>
        </div>
        <div className="faq-a">
          <p>Конечно. Threads отлично работает в связке с Instagram и Telegram. Контент из Threads усиливает вашу видимость во всех каналах и привлекает аудиторию в вашу экосистему.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  */}
<footer className="site-footer">
  <div className="container">
    <div className="footer-top">
      <div className="footer-brand">
        <a href="/" className="logo">DIGITAL<span>PRIDE</span></a>
        <p>Комплексное продвижение экспертов и предпринимателей в Threads. Вирусный контент, рост аудитории, поток заявок.</p>
      </div>
      <div className="footer-links">
        <h4>Навигация</h4>
        <a href="#why">Почему Threads</a>
        <a href="#services">Услуги</a>
        <a href="#cases">Кейсы</a>
        <a href="#process">Как работаем</a>
      </div>
      <div className="footer-links">
        <h4>Контакты</h4>
        <a href="#form">Оставить заявку</a>
        <a href="https://wa.me/79XXXXXXXXX" target="_blank">WhatsApp</a>
        <a href="https://threads.net/@digitalpride" target="_blank">Threads</a>
        <a href="https://instagram.com/digitalpride" target="_blank">Instagram</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Digital Pride. Все права защищены.</span>
      <span>Продвижение в Threads для экспертов и предпринимателей</span>
    </div>
  </div>
</footer>




    </div>
  );
}
