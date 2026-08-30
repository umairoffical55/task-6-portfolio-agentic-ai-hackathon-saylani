import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Wrench, 
  Sun, 
  Bot, 
  Cpu, 
  Activity, 
  Workflow, 
  ArrowUpRight, 
  Layers, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'Sparkles': return Sparkles;
      case 'Sun': return Sun;
      case 'Cpu': return Cpu;
      case 'Activity': return Activity;
      case 'Workflow': return Workflow;
      default: return Layers;
    }
  };

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const filterTabs = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full-Stack Web', value: 'Full-Stack' },
    { label: 'AI & LLMs', value: 'AI & LLM' },
    { label: 'Engineering & IoT', value: 'Engineering & IoT' },
  ];

  return (
    <section 
      id="projects" 
      className="py-20 md:py-28 border-b border-slate-800/60 bg-slate-950/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3 shadow-sm">
              <span>03. SELECTED WORK</span>
            </div>
            <h2 
              id="projects-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-3"
            >
              Featured Engineering & Software Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A curated collection of production web tools, agentic AI pipelines, and mechanical simulations with authentic problem statements and architectural implementations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto shadow-inner">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                id={`project-filter-${tab.value.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === tab.value
                    ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700/60 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = getProjectIcon(project.iconName);

            return (
              <div 
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/90 rounded-xl p-6 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  {/* Top Bar: Icon + Category + Featured Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-emerald-400 group-hover:text-emerald-300 group-hover:bg-slate-800 transition-colors shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      {project.featured && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 font-semibold">
                          Featured
                        </span>
                      )}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/90 mb-3">
                    {project.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights Bullet */}
                  <div className="mb-4 space-y-1.5 pt-3 border-t border-slate-800/60">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/90 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Tags + Links */}
                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Link Row */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <button
                      id={`project-inspect-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-emerald-300 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Architecture</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          id={`project-github-${project.id}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-100 border border-slate-700/60 transition-colors shadow-sm"
                          title="View GitHub Repository"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          id={`project-live-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold font-mono shadow-sm transition-all duration-150"
                          title="Open Live Prototype"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="w-3 h-3 text-slate-950" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Architecture Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
