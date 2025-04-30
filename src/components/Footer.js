import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full mr-3"></div>
              <span className="font-bold text-lg">Sharacraft<span className="text-indigo-400">Studios</span></span>
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Creating digital solutions that help businesses stand out and succeed in the online world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-teal-400 transition duration-300 text-sm sm:text-base">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-teal-400 transition duration-300 text-sm sm:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-300 hover:text-teal-400 transition duration-300 text-sm sm:text-base">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-teal-400 transition duration-300 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1">
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="text-indigo-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-all">info@sharacraft.Studio</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-indigo-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+91 98001 59277</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Kolkata - 700094</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Subscribe to get latest updates and news</p>
            <form className="flex flex-col sm:flex-row">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 rounded-full text-center md:text-left sm:rounded-l-full sm:rounded-r-none bg-[#252525] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full sm:rounded-l-none sm:rounded-r-full hover:bg-teal-500 transition duration-300 mt-2 sm:mt-0 text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300">
              <Github size={20} />
            </a>
          </div>
          <p className="text-gray-300 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Sharacraft Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
