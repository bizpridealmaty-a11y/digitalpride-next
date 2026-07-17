import type { Metadata } from 'next';

import RawFooter from '@/components/layout/RawFooter';
import Hero from '@/components/home/Hero';
import SocialProof from '@/components/home/SocialProof';
import Services from '@/components/home/Services';
import Cases from '@/components/home/Cases';
import Process from '@/components/home/Process';
import LeadMagnet from '@/components/home/LeadMagnet';
import Faq from '@/components/home/Faq';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
    title: 'Digital Pride — Алматыдағы маркетинг агенттігі | SMM, таргет, сайттар',
    description: 'Digital Pride — Алматыдағы толық циклді перформанс-агенттік. SMM, таргеттелген және контекстік жарнама, сайт жасау, SEO, брендинг. Нәтижеге жұмыс істейміз.',
    alternates: {
        canonical: '/kk',
        languages: { 'ru-KZ': '/', 'kk-KZ': '/kk', 'x-default': '/' },
    },
    openGraph: {
        url: '/kk',
        title: 'Digital Pride — Алматыдағы маркетинг агенттігі',
        description: 'Толық циклді перформанс-агенттік: SMM, таргет, контекст, SEO, сайт жасау, брендинг.',
        locale: 'kk_KZ',
    },
};

export default function KkHome() {
    return (
        <>
            <main className="bg-white">
                <Hero />
                <SocialProof />
                <Services />
                <LeadMagnet />
                <Cases />
                <Process />
                <Faq />
                <CTA />
            </main>
            <RawFooter />
        </>
    );
}
