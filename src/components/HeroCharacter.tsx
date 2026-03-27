"use client";

import React, { useState, useEffect } from 'react';
import { Clock, ThumbsUp, Zap, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

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
        {/* The "Clock-Man" Head */}
        <div className="w-48 h-48 rounded-3xl border-4 border-[#e2b091] bg-black relative overflow-hidden shadow-[0_0_50px_rgba(226,176,145,0.3)]">
          <div className="absolute inset-0 flex items-center justify-center p-6">
             <img 
               src="/velogic-logo-gold.png" 
               alt="Velogic Logo" 
               className="w-full h-auto object-contain z-10 animate-pulse drop-shadow-[0_0_15px_rgba(226,176,145,0.8)]"
             />
             <Clock className="absolute w-32 h-32 text-primary opacity-20" />
             <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-90 animate-[spin_20s_linear_infinite]" />
             <div className="absolute inset-0 border-2 border-primary/10 rounded-full scale-75 animate-[spin_25s_linear_infinite_reverse]" />
          </div>
        </div>

        {/* Suit & Body */}
        <div className="w-64 h-80 bg-gradient-to-b from-[#2d1b4d] to-[#1a2a2a] rounded-t-[4rem] mt-[-20px] relative shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-40 bg-black/40 flex flex-col items-center pt-4">
             <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(226,176,145,0.8)]" />
          </div>
          
          {/* Thumbs Up Hand */}
          <div className="absolute -right-12 top-20 animate-bounce">
            <div className="bg-[#e2b091] p-4 rounded-full shadow-xl">
              <ThumbsUp className="w-8 h-8 text-black" />
            </div>
          </div>

          {/* 3D Floating Smartphone */}
          <div className="absolute -left-24 bottom-4 w-48 h-96 animate-float perspective-1000">
            <div className="relative w-full h-full transition-transform duration-500 preserve-3d rotate-y-[-15deg] rotate-x-[5deg] hover:rotate-y-0">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-zinc-900 rounded-[2.5rem] border-[6px] border-zinc-800 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-zinc-800 rounded-b-2xl z-30" />
                
                {/* Screen Content / Slider */}
                <div className="relative w-full h-full bg-white">
                  {screenshots.map((src, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-500 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <img src={src} alt={`App screen ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  
                  {/* Navigation Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-between px-2 opacity-0 hover:opacity-100 transition-opacity">
                    <button onClick={prevSlide} className="p-1 bg-black/20 rounded-full text-white backdrop-blur-sm">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} className="p-1 bg-black/20 rounded-full text-white backdrop-blur-sm">
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Pagination Dots */}
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
              
              {/* 3D Side Depth Effect */}
              <div className="absolute top-0 -right-[6px] w-[6px] h-full bg-zinc-700 origin-left rotate-y-90" />
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
        .rotate-y-[-15deg] { transform: rotateY(-15deg); }
        .rotate-x-[5deg] { transform: rotateX(5deg); }
        .rotate-y-90 { transform: rotateY(90deg); }
      `}} />
    </div>
  );
};

export default HeroCharacter;