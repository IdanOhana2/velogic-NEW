"use client";

import React from 'react';
import { ExternalLink, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-32 mb-32 px-6">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
          העבודות <span className="rose-gold-text">שלנו</span>
        </h3>
        <p className="text-white/50 text-lg">הצצה לאפליקציות שכבר משנות את חוקי המשחק</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Amit Tzarfati Card */}
        <Link to="/amit-tzarfati" className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/10 rounded-[2.5rem] blur opacity-20 group-hover:opacity-60 transition duration-700"></div>
          <div className="relative glass-card p-8 rounded-[2.5rem] border-primary/20 overflow-hidden flex flex-col h-full hover:translate-y-[-8px] transition-all duration-500">
            
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl font-black rose-gold-text">AT</span>
              </div>
              <div className="p-3 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ExternalLink size={20} />
              </div>
            </div>

            <div className="mt-auto">
              <h4 className="text-2xl font-bold text-white mb-2">AMIT TZARFATI</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                אפליקציית ניהול תורים ו-VIP מותאמת אישית, המעניקה חוויית משתמש יוקרתית וחלקה ללקוחות המותג.
              </p>
              
              <div className="flex items-center gap-3 text-primary/60 text-xs font-bold uppercase tracking-widest">
                <Smartphone size={14} />
                <span>Live on App Store</span>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
          </div>
        </Link>

        {/* Placeholder for next project */}
        <div className="relative group opacity-50">
          <div className="relative border-2 border-dashed border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl font-black text-white/20">?</span>
            </div>
            <h4 className="text-xl font-bold text-white/20">האפליקציה שלך כאן</h4>
            <p className="text-white/10 text-sm mt-2">אנחנו כבר עובדים על הפרויקט הבא...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;