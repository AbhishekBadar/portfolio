import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle, PenTool, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../hooks/useScrollAnimation'

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

const Contact = () => {
  const { ref, controls } = useScrollAnimation()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required' })
      return false
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Email is required' })
      return false
    }
    if (!formData.email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email' })
      return false
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required' })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setStatus({ type: 'loading' })

    try {
      // Method 1: Try using a simple form submission to a service
      // You can replace this with your preferred form service (Formspree, Netlify Forms, etc.)
      
      // Method 2: Fallback to mailto (always works)
      const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nSent from your portfolio website`
      )
      
      const mailtoLink = `mailto:ab15.badar@gmail.com?subject=${subject}&body=${body}`
      
      // Open email client
      window.open(mailtoLink, '_blank')
      
      // Show success message
      setStatus({ 
        type: 'success', 
        message: 'Email client opened! Your message has been prepared. Please send it from your email client.' 
      })
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' })
        setStatus({ type: 'idle' })
      }, 5000)
      
    } catch (err) {
      console.error('Form submission error:', err)
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or contact me directly at ab15.badar@gmail.com' 
      })
    }
  }

  return (
    <motion.section 
      ref={ref}
      id="contact" 
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-5xl font-black text-white mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can build something amazing together.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={fadeInLeft}>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <MessageCircle className="text-blue-400" size={32} />
                Get In Touch
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:ab15.badar@gmail.com"
                  className="group glass-card p-6 hover:scale-105 transition-all duration-300 block"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Mail className="text-blue-400" size={28} />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">Email</div>
                      <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">ab15.badar@gmail.com</div>
                    </div>
                  </div>
                </a>
                
                <a
                  href="tel:9096684842"
                  className="group glass-card p-6 hover:scale-105 transition-all duration-300 block"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors duration-300">
                      <Phone className="text-green-400" size={28} />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">Phone</div>
                      <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">+91 9096684842</div>
                    </div>
                  </div>
                </a>
                
                <div className="glass-card p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                      <MapPin className="text-purple-400" size={28} />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">Location</div>
                      <div className="text-gray-400">India</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-bold text-white mb-6">Connect on Social</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/AbhishekBadar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <Github size={28} className="group-hover:text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com/in/abhishekbadar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={28} className="group-hover:text-blue-100" />
                  </a>
                  <a
                    href="https://medium.com/@NomadNotes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
                    title="Read my blog on Medium - NomadNotes"
                  >
                    <PenTool size={28} className="group-hover:text-green-100" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={fadeInRight}>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Send className="text-purple-400" size={32} />
                Send Message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Status Message */}
                {status.type !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center gap-3 ${
                      status.type === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                        : status.type === 'error'
                        ? 'bg-red-500/20 border border-red-500/30 text-red-400'
                        : 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                    }`}
                  >
                    {status.type === 'success' && <CheckCircle size={20} />}
                    {status.type === 'error' && <AlertCircle size={20} />}
                    {status.type === 'loading' && (
                      <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                    )}
                    <span className="text-sm font-medium">{status.message}</span>
                  </motion.div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/10 transition-all duration-300 outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/10 transition-all duration-300 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/10 transition-all duration-300 outline-none"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/10 transition-all duration-300 outline-none resize-vertical"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className={`w-full px-6 py-4 text-white rounded-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-2xl ${
                    status.type === 'loading'
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:shadow-blue-500/25'
                  }`}
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
                
                {/* Form Instructions */}
                <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <p className="text-sm text-gray-400 text-center">
                    📧 This form will open your email client with a pre-filled message. 
                    <br />
                    Alternatively, you can contact me directly at{' '}
                    <a 
                      href="mailto:ab15.badar@gmail.com" 
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      ab15.badar@gmail.com
                    </a>
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
