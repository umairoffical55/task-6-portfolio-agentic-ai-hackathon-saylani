import React, { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  Terminal, 
  Layers, 
  Bot, 
  Cpu, 
  FileText, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenExporter?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenExporter }) => {
  const [copied, setCopied] = useState(false);
  const [terminalTab, setTerminalTab] = useState<'stack' | 'about' | 'contact'>('stack');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-800/60"
    >
      {/* Background Subtle Tech Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.1),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415518_1px,transparent_1px),linear-gradient(to_bottom,#33415518_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Eyebrow Tag / Status */}
            <div 
              id="hero-availability-pill"
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/90 text-xs font-mono text-slate-300 mb-6 shadow-sm hover:border-slate-700 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300 font-medium">Available for Software & AI Eng. Roles</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 text-[11px] font-semibold">2025/2026</span>
            </div>

            {/* Main Headline */}
            <h1 
              id="hero-main-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-[1.15] mb-5"
            >
              Hi, I'm <span className="text-white font-bold">{PERSONAL_INFO.name}</span> — 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-slate-200 mt-1">
                Mechanical Engineer & AI Application Developer.
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p 
              id="hero-bio-paragraph"
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {PERSONAL_INFO.bio}
            </p>

            {/* Core Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                id="hero-cta-projects"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm tracking-tight transition-all duration-150 shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/35 hover:-translate-y-0.5 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Secondary CTA: Copy Email */}
              <button
                id="hero-cta-copy-email"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 text-sm font-medium transition-all duration-150 relative group shadow-sm"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-mono text-xs">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 group-hover:text-slate-200" />
                    <span className="font-mono text-xs text-slate-300">m.umairehsan2@gmail.com</span>
                  </>
                )}
              </button>

              {/* Contact Anchor Link */}
              <a
                id="hero-cta-contact"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-transparent hover:bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:border-slate-700 text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Form</span>
              </a>
            </div>

            {/* Social Icons & Tech Badges Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-2">
                <a
                  id="hero-social-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="hero-social-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="hero-social-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm"
                  aria-label="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-slate-800 hidden sm:block" />

              {/* Core Skill Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {['Python', 'React', 'Node.js', 'Tailwind', 'LangChain', 'SolidWorks'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800/80 text-[11px] font-mono text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Vercel/Linear Style Interactive Terminal Card */}
          <div className="lg:col-span-5">
            <div 
              id="hero-terminal-card"
              className="bg-slate-900/90 border border-slate-800/90 rounded-xl overflow-hidden shadow-2xl shadow-black/80 backdrop-blur-md hover:border-slate-700/90 transition-colors"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800/90">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block shadow-sm"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    umair@portfolio:~
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 rounded-md p-0.5 border border-slate-800">
                  <button
                    id="term-tab-stack"
                    onClick={() => setTerminalTab('stack')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      terminalTab === 'stack' ? 'bg-slate-800 text-emerald-300 font-semibold' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    stack.json
                  </button>
                  <button
                    id="term-tab-about"
                    onClick={() => setTerminalTab('about')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      terminalTab === 'about' ? 'bg-slate-800 text-emerald-300 font-semibold' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    focus.sh
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 space-y-3">
                {terminalTab === 'stack' ? (
                  <>
                    <div className="text-slate-500">
                      // Active Engineering Matrix v2025.2
                    </div>
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-yellow-300">developerProfile</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">"candidate"</span>: <span className="text-emerald-300">"Muhammad Umair"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">"disciplines"</span>: [
                      <span className="text-emerald-300">"Mechanical Engineering"</span>,
                      <span className="text-emerald-300">"Agentic AI"</span>,
                      <span className="text-emerald-300">"Full-Stack"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">"primaryLanguages"</span>: [
                      <span className="text-amber-300">"Python"</span>,
                      <span className="text-amber-300">"TypeScript"</span>,
                      <span className="text-amber-300">"C++"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">"frameworks"</span>: [
                      <span className="text-sky-300">"React 19"</span>,
                      <span className="text-sky-300">"Node/Express"</span>,
                      <span className="text-sky-300">"Tailwind"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">"aiToolkit"</span>: [
                      <span className="text-emerald-300">"LangChain"</span>,
                      <span className="text-emerald-300">"RAG Architecture"</span>,
                      <span className="text-emerald-300">"Gemini/OpenAI"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">"engineeringTools"</span>: [
                      <span className="text-teal-300">"SolidWorks CAD"</span>,
                      <span className="text-teal-300">"MATLAB"</span>,
                      <span className="text-teal-300">"Thermodynamic Sim"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">"status"</span>: <span className="text-emerald-400">"READY_FOR_DEPLOYMENT"</span>
                    </div>
                    <div>{'};'}</div>
                  </>
                ) : (
                  <>
                    <div className="text-slate-500">$ ./inspect-specialization.sh --target=umair</div>
                    <div className="text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>[OK] Dual-Competency Verification Complete</span>
                    </div>
                    <div className="text-slate-300 pl-2 border-l border-slate-800 space-y-1.5 py-1">
                      <p className="text-slate-400">
                        → <strong className="text-slate-200">Hardware & Thermal:</strong> Validated thermodynamic calculations, CAD assemblies, and solar collector optimization.
                      </p>
                      <p className="text-slate-400">
                        → <strong className="text-slate-200">Autonomous Software:</strong> Agentic workflows, vector embeddings, and full-stack telematics platforms.
                      </p>
                    </div>
                    <div className="text-slate-400 pt-2 flex items-center gap-2">
                      <span className="text-emerald-400">ready$</span>
                      <span className="animate-pulse bg-emerald-400 w-2 h-4 inline-block"></span>
                    </div>
                  </>
                )}
              </div>

              {/* Terminal Footer Quick Bar */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800/90 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Port 3000 Active
                </span>
                <a 
                  href="#projects" 
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>view projects</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
