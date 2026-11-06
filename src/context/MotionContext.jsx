import React, { createContext, useContext, useEffect } from 'react';

const MotionContext = createContext({
  motionEnabled: true,
  toggleMotion: () => {},
});

export const MotionProvider = ({ children }) => {
  // Always on motion as requested
  const motionEnabled = true;

  useEffect(() => {
    try {
      localStorage.setItem('asil_portfolio_motion', 'true');
    } catch {
      // Ignore storage errors in restricted contexts
    }
    document.documentElement.classList.remove('reduced-motion');
  }, []);

  const toggleMotion = () => {};

  return (
    <MotionContext.Provider value={{ motionEnabled, toggleMotion }}>
      {children}
    </MotionContext.Provider>
  );
};

export const useMotion = () => useContext(MotionContext);
