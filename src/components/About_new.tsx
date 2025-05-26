import { GraduationCap, Award, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../hooks/useScrollAnimation'

const About = () => {
  const { ref, controls } = useScrollAnimation()

  return (
    <motion.section 
      ref={ref}
      id="about" 
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-5xl font-black text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-6"
              variants={fadeInLeft}
            >
              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="text-blue-400" size={32} />
                  <h3 className="text-2xl font-bold text-white">My Mission</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate software developer who thrives on building innovative solutions 
                  that bridge the gap between complex problems and elegant code. My journey in tech 
                  has been driven by curiosity and a relentless pursuit of excellence.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Currently at <span className="text-blue-400 font-semibold">Refyne</span>, I've architected 
                  systems serving 150+ users, automated workflows reducing manual effort by 80%, and built 
                  intelligent solutions using cutting-edge technologies.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I believe in writing code that not only works but tells a story—clean, maintainable, 
                  and scalable solutions that stand the test of time.
                </p>
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
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">B.Tech in Information Technology</h4>
                  <p className="text-blue-400 font-medium">Shri Ramdeobaba College of Engineering and Management</p>
                  <p className="text-gray-400">2020 - 2024 | CGPA: 8.48/10</p>
                  <div className="mt-4 p-4 bg-white/5 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <strong>Key Coursework:</strong> Data Structures & Algorithms, Database Systems, 
                      Computer Networks, Machine Learning, Software Engineering
                    </p>
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
