import { Variants, Easing } from 'framer-motion';

// ===== EASING FUNCTIONS =====
export const easings = {
  // Standard easings
  linear: [0, 0, 1, 1] as Easing,
  easeIn: [0.4, 0, 1, 1] as Easing,
  easeOut: [0, 0, 0.2, 1] as Easing,
  easeInOut: [0.4, 0, 0.2, 1] as Easing,
  
  // Custom easings
  bounce: [0.68, -0.55, 0.265, 1.55] as Easing,
  elastic: [0.25, 0.46, 0.45, 0.94] as Easing,
  backIn: [0.36, 0, 0.66, -0.56] as Easing,
  backOut: [0.34, 1.56, 0.64, 1] as Easing,
  sharp: [0.4, 0, 0.6, 1] as Easing,
  
  // Pixel-specific
  pixelSharp: [0.25, 0.1, 0.25, 1] as Easing,
  retroBounce: [0.68, -0.55, 0.265, 1.55] as Easing,
  glitch: [0.23, 1, 0.32, 1] as Easing,
};

// ===== DURATION PRESETS =====
export const durations = {
  instant: 0.05,
  micro: 0.12,
  fast: 0.24,
  normal: 0.42,
  slow: 0.6,
  slower: 0.8,
  epic: 1.2,
  cinematic: 2.0,
};

// ===== SPRING PRESETS =====
export const springs = {
  gentle: { type: "spring" as const, stiffness: 120, damping: 14, mass: 1 },
  wobbly: { type: "spring" as const, stiffness: 180, damping: 12, mass: 1 },
  stiff: { type: "spring" as const, stiffness: 400, damping: 30, mass: 1 },
  slow: { type: "spring" as const, stiffness: 200, damping: 50, mass: 3 },
  molasses: { type: "spring" as const, stiffness: 280, damping: 120, mass: 10 },
  
  // Pixel-themed springs
  pixelBounce: { type: "spring" as const, stiffness: 300, damping: 10, mass: 0.8 },
  retroElastic: { type: "spring" as const, stiffness: 400, damping: 17, mass: 1 },
  gamepadFeel: { type: "spring" as const, stiffness: 500, damping: 30, mass: 1.2 },
};

// ===== ENTRANCE ANIMATIONS =====
export const entranceVariants = {
  // Fade variants
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: durations.normal } },
  } as Variants,

  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: durations.normal, ease: easings.easeOut } },
  } as Variants,

  fadeInDown: {
    hidden: { opacity: 0, y: -60 },
    show: { opacity: 1, y: 0, transition: { duration: durations.normal, ease: easings.easeOut } },
  } as Variants,

  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: durations.normal, ease: easings.easeOut } },
  } as Variants,

  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: durations.normal, ease: easings.easeOut } },
  } as Variants,

  // Scale variants
  scaleIn: {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: springs.gentle },
  } as Variants,

  scaleInBounce: {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: springs.wobbly },
  } as Variants,

  // Pixel dissolve
  pixelDissolve: {
    hidden: { 
      opacity: 0, 
      filter: 'blur(8px)', 
      scale: 0.95,
      rotateX: 15 
    },
    show: { 
      opacity: 1, 
      filter: 'blur(0px)', 
      scale: 1,
      rotateX: 0,
      transition: { duration: durations.slow, ease: easings.pixelSharp }
    },
  } as Variants,

  // Glitch entrance
  glitchIn: {
    hidden: { 
      opacity: 0, 
      x: -10,
      skewX: 10,
      filter: 'hue-rotate(90deg) contrast(150%)'
    },
    show: { 
      opacity: 1, 
      x: 0,
      skewX: 0,
      filter: 'hue-rotate(0deg) contrast(100%)',
      transition: { 
        duration: durations.normal,
        ease: easings.glitch,
        filter: { delay: 0.1 }
      }
    },
  } as Variants,

  // Zoom variants
  zoomIn: {
    hidden: { opacity: 0, scale: 0.3, rotate: -10 },
    show: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: springs.pixelBounce
    },
  } as Variants,

  // Flip variants
  flipInX: {
    hidden: { opacity: 0, rotateX: -90 },
    show: { 
      opacity: 1, 
      rotateX: 0,
      transition: { duration: durations.slow, ease: easings.backOut }
    },
  } as Variants,

  flipInY: {
    hidden: { opacity: 0, rotateY: -90 },
    show: { 
      opacity: 1, 
      rotateY: 0,
      transition: { duration: durations.slow, ease: easings.backOut }
    },
  } as Variants,

  // Slide variants
  slideInFromLeft: {
    hidden: { x: '-100vw', opacity: 0 },
    show: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
  } as Variants,

  slideInFromRight: {
    hidden: { x: '100vw', opacity: 0 },
    show: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
  } as Variants,

  // Typewriter effect
  typewriter: {
    hidden: { width: 0 },
    show: { 
      width: "auto",
      transition: { duration: 2, ease: "easeInOut" }
    },
  } as Variants,

  // Matrix digital rain effect
  digitalRain: {
    hidden: { 
      opacity: 0,
      y: -20,
      filter: 'brightness(0)'
    },
    show: { 
      opacity: [0, 1, 1, 0],
      y: [0, 0, 0, 20],
      filter: ['brightness(0)', 'brightness(2)', 'brightness(1)', 'brightness(0)'],
      transition: { 
        duration: 2,
        times: [0, 0.1, 0.9, 1],
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }
    },
  } as Variants,
};

