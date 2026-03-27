"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ValueCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  className?: string;
  delay?: string;
}

const ValueCard = ({ title, subtitle, icon: Icon, className, delay }: ValueCardProps) => {
  return (
    <div 
      className={cn(
        "group relative glass-card p-6 rounded-3xl flex flex-col items-end text-right w-72 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(226,176,145,0.2)] border border-white/10 overflow-hidden",
        className
      )}
      style={{ animationDelay: delay }}
    >
      {/* Rose Gold Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-2xl mb-4 border border-primary/20 group-hover:border-primary/40 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="relative z-10 text-xl font-bold text-white mb-2 leading-tight tracking-tight">
        {title}
      </h3>
      <p className="relative z-10 text-sm text-muted-foreground/80 leading-relaxed">
        {subtitle}
      </p>

      {/* Decorative Corner Element */}
      <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/20 transition-colors" />
    </div>
  );
};

export default ValueCard;