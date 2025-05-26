import { Github, Linkedin, Mail, Phone, ArrowDown, Code, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, scaleIn, staggerContainer } from '../hooks/useScrollAnimation'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <motion.div 
        className="container mx-auto px-6 py-20 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Floating code icons */}
          <motion.div 
            className="absolute top-20 left-10 text-blue-400 animate-bounce"
            variants={fadeIn}
          >
            <Code size={32} />
          </motion.div>
          <motion.div 
            className="absolute top-20 right-16 text-purple-400 animate-bounce delay-300"
            variants={fadeIn}
          >
            <Zap size={28} />
          </motion.div>
          
          <div className="mb-12">
            {/* Profile image with glow effect */}
            <motion.div 
              className="relative w-40 h-40 mx-auto mb-8"
              variants={scaleIn}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full animate-spin-slow blur-sm"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-white text-5xl font-bold border-4 border-white/20">
                AB
              </div>
            </motion.div>
            
            {/* Main heading with gradient text */}
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-6"
              variants={fadeInUp}
            >
              <span className="gradient-text">Abhishek</span>
              <br />
              <span className="text-white">Badar</span>
            </motion.h1>
            
            {/* Animated role text */}
            <motion.div 
              className="relative mb-8"
              variants={fadeInUp}
            >
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">
                <span className="font-mono text-cyan-400">&lt;</span>
                <span className="gradient-text font-semibold">Full Stack Developer</span>
                <span className="font-mono text-cyan-400">&gt;</span>
              </p>
              <motion.div 
                className="flex flex-wrap justify-center gap-3 mb-6"
                variants={fadeInUp}
              >
                {['React', 'Laravel', 'Flutter', 'Node.js', 'Python'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-gray-300 hover:bg-white/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Crafting digital experiences with <span className="text-blue-400 font-semibold">precision</span> and 
              <span className="text-purple-400 font-semibold"> passion</span>. 
              Specialized in building scalable applications that make a difference.
            </motion.p>
          </div>

          {/* CTA Buttons with enhanced styling */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            variants={fadeInUp}
          >
            <a
              href="mailto:ab15.badar@gmail.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <Mail size={20} />
                Let's Connect
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://github.com/AbhishekBadar"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <Github size={20} />
                View Work
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/abhishekbadar"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <Linkedin size={20} />
                LinkedIn
              </div>
            </a>
          </motion.div>

          {/* Contact info with modern styling */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 text-gray-400 mb-16"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 group hover:text-white transition-colors duration-300">
              <Mail size={18} className="text-blue-400" />
              <span className="font-medium">ab15.badar@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 group hover:text-white transition-colors duration-300">
              <Phone size={18} className="text-green-400" />
              <span className="font-medium">+91 9096684842</span>
            </div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            variants={fadeIn}
          >
            <ArrowDown size={24} className="text-gray-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
