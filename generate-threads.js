const fs = require('fs');

const html = fs.readFileSync('C:/Users/Dima/Downloads/threads-landing.html', 'utf8');

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
const css = styleMatch ? styleMatch[1] : '';
let body = bodyMatch ? bodyMatch[1] : '';

// Remove script tags from body
body = body.replace(/<script[\s\S]*?<\/script>/gi, '');

// Convert to JSX
let jsx = body
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/crossorigin/g, 'crossOrigin')
    .replace(/onclick="toggleFaq\(this\)"/g, 'onClick={(e) => toggleFaq(e)}')
    .replace(/onclick="submitForm\(\)"/g, 'onClick={(e) => submitForm(e)}')
    .replace(/<input([^>]*?)>/g, '<input$1 />')
    .replace(/<img([^>]*?)>/g, '<img$1 />')
    .replace(/<br(?: \/)?>/g, '<br />')
    .replace(/<hr([^>]*?)>/g, '<hr$1 />')
    .replace(/<svg([\s\S]*?)<\/svg>/g, (m) => m.replace(/([a-z]+)-([a-z]+)=/g, (_, a, b) => a + b[0].toUpperCase() + b.substring(1) + '='))
    .replace(/style="(.*?)"/g, (match, p1) => {
        const styl = {};
        p1.split(';').forEach(s => {
            if (!s.trim()) return;
            const [k, v] = s.split(':');
            if (k && v) {
                const camelK = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                styl[camelK] = v.trim();
            }
        });
        return 'style={' + JSON.stringify(styl) + '}';
    });

jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');

const jsxCode = `
'use client';
import React, { useEffect, useState } from 'react';

export default function ThreadsClient() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const phoneInput = document.getElementById('f-phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', function(e) {
        let val = e.target.value.replace(/\\D/g, '');
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

    let message = '🔥 *Заявка на продвижение в Threads*\\n\\n';
    message += '👤 Имя: ' + name + '\\n';
    message += '📱 Телефон: ' + phone + '\\n';
    if (niche) message += '🎯 Ниша: ' + niche + '\\n';
    if (link) message += '🔗 Аккаунт: ' + link + '\\n';
    message += '\\n📍 Источник: сайт Digital Pride';

    const encoded = encodeURIComponent(message);
    window.open('https://wa.me/' + whatsappNumber + '?text=' + encoded, '_blank');
  };

  return (
    <div className="threads-page-isolation">
      <style dangerouslySetInnerHTML={{__html: \`
` + css + `
        
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
      \`}} />
      ` + jsx + `
    </div>
  );
}
`;

fs.writeFileSync('src/app/threads-prodvizhenie/ThreadsClient.tsx', jsxCode);
console.log('Fixed ThreadsClient.tsx');
