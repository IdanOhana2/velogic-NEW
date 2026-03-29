"use client";

import React from 'react';
import { 
  Smartphone, Globe, BarChart3, 
  Bell, Settings, Cpu as Chip,
  ShieldCheck, Zap, Layers,
  Star, Calendar, MessageSquare,
  MousePointer2, Share2
} from 'lucide-react';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Enhanced Grid with subtle glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] opacity-50" />
      
      {/* Floating 3D UI Elements - Starting exactly below the 100vh hero video */}
      <div className="absolute inset-0 perspective-[2000px] pt-[100vh]">
        
        {/* --- SECTION 1: BRAND AREA (100vh - 150vh) --- */}
        
        {/* Floating App Interface - Left */}
        <div className="absolute top-[5%] left-[2%] animate-float-3d opacity-70 scale-110" style={{ animationDelay: '0s' }}>
          <div className="glass-card p-6 rounded-[2.5rem] border-primary/40 rotate-[-12deg] transform-3d shadow-[0_0_50px_rgba(226,176,145,0.2)]">
            <div className="w-32 h-2 bg-primary/30 rounded-full mb-4" />
            <div className="flex gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><Calendar className="w-5 h-5 text-primary" /></div>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><MessageSquare className="w-5 h-5 text-primary" /></div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-primary/10 rounded-xl border border-primary/20" />
              <div className="w-full h-12 bg-white/5 rounded-xl" />
            </div>
          </div>
        </div>

        {/* Google Review Card - Right */}
        <div className="absolute top-[12%] right-[4%] animate-float-3d opacity-60" style={{ animationDelay: '1.5s' }}>
          <div className="glass-card p-5 rounded-2xl border-primary/20 rotate-[8deg] transform-3d max-w-[200px]">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-primary text-primary" />)}
            </div>
            <div className="h-2 w-24 bg-white/20 rounded-full mb-2" />
            <div className="h-2 w-16 bg-white/10 rounded-full" />
          </div>
        </div>

        {/* --- SECTION 2: FEATURES AREA (150vh - 250vh) --- */}

        {/* Floating Smartphone - Left Center */}
        <div className="absolute top-[35%] left-[5%] animate-float-3d opacity-50" style={{ animationDelay: '3s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <Smartphone className="w-56 h-56 text-primary/20 rotate-[-15deg] relative z-10" />
          </div>
        </div>

        {/* Analytics Dashboard - Right Center */}
        <div className="absolute top-[45%] right-[6%] animate-float-3d opacity-70 scale-125" style={{ animationDelay: '4.5s' }}>
          <div className="glass-card p-8 rounded-[3rem] border-primary/40 rotate-[15deg] transform-3d shadow-2xl">
            <div className="flex items-end gap-2 h-24 mb-4">
              <div className="w-4 h-[40%] bg-primary/40 rounded-t-sm" />
              <div className="w-4 h-[70%] bg-primary/60 rounded-t-sm" />
              <div className="w-4 h-[100%] bg-primary rounded-t-sm" />
              <div className="w-4 h-[60%] bg-primary/50 rounded-t-sm" />
            </div>
            <div className="text-[10px] text-primary font-bold tracking-widest uppercase">Real-time Data</div>
          </div>
        </div>

        {/* Floating Icons Cluster */}
        <div className="absolute top-[55%] left-[20%] animate-float-3d opacity-30">
          <Share2 className="w-12 h-12 text-white/20" />
        </div>
        <div className="absolute top-[58%] left-[25%] animate-float-3d opacity-40" style={{ animationDelay: '1s' }}>
          <Zap className="w-16 h-16 text-primary/30" />
        </div>

        {/* --- SECTION 3: CHARACTER AREA (250vh+) --- */}

        {/* Large Tech Elements */}
        <div className="absolute top-[75%] left-[10%] animate-float-3d opacity-40">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" />
            <Layers className="w-48 h-48 text-white/5 rotate-12" />
          </div>
        </div>

        <div className="absolute top-[82%] right-[12%] animate-float-3d opacity-50">
          <div className="relative">
            <Settings className="w-32 h-32 text-white/10 animate-spin-slow" />
            <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-primary/40" />
          </div>
        </div>

        <div className="absolute top-[90%] left-[15%] animate-float-3d opacity-60">
          <Chip className="w-40 h-40 text-primary/20 animate-pulse" />
        </div>

        {/* Floating Cursor Decoration */}
        <div className="absolute top-[85%] right-[30%] animate-float-3d opacity-40">
          <MousePointer2 className="w-10 h-10 text-primary/40 rotate-[-20deg]" />
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .transform-3d { transform-style: preserve-3d; }
        @keyframes float-3d {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          50% { transform: translateY(-50px) rotateX(10deg) rotateY(-10deg); }
        }
        .animate-float-3d {
          animation: float-3d 12s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
      `}} />
    </div>
  );
};

export default TechBackground;