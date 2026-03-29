"use client";

import React from 'react';
import { 
  Smartphone, Code, Cpu, Globe, Layers, Shield, 
  AppWindow, Layout, Database, Zap, BarChart3, 
  MousePointer2, Bell, Search, Share2, Settings,
  MessageSquare, CreditCard, Activity, Cpu as Chip
} from 'lucide-react';

const TechBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(226,176,145,0.12),transparent_80%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_80%,transparent_100%)]" />
      
      {/* Floating 3D UI Elements Container */}
      <div className="absolute inset-0 perspective-[2000px]">
        
        {/* Large iOS Style Dashboard - Top Left */}
        <div className="absolute top-[5%] left-[-5%] animate-float-3d opacity-70 scale-125" style={{ animationDelay: '0s' }}>
          <div className="glass-card p-6 rounded-[3rem] border-primary/50 rotate-[-15deg] transform-3d shadow-[0_40px_100px_rgba(226,176,145,0.2)]">
            <div className="flex gap-2 mb-6">
              <div className="w-4 h-4 rounded-full bg-red-500/60" />
              <div className="w-4 h-4 rounded-full bg-yellow-500/60" />
              <div className="w-4 h-4 rounded-full bg-green-500/60" />
            </div>
            <div className="space-y-4">
              <div className="w-48 h-4 bg-primary/30 rounded-full" />
              <div className="w-32 h-4 bg-white/10 rounded-full" />
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="h-20 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-primary/60" />
                </div>
                <div className="h-20 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Android Interface - Bottom Right */}
        <div className="absolute bottom-[10%] right-[-5%] animate-float-3d opacity-60 scale-110" style={{ animationDelay: '2.5s' }}>
          <div className="glass-card p-8 rounded-[3.5rem] border-primary/40 rotate-[12deg] transform-3d shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary/60 to-transparent flex items-center justify-center shadow-2xl">
                <Bell className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-3">
                <div className="w-40 h-4 bg-white/20 rounded-full" />
                <div className="w-24 h-3 bg-white/10 rounded-full" />
              </div>
            </div>
            <div className="w-full h-32 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
              <BarChart3 className="w-12 h-12 text-primary/40" />
            </div>
          </div>
        </div>

        {/* Floating Code Block - Center Left */}
        <div className="absolute top-1/2 left-[2%] -translate-y-1/2 animate-float-3d opacity-50" style={{ animationDelay: '1.2s' }}>
          <div className="glass-card p-6 rounded-2xl border-white/20 -rotate-6 transform-3d font-mono text-xs text-primary/80 shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
            <p className="text-blue-400">function <span className="text-yellow-400">optimizeBusiness</span>() {"{"}</p>
            <p className="pl-6 text-white/70">const <span className="text-purple-400">growth</span> = <span className="text-green-400">"unlimited"</span>;</p>
            <p className="pl-6 text-white/70">return <span className="text-primary">VELOGIC</span>.automate();</p>
            <p className="text-blue-400">{"}"}</p>
          </div>
        </div>

        {/* Scattered Large Icons */}
        <div className="absolute top-[25%] right-[10%] animate-float-3d opacity-40" style={{ animationDelay: '4s' }}>
          <Smartphone className="w-48 h-48 text-primary/30 rotate-12 blur-[2px]" />
        </div>

        <div className="absolute bottom-[35%] left-[10%] animate-float-3d opacity-30" style={{ animationDelay: '5.5s' }}>
          <Chip className="w-32 h-32 text-primary/20 -rotate-12" />
        </div>

        <div className="absolute top-[50%] right-[15%] animate-float-3d opacity-25" style={{ animationDelay: '2s' }}>
          <Globe className="w-40 h-40 text-white/10 blur-[1px]" />
        </div>

        {/* Small Floating Elements for Detail */}
        <div className="absolute top-[15%] left-[40%] animate-float-3d opacity-50" style={{ animationDelay: '0.8s' }}>
          <MessageSquare className="w-10 h-10 text-primary/60" />
        </div>
        <div className="absolute bottom-[20%] left-[45%] animate-float-3d opacity-50" style={{ animationDelay: '3.2s' }}>
          <Settings className="w-12 h-12 text-white/30 animate-spin-slow" />
        </div>
        <div className="absolute top-[65%] left-[85%] animate-float-3d opacity-40" style={{ animationDelay: '4.5s' }}>
          <Search className="w-14 h-14 text-primary/40" />
        </div>
      </div>

      {/* Massive Dynamic Light Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/15 rounded-full blur-[180px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '3s' }} />

      <style dangerouslySetInnerHTML={{ __html: `
        .transform-3d { transform-style: preserve-3d; }
        @keyframes float-3d {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0) scale(1); }
          33% { transform: translateY(-40px) rotateX(10deg) rotateY(-10deg) scale(1.08); }
          66% { transform: translateY(20px) rotateX(-10deg) rotateY(10deg) scale(0.92); }
        }
        .animate-float-3d {
          animation: float-3d 15s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}} />
    </div>
  );
};

export default TechBackground;