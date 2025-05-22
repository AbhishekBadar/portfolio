import { useEffect, useState } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

export const useParallax = (offset = 0.5) => {
  const scrollY = useMotionValue(0)
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 })
  
  useEffect(() => {
    const updateScrollY = () => scrollY.set(window.scrollY)
    window.addEventListener('scroll', updateScrollY)
    return () => window.removeEventListener('scroll', updateScrollY)
  }, [scrollY])

  const y = useTransform(smoothScrollY, [0, 1000], [0, -1000 * offset])
  
  return { y, scrollY: smoothScrollY }
}

export const useMouseParallax = (strength = 0.1) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      mouseX.set((clientX - centerX) * strength)
      mouseY.set((clientY - centerY) * strength)
    }
    
    window.addEventListener('mousemove', updateMouse)
    return () => window.removeEventListener('mousemove', updateMouse)
  }, [mouseX, mouseY, strength])
  
  return { x: springX, y: springY }
}

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrolled / maxHeight, 1)
      setProgress(progress)
    }
    
    window.addEventListener('scroll', updateProgress)
    updateProgress()
    
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])
  
  return progress
}
