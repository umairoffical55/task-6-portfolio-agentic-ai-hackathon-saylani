import React from 'react';
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  BadgeCheck, 
  CheckCircle2, 
  Calendar, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Award': return Award;
      case 'Experience': return Briefcase;
      case 'Certification': return BadgeCheck;
      case 'Education': return GraduationCap;
      default: return Sparkles;
    }
  };

  return (
    <section 
      id="timeline" 
      className="py-20 md:py-28 border-b border-slate-800/60 bg-slate-950/40 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3 shadow-sm">
            <span>04. TRACK RECORD & MILESTONES</span>
          </div>
          <h2 
            id="timeline-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-4"
          >
            Achievements, Internships & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified milestones demonstrating continuous academic growth, industry-grade AI development, and specialized technical certifications.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l-2 border-slate-800/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {TIMELINE.map((item, index) => {
            const Icon = getCategoryIcon(item.category);

            return (
              <div 
                key={item.id}
                id={`timeline-item-${item.id}`}
                className="relative group"
              >
                {/* Timeline Node Icon Indicator */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 border-2 border-slate-700/90 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500 group-hover:text-emerald-300 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all shadow-lg">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Timeline Card */}
                <div className="bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/90 rounded-xl p-6 sm:p-7 transition-all duration-200 shadow-sm hover:-translate-y-0.5">
                  
                  {/* Top Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.year}
                      </span>
                      {item.period && (
                        <span className="text-xs font-mono text-slate-400">
                          • {item.period}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {item.badgeText && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700/80 text-slate-300 font-medium">
                          {item.badgeText}
                        </span>
                      )}
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-white transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold font-mono text-slate-400 mb-4">
                    {item.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Competencies Gained */}
                  <div className="pt-3 border-t border-slate-800/70">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                      Key Competencies Demonstrated
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skillsGained.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
