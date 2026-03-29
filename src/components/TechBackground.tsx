"use client";

import React from 'react';
import { Smartphone, Code, Cpu, Globe, Layers, Shield, AppWindow, Layout, Database, Zap } from 'lucide-react';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(226,176,145,0.05),transparent_70%)]" />
      
      {/* Floating 3D UI Elements */}
      <div className="absolute inset-0 perspective-[1200px]">
        
        {/* iOS Style Card - Top Left */}
        <div className="absolute top-[15%] left-[8%] animate-float-3d opacity-40" style={{ animationDelay: '0s' }}>
          <div className="glass-card p-4 rounded-[2rem] border-primary/30 rotate-[-15deg] transform-3d shadow-2xl">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <div className="space-y-2">
              <div className="w-24 h-2 bg-primary/20 rounded-full" />
              <div className="w-16 h-2 bg-white/10 rounded-full" />
              <div className="w-20 h-8 bg-primary/10 rounded-xl mt-2" />
            </div>
          </div>
        </div>

        {/* Android Style Notification - Bottom Right */}
        <div className="absolute bottom-[25%] right-[12%] animate-float-3d opacity-30" style={{ animationDelay: '1.5s' }}>
          <div className="glass-card p-4 rounded-2xl border-primary/20 rotate-[10deg] transform-3d shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-transparent flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="w-20 h-2 bg-white/20 rounded" />
                <div className="w-12 h-1.5 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-[40%] right-[5%] animate-float-3d opacity-20" style={{ animationDelay: '2.5s' }}>
          <Smartphone className="w-24 h-24 text-primary/40 rotate-12" />
        </div>

        <div className="absolute bottom-[40%] left-[5%] animate-float-3d opacity-20" style={{ animationDelay: '0.8s' }}>
          <Layout className="w-20 h-20 text-primary/30 -rotate-12" />
        </div>

        <div className="absolute top-[10%] right-[20%] animate-float-3d opacity-15" style={{ animationDelay: '3.2s' }}>
          <Code className="w-16 h-16 text-white/20" />
        </div>

        {/* Tech Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Animated Light Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />

      <style dangerouslySetInnerHTML={{ __html: `
        .transform-3d { transform-style: preserve-3d; }
        @keyframes float-3d {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          33% { transform: translateY(-20px) rotateX(5deg) rotateY(-5deg); }
          66% { transform: translateY(10px) rotateX(-5deg) rotateY(5deg); }
        }
        .animate-float-3d {
          animation: float-3d 10s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default TechBackground;