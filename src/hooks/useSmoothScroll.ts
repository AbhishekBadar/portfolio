import { useCallback } from 'react'

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId: string, offset: number = 100) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const startPosition = window.pageYOffset
    const targetPosition = element.offsetTop - offset
    const distance = targetPosition - startPosition
    const duration = Math.min(Math.abs(distance) * 0.5, 1200) // Dynamic duration based on distance
    let start = 0

    // Easing function for smooth animation
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    const animateScroll = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      const percentage = Math.min(progress / duration, 1)
      
      const currentPosition = startPosition + distance * easeInOutCubic(percentage)
      window.scrollTo(0, currentPosition)
      
      if (progress < duration) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    const startPosition = window.pageYOffset
    const duration = 800
    let start = 0

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3)
    }

    const animateScroll = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      const percentage = Math.min(progress / duration, 1)
      
      const currentPosition = startPosition * (1 - easeOutCubic(percentage))
      window.scrollTo(0, currentPosition)
      
      if (progress < duration) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }, [])

  return { scrollToElement, scrollToTop }
}
