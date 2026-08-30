import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SingleHtmlExporter } from './components/SingleHtmlExporter';

export default function App() {
  const [isExporterOpen, setIsExporterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 antialiased flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300 relative overflow-x-hidden">
      {/* Global Ambient Glow Accents */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-500/5 via-teal-500/3 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-t from-emerald-950/10 via-slate-900/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Sticky Navigation */}
      <Navbar onOpenExporter={() => setIsExporterOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenExporter={() => setIsExporterOpen(true)} />

        {/* 2. About & Philosophy */}
        <AboutSection />

        {/* 3. Skills & Competency Matrix */}
        <SkillsSection />

        {/* 4. Featured Projects */}
        <ProjectsSection />

        {/* 5. Achievements & Certifications Timeline */}
        <TimelineSection />

        {/* 6. Contact & FormSubmit Form */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer onOpenExporter={() => setIsExporterOpen(true)} />

      {/* Standalone HTML Exporter Modal */}
      <SingleHtmlExporter 
        isOpen={isExporterOpen} 
        onClose={() => setIsExporterOpen(false)} 
      />
    </div>
  );
}

