import React from 'react';
import { Compass, Plane, Sprout, BrainCircuit, ArrowRight, ShieldCheck } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const VisionSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              The Long-Term Horizon
            </span>
            <span className="text-slate-300">·</span>
            <StatusBadge status="FUTURE" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 font-mono leading-tight">
            &ldquo;From a rover to a distributed agricultural intelligence system.&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            AESAR is being developed toward a future where ground robots, aerial platforms, environmental sensors, and edge AI models cooperate seamlessly to build a multidimensional representation of living agricultural ecosystems.
          </p>

          {/* The Multi-Element Equation */}
          <div className="pt-8 pb-4">
            <div className="bg-[#FAFBF9] border border-slate-200 rounded-lg p-6 sm:p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center mb-6">
                {/* Element 1: Ground */}
                <div className="p-3 bg-white border border-slate-200 rounded-md text-center space-y-1 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-900 block">GROUND</span>
                  <span className="text-[10px] font-mono text-slate-500">Autonomous Rovers</span>
                </div>

                {/* Element 2: Aerial */}
                <div className="p-3 bg-white border border-slate-200 rounded-md text-center space-y-1 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center mx-auto">
                    <Plane className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-900 block">AERIAL</span>
                  <span className="text-[10px] font-mono text-slate-500">Canopy Drones</span>
                </div>

                {/* Element 3: Environment */}
                <div className="p-3 bg-white border border-slate-200 rounded-md text-center space-y-1 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center mx-auto">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-900 block">ENVIRONMENT</span>
                  <span className="text-[10px] font-mono text-slate-500">Microclimate Pods</span>
                </div>

                {/* Element 4: AI */}
                <div className="p-3 bg-white border border-slate-200 rounded-md text-center space-y-1 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-800 flex items-center justify-center mx-auto">
                    <BrainCircuit className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-900 block">EDGE AI</span>
                  <span className="text-[10px] font-mono text-slate-500">PDR & AMRI Synthesis</span>
                </div>
              </div>

              {/* Equals Result Box */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-3">
                <span className="font-mono text-xl font-bold text-slate-400">=</span>
                <div className="px-5 py-2.5 bg-emerald-800 text-white rounded-md font-mono text-sm sm:text-base font-bold shadow-xs">
                  ECOSYSTEM INTELLIGENCE
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#simulation"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-emerald-800 rounded-md transition-all shadow-xs"
            >
              <span>Launch Concept Simulation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#research"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all shadow-2xs"
            >
              <span>Review Research Protocol</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
