import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../data/ledEventsData';
import { Project, EventCategory } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsSectionProps {
  onOpenInquiryWithProject: (projectTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenInquiryWithProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: EventCategory[] = ['All', 'Concert', 'Festival', 'Outdoor', 'Corporate'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="bg-[#0A0A0A] py-28 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#1C1C1C] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 bg-white" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              Selected Projects
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-white text-black border-white'
                    : 'bg-[#111111] text-[#A3A3A3] border-[#222222] hover:border-[#444444] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer bg-[#0F0F0F] border border-[#222222] hover:border-white transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-[#050505]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-[#050505] text-white px-2.5 py-1 text-[11px] font-mono tracking-wider border border-[#222222] uppercase">
                    {project.category}
                  </span>
                  {project.stageSize && (
                    <span className="bg-[#111111] text-[#A3A3A3] px-2 py-1 text-[10px] font-mono border border-[#222222] flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" />
                      {project.stageSize}
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 bg-[#050505]/80 p-2 text-white border border-[#222222] group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Card Meta & Story */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#737373] mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 line-clamp-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-white transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#A3A3A3] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#737373] truncate max-w-[200px]">
                    {project.scope}
                  </span>
                  <span className="text-white font-semibold flex items-center gap-1 group-hover:underline">
                    Inspect Project →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectDetailModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
            onSelectProject={(p) => setActiveProject(p)}
            allProjects={PROJECTS}
            onOpenInquiryWithProject={onOpenInquiryWithProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
