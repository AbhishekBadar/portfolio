import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParallaxBackground from './components/ParallaxBackground'
import ScrollProgress from './components/ScrollProgress'
import LoadingAnimation from './components/LoadingAnimation'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingAnimation onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {showContent && (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <ParallaxBackground />
          <ScrollProgress />
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      )}
    </>
  )
}

export default App
