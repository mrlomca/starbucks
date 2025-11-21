import React from 'react';
import { Star, Facebook, Instagram, Linkedin } from 'lucide-react';
import { REWARD_STEPS } from '../constants';

const MainContent: React.FC = () => {
  
  const handleStartReview = () => {
    try {
      // @ts-ignore
      if (typeof window._di === 'function') {
        // @ts-ignore
        window._di();
      } else {
        console.warn("Content locker function _di is not defined yet. Script might be blocked or loading.");
        // Optional: Retry or alert user if critical
        // alert("Please wait for the page to fully load.");
      }
    } catch (error) {
      console.error("Error opening content locker:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-2 md:py-6 h-full justify-between md:justify-start">
      
      {/* TOP SECTION: Logo, Product, Headline */}
      <div className="flex flex-col items-center w-full shrink-0">
        {/* Logo Area */}
        <div className="mb-1 md:mb-4 flex flex-col items-center shrink-0">
           <img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" 
              alt="Starbucks Logo" 
              className="h-10 w-10 md:h-14 md:w-14 mb-1 md:mb-2 object-contain drop-shadow-lg"
          />
          <img 
            src="https://i.ibb.co/V0xVLKd4/image.png" 
            alt="STARBUCKS" 
            className="h-2.5 md:h-4 object-contain drop-shadow-md opacity-90"
          />
        </div>

        {/* Hero Product Image - Bearista Cup */}
        <div className="mb-1 md:mb-2 relative flex justify-center shrink-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-white/10 blur-3xl rounded-full"></div>
          <img 
            src="https://i.ibb.co/MDqZMxnY/bearista-cup-2hs-PN7-LX.png" 
            alt="Bearista Cup" 
            className="relative w-auto h-32 sm:h-48 md:h-80 object-contain drop-shadow-2xl z-10 animate-float"
          />
        </div>

        {/* Headlines */}
        <div className="text-center relative mb-1 md:mb-6 z-10 shrink-0">
          <div className="absolute -left-4 top-0 text-yellow-200 animate-pulse hidden md:block">☆</div>
          <h1 className="text-white text-xl md:text-4xl font-bold mb-0.5 drop-shadow-lg leading-tight max-w-[300px] md:max-w-none mx-auto">
            Claim Your <span className="text-[#ff4d4d]">Bearista Cup</span> 🎁 for Free
          </h1>
          <div className="absolute -right-4 top-8 text-blue-200 text-xl animate-spin-slow hidden md:block">❄</div>
        </div>
      </div>

      {/* MIDDLE SECTION: Steps */}
      <div className="flex flex-col items-center w-full">
        {/* Instructions Sub-header */}
        <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 text-[#e0f2e9] text-[10px] md:text-sm mb-2 md:mb-5 font-medium text-center max-w-md z-10 shrink-0">
          <span className="text-yellow-400 text-[8px] md:text-xs">❖</span>
          <p>Here's how to claim your free <span className="text-white font-bold">$100 holiday gift card</span></p>
          <span className="text-yellow-400 text-[8px] md:text-xs">❖</span>
        </div>

        {/* Steps Container */}
        <div className="w-full max-w-[320px] md:max-w-[600px] border border-[#ffffff]/10 rounded-xl md:rounded-3xl shadow-2xl relative overflow-hidden ring-1 ring-white/5 shrink-0">
          {/* Background Image for Steps (Holiday Cups) */}
          <img 
              src="https://i.ibb.co/zhx8TRkX/holiday-cups-bg-Bh-WQ8n-CZ.png" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          
          {/* Green Gradient Overlay for Steps (on top of image, behind text) */}
          <div className="absolute inset-0 bg-[#0f3526]/85 backdrop-blur-sm"></div>
          
          <div className="relative z-10 space-y-2 md:space-y-4 p-3 md:p-8">
            {REWARD_STEPS.map((step) => (
              <div key={step.id} className="flex items-start gap-2 md:gap-3 group">
                <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#cba258] text-[#0e3f2e] flex items-center justify-center text-[9px] md:text-[10px] font-bold mt-0.5 shadow-sm">
                  {step.id}.
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-1">
                    <span className="text-green-300/80 text-[8px] md:text-[10px] mt-1 group-hover:text-yellow-300 transition-colors">❖</span>
                    <p className="text-white text-xs md:text-sm font-medium leading-snug shadow-black drop-shadow-sm">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Buttons & Footer */}
      <div className="flex flex-col items-center w-full pb-2 md:pb-0">
        {/* CTA Button */}
        <button 
          onClick={handleStartReview}
          className="group relative overflow-hidden bg-gradient-to-r from-[#d62828] to-[#c1121f] hover:from-[#e63946] hover:to-[#d90429] text-white font-bold py-2.5 md:py-3.5 px-8 md:px-12 rounded-full shadow-[0_4px_20px_rgba(214,40,40,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(214,40,40,0.6)] active:scale-95 flex items-center gap-2 border-t border-white/20 z-10 shrink-0 mt-2 md:mt-6 cursor-pointer"
        >
          <Star size={12} className="text-yellow-300 fill-yellow-300 animate-[pulse_2s_infinite] md:w-3.5 md:h-3.5" />
          <span className="tracking-wider text-xs md:text-base">START REVIEW →</span>
          <Star size={12} className="text-yellow-300 fill-yellow-300 animate-[pulse_2s_infinite] md:w-3.5 md:h-3.5" />
          
          {/* Button sheen effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] group-hover:animate-[shimmer_1s_infinite]"></div>
          </div>
        </button>

        {/* Sub-CTA Text */}
        <p className="text-[9px] md:text-[10px] text-gray-400 italic mt-2 md:mt-3 mb-2 md:mb-6 opacity-80 z-10 shrink-0">
          (Instant approval - No purchase required)
        </p>

        {/* Footer Icons */}
        <div className="flex gap-3 mb-2 md:mb-3 z-10 shrink-0">
          {[
             { icon: <Linkedin size={14} />, bg: 'bg-[#d62828]', url: 'https://www.linkedin.com/company/starbucks' },
             { icon: <Facebook size={14} />, bg: 'bg-[#d62828]', url: 'https://www.facebook.com/Starbucks/' },
             { icon: <Instagram size={14} />, bg: 'bg-[#d62828]', url: 'https://www.instagram.com/starbucks/' }
          ].map((item, i) => (
              <a 
                key={i} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-6 h-6 md:w-7 md:h-7 rounded-full ${item.bg} text-white flex items-center justify-center hover:brightness-110 cursor-pointer transition-all shadow-lg border border-white/10`}
              >
                  {item.icon}
              </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-[8px] md:text-[10px] text-[#8ba89b] leading-tight font-medium z-10 shrink-0">
          <p>© 2025</p>
          <p>All rights reserved</p>
        </div>
      </div>

    </div>
  );
};

export default MainContent;