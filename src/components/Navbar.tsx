"use client";

import React from 'react';
import { Instagram, MessageCircle, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-6 py-3 rounded-full border-primary/20 flex items-center justify-between backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          
          {/* Left Side: Social Actions */}
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/972557125076" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-green-500/10 text-green-400 hover:bg-green-500/20 hover:scale-110 transition-all duration-300 border border-green-500/20"
              title="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a 
              href="https://www.instagram.com/velogic.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 hover:scale-110 transition-all duration-300 border border-pink-500/20"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter rose-gold-text select-none">
              VELOGIC
            </span>
          </div>

          {/* Right Side: Home Button */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 border border-primary/20 group"
            >
              <span className="text-sm font-bold hidden md:block">דף הבית</span>
              <Home size={18} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;