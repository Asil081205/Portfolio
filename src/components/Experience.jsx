import React from 'react';
import { motion } from 'framer-motion';
import { internships } from '../data/experience';
import { siteConfig } from '../config/site';
import { Calendar, Building2, CheckCircle2, Award, Terminal, Trophy, Sparkles } from 'lucide-react';
import { useMotion } from '../context/MotionContext';

export default function Experience() {
  const { motionEnabled } = useMotion();

  return (
    <section id="experience" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="border-b border-white/10 pb-8 mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span>PROFESSIONAL TRACK RECORD</span>
        </div>

        <h2 className="text-section-clamp font-display uppercase tracking-tight text-[#F2EFEB]">
          INTERNSHIP <span className="text-[#A09C9A]/50">EXPERIENCE.</span>
        </h2>
        <p className="mt-3 text-base md:text-lg text-[#A09C9A] max-w-2xl font-light">
          Real industry-oriented development experience, engineering scalable tools, cloud concepts, and machine learning pipelines.
        </p>
      </div>

      {/* Cinematic Professional Experience Timeline */}
      <div className="relative border-l border-white/15 pl-6 md:pl-12 ml-3 md:ml-6 space-y-12 md:space-y-16">
        {internships.map((intern, index) => (
          <motion.div
            key={intern.company}
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
              {/* Meta Row: Period & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-accent/15 text-accent font-bold">
                    0{index + 1}
                  </span>
                  <span className="text-white/30">/</span>
                  <span className="text-[#A09C9A] tracking-wider uppercase">{intern.badge}</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/80 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{intern.period}</span>
                </div>
              </div>

              {/* Role Title & Organization */}
              <h3 className="text-xl md:text-3xl font-display uppercase tracking-tight text-white mb-1">
                {intern.role}
              </h3>
              <div className="flex items-center gap-2 font-mono text-xs text-accent mb-6 font-semibold">
                <Building2 className="w-3.5 h-3.5 text-accent" />
                <span>{intern.company}</span>
                <span className="text-white/30">·</span>
                <span className="text-[#A09C9A] font-normal">{intern.location}</span>
              </div>

              {/* Responsibilities Checklist */}
              <div className="space-y-2.5 mb-6">
                {intern.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#F2EFEB]/90 font-mono leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {intern.tech.map((t) => (
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

      {/* Certifications & Industry Recognition Tier */}
      <div className="mt-20 pt-16 border-t border-white/10">
        <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-6">
          <Award className="w-4 h-4 text-accent" />
          <span>VERIFIED CERTIFICATIONS & ACHIEVEMENTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121212] border border-white/10 flex flex-col justify-between hover:border-accent/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#A09C9A] mb-3">
                  <span>{cert.category}</span>
                  <span className="px-2 py-0.5 rounded bg-accent/15 text-accent text-[10px] font-bold">
                    {cert.badge}
                  </span>
                </div>
                <h4 className="text-base md:text-lg font-bold text-white mb-2">
                  {cert.title}
                </h4>
              </div>
              <div className="font-mono text-xs text-accent mt-4">
                ISSUED BY {cert.issuer}
              </div>
            </div>
          ))}

          {/* Hackathon Achievement Card */}
          {siteConfig.achievements.map((ach, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#161616] to-[#0e0e0e] border border-accent/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#A09C9A] mb-3">
                  <span className="flex items-center gap-1.5 text-accent font-bold">
                    <Trophy className="w-3.5 h-3.5" />
                    ACHIEVEMENT
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[10px] font-mono">
                    VERIFIED
                  </span>
                </div>
                <h4 className="text-base md:text-lg font-bold text-white mb-2">
                  {ach.title}
                </h4>
                <p className="text-xs text-[#A09C9A] leading-relaxed">
                  {ach.detail}
                </p>
              </div>
              <div className="font-mono text-xs text-white/50 mt-4">
                {ach.organization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
