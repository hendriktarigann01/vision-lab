import { Variants, Transition } from "framer-motion";

// Default smooth transition
export const defaultTransition: Transition = {
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1],
};

// Content fade in
export const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    height: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    height: "auto",
  },
};
