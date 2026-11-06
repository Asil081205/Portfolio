import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Layers, Sparkles, Filter, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const filterCategories = ['ALL', 'FLAGSHIP', 'AI & SYSTEMS', 'CLIENT & STARTUP'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'FLAGSHIP') return p.isFlagship;
    if (filter === 'AI & SYSTEMS') {
      return p.category.includes('AI') || p.category.includes('MACHINE LEARNING') || p.category.includes('COMPUTER VISION');
    }
    if (filter === 'CLIENT & STARTUP') {
      return p.category.includes('STARTUP') || p.id === 'qyzen';
    }
    return true;
  });

  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="border-b border-white/10 pb-8 mb-12 md:mb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <span className="font-mono text-xs text-[#A09C9A]">
            08 AUTHENTIC IMPLEMENTATIONS
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-section-clamp font-display uppercase tracking-tight text-[#F2EFEB]">
              SELECTED <span className="text-[#A09C9A]/50">WORKS.</span>
            </h2>
            <p className="mt-3 text-base md:text-lg text-[#A09C9A] max-w-2xl font-light">
              Collaborative developer tooling, client-delivered solutions, and applied machine learning systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full transition-all border ${
                  filter === cat
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white/[0.03] text-[#A09C9A] border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-12 md:space-y-16">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Modal View for Project Details */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

