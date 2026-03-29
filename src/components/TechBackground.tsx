"use client";

import React from 'react';
import { 
  Smartphone, Code, Cpu, Globe, Layers, Shield, 
  AppWindow, Layout, Database, Zap, BarChart3, 
  MousePointer2, Bell, Search, Share2, Settings
} from 'lucide-react';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(226,176,145,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Floating 3D UI Elements Container */}
      <div className="absolute inset-0 perspective-[1500px]">
        
        {/* iOS Style Card - Top Left */}
        <div className="absolute top-[10%] left-[5%] animate-float-3d opacity-60" style={{ animationDelay: '0s' }}>
          <div className="glass-card p-5 rounded-[2.5rem] border-primary/40 rotate-[-12deg] transform-3d shadow-[0_20px_50px_rgba(226,176,145,0.15)]">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="space-y-3">
              <div className="w-32 h-3 bg-primary/30 rounded-full" />
              <div className="w-20 h-3 bg-white/10 rounded-full" />
              <div className="w-24 h-12 bg-primary/15 rounded-2xl mt-4 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary/60" />
              </div>
            </div>
          </div>
        </div>

        {/* Android Style Notification - Bottom Right */}
        <div className="absolute bottom-[15%] right-[8%] animate-float-3d opacity-50" style={{ animationDelay: '2s' }}>
          <div className="glass-card p-5 rounded-3xl border-primary/30 rotate-[8deg] transform-3d shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/50 to-transparent flex items-center justify-center shadow-lg">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="w-28 h-3 bg-white/20 rounded" />
                <div className="w-16 h-2 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Code Block - Middle Left */}
        <div className="absolute top-1/2 left-[2%] -translate-y-1/2 animate-float-3d opacity-40" style={{ animationDelay: '1s' }}>
          <div className="glass-card p-4 rounded-xl border-white/10 -rotate-6 transform-3d font-mono text-[10px] text-primary/70">
            <div className="flex gap-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <p>const business = {"{"}</p>
            <p className="pl-4">logic: "automated",</p>
            <p className="pl-4">growth: "exponential"</p>
            <p>{"}"};</p>
          </div>
        </div>

        {/* Floating Icons - Scattered */}
        <div className="absolute top-[20%] right-[15%] animate-float-3d opacity-30" style={{ animationDelay: '3s' }}>
          <Smartphone className="w-32 h-32 text-primary/40 rotate-12 blur-[1px]" />
        </div>

        <div className="absolute bottom-[30%] left-[15%] animate-float-3d opacity-25" style={{ animationDelay: '4s' }}>
          <BarChart3 className="w-20 h-20 text-primary/30 -rotate-12" />
        </div>

        <div className="absolute top-[45%] right-[10%] animate-float-3d opacity-20" style={{ animationDelay: '1.5s' }}>
          <Globe className="w-24 h-24 text-white/10" />
        </div>

        <div className="absolute bottom-[10%] left-[40%] animate-float-3d opacity-30" style={{ animationDelay: '5s' }}>
          <Shield className="w-16 h-16 text-primary/20" />
        </div>

        {/* Small Floating Elements */}
        <div className="absolute top-[15%] left-[45%] animate-float-3d opacity-40" style={{ animationDelay: '0.5s' }}>
          <Zap className="w-8 h-8 text-primary/60" />
        </div>
        <div className="absolute bottom-[25%] left-[30%] animate-float-3d opacity-40" style={{ animationDelay: '2.5s' }}>
          <MousePointer2 className="w-6 h-6 text-white/40" />
        </div>
        <div className="absolute top-[60%] left-[80%] animate-float-3d opacity-30" style={{ animationDelay: '3.5s' }}>
          <Share2 className="w-10 h-10 text-primary/40" />
        </div>
      </div>

      {/* Dynamic Light Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />

      <style dangerouslySetInnerHTML={{ __html: `
        .transform-3d { transform-style: preserve-3d; }
        @keyframes float-3d {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0) scale(1); }
          33% { transform: translateY(-30px) rotateX(8deg) rotateY(-8deg) scale(1.05); }
          66% { transform: translateY(15px) rotateX(-8deg) rotateY(8deg) scale(0.95); }
        }
        .animate-float-3d {
          animation: float-3d 12s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

// Helper component for the code block
const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export default TechBackground;