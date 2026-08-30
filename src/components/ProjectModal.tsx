import React from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="project-modal-container"
        className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-slate-100 shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Pill & Metrics */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400">
            {project.category}
          </span>
          {project.metrics && (
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              {project.metrics}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-emerald-400 mb-5 font-mono">
          {project.tagline}
        </p>

        {/* Long Description */}
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6 bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
          <p>{project.longDescription || project.description}</p>
        </div>

        {/* Architecture & Component Flow */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              System Architecture Flow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.architecture.map((item, idx) => (
                <div 
                  key={idx}
                  className="px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800/90 text-xs font-mono text-slate-300 flex items-center gap-2"
                >
                  <span className="w-5 h-5 rounded bg-slate-800 text-emerald-400 text-[10px] flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Key Engineering Highlights
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Badges */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Applied Stack & Protocols
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/70 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors shadow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            Close View [Esc]
          </button>
        </div>

      </div>
    </div>
  );
};
