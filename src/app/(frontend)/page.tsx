import * as React from 'react';
import HeroSection from '@/components/frontend/welcome/hero-section';
import VoicesOfHealing from '@/components/frontend/welcome/voices-of-healing//voices-of-healing';
import WhyChooseUs from '@/components/frontend/welcome/why-choose-us/why-choose-us';
import LaparoscopySurgeons from '@/components/frontend/welcome/surgeons/surgeons';

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
