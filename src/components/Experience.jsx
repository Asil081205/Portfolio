import React from 'react';
import { motion } from 'framer-motion';
import { developmentJourney } from '../data/experience';
import { Milestone, CheckCircle2, Terminal, ArrowUpRight, Calendar, Compass } from 'lucide-react';
import { useMotion } from '../context/MotionContext';

export default function Experience() {
  const { motionEnabled } = useMotion();

  return (
    <section id="experience" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="border-b border-white/10 pb-8 mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span>EVOLUTION & TRACK RECORD</span>
        </div>

        <h2 className="text-section-clamp font-display uppercase tracking-tight text-[#F2EFEB]">
          DEVELOPMENT <span className="text-[#A09C9A]/50">JOURNEY.</span>
        </h2>
        <p className="mt-3 text-base md:text-lg text-[#A09C9A] max-w-2xl font-light">
          A verifiable progression of software development, client solutions, devops exposure, and foundational AI engineering.
        </p>
      </div>

      {/* Elegant Vertical Timeline */}
      <div className="relative border-l border-white/15 pl-6 md:pl-12 ml-3 md:ml-6 space-y-12 md:space-y-16">
        {developmentJourney.map((item, index) => (
          <motion.div
            key={item.phase}
            initial={motionEnabled ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: motionEnabled ? 0.5 : 0.1 }}
            className="relative group"
          >
            {/* Timeline Node Point with Accent Pulse */}
            <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[#090909] border-2 border-accent group-hover:scale-125 transition-transform">
              <div className="w-1.5 h-1.5 rounded-full bg-accent m-auto mt-[3px]" />
            </div>

            {/* Timeline Item Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#111111] border border-white/10 group-hover:border-white/20 transition-all">
              {/* Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-accent/15 text-accent font-bold">
                    PHASE {item.phase}
                  </span>
                  <span className="text-white/30">/</span>
                  <span className="text-[#A09C9A] tracking-wider">{item.category}</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/80 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{item.year}</span>
                </div>
              </div>

              {/* Title & Focus */}
              <h3 className="text-xl md:text-3xl font-display uppercase tracking-tight text-white mb-1">
                {item.title}
              </h3>
              <div className="font-mono text-xs text-accent mb-4">
                {item.focus}
              </div>

              <p className="text-sm md:text-base text-[#A09C9A] leading-relaxed mb-6 font-light">
                {item.description}
              </p>

              {/* Verified Highlights */}
              <div className="space-y-2 mb-6">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#F2EFEB]/90 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 text-[11px] font-mono text-[#F2EFEB]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
