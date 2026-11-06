import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import { Code, Compass, Cpu, Layers, Sparkles, Terminal, BookOpen, Check } from 'lucide-react';
import { useMotion } from '../context/MotionContext';

export default function About() {
  const { motionEnabled } = useMotion();

  const technicalInterests = [
    { title: "Collaborative Tools", desc: "Real-time state sync, code editors, and multi-user developer workspaces." },
    { title: "Full Stack Architecture", desc: "MERN Stack applications with robust relational & document databases." },
    { title: "Applied Artificial Intelligence", desc: "Integrating LLMs, CV pipelines, and NLP models into intuitive interfaces." },
    { title: "Product Engineering", desc: "Transforming raw requirements into deployable, human-centered digital software." }
  ];

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header Label */}
      <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-6">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span>ABOUT & PHILOSOPHY</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Big Editorial Headline & Philosophy */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="text-section-clamp font-display uppercase tracking-tight text-[#F2EFEB]">
            {siteConfig.personal.headline}
          </h2>

          <div className="space-y-6 text-base md:text-xl text-[#A09C9A] leading-relaxed font-light">
            <p className="text-[#F2EFEB] font-normal">
              I'm <span className="text-white font-semibold">Asil Jamesha</span>, a developer focused on building full-stack applications, AI-integrated products, and collaborative digital experiences.
            </p>
            <p>
              My interests span frontend engineering, backend development, AI applications, and product development.
            </p>
            <p>
              I enjoy transforming ideas into practical solutions, experimenting with new technologies, and building products that solve meaningful problems.
            </p>
          </div>

          {/* Development Philosophy Quote Box */}
          <div className="p-6 md:p-8 rounded-2xl bg-[#121212] border-l-4 border-l-accent border-y border-r border-white/10 relative">
            <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 font-semibold">
              ENGINEERING PHILOSOPHY
            </div>
            <blockquote className="text-base md:text-lg text-[#F2EFEB] italic leading-relaxed">
              "Great software balances technical rigor with elegant utility. Whether optimizing real-time socket connections in C2X or parsing resumes with AI, every line of code should serve real human intent."
            </blockquote>
          </div>
        </div>

        {/* Right Column: Focus Areas & Background Pillars */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 md:p-8 rounded-2xl bg-[#111111] border border-white/10">
            <h3 className="font-mono text-xs tracking-widest uppercase text-white mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <span>CORE TECHNICAL INTERESTS</span>
              <Terminal className="w-4 h-4 text-accent" />
            </h3>

            <div className="space-y-5">
              {technicalInterests.map((interest, idx) => (
                <div key={idx} className="group">
                  <div className="text-sm font-semibold text-[#F2EFEB] flex items-center gap-2 group-hover:text-accent transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{interest.title}</span>
                  </div>
                  <p className="mt-1 text-xs text-[#A09C9A] pl-3.5 leading-relaxed">
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Academic Anchor Card */}
          <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-[#A09C9A] uppercase tracking-wider">
                CURRENT STUDIES · 2023–2027
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                {siteConfig.education[0].degree}
              </div>
              <div className="text-xs text-[#A09C9A] mt-1">
                {siteConfig.education[0].institution} · {siteConfig.education[0].university}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

