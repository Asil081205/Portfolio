import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Layers, Code2, Sparkles, Terminal } from 'lucide-react';
import { useMotion } from '../context/MotionContext';

export default function ProjectModal({ project, isOpen, onClose }) {
  const { motionEnabled } = useMotion();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: motionEnabled ? 0.25 : 0.05 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, scale: 0.95, y: 20 } : { opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={motionEnabled ? { opacity: 0, scale: 0.95, y: 20 } : { opacity: 0 }}
          transition={{ duration: motionEnabled ? 0.3 : 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-white/15 rounded-2xl shadow-2xl p-6 md:p-10 z-10 text-[#F2EFEB]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#A09C9A] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="border-b border-white/10 pb-6 mb-8">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs mb-3">
              <span className="text-accent font-bold tracking-wider">{project.number}</span>
              <span className="text-white/30">/</span>
              <span className="text-[#A09C9A] uppercase tracking-wider">{project.category}</span>
              {project.badge && (
                <span className="ml-auto px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/40 text-accent font-semibold text-[11px]">
                  {project.badge}
                </span>
              )}
            </div>

            <h3 className="text-2xl md:text-4xl font-display uppercase tracking-tight text-white mb-2">
              {project.title}
            </h3>

            <p className="text-base md:text-lg text-[#A09C9A] font-light">
              {project.tagline}
            </p>
          </div>

          {/* Body Grid */}
          <div className="space-y-8">
            {/* Overview & Problem Statement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#161616] p-6 rounded-xl border border-white/5">
              <div>
                <h4 className="font-mono text-xs tracking-widest uppercase text-accent mb-2 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Overview</span>
                </h4>
                <p className="text-sm text-[#F2EFEB]/90 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs tracking-widest uppercase text-accent mb-2 flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Problem Solved</span>
                </h4>
                <p className="text-sm text-[#A09C9A] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            </div>

            {/* Verified Capabilities Checklist */}
            <div>
              <h4 className="font-mono text-xs tracking-widest uppercase text-[#F2EFEB] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Verified Capabilities & Implementation Scope</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.verifiedFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-[#F2EFEB]/85"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="font-mono text-xs tracking-widest uppercase text-[#A09C9A] mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-accent" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded bg-[#1c1c1c] border border-white/10 text-xs font-mono text-[#F2EFEB]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-accent hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>VIEW CODE ON GITHUB</span>
              </a>

              <div className="font-mono text-xs text-[#A09C9A]">
                REPOSITORY: <span className="text-white">Asil081205</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

