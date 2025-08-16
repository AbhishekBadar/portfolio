import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ab15.badar@gmail.com',
      href: 'mailto:ab15.badar@gmail.com',
      description: 'Best for detailed discussions'
    },
    {
      icon: MessageCircle,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'www.linkedin.com/in/abhishekbadar',
      description: 'Professional networking'
    }
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <h2 className="text-headline">Let's Work Together</h2>
              
              <div className="space-y-6 text-body-lg text-gray-600">
                <p>
                  I'm always interested in new challenges and opportunities to create 
                  meaningful digital experiences. Whether you have a specific project 
                  in mind or just want to explore possibilities, I'd love to hear from you.
                </p>
                
                <p>
                  I work with startups, established companies, and individual entrepreneurs 
                  who value quality, innovation, and attention to detail. Let's discuss 
                  how we can bring your ideas to life.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-title">How I Can Help</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-body font-semibold text-black">
                    Web Development
                  </h4>
                  <p className="text-body text-gray-600">
                    Full-stack web applications, from concept to deployment
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-body font-semibold text-black">
                    Browser Extensions
                  </h4>
                  <p className="text-body text-gray-600">
                    Custom Chrome extensions to enhance productivity
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-body font-semibold text-black">
                    Technical Consulting
                  </h4>
                  <p className="text-body text-gray-600">
                    Architecture decisions and technology strategy
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-body font-semibold text-black">
                    Code Review
                  </h4>
                  <p className="text-body text-gray-600">
                    Improving code quality and development practices
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact methods */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <h3 className="text-title">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon
                  
                  return (
                    <a
                      key={index}
                      href={method.href}
                      className="card border-gray-200 hover:border-gray-300 transition-all duration-200 group block"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                          <IconComponent className="w-5 h-5 text-gray-600" />
                        </div>
                        
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-body font-semibold text-black">
                              {method.label}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                          </div>
                          <div className="text-label text-gray-600">
                            {method.description}
                          </div>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
            
            <div className="card bg-gray-50 border-gray-200">
              <div className="space-y-4">
                <div className="text-label font-semibold text-black uppercase tracking-wider">
                  Response Time
                </div>
                <p className="text-body text-gray-600">
                  I typically respond to emails within 24 hours during business days. 
                  For urgent matters, LinkedIn messages often get faster attention.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright notice centered at bottom */}
        <div className="pt-16 border-t border-gray-200 mt-16">
          <p className="text-label text-gray-500 text-center">
            © {new Date().getFullYear()} Abhishek Badar. Crafted with passion and attention to detail.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
