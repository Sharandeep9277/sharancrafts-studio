'use client';

import React from 'react';

export default function AboutSection() {
    return (
    <section className="py-20 bg-[#1E1E1E]">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="bg-gray-700 rounded-lg h-64 md:h-96 w-full"></div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">Hi, I'm <span className="text-indigo-400">Sharandeep</span></h2>
          <p className="text-gray-300 mb-6">
            A passionate creator at the intersection of web development, graphic designing, and video storytelling. I specialize in building powerful web applications using Next.js (Serverless) and MongoDB.
          </p>
          <p className="text-gray-300 mb-6">
            From designing logos for brands like Roadyssey and Augment Yogi to creating dynamic videos and developing full-stack applications, I bring ideas to life through multiple creative mediums.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-500 transition duration-300">
              View Portfolio
            </button>
            <button className="border border-teal-500 text-teal-500 font-semibold py-2 px-6 rounded-full hover:bg-teal-900 transition duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}