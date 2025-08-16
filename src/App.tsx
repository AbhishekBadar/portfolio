import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import EasterEggs from './components/EasterEggs'

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="max-w-5xl mx-auto px-8">
          <Hero />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
      
      <EasterEggs />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
