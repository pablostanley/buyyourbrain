export const ANIMATION = {
  INTERSECTION_THRESHOLD: 0.1,
  INTERSECTION_ROOT_MARGIN: "0px",
  
  DURATIONS: {
    FAST: 300,
    MEDIUM: 500,
    SLOW: 1000,
    EXTRA_SLOW: 1500,
    GRADIENT: 2000,
    FLOAT: 6000,
    MARQUEE: 10000,
  },
  
  DELAYS: {
    STAGGER_SMALL: 50,
    STAGGER: 100,
    STAGGER_LARGE: 200,
    SECTION: 300,
  },
  
  EASINGS: {
    DEFAULT: "cubic-bezier(0.16, 1, 0.3, 1)",
    BOUNCE: "cubic-bezier(0.2, 1, 1, 1)",
    IN_OUT: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const

export const GRADIENTS = {
  PRIMARY: "from-pink-500 via-purple-500 to-cyan-500",
  PRIMARY_DARK: "from-primary via-accent to-primary",
  RAINBOW: "from-pink-500 via-purple-500 to-cyan-500 dark:from-primary dark:via-accent dark:to-primary",
  ENTERPRISE: "from-pink-800 to-purple-600 dark:from-primary dark:to-accent",
  
  BADGES: {
    HOT: "from-orange-500 to-red-500",
    TRENDING: "from-purple-500 to-pink-500",
    POWER: "from-cyan-500 to-blue-500",
    PREMIUM: "from-yellow-500 to-orange-500",
    TOP_RATED: "from-green-500 to-emerald-500",
    VIRAL: "from-pink-500 to-purple-500",
  },
} as const

export const Z_INDEX = {
  BACKGROUND: -10,
  BASE: 0,
  DROPDOWN: 10,
  BADGE: 20,
  MODAL: 30,
  OVERLAY: 40,
  TOOLTIP: 50,
} as const