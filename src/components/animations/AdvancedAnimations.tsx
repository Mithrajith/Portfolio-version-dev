import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { animated, useTrail } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Confetti from 'react-confetti';
import { cn } from '@/lib/utils';
import { hoverVariants, easings } from '@/lib/comprehensive-animations';

// ===== SCROLL-TRIGGERED ANIMATIONS =====
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollRevealComponent: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      ...(direction === 'up' && { y: 60 }),
      ...(direction === 'down' && { y: -60 }),
      ...(direction === 'left' && { x: 60 }),
      ...(direction === 'right' && { x: -60 }),
      ...(direction === 'scale' && { scale: 0.8 }),
      ...(direction === 'rotate' && { rotate: 20 }),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration,
        delay,
        ease: easings.easeOut,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ===== PARALLAX SCROLL COMPONENT =====
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxScroll: React.FC<ParallaxProps> = ({
  children,
  speed = 0.5,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

// ===== MOUSE TRACKING COMPONENT =====
interface MagneticElementProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export const MagneticElement: React.FC<MagneticElementProps> = ({
  children,
  strength = 0.3,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const bind = useGesture(
    {
      onMove: ({ xy: [x, y] }) => {
        if (ref.current && isHovered) {
          const rect = ref.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (x - centerX) * strength;
          const deltaY = (y - centerY) * strength;
          
          ref.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        }
      },
      onPointerEnter: () => setIsHovered(true),
      onPointerLeave: () => {
        setIsHovered(false);
        if (ref.current) {
          ref.current.style.transform = 'translate(0px, 0px)';
        }
      },
    },
    { eventOptions: { passive: false } }
  );

  return (
    <div
      {...bind()}
      ref={ref}
      className={cn("transition-transform duration-300 ease-out", className)}
    >
      {children}
    </div>
  );
};

// ===== TYPEWRITER ANIMATION =====
interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  className?: string;
  onComplete?: () => void;
}

export const TypewriterEffect: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  delay = 0,
  cursor = true,
  className,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(timer);
          onComplete?.();
          if (!cursor) setShowCursor(false);
        }
      }, speed);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, onComplete, cursor]);

  useEffect(() => {
    if (cursor) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
      return () => clearInterval(cursorTimer);
    }
  }, [cursor]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <motion.span
          animate={{ opacity: showCursor ? 1 : 0 }}
          className="inline-block w-0.5 h-5 bg-violet-2 ml-1"
        />
      )}
    </span>
  );
};

// ===== GLITCH EFFECT COMPONENT =====
interface GlitchTextProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  trigger?: 'hover' | 'constant';
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  intensity = 'medium',
  trigger = 'hover',
  className,
}) => {
  const intensityMap = {
    low: { offset: 1, duration: 0.1 },
    medium: { offset: 2, duration: 0.2 },
    high: { offset: 4, duration: 0.3 },
  };

  const { offset, duration } = intensityMap[intensity];

  const glitchVariants = {
    normal: {
      textShadow: '0 0 0 transparent',
      transform: 'translate(0, 0)',
    },
    glitch: {
      textShadow: [
        `${offset}px 0 0 #ff0080, -${offset}px 0 0 #00ffff`,
        `${offset * 2}px 0 0 #ff0080, -${offset * 2}px 0 0 #00ffff`,
        `${offset}px 0 0 #ff0080, -${offset}px 0 0 #00ffff`,
      ],
      transform: [
        'translate(0, 0)',
        `translate(${offset}px, 0)`,
        `translate(-${offset}px, 0)`,
        'translate(0, 0)',
      ],
      transition: { duration, repeat: Infinity, repeatDelay: 2 },
    },
  };

  return (
    <motion.div
      variants={glitchVariants}
      initial="normal"
      {...(trigger === 'hover' ? { whileHover: 'glitch' } : { animate: 'glitch' })}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ===== PARTICLE SYSTEM =====
interface ParticleSystemProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
  className?: string;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  count = 20,
  color = '#7C3AED',
  size = 2,
  speed = 1,
  className,
}) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: size,
            height: size,
            backgroundColor: color,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 / speed,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// ===== MORPHING SHAPES =====
interface MorphingShapeProps {
  shapes: string[];
  duration?: number;
  className?: string;
}

export const MorphingShape: React.FC<MorphingShapeProps> = ({
  shapes,
  duration = 2,
  className,
}) => {
  return (
    <svg className={className} viewBox="0 0 100 100">
      <motion.path
        d={shapes[0]}
        animate={{ d: shapes }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        fill="currentColor"
      />
    </svg>
  );
};

// ===== STAGGER ANIMATION CONTAINER =====
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  className,
}) => {
  const trail = useTrail(React.Children.count(children), {
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <div className={className}>
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          {React.Children.toArray(children)[index]}
        </animated.div>
      ))}
    </div>
  );
};

// ===== 3D CARD EFFECT =====
interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export const Card3D: React.FC<Card3DProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  const bind = useGesture(
    {
      onMove: ({ xy: [x, y] }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      },
      onPointerLeave: () => {
        if (ref.current) {
          ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        }
      },
    },
    { eventOptions: { passive: false } }
  );

  return (
    <div
      {...bind()}
      ref={ref}
      className={cn("transition-transform duration-200 ease-out transform-gpu", className)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

// ===== ANIMATED COUNTER =====
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  delay = 0,
  suffix = '',
  className,
}) => {
  const [ref, inView] = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className={className}>
      {inView && (
        <CountUp
          end={value}
          duration={duration}
          delay={delay}
          suffix={suffix}
          useEasing
          preserveValue
        />
      )}
    </div>
  );
};

// ===== FLOATING ACTION BUTTON =====
interface FloatingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        "fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg",
        "flex items-center justify-center cursor-pointer",
        "bg-violet hover:bg-violet-2 text-white z-50",
        className
      )}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      variants={hoverVariants.lift}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      animate={{
        y: [0, -2, 0],
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <motion.div
        animate={{ rotate: isHovered ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

// ===== SUCCESS CONFETTI =====
interface SuccessConfettiProps {
  active: boolean;
  duration?: number;
}

export const SuccessConfetti: React.FC<SuccessConfettiProps> = ({
  active,
  duration = 3000,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (active) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), duration);
      return () => clearTimeout(timer);
    }
  }, [active, duration]);

  if (!show) return null;

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={false}
      numberOfPieces={200}
      colors={['#7C3AED', '#A78BFA', '#22D3EE', '#A3E635', '#FB7185']}
    />
  );
};

// Export all components
export {
  ScrollRevealComponent as ScrollReveal,
  ParallaxScrollComponent as ParallaxScroll,
  MagneticElementComponent as MagneticElement,
  TypewriterEffectComponent as TypewriterEffect,
  GlitchTextComponent as GlitchText,
  ParticleSystemComponent as ParticleSystem,
  MorphingShapeComponent as MorphingShape,
  StaggerContainerComponent as StaggerContainer,
  Card3DComponent as Card3D,
  AnimatedCounterComponent as AnimatedCounter,
  FloatingButtonComponent as FloatingButton,
  SuccessConfettiComponent as SuccessConfetti,
};
