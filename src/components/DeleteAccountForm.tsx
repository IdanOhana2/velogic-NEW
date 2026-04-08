"use client";

import React, { useState } from 'react';
import { Trash2, Send, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from '@/utils/toast';

const DeleteAccountForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      showSuccess("בקשתך התקבלה ותטופל תוך 72 שעות");
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border-primary/20 text-center animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-400 animate-bounce" />
        </div>
        <h2 className="text-3xl font-black text-white mb-4">הבקשה נשלחה בהצלחה</h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          קיבלנו את בקשתך למחיקת החשבון. התהליך עשוי לקחת עד 72 שעות. 
          תקבל אישור למייל ברגע שהתהליך יסתיים.
        </p>
        <Button 
          variant="outline" 
          className="rounded-full border-primary/30 hover:bg-primary/10"
          onClick={() => window.location.href = '/'}
        >
          חזרה לדף הבית
        </Button>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border-primary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
        <Trash2 size={120} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6 justify-end">
          <h2 className="text-2xl font-bold text-white">בקשה למחיקת חשבון</h2>
          <AlertTriangle className="text-primary w-6 h-6" />
        </div>

        <p className="text-white/50 text-right mb-8 text-sm leading-relaxed">
          שים לב: מחיקת החשבון היא פעולה בלתי הפיכה. כל הנתונים, ההיסטוריה וההגדרות שלך יימחקו לצמיתות מהמערכות שלנו בהתאם למדיניות הפרטיות.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-right">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/80">כתובת אימייל איתה נרשמת</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              placeholder="your@email.com"
              className="bg-white/5 border-white/10 rounded-xl text-right focus:border-primary/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="appName" className="text-white/80">שם האפליקציה</Label>
            <Input 
              id="appName" 
              required 
              placeholder="שם האפליקציה ממנה תרצה להימחק"
              className="bg-white/5 border-white/10 rounded-xl text-right focus:border-primary/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason" className="text-white/80">סיבת המחיקה (אופציונלי)</Label>
            <Textarea 
              id="reason" 
              placeholder="נשמח לדעת למה החלטת לעזוב..."
              className="bg-white/5 border-white/10 rounded-xl text-right min-h-[100px] focus:border-primary/50 transition-all"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-6 rounded-xl bg-primary hover:bg-primary/80 text-black font-bold text-lg transition-all group"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                שולח בקשה...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                שלח בקשת מחיקה
              </div>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DeleteAccountForm;