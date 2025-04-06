export const headerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
}



export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): { hidden: { x: string; y: string }; show: { x: string; y: string; transition: { type: string; delay: number; duration: number; ease: string } } } => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0', // Ensure x is always a string
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : '0', // Ensure y is always a string
  },
  show: {
    x: '0', // Ensure x is always a string
    y: '0', // Ensure y is always a string
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
): { hidden: Record<string, unknown>; show: { transition: { staggerChildren: number; delayChildren: number } } } => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

type TextVariantReturnType = {
  hidden: { y: number; opacity: number };
  show: {
    y: number;
    opacity: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
    };
  };
};

export const textVariant = (delay: number): TextVariantReturnType => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: () => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  }),
}

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

type FadeInReturnType = {
  hidden: {
    x: number;
    y: number;
    opacity: number;
  };
  show: {
    x: number;
    y: number;
    opacity: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
};

export const fadeIn = (direction: string, type: string, delay: number, duration: number): FadeInReturnType => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

type PlanetVariantsReturnType = {
  hidden: {
    x: string;
    rotate: number;
  };
  show: {
    x: number;
    rotate: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
    };
  };
};

export const planetVariants = (direction: string): PlanetVariantsReturnType => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
});

type ZoomInReturnType = {
  hidden: {
    scale: number;
    opacity: number;
  };
  show: {
    scale: number;
    opacity: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
};

export const zoomIn = (delay: number, duration: number): ZoomInReturnType => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});


export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
}

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 1.5, type: 'spring', duration: 5, bounce: 0 },
      opacity: { delay: 1.5, duration: 0.01 },
    },
  }),
}

export const staggerChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

export const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export const getMenuStyles = (menuOpened: boolean): Record<string, string> | undefined => {
  if (document.documentElement.clientWidth <= 640) {
    console.log('outside of sidebar reached');
    return !menuOpened ? { right: '-100%' } : undefined;
  }
};