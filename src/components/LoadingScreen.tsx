"use client";

import React, { useEffect, useState } from 'react';
import { Star, Calendar, CheckCircle2 } from 'lucide-react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Simulated App Grid */}
        <div className="absolute top-10 left-10 w-64 h-80 glass-card rounded-3xl p-4 rotate-[-12deg] animate-pulse">
          <div className="h-4 w-20 bg-primary/30 rounded mb-4" />
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-white/5 rounded-xl flex items-center px-3 justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20" />
                  <div className="w-16 h-2 bg-white/10 rounded" />
                </div>
                <CheckCircle2 className="w-4 h-4 text-green-500/50" />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Animation */}
        <div className="absolute bottom-20 right-10 w-72 space-y-4 rotate-[8deg]">
          {[1, 2].map((i) => (
            <div key={i} className="glass-card p-4 rounded-2xl animate-bounce" style={{ animationDelay: `${i * 0.5}s` }}>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-primary text-primary" />)}
              </div>
              <div className="h-2 w-full bg-white/10 rounded mb-1" />
              <div className="h-2 w-2/3 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Central Character Container */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          
          {/* The Image with 3D Floating Effect */}
          <img 
            src="/hero-character.png" 
            alt="Velogic Character" 
            className="w-[450px] h-auto relative z-10 animate-float drop-shadow-[0_35px_35px_rgba(226,176,145,0.3)]"
          />
        </div>

        {/* Progress Bar */}
        <div className="mt-12 w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-[shimmer_2s_infinite] w-full" />
          <div className="h-full bg-primary animate-[load_3s_ease-in-out_forwards]" style={{ width: '0%' }} />
        </div>
        
        <p className="mt-4 text-primary/60 text-xs tracking-[0.3em] uppercase font-light animate-pulse">
          Optimizing Business Logic...
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes load {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default LoadingScreen;