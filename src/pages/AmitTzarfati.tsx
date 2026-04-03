"use client";

import React from 'react';
import { Apple, ArrowLeft, CheckCircle2, Smartphone, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { MadeWithDyad } from "@/components/made-with-dyad";

const AmitTzarfati = () => {
  const appStoreUrl = "https://apps.apple.com/il/app/amit-tzarfati/id6761207418";

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">חזרה לבית</span>
          </Link>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            
            {/* App Visual Side */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              <div className="relative z-10 animate-float">
                <div className="w-72 h-[580px] mx-auto bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-zinc-800 rounded-b-3xl z-30" />
                  
                  {/* App Content Placeholder (Amit Tzarfati Brand Colors) */}
                  <div className="w-full h-full bg-gradient-to-b from-zinc-800 to-black flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mb-6 border border-white/10">
                      <span className="text-4xl font-black rose-gold-text">AT</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Amit Tzarfati</h3>
                    <p className="text-white/40 text-sm mb-8">האפליקציה הרשמית</p>
                    <div className="w-full space-y-3">
                      <div className="h-12 bg-primary/20 rounded-xl border border-primary/30" />
                      <div className="h-12 bg-white/5 rounded-xl" />
                      <div className="h-12 bg-white/5 rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -right-4 top-20 glass-card p-4 rounded-2xl border-primary/30 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-primary text-primary" />)}
                </div>
                <p className="text-[10px] font-bold">חוויית משתמש מושלמת</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 text-right">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 tracking-widest uppercase">
                New Release
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                האפליקציה של <br />
                <span className="rose-gold-text">עמית צרפתי</span>
              </h1>
              <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-xl ml-auto">
                עכשיו זה רשמי. הדרך הנוחה, המהירה והמעוצבת ביותר לקבוע תורים, להתעדכן במוצרים חדשים וליהנות מחוויית שירות VIP – הכל במקום אחד.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {[
                  "קביעת תורים ב-3 קליקים",
                  "תזכורות אוטומטיות",
                  "צבירת נקודות והטבות",
                  "חנות מוצרים בלעדית"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center justify-end gap-3 text-white/80">
                    <span className="text-sm font-medium">{feature}</span>
                    <CheckCircle2 size={18} className="text-primary" />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row-reverse gap-4">
                <a 
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-primary transition-all duration-300 hover:scale-105 group"
                >
                  <Apple size={24} />
                  <div className="text-right">
                    <div className="text-[10px] uppercase leading-none">Download on the</div>
                    <div className="text-xl leading-none">App Store</div>
                  </div>
                </a>
                
                <div className="flex items-center justify-center gap-4 px-6 py-4 rounded-2xl border border-white/10 bg-white/5">
                  <Zap size={20} className="text-primary" />
                  <span className="text-sm font-medium text-white/60">פותח ע"י Velogic</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <MadeWithDyad />
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default AmitTzarfati;