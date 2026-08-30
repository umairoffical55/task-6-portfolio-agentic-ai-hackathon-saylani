import React from 'react';
import { 
  Terminal, 
  ArrowUp, 
  Heart, 
  Github, 
  Linkedin, 
  Mail, 
  FileCode2 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenExporter?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExporter }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs font-mono relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 font-bold text-xs shadow-inner">
              MU
            </div>
            <div>
              <p className="font-semibold text-slate-200">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-[11px] text-slate-500">
                Mechanical Engineer & AI Application Developer
              </p>
            </div>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            <a 
              id="footer-github-link"
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a 
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a 
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          {/* Right: Back to Top & Exporter */}
          <div className="flex items-center gap-3">
            {onOpenExporter && (
              <button
                id="footer-html-source-btn"
                onClick={onOpenExporter}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 text-[11px] transition-colors flex items-center gap-1 shadow-sm"
              >
                <FileCode2 className="w-3.5 h-3.5" />
                <span>Single HTML Source</span>
              </button>
            )}
            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 shadow-sm"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Crafted with Vercel/Linear minimal design principles.</p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              All systems nominal
            </span>
            <span>Task 06 • Hackathon Prototype</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
