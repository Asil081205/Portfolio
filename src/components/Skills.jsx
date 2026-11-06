import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Code2, Server, Database, Brain, Terminal, Wrench, CheckCircle, Sparkles } from 'lucide-react';
import { useMotion } from '../context/MotionContext';

export default function Skills() {
  const { motionEnabled } = useMotion();
  const [activeTab, setActiveTab] = useState('all');

  const categoryIcons = {
    frontend: Code2,
    backend: Server,
    database: Database,
    'ai-data': Brain,
    languages: Terminal,
    'tools-devops': Wrench
  };

  const displayedCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span>TECHNICAL CAPABILITIES</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-section-clamp font-display uppercase tracking-tight text-[#F2EFEB]">
              SKILLS & <span className="text-[#A09C9A]/50">STACK.</span>
            </h2>
            <p className="mt-3 text-base md:text-lg text-[#A09C9A] max-w-2xl font-light">
              Structured stack across frontend, backend services, intelligent pipelines, and cloud exposure. Honesty over inflated metrics.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeTab === 'all'
                  ? 'bg-accent text-white border-accent'
                  : 'bg-white/[0.03] text-[#A09C9A] border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              ALL DOMAINS
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-full border transition-all ${
                  activeTab === cat.id
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white/[0.03] text-[#A09C9A] border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat.short}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((category) => {
          const Icon = categoryIcons[category.id] || Terminal;
          return (
            <motion.div
              key={category.id}
              initial={motionEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: motionEnabled ? 0.4 : 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-mono text-xs tracking-widest uppercase text-white font-semibold">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-[#A09C9A]">
                    {category.skills.length} TECH
                  </span>
                </div>

                <p className="text-xs text-[#A09C9A] mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Items List */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-accent/40 hover:bg-white/[0.04] transition-all"
                    >
                      <span className="text-xs font-mono font-medium text-[#F2EFEB] group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#A09C9A]/70">
                          {skill.tag}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                            skill.level === 'Primary'
                              ? 'bg-accent/15 text-accent border-accent/40 font-semibold'
                              : skill.level === 'Core'
                              ? 'bg-white/10 text-white border-white/20'
                              : 'bg-white/5 text-[#A09C9A] border-white/10'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Category Meta */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-[#A09C9A]/60">
                <span>VERIFIED REPO USAGE</span>
                <span>ASIL JAMESHA</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

