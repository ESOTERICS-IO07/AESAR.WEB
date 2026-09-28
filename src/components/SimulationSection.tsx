import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Battery, Compass, Layers, Eye, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

interface SimObservation {
  id: number;
  x: number;
  y: number;
  type: 'pest' | 'defender' | 'moisture_drop' | 'stress';
  label: string;
  pdrImpact: number;
}

export const SimulationSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [simMode, setSimMode] = useState<'AESA_DIAGONAL' | 'SYSTEMATIC_FURROW'>('AESA_DIAGONAL');
  const [progress, setProgress] = useState<number>(0);
  const [coveragePct, setCoveragePct] = useState<number>(8.5);
  const [simBattery, setSimBattery] = useState<number>(94);
  const [observations, setObservations] = useState<SimObservation[]>([]);
  const [roverCoord, setRoverCoord] = useState<{ x: number; y: number; heading: number }>({ x: 12, y: 18, heading: 45 });
  const [pathTrail, setPathTrail] = useState<Array<{ x: number; y: number }>>([{ x: 12, y: 18 }]);

  // Fixed simulated ecological clusters scattered in the field
  const fieldTargets: SimObservation[] = [
    { id: 1, x: 28, y: 32, type: 'pest', label: 'Aphid Colony (Pest)', pdrImpact: 1.4 },
    { id: 2, x: 42, y: 48, type: 'defender', label: 'Ladybird Beetle (Defender)', pdrImpact: -0.6 },
    { id: 3, x: 58, y: 36, type: 'moisture_drop', label: 'Dry Furrow Pocket (22% VWC)', pdrImpact: 0 },
    { id: 4, x: 72, y: 64, type: 'stress', label: 'Foliar Chlorosis Mask', pdrImpact: 0.5 },
    { id: 5, x: 84, y: 78, type: 'defender', label: 'Predatory Mite Cluster', pdrImpact: -0.5 },
    { id: 6, x: 38, y: 72, type: 'pest', label: 'Armyworm Feeding Lesion', pdrImpact: 1.2 },
  ];

  // Simulation tick loop
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setIsPlaying(false);
          return 100;
        }
        const nextP = p + 0.8;

        // Compute simulated rover trajectory based on mode
        let nextX = 12 + (nextP / 100) * 78;
        let nextY = 18;
        let nextHeading = 45;

        if (simMode === 'AESA_DIAGONAL') {
          // Structured diagonal traversal with undulating sine crossings
          nextY = 20 + Math.sin((nextP / 100) * Math.PI * 4) * 28 + (nextP / 100) * 48;
          nextHeading = Math.round(35 + Math.cos((nextP / 100) * Math.PI * 4) * 30);
        } else {
          // Systematic lawnmower passes
          const pass = Math.floor(nextP / 25);
          nextY = 20 + pass * 20;
          nextHeading = pass % 2 === 0 ? 90 : 270;
        }

        setRoverCoord({ x: nextX, y: nextY, heading: nextHeading });
        setPathTrail((prev) => [...prev, { x: nextX, y: nextY }]);

        // Coverage increase
        setCoveragePct((c) => Math.min(99.4, c + 0.72));

        // Simulated battery gentle draw
        setSimBattery((b) => Math.max(12, b - 0.05));

        // Check if rover is within proximity of any field targets
        fieldTargets.forEach((target) => {
          const dist = Math.hypot(target.x - nextX, target.y - nextY);
          if (dist < 8) {
            setObservations((existing) => {
              if (existing.some((e) => e.id === target.id)) return existing;
              return [...existing, target];
            });
          }
        });

        return nextP;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [isPlaying, simMode]);

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setCoveragePct(8.5);
    setSimBattery(94);
    setObservations([]);
    setRoverCoord({ x: 12, y: 18, heading: 45 });
    setPathTrail([{ x: 12, y: 18 }]);
  };

  // Derive dynamic simulated PDR from current observed targets
  const observedPests = observations.filter((o) => o.type === 'pest').length;
  const observedDefenders = observations.filter((o) => o.type === 'defender').length;
  const currentPDR = (observedPests * 12 + 10) / (observedDefenders * 14 + 12);

  return (
    <section id="simulation" className="py-20 bg-[#FAFBF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-teal-800 uppercase">
                Software Simulation Rig
              </span>
              <span className="text-slate-300">·</span>
              <StatusBadge status="SIMULATION" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
              Interactive Concept Simulation
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Experience the autonomous exploration, sensor coverage swath, and real-time biological observation algorithms of AESAR in this browser-based mission simulator.
            </p>
          </div>

          {/* Mandatory Integrity Banner */}
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-md max-w-sm self-start text-[11px] text-amber-900 font-mono leading-tight">
            <strong>SIMULATION NOTICE:</strong> All telemetry readouts, coordinates, and battery figures displayed in this panel are computer-generated conceptual models, not physical field metrics.
          </div>
        </div>

        {/* The Main Simulator Console */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-slate-100 gap-4">
            {/* Trajectory Pattern Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-500">TRAJECTORY:</span>
              <div className="flex items-center p-0.5 bg-slate-100 rounded-md border border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    handleReset();
                    setSimMode('AESA_DIAGONAL');
                  }}
                  className={`px-3 py-1 text-xs font-mono font-semibold rounded-xs transition-all cursor-pointer ${
                    simMode === 'AESA_DIAGONAL'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  AESA Diagonal Swath
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleReset();
                    setSimMode('SYSTEMATIC_FURROW');
                  }}
                  className={`px-3 py-1 text-xs font-mono font-semibold rounded-xs transition-all cursor-pointer ${
                    simMode === 'SYSTEMATIC_FURROW'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Systematic Furrow
                </button>
              </div>
            </div>

            {/* Play / Pause / Reset Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold rounded-md transition-all cursor-pointer ${
                  isPlaying
                    ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                    : 'bg-emerald-800 text-white hover:bg-emerald-900 shadow-xs'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>PAUSE MISSION</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>START MISSION</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>
            </div>
          </div>

          {/* Simulator Visual Stage Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: 2D Field Canvas */}
            <div className="lg:col-span-8 relative aspect-[16/10] bg-[#F3F7F0] rounded-md border border-slate-300 overflow-hidden select-none">
              {/* SVG Grid, Bed Lines & Targets */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Crop Bed Furrows */}
                <defs>
                  <pattern id="simCropRows" width="100" height="24" patternUnits="userSpaceOnUse">
                    <rect width="100" height="12" fill="#E4EDE1" />
                    <line x1="0" y1="12" x2="100" y2="12" stroke="#CBDAC7" strokeWidth="0.8" strokeDasharray="3 3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#simCropRows)" />

                {/* Traversed Path Trail (Breadcrumbs) */}
                {pathTrail.length > 1 && (
                  <path
                    d={`M ${pathTrail.map((pt) => `${pt.x}% ${pt.y}%`).join(' L ')}`}
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2"
                    strokeDasharray="2 1"
                  />
                )}

                {/* Field Observation Targets */}
                {fieldTargets.map((target) => {
                  const isDiscovered = observations.some((o) => o.id === target.id);
                  return (
                    <g key={target.id} className="transition-all duration-300">
                      {/* Target Marker */}
                      <circle
                        cx={`${target.x}%`}
                        cy={`${target.y}%`}
                        r={isDiscovered ? 6 : 4}
                        fill={
                          isDiscovered
                            ? target.type === 'pest'
                              ? '#E11D48'
                              : target.type === 'defender'
                              ? '#059669'
                              : '#2563EB'
                            : '#94A3B8'
                        }
                        opacity={isDiscovered ? 1 : 0.4}
                      />
                      {isDiscovered && (
                        <>
                          <circle
                            cx={`${target.x}%`}
                            cy={`${target.y}%`}
                            r="12"
                            fill="none"
                            stroke={target.type === 'pest' ? '#E11D48' : '#059669'}
                            strokeWidth="1"
                            strokeDasharray="2 2"
                            className="animate-pulse"
                          />
                          <text
                            x={`${target.x + 2}%`}
                            y={`${target.y - 2}%`}
                            fontSize="9"
                            fontFamily="monospace"
                            fontWeight="bold"
                            fill="#0F172A"
                          >
                            {target.label}
                          </text>
                        </>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Rover Entity (Interactive Visual) */}
              <div
                className="absolute pointer-events-none transition-all duration-100 ease-out"
                style={{
                  left: `${roverCoord.x}%`,
                  top: `${roverCoord.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Active Sensor Scanning Arc */}
                <div
                  className="absolute -top-12 -left-12 w-24 h-24 rounded-full border border-emerald-500/50 bg-emerald-500/10 pointer-events-none"
                  style={{
                    animation: isPlaying ? 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' : 'none',
                  }}
                />

                {/* Rover Chassis */}
                <div
                  className="relative w-8 h-11 bg-slate-950 border-2 border-emerald-400 rounded-xs flex flex-col items-center justify-between p-1 shadow-md"
                  style={{
                    transform: `rotate(${roverCoord.heading - 90}deg)`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="w-full flex justify-between px-0.5">
                    <span className="w-1 h-2 bg-slate-800 rounded-2xs" />
                    <span className="w-1 h-2 bg-slate-800 rounded-2xs" />
                  </div>
                </div>

                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-[8px] font-mono px-1 rounded-xs whitespace-nowrap">
                  ROVER [ACTIVE]
                </div>
              </div>

              {/* In-Canvas HUD Overlay */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-200 px-3 py-2 rounded-sm text-[11px] font-mono text-slate-700 space-y-1 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
                  <span className="font-bold text-slate-900">
                    STATUS: {isPlaying ? 'SCOUTING' : 'HOLD / IDLE'}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500">
                  COORD: ({roverCoord.x.toFixed(1)}m, {roverCoord.y.toFixed(1)}m) · {roverCoord.heading}°
                </div>
              </div>
            </div>

            {/* Right: Live Telemetry & Mission Statistics HUD */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-[#FAFBF9] border border-slate-200 rounded-md p-4 space-y-3">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  SIMULATED MISSION TELEMETRY
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-2.5 rounded-sm border border-slate-200/80">
                    <span className="text-[10px] font-mono text-slate-400 block">AREA COVERAGE</span>
                    <span className="text-lg font-bold font-mono text-emerald-800 tabular-nums">
                      {coveragePct.toFixed(1)}%
                    </span>
                  </div>

                  <div className="bg-white p-2.5 rounded-sm border border-slate-200/80">
                    <span className="text-[10px] font-mono text-slate-400 block">BATTERY (SIM)</span>
                    <span className="text-lg font-bold font-mono text-slate-900 tabular-nums">
                      {simBattery.toFixed(0)}%
                    </span>
                  </div>

                  <div className="bg-white p-2.5 rounded-sm border border-slate-200/80">
                    <span className="text-[10px] font-mono text-slate-400 block">OBSERVED ENTITIES</span>
                    <span className="text-lg font-bold font-mono text-slate-900 tabular-nums">
                      {observations.length}
                    </span>
                  </div>

                  <div className="bg-white p-2.5 rounded-sm border border-slate-200/80">
                    <span className="text-[10px] font-mono text-slate-400 block">DYNAMIC PDR</span>
                    <span className="text-lg font-bold font-mono text-purple-800 tabular-nums">
                      {currentPDR.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Live Target Discovery Feed */}
              <div className="bg-[#FAFBF9] border border-slate-200 rounded-md p-4 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  REAL-TIME DISCOVERY LOG ({observations.length})
                </span>

                {observations.length === 0 ? (
                  <p className="text-xs text-slate-400 italic py-2">
                    Click &ldquo;Start Mission&rdquo; to begin exploration and register field targets...
                  </p>
                ) : (
                  <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                    {observations.map((obs) => (
                      <div
                        key={obs.id}
                        className="bg-white border border-slate-200 p-2 rounded-xs flex items-center justify-between text-xs font-mono"
                      >
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              obs.type === 'pest'
                                ? 'bg-rose-600'
                                : obs.type === 'defender'
                                ? 'bg-emerald-600'
                                : 'bg-blue-600'
                            }`}
                          />
                          <span className="text-slate-800 font-semibold">{obs.label}</span>
                        </div>
                        <span className="text-[10px] text-slate-400">
                          ({obs.x}m, {obs.y}m)
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
