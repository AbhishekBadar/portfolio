import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

interface ParallaxElementProps {
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = '', 
  direction = 'up' 
}: ParallaxElementProps) => {
  const { y } = useParallax(speed)
  
  const getTransform = () => {
    switch (direction) {
      case 'down':
        return { y: y }
      case 'up':
        return { y: -y }
      case 'left':
        return { x: -y }
      case 'right':
        return { x: y }
      default:
        return { y: y }
    }
  }

  return (
    <motion.div
      style={getTransform()}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxElement
