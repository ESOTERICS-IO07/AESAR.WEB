import React, { useState } from 'react';
import { Eye, Map, Cpu, Activity, Sprout, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const ProblemSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const pipelineStages = [
    {
      step: '01',
      name: 'FIELD',
      icon: Sprout,
      tag: 'PHYSICAL REALITY',
      title: 'Heterogeneous Agricultural Ground',
      desc: 'Fields are dynamic living environments with multi-tiered canopies, soil moisture gradients, variable microclimates, and complex organism interactions that cannot be flattened into a single overhead snapshot.',
      limitation: 'Standard satellite or manual walk-through surveys only sample a tiny fraction of the acreage and miss underleaf anomalies.',
      aesarApproach: 'Ground-level physical traversal that enters the crop rows where biological and abiotic stress actually originates.',
    },
    {
      step: '02',
      name: 'OBSERVATION',
      icon: Eye,
      tag: 'MULTI-MODAL SENSING',
      title: 'Under-Canopy Micro-Observations',
      desc: 'Capturing optical imagery of crop foliage, stems, and ground levels alongside localized atmospheric sensors (temperature, humidity, moisture).',
      limitation: 'Single stationary cameras or high-altitude drones cannot observe underneath dense leaf canopies where pests reside.',
      aesarApproach: 'Mast-mounted optics with multi-angle viewing and proximity Time-of-Flight sensors for close-range leaf inspection.',
    },
    {
      step: '03',
      name: 'MAPPING',
      icon: Map,
      tag: 'SPATIAL REGISTRATION',
      title: '2D Field Coordinates & Traversal Paths',
      desc: 'Correlating every sensor reading and optical frame with an exact metric coordinate in the field coordinate frame.',
      limitation: 'Unregistered scout observations cannot be re-inspected later or correlated with soil moisture contours.',
      aesarApproach: 'Autonomous AESA exploration with structured diagonal trajectories to register spatial risk contours across the plot.',
    },
    {
      step: '04',
      name: 'AI PERCEPTION',
      icon: Cpu,
      tag: 'EDGE INFERENCE',
      title: 'Pest & Crop Health Classification',
      desc: 'On-device computer vision models segmenting crop foliage stress and identifying pest presence alongside beneficial predator insects.',
      limitation: 'Conventional CV simply counts pests in isolation, triggering automatic chemical spray alerts regardless of context.',
      aesarApproach: 'Dual-target classification: detecting both destructive pests AND beneficial natural defenders (e.g., lady beetles, parasitoid wasps).',
    },
    {
      step: '05',
      name: 'ECOSYSTEM ANALYSIS',
      icon: Activity,
      tag: 'SYNTHESIS & DECISION',
      title: 'PDR & AMRI Holistic Assessment',
      desc: 'Integrating biological ratios (Pest Defender Ratio) with microclimate risk indexes (AMRI) before recommending any field intervention.',
      limitation: 'Pesticide overuse occurs because farmers spray whenever a single pest is detected, destroying beneficial biological resistance.',
      aesarApproach: 'Ecosystem-first recommendations: if natural defenders are high and microclimate is unfavorable for pest reproduction, advise holding intervention.',
    },
  ];

  return (
    <section id="overview" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              The Agronomic Imperative
            </span>
            <span className="text-slate-300">·</span>
            <StatusBadge status="RESEARCH" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            &ldquo;A field is more than what a single camera can see.&rdquo;
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Agricultural environments are three-dimensional, biologically dynamic systems. Conventional scouting relies on isolated snapshot detections, frequently triggering premature chemical intervention. AESAR was conceived to observe spatial variation across all canopy layers and contextualize observations within the living ecosystem.
          </p>
        </div>

        {/* Visual Transformation Pipeline Bar */}
        <div className="bg-[#FAFBF9] border border-slate-200 rounded-lg p-4 sm:p-6 mb-8">
          <p className="text-xs font-mono text-slate-500 mb-4 tracking-wider uppercase">
            Data Pipeline Transformation: From Ground Reality to Ecological Decision
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.name}
                  onClick={() => setActiveStage(idx)}
                  className={`relative p-3.5 rounded-md border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border-emerald-600 shadow-sm ring-1 ring-emerald-600'
                      : 'bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-slate-600 font-semibold">
                      {stage.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                  </div>
                  <p className={`text-xs font-mono font-bold tracking-wider ${isActive ? 'text-slate-950' : 'text-slate-700'}`}>
                    {stage.name}
                  </p>
                  <p className="text-[10px] text-slate-600 mt-0.5 truncate">
                    {stage.tag}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Panel for Active Pipeline Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/60 border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-xs font-semibold">
                STAGE {pipelineStages[activeStage].step}
              </span>
              <span className="text-xs font-mono text-slate-500">
                {pipelineStages[activeStage].tag}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
              {pipelineStages[activeStage].title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {pipelineStages[activeStage].desc}
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The Limitation of Existing Methods */}
            <div className="bg-white border border-rose-100 rounded-md p-5 space-y-2">
              <span className="text-xs font-mono text-rose-800 font-semibold tracking-wider uppercase block">
                CONVENTIONAL LIMITATION
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {pipelineStages[activeStage].limitation}
              </p>
            </div>

            {/* AESAR Solution */}
            <div className="bg-white border border-emerald-200 rounded-md p-5 space-y-2">
              <span className="text-xs font-mono text-emerald-800 font-semibold tracking-wider uppercase block">
                AESAR ARCHITECTURAL APPROACH
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {pipelineStages[activeStage].aesarApproach}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
