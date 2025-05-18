import { Cloud, Zap, Palette, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "../hooks/useScrollAnimation";

const Skills = () => {
  const { ref, controls } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette className="text-pink-400" size={28} />,
      skills: [
        "React",
        "Tailwind CSS",
        "Flutter",
        "HTML5",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Backend",
      icon: <Terminal className="text-green-400" size={28} />,
      skills: [
        "Laravel",
        "PHP",
        "Python",
        "REST APIs",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Database & Cloud",
      icon: <Cloud className="text-blue-400" size={28} />,
      skills: [
        "Firebase",
        "MySQL",
        "Supabase",
        "Docker",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Tools & Others",
      icon: <Zap className="text-yellow-400" size={28} />,
      skills: [
        "Git",
        "N8N",
        "Pinecone",
        "LLM Integration",
      ],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-5xl font-black text-white mb-6">
              <span className="gradient-text">Technical</span> Arsenal
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Weapons of choice for building exceptional digital experiences
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={staggerContainer}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group glass-card p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
                variants={scaleIn}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300"
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 4 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 group/skill"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover/skill:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
