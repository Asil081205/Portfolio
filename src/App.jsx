import React, { useState } from 'react';
import { MotionProvider } from './context/MotionContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <MotionProvider>
      <div className="relative min-h-screen bg-[#090909] text-[#F2EFEB] selection:bg-accent selection:text-white">
        {/* Custom magnetic follower cursor */}
        <CustomCursor />

        {/* Quick Command Palette (Cmd+K / Ctrl+K) */}
        <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />

        {/* Subtle noise grain layer */}
        <div className="fixed inset-0 pointer-events-none bg-noise z-40 opacity-25" />

        {/* Global Navigation */}
        <Navbar onOpenPalette={() => setPaletteOpen(true)} />

        {/* Main Content Sections */}
        <main id="main-content">
          <Hero onOpenPalette={() => setPaletteOpen(true)} />
          <Ticker />
          <Projects />
          <About />
          <Skills />
          <Ticker
            items={[
              'AWS & AZURE',
              'DOCKER',
              'TERRAFORM',
              'SOCKET.IO',
              'FULL STACK',
              'ELECTRON ARCHITECTURE',
              'MACHINE LEARNING',
              'ASIL JAMESHA',
            ]}
          />
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
