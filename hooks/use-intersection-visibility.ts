import { useEffect, useState, RefObject } from "react"

interface UseIntersectionVisibilityOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionVisibility(
  ref: RefObject<HTMLElement>,
  options: UseIntersectionVisibilityOptions = {}
): boolean {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true
  } = options

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting
        
        if (isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold, rootMargin, triggerOnce])

  return isVisible
}