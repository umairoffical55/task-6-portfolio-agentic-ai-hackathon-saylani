import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Bot, 
  Cog, 
  Search, 
  Sparkles, 
  Check, 
  Code2, 
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Bot': return Bot;
      case 'Cog': return Cog;
      default: return Code2;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map(category => {
    if (activeCategory !== 'all' && category.name !== activeCategory) {
      return null;
    }

    const matchingSkills = category.skills.filter(skill => 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.badge && skill.badge.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (searchQuery && matchingSkills.length === 0) {
      return null;
    }

    return {
      ...category,
      skills: searchQuery ? matchingSkills : category.skills
    };
  }).filter(Boolean);

  return (
    <section 
      id="skills" 
      className="py-20 md:py-28 border-b border-slate-800/60 bg-slate-950/40 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3 shadow-sm">
              <span>02. TECHNICAL COMPETENCIES</span>
            </div>
            <h2 
              id="skills-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-3"
            >
              Organized Tech Stack & Methodologies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A structured inventory of production tools, agentic frameworks, and engineering software utilized across my academic and commercial builds.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="skill-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter tools (e.g. React, Python)..."
                className="w-full pl-9 pr-3.5 py-2 bg-slate-900/90 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/80 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs font-mono"
                >
                  clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            id="skill-filter-all"
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-slate-100 text-slate-950 font-semibold shadow-sm'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Disciplines ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              id={`skill-filter-${cat.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat.name
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            if (!category) return null;
            const Icon = getCategoryIcon(category.icon);

            return (
              <div 
                key={category.name}
                className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700/90 transition-all duration-200 shadow-sm"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 shadow-inner">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-slate-100">
                          {category.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {category.skills.length} tools
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60 hover:border-slate-700/70 transition-colors group"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                              {skill.name}
                            </span>
                            {skill.badge && (
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                                {skill.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Category Summary Footer */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/80" />
                    Production Verified
                  </span>
                  <span>SOLID & Clean Architecture</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Highlight Banner / Workflow Integration */}
        <div className="mt-10 p-5 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                Agentic Automation & Tool-Calling Experience
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Specialized in grounding LLMs via LangChain, FastAPI middleware, and n8n webhook pipelines for deterministic data execution.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="self-start sm:self-auto text-xs font-semibold text-emerald-400 hover:text-emerald-300 font-mono flex items-center gap-1 shrink-0"
          >
            <span>Inquire tech fit →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
