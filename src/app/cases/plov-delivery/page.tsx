import type { Metadata } from 'next';
import PlovDeliveryCase from './PlovDeliveryCase';

export const metadata: Metadata = {
    title: 'Кейс реклама доставки еды Алматы — 427 переписок в WhatsApp',
    description: 'Кейс: таргетированная реклама доставки плова в Алматы. 427 переписок в WhatsApp за $1,33. Meta Ads, Instagram Stories, WhatsApp Business. Реальные цифры и скриншоты.',
    keywords: ['реклама доставки еды алматы', 'таргет доставка еды', 'реклама WhatsApp бизнес', 'кейс Meta Ads доставка', 'таргетированная реклама ресторан', 'реклама плов доставка', 'whatsapp реклама кейс', 'instagram реклама доставки еды'],
    alternates: { canonical: '/cases/plov-delivery/' },
    openGraph: {
        title: 'Кейс: 427 переписок в WhatsApp за $1,33 — доставка плова Алматы',
        description: 'Как привлечь заказы на доставку еды через Instagram и WhatsApp. Реальный кейс с цифрами.',
        url: '/cases/plov-delivery/',
        type: 'article',
        images: [{ url: '/images/cases/plov-delivery/01_campaigns_overview.png', width: 1920, height: 1080, alt: 'Результаты рекламной кампании доставки плова — 427 переписок в WhatsApp' }],
    },
};

export default function Page() {
    return <PlovDeliveryCase />;
}
