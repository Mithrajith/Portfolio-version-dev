import React, { ReactNode, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { 
  entranceVariants, 
  hoverVariants, 
  textVariants, 
  particleVariants,
  loadingVariants,
  easings
} from '@/lib/comprehensive-animations';

// Enhanced reveal on scroll component
interface RevealOnScrollProps {
  children: ReactNode;
  variant?: keyof typeof entranceVariants;
  delay?: number;
  threshold?: number;
  className?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  variant = 'pixelDissolve',
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={entranceVariants[variant]}
      initial="hidden"
      animate={controls}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

// Interactive hover card with multiple effects
interface InteractiveCardProps {
  children: ReactNode;
  variant?: keyof typeof hoverVariants;
  className?: string;
  onClick?: () => void;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  variant = 'superLift',
  className = '',
  onClick,
}) => {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      variants={hoverVariants[variant]}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

// Typewriter text animation
interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  className = '',
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
      // Hide cursor after completion
      setTimeout(() => setShowCursor(false), 1000);
    }
  }, [currentIndex, text, speed, onComplete]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <motion.span
          className="inline-block w-0.5 h-em bg-current ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

// Glitch text effect
interface GlitchTextProps {
  text: string;
  className?: string;
  trigger?: 'hover' | 'auto' | 'click';
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  trigger = 'hover',
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  };

  useEffect(() => {
    if (trigger === 'auto') {
      const interval = setInterval(triggerGlitch, 3000);
      return () => clearInterval(interval);
    }
  }, [trigger]);

  const handleInteraction = () => {
    if (trigger === 'hover' || trigger === 'click') {
      triggerGlitch();
    }
  };

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      variants={textVariants.glitchText}
      initial="rest"
      animate={isGlitching ? 'animate' : 'rest'}
      onHoverStart={trigger === 'hover' ? handleInteraction : undefined}
      onClick={trigger === 'click' ? handleInteraction : undefined}
    >
      {text}
    </motion.span>
  );
};

// Floating particles background
interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 20,
  className = '',
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-violet-2/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={particleVariants.floating}
          animate="animate"
          transition={{
            delay: Math.random() * 2,
            duration: 4 + Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
};

// Morphing icon component
interface MorphingIconProps {
  icons: React.ComponentType<any>[];
  size?: number;
  interval?: number;
  className?: string;
}

export const MorphingIcon: React.FC<MorphingIconProps> = ({
  icons,
  size = 24,
  interval = 2000,
  className = '',
}) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIconIndex(prev => (prev + 1) % icons.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [icons.length, interval]);

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <AnimatePresence mode="wait">
        {icons.map((Icon, index) => (
          index === currentIconIndex && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Icon size={size} />
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

// Loading indicator with pixel style
interface PixelLoaderProps {
  isLoading: boolean;
  progress?: number;
  className?: string;
}

export const PixelLoader: React.FC<PixelLoaderProps> = ({
  isLoading,
  progress,
  className = '',
}) => {
  return (
    <div className={`relative w-full h-2 bg-surface rounded ${className}`}>
      <motion.div
        className="absolute top-0 left-0 h-full bg-violet rounded"
        variants={loadingVariants.pixelLoader}
        animate={isLoading ? (progress !== undefined ? 'complete' : 'loading') : 'complete'}
        style={{ width: progress !== undefined ? `${progress}%` : '0%' }}
      />
      
      {/* Pixel blocks overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 border-r border-bg/20 last:border-r-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Magnetic element that follows cursor
interface MagneticElementProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export const MagneticElement: React.FC<MagneticElementProps> = ({
  children,
  strength = 0.3,
  className = '',
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      setMousePosition({
        x: (e.clientX - centerX) * strength,
        y: (e.clientY - centerY) * strength,
      });
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering, strength]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isHovering ? {
        x: mousePosition.x,
        y: mousePosition.y,
      } : {
        x: 0,
        y: 0,
      }}
      transition={easings.spring.soft}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {children}
    </motion.div>
  );
};

// Staggered grid animation
interface StaggeredGridProps {
  children: ReactNode[];
  staggerDelay?: number;
  className?: string;
}

export const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  staggerDelay = 0.1,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Pulse ring animation
interface PulseRingProps {
  size?: number;
  color?: string;
  className?: string;
}

export const PulseRing: React.FC<PulseRingProps> = ({
  size = 100,
  color = 'rgba(124, 58, 237, 0.5)',
  className = '',
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: color }}
          animate={{
            scale: [0.8, 2],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};