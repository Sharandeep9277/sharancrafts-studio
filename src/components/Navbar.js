'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-[#1E1E1E] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-700 rounded-full mr-3"></div>
            <span className="font-bold text-xl">Sharacraft<span className="text-indigo-400">Studios</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 justify-center items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="font-medium hover:text-teal-400 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-500 transition duration-300"
            >
              Hire Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-t border-gray-700 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4 justify-center items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="font-medium hover:text-teal-400 transition duration-300 py-2"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact" 
                className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-500 transition duration-300 text-center mt-2"
                onClick={toggleMenu}
              >
                Hire Me
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}