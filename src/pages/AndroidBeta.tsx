"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import TechBackground from '@/components/TechBackground';
import BetaTestingForm from '@/components/BetaTestingForm';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AndroidBeta = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30 relative">
      <Navbar />
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#0a0a0a_100%)]" />
      <TechBackground />
      
      <main className="relative z-20 pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link to="/amit-tzarfati" className="inline-flex items-center gap-2 text-white/30 hover:text-primary transition-colors group mb-8">
              <span className="text-xs font-bold tracking-widest uppercase">חזרה לדף האפליקציה</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <BetaTestingForm />
          
          <div className="mt-12 text-center text-white/30 text-xs">
            <p>© {new Date().getFullYear()} Velogic Systems. All rights reserved.</p>
            <p className="mt-2">הצטרפות לתוכנית הבטא מאפשרת גישה לגרסאות פיתוח לפני שחרורן לקהל הרחב.</p>
          </div>
        </div>
      </main>

      <footer className="relative w-full border-t border-white/5 bg-black/40 backdrop-blur-xl z-30">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default AndroidBeta;