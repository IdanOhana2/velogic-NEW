"use client";

import React from 'react';
import { Clock, Ban, Smartphone, Palette, CheckCircle2 } from 'lucide-react';
import ValueCard from '@/components/ValueCard';
import HeroCharacter from '@/components/HeroCharacter';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      {/* Main Content Container */}
      <main className="container mx-auto px-4 pt-20 pb-32 relative">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center relative">
          
          {/* Floating Cards - Desktop Layout */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {/* Top Left */}
            <div className="absolute top-20 left-[10%]">
              <ValueCard 
                title="עסק שעובד 24/7"
                subtitle="סגירת תורים אוטומטית (אפילו בלילה!)"
                icon={Clock}
                delay="0s"
              />
            </div>
            {/* Middle Left */}
            <div className="absolute top-1/2 left-[5%] -translate-y-1/2">
              <ValueCard 
                title="סוף לביטולים והברזות"
                subtitle="חיוב מקדמה ודמי ביטול מראש"
                icon={Ban}
                delay="1.5s"
              />
            </div>
            {/* Top Right */}
            <div className="absolute top-20 right-[10%]">
              <ValueCard 
                title="חוויית לקוח מושלמת"
                subtitle="קביעת תור ב-3 קליקים בלבד"
                icon={Smartphone}
                delay="0.7s"
              />
            </div>
            {/* Middle Right */}
            <div className="absolute top-1/2 right-[5%] -translate-y-1/2">
              <ValueCard 
                title="העסק שלך ממותג"
                subtitle="מעוצב בצבעי המותג הייחודיים שלך"
                icon={Palette}
                delay="2.2s"
              />
            </div>
          </div>

          {/* Central Character */}
          <HeroCharacter />

          {/* Mobile Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 lg:hidden">
            <ValueCard title="עסק שעובד 24/7" subtitle="סגירת תורים אוטומטית" icon={Clock} />
            <ValueCard title="חוויית לקוח מושלמת" subtitle="קביעת תור ב-3 קליקים" icon={Smartphone} />
          </div>

          {/* Status Indicators */}
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

          {/* Master Wordmark */}
          <div className="mt-20 text-center">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter rose-gold-text drop-shadow-2xl">
              VELOGIC
            </h1>
            <p className="text-primary/60 tracking-[0.5em] text-sm mt-4 font-light uppercase">
              Business Logic & Automation
            </p>
          </div>

        </div>
      </main>

      <footer className="fixed bottom-0 w-full border-t border-white/5 bg-black/20 backdrop-blur-md">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;