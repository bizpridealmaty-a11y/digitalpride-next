'use client';

import React, { useEffect, useState } from 'react';
import { trackLeadFormSubmit } from '@/lib/analytics';

type Props = {
    open: boolean;
    onClose: () => void;
    source?: string;
};

export default function CallbackModal({ open, onClose, source = 'callback_modal' }: Props) {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKey);
        };
    }, [open, onClose]);

    if (!open) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (submitting) return;
        const form = e.currentTarget;
        const fd = new FormData(form);
        const phone = String(fd.get('phone') || '').trim();
        if (!phone) return;
        setSubmitting(true);
        try {
            await fetch('/api/telegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, source }),
            });
            trackLeadFormSubmit();
            setSubmitted(true);
            form.reset();
        } catch {
            setSubmitted(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Заказать обратный звонок"
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.7)',
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '40px 32px',
                    maxWidth: '420px',
                    width: '100%',
                    position: 'relative',
                    boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                }}
            >
                <button
                    type="button"
                    aria-label="Закрыть"
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'none',
                        border: 'none',
                        fontSize: '24px',
                        color: '#888',
                        cursor: 'pointer',
                        width: '36px',
                        height: '36px',
                    }}
                >
                    ✕
                </button>

                {submitted ? (
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
                        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px', color: '#000' }}>
                            Спасибо за заявку!
                        </h2>
                        <p style={{ color: '#666', fontSize: '14px' }}>
                            Менеджер свяжется с вами в течение 5 минут.
                        </p>
                    </div>
                ) : (
                    <>
                        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px', color: '#000', textAlign: 'center' }}>
                            Закажите обратный звонок
                        </h2>
                        <p style={{ color: '#666', fontSize: '14px', textAlign: 'center', marginBottom: '24px' }}>
                            Перезвоним в течение 5 минут
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+7 (___) ___-__-__"
                                required
                                style={{
                                    padding: '14px 16px',
                                    border: '1.5px solid #e5e5e5',
                                    borderRadius: '10px',
                                    fontSize: '15px',
                                    outline: 'none',
                                    color: '#000',
                                }}
                            />
                            <button
                                type="submit"
                                disabled={submitting}
                                style={{
                                    background: '#ef4444',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '14px',
                                    borderRadius: '10px',
                                    fontSize: '15px',
                                    fontWeight: 800,
                                    cursor: submitting ? 'wait' : 'pointer',
                                    marginTop: '4px',
                                    opacity: submitting ? 0.7 : 1,
                                }}
                            >
                                {submitting ? 'Отправляем…' : 'Перезвоните мне'}
                            </button>
                            <p style={{ fontSize: '11px', color: '#999', textAlign: 'center', marginTop: '4px' }}>
                                Нажимая кнопку, вы соглашаетесь с{' '}
                                <a href="/privacy/" style={{ color: '#666', textDecoration: 'underline' }}>политикой конфиденциальности</a>
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
