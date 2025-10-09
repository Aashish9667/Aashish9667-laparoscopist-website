import * as React from 'react';
import HeroSection from '@/components/frontend/welcome/hero-section';
import VoicesOfHealing from '@/components/frontend/welcome/voices-of-healing//voices-of-healing';
import LaparoscopySurgeons from '@/components/frontend/welcome/laparoscopy-surgeons/laparoscopy-surgeons';
import WhyChooseUs from '@/components/frontend/welcome/why-choose-us/why-choose-us';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <LaparoscopySurgeons />
      <VoicesOfHealing />
    </div>
  );
}
