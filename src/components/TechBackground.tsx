"use client";

import React from 'react';
import { Smartphone, Code, Cpu, Globe, Layers, Shield } from 'lucide-react';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {/* Floating UI Elements */}
      <div className="absolute top-[10%] left-[5%] animate-float-slow perspective-1000">
        <div className="glass-card p-4 rounded-xl border-primary/20 rotate-12 transform-3d">
          <div className="w-24 h-2 bg-primary/20 rounded mb-2" />
          <div className="w-16 h-2 bg-white/10 rounded" />
        </div>
      </div>

      <div className="absolute bottom-[20%] right-[10%] animate-float perspective-1000" style={{ animationDelay: '1s' }}>
        <div className="glass-card p-4 rounded-2xl border-primary/20 -rotate-12 transform-3d">
          <div className="flex gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/40" />
          </div>
          <div className="w-32 h-20 bg-white/5 rounded-lg" />
        </div>
      </div>

      {/* Tech Icons */}
      <div className="absolute top-1/4 right-[15%] animate-float-slow opacity-40">
        <Smartphone className="w-16 h-16 text-primary" />
      </div>
      
      <div className="absolute bottom-1/3 left-[12%] animate-float opacity-30" style={{ animationDelay: '2s' }}>
        <Code className="w-12 h-12 text-primary" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-3d { transform-style: preserve-3d; }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-30px) rotate(15deg); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      `}} />
    </div>
  );
};

export default TechBackground;