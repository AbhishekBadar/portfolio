const Experience = () => {
  const experiences = [
    {
      company: 'Freelancer',
      position: 'Full-Stack Developer',
      duration: 'Feb 2025 - Present',
      description: [
        'Building custom web applications and automation solutions for clients'
      ]
    },
    {
      company: 'Refyne',
      position: 'Associate Software Developer',
      duration: 'Aug 2024 - Feb 2025',
      description: [
        'Built an internal CRM for 150+ users; automated approvals & onboarding with n8n',
        'Engineered CRM features and orchestrated n8n workflows (approvals, alerts) to streamline ops',
        'Delivered Slack-integrated, serverless CRM modules with audit trails; reduced manual steps'
      ]
    },
    {
      company: 'Xeo Information Systems',
      position: 'Software Developer Intern', 
      duration: 'Dec 2023 - Jul 2024',
      description: [
        'Shipped a production mobile app with custom HMAC auth, payment gateway, and push notifications',
        'Implemented secure login & payment flows on Laravel REST APIs; designed the FlutterFlow UI',
        'Architected an end-to-end mobile experience—auth, payments, notifications—with robust error handling'
      ]
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="space-y-16">
          <div>
            <h2 className="text-headline mb-6">Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-b border-gray-100 pb-8 last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <span className="text-sm text-gray-500 font-medium">{exp.duration}</span>
                </div>
                <div className="text-indigo-600 font-medium mb-2">{exp.company}</div>
                <ul className="space-y-1">
                  {exp.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-body text-gray-600 flex items-start">
                      <span className="text-indigo-600 mr-2 mt-1 leading-none">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
