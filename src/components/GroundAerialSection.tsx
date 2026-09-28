import React, { useState, useEffect } from 'react';
import { Plane, Compass, Database, Layers, ArrowUp, ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const GroundAerialSection: React.FC = () => {
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulsePhase((p) => (p + 1) % 4);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-purple-800 uppercase">
              Cross-Platform Fusion
            </span>
            <span className="text-slate-300">·</span>
            <StatusBadge status="RESEARCH" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            &ldquo;Ground intelligence meets aerial perspective.&rdquo;
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Future iterations of AESAR are being researched as a coordinated ground–aerial sensing architecture, where complementary observations from different vertical layers correlate into a unified, high-resolution representation of field health.
          </p>
        </div>

        {/* Visual Ground-Aerial Convergence Diagram */}
        <div className="bg-[#FAFBF9] border border-slate-200 rounded-lg p-6 sm:p-10 mb-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Top Node: Aerial Subsystem (Drone) */}
            <div className="w-full max-w-md bg-white border border-blue-200 rounded-lg p-4 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-900">UAV DRONE SUBSYSTEM</span>
                    <StatusBadge status="FUTURE" size="sm" />
                  </div>
                  <span className="text-[11px] text-slate-500">Aerial Multispectral Imagery & Macro NDVI</span>
                </div>
              </div>
              <div className="text-right font-mono text-[10px] text-blue-700">
                TOP CANOPY DATA
              </div>
            </div>

            {/* Downward Data Stream Animation */}
            <div className="flex flex-col items-center py-3 relative">
              <div className="w-[1.5px] h-12 bg-blue-300/80" />
              <div className="absolute top-1/2 -translate-y-1/2 px-2.5 py-0.5 bg-blue-50 border border-blue-200 rounded-xs text-[10px] font-mono text-blue-800 flex items-center gap-1 shadow-2xs">
                <ArrowDown className={`w-3 h-3 text-blue-600 transition-transform ${pulsePhase % 2 === 0 ? 'translate-y-0.5' : ''}`} />
                <span>Orthomosaic GeoTIFF & Macro Stress Zones</span>
              </div>
            </div>

            {/* Center Node: Unified Field Model (The Convergence Core) */}
            <div className="w-full max-w-xl bg-white border-2 border-emerald-600 rounded-lg p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-emerald-600 text-white font-mono text-[9px] font-bold rounded-bl-sm">
                SPATIAL DIGITAL TWIN
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-mono font-bold text-slate-900">
                    UNIFIED 3D FIELD MODEL
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    Cross-Correlated Multi-Layer Agricultural Voxel Space
                  </span>
                </div>
              </div>

              {/* Data Synthesis Matrix Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="bg-[#FAFBF9] border border-slate-200 p-2.5 rounded-sm">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">MACRO PERSPECTIVE</span>
                  <span className="text-xs font-semibold text-blue-900 block">Aerial Swath Contours</span>
                  <p className="text-[10px] text-slate-500 mt-0.5">Vegetation index anomalies identify where rover must scout.</p>
                </div>

                <div className="bg-[#FAFBF9] border border-slate-200 p-2.5 rounded-sm">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">GROUND TRUTH</span>
                  <span className="text-xs font-semibold text-emerald-900 block">Microleaf Ground Scans</span>
                  <p className="text-[10px] text-slate-500 mt-0.5">Inspects leaf underside, pests, and local moisture levels.</p>
                </div>

                <div className="bg-[#FAFBF9] border border-slate-200 p-2.5 rounded-sm">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">CORRELATION</span>
                  <span className="text-xs font-semibold text-purple-900 block">Ecosystem Decision</span>
                  <p className="text-[10px] text-slate-500 mt-0.5">Pins point pest pressures against macro canopy gradients.</p>
                </div>
              </div>
            </div>

            {/* Upward Data Stream Animation */}
            <div className="flex flex-col items-center py-3 relative">
              <div className="w-[1.5px] h-12 bg-emerald-400" />
              <div className="absolute top-1/2 -translate-y-1/2 px-2.5 py-0.5 bg-emerald-50 border border-emerald-300 rounded-xs text-[10px] font-mono text-emerald-900 flex items-center gap-1 shadow-2xs">
                <ArrowUp className={`w-3 h-3 text-emerald-700 transition-transform ${pulsePhase % 2 === 1 ? '-translate-y-0.5' : ''}`} />
                <span>Microclimate Logs, Soil Probing & Underleaf Macro Frames</span>
              </div>
            </div>

            {/* Bottom Node: Ground Rover (AESAR Prototype) */}
            <div className="w-full max-w-md bg-white border border-emerald-300 rounded-lg p-4 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-900">AESAR GROUND ROVER</span>
                    <StatusBadge status="PROTOTYPE" size="sm" />
                  </div>
                  <span className="text-[11px] text-slate-500">In-Furrow Ground Traversal & Multi-Sensor Telemetry</span>
                </div>
              </div>
              <div className="text-right font-mono text-[10px] text-emerald-800 font-semibold">
                GROUND DATA
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Scientific Justification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-white border border-slate-200 rounded-lg space-y-2">
            <span className="text-xs font-mono font-bold text-slate-900 block">
              Why Neither Drone Nor Rover Suffices Alone
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Drones cover hundreds of acres in minutes, but cannot penetrate dense foliage to observe underleaf pests, measure soil conductivity, or record microclimate humidity beneath the boundary layer. Ground rovers capture exquisite micro-detail, but benefit from macro aerial guidance to avoid blind, unguided wandering.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-lg space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-800 block">
              Active Research Trajectory
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              The ongoing AESAR research project investigates cross-modal coordinate registration: transforming low-altitude UAV thermal/multispectral orthomosaics into prioritized navigation waypoints for the ground rover, closing the loop between macro discovery and micro intervention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
