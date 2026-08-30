import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  FileCode2, 
  ExternalLink,
  Code2,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SingleHtmlExporterProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleHtmlExporter: React.FC<SingleHtmlExporterProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'instructions'>('preview');

  if (!isOpen) return null;

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Muhammad Umair — Mechanical Engineer & AI Application Developer</title>
  <meta name="description" content="Portfolio of Muhammad Umair — Mechanical Engineer & AI Application Developer.">
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }
        }
      }
    }
  </script>
</head>
<body class="bg-zinc-950 text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300 font-sans antialiased">

  <!-- 1. STICKY NAVBAR -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-3.5">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <a href="#" class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-100 font-mono font-semibold text-xs text-emerald-400">
          MU
        </div>
        <div>
          <span class="font-semibold text-sm sm:text-base tracking-tight text-white block">Muhammad Umair</span>
          <span class="text-[11px] font-mono text-zinc-400">Mechanical Eng. • AI Dev</span>
        </div>
      </a>
      <nav class="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800 rounded-full px-3 py-1.5">
        <a href="#about" class="text-xs font-medium px-3 py-1.5 text-zinc-300 hover:text-emerald-400">About</a>
        <a href="#projects" class="text-xs font-medium px-3 py-1.5 text-zinc-300 hover:text-emerald-400">Projects</a>
        <a href="#skills" class="text-xs font-medium px-3 py-1.5 text-zinc-300 hover:text-emerald-400">Skills</a>
        <a href="#certifications" class="text-xs font-medium px-3 py-1.5 text-zinc-300 hover:text-emerald-400">Certifications</a>
        <a href="#contact" class="text-xs font-medium px-3 py-1.5 text-zinc-300 hover:text-emerald-400">Contact</a>
      </nav>
      <div class="flex items-center gap-3">
        <div class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for hire</span>
        </div>
        <a href="#contact" class="px-3.5 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 text-xs font-semibold hover:bg-white transition-colors">
          Let's Talk
        </a>
      </div>
    </div>
  </header>

  <!-- 2. HERO SECTION -->
  <section class="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-zinc-900 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Available for Software & AI Roles • 2025/2026</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 max-w-3xl leading-tight">
        Hi, I'm <span class="text-white">Muhammad Umair</span> — 
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Mechanical Engineer & AI Application Developer.</span>
      </h1>
      <p class="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Dual-domain engineer fusing rigorous mechanical engineering principles with modern full-stack development and Agentic AI workflows. Experienced in building end-to-end web apps, generative AI automations, and thermal/physical systems simulation.
      </p>
      <div class="flex flex-wrap items-center gap-4 mb-8">
        <a href="#projects" class="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-colors shadow-lg shadow-emerald-500/20">
          Explore Projects
        </a>
        <a href="#contact" class="px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-sm font-medium transition-colors">
          m.umairehsan2@gmail.com
        </a>
      </div>
      <div class="flex items-center gap-2 pt-6 border-t border-zinc-900">
        <span class="text-xs font-mono text-zinc-500 mr-2">Core Tech:</span>
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Python</span>
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">React</span>
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Node.js</span>
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Tailwind</span>
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">SolidWorks</span>
      </div>
    </div>
  </section>

  <!-- 3. ABOUT & SKILLS SECTION -->
  <section id="about" class="py-20 border-b border-zinc-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
        01. ABOUT & BACKGROUND
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">
        Engineering Rigor Meets Modern Software Intelligence
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-300 text-sm sm:text-base leading-relaxed mb-12">
        <div class="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
          <p class="mb-4">My background combines mechanical modeling with modern web architectures and autonomous AI pipelines.</p>
          <p>I bridge physical mechanics and software intelligence to build deterministic, scalable tools for real-world operations.</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <div class="text-2xl font-mono font-bold text-white">15+</div>
            <div class="text-xs text-zinc-400 mt-1">Projects Built</div>
          </div>
          <div class="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <div class="text-2xl font-mono font-bold text-emerald-400">3+</div>
            <div class="text-xs text-zinc-400 mt-1">Certs & Internships</div>
          </div>
          <div class="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <div class="text-2xl font-mono font-bold text-white">99.4%</div>
            <div class="text-xs text-zinc-400 mt-1">System Reliability</div>
          </div>
          <div class="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
            <div class="text-2xl font-mono font-bold text-white">100%</div>
            <div class="text-xs text-zinc-400 mt-1">Vercel/Linear UX</div>
          </div>
        </div>
      </div>

      <!-- Skills Grid -->
      <div id="skills" class="pt-8">
        <h3 class="text-xl font-bold text-white mb-6">Organized Technical Competencies</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Frontend -->
          <div class="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
            <h4 class="text-sm font-semibold text-emerald-400 font-mono mb-3">Frontend Architecture</h4>
            <ul class="text-xs text-zinc-300 space-y-2">
              <li class="flex items-center justify-between"><span>React 18/19</span><span class="text-zinc-500 font-mono">Advanced</span></li>
              <li class="flex items-center justify-between"><span>Tailwind CSS</span><span class="text-zinc-500 font-mono">Expert</span></li>
              <li class="flex items-center justify-between"><span>TypeScript</span><span class="text-zinc-500 font-mono">Proficient</span></li>
            </ul>
          </div>
          <!-- Backend & Automation -->
          <div class="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
            <h4 class="text-sm font-semibold text-emerald-400 font-mono mb-3">Backend & Automation</h4>
            <ul class="text-xs text-zinc-300 space-y-2">
              <li class="flex items-center justify-between"><span>Node.js / Express</span><span class="text-zinc-500 font-mono">Advanced</span></li>
              <li class="flex items-center justify-between"><span>Python / FastAPI</span><span class="text-zinc-500 font-mono">Advanced</span></li>
              <li class="flex items-center justify-between"><span>n8n Webhook Flows</span><span class="text-zinc-500 font-mono">Proficient</span></li>
            </ul>
          </div>
          <!-- AI & CAD -->
          <div class="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
            <h4 class="text-sm font-semibold text-emerald-400 font-mono mb-3">AI & Engineering Systems</h4>
            <ul class="text-xs text-zinc-300 space-y-2">
              <li class="flex items-center justify-between"><span>Agentic RAG / LLMs</span><span class="text-zinc-500 font-mono">Advanced</span></li>
              <li class="flex items-center justify-between"><span>SolidWorks 3D CAD</span><span class="text-zinc-500 font-mono">Advanced</span></li>
              <li class="flex items-center justify-between"><span>Thermodynamics / Sim</span><span class="text-zinc-500 font-mono">Academic</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. FEATURED PROJECTS SHOWCASE -->
  <section id="projects" class="py-20 border-b border-zinc-900 bg-zinc-950/70">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
        02. FEATURED WORK
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8">Selected Engineering & AI Projects</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Project 1: AutoCare Pro -->
        <div class="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">Full-Stack</span>
              <span class="text-[10px] font-mono text-zinc-400">Featured</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">AutoCare Pro</h3>
            <p class="text-xs font-mono text-emerald-400 mb-3">Automotive Service & Telematics Hub</p>
            <p class="text-xs text-zinc-400 leading-relaxed mb-4">Enterprise workshop management platform with customer booking, live service stages, and telemetry diagnostic logging.</p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1 mb-4">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">React</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">Node.js</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">Tailwind</span>
            </div>
            <div class="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs font-mono">
              <a href="#" class="text-zinc-400 hover:text-white">GitHub</a>
              <a href="#" class="text-emerald-400 hover:text-emerald-300 font-semibold">Live Demo →</a>
            </div>
          </div>
        </div>

        <!-- Project 2: AI LinkedIn Post Generator -->
        <div class="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">Generative AI</span>
              <span class="text-[10px] font-mono text-zinc-400">Featured</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">AI LinkedIn Post Generator</h3>
            <p class="text-xs font-mono text-emerald-400 mb-3">Autonomous Technical Copywriter</p>
            <p class="text-xs text-zinc-400 leading-relaxed mb-4">Autonomous prompt orchestration tool turning technical engineering ideas into high-engagement carousels and posts.</p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1 mb-4">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">Python</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">LLM API</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">n8n</span>
            </div>
            <div class="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs font-mono">
              <a href="#" class="text-zinc-400 hover:text-white">GitHub</a>
              <a href="#" class="text-emerald-400 hover:text-emerald-300 font-semibold">Live Demo →</a>
            </div>
          </div>
        </div>

        <!-- Project 3: Solar Water Heating System -->
        <div class="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">Mechanical CAD</span>
              <span class="text-[10px] font-mono text-zinc-400">Featured</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-1">Solar Water Heating System</h3>
            <p class="text-xs font-mono text-emerald-400 mb-3">Thermodynamic Simulation & CAD</p>
            <p class="text-xs text-zinc-400 leading-relaxed mb-4">CAD-modeled and simulated thermal collector system maximizing energy absorption under fluctuating seasonal sunlight.</p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1 mb-4">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">SolidWorks</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">MATLAB</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">Physics</span>
            </div>
            <div class="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs font-mono">
              <a href="#" class="text-zinc-400 hover:text-white">GitHub</a>
              <a href="#" class="text-emerald-400 hover:text-emerald-300 font-semibold">Live Demo →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. ACHIEVEMENTS & CERTIFICATIONS TIMELINE -->
  <section id="certifications" class="py-20 border-b border-zinc-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
        03. RECOGNITION & HONORS
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8">Certifications & Experience Timeline</h2>

      <div class="border-l-2 border-zinc-800 pl-6 sm:pl-8 space-y-8">
        <div class="relative">
          <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-zinc-950"></div>
          <div class="text-xs font-mono text-emerald-400">2025 - Present • Award Distinction</div>
          <h3 class="text-base sm:text-lg font-bold text-white mt-0.5">Generative AI Application Developer — Top Performer</h3>
          <p class="text-xs font-mono text-zinc-400 mb-2">AI Excellence Cohort & Certification</p>
          <p class="text-xs text-zinc-300">Recognized for architecting autonomous reasoning pipelines and RAG vector retrievers.</p>
        </div>

        <div class="relative">
          <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-600 border-4 border-zinc-950"></div>
          <div class="text-xs font-mono text-zinc-400">2024 • AI Internship</div>
          <h3 class="text-base sm:text-lg font-bold text-white mt-0.5">Artificial Intelligence Developer Intern</h3>
          <p class="text-xs font-mono text-zinc-400 mb-2">CodeAlpha Tech Solutions</p>
          <p class="text-xs text-zinc-300">Engineered computer vision classification systems and automated data extraction pipelines.</p>
        </div>

        <div class="relative">
          <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-600 border-4 border-zinc-950"></div>
          <div class="text-xs font-mono text-zinc-400">2024 • Verified Credential</div>
          <h3 class="text-base sm:text-lg font-bold text-white mt-0.5">Modern AI & Network Fundamentals</h3>
          <p class="text-xs font-mono text-zinc-400 mb-2">Cisco Networking Academy</p>
          <p class="text-xs text-zinc-300">Completed intensive coursework in enterprise AI, data networking protocols, and secure infrastructure.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. CONTACT SECTION -->
  <section id="contact" class="py-20 bg-zinc-950">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
        04. GET IN TOUCH
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8">Professional Contact & Inquiries</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p class="text-zinc-300 text-sm mb-6">Open for software engineering internships, AI developer positions, and technical collaborations.</p>
          <div class="space-y-3 text-xs font-mono text-zinc-300">
            <div class="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">Email: m.umairehsan2@gmail.com</div>
            <div class="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">Location: Pakistan & Remote Worldwide</div>
            <div class="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">Response Time: &lt; 24 Hours</div>
          </div>
        </div>

        <!-- FormSubmit Integration -->
        <div class="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
          <form action="https://formsubmit.co/m.umairehsan2@gmail.com" method="POST" class="space-y-4">
            <input type="text" name="_honey" style="display:none">
            <input type="hidden" name="_captcha" value="false">
            <div>
              <label class="block text-xs font-mono text-zinc-400 mb-1">Your Name</label>
              <input type="text" name="name" required placeholder="Alex Johnson" class="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white">
            </div>
            <div>
              <label class="block text-xs font-mono text-zinc-400 mb-1">Email Address</label>
              <input type="email" name="email" required placeholder="alex@company.com" class="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white">
            </div>
            <div>
              <label class="block text-xs font-mono text-zinc-400 mb-1">Message</label>
              <textarea name="message" rows="3" required placeholder="Let's discuss a project..." class="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white"></textarea>
            </div>
            <button type="submit" class="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors">
              Transmit Message via FormSubmit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="py-8 border-t border-zinc-900 text-center text-xs font-mono text-zinc-500">
    <p>© 2025 Muhammad Umair. Task 06: Student Portfolio Prototype.</p>
  </footer>

  <script>
    // Initialize Lucide Icons
    lucide.createIcons();
  </script>
