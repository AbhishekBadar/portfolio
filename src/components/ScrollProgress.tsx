import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks/useParallax'

const ScrollProgress = () => {
  const progress = useScrollProgress()

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 z-50 origin-left"
        style={{ scaleX: progress }}
        initial={{ scaleX: 0 }}
      />
      
      {/* Circular progress indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: progress > 0.1 ? 1 : 0,
          scale: progress > 0.1 ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="4"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={176}
            strokeDashoffset={176 - (176 * progress)}
            transition={{ duration: 0.1 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white">
            {Math.round(progress * 100)}%
          </span>
        </div>
      </motion.div>
    </>
  )
}

export default ScrollProgress
