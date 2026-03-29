"use client";

import React from 'react';

const HeroVideoBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[110vh] overflow-hidden z-0 pointer-events-none">
      {/* Video Element - Increased opacity for more prominence */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="w-full h-full object-cover opacity-70"
      >
        <source src="/src/assets/hero-bg-video.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlays - Stronger at the bottom to transition into the rest of the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
      
      {/* Subtle radial glow to focus on the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};

export default HeroVideoBackground;