"use client";

import React, { useState, useEffect } from 'react';
import { ThumbsUp, Zap, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <div className="relative w-full max-w-3xl aspect-square flex items-center justify-center">
      {/* Background 'V' Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[40rem] font-bold select-none">V</span>
      </div>

      {/* Character Representation */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* The "Holographic Booking" Head Area */}
        <div className="w-72 h-72 relative perspective-1000 flex flex-col items-center justify-center">
          {/* Scanning Line Effect */}
          <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-transparent via-[#e2b091]/20 to-transparent h-1/2 w-full animate-scan pointer-events-none" />
        </div>

        {/* Suit & Body */}
        <div className="w-72 h-96 bg-gradient-to-b from-[#2d1b4d] to-[#1a2a2a] rounded-t-[5rem] mt-[-30px] relative shadow-2xl flex items-center justify-center">
          
          {/* 3D Floating Smartphone Container - ENLARGED */}
          <div className="relative w-56 h-[28rem] animate-float perspective-1000 z-20">
            
            {/* Glowing Orbiting Trail */}
            <div className="absolute inset-[-60px] pointer-events-none z-30">
              <div className="absolute w-5 h-5 bg-primary rounded-full blur-md animate-orbit" />
              <div className="absolute w-4 h-4 bg-white rounded-full blur-sm animate-orbit" style={{ animationDelay: '-2s' }} />
              <div className="absolute w-3 h-3 bg-primary rounded-full blur-[2px] animate-orbit" style={{ animationDelay: '-4s' }} />
            </div>

            <div className="relative w-full h-full transition-transform duration-500 preserve-3d hover:rotate-y-12">
              <div className="absolute inset-0 bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-zinc-800 rounded-b-3xl z-30" />
                <div className="relative w-full h-full bg-white overflow-hidden">
                  {screenshots.map((src, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-500 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <img src={src} alt={`App screen ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="absolute inset-0 z-20 flex items-center justify-between px-3 opacity-0 hover:opacity-100 transition-opacity">
                    <button onClick={prevSlide} className="p-2 bg-black/30 rounded-full text-white backdrop-blur-md hover:bg-black/50 transition-colors">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="p-2 bg-black/30 rounded-full text-white backdrop-blur-md hover:bg-black/50 transition-colors">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-1.5">
                    {screenshots.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-primary w-5' : 'bg-white/60'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbs Up Hand */}
          <div className="absolute -right-16 top-24 animate-bounce">
            <div className="bg-[#e2b091] p-5 rounded-full shadow-2xl border-4 border-[#2d1b4d]">
              <ThumbsUp className="w-10 h-10 text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <Zap className="w-10 h-10 text-primary drop-shadow-[0_0_15px_rgba(226,176,145,0.6)]" />
      </div>
      <div className="absolute bottom-20 right-0 animate-float" style={{ animationDelay: '2s' }}>
        <ShieldCheck className="w-12 h-12 text-primary" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scan { animation: scan 3s linear infinite; }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(160px) rotate(0deg) scale(1); opacity: 0.8; }
          25% { transform: rotate(90deg) translateX(180px) rotate(-90deg) scale(1.2); opacity: 1; }
          50% { transform: rotate(180deg) translateX(160px) rotate(-180deg) scale(1); opacity: 0.8; }
          75% { transform: rotate(270deg) translateX(140px) rotate(-270deg) scale(0.8); opacity: 0.5; }
          100% { transform: rotate(360deg) translateX(160px) rotate(-360deg) scale(1); opacity: 0.8; }
        }
        .animate-orbit {
          animation: orbit 6s linear infinite;
          top: 50%;
          left: 50%;
        }
      `}} />
    </div>
  );
};

export default HeroCharacter;