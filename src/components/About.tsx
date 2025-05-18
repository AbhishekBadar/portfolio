import { GraduationCap, Award, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../hooks/useScrollAnimation'
import { useParallax } from '../hooks/useParallax'

const About = () => {
  const { ref, controls } = useScrollAnimation()
  const { y: parallaxY1 } = useParallax(0.2)
  const { y: parallaxY2 } = useParallax(0.4)

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      {/* Background elements with parallax */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y: parallaxY1 }}
          className="absolute top-40 left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          style={{ y: parallaxY2 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-5xl font-black text-white mb-6">
              Meet <span className="gradient-text">Abhishek</span>
            </h2>
            {/* <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p> */}
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
  className="space-y-8 max-w-2xl mx-auto"
  variants={fadeInLeft}
>
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center gap-3 mb-6">
      <Info className="text-blue-400 bg-blue-500/20 rounded-full p-2" size={30} />
      <h3 className="text-3xl font-extrabold text-white">About Me</h3>
    </div>

    <div className="space-y-5">
      <p className="text-gray-200 text-base leading-relaxed">
        I’m a software developer who loves turning tough problems into clean, elegant code. At{" "}
        <span className="text-blue-400 font-semibold">Refyne</span>, I’ve:
      </p>

      <ul className="list-disc list-inside text-gray-200 text-base leading-relaxed space-y-2">
        <li>Architected systems supporting 150+ users</li>
        <li>Automated workflows—cutting manual effort by 70%</li>
        <li>Built intelligent tools with modern frameworks and cloud services</li>
      </ul>

      <p className="text-gray-200 text-base leading-relaxed">
         I’m currently deepening my AI know-how
        through a Minor at <span className="text-blue-400 font-semibold">IIT Ropar</span>, diving into neural networks,
        LLMs, NLP, and computer vision to shape more adaptive, context-aware applications.
      </p>

      <p className="text-gray-200 text-base leading-relaxed">
        Outside of code, I run <span className="text-blue-400 font-semibold">NomadNotes</span>, where I unpack
        development best practices, share the stories behind my projects, and explore emerging tech trends.
      </p>

      <p className="text-gray-200 text-base leading-relaxed">
        I believe in writing software that not only works but tells a story—clean, maintainable, and built to grow
        with you.
      </p>

      {/* --- Key Projects Section --- */}
      <div className="mt-8">
        <h4 className="text-xl font-semibold text-white mb-4">Key Projects</h4>
        <ul className="list-disc list-inside text-gray-200 space-y-3">
          <li>
            <span className="font-semibold text-blue-400">PuzzleIt:</span> Developed a web-based escape-room-themed puzzle game using React, Redux, and MongoDB, engaging 200+ participants in solving challenges that tested critical thinking and problem-solving skills.
          </li>
          <li>
            <span className="font-semibold text-blue-400">osTicket “dospaces” Plugin:</span> A Laravel
            package I built to store attachments directly in DigitalOcean Spaces, streamlining file management.
          </li>
          <li>
            <span className="font-semibold text-blue-400">HR Chatbot:</span> An automated Slack bot
            backed by Pinecone and LLMs for on-demand policy lookup and conversational HR support.
          </li>
        </ul>
      </div>
      {/* ----------------------------- */}
    </div>
  </div>
</motion.div>



            <motion.div 
              className="space-y-8"
              variants={fadeInRight}
            >
              {/* Education */}
              <motion.div 
                className="glass-card p-8 group hover:scale-105 transition-all duration-500"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
                    <GraduationCap className="text-blue-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-6">
                  {/* AI Minor */}
                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="text-xl font-semibold text-white">Minor in Artificial Intelligence</h4>
                    <p className="text-purple-400 font-medium">Indian Institute of Technology (IIT), Ropar</p>
                    <p className="text-gray-400">2024 - Present | Currently Pursuing</p>
                    <div className="mt-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <p className="text-sm text-gray-300">
                        <strong>Key Coursework:</strong> Python, Mathematics for ML, Neural Networks, 
                        Large Language Models (LLMs), Natural Language Processing (NLP), Computer Vision
                      </p>
                    </div>
                  </div>
                  
                  {/* B.Tech */}
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="text-xl font-semibold text-white">B.Tech in Information Technology</h4>
                    <p className="text-blue-400 font-medium">Shri Ramdeobaba College of Engineering and Management</p>
                    <p className="text-gray-400">2020 - 2024 | CGPA: 8.48/10</p>
                    <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <p className="text-sm text-gray-300">
                        <strong>Key Coursework:</strong> Data Structures & Algorithms, Database Systems, 
                        Computer Networks, Machine Learning, Software Engineering
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div 
                className="glass-card p-8 group hover:scale-105 transition-all duration-500"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Award className="text-purple-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <h4 className="font-semibold text-white">Microsoft Certified: Azure Fundamentals (AZ900)</h4>
                    <p className="text-gray-400 text-sm">Cloud computing and Azure services</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <h4 className="font-semibold text-white">Cisco Networking Academy: Programming Essentials in Python</h4>
                    <p className="text-gray-400 text-sm">Python programming fundamentals</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
