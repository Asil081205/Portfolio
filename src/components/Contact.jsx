import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, Send, Sparkles, Download, Phone } from 'lucide-react';
import { useMotion } from '../context/MotionContext';

export default function Contact() {
  const { motionEnabled } = useMotion();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background radial flare */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-accent/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Label */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>INITIATE COLLABORATION</span>
        </div>

        {/* Big Closing Headline */}
        <h2 className="text-section-clamp font-display uppercase tracking-tight text-[#F2EFEB] leading-none">
          HAVE AN IDEA?
          <br />
          <span className="text-accent">LET'S BUILD IT.</span>
        </h2>

        {/* Supporting text */}
        <p className="text-base md:text-xl text-[#A09C9A] max-w-2xl mx-auto font-light leading-relaxed">
          I'm open to opportunities, collaborations, and conversations around development, technology, and product ideas.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl shadow-accent/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL ME</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-6 py-4 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 text-[#F2EFEB] font-mono text-xs tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-1"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">EMAIL COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#A09C9A]" />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>

          <a
            href={siteConfig.contact.resumePdf}
            download="Asil-Jamesha-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-full bg-white text-black hover:bg-accent hover:text-white font-mono text-xs font-bold tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10"
          >
            <Download className="w-4 h-4 text-accent" />
            <span>DOWNLOAD RESUME</span>
          </a>

          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 text-[#F2EFEB] font-mono text-xs tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-1"
          >
            <Linkedin className="w-4 h-4 text-accent" />
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A09C9A]" />
          </a>

          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 text-[#F2EFEB] font-mono text-xs tracking-wider flex items-center gap-2 transition-all transform hover:-translate-y-1"
          >
            <Github className="w-4 h-4" />
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A09C9A]" />
          </a>
        </div>

        {/* Direct Contact Meta Details */}
        <div className="pt-6 font-mono text-xs text-[#A09C9A] flex flex-wrap items-center justify-center gap-6">
          <div>
            EMAIL:{' '}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-white hover:text-accent select-all underline decoration-accent decoration-2 underline-offset-4"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <span className="text-white/20 hidden sm:inline">|</span>
          <div>
            PHONE:{' '}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-white hover:text-accent font-semibold"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

