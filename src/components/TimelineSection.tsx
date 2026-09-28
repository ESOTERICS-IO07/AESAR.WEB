import React from 'react';
import { StatusBadge } from './StatusBadge';
import { ProjectStatus } from '../types';

interface Milestone {
  timeframe: string;
  title: string;
  status: ProjectStatus;
  focus: string;
  deliverables: string[];
}

export const TimelineSection: React.FC = () => {
  const milestones: Milestone[] = [
    {
      timeframe: 'September 2026',
      title: 'Resonance Hackathon Prototype',
      status: 'BUILT',
      focus: '48-hour hardware sprint: dual-ESP32 architecture, 4x DC motor drive, and live UART telemetry.',
      deliverables: [
        'Physical 4-wheel rover chassis with BTS7960 motor drivers',
        'Dual-ESP32 hardware partitioning (Brain & Rover modules)',
        'Basic collision avoidance via VL53L0X ToF and ultrasonic sonar',
        'Top 5 Finalist achievement in Resonance Hardware Track',
      ],
    },
    {
      timeframe: 'Late 2026',
      title: 'Autonomous Navigation & Mapping',
      status: 'PROTOTYPE',
      focus: 'Field coordinates registration and AESA structured diagonal traversal refinement.',
      deliverables: [
        'Local Cartesian field coordinate system without drifting',
        'AESA diagonal exploration algorithm preventing furrow compaction',
        'Real-time ground station WebSockets telemetry dashboard',
      ],
    },
    {
      timeframe: 'Early 2027',
      title: 'Edge AI & Pest Classification',
      status: 'INTEGRATING',
      focus: 'On-device computer vision models running under dynamic outdoor solar illumination.',
      deliverables: [
        'Dual-taxa detection: harmful insect pests vs beneficial biological defenders',
        'Chlorosis and foliar necrosis segmentation on foliage close-ups',
        'Model quantization and edge inference latency optimization',
      ],
    },
    {
      timeframe: 'Mid 2027',
      title: 'Microclimate Pod & Ecosystem Model (PDR + AMRI)',
      status: 'RESEARCH',
      focus: 'Coupling biological counts with ambient boundary layer microclimate indicators.',
      deliverables: [
        'Capacitive soil moisture and boundary layer humidity sensor pod',
        'PDR (Pest Defender Ratio) mathematical calibration in crop plots',
        'AMRI (Abiotic Microclimate Risk Index) spore emergence prediction',
      ],
    },
    {
      timeframe: 'Late 2027',
      title: '360° Omnidirectional Sensing Mast',
      status: 'RESEARCH',
      focus: 'Eliminating scouting blind spots across bilateral planting beds.',
      deliverables: [
        'Pan-tilt multi-camera sensor turret',
        'Bilateral underleaf inspection without chassis rotation',
        'Panoramic foliar health stitching',
      ],
    },
    {
      timeframe: '2028',
      title: 'Ground–Aerial Fusion Architecture',
      status: 'FUTURE',
      focus: 'Coordinated UAV and ground rover ecosystem intelligence.',
      deliverables: [
        'Drone orthomosaic GPS-registered guidance for rover waypoints',
        'Unified 3D field voxel model bridging canopy top to root zone',
        'Autonomous cooperative fleet dispatching',
      ],
    },
    {
      timeframe: 'Beyond 2028',
      title: 'Distributed Agricultural Intelligence Platform',
      status: 'FUTURE',
      focus: 'Decentralized ecological decision infrastructure for sustainable agriculture.',
      deliverables: [
        'Autonomous solar docking field stations',
        'Multi-season longitudinal soil-biology intelligence',
        'Zero-chemical biological intervention optimization',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              Engineering Progression
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-mono text-slate-500">From 48h Sprint to Long-Term Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            Development Timeline & Roadmap
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent engineering roadmap detailing what was built during the hackathon, what is currently being integrated in the lab, and where our research platform is heading.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative border-l border-slate-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {milestones.map((m, idx) => (
            <div key={m.title} className="relative group">
              {/* Timeline Bullet Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-white transition-transform group-hover:scale-125 ${
                  m.status === 'BUILT'
                    ? 'border-emerald-600 ring-2 ring-emerald-100'
                    : m.status === 'PROTOTYPE'
                    ? 'border-amber-500'
                    : m.status === 'INTEGRATING'
                    ? 'border-blue-500'
                    : m.status === 'RESEARCH'
                    ? 'border-purple-500'
                    : 'border-slate-300'
                }`}
              />

              {/* Milestone Content */}
              <div className="bg-[#FAFBF9] border border-slate-200 rounded-lg p-5 sm:p-6 transition-all hover:border-slate-300 hover:shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      {m.timeframe}
                    </span>
                    <span className="text-slate-300">·</span>
                    <StatusBadge status={m.status} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-mono mb-2">
                  {m.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {m.focus}
                </p>

                <div className="pt-3 border-t border-slate-200/80">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    KEY MILESTONES & ARTIFACTS:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {m.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="w-1 h-1 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
