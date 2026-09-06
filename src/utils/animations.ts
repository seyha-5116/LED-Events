import { Variants, Easing } from 'motion/react';

// Centralized Motion Animation System for LED Events
// Provides consistent timings, easings, and GPU-accelerated transforms (no gradients)

const standardEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fastEase: [number, number, number, number] = [0.25, 1, 0.5, 1];

export const transitionFast = { duration: 0.25, ease: fastEase };
export const transitionNormal = { duration: 0.45, ease: standardEase };
export const transitionCinematic = { duration: 0.65, ease: standardEase };

export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.35, ease: standardEase } 
  },
  exit: { 
    opacity: 0, 
    y: -8, 
    transition: { duration: 0.2, ease: fastEase } 
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

export const dropdownMenuVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 8, 
    pointerEvents: 'none',
    transition: { duration: 0.15 } 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    pointerEvents: 'auto',
    transition: { duration: 0.2, ease: 'easeOut' } 
  },
};

export const accordionVariants: Variants = {
  collapsed: { height: 0, opacity: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
  expanded: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};
