// src/components/ExperiencesSection.jsx
'use client';

import { FaCircle } from 'react-icons/fa';


export default function PortfolioSection() {

  const projects = [
    {
      title: "AssignTutors",
      category: "Web Development",
      description: "A full-stack platform connecting students with tutors, built with Next.js and MongoDB."
    },
    {
      title: "Think Again Academy",
      category: "Web Development",
      description: "Educational platform featuring interactive learning experiences and resources."
    },
    {
      title: "Roadyssey",
      category: "Graphic Design",
      description: "Complete brand identity and logo design for a travel-focused company."
    },
    {
      title: "Augment Yogi",
      category: "Graphic Design",
      description: "Modern logo and visual assets for a wellness and technology brand."
    },
    {
      title: "Event After-movie",
      category: "Video Editing",
      description: "Dynamic recap video showcasing highlights from a tech conference."
    },
    {
      title: "Product Demo",
      category: "Video Editing",
      description: "Engaging demonstration video created with Premiere Pro and After Effects."
    }
  ];

  return (
    <section className="py-20 bg-[#1E1E1E]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Check out some of my recent work across web development, graphic design, and video editing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#252525] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <div className="bg-gray-700 h-48"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-indigo-400">{project.category}</span>
                <button className="text-teal-400 font-medium hover:text-teal-300 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="border border-teal-500 text-teal-500 font-semibold py-3 px-8 rounded-full hover:bg-teal-900 transition duration-300">
          View All Projects
        </button>
      </div>
    </div>
  </section>
  );
}