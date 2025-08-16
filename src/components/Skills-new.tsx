import { useState } from 'react'
import { Database, Cloud, Zap, Monitor } from 'lucide-react'

type SkillCategory = 'frontend' | 'backend' | 'cloud' | 'tools'

interface Skill {
  name: string
  level: number
  years: string
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend')
  
  const skillCategories = {
    frontend: {
      icon: Monitor,
      title: 'Frontend Magic',
      description: 'Crafting beautiful, interactive user experiences',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'React', level: 95, years: '3+' },
        { name: 'TypeScript', level: 90, years: '2+' },
        { name: 'Tailwind CSS', level: 92, years: '2+' },
        { name: 'Flutter', level: 80, years: '1+' }
      ]
    },
    backend: {
      icon: Database,
      title: 'Backend Power',
      description: 'Building robust, scalable server architectures',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Laravel', level: 85, years: '2+' },
        { name: 'PHP', level: 88, years: '2+' },
        { name: 'Python', level: 75, years: '1+' },
        { name: 'REST APIs', level: 90, years: '2+' }
      ]
    },
    cloud: {
      icon: Cloud,
      title: 'Database & Cloud',
      description: 'Managing data and deploying at scale',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Firebase', level: 85, years: '2+' },
        { name: 'MySQL', level: 88, years: '2+' },
        { name: 'Docker', level: 80, years: '1+' },
        { name: 'Supabase', level: 75, years: '1+' }
      ]
    },
    tools: {
      icon: Zap,
      title: 'Tools & Others',
      description: 'Essential tools for modern development',
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Git', level: 92, years: '3+' },
        { name: 'N8N', level: 85, years: '1+' },
        { name: 'Pinecone', level: 75, years: '1+' },
        { name: 'LLM Integration', level: 80, years: '1+' }
      ]
    }
  }

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-headline mb-6">Skills & Expertise</h2>
            <p className="text-body-lg text-gray-600">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Category selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {skillCategories[category].title}
              </button>
            ))}
          </div>

          {/* Active category display */}
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color} text-white`}>
                  {(() => {
                    const IconComponent = skillCategories[activeCategory].icon;
                    return <IconComponent className="w-6 h-6" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-title font-semibold">{skillCategories[activeCategory].title}</h3>
                  <p className="text-body text-gray-600">{skillCategories[activeCategory].description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill: Skill, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.years} experience</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-xs text-gray-500">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
