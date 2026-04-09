"use client";

import React from 'react';
import { ExternalLink, Users, Download, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BetaTestingForm = () => {
  const googleGroupsUrl = "https://groups.google.com/u/1/g/testersamit";
  const googlePlayOptInUrl = "https://play.google.com/apps/testing/com.amittzarfati.booking";

  return (
    <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border-primary/20 relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-right mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            הצטרפות לבטא של <span className="rose-gold-text">עמית צרפתי</span>
          </h2>
          <p className="text-white/50 leading-relaxed">
            כדי להתקין את האפליקציה באנדרואיד, יש לבצע שני שלבים פשוטים:
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-right flex-1">
              <h3 className="text-xl font-bold text-white mb-2">שלב 1: הצטרפות לקבוצת הבודקים</h3>
              <p className="text-white/60 text-sm mb-4">לחצו על הכפתור והצטרפו לקבוצה עם חשבון הגוגל שלכם.</p>
              <Button 
                asChild
                className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 px-6"
              >
                <a href={googleGroupsUrl} target="_blank" rel="noopener noreferrer">
                  הצטרפות ל-Google Groups
                  <ExternalLink className="mr-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Download className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-right flex-1">
              <h3 className="text-xl font-bold text-white mb-2">שלב 2: הורדת האפליקציה</h3>
              <p className="text-white/60 text-sm mb-4">לאחר ההצטרפות לקבוצה, תוכלו לאשר את ההשתתפות ולהוריד מהחנות.</p>
              <Button 
                asChild
                className="rounded-full bg-primary hover:bg-primary/80 text-black font-black px-8 py-6 text-lg shadow-[0_10px_30px_rgba(226,176,145,0.2)]"
              >
                <a href={googlePlayOptInUrl} target="_blank" rel="noopener noreferrer">
                  אישור והורדה ב-Google Play
                  <ExternalLink className="mr-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-right">
          <p className="text-amber-200/80 text-xs leading-relaxed">
            * שימו לב: יש להשתמש באותו חשבון גוגל (Gmail) גם להצטרפות לקבוצה וגם בחנות האפליקציות.
          </p>
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default BetaTestingForm;