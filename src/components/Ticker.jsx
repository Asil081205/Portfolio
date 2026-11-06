import React from 'react';
import { useMotion } from '../context/MotionContext';

export default function Ticker({ items, speed = 'normal' }) {
  const { motionEnabled } = useMotion();

  const defaultItems = [
    'MERN STACK',
    'AI INTEGRATION',
    'ELECTRON',
    'MONACO CORE',
    'REACT',
    'TYPESCRIPT',
    'NODE.JS',
    'POSTGRESQL',
    'COMPUTER VISION',
    'REST APIS',
    'CHENNAI, INDIA',
  ];

  const content = items || defaultItems;

  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-[#0c0c0c] py-4 select-none relative group">
      {/* Edge gradient masks */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none" />

      <div
        className={`flex whitespace-nowrap gap-8 items-center ${
          motionEnabled ? 'animate-ticker group-hover:[animation-play-state:paused]' : ''
        }`}
      >
        {/* Repeated chunks for seamless loop */}
        {[...content, ...content, ...content, ...content].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 font-display uppercase tracking-wider text-sm md:text-base text-[#F2EFEB]/60 hover:text-white transition-colors">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

