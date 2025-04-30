// src/components/ServicesSection.jsx
'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Code, Paintbrush, Video, Hexagon, ChevronRight, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState('web');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const services = {
    web: {
      title: "Web Development",
      description: "Full-stack web applications built with Next.js (Serverless) and MongoDB that are responsive, fast, and user-friendly.",
      icon: <Code size={48} className="text-blue-500" />,
      features: [
        "Next.js (Serverless) development",
        "MongoDB integration",
        "Responsive web design",
        "Interactive UI/UX"
      ],
      price: "₹50k - ₹150k",
      color: "blue"
    },
    design: {
      title: "Graphic Design",
      description: "Creative visual solutions and brand identities that help your business stand out in the market.",
      icon: <Paintbrush size={48} className="text-teal-500" />,
      features: [
        "Logo design",
        "Brand identity",
        "Social media graphics",
        "Print materials"
      ],
      price: "₹4k - ₹30k",
      color: "teal"
    },
    video: {
      title: "Video Editing",
      description: "Professional video editing services to bring your story to life with dynamic visuals and effects.",
      icon: <Video size={48} className="text-indigo-500" />,
      features: [
        "Trailers & event after-movies",
        "Advertisement reels",
        "Demo videos",
        "Motion graphics"
      ],
      price: "₹5k - ₹35k",
      color: "indigo"
    }
  };

  // Get the current selected service color
  const currentColor = services[selectedService].color;
  const colorClasses = {
    blue: {
      primary: "bg-blue-500",
      secondary: "bg-blue-700",
      text: "text-blue-500",
      hover: "hover:bg-blue-600",
      gradient: "from-blue-500 to-indigo-600",
      border: "border-blue-500",
      glow: "shadow-blue-500/20"
    },
    teal: {
      primary: "bg-teal-500",
      secondary: "bg-teal-700",
      text: "text-teal-500",
      hover: "hover:bg-teal-600",
      gradient: "from-teal-500 to-indigo-600",
      border: "border-teal-500",
      glow: "shadow-teal-500/20"
    },
    indigo: {
      primary: "bg-indigo-500",
      secondary: "bg-indigo-700",
      text: "text-indigo-500",
      hover: "hover:bg-indigo-600",
      gradient: "from-indigo-500 to-blue-500",
      border: "border-indigo-500",
      glow: "shadow-indigo-500/20"
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
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

  const featureVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: i => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  const buttonHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-[#121212] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-teal-500' : 'bg-indigo-600'
            }`}
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
        
        {/* Glowing accent based on selected service */}
        <motion.div 
          className={`absolute -bottom-20 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-10 ${
            currentColor === 'blue' ? 'bg-blue-500' : 
            currentColor === 'teal' ? 'bg-teal-500' : 'bg-indigo-600'
          }`}
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className={`absolute -top-20 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-10 ${
            currentColor === 'blue' ? 'bg-indigo-600' : 
            currentColor === 'teal' ? 'bg-blue-500' : 'bg-teal-500'
          }`}
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Connector to next section */}
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
              Service Deployment Matrix
            </span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"
              initial={{ width: "0%" }}
              animate={{ width: isInView ? "100%" : "0%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className="text-[#C5C5C5] max-w-2xl mx-auto">
            Specialized service modules ready for integration with your vision - combining technical precision with creative intelligence.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.keys(services).map((key, index) => (
            <motion.button
              key={key}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 0 10px 0 ${
                  services[key].color === 'blue' ? 'rgba(59, 130, 246, 0.4)' : 
                  services[key].color === 'teal' ? 'rgba(20, 184, 166, 0.4)' : 
                  'rgba(99, 102, 241, 0.4)'
                }`
              }}
              whileTap={{ scale: 0.98 }}
              className={`relative py-3 px-8 mx-3 mb-4 rounded-lg font-semibold transition-all duration-300 border ${
                selectedService === key
                  ? `${colorClasses[services[key].color].primary} text-white border-transparent`
                  : `bg-[#1E1E1E]/60 text-[#C5C5C5] border-gray-700 hover:border-${services[key].color}-500/50 backdrop-blur-sm`
              } overflow-hidden`}
              onClick={() => setSelectedService(key)}
            >
              {/* Subtle tech pattern */}
              {selectedService === key && (
                <motion.div 
                  className="absolute inset-0 opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        width: "30px",
                        height: "30px",
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        border: `1px solid ${services[key].color === 'blue' ? '#60A5FA' : services[key].color === 'teal' ? '#2DD4BF' : '#818CF8'}`,
                        borderRadius: i % 2 === 0 ? '50%' : '0%'
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        rotate: [0, 90],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </motion.div>
              )}
              <span className="relative flex items-center">
                {services[key].title}
                {selectedService === key && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-2"
                  >
                    <ChevronRight size={16} />
                  </motion.span>
                )}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`bg-[#1E1E1E] rounded-xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-800 relative backdrop-blur-sm overflow-hidden ${colorClasses[currentColor].glow}`}
          >
            {/* Tech pattern background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute h-full w-1/2 right-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${colorClasses[currentColor].text}`}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    initial={false}
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Hexagon size={i % 2 === 0 ? 40 : 24} opacity={0.3} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Animated accent line */}
            <motion.div 
              className={`absolute left-0 top-0 h-full w-1 ${colorClasses[currentColor].primary}`}
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.6 }}
            />

            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/3 flex justify-center mb-8 md:mb-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={`p-6 rounded-full bg-[#1A1A1A] border ${currentColor === 'blue' ? 'border-blue-500/30' : currentColor === 'teal' ? 'border-teal-500/30' : 'border-indigo-500/30'} relative`}>
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        `0 0 0 0 ${currentColor === 'blue' ? 'rgba(59, 130, 246, 0)' : currentColor === 'teal' ? 'rgba(20, 184, 166, 0)' : 'rgba(99, 102, 241, 0)'}`,
                        `0 0 20px 5px ${currentColor === 'blue' ? 'rgba(59, 130, 246, 0.4)' : currentColor === 'teal' ? 'rgba(20, 184, 166, 0.4)' : 'rgba(99, 102, 241, 0.4)'}`,
                        `0 0 0 0 ${currentColor === 'blue' ? 'rgba(59, 130, 246, 0)' : currentColor === 'teal' ? 'rgba(20, 184, 166, 0)' : 'rgba(99, 102, 241, 0)'}`
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  {services[selectedService].icon}
                </div>
              </motion.div>
              
              <div className="md:w-2/3 md:pl-8">
                <motion.h3 
                  className={`text-2xl font-bold mb-4 ${colorClasses[currentColor].text}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {services[selectedService].title}
                </motion.h3>
                
                <motion.p 
                  className="text-[#C5C5C5] mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {services[selectedService].description}
                </motion.p>
                
                <motion.ul 
                  className="mb-6 space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {services[selectedService].features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      custom={index}
                      variants={featureVariants}
                      className="flex items-center"
                    >
                      <motion.span 
                        className={`${currentColor === 'blue' ? 'bg-blue-900 text-blue-400' : currentColor === 'teal' ? 'bg-teal-900 text-teal-400' : 'bg-indigo-900 text-indigo-400'} p-1 rounded-full mr-3 flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.span>
                      <span className="text-[#C5C5C5]">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className={`text-2xl font-bold ${colorClasses[currentColor].text}`}>
                    Starting at {services[selectedService].price}
                  </span>
                  
                  <motion.button 
                    className={`${colorClasses[currentColor].primary} text-white font-semibold py-2 px-6 rounded-lg ${colorClasses[currentColor].hover} transition-all duration-300 flex items-center gap-2 relative overflow-hidden group`}
                    variants={buttonHoverVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <span>Initialize Project</span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                    
                    {/* Animated highlight overlay */}
                    <motion.span 
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      animate={{
                        opacity: [0, 0.1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
