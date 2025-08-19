import { Variants, Transition } from 'framer-motion';

// Enhanced easing curves
export const easings = {
  // Custom cubic-bezier curves
  smooth: [0.25, 0.46, 0.45, 0.94],
  snappy: [0.68, -0.55, 0.265, 1.55],
  gentle: [0.16, 1, 0.3, 1],
  bounce: [0.175, 0.885, 0.32, 1.275],
  elastic: [0.68, -0.6, 0.32, 1.6],
  
  // Spring configurations
  spring: {
    soft: { type: 'spring', damping: 20, stiffness: 100 },
    medium: { type: 'spring', damping: 25, stiffness: 200 },
    snappy: { type: 'spring', damping: 30, stiffness: 400 },
    bouncy: { type: 'spring', damping: 10, stiffness: 150 },
  }
} as const;

// Duration tiers as specified in instruction.md
export const durations = {
  micro: 0.12,      // 120ms - micro interactions
  ui: 0.24,         // 240ms - UI transitions
  scene: 0.6,       // 600ms - scene transitions
  hero: 1.2,        // 1200ms - hero set-pieces
  epic: 2.0,        // 2000ms - epic animations
} as const;

// Advanced entrance animations
export const entranceVariants: Record<string, Variants> = {
  // Pixel dissolve with enhanced effects
  pixelDissolve: {
    hidden: {
      opacity: 0,
      filter: 'blur(8px) brightness(0.5)',
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px) brightness(1)',
      scale: 1,
      y: 0,
      transition: {
        duration: durations.scene,
        ease: easings.gentle,
      },
    },
  },

  // Glitch entrance
  glitchIn: {
    hidden: {
      opacity: 0,
      x: -20,
      filter: 'hue-rotate(0deg)',
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'hue-rotate(0deg)',
      transition: {
        duration: durations.ui,
        ease: easings.snappy,
      },
    },
  },

  // Matrix style reveal
  matrixReveal: {
    hidden: {
      opacity: 0,
      clipPath: 'inset(100% 0 0 0)',
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0% 0 0 0)',
      transition: {
        duration: durations.scene,
        ease: easings.smooth,
      },
    },
  },

  // Cyber slide
  cyberSlide: {
    hidden: {
      opacity: 0,
      x: -100,
      skewX: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: durations.ui,
        ease: easings.bounce,
      },
    },
  },

  // Neon glow up
  neonGlow: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: 'brightness(0) saturate(0)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'brightness(1) saturate(1)',
      transition: {
        duration: durations.scene,
        ease: easings.gentle,
      },
    },
  },

  // Hologram materialize
  hologram: {
    hidden: {
      opacity: 0,
      scaleY: 0.1,
      filter: 'hue-rotate(180deg) brightness(2)',
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      filter: 'hue-rotate(0deg) brightness(1)',
      transition: {
        duration: durations.scene,
        ease: easings.elastic,
      },
    },
  },
};

// Advanced hover animations
export const hoverVariants: Record<string, Variants> = {
  // Enhanced lift with multiple effects
  superLift: {
    rest: {
      y: 0,
      scale: 1,
      rotateY: 0,
      filter: 'brightness(1) saturate(1)',
      boxShadow: '0 0 0 rgba(124, 58, 237, 0)',
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotateY: 5,
      filter: 'brightness(1.1) saturate(1.2)',
      boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)',
      transition: {
        duration: durations.micro,
        ease: easings.snappy,
      },
    },
    tap: {
      scale: 0.95,
      y: -2,
      transition: {
        duration: 0.05,
        ease: 'easeOut',
      },
    },
  },

  // Magnetic attraction
  magnetic: {
    rest: {
      x: 0,
      y: 0,
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: easings.spring.soft,
    },
  },

  // Glitch effect
  glitch: {
    rest: {
      filter: 'hue-rotate(0deg)',
      textShadow: 'none',
    },
    hover: {
      filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(0deg)'],
      textShadow: [
        'none',
        '2px 0 #ff0080, -2px 0 #00ffff',
        'none',
      ],
      transition: {
        duration: 0.3,
        times: [0, 0.5, 1],
        ease: 'easeInOut',
      },
    },
  },

  // Neon pulse
  neonPulse: {
    rest: {
      boxShadow: '0 0 5px rgba(124, 58, 237, 0.5)',
      filter: 'brightness(1)',
    },
    hover: {
      boxShadow: [
        '0 0 5px rgba(124, 58, 237, 0.5)',
        '0 0 25px rgba(124, 58, 237, 0.8)',
        '0 0 5px rgba(124, 58, 237, 0.5)',
      ],
      filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // 3D rotate
  rotate3D: {
    rest: {
      rotateX: 0,
      rotateY: 0,
      perspective: 1000,
    },
    hover: {
      rotateY: 15,
      rotateX: 5,
      transition: {
        duration: durations.micro,
        ease: easings.gentle,
      },
    },
  },
};

// Complex stagger animations
export const staggerVariants: Record<string, Variants> = {
  // Wave stagger
  wave: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  },

  // Cascade from center
  cascade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  },

  // Spiral reveal
  spiral: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  },
};

