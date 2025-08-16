import { useState, useEffect } from 'react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { scrollToElement, scrollToTop } = useSmoothScroll()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Track active section
      const sections = ['hero', 'work', 'experience', 'contact']
      const scrollPosition = window.scrollY + 150
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between py-6">
          <button
            onClick={() => scrollToTop()}
            className="text-lg font-semibold text-black hover:opacity-70 transition-all duration-300 transform hover:scale-105"
          >
            AB
          </button>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToElement(item.id)}
                className={`nav-link relative transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-black font-medium' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black rounded-full transition-all duration-300"></span>
                )}
              </button>
            ))}
            <a
              href="https://medium.com/@abhishekbadar"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-gray-600 hover:text-black transition-all duration-300 hover:transform hover:scale-105"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
