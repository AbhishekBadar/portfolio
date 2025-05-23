import { motion } from 'framer-motion'
import { useMouseParallax } from '../hooks/useParallax'
import { useState, useEffect } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
}

const InteractiveParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const { x: mouseX, y: mouseY } = useMouseParallax(0.1)

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      const colors = [
        'rgba(59, 130, 246, 0.3)', // blue
        'rgba(147, 51, 234, 0.3)', // purple
        'rgba(6, 182, 212, 0.3)',  // cyan
        'rgba(16, 185, 129, 0.3)', // emerald
        'rgba(236, 72, 153, 0.3)', // pink
      ]

      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.5 + 0.2,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
    window.addEventListener('resize', generateParticles)
    return () => window.removeEventListener('resize', generateParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            x: mouseX,
            y: mouseY,
          }}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            x: particle.x + Math.sin(Date.now() * 0.001 * particle.speed) * 50,
            y: particle.y + Math.cos(Date.now() * 0.001 * particle.speed) * 50,
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + particle.speed * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default InteractiveParticles
