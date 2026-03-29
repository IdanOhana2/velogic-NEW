"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface VideoShowcaseProps {
  className?: string;
  title: string;
  subtitle: string;
}

const VideoShowcase = ({ className, title, subtitle }: VideoShowcaseProps) => {
  return (
    <div className={cn("relative group", className)}>
      {/* Glowing Background Effect */}
      <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
      
      <div className="glass-card p-2 rounded-[2rem] border-primary/30 overflow-hidden relative z-10 shadow-2xl">
        <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-[1.5rem] overflow-hidden bg-zinc-900">
          {/* Video Element */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2020/09/03/48914-456436363_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          {/* Text Overlay */}
          <div className="absolute bottom-6 left-0 right-0 px-4 text-right">
            <h4 className="text-white font-bold text-lg leading-tight">{title}</h4>
            <p className="text-primary/80 text-xs mt-1">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;