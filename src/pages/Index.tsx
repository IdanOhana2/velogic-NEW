"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import HeroCharacter from '@/components/HeroCharacter';
import LoadingScreen from '@/components/LoadingScreen';
import TechBackground from '@/components/TechBackground';
import BrandSection from '@/components/BrandSection';
import FeaturesSection from '@/components/FeaturesSection';
import Navbar from '@/components/Navbar';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30 relative">
      <LoadingScreen />
      
      <Navbar />
      
      <TechBackground />
      
      <main className="container mx-auto px-4 pt-32 pb-32 relative z-20">
        
        <div className="mb-12 text-center animate-in fade-in slide-in-from-top-8 duration-1000">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter rose-gold-text drop-shadow-2xl">
            VELOGIC
          </h1>
          <p className="text-primary/60 tracking-[0.5em] text-sm mt-4 font-light uppercase">
            Business Logic & Automation
          </p>
        </div>

        <BrandSection />

        <FeaturesSection />

        <div className="flex flex-col items-center justify-center relative mt-24">
          
          {/* Central Character */}
          <HeroCharacter />

          <div className="mt-12 flex gap-6 items-center">
            <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-xs font-medium text-white/80">YOMAN SAGUR</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-xs font-medium text-white/80">BOOKINGS COMPLETE</span>
            </div>
          </div>

        </div>
      </main>

      <footer className="fixed bottom-0 w-full border-t border-white/5 bg-black/20 backdrop-blur-md z-30">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;