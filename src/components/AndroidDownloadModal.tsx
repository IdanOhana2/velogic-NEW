"use client";

import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ShieldAlert, Settings, CheckCircle2, ExternalLink } from 'lucide-react';

interface AndroidDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl: string;
}

const AndroidDownloadModal = ({ isOpen, onClose, downloadUrl }: AndroidDownloadModalProps) => {
  const steps = [
    {
      icon: <Download className="w-5 h-5 text-primary" />,
      text: "לחצו על כפתור ההורדה למטה והמתינו לסיום"
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-amber-400" />,
      text: "אם מופיעה אזהרת 'קובץ מזיק', לחצו על 'הורד בכל זאת'"
    },
    {
      icon: <Settings className="w-5 h-5 text-blue-400" />,
      text: "בפתיחת הקובץ, אם תתבקשו, אשרו 'התקנה ממקורות לא ידועים' בהגדרות"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
      text: "לחצו על 'התקן' ותיהנו מהאפליקציה!"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] bg-zinc-950 border-primary/20 text-white rounded-[2rem] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <DialogHeader className="text-right pt-4">
          <DialogTitle className="text-2xl font-black rose-gold-text mb-2">הורדה לאנדרואיד</DialogTitle>
          <DialogDescription className="text-white/60 text-sm">
            מכיוון שהאפליקציה בהפצה ישירה, יש לבצע מספר צעדים פשוטים להתקנה:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 my-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors group">
              <div className="shrink-0 mt-1 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <p className="text-sm text-white/80 text-right leading-relaxed flex-1">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <DialogFooter className="flex flex-col gap-3 sm:flex-col">
          <Button 
            asChild
            className="w-full py-6 rounded-xl bg-primary hover:bg-primary/80 text-black font-bold text-lg group"
          >
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
              <Download className="ml-2 w-5 h-5 group-hover:animate-bounce" />
              הורד אפליקציה עכשיו
            </a>
          </Button>
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="text-white/40 hover:text-white hover:bg-white/5"
          >
            סגור
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AndroidDownloadModal;