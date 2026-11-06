import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMotion } from '../context/MotionContext';

export default function CustomCursor() {
  const { motionEnabled } = useMotion();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse, trackpad)
    if (typeof window === 'undefined') return;
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    setIsPointer(hasPointer);

    if (!hasPointer || !motionEnabled) return;

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if target or parent is an interactive element
      const target = e.target;
      const interactive = target.closest('a, button, [role="button"], input, textarea, .cursor-pointer');
      
      if (interactive) {
        setIsHovered(true);
        const dataCursor = interactive.getAttribute('data-cursor');
        setHoverText(dataCursor || '');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [motionEnabled]);

  if (!isPointer || !motionEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent/60 bg-accent/5 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 14),
          y: mousePosition.y - (isHovered ? 28 : 14),
          width: isHovered ? 56 : 28,
          height: isHovered ? 56 : 28,
          borderColor: isHovered ? '#E32B3C' : 'rgba(255, 255, 255, 0.25)',
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 28,
          mass: 0.1,
        }}
      >
        {hoverText && (
          <span className="font-mono text-[9px] uppercase tracking-widest text-white font-bold">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 900,
          damping: 40,
        }}
      />
    </div>
  );
}

