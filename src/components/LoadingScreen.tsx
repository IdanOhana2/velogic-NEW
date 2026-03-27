"use client";

import React, { useEffect, useState } from 'react';
import { Star, Calendar, CheckCircle2, Smartphone, Search } from 'lucide-react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      {/* Background Business Ecosystem */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        
        {/* Phone App Interface - Left */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-[500px] glass-card rounded-[3rem] p-6 rotate-[-6deg] border-primary/30 shadow-[0_0_50px_rgba(226,176,145,0.1)]">
          <div className="flex justify-between items-center mb-6">
            <div className="w-12 h-2 bg-white/20 rounded-full" />
            <div className="w-4 h-4 rounded-full bg-primary/20" />
          </div>
          <h4 className="text-primary text-xs font-bold mb-4 text-right">יומן פגישות</h4>
          <div className="grid grid-cols-7 gap-1 mb-4">
            {[...Array(28)].map((_, i) => (
              <div key={i} className={`aspect-square rounded-sm ${i === 14 ? 'bg-primary/40' : 'bg-white/5'}`} />
            ))}
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-14 bg-white/5 rounded-2xl flex items-center px-4 justify-between border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-transparent" />
                  <div className="space-y-1">
                    <div className="w-16 h-2 bg-white/20 rounded" />
                    <div className="w-10 h-1.5 bg-white/10 rounded" />
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews - Right */}
        <div className="absolute top-1/4 right-10 w-80 space-y-6 rotate-[4deg]">
          <div className="glass-card p-5 rounded-3xl border-primary/20 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">G</div>
              <div>
                <div className="text-[10px] text-white/60">Google Review</div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-primary text-primary" />)}
                </div>
              </div>
            </div>
            <p className="text-[11px] text-white/80 text-right leading-relaxed">"האפליקציה הכי טובה לניהול העסק שלי. הכל אוטומטי ונוח!"</p>
          </div>

          <div className="glass-card p-5 rounded-3xl border-primary/20 animate-float" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">G</div>
              <div>
                <div className="text-[10px] text-white/60">Google Review</div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-primary text-primary" />)}
                </div>
              </div>
            </div>
            <p className="text-[11px] text-white/80 text-right leading-relaxed">"סוף סוף יומן שסוגר לי תורים גם כשאני ישנה. מומלץ בחום."</p>
          </div>
        </div>
      </div>

      {/* Central Character Container */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative group">
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full animate-pulse scale-150" />
          <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full animate-ping" />
          
          {/* The Image - Smaller and Floating */}
          <img 
            src="/hero-character-no-bg.png" 
            alt="Velogic Character" 
            className="w-[320px] h-auto relative z-10 animate-float drop-shadow-[0_20px_50px_rgba(226,176,145,0.4)]"
          />
        </div>

        {/* Progress Bar */}
        <div className="mt-16 w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-[shimmer_2s_infinite] w-full" />
          <div className="h-full bg-primary animate-[load_4s_ease-in-out_forwards]" style={{ width: '0%' }} />
        </div>
        
        <p className="mt-6 text-primary/80 text-[10px] tracking-[0.4em] uppercase font-medium animate-pulse">
          Building Your Business Logic
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