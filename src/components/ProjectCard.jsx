import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, Terminal, Code2, Database, Layers, Eye, Smartphone, Cpu, ShieldCheck, Activity } from 'lucide-react';
import { useMotion } from '../context/MotionContext';

export default function ProjectCard({ project, index, onSelect }) {
  const { motionEnabled } = useMotion();
  const isEven = index % 2 === 0;

  // Custom visual previews for each project type
  const renderPreviewGraphic = () => {
    switch (project.previewType) {
      case 'ide':
        return (
          <div className="w-full h-full min-h-[300px] md:min-h-[380px] bg-[#0c0c0c] rounded-xl border border-white/10 overflow-hidden flex flex-col font-mono text-xs">
            {/* IDE Window Bar */}
            <div className="bg-[#141414] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[#A09C9A] ml-2 text-[11px]">C2X IDE Workspace</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-accent">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span>AI Assist Active</span>
              </div>
            </div>

            {/* IDE Tab Header */}
            <div className="flex items-center bg-[#101010] border-b border-white/5 text-[11px] text-[#A09C9A]">
              <div className="px-4 py-2 bg-[#0c0c0c] border-r border-white/5 text-[#F2EFEB] flex items-center gap-2 border-t-2 border-t-accent">
                <Code2 className="w-3 h-3 text-accent" />
                <span>CollaborativeEditor.tsx</span>
              </div>
              <div className="px-4 py-2 border-r border-white/5 hover:text-white flex items-center gap-2">
                <span>socket.service.ts</span>
              </div>
              <div className="px-4 py-2 border-r border-white/5 hover:text-white hidden sm:flex items-center gap-2">
                <span>workspace.neon.sql</span>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 flex-1 bg-[#090909] overflow-hidden text-[#A09C9A] leading-relaxed">
              <div className="flex gap-4">
                <div className="text-white/20 select-none text-right">
                  01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09
                </div>
                <div className="flex-1 font-mono text-[12px] overflow-x-auto">
                  <p><span className="text-purple-400">import</span> &#123; createMonacoInstance &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@monaco/core'</span>;</p>
                  <p><span className="text-purple-400">import</span> &#123; useSocketSync &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'./hooks/realtime'</span>;</p>
                  <p className="text-white/40">// C2X unified collaborative execution engine</p>
                  <p><span className="text-blue-400">export const</span> <span className="text-yellow-200">C2XWorkspace</span> = () =&gt; &#123;</p>
                  <p className="pl-4"><span className="text-blue-400">const</span> &#123; session, activePeers &#125; = <span className="text-yellow-200">useSocketSync</span>(roomConfig);</p>
                  <p className="pl-4"><span className="text-blue-400">const</span> ai = <span className="text-yellow-200">useAiContextAssistant</span>(&#123; model: <span className="text-emerald-300">'code-v2'</span> &#125;);</p>
                  <p className="pl-4 text-accent">// Neon PostgreSQL persistence layer sync</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> &lt;<span className="text-emerald-400">MonacoCanvas</span> session=&#123;session&#125; ai=&#123;ai&#125; /&gt;;</p>
                  <p>&#125;;</p>
                </div>
              </div>

              {/* Terminal Bottom Drawer */}
              <div className="mt-4 p-2.5 rounded bg-[#121212] border border-white/5 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Terminal: socket connected · neon db ready</span>
                </div>
                <span className="text-white/40">Electron v28 / React 18</span>
              </div>
            </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-[#131313] to-[#0c0c0c] rounded-xl border border-white/10 p-6 md:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-[#A09C9A]">VERIFIED RECORD</span>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-accent/20 text-accent border border-accent/30 font-bold">
                QYZEN
              </span>
            </div>

            <div className="my-6 text-center">
              <div className="font-display text-7xl md:text-8xl text-white tracking-tighter">
                {project.previewData.metric}
              </div>
              <div className="font-mono text-sm md:text-base text-accent font-bold tracking-widest uppercase mt-1">
                {project.previewData.metricLabel}
              </div>
              <div className="text-xs text-[#A09C9A] mt-2 font-mono">
                {project.previewData.metricSub}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 font-mono text-[11px] text-center">
              {project.previewData.stats.map((s, idx) => (
                <div key={idx} className="p-2 rounded bg-white/[0.03]">
                  <div className="text-white/50">{s.label}</div>
                  <div className="text-white font-medium mt-0.5">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'ai-flow':
        return (
          <div className="w-full h-full min-h-[300px] bg-[#0d0d0d] rounded-xl border border-white/10 p-6 flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between text-xs text-[#A09C9A] border-b border-white/5 pb-3">
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                AI PIPELINE ARCHITECTURE
              </span>
              <span className="text-emerald-400 text-[11px]">NLP ENGINE ACTIVE</span>
            </div>

            <div className="space-y-2.5 my-4">
              {project.previewData.flow.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#141414] border border-white/5 text-xs text-[#F2EFEB]"
                >
                  <span className="w-6 h-6 rounded-full bg-accent/20 text-accent border border-accent/40 flex items-center justify-center font-bold text-[10px]">
                    0{idx + 1}
                  </span>
                  <span className="font-medium">{step}</span>
                  <div className="ml-auto text-[10px] text-[#A09C9A]">
                    {idx === 0 && 'PDF / DOCX'}
                    {idx === 1 && 'Entity Recognition'}
                    {idx === 2 && 'Market Benchmark'}
                    {idx === 3 && 'Career Trajectory'}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-[#A09C9A] border-t border-white/5 pt-3 flex justify-between">
              <span>Domain Analysis Pipeline</span>
              <span className="text-white">Python / React / REST</span>
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="w-full h-full min-h-[300px] bg-[#0c0c0c] rounded-xl border border-white/10 p-6 flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
              <span className="flex items-center gap-2 text-accent">
                <Eye className="w-4 h-4 text-accent" />
                OPENCV STREAM #01
              </span>
              <span className="text-emerald-400 text-[11px] animate-pulse">● 30 FPS ACTIVE</span>
            </div>

            {/* Simulated Face Detection Frame */}
            <div className="relative my-4 h-40 bg-[#141414] rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative border-2 border-accent p-3 rounded text-center bg-accent/5">
                <div className="text-[10px] text-accent tracking-widest font-bold">MATCH: 99.4%</div>
                <div className="text-white text-xs font-semibold mt-1">IDENTITY VERIFIED</div>
                <div className="text-[10px] text-white/60">Log Entry #1049 Saved</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#A09C9A]">
              <div className="p-2 rounded bg-white/[0.03]">
                <span>Pipeline:</span> <span className="text-white">HOG + Landmarks</span>
              </div>
              <div className="p-2 rounded bg-white/[0.03]">
                <span>Output:</span> <span className="text-white">CSV Attendance DB</span>
              </div>
            </div>
          </div>
        );

      case 'dashboard':
        return (
          <div className="w-full h-full min-h-[300px] bg-[#0c0c0c] rounded-xl border border-white/10 p-5 md:p-6 flex flex-col justify-between font-mono">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-white font-bold tracking-wider">WORK FORGE · MERN SPRINT</span>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-emerald-400/15 border border-emerald-400/30 text-emerald-400 text-[10px] font-bold">
                +30% EFFICIENCY
              </span>
            </div>

            {/* Kanban Sprint Board Columns */}
            <div className="grid grid-cols-3 gap-2.5 my-4">
              <div className="p-3 rounded-lg bg-[#141414] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-[#A09C9A]">
                  <span>TASKS</span>
                  <span className="text-white">12</span>
                </div>
                <div className="p-2 rounded bg-white/[0.03] text-[11px] text-[#F2EFEB]">
                  Auth & RBAC
                </div>
                <div className="p-2 rounded bg-white/[0.03] text-[11px] text-[#F2EFEB]">
                  REST Schemas
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#141414] border border-accent/20 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-accent">
                  <span>IN FLIGHT</span>
                  <span className="font-bold">4</span>
                </div>
                <div className="p-2 rounded bg-accent/10 border border-accent/30 text-[11px] text-white">
                  Sprint Tracker
                </div>
                <div className="p-2 rounded bg-white/[0.03] text-[11px] text-[#A09C9A]">
                  CRUD Endpoints
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#141414] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-emerald-400">
                  <span>DEPLOYED</span>
                  <span>18</span>
                </div>
                <div className="p-2 rounded bg-white/[0.03] text-[11px] text-emerald-300">
                  Sprint Metric
                </div>
                <div className="p-2 rounded bg-white/[0.03] text-[11px] text-emerald-300">
                  MongoDB Sync
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3 text-[10px] text-center text-[#A09C9A]">
              <div className="p-1.5 rounded bg-white/[0.02]">
                <div className="text-white/40">STACK</div>
                <div className="text-white font-medium">MERN + RBAC</div>
              </div>
              <div className="p-1.5 rounded bg-white/[0.02]">
                <div className="text-white/40">INTERNSHIP</div>
                <div className="text-white font-medium">Adro IT Tech</div>
              </div>
              <div className="p-1.5 rounded bg-white/[0.02]">
                <div className="text-white/40">OPERATIONS</div>
                <div className="text-accent font-bold">Full CRUD</div>
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="w-full h-full min-h-[300px] bg-[#0c0c0c] rounded-xl border border-white/10 p-5 md:p-6 flex flex-col justify-between font-mono">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
              <span className="flex items-center gap-2 text-white font-bold">
                <ShieldCheck className="w-4 h-4 text-accent" />
                AI FRAUD DETECTION ENGINE
              </span>
              <span className="px-2.5 py-0.5 rounded bg-accent/20 border border-accent/40 text-accent font-bold text-[10px]">
                92.0% ACCURACY
              </span>
            </div>

            {/* Classification Telemetry & Stats */}
            <div className="my-4 space-y-3">
              <div className="p-3 rounded-lg bg-[#141414] border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#A09C9A]">EVALUATION DATASET</div>
                  <div className="text-sm font-bold text-white mt-0.5">10,000 TRANSACTIONS</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-emerald-400">VERIFIED METRIC</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">92% ACCURACY</div>
                </div>
              </div>

              {/* Progress Gauges */}
              <div className="p-3 rounded-lg bg-[#121212] border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#A09C9A]">Model Confidence Rate</span>
                  <span className="text-white font-bold">92.0%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="w-[92%] bg-accent h-full rounded-full" />
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3 text-[10px] text-center text-[#A09C9A]">
              <div className="p-1.5 rounded bg-white/[0.02]">
                <div className="text-white/40">TECH</div>
                <div className="text-white">Python / ML</div>
              </div>
              <div className="p-1.5 rounded bg-white/[0.02]">
                <div className="text-white/40">ALGORITHM</div>
                <div className="text-white">Classifier</div>
              </div>
              <div className="p-1.5 rounded bg-white/[0.02]">
                <div className="text-white/40">ENGINEERING</div>
                <div className="text-accent">Feature Tuning</div>
              </div>
            </div>
          </div>
        );

      case 'mobile':
        return (
          <div className="w-full h-full min-h-[300px] bg-[#0c0c0c] rounded-xl border border-white/10 p-5 md:p-6 flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
              <span className="flex items-center gap-2 text-white font-bold">
                <Smartphone className="w-4 h-4 text-accent" />
                AI CITY PULSE · FLUTTER
              </span>
              <span className="px-2.5 py-0.5 rounded bg-emerald-400/15 border border-emerald-400/30 text-emerald-400 text-[10px] font-bold">
                UN SDG 11
              </span>
            </div>

            <div className="my-4 p-4 rounded-xl bg-[#141414] border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#A09C9A]">REAL-TIME CITY HEALTH SCORE</div>
                  <div className="text-2xl font-display text-white tracking-tight mt-0.5">86 / 100</div>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-emerald-400 flex items-center justify-center text-xs font-bold text-emerald-400">
                  OPTIMAL
                </div>
              </div>

              {/* Multi-variable telemetry indicators */}
              <div className="grid grid-cols-3 gap-2 text-[10px] pt-2 border-t border-white/5">
                <div className="p-2 rounded bg-white/[0.02] text-center">
                  <div className="text-white/40">TRAFFIC</div>
                  <div className="text-white font-medium mt-0.5">Moderate</div>
                </div>
                <div className="p-2 rounded bg-white/[0.02] text-center">
                  <div className="text-white/40">AQI LEVEL</div>
                  <div className="text-emerald-300 font-medium mt-0.5">Good (42)</div>
                </div>
                <div className="p-2 rounded bg-white/[0.02] text-center">
                  <div className="text-white/40">DENSITY</div>
                  <div className="text-accent font-medium mt-0.5">Normal</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#A09C9A] border-t border-white/10 pt-3">
              <span>Cross-Platform Flutter & Firebase</span>
              <span className="text-white">SDG 11 Sustainable Cities</span>
            </div>
          </div>
        );

      default:
        // Generic architectural preview
        return (
          <div className="w-full h-full min-h-[300px] bg-[#0c0c0c] rounded-xl border border-white/10 p-6 flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
              <span className="text-[#A09C9A] uppercase tracking-wider">{project.shortTitle}</span>
              <span className="text-accent text-[11px]">{project.badge || 'PROJECT ARCHITECTURE'}</span>
            </div>

            <div className="my-6 p-4 rounded bg-[#131313] border border-white/5">
              <div className="text-xs text-white/50 mb-1">SYSTEM SPECIFICATION</div>
              <div className="text-sm font-semibold text-white">{project.tagline}</div>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px]">
              {project.techStack.slice(0, 4).map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-white/5 text-[#A09C9A]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <motion.article
      initial={motionEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: motionEnabled ? 0.6 : 0.2 }}
      className={`group relative rounded-2xl bg-[#111111]/80 border transition-all duration-300 p-6 md:p-10 ${
        project.isFlagship
          ? 'border-accent/50 bg-gradient-to-b from-[#161616] to-[#0c0c0c] shadow-2xl hover:border-accent'
          : 'border-white/10 hover:border-white/25'
      }`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${
          isEven ? '' : 'lg:grid-flow-dense'
        }`}
      >
        {/* Text Details Column */}
        <div
          className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${
            isEven ? '' : 'lg:col-start-7'
          }`}
        >
          {/* Top Identifier */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-accent font-bold tracking-widest text-sm">
              {project.number}
            </span>
            <span className="text-white/20">/</span>
            <span className="text-[#A09C9A] tracking-wider uppercase text-[11px]">
              {project.category}
            </span>
            {project.badge && (
              <span
                className={`ml-auto px-3 py-1 rounded-full text-[11px] font-semibold border ${
                  project.isFlagship
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white/5 text-accent border-accent/30'
                }`}
              >
                {project.badge}
              </span>
            )}
          </div>

          {/* Project Title */}
          <div>
            <h3
              onClick={() => onSelect(project)}
              className="text-2xl md:text-4xl font-display uppercase tracking-tight text-[#F2EFEB] group-hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              {project.title}
            </h3>
            <p className="mt-3 text-sm md:text-base text-[#A09C9A] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded bg-[#181818] border border-white/10 text-xs font-mono text-[#F2EFEB]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            <button
              onClick={() => onSelect(project)}
              className="px-5 py-2.5 rounded-full bg-[#181818] hover:bg-white hover:text-black border border-white/20 text-[#F2EFEB] font-mono text-xs tracking-wider font-semibold flex items-center gap-2 transition-all"
            >
              <span>VIEW DETAILS</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </button>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-white/10 hover:border-white/30 text-[#A09C9A] hover:text-white font-mono text-xs tracking-wider flex items-center gap-2 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
          </div>
        </div>

        {/* Visual Preview Graphic Column */}
        <div
          onClick={() => onSelect(project)}
          className={`lg:col-span-6 cursor-pointer relative transform transition-transform duration-500 group-hover:scale-[1.01] ${
            isEven ? '' : 'lg:col-start-1'
          }`}
        >
          {renderPreviewGraphic()}
        </div>
      </div>
    </motion.article>
  );
}

