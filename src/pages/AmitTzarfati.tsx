"use client";

import React from 'react';
import { Apple, ArrowLeft, CheckCircle2, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { MadeWithDyad } from "@/components/made-with-dyad";

const AmitTzarfati = () => {
  const appStoreUrl = "https://apps.apple.com/il/app/amit-tzarfati/id6761207418";

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

          {/* App Store Button - Centered & Large */}
          <div className="relative group animate-in fade-in zoom-in duration-1000 delay-200">
            {/* Glow behind button */}
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <a 
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-4 bg-white text-black px-10 py-6 rounded-[2rem] font-bold hover:scale-105 transition-all duration-300 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)] group"
            >
              <Apple size={32} className="group-hover:rotate-12 transition-transform" />
              <div className="text-right">
                <div className="text-xs uppercase leading-none opacity-60">Download on the</div>
                <div className="text-2xl leading-none">App Store</div>
              </div>
            </a>
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