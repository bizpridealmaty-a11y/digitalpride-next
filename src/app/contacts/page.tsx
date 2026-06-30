import type { Metadata } from 'next';
import ContactsClient from './ContactsClient';

export const metadata: Metadata = {
    title: 'Контакты Digital Pride — маркетинговое агентство в Алматы',
    description: 'Контакты Digital Pride в Алматы ✦ Проспект Бухар-Жирау, 33, 3 этаж. Телефон +7 (707) 035-77-77, WhatsApp, email. Приходите или звоните — обсудим ваш проект.',
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
