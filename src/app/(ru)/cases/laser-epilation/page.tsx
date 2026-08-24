import type { Metadata } from 'next';
import LaserEpilationCase from './LaserEpilationCase';

export const metadata: Metadata = {
    title: 'Кейс таргетированная реклама Instagram — лазерная эпиляция Алматы',
    description: 'Кейс: таргет лазерной эпиляции в Алматы — 679 заявок в WhatsApp по $1,29. Снизили стоимость лида в Instagram в 3 раза. Реальные цифры и ROMI 51%.',
    keywords: ['кейс таргетированная реклама instagram', 'таргет лазерная эпиляция', 'продвижение студии эпиляции в инстаграм', 'таргетолог Алматы', 'таргетированная реклама Алматы', 'стоимость заявки лазерная эпиляция', 'стоимость лида instagram', 'реклама лазерной эпиляции в инстаграм кейс', 'таргет для салона красоты Алматы'],
    alternates: { canonical: '/cases/laser-epilation/' },
    openGraph: {
        title: 'Кейс: 679 заявок за $1,29 — таргет лазерная эпиляция Алматы',
        description: 'Как снизить стоимость заявки в Instagram в 3 раза. Реклама лазерной эпиляции в инстаграм — реальный кейс с цифрами.',
        url: '/cases/laser-epilation/',
        type: 'article',
        images: [{ url: '/images/cases/laser-epilation/hero-cover.png', width: 1920, height: 1080, alt: 'Результаты таргетированной рекламы лазерной эпиляции в Instagram — 679 заявок' }],
    },
};

export default function Page() {
    return <LaserEpilationCase />;
}
