import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Контакты маркетингового агентства Digital Pride в Алматы',
    description: 'Свяжитесь с Digital Pride для обсуждения вашего проекта. Наш офис в Алматы всегда открыт для вас. Звоните, пишите в WhatsApp или оставляйте заявку на сайте.',
    alternates: { canonical: '/contacts' },
    openGraph: {
        title: 'Контакты | Digital Pride',
        description: 'Свяжитесь с маркетинговым агентством Digital Pride.',
        url: '/contacts',
    },
};

export default function ContactsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
