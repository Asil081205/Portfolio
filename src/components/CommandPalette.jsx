import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, ArrowRight, Zap, Copy, Check, Github, Mail, Layers, Compass, X } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useMotion } from '../context/MotionContext';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const { motionEnabled } = useMotion();

  const commands = [
    {
      id: 'work-forge',
      title: '01: Work Forge — MERN Project Management (30% Boost)',
      category: 'PROJECTS',
      action: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'c2x',
      title: '02: Flagship: C2X Collaborative IDE Workspace',
      category: 'PROJECTS',
      action: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'career',
      title: '03: AI Career Navigator (Hackathon Finalist)',
      category: 'PROJECTS',
      action: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'city-pulse',
      title: '04: AI City Pulse — Flutter & Firebase (UN SDG 11)',
      category: 'PROJECTS',
      action: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'fraud',
      title: '05: AI-Powered Fraud Detection System (92% Accuracy)',
      category: 'PROJECTS',
      action: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'download-resume',
      title: 'Download Resume (Asil-Jamesha-Resume.pdf)',
      category: 'ACTIONS',
      action: () => {
        window.open(siteConfig.contact.resumePdf, '_blank');
        onClose();
      },
    },
    {
      id: 'skills',
      title: 'View Skills & Technical Stack',
      category: 'NAVIGATION',
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'experience',
      title: 'Development Journey & Milestones',
      category: 'NAVIGATION',
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'copy-email',
      title: `Copy Email (${siteConfig.contact.email})`,
      category: 'ACTIONS',
      action: () => {
        navigator.clipboard.writeText(siteConfig.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      category: 'LINKS',
      action: () => {
        window.open(siteConfig.contact.github, '_blank');
        onClose();
      },
    },
  ];

  const filtered = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 md:pt-32 p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Palette Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-[#111111] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 text-[#F2EFEB]"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
            <Search className="w-4 h-4 text-accent" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type to search projects, commands, actions..."
              className="flex-1 bg-transparent text-sm font-mono text-white placeholder-white/40 focus:outline-none"
              autoFocus
            />
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/50">
              ESC
            </span>
            <button
              onClick={onClose}
              className="text-white/40 hover:text-white p-1"
              aria-label="Close command palette"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-accent border border-accent/20">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-[#F2EFEB] group-hover:text-accent transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-white/40 group-hover:text-white">
                    {item.id === 'copy-email' && copied ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </div>
                </button>
              ))
            ) : (
              <div className="p-8 text-center text-xs font-mono text-white/40">
                No matching results found for "{query}"
              </div>
            )}
          </div>

          {/* Bottom Footer Info */}
          <div className="px-4 py-2 bg-[#0c0c0c] border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/40">
            <span>QUICK NAVIGATION</span>
            <span>PRESS ESC TO DISMISS</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

