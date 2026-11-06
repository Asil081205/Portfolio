import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, FileText, Mail, MapPin, Sparkles, Terminal } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useMotion } from '../context/MotionContext';

export default function Hero({ onOpenPalette }) {
  const { motionEnabled } = useMotion();
  const [useOriginalPhoto, setUseOriginalPhoto] = React.useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motionEnabled ? 0.1 : 0,
        delayChildren: motionEnabled ? 0.05 : 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: motionEnabled ? 24 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: motionEnabled ? 0.7 : 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, scale: motionEnabled ? 0.96 : 1, y: motionEnabled ? 30 : 0 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: motionEnabled ? 0.9 : 0.2, ease: [0.16, 1, 0.3, 1], delay: motionEnabled ? 0.2 : 0 },
    },
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: motionEnabled ? 'smooth' : 'auto' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-10 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Architectural Geometry */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-40">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/8 blur-[150px] -top-24 -right-24 pointer-events-none" />
        <div className="absolute w-[450px] h-[450px] rounded-full bg-white/[0.02] blur-[120px] bottom-10 left-10 pointer-events-none" />
        <svg
          className="w-full h-full opacity-20 stroke-white/[0.08]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid-pattern-hero" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
        </svg>
      </div>

      {/* Main Content Composition: Split Grid of Typography + Real Portrait */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative"
      >
        {/* Left Column: Big Typography & Content */}
        <div className="lg:col-span-7 flex flex-col justify-center z-20">
          {/* Small Label & Active Beacon */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-4 mb-4 md:mb-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
              <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-[#F2EFEB] font-medium">
                {siteConfig.personal.badge}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#121212]/80 font-mono text-[11px] text-[#A09C9A]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>AVAILABLE IN CHENNAI, INDIA</span>
            </div>
          </motion.div>

          {/* Massive Oversized Name: ASIL JAMESHA */}
          <div className="relative select-none py-1">
            <motion.div variants={itemVariants} className="overflow-visible">
              <h1 className="font-display uppercase text-hero-clamp text-[#F2EFEB] tracking-tighter leading-none flex flex-col">
                <span className="relative inline-block hover:text-accent transition-colors duration-300">
                  ASIL
                  <span className="text-accent">.</span>
                </span>
                <span className="relative inline-block text-[#A09C9A]/40 hover:text-[#F2EFEB] transition-colors duration-300">
                  JAMESHA
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Supporting Text */}
          <motion.div variants={itemVariants} className="mt-4 md:mt-6">
            <p className="text-lg md:text-2xl text-[#F2EFEB] font-normal leading-relaxed max-w-xl">
              "{siteConfig.personal.shortBio}"
            </p>

            {/* Specialization Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs text-accent tracking-wider font-semibold">
              <Terminal className="w-4 h-4 inline-block text-accent" />
              <span>FULL STACK DEVELOPMENT</span>
              <span className="text-white/30">/</span>
              <span>AI INTEGRATION</span>
              <span className="text-white/30">/</span>
              <span>MACHINE LEARNING</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            {/* Explore Projects Button */}
            <button
              onClick={() => handleScrollTo('work')}
              className="px-6 md:px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-mono text-xs tracking-widest font-semibold flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            {/* Download Resume Button (Real PDF) */}
            <a
              href={siteConfig.contact.resumePdf}
              download="Asil-Jamesha-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-7 py-3.5 rounded-full bg-white text-black hover:bg-accent hover:text-white font-mono text-xs tracking-widest font-bold flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              <span>DOWNLOAD RESUME</span>
            </a>

            {/* Contact Me Button */}
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-5 md:px-6 py-3.5 rounded-full border border-white/20 hover:border-white text-[#F2EFEB] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] font-mono text-xs tracking-widest font-medium flex items-center gap-2 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>CONTACT ME</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Cinematic Editorial Portrait */}
        <motion.div
          variants={portraitVariants}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
        >
          {/* Crimson aura / backdrop depth glow */}
          <div className="absolute w-[320px] md:w-[420px] h-[380px] md:h-[480px] rounded-full bg-accent/25 blur-[110px] pointer-events-none -z-10" />
          
          {/* Geometric Accent Frame Behind Portrait */}
          <div className="absolute inset-x-4 md:inset-x-8 inset-y-4 rounded-3xl border border-white/10 bg-white/[0.02] pointer-events-none -z-10" />

          {/* Portrait Container */}
          <div className={`relative w-full max-w-[340px] md:max-w-[420px] lg:max-w-[460px] aspect-[4/5] flex items-end justify-center rounded-3xl overflow-hidden transition-all duration-300 ${
            useOriginalPhoto
              ? 'bg-[#141414] border border-white/15 p-2 shadow-2xl'
              : 'border border-white/5'
          }`}>
            {/* Crystal Clear Editorial Portrait */}
            {useOriginalPhoto ? (
              <img
                src={siteConfig.contact.portraitOriginal}
                alt="Asil Jamesha T — Software Developer"
                className="w-full h-full object-cover object-top rounded-2xl select-none"
                loading="eager"
              />
            ) : (
              <div className="relative w-full h-full flex items-end justify-center">
                <img
                  src={siteConfig.contact.portraitTransparent}
                  alt="Asil Jamesha T — Software Developer"
                  className="w-full h-full object-contain object-bottom select-none"
                  loading="eager"
                />
                {/* Minimal soft bottom blend */}
                <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#090909] to-transparent pointer-events-none" />
              </div>
            )}

            {/* Subtle Editorial Monogram Tag */}
            <div className="absolute bottom-4 left-4 z-20 font-mono text-[11px] text-[#A09C9A] bg-[#0c0c0c]/90 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>ASIL JAMESHA T · CHENNAI</span>
            </div>

            {/* Top Controls: View Mode Toggle & View CV */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setUseOriginalPhoto(!useOriginalPhoto)}
                className="font-mono text-[10px] tracking-wider text-[#F2EFEB] hover:text-white bg-[#0c0c0c]/90 hover:bg-[#1a1a1a] border border-white/15 hover:border-accent backdrop-blur-md px-2.5 py-1.5 rounded-full transition-colors shadow-lg"
                title="Toggle Portrait View Mode"
              >
                {useOriginalPhoto ? 'STUDIO HD' : 'CUTOUT'}
              </button>

              <a
                href={siteConfig.contact.resumePdf}
                download="Asil-Jamesha-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="View CV"
                className="font-mono text-[10px] text-white hover:text-accent bg-[#0c0c0c]/90 border border-white/15 hover:border-accent backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors shadow-lg"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>VIEW CV</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Hero Anchor Bar: Location, Coordinates, Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="w-full pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A09C9A] mt-8"
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>CHENNAI, INDIA</span>
          </div>
          <div className="hidden sm:inline-block text-white/30">/</div>
          <div className="hidden sm:inline-block">
            MERN STACK · AI & MACHINE LEARNING · FLUTTER
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <button
          onClick={() => handleScrollTo('work')}
          className="group flex items-center gap-2 text-xs font-mono text-[#A09C9A] hover:text-[#F2EFEB] transition-colors"
          aria-label="Scroll down to projects"
        >
          <span className="tracking-widest">SCROLL TO DISCOVER</span>
          <div className="w-6 h-10 rounded-full border border-white/20 p-1 flex justify-center group-hover:border-accent transition-colors">
            <motion.div
              animate={motionEnabled ? { y: [0, 14, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-2 rounded-full bg-accent"
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
