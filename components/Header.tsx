
import React, { useState, useEffect } from 'react';
import { Clock, Snowflake } from 'lucide-react';

const Header: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-[#0b3324] text-white py-2 md:py-3 px-4 flex justify-center items-center text-[10px] md:text-sm font-medium border-b border-[#1a503a] z-50 relative">
      <div className="flex items-center gap-2 opacity-90">
        <Snowflake size={12} className="text-blue-200 animate-spin-slow md:w-3.5 md:h-3.5" />
        <Clock size={12} className="text-yellow-400 md:w-3.5 md:h-3.5" />
        <span>
          You have <span className="font-bold text-yellow-400">{formatTime(timeLeft)} minutes</span> left to unlock your $100 Starbucks reward
        </span>
        <Snowflake size={12} className="text-blue-200 animate-spin-slow md:w-3.5 md:h-3.5" />
      </div>
    </div>
  );
};

export default Header;
