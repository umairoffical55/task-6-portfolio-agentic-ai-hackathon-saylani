import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Terminal, 
  ArrowUpRight, 
  FileCode2, 
  Mail, 
  Briefcase 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenExporter?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenExporter }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'skills', 'timeline', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Certifications', href: '#timeline', id: 'timeline' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <a 
          id="nav-brand-link"
          href="#" 
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-100 font-mono font-semibold text-sm group-hover:border-emerald-500/60 group-hover:text-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-200 shadow-inner">
            <span className="text-xs text-slate-300 group-hover:text-emerald-400 transition-colors">MU</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-tight text-slate-100 group-hover:text-white transition-colors flex items-center gap-1.5">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
              Mechanical Eng. • AI Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-slate-900/70 border border-slate-800/90 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-150 ${
                  isActive
                    ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700/60 font-semibold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Status Badge + CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Status Badge */}
          <div 
            id="status-badge"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/90 text-xs font-mono text-slate-300 shadow-sm"
            title="Available for Internship and Full-Time Roles"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">{PERSONAL_INFO.status}</span>
          </div>

          {/* Hackathon Single HTML Export trigger */}
          {onOpenExporter && (
            <button
              id="open-html-export-btn"
              onClick={onOpenExporter}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-slate-700 text-xs font-mono transition-all duration-150 shadow-sm"
              title="View standalone HTML for hackathon submission"
            >
              <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>HTML Source</span>
            </button>
          )}

          {/* Let's Talk CTA */}
          <a
            id="nav-contact-cta"
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold tracking-tight transition-all duration-150 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          {onOpenExporter && (
            <button
              id="mobile-html-export-btn"
              onClick={onOpenExporter}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400"
              aria-label="View HTML Export"
            >
              <FileCode2 className="w-4 h-4" />
            </button>
          )}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="sm:hidden bg-slate-950/95 border-b border-slate-800 px-5 pt-3 pb-6 mt-2 backdrop-blur-xl transition-all"
        >
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-slate-300">{PERSONAL_INFO.status}</span>
          </div>
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-900/80 px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                id="mobile-nav-contact-cta"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs transition-colors shadow-md shadow-emerald-500/20"
              >
                Contact Muhammad Umair
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
