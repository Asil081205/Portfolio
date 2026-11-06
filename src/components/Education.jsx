import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import { GraduationCap, Award, BookCheck, MapPin, Languages, Check } from 'lucide-react';
import { useMotion } from '../context/MotionContext';

export default function Education() {
  const { motionEnabled } = useMotion();

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-6">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span>ACADEMIC FOUNDATION</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main B.Tech Degree Card */}
        <div className="lg:col-span-8 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#131313] to-[#0c0c0c] border border-white/10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[90px] pointer-events-none" />

          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#A09C9A]">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span>UNDERGRADUATE DEGREE · 2023 – 2027</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent font-bold text-xs">
                CGPA: 8.34 (Up to 6th Semester)
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-display uppercase tracking-tight text-white leading-tight">
              {siteConfig.education[0].degree}
            </h3>

            <div className="text-base md:text-xl text-[#F2EFEB] font-normal">
              {siteConfig.education[0].institution}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-mono text-[#A09C9A]">
              <span className="text-accent font-semibold">{siteConfig.education[0].university}</span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Avadi, Chennai, Tamil Nadu
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A09C9A]">
            <span>Artificial Intelligence & Machine Learning Specialization</span>
            <span className="text-white">Active Student (2023 – 2027)</span>
          </div>
        </div>

        {/* Schooling & Languages Column */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-6">
          {/* Higher Secondary Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-[#121212] border border-white/10 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#A09C9A] mb-3">
                <span>HIGHER SECONDARY (HSC)</span>
                <span className="text-accent font-bold">2023</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {siteConfig.education[1].institution}
              </h4>
              <div className="text-xs text-[#A09C9A] font-mono mb-4">
                {siteConfig.education[1].university}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <span className="text-[#A09C9A]">State Board Score</span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white font-bold">
                {siteConfig.education[1].score}
              </span>
            </div>
          </div>

          {/* Languages Card */}
          <div className="p-6 rounded-3xl bg-[#141414] border border-white/10 font-mono text-xs">
            <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider mb-3">
              <Languages className="w-4 h-4" />
              <span>Languages Known</span>
            </div>
            <div className="flex gap-3">
              {siteConfig.personal.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-medium flex items-center gap-1.5"
                >
                  <Check className="w-3 h-3 text-accent" />
                  <span>{lang}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
