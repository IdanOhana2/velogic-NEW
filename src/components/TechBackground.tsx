"use client";

import React from 'react';
import { 
  Smartphone, Globe, BarChart3, 
  Bell, Search, Settings,
  MessageSquare, CreditCard, Activity, Cpu as Chip
} from 'lucide-react';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid starts with a fade-in from the top */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%)]" />
      
      {/* Floating 3D UI Elements - Positioned lower to not interfere with the Hero Video */}
      <div className="absolute inset-0 perspective-[2000px] pt-[60vh]">
        
        {/* Large iOS Style Dashboard - Mid Left */}
        <div className="absolute top-[10%] left-[-5%] animate-float-3d opacity-40 scale-110" style={{ animationDelay: '0s' }}>
          <div className="glass-card p-6 rounded-[3rem] border-primary/30 rotate-[-10deg] transform-3d shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            </div>
            <div className="space-y-3">
              <div className="w-32 h-3 bg-primary/20 rounded-full" />
              <div className="w-20 h-3 bg-white/5 rounded-full" />
            </div>
          </div>
        </div>

        {/* Large Android Interface - Lower Right */}
        <div className="absolute top-[40%] right-[-2%] animate-float-3d opacity-40 scale-100" style={{ animationDelay: '2.5s' }}>
          <div className="glass-card p-8 rounded-[3rem] border-primary/30 rotate-[8deg] transform-3d shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Bell className="w-6 h-6 text-primary/60" />
              </div>
              <div className="w-24 h-3 bg-white/10 rounded-full" />
            </div>
            <BarChart3 className="w-10 h-10 text-primary/30 mx-auto" />
          </div>
        </div>

        {/* Scattered Icons throughout the scroll */}
        <div className="absolute top-[20%] right-[15%] animate-float-3d opacity-20">
          <Globe className="w-32 h-32 text-white/10" />
        </div>

        <div className="absolute top-[60%] left-[10%] animate-float-3d opacity-20">
          <Chip className="w-24 h-24 text-primary/20" />
        </div>

        <div className="absolute top-[80%] right-[20%] animate-float-3d opacity-30">
          <Settings className="w-16 h-16 text-white/20 animate-spin-slow" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .transform-3d { transform-style: preserve-3d; }
        @keyframes float-3d {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          50% { transform: translateY(-30px) rotateX(5deg) rotateY(-5deg); }
        }
        .animate-float-3d {
          animation: float-3d 12s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}} />
    </div>
  );
};

export default TechBackground;