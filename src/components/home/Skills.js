import React from 'react';
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiReact, 
  SiAdobeillustrator, 
  SiAdobephotoshop, 
  SiCanva, 
  SiAdobepremierepro, 
  SiAdobeaftereffects 
} from 'react-icons/si';

const SkillsSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">My Tech & Creative Stack</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas from concept to reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
              <SiReact className="mr-2" />
              Web Development
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-blue-900 text-blue-400 p-2 rounded-full mr-3">
                  <SiNextdotjs size={16} />
                </span>
                <span className="text-gray-200">Next.js (Serverless)</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-900 text-blue-400 p-2 rounded-full mr-3">
                  <SiMongodb size={16} />
                </span>
                <span className="text-gray-200">MongoDB</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-900 text-blue-400 p-2 rounded-full mr-3">
                  <SiReact size={16} />
                </span>
                <span className="text-gray-200">React.js</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-teal-400 flex items-center">
              <SiAdobeillustrator className="mr-2" />
              Graphic Design
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-teal-900 text-teal-400 p-2 rounded-full mr-3">
                  <SiAdobeillustrator size={16} />
                </span>
                <span className="text-gray-200">Adobe Illustrator</span>
              </li>
              <li className="flex items-center">
                <span className="bg-teal-900 text-teal-400 p-2 rounded-full mr-3">
                  <SiAdobephotoshop size={16} />
                </span>
                <span className="text-gray-200">Adobe Photoshop</span>
              </li>
              <li className="flex items-center">
                <span className="bg-teal-900 text-teal-400 p-2 rounded-full mr-3">
                  <SiCanva size={16} />
                </span>
                <span className="text-gray-200">Canva</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-indigo-400 flex items-center">
              <SiAdobepremierepro className="mr-2" />
              Video Editing
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-indigo-900 text-indigo-400 p-2 rounded-full mr-3">
                  <SiAdobepremierepro size={16} />
                </span>
                <span className="text-gray-200">Adobe Premiere Pro</span>
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-900 text-indigo-400 p-2 rounded-full mr-3">
                  <SiAdobeaftereffects size={16} />
                </span>
                <span className="text-gray-200">Adobe After Effects</span>
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-900 text-indigo-400 p-2 rounded-full mr-3">
                  <SiCanva size={16} />
                </span>
                <span className="text-gray-200">Canva</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;