// Advanced page transition effects
export const pageTransitions: Record<string, Variants> = {
  // Cyber wipe
  cyberWipe: {
    initial: {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      filter: 'brightness(0.5)',
    },
    animate: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      filter: 'brightness(1)',
      transition: {
        duration: durations.scene,
        ease: easings.smooth,
      },
    },
    exit: {
      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      filter: 'brightness(0.5)',
      transition: {
        duration: durations.ui,
        ease: easings.smooth,
      },
    },
  },

  // Matrix slide
  matrixSlide: {
    initial: {
      x: '100%',
      filter: 'hue-rotate(180deg)',
    },
    animate: {
      x: 0,
      filter: 'hue-rotate(0deg)',
      transition: {
        duration: durations.scene,
        ease: easings.bounce,
      },
    },
    exit: {
      x: '-100%',
      filter: 'hue-rotate(-180deg)',
      transition: {
        duration: durations.ui,
        ease: easings.smooth,
      },
    },
  },

  // Pixel dissolve transition
  pixelDissolveTransition: {
    initial: {
      opacity: 0,
      filter: 'blur(10px) pixelate(10px)',
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      filter: 'blur(0px) pixelate(0px)',
      scale: 1,
      transition: {
        duration: durations.scene,
        ease: easings.gentle,
      },
    },
    exit: {
      opacity: 0,
      filter: 'blur(5px) pixelate(5px)',
      scale: 1.1,
      transition: {
        duration: durations.ui,
        ease: easings.gentle,
      },
    },
  },
};

// Text animation variants
export const textVariants: Record<string, Variants> = {
  // Typewriter with cursor
  typewriter: {
    hidden: { width: 0 },
    visible: {
      width: 'auto',
      transition: {
        duration: 2,
        ease: 'linear',
      },
    },
  },

  // Glitch text
  glitchText: {
    rest: {
      filter: 'hue-rotate(0deg)',
      textShadow: '0 0 0 transparent',
    },
    animate: {
      filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(0deg)'],
      textShadow: [
        '0 0 0 transparent',
        '2px 0 #ff0080, -2px 0 #00ffff, 0 2px #ffff00',
        '0 0 0 transparent',
      ],
      transition: {
        duration: 0.5,
        times: [0, 0.5, 1],
        repeat: 2,
      },
    },
  },

  // Neon flicker
  neonFlicker: {
    rest: {
      textShadow: '0 0 10px currentColor',
      opacity: 1,
    },
    animate: {
      opacity: [1, 0.5, 1, 0.8, 1],
      textShadow: [
        '0 0 10px currentColor',
        '0 0 5px currentColor',
        '0 0 15px currentColor',
        '0 0 8px currentColor',
        '0 0 12px currentColor',
      ],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },

  // Rainbow shift
  rainbow: {
    animate: {
      background: [
        'linear-gradient(45deg, #ff0000, #ff8800)',
        'linear-gradient(45deg, #ff8800, #ffff00)',
        'linear-gradient(45deg, #ffff00, #88ff00)',
        'linear-gradient(45deg, #88ff00, #00ffff)',
        'linear-gradient(45deg, #00ffff, #0088ff)',
        'linear-gradient(45deg, #0088ff, #8800ff)',
        'linear-gradient(45deg, #8800ff, #ff0000)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
};

// Particle and background effects
export const particleVariants: Record<string, Variants> = {
  // Floating particles
  floating: {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // Orbiting particles
  orbiting: {
    animate: {
      rotate: 360,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },

  // Pulsing energy
  energy: {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      filter: [
        'hue-rotate(0deg) brightness(1)',
        'hue-rotate(180deg) brightness(1.5)',
        'hue-rotate(360deg) brightness(1)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
};

// Loading and success animations
export const loadingVariants: Record<string, Variants> = {
  // Pixel loading bar
  pixelLoader: {
    loading: {
      width: ['0%', '100%'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    complete: {
      width: '100%',
      backgroundColor: '#A3E635',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  },

  // Spinning matrix
  matrixSpinner: {
    animate: {
      rotate: 360,
      filter: [
        'hue-rotate(0deg)',
        'hue-rotate(120deg)',
        'hue-rotate(240deg)',
        'hue-rotate(360deg)',
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },

  // Success burst
  successBurst: {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: [0, 1.2, 1],
      rotate: 0,
      opacity: [0, 1, 1],
      transition: {
        duration: 0.6,
        times: [0, 0.7, 1],
        ease: easings.bounce,
      },
    },
  },
};

// Custom hooks for dynamic animations
export const createCustomVariant = (
  from: Record<string, any>,
  to: Record<string, any>,
  transition?: Transition
): Variants => ({
  hidden: from,
  visible: {
    ...to,
    transition: transition || { duration: durations.ui, ease: easings.gentle },
  },
});

// Gesture-based animations
export const gestureVariants: Record<string, Variants> = {
  // Drag constraints
  draggable: {
    drag: {
      scale: 1.05,
      cursor: 'grabbing',
      transition: {
        duration: 0.1,
      },
    },
  },

  // Swipe feedback
  swipeable: {
    swipeRight: {
      x: 20,
      opacity: 0.8,
      transition: {
        duration: 0.1,
      },
    },
    swipeLeft: {
      x: -20,
      opacity: 0.8,
      transition: {
        duration: 0.1,
      },
    },
  },
};

export default {
  easings,
  durations,
  entranceVariants,
  hoverVariants,
  staggerVariants,
  pageTransitions,
  textVariants,
  particleVariants,
  loadingVariants,
  gestureVariants,
  createCustomVariant,
};