import { Variants } from 'framer-motion';

// Animation variants for pixel dissolve entrance
export const pixelVariants: Variants = {
  hidden: {
    filter: 'blur(8px)',
    opacity: 0,
    y: 8,
    scale: 0.98,
  },
  show: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Hover animations
export const hoverLift: Variants = {
  rest: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.12,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -2,
    scale: 1.01,
    transition: {
      duration: 0.12,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.05,
      ease: 'easeOut',
    },
  },
};

// Stagger animation for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// Route transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(4px)',
    scale: 0.98,
  },
  in: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  out: {
    opacity: 0,
    filter: 'blur(4px)',
    scale: 1.02,
    transition: {
      duration: 0.24,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Scanline sweep animation
export const scanlineVariants: Variants = {
  hidden: { x: '-100%' },
  show: {
    x: '100%',
    transition: {
      duration: 2,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

// Modal/Command palette animations
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.24,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: 'blur(2px)',
    transition: {
      duration: 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Card flip animation
export const cardFlip: Variants = {
  front: {
    rotateY: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  back: {
    rotateY: 180,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

// Typing animation for text
export const typingVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const letterVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.12,
      ease: 'easeOut',
    },
  },
};
