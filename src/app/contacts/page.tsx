import type { Metadata } from 'next';
import ContactsClient from './ContactsClient';

export const metadata: Metadata = {
    title: 'Контакты Digital Pride — маркетинговое агентство в Алматы',
    description: 'Адрес офиса в Алматы, телефон, WhatsApp, email и соцсети. Свяжитесь с нами для обсуждения вашего проекта.',
    alternates: { canonical: '/contacts' },
    openGraph: {
        title: 'Контакты Digital Pride',
        description: 'Алматы, проспект Бухар-Жирау, 33. Звоните: +7 (707) 035-77-77',
        url: '/contacts',
    },
};

export default function ContactsPage() {
    return <ContactsClient />;
}
