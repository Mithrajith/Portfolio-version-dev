import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { hoverLift } from '@/lib/animations';

interface PixelButtonProps extends Omit<MotionProps, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  onClick,
  disabled = false,
  type = 'button',
  ...motionProps
}) => {
  const baseClasses = cn(
    'pixel-surface font-display relative overflow-hidden cursor-pointer',
    'focus-ring transition-all duration-120 ease-out chromatic',
    'border-none font-medium tracking-wide',
    {
      'text-text': variant === 'primary',
      'text-violet-2': variant === 'secondary',
      'text-muted hover:text-text': variant === 'ghost',
      'px-3 py-2 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
      'bg-violet hover:bg-violet/90': variant === 'primary',
      'bg-surface border border-violet': variant === 'secondary',
      'bg-transparent': variant === 'ghost',
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  return (
    <motion.button
      className={baseClasses}
      variants={hoverLift}
      initial="rest"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      onClick={disabled ? undefined : onClick}
      disabled={disabled || loading}
      type={type}
      {...motionProps}
    >
      {loading && (
        <motion.div
          className="absolute inset-0 bg-violet/20"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 1,
            ease: 'linear',
            repeat: Infinity,
          }}
        />
      )}
      
      <span className={cn('relative z-10', { 'opacity-0': loading })}>
        {children}
      </span>
      
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-4 h-4 border-2 border-text border-t-transparent rounded-full loading" />
        </motion.div>
      )}
    </motion.button>
  );
};
