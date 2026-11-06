import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import { GraduationCap, Award, BookCheck, MapPin, Compass } from 'lucide-react';
import { useMotion } from '../context/MotionContext';

export default function Education() {
  const { motionEnabled } = useMotion();

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-6">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span>ACADEMIC CREDENTIALS</span>
      </div>

      <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#131313] to-[#0c0c0c] border border-white/10 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[90px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#A09C9A]">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span>UNDERGRADUATE DEGREE · 2023 — 2027</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white leading-tight">
              {siteConfig.education.degree}
            </h3>

            <div className="text-base md:text-xl text-[#F2EFEB] font-normal">
              {siteConfig.education.institution}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-mono text-[#A09C9A]">
              <span className="text-accent font-semibold">Affiliated to {siteConfig.education.university}</span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {siteConfig.education.location}
              </span>
            </div>
          </div>

          {/* Academic Highlights / Focus Pill */}
          <div className="lg:col-span-4 bg-[#181818] p-6 rounded-2xl border border-white/10 font-mono text-xs space-y-3">
            <div className="text-accent font-bold uppercase tracking-wider flex items-center gap-2">
              <BookCheck className="w-4 h-4" />
              <span>Specialized Curriculum</span>
            </div>
            <ul className="space-y-2 text-[#A09C9A] text-[11px] leading-relaxed">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Machine Learning & Neural Architectures</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Data Structures & Algorithmic Complexity</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Distributed Relational Database Systems</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Applied Computer Vision & NLP</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
