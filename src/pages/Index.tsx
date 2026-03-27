"use client";

import React from 'react';
import { 
  Users, 
  Zap, 
  Smartphone, 
  LayoutDashboard, 
  CheckCircle2,
  Calendar,
  Timer,
  Palette,
  BarChart3
} from 'lucide-react';
import ValueCard from '@/components/ValueCard';
import HeroCharacter from '@/components/HeroCharacter';
import LoadingScreen from '@/components/LoadingScreen';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden selection:bg-primary/30 relative font-sans">
      <LoadingScreen />
      
      {/* Premium Background with Embossed 'V' Watermark */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] opacity-50" />
        <span className="text-[60rem] font-black text-white/[0.02] select-none leading-none translate-y-20">V</span>
      </div>
      
      {/* Main Content Container */}
      <main className="container mx-auto px-4 pt-16 pb-32 relative z-20">
        
        {/* Master Wordmark & Title */}
        <div className="mb-20 text-center animate-in fade-in slide-in-from-top-8 duration-1000">
          <h2 className="text-primary font-medium tracking-[0.3em] text-sm mb-4 uppercase">
            The Power of Velogic
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            הכוח של Velogic בניהול העסק שלך
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Hero Section - Ecosystem Layout */}
        <div className="flex flex-col items-center justify-center relative min-h-[600px]">
          
          {/* Ability Cubes - Arc Layout (Desktop) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {/* Top Left - Cube 1 */}
            <div className="absolute top-0 left-[5%] animate-float" style={{ animationDelay: '0s' }}>
              <ValueCard 
                title="ניהול תורים ולקוחות"
                subtitle="סנכרון מלא בין יומן התורים לכרטיס הלקוח"
                icon={Users}
              />
            </div>
            {/* Bottom Left - Cube 2 */}
            <div className="absolute bottom-10 left-[10%] animate-float" style={{ animationDelay: '1.5s' }}>
              <ValueCard 
                title="חיסכון דרמטי בזמן"
                subtitle="אוטומציה מלאה שחוסכת שעות של עבודה ידנית"
                icon={Timer}
              />
            </div>
            {/* Top Right - Cube 3 */}
            <div className="absolute top-0 right-[5%] animate-float" style={{ animationDelay: '0.7s' }}>
              <ValueCard 
                title="אפליקציה ממותגת אישית"
                subtitle="העסק שלך בחזית הטכנולוגיה עם מיתוג ייחודי"
                icon={Smartphone}
              />
            </div>
            {/* Bottom Right - Cube 4 */}
            <div className="absolute bottom-10 right-[10%] animate-float" style={{ animationDelay: '2.2s' }}>
              <ValueCard 
                title="שליטה מלאה במשאבים"
                subtitle="דאשבורד ניהולי עם גרפים ונתונים בזמן אמת"
                icon={BarChart3}
              />
            </div>
          </div>

          {/* Central Character & Success Dashboard */}
          <div className="relative z-10 scale-110">
            <HeroCharacter />
          </div>

          {/* Mobile Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 lg:hidden w-full max-w-md">
            <ValueCard title="ניהול תורים ולקוחות" subtitle="סנכרון מלא וחכם" icon={Users} />
            <ValueCard title="חיסכון דרמטי בזמן" subtitle="אוטומציה שחוסכת שעות" icon={Timer} />
            <ValueCard title="אפליקציה ממותגת" subtitle="מיתוג אישי ויוקרתי" icon={Smartphone} />
            <ValueCard title="שליטה במשאבים" subtitle="נתונים וגרפים בזמן אמת" icon={BarChart3} />
          </div>

          {/* Status Indicators & Call to Action */}
          <div className="mt-20 flex flex-col items-center gap-8">
            <div className="flex gap-6 items-center">
              <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3 border border-white/5 shadow-xl">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-white tracking-widest">YOMAN SAGUR</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3 border border-white/5 shadow-xl">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-white tracking-widest">BOOKINGS COMPLETE</span>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-primary/80 text-lg font-light italic mb-8">
                תתקדם לדרך הנכונה לניהול
              </p>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter rose-gold-text drop-shadow-2xl opacity-80">
                VELOGIC
              </h1>
            </div>
          </div>

        </div>
      </main>

      <footer className="fixed bottom-0 w-full border-t border-white/5 bg-black/40 backdrop-blur-xl z-30">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;