'use client';

import { useState } from 'react';
import { FaCircle, FaChevronRight, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AssignTutors",
      category: "Web Development",
      description: "A full-stack platform connecting students with tutors, built with Next.js and MongoDB.",
      longDescription: "AssignTutors is an advanced matching platform that uses AI algorithms to pair students with the perfect tutors based on learning style, subject matter expertise, and scheduling compatibility. The application features real-time video conferencing, interactive whiteboards, and a comprehensive resource library.",
      tech: ["Next.js", "MongoDB", "WebRTC", "TailwindCSS"],
      projectUrl: "https://assigntutors.com"
    },
    {
      title: "Think Again Academy",
      category: "Web Development",
      description: "Educational platform featuring interactive learning experiences and resources.",
      longDescription: "Think Again Academy reimagines online education with immersive, gamified learning journeys. The platform adapts to individual learning patterns and provides personalized pathways through complex subjects. Features include 3D concept visualization, progress tracking, and community challenges.",
      tech: ["React", "Three.js", "GraphQL", "Firebase"],
      projectUrl: "https://academy.thinkagainlab.com"
    },
    {
      title: "Roadyssey",
      category: "Graphic Design",
      description: "Complete brand identity and logo design for a travel-focused company.",
      longDescription: "Roadyssey required a visual language that captured the excitement of spontaneous travel while maintaining a premium feel. The brand identity includes a dynamic logo system that changes based on destination, a custom icon set representing global landmarks, and a responsive design system for all digital touchpoints.",
      tech: ["Illustrator", "Photoshop", "After Effects", "Figma"],
      projectUrl: "https://www.canva.com/design/DAGE06UZ9bY/YzIDEqhb9MlycFS6lmnm9Q/edit?utm_content=DAGE06UZ9bY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "Augment Yogi",
      category: "Graphic Design",
      description: "Modern logo and visual assets for a wellness and technology brand.",
      longDescription: "Augment Yogi bridges the gap between ancient wellness practices and cutting-edge technology. The visual identity uses sacred geometry and digital elements to create a harmonious balance. The brand system includes animated logo variations, AR experience design, and a comprehensive style guide.",
      tech: ["Photoshop", "Illustrator", "Blender", "Unity"],
      projectUrl: "https://www.canva.com/design/DAGE06UZ9bY/YzIDEqhb9MlycFS6lmnm9Q/edit?utm_content=DAGE06UZ9bY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "Event After-movie",
      category: "Video Editing",
      description: "Dynamic recap video showcasing highlights from a tech conference.",
      longDescription: "This after-movie for FutureTech Conference 2024 captures the energy and innovation of the event through kinetic typography, dynamic transitions, and atmospheric sound design. The narrative structure builds from keynote highlights to networking moments, culminating in a powerful call to action for next year's event.",
      tech: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"],
      projectUrl: "https://www.youtube.com/watch?v=khmlB6MNFGk"
    },
    // {
    //   title: "Product Demo",
    //   category: "Video Editing",
    //   description: "Engaging demonstration video created with Premiere Pro and After Effects.",
    //   longDescription: "This product demonstration for NeoSense AR Glasses showcases the device's capabilities through a combination of real footage and motion graphics. The video utilizes 3D tracking, clean UI animations, and seamless transitions to highlight features without overwhelming the viewer. Special attention was paid to sound design to enhance the futuristic feel.",
    //   tech: ["After Effects", "Cinema 4D", "Premiere Pro", "Mocha Pro"],
    //   projectUrl: "https://youtube.com/example"
    // }
  ];

  const categoryColors = {
    "Web Development": "from-blue-500 to-indigo-600",
    "Graphic Design": "from-teal-500 to-indigo-600",
    "Video Editing": "from-blue-500 to-teal-500"
  };

  return (
    <section className="py-20 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#121212] to-[#121212] z-10"></div>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
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
        
        <div className="absolute h-96 w-96 rounded-full bg-blue-500 filter blur-3xl opacity-10 -bottom-20 -right-20"></div>
        <div className="absolute h-96 w-96 rounded-full bg-indigo-600 filter blur-3xl opacity-10 -top-20 -left-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 inline-block">// Featured Projects</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore my digital innovation portfolio spanning immersive web experiences, 
            futuristic visual design, and cutting-edge motion graphics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Preview Image */}
              <div className={`h-48 bg-gradient-to-br ${categoryColors[project.category]} relative flex items-center justify-center`}>
                {/* Placeholder for project preview image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={`/api/placeholder/400/200`} alt={project.title} className="w-full h-full object-cover opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent"></div>
                </div>
                
                {/* Futuristic Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-12 flex items-center">
                  <div className="ml-4 flex space-x-2">
                    <FaCircle className="text-blue-500 text-xs animate-pulse" />
                    <FaCircle className="text-teal-500 text-xs animate-pulse delay-100" />
                    <FaCircle className="text-indigo-600 text-xs animate-pulse delay-200" />
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${categoryColors[project.category]} text-white font-medium`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-[#C5C5C5] mb-4 line-clamp-2">{project.description}</p>
                <div className="flex justify-between items-center">
                  <button className="text-blue-500 font-medium flex items-center hover:text-teal-500 transition-colors duration-300">
                    <span>View Details</span>
                    <FaChevronRight className="ml-1 text-xs" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="group relative overflow-hidden bg-transparent border-2 border-blue-500 text-blue-500 font-semibold py-3 px-8 rounded-full hover:text-white transition duration-300">
            <span className="relative z-10">View All Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </button>
        </div>
      </div>

      {/* Modal for detailed project view */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1E1E1E] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-gray-700 shadow-2xl"
            >
              <div className="relative">
                {/* Header image */}
                <div className={`h-64 bg-gradient-to-br ${categoryColors[selectedProject.category]} relative`}>
                  <img src={`/api/placeholder/1200/500`} alt={selectedProject.title} className="w-full h-full object-cover opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent"></div>
                </div>
                
                {/* Close button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[selectedProject.category]} text-white font-medium`}>
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="text-[#C5C5C5] mb-8 leading-relaxed">{selectedProject.longDescription}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm font-medium text-[#C5C5C5]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={selectedProject.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-500 transition-all duration-300"
                  >
                    <span>Visit Project</span>
                    <FaExternalLinkAlt size={14} />
                  </a>
                  
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-[#C5C5C5] hover:text-white transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
