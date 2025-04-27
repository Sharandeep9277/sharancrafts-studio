// src/app/page.js
'use client';

import { useState } from 'react';
import { Code, Paintbrush, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/home/Services';
import ExperiencesSection from '@/components/home/Experience';
import PortfolioSection from '@/components/home/Portfolio';
import SkillsSection from '@/components/home/Skills';
import ContactSection from '@/components/home/Contact';
import AboutSection from '@/components/home/About';
import HeroSection from '@/components/home/Hero';

export default function Home() {

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Hero Section */}
      <HeroSection/>
      
      {/* About Section */}
      <AboutSection/>

      {/* Services Section */}
      <ServicesSection/>
      
      {/* Skills & Tools Section */}
      <SkillsSection/>

      {/* Journey & Experience Section */}
      <ExperiencesSection/>

      {/* Portfolio Section */}
      <PortfolioSection/>

      {/* Contact Section */}
      <ContactSection/>
    </main>
    <Footer />
    </>
  );
}