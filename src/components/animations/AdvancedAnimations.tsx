import React, { ReactNode, useEffect, useState, useRef, useCallback } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useUIStore } from '@/store/ui';
import { 
  pageTransitions, 
  gestureVariants, 
  easings 
} from '@/lib/comprehensive-animations';

// Advanced page transition wrapper
interface PageTransitionWrapperProps {
  children: ReactNode;
  variant?: keyof typeof pageTransitions;
  className?: string;
}

export const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({
  children,
  variant = 'cyberWipe',
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      variants={pageTransitions[variant]}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

// Parallax scroll component
interface ParallaxScrollElementProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxScrollElement: React.FC<ParallaxScrollElementProps> = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  const { motionReduced } = useUIStore();
  const y = useMotionValue(0);
  const yTransform = useTransform(y, [0, 1], [0, speed * 100]);

  useEffect(() => {
    if (motionReduced) return;

    const handleScroll = () => {
      const scrollProgress = window.scrollY / window.innerHeight;
      y.set(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [y, motionReduced]);

  return (
    <motion.div
      className={className}
      style={{ y: motionReduced ? 0 : yTransform }}
    >
      {children}
    </motion.div>
  );
};

// Drag and drop component
interface DraggableElementProps {
  children: ReactNode;
  onDragEnd?: (info: any) => void;
  constraints?: any;
  className?: string;
}

export const DraggableElement: React.FC<DraggableElementProps> = ({
  children,
  onDragEnd,
  constraints,
  className = '',
}) => {
  return (
    <motion.div
      className={`cursor-grab active:cursor-grabbing ${className}`}
      drag
      dragConstraints={constraints}
      dragElastic={0.1}
      variants={gestureVariants.draggable}
      whileDrag="drag"
      onDragEnd={onDragEnd}
    >
      {children}
    </motion.div>
  );
};

// Morphing shape component
interface MorphingShapeElementProps {
  shapes: string[];
  interval?: number;
  className?: string;
}

export const MorphingShapeElement: React.FC<MorphingShapeElementProps> = ({
  shapes,
  interval = 3000,
  className = '',
}) => {
  const [currentShape, setCurrentShape] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentShape(prev => (prev + 1) % shapes.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [shapes.length, interval]);

  return (
    <motion.div
      className={className}
      animate={{ d: shapes[currentShape] }}
      transition={{ duration: 1, ease: easings.smooth }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.path
          fill="currentColor"
          animate={{ d: shapes[currentShape] }}
          transition={{ duration: 1, ease: easings.smooth }}
        />
      </svg>
    </motion.div>
  );
};

// Swipe gesture component
interface SwipeGestureElementProps {
  children: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
  className?: string;
}

export const SwipeGestureElement: React.FC<SwipeGestureElementProps> = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
  className = '',
}) => {
  const x = useMotionValue(0);
  const controls = useAnimation();

  const handleDragEnd = useCallback((_: any, info: any) => {
    const offset = info.offset.x;
    
    if (offset > threshold && onSwipeRight) {
      onSwipeRight();
      controls.start({ x: 100, opacity: 0 }).then(() => {
        controls.set({ x: 0, opacity: 1 });
      });
    } else if (offset < -threshold && onSwipeLeft) {
      onSwipeLeft();
      controls.start({ x: -100, opacity: 0 }).then(() => {
        controls.set({ x: 0, opacity: 1 });
      });
    } else {
      controls.start({ x: 0 });
    }
  }, [threshold, onSwipeLeft, onSwipeRight, controls]);

  return (
    <motion.div
      className={className}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x }}
      animate={controls}
      onDragEnd={handleDragEnd}
      variants={gestureVariants.swipeable}
    >
      {children}
    </motion.div>
  );
};

// Infinite scroll marquee
interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  children,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDuration = speed;
  const animationDirection = direction === 'left' ? -1 : 1;

  return (
    <div 
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, animationDirection * -100 + '%'],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: 'linear',
          ...(isHovered && pauseOnHover ? { duration: animationDuration * 10 } : {}),
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

// 3D card flip component
interface FlipCardElementProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
}

export const FlipCardElement: React.FC<FlipCardElementProps> = ({
  frontContent,
  backContent,
  className = '',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: easings.smooth }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          {frontContent}
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

// Elastic search input
interface ElasticSearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export const ElasticSearch: React.FC<ElasticSearchProps> = ({
  placeholder = 'Search...',
  onSearch,
  className = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`relative ${className}`}
      animate={{ scale: isFocused ? 1.05 : 1 }}
      transition={easings.spring.soft}
    >
      <motion.input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-2 bg-surface border border-violet-2/20 rounded text-text placeholder-muted focus:outline-none focus:border-violet-2"
        animate={{
          borderColor: isFocused ? '#A78BFA' : 'rgba(167, 139, 250, 0.2)',
          boxShadow: isFocused ? '0 0 0 3px rgba(167, 139, 250, 0.1)' : '0 0 0 0px rgba(167, 139, 250, 0)',
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.form>
  );
};

// Animated counter
interface CounterAnimationProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const CounterAnimation: React.FC<CounterAnimationProps> = ({
  from,
  to,
  duration = 2,
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(from);
  const countRef = useRef(count);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);
      const currentCount = Math.floor(from + (to - from) * progress);
      
      if (currentCount !== countRef.current) {
        setCount(currentCount);
        countRef.current = currentCount;
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [from, to, duration]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
};

// Liquid button with wave effect
interface WaveButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const WaveButton: React.FC<WaveButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    onClick?.();
  };

  return (
    <motion.button
      className={`relative overflow-hidden rounded-lg font-medium transition-colors ${
        variant === 'primary' ? 'bg-violet text-text' : 'bg-surface border border-violet text-violet'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
    >
      {/* Liquid wave background */}
      <motion.div
        className="absolute inset-0 bg-violet-2"
        initial={{ y: '100%' }}
        animate={{ 
          y: isHovered ? '0%' : '100%',
          scale: isClicked ? [1, 1.2, 1] : 1,
        }}
        transition={{ 
          duration: 0.3, 
          ease: easings.smooth,
          scale: { duration: 0.3, times: [0, 0.5, 1] }
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 px-6 py-3 block">
        {children}
      </span>
    </motion.button>
  );
};

// Breathing animation component
interface BreathingElementProps {
  children: ReactNode;
  scale?: [number, number];
  duration?: number;
  className?: string;
}

export const BreathingElement: React.FC<BreathingElementProps> = ({
  children,
  scale = [1, 1.05],
  duration = 3,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: scale,
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};