"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showSuccess, showError } from '@/utils/toast';

const BetaTestingForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  // Replace this with your actual Google Play Opt-in link
  const googlePlayOptInUrl = "https://play.google.com/apps/testing/com.velogic.amittzarfati";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://uwmnwnorkndigojnbmug.supabase.co/functions/v1/add-tester', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sb_publishable_bXHR1UTNLsOo5Fi6FsAEwA_EMR3r9w_'
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) throw new Error('Failed to add tester');

      setStatus('success');
      showSuccess("הוספת בהצלחה לרשימת הבודקים!");
    } catch (err) {
      console.error(err);
      setStatus('error');
      showError("חלה שגיאה, נסו שוב מאוחר יותר");
    }
  };

  if (status === 'success') {
    return (
      <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border-primary/20 text-center animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-400 animate-bounce" />
        </div>
        <h2 className="text-3xl font-black text-white mb-4">מעולה! הוספנו אותך</h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          כעת עליך ללחוץ על הכפתור למטה כדי לאשר את ההזמנה בחנות ה-Google Play ולהתחיל להשתמש באפליקציה.
        </p>
        <Button 
          asChild
          className="rounded-full bg-primary hover:bg-primary/80 text-black font-bold px-8 py-6 text-lg group"
        >
          <a href={googlePlayOptInUrl} target="_blank" rel="noopener noreferrer">
            אישור הזמנה ב-Google Play
            <ExternalLink className="mr-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border-primary/20 relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-right mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            קבלת גישה מוקדמת לאפליקציית <span className="rose-gold-text">עמית צרפתי</span>
          </h2>
          <p className="text-white/50 leading-relaxed">
            הזינו את המייל המחובר לחנות ה-Google Play שלכם כדי להצטרף לרשימת הבודקים ולקבל עדכונים לפני כולם.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 text-right">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/80 mr-1">אימייל (Google Play)</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your-email@gmail.com"
              className="bg-white/5 border-white/10 rounded-2xl py-6 text-right focus:border-primary/50 transition-all text-lg"
              disabled={status === 'loading'}
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm justify-end bg-red-400/10 p-3 rounded-xl border border-red-400/20">
              <span>חלה שגיאה, נסו שוב מאוחר יותר</span>
              <AlertCircle size={16} />
            </div>
          )}

          <Button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full py-8 rounded-2xl bg-primary hover:bg-primary/80 text-black font-black text-xl transition-all group shadow-[0_10px_30px_rgba(226,176,145,0.2)]"
          >
            {status === 'loading' ? (
              <div className="flex items-center gap-3">
                <Loader2 className="w-6 h-6 animate-spin" />
                מוסיף אותך לרשימה...
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Send className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                הוסף אותי כבודק
              </div>
            )}
          </Button>
        </form>
      </div>

      {/* Decorative background */}
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default BetaTestingForm;