// ===== HOVER ANIMATIONS =====
export const hoverVariants = {
  lift: {
    rest: { y: 0, scale: 1, rotateX: 0 },
    hover: { 
      y: -8, 
      scale: 1.02, 
      rotateX: 5,
      transition: { duration: durations.fast, ease: easings.easeOut }
    },
  } as Variants,

  grow: {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: springs.gentle },
  } as Variants,

  wiggle: {
    rest: { rotate: 0 },
    hover: { 
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: durations.normal }
    },
  } as Variants,

  pulse: {
    rest: { scale: 1 },
    hover: { 
      scale: [1, 1.1, 1],
      transition: { duration: durations.normal, repeat: Infinity }
    },
  } as Variants,

  glow: {
    rest: { filter: 'brightness(1) drop-shadow(0 0 0px rgba(124, 58, 237, 0))' },
    hover: { 
      filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(124, 58, 237, 0.8))',
      transition: { duration: durations.fast }
    },
  } as Variants,

  pixelGlitch: {
    rest: { 
      x: 0, 
      filter: 'hue-rotate(0deg) contrast(100%)' 
    },
    hover: { 
      x: [0, -2, 2, -1, 0],
      filter: [
        'hue-rotate(0deg) contrast(100%)', 
        'hue-rotate(90deg) contrast(150%)',
        'hue-rotate(180deg) contrast(120%)',
        'hue-rotate(270deg) contrast(110%)',
        'hue-rotate(0deg) contrast(100%)'
      ],
      transition: { duration: durations.fast }
    },
  } as Variants,

  magneticPull: {
    rest: { x: 0, y: 0 },
    hover: (cursorDistance: number) => ({
      x: cursorDistance * 0.1,
      y: cursorDistance * 0.05,
      transition: springs.gentle
    }),
  },
};

// ===== TAP/PRESS ANIMATIONS =====
export const tapVariants = {
  press: {
    rest: { scale: 1 },
    tap: { scale: 0.95, transition: { duration: durations.micro } },
  } as Variants,

  squish: {
    rest: { scaleX: 1, scaleY: 1 },
    tap: { scaleX: 1.1, scaleY: 0.9, transition: { duration: durations.micro } },
  } as Variants,

  pixelPress: {
    rest: { 
      scale: 1, 
      filter: 'contrast(100%) brightness(1)' 
    },
    tap: { 
      scale: 0.98,
      filter: 'contrast(150%) brightness(1.2)',
      transition: { duration: durations.micro }
    },
  } as Variants,

  chromaticPress: {
    rest: { 
      filter: 'drop-shadow(0 0 0 transparent)' 
    },
    tap: { 
      filter: 'drop-shadow(-2px 0 0 #FF0080) drop-shadow(2px 0 0 #00FFFF)',
      transition: { duration: durations.micro }
    },
  } as Variants,
};

// ===== LOADING ANIMATIONS =====
export const loadingVariants = {
  spinner: {
    animate: {
      rotate: 360,
      transition: { duration: 1, repeat: Infinity, ease: "linear" }
    },
  } as Variants,

  pulse: {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    },
  } as Variants,

  scanline: {
    animate: {
      x: ["-100%", "100%"],
      transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
    },
  } as Variants,

  pixelLoad: {
    animate: {
      opacity: [0.3, 1, 0.3],
      scale: [0.8, 1, 0.8],
      filter: ['blur(2px)', 'blur(0px)', 'blur(2px)'],
      transition: { duration: 1, repeat: Infinity, ease: easings.pixelSharp }
    },
  } as Variants,

  dots: {
    animate: (i: number) => ({
      y: [0, -20, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        delay: i * 0.1,
        ease: "easeInOut"
      }
    }),
  },
};

