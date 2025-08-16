import { ArrowUpRight, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      year: '2024',
      title: 'Save Image As',
      category: 'Chrome Extension',
      description: 'A browser extension that transforms how users save images online. Built with vanilla JavaScript and Chrome APIs, it provides intelligent naming suggestions and streamlined download management.',
      metrics: '100+ active users',
      technologies: ['JavaScript', 'Chrome APIs', 'Manifest V3'],
      links: {
        live: 'https://chromewebstore.google.com/detail/save-image-as/bcngajhkkkhfalgljjjjbjacjcdlophj',
        github: 'https://github.com/AbhishekBadar'
      },
      featured: true
    },
    {
      year: '2024',
      title: 'DoSpaces Plugin',
      category: 'Open Source',
      description: 'An open-source plugin that seamlessly integrates osTicket with DigitalOcean Spaces, enabling efficient attachment management and reducing support response times.',
      metrics: '30% efficiency improvement',
      technologies: ['PHP', 'DigitalOcean Spaces', 'REST API'],
      links: {
        github: 'https://github.com/AbhishekBadar'
      }
    },
    {
      year: '2023',
      title: 'Traffic Density Analyzer',
      category: 'AI/ML Project',
      description: 'An intelligent traffic management system using computer vision to analyze real-time traffic density and optimize signal timing, contributing to smart city infrastructure.',
      metrics: '25% congestion reduction',
      technologies: ['Python', 'YOLO', 'OpenCV', 'Machine Learning'],
      links: {
        github: 'https://github.com/AbhishekBadar/Traffic-Density-Analyzer'
      }
    },
    {
      year: '2023',
      title: 'PuzzleIT',
      category: 'Web Application',
      description: 'An immersive escape room experience built for the web, featuring complex puzzles and real-time collaboration. Designed to test critical thinking and problem-solving skills.',
      metrics: '200+ participants',
      technologies: ['React', 'Redux', 'MongoDB', 'Node.js'],
      links: {
        github: 'https://github.com/AbhishekBadar/puzzleIT'
      }
    }
  ]

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="space-y-16">
          <div className="max-w-2xl">
            <h2 className="text-headline mb-6">Selected Projects</h2>
            <p className="text-body-lg text-gray-600">
              A curated selection of projects that showcase my approach to solving complex 
              problems through thoughtful design and robust engineering.
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="card-minimal group">
                <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                  {/* Year */}
                  <div className="md:col-span-2">
                    <div className="text-label text-gray-400 font-mono">
                      {project.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-title">{project.title}</h3>
                        <span className="badge text-xs">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-body text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="text-label text-blue-600 font-medium">
                        {project.metrics}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge badge-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="md:col-span-3 flex flex-col items-start md:items-end gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link group flex items-center gap-2"
                      >
                        View Live
                        <ArrowUpRight 
                          size={14} 
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                        />
                      </a>
                    )}
                    
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link flex items-center gap-2"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
