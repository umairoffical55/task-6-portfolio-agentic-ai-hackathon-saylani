import React from 'react';
import { 
  Cpu, 
  Layers, 
  Wrench, 
  Bot, 
  CheckCircle2, 
  Flame, 
  Compass, 
  Code2, 
  GraduationCap 
} from 'lucide-react';
import { STATS, PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "AI & Agentic Systems",
      desc: "Architecting generative AI applications, prompt chains, LangChain retrieval pipelines, and autonomous multi-agent tool integrations.",
      tag: "Applied AI"
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      desc: "Building clean, production-grade applications using React 19, TypeScript, Node.js, Express, and Tailwind CSS with strict attention to performance.",
      tag: "Web Architecture"
    },
    {
      icon: Wrench,
      title: "Mechanical & Thermal CAD",
      desc: "Applying physics-first reasoning, thermodynamic heat transfer simulations, SolidWorks assemblies, and finite mathematical analysis.",
      tag: "Physical Mechanics"
    },
  ];

  return (
    <section 
      id="about" 
      className="py-20 md:py-28 border-b border-slate-800/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3 shadow-sm">
            <span>01. ABOUT ME</span>
          </div>
          <h2 
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-4"
          >
            Engineering Rigor Meets Modern Software Intelligence
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            I am a student software engineer and mechanical engineering major who thrives at the intersection of mathematical modelling and autonomous web applications.
          </p>
        </div>

        {/* Core Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Background Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <p>
              My journey began in physical engineering labs, dissecting thermodynamics, fluid dynamics, and automated machinery. That analytical training instilled in me a deep commitment to deterministic systems: <strong className="text-slate-100 font-semibold">measure twice, eliminate bottlenecks, and architect for resilience.</strong>
            </p>
            <p>
              When I expanded into software engineering, I brought that same mechanical discipline to web development and AI. Instead of treating AI as a superficial gimmick, I build <strong className="text-emerald-400 font-medium">grounded, agentic workflows</strong> with structured verification, multi-stage retrieval, and performant user interfaces.
            </p>
            <p>
              Whether designing full-stack platforms like <span className="text-slate-100 font-medium underline decoration-slate-600 underline-offset-4">AutoCare Pro</span> or engineering thermodynamic solar heating simulations in SolidWorks & Python, I am driven by creating tangible value through clean, human-centered technology.
            </p>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Deterministic Problem Solving</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fast Prototyping to Production</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modern Clean UI/UX</span>
              </div>
            </div>
          </div>

          {/* 3 Domain Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/90 rounded-xl p-5 transition-all duration-200 group shadow-sm hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-800/80 text-emerald-400 group-hover:text-emerald-300 border border-slate-700/60 transition-colors shadow-inner">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-sm text-slate-100 group-hover:text-white transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                      {pillar.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal pl-10">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Key Metrics / Stats Row */}
        <div 
          id="stats-grid"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6"
        >
          {STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/60 transition-all shadow-sm"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-100 tracking-tight">
                  {stat.value}
                </span>
                <h4 className="text-xs font-semibold text-slate-300 mt-1">
                  {stat.label}
                </h4>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-mono leading-tight">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
