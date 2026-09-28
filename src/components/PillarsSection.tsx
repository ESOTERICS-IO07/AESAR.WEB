import React, { useState } from 'react';
import { Compass, Scan, BrainCircuit, Activity, ChevronRight, Zap } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const PillarsSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      num: '01',
      title: 'Autonomous Exploration',
      subtitle: 'Field Traversal & Obstacle Avoidance',
      icon: Compass,
      status: 'PROTOTYPE' as const,
      summary: 'The rover explores and navigates field environments autonomously using structured traversal patterns.',
      technicalDetails: [
        'Diagonal AESA scouting sweeps maximize sensor angles across crop rows',
        'Dual ESP32 division: Dedicated motor PWM & real-time sonar/ToF safety loop',
        'All-terrain 4-DC chassis with high-torque BTS7960 H-bridge drivers',
        'Local coordinates registration prevents redundant overlapping passes',
      ],
      diagramLabel: 'DIAG_AESA_TRAVERSAL',
      specMetrics: [
        { label: 'DRIVE MOTORS', value: '4x Geared DC' },
        { label: 'MOTOR CURRENT', value: '43A BTS7960' },
        { label: 'SAFETY LOOP', value: 'Real-time UART' },
      ],
    },
    {
      num: '02',
      title: 'Multi-Sensor Perception',
      subtitle: 'Imaging & Environmental Telemetry',
      icon: Scan,
      status: 'BUILT' as const,
      summary: 'The system combines macro optical imaging, laser ranging, and environmental observations simultaneously.',
      technicalDetails: [
        'Time-of-Flight (VL53L0X) laser ranging for millimetric plant-to-chassis clearance',
        'Ultrasonic sonar array for coarse canopy boundary detection',
        'Soil moisture & ambient microclimate probing (humidity, temperature)',
        'Synchronized telemetry frames tagging environmental metrics to image captures',
      ],
      diagramLabel: 'SENSOR_FUSION_FRAME',
      specMetrics: [
        { label: 'TOF RANGE', value: 'VL53L0X Laser' },
        { label: 'SONAR ARRAY', value: 'Dual HC-SR04' },
        { label: 'TELEMETRY BUS', value: 'I2C / UART' },
      ],
    },
    {
      num: '03',
      title: 'AI-Assisted Analysis',
      subtitle: 'Computer Vision for Crop & Pest Classification',
      icon: BrainCircuit,
      status: 'INTEGRATING' as const,
      summary: 'Edge computer vision algorithms identify pest presence, biological damage, and beneficial insect populations.',
      technicalDetails: [
        'Lightweight convolutional neural network architectures quantized for edge processing',
        'Underleaf foliage inspection recognizing chlorosis, necrosis, and chewing lesions',
        'Dual-class taxonomy recognizing destructive insect pests vs predatory beneficial insects',
        'Confidence weighting filtering false positives caused by natural outdoor lighting variations',
      ],
      diagramLabel: 'EDGE_INFERENCE_PIPELINE',
      specMetrics: [
        { label: 'TARGET TAXA', value: 'Pest + Predator' },
        { label: 'LEAF SEGMENT', value: 'Canopy Stress' },
        { label: 'COMPUTE', value: 'Edge Quantized' },
      ],
    },
    {
      num: '04',
      title: 'Ecosystem Intelligence',
      subtitle: 'Contextual Decisions via PDR & AMRI',
      icon: Activity,
      status: 'RESEARCH' as const,
      summary: 'Observations are evaluated in their full ecological context before suggesting chemical or biological interventions.',
      technicalDetails: [
        'Pest Defender Ratio (PDR) quantifies natural biological resistance vs pest density',
        'Abiotic Microclimate Risk Index (AMRI) assesses humidity, heat, and moisture vectors',
        'Prevents knee-jerk chemical spraying when beneficial predator populations are healthy',
        'Preserves agrochemical efficacy while reducing environmental chemical runoff',
      ],
      diagramLabel: 'ECO_ASSESSMENT_CORE',
      specMetrics: [
        { label: 'CORE RATIO', value: 'PDR Formulation' },
        { label: 'ABIOTIC INDEX', value: 'AMRI Matrix' },
        { label: 'ACTION LOGIC', value: 'Threshold Gate' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#FAFBF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              Core Architectural Pillars
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-mono text-slate-500">System Decomposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            Four Foundational Capabilities
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            AESAR decomposes precision scouting into four interdependent engineering competencies: moving through rugged field terrain, gathering synchronized environmental observations, analyzing biological cues at the edge, and deriving contextual decisions.
          </p>
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === idx;
            return (
              <div
                key={pillar.num}
                onClick={() => setSelectedPillar(idx)}
                className={`relative bg-white p-6 rounded-lg border transition-all cursor-pointer group flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-600 ring-2 ring-emerald-600/30 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono font-bold text-slate-600">
                      {pillar.num}
                    </span>
                    <StatusBadge status={pillar.status} />
                  </div>

                  <div className="w-10 h-10 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-emerald-800">
                  <span>{isSelected ? 'ACTIVE VIEW' : 'INSPECT DETAILS'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Selected Pillar */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-emerald-700">
                  PILLAR {pillars[selectedPillar].num} TECHNICAL DEEP DIVE
                </span>
                <span className="text-slate-300">·</span>
                <StatusBadge status={pillars[selectedPillar].status} />
              </div>
              <h4 className="text-2xl font-bold text-slate-950 font-mono">
                {pillars[selectedPillar].title}
              </h4>
            </div>

            {/* Spec Metrics Row */}
            <div className="flex items-center gap-3">
              {pillars[selectedPillar].specMetrics.map((metric) => (
                <div key={metric.label} className="bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-sm text-right">
                  <span className="block text-[9px] font-mono text-slate-600 uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-7 space-y-3">
              <h5 className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-wider">
                Engineering Implementations & Concepts
              </h5>
              <ul className="space-y-2.5">
                {pillars[selectedPillar].technicalDetails.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro Visualization / Schematics Box */}
            <div className="lg:col-span-5 bg-[#FAFBF9] border border-slate-200 rounded-md p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span>SCHEMATIC / DATA FLOW</span>
                  <span>{pillars[selectedPillar].diagramLabel}</span>
                </div>
                <div className="h-32 bg-white rounded-sm border border-slate-200 flex items-center justify-center p-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-dot-grid opacity-30" />
                  
                  {/* Subtle technical animation based on pillar */}
                  {selectedPillar === 0 && (
                    <div className="relative z-10 text-center space-y-1">
                      <div className="flex items-center justify-center gap-3">
                        <span className="px-2 py-1 bg-slate-900 text-white font-mono text-xs rounded-xs">Brain ESP32</span>
                        <span className="text-xs font-mono text-emerald-700 animate-pulse">──UART 115200──►</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-900 border border-slate-300 font-mono text-xs rounded-xs">Rover ESP32</span>
                      </div>
                      <p className="text-[10px] font-mono text-slate-600">PWM Duty Cycle & Safety Interlocks</p>
                    </div>
                  )}

                  {selectedPillar === 1 && (
                    <div className="relative z-10 text-center space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[10px] rounded-xs">VL53L0X Laser</span>
                        <span className="px-2 py-0.5 bg-slate-50 text-slate-700 border border-slate-200 font-mono text-[10px] rounded-xs">HC-SR04 Sonar</span>
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[10px] rounded-xs">Soil / Air</span>
                      </div>
                      <p className="text-[10px] font-mono text-slate-600">Multi-Channel Telemetry Ingestion</p>
                    </div>
                  )}

                  {selectedPillar === 2 && (
                    <div className="relative z-10 text-center space-y-1">
                      <div className="inline-block px-3 py-1 bg-slate-900 text-white font-mono text-xs rounded-xs">
                        Raw Frame ➔ Edge CNN Inference ➔ Bounding Boxes
                      </div>
                      <p className="text-[10px] font-mono text-slate-600">Dual Taxonomy: Pest Count + Natural Defenders</p>
                    </div>
                  )}

                  {selectedPillar === 3 && (
                    <div className="relative z-10 text-center space-y-1">
                      <div className="flex items-center justify-center gap-2 font-mono text-xs">
                        <span className="px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-xs">PDR Index</span>
                        <span>+</span>
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-xs">AMRI Risk</span>
                        <span>➔</span>
                        <span className="px-2 py-0.5 bg-emerald-700 text-white rounded-xs">Intervention Decision</span>
                      </div>
                      <p className="text-[10px] font-mono text-slate-600">Contextual Agrochemical Decision Logic</p>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-[11px] text-slate-600 italic mt-3 font-serif">
                Demonstrated in the Resonance 48h Hackathon prototype hardware architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
