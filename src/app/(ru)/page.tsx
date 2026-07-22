import type { Metadata } from 'next';
import React from 'react';

import RawFooter from '@/components/layout/RawFooter';
import Hero from '@/components/home/Hero';

export const metadata: Metadata = {
  title: { absolute: 'Маркетинговое агентство полного цикла в Алматы | Digital Pride' },
  description: 'Digital Pride — маркетинговое агентство в Алматы: SMM, таргет, контекстная реклама, SEO и разработка сайтов. 500+ клиентов, 10 лет опыта. Бесплатный аудит!',
  alternates: { canonical: '/', languages: { 'ru-KZ': '/', 'kk-KZ': '/kk', 'x-default': '/' } },
  openGraph: {
    url: '/',
    title: 'Маркетинговое агентство полного цикла в Алматы | Digital Pride',
    description: 'Digital Pride — маркетинговое агентство в Алматы: SMM, таргет, контекстная реклама, SEO и разработка сайтов. 500+ клиентов, 10 лет опыта. Бесплатный аудит!',
    // Задаём images явно: page-level openGraph перекрывает объект из layout целиком,
    // поэтому без этого у главной вообще не было og:image.
    images: [{
      url: '/og-image/?title=%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%BE%D0%B5+%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE&subtitle=%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B3%D0%BE+%D1%86%D0%B8%D0%BA%D0%BB%D0%B0+%D0%B2+%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B',
      width: 1200,
      height: 630,
      alt: 'Digital Pride — маркетинговое агентство полного цикла в Алматы',
    }],
  },
};
import SocialProof from '@/components/home/SocialProof';
import Services from '@/components/home/Services';
import HowWeWork from '@/components/home/HowWeWork';
import Cases from '@/components/home/Cases';
import Process from '@/components/home/Process';
import LeadMagnet from '@/components/home/LeadMagnet';
import Faq from '@/components/home/Faq';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>

      <main className="bg-white">
        <Hero />
        <SocialProof />
        <Services />
        <HowWeWork />
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
