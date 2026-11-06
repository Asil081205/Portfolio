import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowUpRight, Search, Download } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useMotion } from '../context/MotionContext';

export default function Navbar({ onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { motionEnabled } = useMotion();

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

          {/* Quick Search / Command Palette Trigger */}
          {onOpenPalette && (
            <button
              onClick={onOpenPalette}
              aria-label="Open Command Palette"
              title="Quick Search (Ctrl+K / ⌘K)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-accent/40 text-[11px] font-mono transition-all text-[#A09C9A] hover:text-[#F2EFEB]"
            >
              <Search className="w-3.5 h-3.5 text-accent" />
              <span>SEARCH</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.2 rounded bg-white/10 text-[9px] text-white/60">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Download Resume Link */}
          <a
            href={siteConfig.contact.resumePdf}
            download="Asil-Jamesha-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 text-[11px] font-mono transition-all text-[#F2EFEB]"
            title="Download Verified Resume PDF"
          >
            <Download className="w-3.5 h-3.5 text-accent" />
            <span>RESUME</span>
          </a>

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

        {/* Mobile Menu Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {onOpenPalette && (
            <button
              onClick={onOpenPalette}
              aria-label="Search"
              className="p-2 rounded-full border border-white/10 bg-white/[0.05] text-[#A09C9A]"
            >
              <Search className="w-4 h-4 text-accent" />
            </button>
          )}

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
              
              <a
                href={siteConfig.contact.resumePdf}
                download="Asil-Jamesha-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-base font-mono tracking-wider text-white bg-accent/15 border border-accent/40 rounded-xl px-4 py-3 hover:bg-accent hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-accent" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </div>
                <span className="font-mono text-xs">CV</span>
              </a>

              <div className="pt-4 flex flex-col gap-2 font-mono text-xs text-[#A09C9A]">
                <div className="text-[11px] text-[#A09C9A]/70">
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

