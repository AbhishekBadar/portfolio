import { Calendar, MapPin, Building, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, fadeInLeft, staggerContainer } from '../hooks/useScrollAnimation'

const Experience = () => {
  const { ref, controls } = useScrollAnimation()
  const experiences = [
    {
      company: 'Refyne',
      position: 'Associate Software Developer',
      duration: 'Aug 2024 - Feb 2025',
      location: 'Bangalore',
      type: 'Full-time',
      achievements: [
        'Designed and implemented an internal CRM system for sales, risk, and growth teams, serving over 150 active users, utilizing serverless architecture with Firebase Authentication and Firestore database.',
        'Leveraged N8N to automate task creation and Slack-based notifications within the internal CRM. Integrated ClickUp API to sync over 75 tickets per month, cutting manual effort by 40%.',
        'Created scripts for data migration, cleaning and transferring over 50,000 records to Firebase collections, achieving 99.8% data accuracy.',
        'Built an automated onboarding system for the in-house CRM using N8N and Slack API to fetch user details from slack and generate Firebase records with Admin SDK, reducing manual workload by 80%.',
        'Built a zone-specific email threading system using N8N and the Gmail API. Parsed threads, stored metadata in Firebase, and displayed conversations in CRM deals for real-time visibility.',
        'Developed a semantic HR chatbot using N8N, Slack API, and Pinecone vector DB. Integrated directly into the company Slack workspace, enabling all employees to query HR policies and receive accurate, real-time answers via an LLM.',
        'Built an end-to-end resume evaluation pipeline using N8N, integrating Google Drive to fetch resumes. Applied OCR using Mistral LLM to extract text content and semantically scored resumes against dynamically sourced job descriptions.'
      ]
    },
    {
      company: 'Xeo Information Systems',
      position: 'Software Developer Intern',
      duration: 'Dec 2023 - Jul 2024',
      location: 'Hybrid',
      type: 'Internship',
      achievements: [
        'Built a mobile application from scratch using Flutterflow and Laravel, achieving a 25% faster development time compared to traditional methods.',
        'Designed and developed a custom authentication API using HMAC code verification, ensuring secure and tamper-proof access to the application.',
        'Integrated Firebase Cloud Messaging (FCM) to support over 500 notifications/month, increasing app engagement by 20%.',
        'Implemented a robust payment gateway solution, enabling seamless and secure transactions.'
      ]
    }
  ]

  return (
    <motion.section 
      ref={ref}
      id="experience" 
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-5xl font-black text-white mb-6">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building impactful solutions and driving innovation through code
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-12"
            variants={staggerContainer}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={fadeInLeft}
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block" />
                )}
                
                <div className="glass-card p-8 relative group hover:scale-[1.02] transition-all duration-500">
                  {/* Timeline dot */}
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-black hidden md:block group-hover:scale-125 transition-transform duration-300" />
                  
                  <div className="mb-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{exp.position}</h3>
                        <div className="flex items-center gap-3 mb-3">
                          <Building className="text-blue-400" size={20} />
                          <h4 className="text-xl font-semibold text-blue-400">{exp.company}</h4>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                          exp.type === 'Full-time' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-blue-400" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-green-400" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-4 flex items-center gap-3 text-lg">
                      <Zap size={20} className="text-yellow-400" />
                      Key Achievements & Impact
                    </h5>
                    <div className="grid gap-4">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 group/achievement">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-3 flex-shrink-0 group-hover/achievement:scale-150 transition-transform duration-300" />
                          <span className="text-gray-300 leading-relaxed group-hover/achievement:text-white transition-colors duration-300">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
