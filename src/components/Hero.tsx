import { ArrowUpRight, Github, Mail } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

interface BlogPost {
  title: string
  link: string
  pubDate: string
  description: string
}

const Hero = () => {
  const [timeOfDay, setTimeOfDay] = useState('')
  const [currentTime, setCurrentTime] = useState('')
  const [latestPost, setLatestPost] = useState<BlogPost | null>(null)
  const [isLoadingPost, setIsLoadingPost] = useState(true)
  const { scrollToElement } = useSmoothScroll()
  
  // Magnetic button refs
  const primaryBtnRef = useRef<HTMLAnchorElement>(null)
  const secondaryBtnRef = useRef<HTMLAnchorElement>(null)
  
  // Dynamic greeting based on time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hour = now.getHours()
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      })
      
      setCurrentTime(timeString)
      
      if (hour < 12) setTimeOfDay('Good morning')
      else if (hour < 17) setTimeOfDay('Good afternoon')
      else setTimeOfDay('Good evening')
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  // Fetch latest blog post from Medium
  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        // Using RSS2JSON service to convert Medium RSS to JSON
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abhishekbadar'
        )
        const data = await response.json()
        
        if (data.status === 'ok' && data.items && data.items.length > 0) {
          const post = data.items[0]
          setLatestPost({
            title: post.title,
            link: post.link,
            pubDate: post.pubDate,
            description: post.description
          })
        }
      } catch (error) {
        console.log('Could not fetch latest blog post:', error)
      } finally {
        setIsLoadingPost(false)
      }
    }

    fetchLatestPost()
  }, [])

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>, ref: React.RefObject<HTMLAnchorElement | null>) => {
    if (!ref.current) return
    
    const button = ref.current
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    const distance = Math.sqrt(x * x + y * y)
    const maxDistance = 100
    
    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance
      const moveX = x * strength * 0.3
      const moveY = y * strength * 0.3
      
      button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`
    }
  }
  
  const handleMouseLeave = (ref: React.RefObject<HTMLAnchorElement | null>) => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0px, 0px) scale(1)'
  }

  const techStack = [
    'Python', 'Laravel', 'Dart', 
    'Flutter', 'MySQL', 'Flutterflow', 'N8N','Docker'
  ]

  return (
    <section id="hero" className="section relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-50 to-blue-50 rounded-full animate-float-delayed"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-gradient-to-r from-green-50 to-blue-50 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-yellow-50 to-pink-50 rounded-full animate-float opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/6 w-20 h-20 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full animate-float-delayed opacity-15"></div>
      </div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-body text-gray-600">
                  <span>{timeOfDay}!</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-mono">{currentTime} IST</span>
                </div>
                
                <h1 className="text-display">
                  I'm{' '}
                  <span 
                    className="gradient-text glitch"
                    data-text="Abhishek"
                  >
                    Abhishek,
                  </span>
                  <br />
                  and I craft{' '}
                  <em className="not-italic relative">
                    digital experiences that matter
                    <svg 
                      className="absolute -bottom-2 left-0 w-full h-3 text-blue-200" 
                      viewBox="0 0 100 10" 
                      preserveAspectRatio="none"
                    >
                      <path 
                        d="M0,7 Q25,2 50,7 T100,7" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </em>
                  .
                </h1>
              </div>
              
              <div className="text-body-xl text-gray-600 max-w-2xl">
                <p>
                  Full-stack developer who believes great software should feel{' '}
                  <strong className="font-semibold text-black">effortless</strong>. 
                  Currently building developer tools and browser extensions. 
                  Always caffeinated ☕️
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  ref={primaryBtnRef}
                  href="#projects"
                  className="btn btn-primary magnetic group"
                  onMouseMove={(e) => handleMouseMove(e, primaryBtnRef)}
                  onMouseLeave={() => handleMouseLeave(primaryBtnRef)}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToElement('work')
                  }}
                >
                  View My Work
                  <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                
                <a
                  ref={secondaryBtnRef}
                  href="mailto:contact@abhishekbadar.dev"
                  className="btn btn-secondary group"
                  onMouseMove={(e) => handleMouseMove(e, secondaryBtnRef)}
                  onMouseLeave={() => handleMouseLeave(secondaryBtnRef)}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Say Hello
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Sidebar with personality */}
          <div className="lg:col-span-4 space-y-8">
            {/* Tech stack */}
            <div className="space-y-6">
              <h3 className="text-title">Current Tech Stack</h3>
              
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="badge badge-mono hover:scale-105 transition-transform cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Fun fact */}
            <div className="card bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <div className="space-y-2">
                <div className="text-label font-semibold text-purple-900 uppercase tracking-wider">
                  Built Lately -
                </div>
                <p className="text-body text-purple-800">
                  Fine-tuned <strong>Qwen3-4B</strong> to generate detailed ASCII art cats using LoRA + Apple MLX—trained fully on my MacBook M4
                </p>
              </div>
            </div>
            
            {/* Quick links */}
            <div className="space-y-4">
              <h3 className="text-title">Find Me Online</h3>
              
              <div className="flex gap-3">
                <a
                  href="https://github.com/abhishekbadar"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                </a>
                
                <a
                  href="mailto:contact@abhishekbadar.dev"
                  className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </a>
              </div>
            </div>
            
            {/* Blog highlight */}
            <div className="card bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
              <div className="space-y-3">
                <div className="text-label font-semibold text-indigo-900 uppercase tracking-wider">
                  Latest Writing
                </div>
                {isLoadingPost ? (
                  <div className="h-4 bg-indigo-200 rounded animate-pulse"></div>
                ) : latestPost ? (
                  <h3 className="font-medium text-indigo-900">{latestPost.title}</h3>
                ) : (
                  <p className="text-body text-indigo-800">
                    Sharing insights on web development, developer tools, and building products that scale.
                  </p>
                )}
                <a
                  href={latestPost?.link || "https://medium.com/@abhishekbadar"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium transition-colors"
                >
                  {latestPost ? "Read full post" : "Read my blog"}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
