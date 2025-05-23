import { motion } from 'framer-motion'
import { useParallax, useMouseParallax } from '../hooks/useParallax'

const ParallaxBackground = () => {
  const { y: parallaxY1 } = useParallax(0.3)
  const { y: parallaxY2 } = useParallax(0.5)
  const { y: parallaxY3 } = useParallax(0.7)
  const { x: mouseX, y: mouseY } = useMouseParallax(0.05)

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        style={{ y: parallaxY1 }}
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-lg blur-lg"
        animate={{
          rotate: [0, -180, -360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        style={{ y: parallaxY2, x: mouseX }}
        className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full blur-md"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        style={{ y: parallaxY3 }}
        className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-br from-violet-500/25 to-indigo-500/25 rounded-xl blur-lg"
        animate={{
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 0.7, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        style={{ y: parallaxY1, x: mouseY }}
        className="absolute bottom-1/4 right-20 w-28 h-28 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          style={{ 
            y: i % 2 === 0 ? parallaxY2 : parallaxY3,
            x: i % 3 === 0 ? mouseX : mouseY,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full"
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Animated grid pattern */}
      <motion.div
        style={{ 
          y: parallaxY1,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export default ParallaxBackground
