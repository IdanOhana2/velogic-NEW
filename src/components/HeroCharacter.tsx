"use client";

import React from 'react';
import { Clock, ThumbsUp, Zap, CalendarCheck, ShieldCheck } from 'lucide-react';

const HeroCharacter = () => {
  return (
    <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
      {/* Background 'V' Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[40rem] font-bold select-none">V</span>
      </div>

      {/* Character Representation */}
      <div className="relative z-10 flex flex-col items-center">
        {/* The "Clock-Man" Head */}
        <div className="w-48 h-48 rounded-3xl border-4 border-[#e2b091] bg-black relative overflow-hidden shadow-[0_0_50px_rgba(226,176,145,0.3)]">
          <div className="absolute inset-0 flex items-center justify-center p-6">
             {/* The Gold Logo inside the head */}
             <img 
               src="/velogic-logo-gold.png" 
               alt="Velogic Logo" 
               className="w-full h-auto object-contain z-10 animate-pulse drop-shadow-[0_0_15px_rgba(226,176,145,0.8)]"
             />
             
             {/* Subtle Clock Hands behind the logo */}
             <Clock className="absolute w-32 h-32 text-primary opacity-20" />
             
             {/* Inner Gears Simulation */}
             <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-90 animate-[spin_20s_linear_infinite]" />
             <div className="absolute inset-0 border-2 border-primary/10 rounded-full scale-75 animate-[spin_25s_linear_infinite_reverse]" />
          </div>
        </div>

        {/* Suit & Body */}
        <div className="w-64 h-80 bg-gradient-to-b from-[#2d1b4d] to-[#1a2a2a] rounded-t-[4rem] mt-[-20px] relative shadow-2xl">
          {/* Tie & Pin */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-40 bg-black/40 flex flex-col items-center pt-4">
             <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(226,176,145,0.8)]" />
          </div>
          
          {/* Thumbs Up Hand */}
          <div className="absolute -right-12 top-20 animate-bounce">
            <div className="bg-[#e2b091] p-4 rounded-full shadow-xl">
              <ThumbsUp className="w-8 h-8 text-black" />
            </div>
          </div>

          {/* Tablet */}
          <div className="absolute -left-20 bottom-10 glass-card p-4 rounded-xl w-56 rotate-[-5deg] shadow-2xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-primary font-bold">VELOGIC OS</span>
              <CalendarCheck className="w-3 h-3 text-primary" />
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-2 bg-white/10 rounded flex items-center px-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full mr-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <Zap className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(226,176,145,0.5)]" />
      </div>
      <div className="absolute bottom-20 right-0 animate-float" style={{ animationDelay: '2s' }}>
        <ShieldCheck className="w-10 h-10 text-primary" />
      </div>
    </div>
  );
};

export default HeroCharacter;