import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Zap, ZapOff, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useMotion } from '../context/MotionContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { motionEnabled, toggleMotion } = useMotion();

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'work', 'about', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: motionEnabled ? 'smooth' : 'auto' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090909]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2 tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Back to top"
        >
          <span className="font-display text-2xl tracking-wider text-[#F2EFEB] transition-colors group-hover:text-accent">
            {siteConfig.personal.displayName}
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-[#A09C9A]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors hover:text-[#F2EFEB] focus:outline-none focus-visible:text-accent ${
                  isActive ? 'text-[#F2EFEB] font-medium' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          {/* Motion Toggle Button */}
          <button
            onClick={toggleMotion}
            aria-label={motionEnabled ? 'Disable non-essential animations' : 'Enable animations'}
            title={`Motion: ${motionEnabled ? 'ON' : 'OFF'}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-accent/40 text-[11px] font-mono transition-all text-[#A09C9A] hover:text-[#F2EFEB]"
          >
            {motionEnabled ? (
              <>
                <Zap className="w-3.5 h-3.5 text-accent" />
                <span>MOTION ON</span>
              </>
            ) : (
              <>
                <ZapOff className="w-3.5 h-3.5 text-secondary-text" />
                <span>MOTION OFF</span>
              </>
            )}
          </button>

          {/* Quick CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#181818] border border-white/15 text-[#F2EFEB] hover:border-accent hover:text-white transition-all duration-200 group"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </a>
        </nav>

        {/* Mobile Menu & Motion Toggle Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleMotion}
            aria-label="Toggle motion effects"
            className="p-2 rounded-full border border-white/10 bg-white/[0.05] text-[#A09C9A]"
          >
            {motionEnabled ? <Zap className="w-4 h-4 text-accent" /> : <ZapOff className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F2EFEB] hover:text-accent transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0c0c0c]/98 border-b border-white/15 backdrop-blur-xl px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-xl font-display tracking-wider text-[#F2EFEB] hover:text-accent transition-colors py-2 border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#A09C9A]">0{idx + 1}</span>
                </a>
              ))}
              
              <div className="pt-4 flex flex-col gap-3 font-mono text-xs text-[#A09C9A]">
                <div className="flex items-center justify-between">
                  <span>ANIMATION STATE</span>
                  <button
                    onClick={toggleMotion}
                    className="px-3 py-1 rounded border border-white/20 text-[#F2EFEB]"
                  >
                    {motionEnabled ? 'ENABLED' : 'REDUCED'}
                  </button>
                </div>
                <div className="text-[11px] text-[#A09C9A]/70 pt-2">
                  {siteConfig.personal.location}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
