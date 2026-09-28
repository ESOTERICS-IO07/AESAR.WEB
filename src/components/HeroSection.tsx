import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Compass, Award, ShieldCheck, Cpu } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const HeroSection: React.FC = () => {
  const [roverPos, setRoverPos] = useState({ x: 30, y: 55 });
  const [heading, setHeading] = useState(38);
  const [isAutoMoving, setIsAutoMoving] = useState(true);
  const [activeScanAngle, setActiveScanAngle] = useState(0);

  // Autonomous rover gentle patrol animation
  useEffect(() => {
    if (!isAutoMoving) return;
    const interval = setInterval(() => {
      setRoverPos((prev) => {
        // Move diagonally along crop rows
        let newX = prev.x + 0.45;
        let newY = prev.y + 0.28;
        let newHeading = 38;

        if (newX > 82) {
          newX = 18;
          newY = 28;
        }
        return { x: newX, y: newY };
      });
      setActiveScanAngle((a) => (a + 4) % 360);
    }, 80);

    return () => clearInterval(interval);
  }, [isAutoMoving]);

  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 border-b border-slate-200/80 bg-tech-grid">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-80 h-80 bg-slate-300/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hackathon Achievement Tagline */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-sm shadow-2xs text-xs font-mono text-slate-700">
            <Award className="w-4 h-4 text-emerald-700" />
            <span className="font-semibold text-emerald-800">TOP 5 FINALIST</span>
            <span className="text-slate-300">|</span>
            <span>Hardware Track · Resonance 48h Hackathon 2026</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>177 Teams</span>
            <span>·</span>
            <span>632 Participants</span>
            <span>·</span>
            <span>Organised by SCOPE</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Thesis & Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <StatusBadge status="PROTOTYPE" />
                <span className="text-xs font-mono text-slate-500">
                  Dual-ESP32 Autonomous Ground Rover
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.08] font-mono">
                AESAR
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 leading-snug">
                Autonomous Ecosystem Scouting & Analysis Rover
              </p>
            </div>

            {/* Subheadline block */}
            <div className="pl-4 border-l-2 border-emerald-600/80 bg-emerald-50/40 py-2.5 pr-3 rounded-r-sm">
              <p className="text-base text-slate-800 italic font-serif">
                &ldquo;From detecting problems in a field to understanding the ecosystem behind them.&rdquo;
              </p>
            </div>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              An AI + IoT agricultural robotics platform combining autonomous exploration, field perception,
              environmental sensing, and ecosystem-level analysis — transforming single-point pest detection into
              context-aware decision support.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-md transition-all shadow-xs"
              >
                <Compass className="w-4 h-4 text-emerald-300" />
                <span>Explore the System</span>
              </a>

              <a
                href="https://github.com/ESOTERICS-IO07/AESAR"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all shadow-2xs"
              >
                <Github className="w-4 h-4 text-slate-800" />
                <span>View GitHub Repository</span>
              </a>
            </div>

            {/* Micro Specs Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
              <div>
                <p className="text-xs text-slate-500 font-mono">CORE SYSTEM</p>
                <p className="text-sm font-semibold text-slate-900 font-mono">Dual ESP32</p>
                <p className="text-[11px] text-slate-500">Brain & Rover UART</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">DRIVE STACK</p>
                <p className="text-sm font-semibold text-slate-900 font-mono">4x DC + BTS7960</p>
                <p className="text-[11px] text-slate-500">All-terrain torque</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">ANALYSIS MODEL</p>
                <p className="text-sm font-semibold text-slate-900 font-mono">PDR + AMRI</p>
                <p className="text-[11px] text-slate-500">Ecosystem metrics</p>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Agricultural Field & Technical Rover Representation */}
          <div className="lg:col-span-6">
            <div className="relative bg-white border border-slate-200 rounded-lg p-4 shadow-sm overflow-hidden">
              {/* Field Stage Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-slate-900">FIELD SCAN STAGE: TEST BED ALPHA</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAutoMoving(!isAutoMoving)}
                    className="text-[11px] text-emerald-800 hover:text-emerald-950 font-medium px-2 py-0.5 bg-emerald-50 border border-emerald-200 rounded-sm cursor-pointer"
                  >
                    {isAutoMoving ? 'PAUSE PATROL' : 'RESUME PATROL'}
                  </button>
                  <span className="text-slate-400">|</span>
                  <span className="tabular-nums">X: {roverPos.x.toFixed(1)}m</span>
                  <span className="tabular-nums">Y: {roverPos.y.toFixed(1)}m</span>
                </div>
              </div>

              {/* Interactive SVG Field Canvas */}
              <div className="relative w-full aspect-[16/11] bg-[#F7F9F6] rounded-md border border-slate-200/80 overflow-hidden select-none">
                {/* Crop Bed Soil & Furrow Grid Lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="cropRows" width="100" height="24" patternUnits="userSpaceOnUse">
                      <rect width="100" height="12" fill="#EBF2E8" />
                      <line x1="0" y1="12" x2="100" y2="12" stroke="#D1E2CC" strokeWidth="1" strokeDasharray="3 3" />
                      <circle cx="20" cy="6" r="2.5" fill="#4D7C0F" opacity="0.4" />
                      <circle cx="50" cy="6" r="2.5" fill="#4D7C0F" opacity="0.5" />
                      <circle cx="80" cy="6" r="2.5" fill="#4D7C0F" opacity="0.4" />
                    </pattern>

                    {/* Laser Scan Gradient */}
                    <radialGradient id="scanGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                      <stop offset="70%" stopColor="#059669" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <rect width="100%" height="100%" fill="url(#cropRows)" />

                  {/* Field Coordinates Grid */}
                  <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="4 4" />

                  {/* Explored Trajectory Breadcrumbs */}
                  <path
                    d={`M 18% 28% L 35% 38% L 50% 48% L ${roverPos.x}% ${roverPos.y}%`}
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    strokeOpacity="0.75"
                  />

                  {/* Plotted Observation Targets */}
                  <g>
                    <circle cx="35%" cy="38%" r="4" fill="#047857" />
                    <circle cx="35%" cy="38%" r="9" fill="none" stroke="#047857" strokeWidth="0.75" opacity="0.6" />
                    <text x="37%" y="36%" fontSize="9" fontFamily="monospace" fill="#065F46">PDR Pt 1</text>
                  </g>
                  <g>
                    <circle cx="50%" cy="48%" r="4" fill="#047857" />
                    <circle cx="50%" cy="48%" r="9" fill="none" stroke="#047857" strokeWidth="0.75" opacity="0.6" />
                    <text x="52%" y="46%" fontSize="9" fontFamily="monospace" fill="#065F46">AMRI Pt 2</text>
                  </g>
                </svg>

                {/* Stylized Rover Entity (Positioned via CSS percentage) */}
                <div
                  className="absolute pointer-events-none transition-all duration-100 ease-out"
                  style={{
                    left: `${roverPos.x}%`,
                    top: `${roverPos.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/* Optical Scanning Cone / Fan */}
                  <div
                    className="absolute -top-16 -left-16 w-32 h-32 rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.05) 60%, transparent 100%)',
                      transform: `rotate(${heading}deg)`,
                    }}
                  />

                  {/* Scanning beam line */}
                  <div
                    className="absolute top-1/2 left-1/2 w-20 h-[1.5px] bg-emerald-500 origin-left"
                    style={{
                      transform: `translate(0, -50%) rotate(${heading - 25}deg)`,
                      boxShadow: '0 0 8px rgba(16, 185, 129, 0.8)',
                    }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 w-20 h-[1.5px] bg-emerald-500 origin-left"
                    style={{
                      transform: `translate(0, -50%) rotate(${heading + 25}deg)`,
                      boxShadow: '0 0 8px rgba(16, 185, 129, 0.8)',
                    }}
                  />

                  {/* Physical Stylized Rover Chassis */}
                  <div
                    className="relative w-14 h-18 bg-slate-900 border-2 border-emerald-400 rounded-sm shadow-md flex flex-col items-center justify-between p-1.5"
                    style={{
                      transform: `rotate(${heading - 90}deg)`,
                    }}
                  >
                    {/* Left & Right 4 Wheels */}
                    <div className="absolute -left-2 top-1.5 w-2 h-4 bg-slate-950 rounded-xs border border-slate-700" />
                    <div className="absolute -left-2 bottom-1.5 w-2 h-4 bg-slate-950 rounded-xs border border-slate-700" />
                    <div className="absolute -right-2 top-1.5 w-2 h-4 bg-slate-950 rounded-xs border border-slate-700" />
                    <div className="absolute -right-2 bottom-1.5 w-2 h-4 bg-slate-950 rounded-xs border border-slate-700" />

                    {/* Sensor Mast / Camera Turret */}
                    <div className="w-full flex items-center justify-center pt-0.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                      </div>
                    </div>

                    {/* Dual Microcontroller Internal Circuit Representation */}
                    <div className="w-full flex justify-between px-1 text-[7px] font-mono text-emerald-400">
                      <span>ESP1</span>
                      <span>ESP2</span>
                    </div>

                    {/* Heading Front Arrow */}
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-emerald-400 rotate-180" />
                  </div>

                  {/* Floating Status Tag */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded-xs whitespace-nowrap border border-slate-700">
                    SCOUT ACTIVE
                  </div>
                </div>
              </div>

              {/* Bottom Real-time Telemetry Bar */}
              <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-4 gap-2 text-center text-xs font-mono text-slate-600">
                <div className="bg-slate-50 p-1.5 rounded-xs">
                  <span className="block text-[10px] text-slate-400">HEADING</span>
                  <span className="font-semibold text-slate-800">{heading}° NE</span>
                </div>
                <div className="bg-slate-50 p-1.5 rounded-xs">
                  <span className="block text-[10px] text-slate-400">ToF RANGE</span>
                  <span className="font-semibold text-slate-800">1.42 m</span>
                </div>
                <div className="bg-slate-50 p-1.5 rounded-xs">
                  <span className="block text-[10px] text-slate-400">TRAJECTORY</span>
                  <span className="font-semibold text-emerald-700">AESA DIAG</span>
                </div>
                <div className="bg-slate-50 p-1.5 rounded-xs">
                  <span className="block text-[10px] text-slate-400">COVERAGE</span>
                  <span className="font-semibold text-slate-800">46.8 %</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
