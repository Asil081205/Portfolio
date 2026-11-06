import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Code2, Sparkles, Terminal, MapPin, Radio } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useMotion } from '../context/MotionContext';

export default function Hero() {
  const { motionEnabled } = useMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motionEnabled ? 0.12 : 0,
        delayChildren: motionEnabled ? 0.1 : 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: motionEnabled ? 28 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: motionEnabled ? 0.75 : 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: motionEnabled ? 1 : 0.2, ease: [0.16, 1, 0.3, 1] },
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
      {/* Background Architectural Geometry (No fake photos) */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-40">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/5 blur-[140px] -top-24 -right-24 pointer-events-none" />
        <div className="absolute w-[450px] h-[450px] rounded-full bg-white/[0.02] blur-[120px] bottom-10 left-10 pointer-events-none" />
        <svg
          className="w-full h-full opacity-20 stroke-white/[0.08]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Main Content Block */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full my-auto flex flex-col justify-center"
      >
        {/* Top Meta Line: Subtitle & Status Badge */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-[#F2EFEB] font-medium">
              FULL STACK DEVELOPER · CHENNAI, INDIA
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#121212]/80 font-mono text-[11px] text-[#A09C9A]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AVAILABLE FOR ROLES & INNOVATION</span>
          </div>
        </motion.div>

        {/* Oversized Cinematic Typography: ASIL JAMESHA */}
        <div className="relative select-none py-2">
          <motion.div variants={itemVariants} className="overflow-hidden">
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

          {/* Editorial Watermark / Geometric Accent */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end text-right font-mono text-xs text-[#A09C9A]/60 space-y-1 pointer-events-none">
            <span className="text-accent font-bold">EST. 2023 — 2027</span>
            <span>AI & DATA SCIENCE · ANNA UNIV</span>
            <span className="text-white/40">13.0827° N, 80.2707° E</span>
          </div>
        </div>

        {/* Horizontal Divider Line with Accent Notch */}
        <motion.div
          variants={lineVariants}
          className="origin-left h-[1px] w-full bg-gradient-to-r from-accent via-white/20 to-transparent my-6 md:my-8 relative"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#090909] border border-accent rotate-45" />
        </motion.div>

        {/* Supporting Intro & Secondary Line */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between"
        >
          <div className="lg:col-span-7">
            <p className="text-lg md:text-2xl text-[#F2EFEB] font-normal leading-relaxed">
              "{siteConfig.personal.shortBio}"
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs md:text-sm text-accent tracking-wider font-semibold">
              <Terminal className="w-4 h-4 inline-block text-accent" />
              <span>{siteConfig.personal.subHeadline}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-4">
            <button
              onClick={() => handleScrollTo('work')}
              className="px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-mono text-xs tracking-widest font-semibold flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-7 py-3.5 rounded-full border border-white/20 hover:border-white text-[#F2EFEB] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] font-mono text-xs tracking-widest font-medium flex items-center gap-2 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Hero Anchor Bar: Location, Coordinates, Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="w-full pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A09C9A]"
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>CHENNAI, TAMIL NADU</span>
          </div>
          <div className="hidden sm:inline-block text-white/30">/</div>
          <div className="hidden sm:inline-block">
            SPECIALIZING IN <span className="text-[#F2EFEB]">MERN & AI SYSTEMS</span>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <button
          onClick={() => handleScrollTo('work')}
          className="group flex items-center gap-2 text-xs font-mono text-[#A09C9A] hover:text-[#F2EFEB] transition-colors"
          aria-label="Scroll down to work"
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
