'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiReact, 
  SiAdobeillustrator, 
  SiAdobephotoshop, 
  SiCanva, 
  SiAdobepremierepro, 
  SiAdobeaftereffects,
  SiTailwindcss,
  SiTypescript,
  SiFirebase
} from 'react-icons/si';
import { FiHexagon } from 'react-icons/fi';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const skillCategories = [
    {
      title: "Web Development",
      icon: <SiReact />,
      color: "blue",
      skills: [
        { name: "Next.js (Serverless)", icon: <SiNextdotjs size={16} /> },
        { name: "MongoDB", icon: <SiMongodb size={16} /> },
        { name: "React.js", icon: <SiReact size={16} /> },
        { name: "TailwindCSS", icon: <SiTailwindcss size={16} /> },
        { name: "TypeScript", icon: <SiTypescript size={16} /> }
      ]
    },
    {
      title: "Graphic Design",
      icon: <SiAdobeillustrator />,
      color: "teal",
      skills: [
        { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={16} /> },
        { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={16} /> },
        { name: "Canva", icon: <SiCanva size={16} /> }
      ]
    },
    {
      title: "Video Editing",
      icon: <SiAdobepremierepro />,
      color: "indigo",
      skills: [
        { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro size={16} /> },
        { name: "Adobe After Effects", icon: <SiAdobeaftereffects size={16} /> },
        { name: "Canva", icon: <SiCanva size={16} /> },
        { name: "Firebase", icon: <SiFirebase size={16} /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: i => ({
      x: 0,
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  const colorMap = {
    blue: {
      bgGradient: "from-blue-900/20 to-blue-600/5",
      iconBg: "bg-blue-900",
      iconColor: "text-blue-400",
      border: "border-blue-700/30",
      glow: "group-hover:shadow-blue-500/20"
    },
    teal: {
      bgGradient: "from-teal-900/20 to-teal-600/5",
      iconBg: "bg-teal-900",
      iconColor: "text-teal-400",
      border: "border-teal-700/30",
      glow: "group-hover:shadow-teal-500/20"
    },
    indigo: {
      bgGradient: "from-indigo-900/20 to-indigo-600/5",
      iconBg: "bg-indigo-900",
      iconColor: "text-indigo-400",
      border: "border-indigo-700/30",
      glow: "group-hover:shadow-indigo-500/20"
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-[#121212] relative overflow-hidden"
    >
      {/* Tech grid background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      {/* Animated particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Glowing accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl opacity-5"></div>

      {/* Connector to Experience Section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#121212] z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-teal-500">
              Tech Proficiency Matrix
            </span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"
              initial={{ width: "0%" }}
              animate={{ width: isInView ? "100%" : "0%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className="text-[#C5C5C5] max-w-2xl mx-auto">
            My digital arsenal - tools and technologies I leverage to transform concepts into reality
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className={`relative overflow-hidden group bg-[#1E1E1E] p-6 rounded-xl border ${colorMap[category.color].border} shadow-lg hover:shadow-xl transition-all duration-300`}
              whileHover={{ 
                y: -5,
                boxShadow: `0 15px 30px -10px rgba(0, 0, 0, 0.3), 0 0 10px 0 ${category.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' : category.color === 'teal' ? 'rgba(20, 184, 166, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`
              }}
            >
              {/* Tech decoration */}
              <div className="absolute top-2 right-2 opacity-30">
                <FiHexagon className="text-gray-700" size={32} />
              </div>
              
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[category.color].bgGradient} rounded-xl`}></div>
              
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-6 ${colorMap[category.color].iconColor} flex items-center`}>
                  <span className={`mr-3 p-2 rounded-lg ${colorMap[category.color].iconBg} flex items-center justify-center`}>
                    {category.icon}
                  </span>
                  {category.title}
                </h3>
                
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li 
                      key={skillIndex}
                      custom={skillIndex}
                      variants={skillItemVariants}
                      className="flex items-center"
                    >
                      <motion.span 
                        className={`${colorMap[category.color].iconBg} ${colorMap[category.color].iconColor} p-2 rounded-full mr-3 flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <motion.span 
                        className="text-[#C5C5C5]"
                        whileHover={{ x: 5, color: "#FFFFFF" }}
                      >
                        {skill.name}
                      </motion.span>
                      
                      {/* Tech connection line */}
                      <motion.div 
                        className={`absolute left-0 top-0 h-full w-1 ${colorMap[category.color].iconBg} opacity-40 rounded-l-lg`}
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;