</body>
</html>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadFile = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      id="html-exporter-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-slate-700/90 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-100 shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <span>Task 06 Single-File HTML Exporter</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-semibold">
                  CDN & Zero-Install Ready
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Self-contained, production-ready single HTML file with Tailwind CDN & FormSubmit integration.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="px-6 py-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                activeTab === 'preview' ? 'bg-slate-800 text-emerald-300 border border-slate-700/60 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              portfolio.html (Standalone)
            </button>
            <button
              onClick={() => setActiveTab('instructions')}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                activeTab === 'instructions' ? 'bg-slate-800 text-emerald-300 border border-slate-700/60 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Hackathon Quick Guide
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
            <button
              onClick={handleDownloadFile}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs font-mono transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .html</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs leading-relaxed bg-slate-950 text-slate-300">
          {activeTab === 'preview' ? (
            <pre className="whitespace-pre-wrap select-all selection:bg-emerald-500/30 selection:text-emerald-200">
              {standaloneHtmlCode}
            </pre>
          ) : (
            <div className="space-y-4 font-sans text-sm text-slate-300">
              <h4 className="text-base font-bold text-white font-mono flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                How to Test & Submit for Task 06:
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-300 pl-2">
                <li>Click <strong>Download .html</strong> or copy the full code snippet to your clipboard.</li>
                <li>Save it as <code className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-300 font-mono">portfolio.html</code> or <code className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-300 font-mono">index.html</code> anywhere on your local computer.</li>
                <li>Double click the file to open it directly in any browser (Chrome, Edge, Firefox, Safari).</li>
                <li>All styles and Lucide icons load automatically via official CDNs with zero build tools or local servers needed.</li>
                <li>The contact form is pre-configured to send messages straight to <strong className="text-white font-mono">{PERSONAL_INFO.email}</strong> via FormSubmit.co.</li>
              </ol>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>Target: Task 06 Student Portfolio Website</span>
          <button onClick={onClose} className="hover:text-slate-300">Close</button>
        </div>
      </div>
    </div>
  );
};
