import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUIStore } from '@/store/ui';

export const MagneticCursor: React.FC = () => {
  const { cursorX, cursorY, setCursorPosition, motionReduced } = useUIStore();

  useEffect(() => {
    if (motionReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition(e.clientX, e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"]')) {
        document.body.style.cursor = 'none';
      }
    };

    const handleMouseOut = () => {
      document.body.style.cursor = 'auto';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [setCursorPosition, motionReduced]);

  if (motionReduced) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX - 8,
          y: cursorY - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full border border-violet-2 rounded-full" />
        
        {/* Crosshair */}
        <div className="absolute top-1/2 left-1/2 w-6 h-px bg-violet-2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-px h-6 bg-violet-2 transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9998] bg-violet-2/30 rounded-full"
        style={{
          x: cursorX - 4,
          y: cursorY - 4,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.2,
        }}
      />
    </>
  );
};
