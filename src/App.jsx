import React from 'react';
import { MotionProvider } from './context/MotionContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionProvider>
      <div className="relative min-h-screen bg-[#090909] text-[#F2EFEB] selection:bg-accent selection:text-white">
        {/* Subtle noise grain layer */}
        <div className="fixed inset-0 pointer-events-none bg-noise z-40 opacity-25" />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </MotionProvider>
  );
}
