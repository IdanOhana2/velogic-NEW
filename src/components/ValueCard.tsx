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
        "glass-card p-4 rounded-2xl flex flex-col items-end text-right w-64 animate-float",
        className
      )}
      style={{ animationDelay: delay }}
    >
      <div className="bg-primary/20 p-2 rounded-lg mb-3">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-white mb-1 leading-tight">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
};

export default ValueCard;