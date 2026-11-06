import React, { createContext, useContext, useState, useEffect } from 'react';

const MotionContext = createContext({
  motionEnabled: true,
  toggleMotion: () => {},
});

export const MotionProvider = ({ children }) => {
  const [motionEnabled, setMotionEnabled] = useState(() => {
    // 1. Check localStorage first
    const saved = localStorage.getItem('asil_portfolio_motion');
    if (saved !== null) {
      return saved === 'true';
    }
    // 2. Fall back to system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });

  useEffect(() => {
    try {
      localStorage.setItem('asil_portfolio_motion', String(motionEnabled));
    } catch {
      // Ignore storage errors in restricted contexts
    }

    if (motionEnabled) {
      document.documentElement.classList.remove('reduced-motion');
    } else {
      document.documentElement.classList.add('reduced-motion');
    }
  }, [motionEnabled]);

  const toggleMotion = () => {
    setMotionEnabled(prev => !prev);
  };

  return (
    <MotionContext.Provider value={{ motionEnabled, toggleMotion }}>
      {children}
    </MotionContext.Provider>
  );
};

export const useMotion = () => useContext(MotionContext);
