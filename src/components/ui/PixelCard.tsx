import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { pixelVariants } from '@/lib/animations';

interface PixelCardProps extends Omit<MotionProps, 'children'> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  interactive?: boolean;
}

export const PixelCard: React.FC<PixelCardProps> = ({
  children,
  className,
  glow = false,
  interactive = false,
  ...motionProps
}) => {
  const cardClasses = cn(
    'pixel-surface crt relative rounded-sm p-4',
    'backdrop-blur-sm backdrop-saturate-200',
    {
      'glow': glow,
      'glow-hover cursor-pointer': interactive,
      'transform-gpu': interactive,
    },
    className
  );

  return (
    <motion.div
      className={cardClasses}
      variants={pixelVariants}
      whileHover={interactive ? { 
        y: -2, 
        scale: 1.01,
        transition: { duration: 0.12 }
      } : undefined}
      {...motionProps}
    >
      {children}
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-violet-2 opacity-30" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-violet-2 opacity-30" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-violet-2 opacity-30" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-violet-2 opacity-30" />
    </motion.div>
  );
};
