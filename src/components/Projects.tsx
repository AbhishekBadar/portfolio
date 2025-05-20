import { Github, Code, Users, BarChart3, Chrome } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn, staggerContainer } from '../hooks/useScrollAnimation'

const Projects = () => {
  const { ref, controls } = useScrollAnimation()
  const projects = [
    {
      title: 'Save Image As - Chrome Extension',
      description: 'Published Chrome extension that simplifies image saving with custom filename options and download management. Featured on Chrome Web Store with 100+ active users and growing user base.',
      technologies: ['JavaScript', 'Chrome APIs', 'HTML5', 'CSS3', 'Manifest V3'],
      chrome: 'https://chromewebstore.google.com/detail/save-image-as/bcngajhkkkhfalgljjjjbjacjcdlophj',
      github: 'https://github.com/AbhishekBadar',
      impact: '100+ active users',
      type: 'Chrome Extension'
    },
    {
      title: 'DoSpaces',
      description: 'Developed an open source plugin to offload ticket attachments of osTicket to DigitalOcean Spaces, generating secure public links for agents and improving response efficiency by 30%.',
      technologies: ['PHP', 'DigitalOcean Spaces', 'osTicket', 'REST API'],
      github: 'https://github.com/AbhishekBadar',
      impact: '30% efficiency improvement',
      type: 'Open Source Plugin'
    },
    {
      title: 'Traffic Density Analyzer and Dynamic Signal Timer',
      description: 'Designed a real-time traffic management system using YOLO and Python for vehicle detection and dynamic signal timing, reducing congestion by 25%.',
      technologies: ['Python', 'YOLO', 'Computer Vision', 'Machine Learning', 'OpenCV'],
      github: 'https://github.com/AbhishekBadar/Traffic-Density-Analyzer',
      impact: '25% congestion reduction',
      type: 'AI/ML Project'
    },
    {
      title: 'PuzzleIT',
      description: 'Developed a web-based escape-room-themed puzzle game using React, Redux, and MongoDB. Engaged 200+ participants in solving challenges that tested critical thinking and problem-solving skills.',
      technologies: ['React', 'Redux', 'MongoDB', 'Node.js', 'Express.js'],
      github: 'https://github.com/AbhishekBadar/puzzleIT',
      impact: '200+ active participants',
      type: 'Web Game'
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Chrome Extension':
        return <Chrome className="text-orange-600" size={20} />
      case 'Open Source Plugin':
        return <Code className="text-green-600" size={20} />
      case 'AI/ML Project':
        return <BarChart3 className="text-purple-600" size={20} />
      case 'Web Game':
        return <Users className="text-blue-600" size={20} />
      default:
        return <Code className="text-gray-600" size={20} />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Chrome Extension':
        return 'bg-orange-100 text-orange-800'
      case 'Open Source Plugin':
        return 'bg-green-100 text-green-800'
      case 'AI/ML Project':
        return 'bg-purple-100 text-purple-800'
      case 'Web Game':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <motion.section 
      ref={ref}
      id="projects" 
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-5xl font-black text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforming ideas into reality through innovative solutions and cutting-edge technology
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="group glass-card p-8 hover:scale-105 hover:shadow-2xl relative overflow-hidden transition-all duration-500"
                variants={scaleIn}
              >
                {/* Project type indicator */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className={`absolute top-2 right-2 w-16 h-16 transform rotate-45 ${
                    project.type === 'Chrome Extension' ? 'bg-orange-500/20' :
                    project.type === 'Open Source Plugin' ? 'bg-green-500/20' :
                    project.type === 'AI/ML Project' ? 'bg-purple-500/20' :
                    'bg-blue-500/20'
                  }`}>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {getTypeIcon(project.type)}
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeColor(project.type)}`}>
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 rounded-full text-xs font-medium hover:bg-white/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <BarChart3 size={16} className="text-green-400" />
                      <span className="text-green-400">{project.impact}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 text-sm font-medium border border-gray-600 hover:border-gray-500 group/btn"
                    >
                      <Github size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                      Code
                    </a>
                    {project.chrome && (
                      <a
                        href={project.chrome}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 text-sm font-medium group/btn"
                      >
                        <Chrome size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                        Chrome Store
                      </a>
                    )}
                    {/* {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-sm font-medium group/btn"
                      >
                        <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                        Demo
                      </a>
                    )} */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center">
            <a
              href="https://github.com/AbhishekBadar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <Github size={24} />
              Explore All Projects
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
