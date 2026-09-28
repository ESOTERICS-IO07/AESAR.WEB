import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Exploration', href: '#exploration' },
    { label: 'Canopy', href: '#canopy' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Hardware', href: '#hardware' },
    { label: 'Research', href: '#research' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-[#FAFBF9]/90 backdrop-blur-xs border-b border-slate-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 transition-transform group-hover:scale-125" />
          <span className="text-xl font-bold tracking-tight text-slate-950 font-mono">
            AESAR
          </span>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline-block ml-1">
            ROBOTICS LAB
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-800 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-emerald-600 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#simulation"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-md hover:bg-emerald-800 transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Explore AESAR</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/50 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#simulation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white bg-emerald-800 rounded-md"
            >
              <Compass className="w-4 h-4" />
              <span>Launch Field Simulation</span>
            </a>
            <a
              href="#hackathon"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1 text-xs text-slate-500 py-1"
            >
              <span>Resonance Hackathon 2026 · Top 5 Hardware</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
