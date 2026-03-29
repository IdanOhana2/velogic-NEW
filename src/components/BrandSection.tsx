"use client";

import React from 'react';

const BrandSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 mb-24 text-center px-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
      {/* Main Tagline */}
      <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-8 leading-tight">
        העסק שלך, <span className="rose-gold-text">המותג שלך</span>, האפליקציה שלך
      </h2>
      
      {/* Description Paragraph */}
      <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-16 font-light">
        בעולם של היום, לינק בוואטסאפ זה נחמד, אבל אפליקציה ממותגת בחנות היא הצהרת כוונות. 
        ב-<span className="text-primary font-bold">Velogic</span> אנחנו מפתחים עבורך אפליקציה אישית עם חוויית משתמש (UI/UX) ברמה הגבוהה ביותר, 
        שתגרום ללקוחות שלך להתאהב בעסק בכל פעם שהם פותחים את הנייד.
      </p>

      {/* 3D Textured Statement Box */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/10 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative glass-card p-10 md:p-16 rounded-[2rem] border-primary/20 overflow-hidden">
          {/* Background Texture Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black rose-gold-text leading-tight tracking-tighter">
              אנחנו לא רק בונים אפליקציות,
              <br />
              <span className="text-white">אנחנו בונים אימפריות דיגיטליות.</span>
            </h3>
            <div className="mt-8 flex justify-center gap-4">
              <div className="h-1 w-12 bg-primary/40 rounded-full"></div>
              <div className="h-1 w-24 bg-primary rounded-full"></div>
              <div className="h-1 w-12 bg-primary/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;