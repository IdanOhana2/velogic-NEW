"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import HeroCharacter from '@/components/HeroCharacter';
import LoadingScreen from '@/components/LoadingScreen';
import TechBackground from '@/components/TechBackground';
import BrandSection from '@/components/BrandSection';
import FeaturesSection from '@/components/FeaturesSection';
import PortfolioSection from '@/components/PortfolioSection';
import Navbar from '@/components/Navbar';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30 relative">
      <LoadingScreen />
      
      <Navbar />
      
      {/* Hero Video Layer - Full prominence at the top */}
      <HeroVideoBackground />
      
      {/* Tech Animations Layer - Starts lower and continues down */}
      <TechBackground />
      
      <main className="relative z-20">
        {/* Hero Content Section */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-4">
          <div className="text-center animate-in fade-in slide-in-from-top-12 duration-1000">
            <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter rose-gold-text drop-shadow-[0_0_50px_rgba(226,176,145,0.3)] leading-none">
              VELOGIC
            </h1>
            <p className="text-primary/80 tracking-[0.8em] text-sm md:text-base mt-6 font-medium uppercase">
              Business Logic & Automation
            </p>
          </div>
          
          {/* Scroll Indicator or subtle hint */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full" />
          </div>
        </section>

        {/* Content Sections - These will have the TechBackground behind them */}
        <div className="container mx-auto px-4 space-y-32 pb-32">
          <BrandSection />

          <PortfolioSection />

          <FeaturesSection />

          <div className="flex flex-col items-center justify-center relative">
            {/* Central Character */}
            <HeroCharacter />

            <div className="mt-12 flex gap-6 items-center">
              <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3 border-primary/30">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-bold text-white/90 tracking-wide">YOMAN SAGUR</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3 border-primary/30">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-bold text-white/90 tracking-wide">BOOKINGS COMPLETE</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative w-full border-t border-white/5 bg-black/40 backdrop-blur-xl z-30">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;