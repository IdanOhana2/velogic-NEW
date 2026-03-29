"use client";

import React from 'react';
import { 
  Smartphone, Globe, BarChart3, 
  Bell, Settings, Cpu as Chip,
  ShieldCheck, Zap, Layers
} from 'lucide-react';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Enhanced Grid with subtle glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] opacity-50" />
      
      {/* Floating 3D UI Elements - Positioned to frame the content */}
      <div className="absolute inset-0 perspective-[2000px] pt-[100vh]">
        
        {/* Section 1: Brand Area Decorations */}
        <div className="absolute top-[5%] left-[2%] animate-float-3d opacity-60 scale-125" style={{ animationDelay: '0s' }}>
          <div className="glass-card p-8 rounded-[3rem] border-primary/40 rotate-[-12deg] transform-3d shadow-[0_0_40px_rgba(226,176,145,0.15)]">
            <div className="flex gap-2 mb-6">
              <div className="w-4 h-4 rounded-full bg-red-500/30" />
              <div className="w-4 h-4 rounded-full bg-yellow-500/30" />
              <div className="w-4 h-4 rounded-full bg-green-500/30" />
            </div>
            <div className="space-y-4">
              <div className="w-40 h-4 bg-primary/30 rounded-full" />
              <div className="w-24 h-4 bg-white/10 rounded-full" />
              <div className="w-32 h-4 bg-white/5 rounded-full" />
            </div>
          </div>
        </div>

        <div className="absolute top-[15%] right-[5%] animate-float-3d opacity-50" style={{ animationDelay: '1.5s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <Globe className="w-48 h-48 text-primary/40 relative z-10" />
          </div>
        </div>

        {/* Section 2: Features Area Decorations */}
        <div className="absolute top-[45%] left-[8%] animate-float-3d opacity-60" style={{ animationDelay: '3s' }}>
          <div className="glass-card p-10 rounded-[3.5rem] border-primary/40 rotate-[15deg] transform-3d shadow-2xl">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(226,176,145,0.2)]">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="w-28 h-3 bg-white/20 rounded-full" />
                <div className="w-16 h-3 bg-white/10 rounded-full" />
              </div>
            </div>
            <BarChart3 className="w-12 h-12 text-primary/40 mx-auto" />
          </div>
        </div>

        <div className="absolute top-[55%] right-[10%] animate-float-3d opacity-40" style={{ animationDelay: '4.5s' }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-colors" />
            <Layers className="w-40 h-40 text-white/10 rotate-12" />
          </div>
        </div>

        {/* Section 3: Character Area Decorations */}
        <div className="absolute top-[85%] left-[15%] animate-float-3d opacity-50">
          <Chip className="w-32 h-32 text-primary/30 animate-pulse" />
        </div>

        <div className="absolute top-[90%] right-[15%] animate-float-3d opacity-40">
          <div className="relative">
            <Settings className="w-24 h-24 text-white/10 animate-spin-slow" />
            <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-primary/40" />
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .transform-3d { transform-style: preserve-3d; }
        @keyframes float-3d {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          50% { transform: translateY(-40px) rotateX(8deg) rotateY(-8deg); }
        }
        .animate-float-3d {
          animation: float-3d 10s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default TechBackground;