import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useMotion } from '../context/MotionContext';

export default function Footer() {
  const { motionEnabled } = useMotion();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: motionEnabled ? 'smooth' : 'auto',
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#090909] text-[#A09C9A] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-10 border-b border-white/5">
          <div className="space-y-2">
            <div className="font-display text-4xl md:text-5xl text-[#F2EFEB] tracking-tight">
              {siteConfig.personal.displayName}
              <span className="text-accent">.</span>
            </div>
            <div className="font-mono text-xs text-accent tracking-widest uppercase font-semibold">
              {siteConfig.personal.role}
            </div>
            <div className="font-mono text-xs text-[#A09C9A]">
              {siteConfig.personal.location}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2EFEB] hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2EFEB] hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-[#F2EFEB] hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-3 p-3 rounded-full border border-white/10 hover:border-accent text-white transition-all bg-white/[0.02] hover:bg-accent/10"
          >
            <span className="font-mono text-xs tracking-wider text-[#A09C9A] group-hover:text-white">TOP</span>
            <ArrowUp className="w-4 h-4 text-accent group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A09C9A]/70">
          <div>
            © {currentYear} {siteConfig.personal.fullName}. ALL RIGHTS RESERVED.
          </div>
          <div className="text-right">
            CINEMATIC EDITORIAL PORTFOLIO · VITE + REACT + TAILWIND + FRAMER MOTION
          </div>
        </div>
      </div>
    </footer>
  );
}
