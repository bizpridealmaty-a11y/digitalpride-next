import type { Metadata } from 'next';
import React from 'react';

import RawFooter from '../components/layout/RawFooter';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: 'Digital Pride — маркетинговое агентство в Алматы',
    description: 'Перформанс-агентство полного цикла: SMM, таргет, контекст, SEO, разработка сайтов, брендинг.',
  },
};
import SocialProof from '../components/home/SocialProof';
import Services from '../components/home/Services';
import Cases from '../components/home/Cases';
import Process from '../components/home/Process';
import LeadMagnet from '../components/home/LeadMagnet';
import Faq from '../components/home/Faq';
import CTA from '../components/home/CTA';

export default function Home() {
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
      <Footer />
      <RawFooter />
    </>
  );
}
