import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsWylo } from './components/WhatIsWylo';
import { WhyWylo } from './components/WhyWylo';
import { LaunchSupport } from './components/LaunchSupport';
import { FirstWin } from './components/FirstWin';
import { OfferSection } from './components/OfferSection';
import { RewardSection } from './components/RewardSection';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhatIsWylo />
        <WhyWylo />
        <LaunchSupport />
        <FirstWin />
        <OfferSection />
        <RewardSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;