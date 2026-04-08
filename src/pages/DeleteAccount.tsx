"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import TechBackground from '@/components/TechBackground';
import DeleteAccountForm from '@/components/DeleteAccountForm';
import { MadeWithDyad } from "@/components/made-with-dyad";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30 relative">
      <Navbar />
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#0a0a0a_100%)]" />
      <TechBackground />
      
      <main className="relative z-20 pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-6xl font-black rose-gold-text mb-4">
              ניהול חשבון
            </h1>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <DeleteAccountForm />
          
          <div className="mt-12 text-center text-white/30 text-xs">
            <p>© {new Date().getFullYear()} Velogic Systems. All rights reserved.</p>
            <p className="mt-2">מחיקת הנתונים מתבצעת בהתאם לתקנות ה-GDPR ומדיניות הפרטיות של Google Play.</p>
          </div>
        </div>
      </main>

      <footer className="relative w-full border-t border-white/5 bg-black/40 backdrop-blur-xl z-30">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default DeleteAccount;