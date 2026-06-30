import type { Metadata } from 'next';
import ContactsClient from '../../contacts/ContactsClient';

export const metadata: Metadata = {
    title: 'Digital Pride байланыс — Алматыдағы маркетинг агенттігі',
    description: 'Алматыдағы кеңсе мекенжайы, телефон, WhatsApp, email және әлеуметтік желілер. Жобаңызды талқылау үшін бізбен байланысыңыз.',
    alternates: {
        canonical: '/kk/contacts',
        languages: {
            'ru-KZ': '/contacts',
            'kk-KZ': '/kk/contacts',
        },
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
