import { useEffect, useState } from 'react'

const EasterEggs = () => {
  const [showKonamiCode, setShowKonamiCode] = useState(false)
  const [, setKeySequence] = useState<string[]>([])
  
  useEffect(() => {
    // Add floating animation styles
    const style = document.createElement('style')
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translateY(-100px) scale(0.5);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
    
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
  }, [])
  
  useEffect(() => {
    // Konami Code sequence
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']
    
    const handleKeyPress = (e: KeyboardEvent) => {
      setKeySequence(prev => {
        const newSequence = [...prev, e.code].slice(-konamiCode.length)
        
        if (newSequence.join(',') === konamiCode.join(',')) {
          setShowKonamiCode(true)
          setTimeout(() => setShowKonamiCode(false), 3000)
          return []
        }
        
        return newSequence
      })
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])
  
  // Floating emojis on click
  useEffect(() => {
    const createFloatingEmoji = (x: number, y: number) => {
      const emojis = ['🚀', '⚡️', '💻', '🔥', '✨', '🎯', '🎨', '💡']
      const emoji = emojis[Math.floor(Math.random() * emojis.length)]
      
      const element = document.createElement('div')
      element.textContent = emoji
      element.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 24px;
        pointer-events: none;
        z-index: 1000;
        animation: float 2s ease-out forwards;
      `
      
      document.body.appendChild(element)
      setTimeout(() => element.remove(), 2000)
    }
    
    const handleClick = (e: MouseEvent) => {
      if (Math.random() < 0.1) { // 10% chance
        createFloatingEmoji(e.clientX, e.clientY)
      }
    }
    
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  
  return (
    <>
      {/* Konami Code Easter Egg */}
      {showKonamiCode && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-black text-white px-8 py-4 rounded-lg text-center animate-bounce">
            <div className="text-2xl mb-2">🎮 KONAMI CODE ACTIVATED! 🎮</div>
            <div className="text-sm opacity-80">You found the secret! You're clearly a person of culture.</div>
          </div>
        </div>
      )}
    </>
  )
}

export default EasterEggs
