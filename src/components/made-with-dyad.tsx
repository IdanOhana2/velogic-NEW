"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

export const MadeWithDyad = () => {
  return (
    <div className="p-6 text-center flex flex-col items-center gap-4">
      <a
        href="https://wa.me/972557125076"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span className="text-lg tracking-wide">דברו איתנו בוואטסאפ</span>
        
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shine pointer-events-none" />
      </a>
      
      <div className="flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
        <span className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-1">Powered by</span>
        <a
          href="https://www.dyad.sh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/70 hover:text-primary transition-colors font-medium"
        >
          VELOGIC SYSTEMS
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 1.5s infinite;
        }
      `}} />
    </div>
  );
};