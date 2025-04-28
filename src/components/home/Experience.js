'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FiHexagon } from 'react-icons/fi';
import { RiRobot2Line, RiCodeSSlashLine, RiLightbulbFlashLine, RiRocketLine } from 'react-icons/ri';

export default function ExperiencesSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  
  const experiences = [
    {
      role: "Lead Content Creator",
      organization: "Think Again Lab",
      description: "Started as an intern and grew to lead content creation and development for robotics and innovation projects, focusing on AI/ML, robotics, 3D printing, and web development.",
      period: "2023 - 2025",
      icon: <RiRobot2Line className="text-blue-500" size={28} />,
      color: "blue"
    },
    {
      role: "Vice President",
      organization: "Phoenix (Tech Club at NSEC)",
      description: "Vice President position, leading content, design, and community growth initiatives.",
      period: "2023 - 2024",
      icon: <RiCodeSSlashLine className="text-indigo-600" size={28} />,
      color: "indigo"
    },
    {
      role: "Lead",
      organization: "Entrepreneurship Cell (NSEC)",
      description: "Started as Dynamic Design Head before being promoted to Lead, managing design and entrepreneurial initiatives.",
      period: "2023 - 2024",
      icon: <RiLightbulbFlashLine className="text-teal-500" size={28} />,
      color: "teal"
    },
    {
      role: "Creative Strategist",
      organization: "Buzz (Startup)",
      description: "Developed user engagement strategies and creative assets during a 9-month journey with this startup.",
      period: "2022 - 2023",
      icon: <RiRocketLine className="text-red-500" size={28} />,
      color: "error"
    },
    {
      role: "B.Tech Graduate",
      organization: "Netaji Subhash Engineering College (NSEC)",
      description: "Completed Bachelor of Technology degree while actively participating in various technical clubs and entrepreneurial initiatives.",
      period: "2020 - 2024",
      icon: <RiCodeSSlashLine className="text-blue-500" size={28} />,
      color: "blue"
    }
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-32 bg-[#121212] relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-indigo-600"
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
        
        {/* Glowing accent */}
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 mb-70"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-teal-500 text-transparent bg-clip-text inline-block">
            Temporal Experience Matrix
          </h2>
          <p className="text-[#C5C5C5] max-w-2xl mx-auto">
            Navigate through my career timeline - each node represents a stepping stone in my professional evolution.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto relative"
          variants={timelineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full glow"></div>
          
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <TimelineItem 
                key={index} 
                experience={exp} 
                index={index} 
                isEven={isEven}
                itemVariants={itemVariants}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TimelineItem({ experience, index, isEven, itemVariants }) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const xPosition = useTransform(
    scrollYProgress, 
    [0, 0.5], 
    isEven ? [50, 0] : [-50, 0]
  );
  
  const colorMap = {
    blue: "from-blue-600 to-blue-500",
    indigo: "from-indigo-700 to-indigo-600",
    teal: "from-teal-600 to-teal-500",
    error: "from-red-600 to-red-500"
  };
  
  const gradientClass = colorMap[experience.color] || "from-blue-600 to-blue-500";
  
  return (
    <motion.div
      ref={itemRef}
      variants={itemVariants}
      className={`flex items-center mb-24 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
      style={{
        opacity,
        scale,
        x: xPosition
      }}
    >
      {/* Center node */}
      <div className="relative flex-shrink-0 z-10">
        <motion.div 
          className={`w-16 h-16 rounded-full bg-[#1E1E1E] flex items-center justify-center border-2 bg-gradient-to-r ${gradientClass}`}
          whileHover={{ scale: 1.1, rotate: 90 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {experience.icon}
        </motion.div>
      </div>
      
      {/* Content card */}
      <motion.div 
        className={`w-5/12 ${isEven ? 'mr-12' : 'ml-12'}`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="bg-[#1E1E1E] rounded-lg p-6 shadow-lg backdrop-blur-sm border border-gray-800 relative overflow-hidden">
          {/* Glowing accent */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-5 rounded-lg`}></div>
          
          {/* Tech decoration */}
          <div className="absolute top-2 right-2">
            <FiHexagon className="text-gray-700" size={32} />
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              {experience.role}
            </h3>
            <span className={`text-${experience.color === 'error' ? 'red' : experience.color}-500 text-sm font-medium px-3 py-1 rounded-full bg-gray-800`}>
              {experience.period}
            </span>
          </div>
          
          <h4 className={`text-${experience.color === 'error' ? 'red' : experience.color}-500 mb-3 text-lg font-medium`}>
            {experience.organization}
          </h4>
          
          <p className="text-[#C5C5C5] leading-relaxed">
            {experience.description}
          </p>
          
          {/* Highlight line */}
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${gradientClass} rounded-l-lg`}></div>
        </div>
      </motion.div>
    </motion.div>
  );
}