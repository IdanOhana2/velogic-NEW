"use client";

import React from 'react';

const FeatureItem = ({ title, description, emoji, delay }: { title: string, description: string, emoji: string, delay: string }) => (
  <div 
    className="flex gap-6 items-start p-6 glass-card rounded-3xl border-white/5 hover:border-primary/30 transition-all duration-500 group animate-in fade-in slide-in-from-right-8"
    style={{ animationDelay: delay }}
  >
    <div className="text-4xl md:text-5xl animate-float-slow shrink-0 select-none drop-shadow-[0_10px_20px_rgba(226,176,145,0.3)]">
      {emoji}
    </div>
    <div className="text-right">
      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-white/60 leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      emoji: "👑",
      title: "נראות של מותג על",
      description: "הלקוח מוריד את האפליקציה שלך מהחנות. זה נראה מקצועי יותר, זה משדר אמינות, וזה משאיר את המתחרים מאחור.",
      delay: "0.1s"
    },
    {
      emoji: "✨",
      title: "פשטות מנצחת",
      description: "בלי סיבוכים, בלי הרשמות מעיקות. נכנסים, רואים זמן פנוי, ובלחיצת כפתור התור סגור.",
      delay: "0.2s"
    },
    {
      emoji: "🤖",
      title: "אוטומציה מלאה",
      description: "אישורי תורים, תזכורות בוואטסאפ/SMS ומניעת הברזות – הכל קורה מעצמו בזמן שאתה מתרכז בעבודה.",
      delay: "0.3s"
    },
    {
      emoji: "📅",
      title: "ניהול תורים חכם",
      description: "מערכת חלקה שמונעת כפל תורים ומנהלת לוחות זמנים מורכבים.",
      delay: "0.4s"
    },
    {
      emoji: "🛍️",
      title: "חנות וירטואלית (E-commerce)",
      description: "מוכרים מוצרים נלווים ישירות באפליקציה? הפיצ'ר הזה כבר בפנים.",
      delay: "0.5s"
    },
    {
      emoji: "🏢",
      title: "ניהול רב-סניפי",
      description: "שולטים בכל הסניפים ובכל העובדים מפאנל ניהול אחד ומתקדם.",
      delay: "0.6s"
    },
    {
      emoji: "💻",
      title: "פאנל ניהול אישי",
      description: "שליטה מלאה בנתונים, בלקוחות ובסטטיסטיקות של העסק שלך בזמן אמת.",
      delay: "0.7s"
    },
    {
      emoji: "🎨",
      title: "עיצוב UI/UX בהתאמה אישית",
      description: "האפליקציה תיראה ותרגיש בדיוק כמו המותג שלך – הצבעים, הלוגו והאווירה.",
      delay: "0.8s"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-32 mb-32 px-6 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Mascot with 3D Animation */}
        <div className="relative order-2 lg:order-1 flex justify-center items-center">
          {/* Animated Background Rings */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-primary/20 rounded-full animate-ping opacity-20" />
          <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] border border-primary/10 rounded-full animate-pulse opacity-30" />
          
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
          
          {/* The Mascot Image */}
          <div className="relative z-10 animate-float-3d-intense">
            <img 
              src="/src/assets/velogic-mascot.png" 
              alt="Velogic Mascot" 
              className="w-[300px] md:w-[450px] drop-shadow-[0_35px_60px_rgba(226,176,145,0.4)]"
            />
            {/* Floating Particles around mascot */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full blur-sm animate-bounce" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-10 left-0 w-3 h-3 bg-white rounded-full blur-sm animate-bounce" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Right Side: Features List */}
        <div className="space-y-4 order-1 lg:order-2">
          <div className="mb-12 text-right">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
              למה <span className="rose-gold-text">Velogic</span>?
            </h3>
            <div className="h-1.5 w-24 bg-primary rounded-full ml-auto" />
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {features.map((f, i) => (
              <FeatureItem key={i} {...f} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        @keyframes float-3d-intense {
          0%, 100% { transform: translateY(0) rotateY(0) rotateX(0) scale(1); }
          33% { transform: translateY(-30px) rotateY(15deg) rotateX(5deg) scale(1.02); }
          66% { transform: translateY(15px) rotateY(-15deg) rotateX(-5deg) scale(0.98); }
        }
        .animate-float-3d-intense {
          animation: float-3d-intense 10s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default FeaturesSection;