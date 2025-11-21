
import React from 'react';
import { BACKGROUND_ELEMENTS } from '../constants';

const FloatingBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {BACKGROUND_ELEMENTS.map((el) => (
        <div
          key={el.id}
          className={`absolute transition-all duration-1000 ease-in-out ${
            el.animationType === 'float' ? 'animate-float' : 
            el.animationType === 'float-delayed' ? 'animate-float-delayed' : 'animate-float-slow'
          }`}
          style={{
            ...el.position,
            animationDelay: el.animationDelay,
            animationDuration: el.animationDuration,
          }}
        >
          <img 
            src={el.src} 
            alt={el.alt} 
            className={`${el.mobileWidth} md:${el.width} object-contain drop-shadow-xl opacity-80 hover:opacity-100 transition-opacity duration-500`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingBackground;
