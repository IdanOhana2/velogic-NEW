"use client";

import React, { useState, useEffect } from 'react';
import { Clock, ThumbsUp, Zap, ShieldCheck, ChevronLeft, ChevronRight, Calendar, CheckCircle2 } from 'lucide-react';

const HeroCharacter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenshots = [
    '/app-1.jpg',
    '/app-2.jpg',
    '/app-3.jpg',
    '/app-4.jpg',
    '/app-5.jpg',
    '/app-6.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
      {/* Background 'V' Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[40rem] font-bold select-none">V</span>
      </div>

      {/* Character Representation */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* The "Holographic Booking" Head Area */}
        <div className="w-56 h-56 relative perspective-1000 flex items-center justify-center">
          
          {/* Central Logo - Floating */}
          <div className="relative z-10 w-32 h-32 flex items-center justify-center">
            <img 
              src="/velogic-logo-gold.png" 
              alt="Velogic Logo" 
              className="w-full h-auto object-contain animate-pulse drop-shadow-[0_0_30px_rgba(226,176,145,0.8)]"
            />
          </div>

          {/* Floating Booking Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Time Slot 1 */}
            <div className="absolute top-4 left-4 bg-[#e2b091]/20 backdrop-blur-md border border-[#e2b091]/40 rounded-lg px-2 py-1 flex items-center gap-1 animate-float" style={{ animationDelay: '0.5s' }}>
              <Clock size={10} className="text-[#e2b091]" />
              <span className="text-[8px] text-[#e2b091] font-bold">10:30 AM</span>
            </div>
            
            {/* Confirmed Badge */}
            <div className="absolute bottom-6 right-4 bg-green-500/20 backdrop-blur-md border border-green-500/50 rounded-full px-2 py-1 flex items-center gap-1 animate-float" style={{ animationDelay: '1.5s' }}>
              <CheckCircle2 size={10} className="text-green-400" />
              <span className="text-[8px] text-green-400 font-bold">BOOKED</span>
            </div>

            {/* Calendar Icon */}
            <div className="absolute top-10 right-6 opacity-60 animate-spin-slow">
              <Calendar size={24} className="text-[#e2b091]" />
            </div>

            {/* Scanning Line Effect - Now floating */}
            <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-transparent via-[#e2b091]/20 to-transparent h-1/2 w-full animate-scan pointer-events-none" />
          </div>

          {/* External Floating UI Elements */}
          <div className="absolute -top-8 -right-8 w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex flex-col items-center justify-center shadow-2xl animate-float">
             <div className="text-[10px] text-white/60 uppercase tracking-tighter">Next Appt</div>
             <div className="text-lg font-bold text-[#e2b091]">14:00</div>
          </div>
        </div>

        {/* Suit & Body */}
        <div className="w-64 h-80 bg-gradient-to-b from-[#2d1b4d] to-[#1a2a2a] rounded-t-[4rem] mt-[-20px] relative shadow-2xl flex items-center justify-center">
          
          {/* 3D Floating Smartphone */}
          <div className="relative w-44 h-[22rem] animate-float perspective-1000 z-20">
            <div className="relative w-full h-full transition-transform duration-500 preserve-3d hover:rotate-y-12">
              <div className="absolute inset-0 bg-zinc-900 rounded-[2.5rem] border-[6px] border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-zinc-800 rounded-b-2xl z-30" />
                <div className="relative w-full h-full bg-white">
                  {screenshots.map((src, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-500 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <img src={src} alt={`App screen ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="absolute inset-0 z-20 flex items-center justify-between px-2 opacity-0 hover:opacity-100 transition-opacity">
                    <button onClick={prevSlide} className="p-1 bg-black/20 rounded-full text-white backdrop-blur-sm">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} className="p-1 bg-black/20 rounded-full text-white backdrop-blur-sm">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1">
                    {screenshots.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentSlide ? 'bg-primary w-3' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbs Up Hand */}
          <div className="absolute -right-12 top-20 animate-bounce">
            <div className="bg-[#e2b091] p-4 rounded-full shadow-xl">
              <ThumbsUp className="w-8 h-8 text-black" />
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

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scan { animation: scan 3s linear infinite; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
      `}} />
    </div>
  );
};

export default HeroCharacter;