// ===== PAGE TRANSITION ANIMATIONS =====
export const pageTransitions = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: durations.normal },
  },

  slideHorizontal: {
    initial: { x: '100vw', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100vw', opacity: 0 },
    transition: springs.gentle,
  },

  slideVertical: {
    initial: { y: '100vh', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100vh', opacity: 0 },
    transition: springs.gentle,
  },

  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 },
    transition: springs.gentle,
  },

  pixelTransition: {
    initial: { 
      opacity: 0,
      filter: 'blur(8px) pixelate(4px)',
      scale: 0.9
    },
    animate: { 
      opacity: 1,
      filter: 'blur(0px) pixelate(0px)',
      scale: 1
    },
    exit: { 
      opacity: 0,
      filter: 'blur(4px) pixelate(2px)',
      scale: 1.1
    },
    transition: { duration: durations.slow, ease: easings.pixelSharp },
  },

  glitchTransition: {
    initial: { 
      opacity: 0,
      x: -20,
      skewX: 5,
      filter: 'hue-rotate(180deg)'
    },
    animate: { 
      opacity: 1,
      x: 0,
      skewX: 0,
      filter: 'hue-rotate(0deg)'
    },
    exit: { 
      opacity: 0,
      x: 20,
      skewX: -5,
      filter: 'hue-rotate(90deg)'
    },
    transition: { duration: durations.normal, ease: easings.glitch },
  },
};

// ===== STAGGER ANIMATIONS =====
export const staggerVariants = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  } as Variants,

  item: {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: durations.normal, ease: easings.easeOut }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: durations.fast }
    },
  } as Variants,

  fastStagger: {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 },
      },
    },
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      show: { opacity: 1, scale: 1, transition: springs.gentle },
    },
  },

  pixelStagger: {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.3 },
      },
    },
    item: {
      hidden: { 
        opacity: 0, 
        filter: 'blur(4px)',
        scale: 0.9
      },
      show: { 
        opacity: 1, 
        filter: 'blur(0px)',
        scale: 1,
        transition: { duration: durations.normal, ease: easings.pixelSharp }
      },
    },
  },
};

// ===== TEXT ANIMATIONS =====
export const textVariants = {
  typewriter: {
    hidden: { width: 0, opacity: 0 },
    show: {
      width: "100%",
      opacity: 1,
      transition: { 
        width: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.1 }
      }
    },
  } as Variants,

  letterByLetter: {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.2 },
      },
    },
    letter: {
      hidden: { opacity: 0, y: 10, rotateX: -90 },
      show: { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: { duration: durations.fast, ease: easings.backOut }
      },
    },
  },

  glitchText: {
    rest: { 
      x: 0,
      filter: 'hue-rotate(0deg)',
      textShadow: '0 0 0 transparent'
    },
    animate: {
      x: [0, -1, 1, 0],
      filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(180deg)', 'hue-rotate(0deg)'],
      textShadow: [
        '0 0 0 transparent',
        '-2px 0 0 #FF0080, 2px 0 0 #00FFFF',
        '0 0 0 transparent'
      ],
      transition: { duration: 0.3, repeat: Infinity, repeatDelay: 3 }
    },
  } as Variants,

  neonFlicker: {
    animate: {
      textShadow: [
        '0 0 5px #7C3AED, 0 0 10px #7C3AED, 0 0 15px #7C3AED',
        '0 0 2px #7C3AED, 0 0 5px #7C3AED, 0 0 8px #7C3AED',
        '0 0 5px #7C3AED, 0 0 10px #7C3AED, 0 0 15px #7C3AED',
      ],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
  } as Variants,
};

// ===== SCROLL ANIMATIONS =====
export const scrollVariants = {
  parallax: (offset: number) => ({
    y: offset * -0.5,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  }),

  reveal: {
    hidden: { opacity: 0, y: 100 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: durations.slow, ease: easings.easeOut }
    },
  } as Variants,

  scaleOnScroll: (progress: number) => ({
    scale: 0.8 + (progress * 0.2),
    opacity: Math.max(0.3, progress),
    transition: springs.gentle
  }),
};

// ===== MOUSE FOLLOW ANIMATIONS =====
export const mouseFollowVariants = {
  cursor: {
    default: { scale: 1, opacity: 0.7 },
    hover: { scale: 1.5, opacity: 1 },
    click: { scale: 0.8, opacity: 1 },
  } as Variants,

  trail: (delay: number) => ({
    x: 0, // Will be set by mouse position
    y: 0, // Will be set by mouse position
    scale: 1 - (delay * 0.1),
    opacity: 1 - (delay * 0.2),
    transition: { 
      type: "spring", 
      stiffness: 500 - (delay * 50), 
      damping: 20 + (delay * 5) 
    }
  }),
};

// ===== UTILITY FUNCTIONS =====
export const createStaggerDelay = (index: number, baseDelay: number = 0.1) => ({
  transition: { delay: index * baseDelay }
});

export const createRandomDelay = (maxDelay: number = 0.5) => ({
  transition: { delay: Math.random() * maxDelay }
});

export const combineVariants = (...variants: Variants[]): Variants => {
  return variants.reduce((acc, variant) => ({
    ...acc,
    ...variant,
  }), {});
};
