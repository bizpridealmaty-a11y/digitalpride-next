import type { Metadata } from 'next';
// Клиент общий с русской версией, а она теперь в route-группе (ru).
import ContactsClient from '@/app/(ru)/contacts/ContactsClient';

export const metadata: Metadata = {
    title: 'Digital Pride байланыс — Алматыдағы маркетинг агенттігі',
    description: 'Алматыдағы кеңсе мекенжайы, телефон, WhatsApp, email және әлеуметтік желілер. Жобаңызды талқылау үшін бізбен байланысыңыз.',
    alternates: {
        canonical: '/kk/contacts',
        languages: { 'ru-KZ': '/contacts', 'kk-KZ': '/kk/contacts', 'x-default': '/contacts' },
    },
    openGraph: {
        title: 'Digital Pride байланыс',
        description: 'Алматы, Бұхар-Жырау даңғылы, 33. Қоңырау шалыңыз: +7 (707) 035-77-77',
        url: '/kk/contacts',
    },
};

export default function ContactsPage() {
    return <ContactsClient />;
}
