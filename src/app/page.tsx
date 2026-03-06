
import React from 'react';
import RawHeader from '../components/layout/RawHeader';
import RawFooter from '../components/layout/RawFooter';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
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
      <RawHeader />
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
