import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Compass, MapPin, Eye, Zap, Info } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const ExplorationSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(15);
  const [activeWaypoints, setActiveWaypoints] = useState<Array<{ x: number; y: number; id: number; label: string }>>([
    { x: 20, y: 30, id: 1, label: 'Pt 01 (PDR 1.2)' },
    { x: 38, y: 48, id: 2, label: 'Pt 02 (AMRI 0.34)' },
  ]);

  // Path coordinates for structured diagonal AESA trajectory
  // (x, y) coordinates representing diagonal passes
  const pathPoints = [
    { x: 10, y: 20 },
    { x: 30, y: 35 },
    { x: 50, y: 50 },
    { x: 70, y: 65 },
    { x: 90, y: 80 },
    { x: 80, y: 25 },
    { x: 60, y: 40 },
    { x: 40, y: 55 },
    { x: 20, y: 70 },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) {
          setIsPlaying(false);
          return 98;
        }
        const next = prev + 1.2;
        // Dynamically add observation points as coverage progresses
        if (next > 40) {
          setActiveWaypoints((pts) => {
            if (pts.some((p) => p.id === 3)) return pts;
            return [...pts, { x: 55, y: 52, id: 3, label: 'Pt 03 (Ladybird Colony)' }];
          });
        }
        if (next > 70) {
          setActiveWaypoints((pts) => {
            if (pts.some((p) => p.id === 4)) return pts;
            return [...pts, { x: 75, y: 68, id: 4, label: 'Pt 04 (Soil Moisture 34%)' }];
          });
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(15);
    setActiveWaypoints([
      { x: 20, y: 30, id: 1, label: 'Pt 01 (PDR 1.2)' },
      { x: 38, y: 48, id: 2, label: 'Pt 02 (AMRI 0.34)' },
    ]);
  };

  // Interpolated rover position along diagonal path
  const currentRoverPos = {
    x: 10 + (progress / 100) * 80,
    y: 20 + Math.sin((progress / 100) * Math.PI * 3) * 25 + (progress / 100) * 55,
  };

  return (
    <section id="exploration" className="py-20 bg-[#FAFBF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              Field Trajectory Strategy
            </span>
            <span className="text-slate-300">·</span>
            <StatusBadge status="PROTOTYPE" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            &ldquo;Explore before you analyse.&rdquo;
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conventional robotic scouting forces rigid, repetitive grid walks that waste energy and repeatedly sample the exact same viewing angles. The AESAR exploration paradigm deploys structured diagonal trajectories to acquire multi-angle crop views across adjacent furrows.
          </p>
        </div>

        {/* Interactive Simulation & Concept Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Canvas: Interactive Field Map */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
            <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-100 gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-slate-900 block">
                  AESA DIAGONAL SCANNING TRAJECTORY MAP
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Exploration Swath & Point Observation Placements
                </span>
              </div>

              {/* Simulation Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-md transition-all cursor-pointer ${
                    isPlaying
                      ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                      : 'bg-emerald-800 text-white hover:bg-emerald-900 shadow-2xs'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>PAUSE SCOUT</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>START EXPLORATION</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="p-1.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                  title="Reset Exploration"
                  aria-label="Reset Exploration"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Field Map Visualization Graphic */}
            <div className="relative w-full aspect-[16/10] bg-[#F4F7F2] rounded-md border border-slate-200 overflow-hidden select-none">
              {/* Agricultural Grid & Plant Rows */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Explored Mask Gradient */}
                  <linearGradient id="exploredGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                    <stop offset={`${progress}%`} stopColor="#10B981" stopOpacity="0.15" />
                    <stop offset={`${progress + 5}%`} stopColor="#CBD5E1" stopOpacity="0.05" />
                  </linearGradient>

                  <pattern id="cropFurrows" width="80" height="20" patternUnits="userSpaceOnUse">
                    <rect width="80" height="10" fill="#E8EFE5" opacity="0.6" />
                    <line x1="0" y1="10" x2="80" y2="10" stroke="#D1DECE" strokeWidth="0.75" strokeDasharray="3 3" />
                  </pattern>
                </defs>

                {/* Soil furrows */}
                <rect width="100%" height="100%" fill="url(#cropFurrows)" />

                {/* Explored Zone overlay */}
                <rect width="100%" height="100%" fill="url(#exploredGrad)" />

                {/* Coordinate boundary ticks */}
                <line x1="10%" y1="10%" x2="90%" y2="10%" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="10%" y1="90%" x2="90%" y2="90%" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="10%" y1="10%" x2="10%" y2="90%" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="90%" y1="10%" x2="90%" y2="90%" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />

                {/* Theoretical Diagonal Trajectory Plan (dashed) */}
                <path
                  d="M 10 20 L 30 35 L 50 50 L 70 65 L 90 80 L 80 25 L 60 40 L 40 55 L 20 70"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  transform="scale(5.5, 3.2)"
                />

                {/* Active Traversed Path */}
                <path
                  d={`M 10% 20% Q 30% 45% ${currentRoverPos.x}% ${currentRoverPos.y}%`}
                  fill="none"
                  stroke="#059669"
                  strokeWidth="2.5"
                />

                {/* Observation Targets Discovered Along Path */}
                {activeWaypoints.map((wp) => (
                  <g key={wp.id} className="transition-all duration-300">
                    <circle cx={`${wp.x}%`} cy={`${wp.y}%`} r="6" fill="#047857" opacity="0.8" />
                    <circle cx={`${wp.x}%`} cy={`${wp.y}%`} r="12" fill="none" stroke="#047857" strokeWidth="1" strokeDasharray="2 2" />
                    <text x={`${wp.x + 2}%`} y={`${wp.y - 2}%`} fontSize="10" fontFamily="monospace" fontWeight="600" fill="#065F46">
                      {wp.label}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Rover Entity On Map */}
              <div
                className="absolute transition-all duration-100 ease-out"
                style={{
                  left: `${currentRoverPos.x}%`,
                  top: `${currentRoverPos.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Active Sensor Coverage Arc */}
                <div
                  className="absolute -top-12 -left-12 w-24 h-24 rounded-full pointer-events-none border border-emerald-500/40 bg-emerald-500/10"
                  style={{
                    animation: isPlaying ? 'pulse 1.5s infinite' : 'none',
                  }}
                />

                {/* Rover Body Icon */}
                <div className="relative w-8 h-10 bg-slate-950 border-2 border-emerald-400 rounded-xs flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold bg-slate-900 text-white px-1 rounded-xs whitespace-nowrap">
                  AESAR
                </span>
              </div>

              {/* Legend overlay */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-200 p-2 rounded-sm text-[10px] font-mono text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Observed Ecological Point</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-emerald-600" />
                  <span>Traversed Trajectory</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 border-b border-dashed border-slate-400" />
                  <span>Planned AESA Scan Swath</span>
                </div>
              </div>
            </div>

            {/* Bottom Real-time Telemetry Bar */}
            <div className="grid grid-cols-4 gap-3 mt-4 pt-3 border-t border-slate-100 text-center">
              <div className="bg-slate-50 p-2 rounded-sm">
                <span className="text-[10px] font-mono text-slate-400 block">EXPLORED AREA</span>
                <span className="text-sm font-mono font-bold text-emerald-800 tabular-nums">
                  {progress.toFixed(1)}%
                </span>
              </div>
              <div className="bg-slate-50 p-2 rounded-sm">
                <span className="text-[10px] font-mono text-slate-400 block">OBSERVATION POINTS</span>
                <span className="text-sm font-mono font-bold text-slate-900 tabular-nums">
                  {activeWaypoints.length} registered
                </span>
              </div>
              <div className="bg-slate-50 p-2 rounded-sm">
                <span className="text-[10px] font-mono text-slate-400 block">ROVER HEADING</span>
                <span className="text-sm font-mono font-bold text-slate-900 tabular-nums">
                  {(42 + Math.sin(progress) * 15).toFixed(0)}°
                </span>
              </div>
              <div className="bg-slate-50 p-2 rounded-sm">
                <span className="text-[10px] font-mono text-slate-400 block">NAV MODE</span>
                <span className="text-sm font-mono font-bold text-emerald-700">
                  {isPlaying ? 'ACTIVE SWEEP' : 'STANDBY'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Explaining the AESA Scanning Strategy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-bold text-slate-950 font-mono">
                The AESA Scanning Concept
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The exploration concept uses structured, diagonal trajectories to obtain complementary viewpoints across adjacent crop rows while reducing unnecessary stop-and-turn ground compaction.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-[#FAFBF9] border border-slate-200 rounded-sm">
                  <span className="text-xs font-mono font-bold text-slate-900 block mb-1">
                    Multi-Angle Oblique Viewpoints
                  </span>
                  <p className="text-xs text-slate-600">
                    Diagonal passes cut across sun-glare vectors, exposing shadowed underleaf foliage that standard perpendicular passes consistently miss.
                  </p>
                </div>

                <div className="p-3 bg-[#FAFBF9] border border-slate-200 rounded-sm">
                  <span className="text-xs font-mono font-bold text-slate-900 block mb-1">
                    Dynamic Swath Coverage
                  </span>
                  <p className="text-xs text-slate-600">
                    ToF rangefinders dynamically adjust forward exploration speed based on crop density, slowing down around dense foliage clusters.
                  </p>
                </div>
              </div>

              {/* Strict Integrity Disclaimer */}
              <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-sm flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-900 leading-tight">
                  <strong className="font-semibold">Research Transparency Note:</strong> Empirical power savings and traversal efficiency hypotheses are subject to upcoming field trials and are not claimed as measured benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
