// src/components/ExperiencesSection.jsx
'use client';

import { FaCircle } from 'react-icons/fa';

export default function ContactSection() {

  return (
    <section className="py-20 bg-[#121212]">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Get in touch to discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="bg-[#1E1E1E] rounded-xl shadow-lg p-8">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#252525] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#252525] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#252525] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Project Subject"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#252525] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your project"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-teal-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}