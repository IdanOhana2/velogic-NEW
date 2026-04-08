"use client";

import React from 'react';
import { Apple, ArrowLeft, CheckCircle2, Smartphone, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { showSuccess } from '@/utils/toast';

const AmitTzarfati = () => {
  const appStoreUrl = "https://apps.apple.com/il/app/amit-tzarfati/id6761207418";

  const handleGooglePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    showSuccess("גרסת האנדרואיד תהיה זמינה בקרוב מאוד! 🚀");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      
      {/* Minimalist Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Back Link */}
          <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-primary transition-colors mb-12 group">
            <ArrowLeft size={16} />
            <span className="text-xs font-bold tracking-widest uppercase">Back to Velogic</span>
          </Link>

          {/* Title Area */}
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter">
              AMIT <span className="rose-gold-text">TZARFATI</span>
            </h1>
            <p className="text-white/40 tracking-[0.4em] text-sm uppercase font-medium">
              The Official Mobile Experience
            </p>
          </div>

          {/* App Store Buttons Container */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center animate-in fade-in zoom-in duration-1000 delay-200">
            
            {/* App Store Button */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-1000" />
              <a 
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-4 bg-white text-black px-8 py-5 rounded-[2rem] font-bold hover:scale-105 transition-all duration-300 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)] group w-64"
              >
                <Apple size={28} className="group-hover:rotate-12 transition-transform" />
                <div className="text-right">
                  <div className="text-[10px] uppercase leading-none opacity-60">Download on the</div>
                  <div className="text-xl leading-none">App Store</div>
                </div>
              </a>
            </div>

            {/* Google Play Button (Coming Soon) */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 blur-[40px] rounded-full opacity-20 group-hover:opacity-50 transition-opacity duration-1000" />
              <button 
                onClick={handleGooglePlayClick}
                className="relative flex items-center justify-center gap-4 bg-zinc-900 text-white border border-white/10 px-8 py-5 rounded-[2rem] font-bold hover:scale-105 transition-all duration-300 active:scale-95 shadow-2xl group w-64"
              >
                <Play size={28} className="fill-white group-hover:scale-110 transition-transform" />
                <div className="text-right">
                  <div className="text-[10px] uppercase leading-none opacity-60">Get it on</div>
                  <div className="text-xl leading-none">Google Play</div>
                </div>
              </button>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-24 max-w-md">
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              חוויית השירות של עמית צרפתי עולה שלב. הורידו עכשיו את האפליקציה הרשמית ותיהנו מניהול תורים חכם, הטבות בלעדיות ועדכונים לפני כולם.
            </p>
            <div className="flex items-center justify-center gap-6 text-white/20">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} />
                <span className="text-[10px] font-bold uppercase">iOS Ready</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <div className="flex items-center gap-2">
                <Smartphone size={14} />
                <span className="text-[10px] font-bold uppercase">Velogic OS</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default AmitTzarfati;