// src/components/ExperiencesSection.jsx
'use client';

import { FaCircle } from 'react-icons/fa';

export default function ExperiencesSection() {
  const experiences = [
    {
      role: "Lead Content Creator",
      organization: "Think Again Lab",
      description: "Started as an intern and grew to lead content creation and development for robotics and innovation projects, focusing on AI/ML, robotics, 3D printing, and web development.",
      period: "2023 - 2025"
    },
    {
      role: "Vice President",
      organization: "Phoenix (Tech Club at NSEC)",
      description: "Vice President position, leading content, design, and community growth initiatives.",
      period: "2023 - 2024"
    },
    {
      role: "Lead",
      organization: "Entrepreneurship Cell (NSEC)",
      description: "Started as Dynamic Design Head before being promoted to Lead, managing design and entrepreneurial initiatives.",
      period: "2023 - 2024"
    },
    {
      role: "Creative Strategist",
      organization: "Buzz (Startup)",
      description: "Developed user engagement strategies and creative assets during a 9-month journey with this startup.",
      period: "2022 - 2023"
    }
  ];

  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Journey & Experience</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From intern to leader, here's a glimpse of my professional growth and experiences.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative pl-8 border-l-2 border-indigo-500">
              <div className="absolute -left-2 top-0">
                <FaCircle className="text-indigo-500" size={16} />
              </div>
              <div className="bg-[#1E1E1E] p-6 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-indigo-400 text-sm font-medium">{exp.period}</span>
                </div>
                <h4 className="text-teal-400 mb-3">{exp.organization}</h4>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
          
          <div className="mb-8 relative pl-8 border-l-2 border-indigo-500">
            <div className="absolute -left-2 top-0">
              <FaCircle className="text-indigo-500" size={16} />
            </div>
            <div className="bg-[#1E1E1E] p-6 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">B.Tech Graduate</h3>
                <span className="text-indigo-400 text-sm font-medium">2020 - 2024</span>
              </div>
              <h4 className="text-teal-400 mb-3">Netaji Subhash Engineering College (NSEC)</h4>
              <p className="text-gray-300">Completed Bachelor of Technology degree while actively participating in various technical clubs and entrepreneurial initiatives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}