import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare, 
  Github, 
  Linkedin,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleClientSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // We allow natural FormSubmit.co submission if required, but also provide immediate UI feedback
    // If the user wants standard POST, it will post to formsubmit.co/m.umairehsan2@gmail.com
    // Let's ensure standard form submission works seamlessly
  };

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 border-b border-slate-800/60 bg-slate-950/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3 shadow-sm">
            <span>05. GET IN TOUCH</span>
          </div>
          <h2 
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-4"
          >
            Let's Discuss Projects & Opportunities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind, an engineering problem, or an internship/developer role? Reach out directly via the form or my personal contact channels below.
          </p>
        </div>

        {/* 2-Column Grid: Contact Info + FormSubmit Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Availability Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <h3 className="font-semibold text-sm text-slate-100">
                    Open for New Challenges
                  </h3>
                  <p className="text-xs text-slate-400">
                    Full-Stack • Agentic AI • Mechanical Systems
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Actively seeking software engineering internships, AI developer roles, and freelance technical collaborations for 2025/2026.
              </p>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                {/* Email Item */}
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/70">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-mono text-slate-200 truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <button
                    id="contact-copy-email-btn"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                    title="Copy email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/70 text-xs font-mono text-slate-300">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/70 text-xs font-mono text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Response time: &lt; 24 hours guaranteed</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Developer Profiles
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  id="contact-github-link"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-mono">GitHub</span>
                </a>
                <a
                  id="contact-linkedin-link"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: FormSubmit Integrated Contact Form */}
          <div className="lg:col-span-7">
            <div 
              id="contact-form-container"
              className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-semibold text-base text-slate-100">
                    Send a Direct Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  FormSubmit.co API
                </span>
              </div>

              {/* FormSubmit.co Form */}
              <form
                id="portfolio-contact-form"
                action={`https://formsubmit.co/${PERSONAL_INFO.email}`}
                method="POST"
                className="space-y-4"
              >
                {/* Anti-Spam Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Disable Captcha for smooth hackathon testing if desired */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Portfolio Inquiry from Website" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your project, timeline, or position details..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-y font-sans"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm tracking-tight transition-all duration-150 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 group"
                >
                  <span>Transmit Message</span>
                  <Send className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/70" />
                  <span>Direct delivery via FormSubmit with end-to-end spam protection</span>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
