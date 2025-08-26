import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGradientClass(type: "primary" | "rainbow" | "enterprise" | "badge", variant?: string) {
  const gradients = {
    primary: "from-pink-500 via-purple-500 to-cyan-500",
    rainbow: "from-pink-500 via-purple-500 to-cyan-500 dark:from-primary dark:via-accent dark:to-primary",
    enterprise: "from-pink-800 to-purple-600 dark:from-primary dark:to-accent",
    badge: {
      hot: "from-orange-500 to-red-500",
      trending: "from-purple-500 to-pink-500",
      power: "from-cyan-500 to-blue-500",
      premium: "from-yellow-500 to-orange-500",
      topRated: "from-green-500 to-emerald-500",
      viral: "from-pink-500 to-purple-500",
    },
  }
  
  if (type === "badge" && variant) {
    return `bg-gradient-to-r ${gradients.badge[variant as keyof typeof gradients.badge]}`
  }
  
  return `bg-gradient-to-r ${gradients[type as keyof typeof gradients]}`
}

export function getAnimationDelay(index: number, baseDelay: number = 100): string {
  return `${index * baseDelay}ms`
}

export function getStaggeredAnimation(
  index: number,
  visible: boolean,
  options?: {
    baseDelay?: number
    extraDelay?: number
    transformFrom?: string
    transformTo?: string
  }
) {
  const { 
    baseDelay = 100, 
    extraDelay = 0,
    transformFrom = "translate-y-4",
    transformTo = "translate-y-0" 
  } = options || {}
  
  const delay = index * baseDelay + extraDelay
  
  return {
    className: cn(
      "transition-all duration-1000",
      visible ? `opacity-100 ${transformTo}` : `opacity-0 ${transformFrom}`
    ),
    style: { transitionDelay: `${delay}ms` },
  }
}