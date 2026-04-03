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
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
              AMIT <span className="rose-gold-text">TZARFATI</span>
            </h1>
            <p className="text-white/40 tracking-[0.4em] text-sm uppercase font-medium">
              The Official Mobile Experience
            </p>
          </div>

          {/* Phone Showcase */}
          <div className="relative group animate-in fade-in zoom-in duration-1000 delay-200">
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative w-[300px] h-[600px] bg-zinc-900 rounded-[3.5rem] border-[10px] border-zinc-800 shadow-[0_50px_100px_rgba(0,0,0,0.9)] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-zinc-800 rounded-b-3xl z-30" />
              
              {/* App UI */}
              <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-black p-8 flex flex-col items-center justify-between">
                <div className="mt-12 flex flex-col items-center">
                  <div className="w-20 h-20 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center mb-6 shadow-2xl">
                    <span className="text-3xl font-black rose-gold-text">AT</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-24 bg-white/20 rounded-full mx-auto" />
                    <div className="h-1.5 w-16 bg-white/10 rounded-full mx-auto" />
                  </div>
                </div>

                {/* App Store Button INSIDE Phone */}
                <div className="w-full mb-8 space-y-4">
                  <a 
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-black py-4 rounded-2xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl"
                  >
                    <Apple size={20} />
                    <span className="text-sm">Download App</span>
                  </a>
                  <div className="flex justify-center gap-2">
                    {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Feature Tags */}
            <div className="absolute -right-12 top-1/4 glass-card px-4 py-2 rounded-full border-primary/20 text-[10px] font-bold tracking-widest uppercase animate-float">
              Quick Booking
            </div>
            <div className="absolute -left-12 bottom-1/4 glass-card px-4 py-2 rounded-full border-primary/20 text-[10px] font-bold tracking-widest uppercase animate-float" style={{ animationDelay: '1s' }}>
              VIP Access
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 max-w-md">
            <p className="text-white/50 text-sm leading-relaxed mb-8">
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

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default AmitTzarfati;