"use client";

import React from 'react';

const FeatureItem = ({ title, description, emoji }: { title: string, description: string, emoji: string }) => (
  <div className="flex gap-4 items-start py-4 border-b border-white/5 last:border-0 group">
    <div className="text-3xl animate-float-slow shrink-0 select-none">
      {emoji}
    </div>
    <div className="text-right">
      <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-white/50 leading-relaxed text-sm">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      emoji: "👑",
      title: "נראות של מותג על",
      description: "הלקוח מוריד את האפליקציה שלך מהחנות. זה נראה מקצועי יותר ומשאיר את המתחרים מאחור."
    },
    {
      emoji: "✨",
      title: "פשטות מנצחת",
      description: "בלי סיבוכים. נכנסים, רואים זמן פנוי, ובלחיצת כפתור התור סגור."
    },
    {
      emoji: "🤖",
      title: "אוטומציה מלאה",
      description: "אישורי תורים ותזכורות בוואטסאפ שקורים מעצמם בזמן שאתה מתרכז בעבודה."
    },
    {
      emoji: "📅",
      title: "ניהול תורים חכם",
      description: "מערכת חלקה שמונעת כפל תורים ומנהלת לוחות זמנים מורכבים."
    },
    {
      emoji: "🛍️",
      title: "חנות וירטואלית",
      description: "מכירת מוצרים נלווים ישירות באפליקציה בצורה קלה ומהירה."
    },
    {
      emoji: "🏢",
      title: "ניהול רב-סניפי",
      description: "שליטה בכל הסניפים והעובדים מפאנל ניהול אחד ומתקדם."
    },
    {
      emoji: "💻",
      title: "פאנל ניהול אישי",
      description: "שליטה מלאה בנתונים ובסטטיסטיקות של העסק שלך בזמן אמת."
    },
    {
      emoji: "🎨",
      title: "עיצוב UI/UX מותאם",
      description: "האפליקציה תיראה ותרגיש בדיוק כמו המותג שלך – הצבעים והלוגו."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-32 mb-32 px-6">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        
        {/* Right Side: New Mascot */}
        <div className="relative flex-1 flex justify-center items-center">
          <div className="absolute w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          <div className="relative z-10 animate-float-3d-intense">
            <img 
              src="/src/assets/velogic-mascot-new.png" 
              alt="Velogic Mascot" 
              className="w-[350px] md:w-[550px] drop-shadow-[0_35px_60px_rgba(226,176,145,0.4)]"
            />
          </div>
        </div>

        {/* Left Side: Unified Feature Box */}
        <div className="flex-1 w-full">
          <div className="mb-8 text-right">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              אתה בטח שואל <span className="rose-gold-text">למה אנחנו?</span>
            </h3>
            <div className="h-1.5 w-24 bg-primary rounded-full ml-auto" />
          </div>

          <div className="glass-card p-8 rounded-[2.5rem] border-primary/20 relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {features.map((f, i) => (
                <FeatureItem key={i} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        @keyframes float-3d-intense {
          0%, 100% { transform: translateY(0) rotateY(0); }
          50% { transform: translateY(-20px) rotateY(10deg); }
        }
        .animate-float-3d-intense {
          animation: float-3d-intense 8s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default FeaturesSection;