export const smoothTransition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const scaleHover = {
  whileHover: {
    scale: 1.02,
  },

  transition: smoothTransition,
};

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const viewportSettings = {
  once: true,
  amount: 0.2,
};