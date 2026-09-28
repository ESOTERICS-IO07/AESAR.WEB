import React, { useState } from 'react';
import { Mail, Github, Compass, FileText, BookOpen, Send, X, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Research Collaboration');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setContactModalOpen(false);
      setMessage('');
    }, 2500);
  };

  return (
    <footer className="bg-[#FAFBF9] border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xl font-bold font-mono tracking-tight text-slate-950">
                AESAR
              </span>
              <span className="text-xs font-mono text-slate-500">
                LABS
              </span>
            </div>

            <p className="text-xs font-mono text-slate-700 font-semibold">
              Autonomous Ecosystem Scouting & Analysis Rover
            </p>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              An AI + IoT agricultural robotics research initiative developed for the Resonance 48-Hour Hackathon 2026 (SCOPE) and advancing toward a multi-layer autonomous field intelligence platform.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded-xs">
                Top 5 Finalist · Hardware Track · Resonance 2026
              </span>
            </div>
          </div>

          {/* Quick Links Column 1: System */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              SYSTEM
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <a href="#overview" className="hover:text-emerald-800 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-emerald-800 transition-colors">Architecture</a>
              </li>
              <li>
                <a href="#exploration" className="hover:text-emerald-800 transition-colors">AESA Exploration</a>
              </li>
              <li>
                <a href="#canopy" className="hover:text-emerald-800 transition-colors">Canopy Stratification</a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-emerald-800 transition-colors">PDR & AMRI Matrix</a>
              </li>
              <li>
                <a href="#hardware" className="hover:text-emerald-800 transition-colors">Hardware Lab</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Research */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              RESEARCH
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <a href="#research" className="hover:text-emerald-800 transition-colors">Preprints & Papers</a>
              </li>
              <li>
                <a href="#models" className="hover:text-emerald-800 transition-colors">Model Specifications</a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-emerald-800 transition-colors">Roadmap & Timeline</a>
              </li>
              <li>
                <a href="#hackathon" className="hover:text-emerald-800 transition-colors">Resonance Sprint</a>
              </li>
              <li>
                <a href="#simulation" className="hover:text-emerald-800 transition-colors">Field Simulator</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 3: Contact & Collab */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              CONNECT & COLLABORATE
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Open to academic partnerships, agronomic field trial collaborations, and robotics research inquiries.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setContactModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-semibold text-white bg-slate-900 rounded-md hover:bg-emerald-800 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Research Team</span>
              </button>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-semibold text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-900" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Integrity Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 AESAR Robotics Lab</span>
            <span>·</span>
            <span>Resonance 48-Hour Hackathon Finalist</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Hardware Track Top 5</span>
            <span>·</span>
            <span>Organised by SCOPE</span>
            <span>·</span>
            <span className="text-emerald-800">Precision Agronomy</span>
          </div>
        </div>
      </div>

      {/* Contact Research Team Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg border border-slate-200 max-w-md w-full p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">INQUIRY DISPATCH</span>
                <h3 className="text-lg font-bold text-slate-950 font-mono mt-0.5">
                  Contact AESAR Research Team
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setContactModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSent ? (
              <div className="p-6 text-center space-y-2 bg-emerald-50 border border-emerald-200 rounded-md">
                <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
                <h4 className="text-sm font-bold text-slate-950 font-mono">Inquiry Dispatched</h4>
                <p className="text-xs text-slate-600">
                  Thank you! The AESAR project leads (Stephen, Aryaman, Kavin, Rahul) have received your note.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-700 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Dr. Jane Agronomist"
                    className="w-full px-3 py-1.5 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-700 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="jane@university.edu"
                    className="w-full px-3 py-1.5 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-700 block mb-1">
                    Inquiry Nature
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-emerald-600 bg-white"
                  >
                    <option>Research Collaboration / University Plot</option>
                    <option>Agronomic Field Trial Testing</option>
                    <option>Hardware & Embedded Systems Discussion</option>
                    <option>General Project Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-700 block mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="We operate a 20-acre test plot and would be interested in benchmarking the PDR model..."
                    className="w-full px-3 py-1.5 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setContactModalOpen(false)}
                    className="px-3 py-2 text-xs font-mono text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold text-white bg-slate-900 rounded-md hover:bg-emerald-800 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
