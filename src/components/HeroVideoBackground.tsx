"use client";

import React from 'react';

const HeroVideoBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[100vh] overflow-hidden z-0 pointer-events-none">
      {/* Video Element */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="w-full h-full object-cover opacity-40"
      >
        <source src="/src/assets/hero-bg-video.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlays for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
      
      {/* Blur effect for depth */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  );
};

export default HeroVideoBackground;