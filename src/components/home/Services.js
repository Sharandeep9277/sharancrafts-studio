// src/components/ServicesSection.jsx
'use client';

import { useState } from 'react';
import { Code, Paintbrush, Video } from 'lucide-react';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState('web');

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
      price: "$1500"
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
      price: "$800"
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
      price: "$1200"
    }
  };

  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I offer specialized services in web development, graphic design, and video editing to help bring your vision to life with the perfect blend of creativity and technical expertise.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12">
          {Object.keys(services).map((key) => (
            <button
              key={key}
              className={`py-3 px-8 mx-2 mb-4 rounded-full font-semibold transition duration-300 ${
                selectedService === key
                  ? 'bg-blue-500 text-white'
                  : 'bg-[#1E1E1E] text-gray-300 hover:bg-teal-900'
              }`}
              onClick={() => setSelectedService(key)}
            >
              {services[key].title}
            </button>
          ))}
        </div>

        <div className="bg-[#1E1E1E] rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
              {services[selectedService].icon}
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">{services[selectedService].title}</h3>
              <p className="text-gray-300 mb-6">{services[selectedService].description}</p>
              <ul className="mb-6">
                {services[selectedService].features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <span className="bg-teal-900 text-teal-400 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-400">Starting at {services[selectedService].price}</span>
                <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-500 transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}