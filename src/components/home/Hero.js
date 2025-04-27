'use client';

import React from "react";

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 text-white">
        <div className="container mx-auto py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Creating Digital Experiences That Matter</h1>
            <p className="text-xl mb-8">I'm Sharandeep Mukhopadhyay, where web development, graphic design, and video storytelling converge to bring your vision to life.</p>
            <button className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-teal-500 transition duration-300">
              Let's Work Together
            </button>
          </div>
        </div>
      </section>
    );
}
