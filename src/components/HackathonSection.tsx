import React, { useState } from 'react';
import { Award, Users, Camera, Cpu, Terminal, Sparkles, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { TeamMember } from '../types';

export const HackathonSection: React.FC = () => {
  const [activeGalleryTab, setActiveGalleryTab] = useState<'all' | 'rover' | 'team' | 'hardware' | 'dashboard' | 'demo'>('all');

  const team: TeamMember[] = [
    {
      name: 'Stephen Paul S',
      role: 'Hardware Systems & Rover Architecture',
      focus: 'Chassis design, power bus distribution, BTS7960 motor driver interfacing, and structural prototyping.',
      contributions: ['Motor Driver Integration', 'Dual ESP32 UART Bus', 'Chassis Fabrication'],
    },
    {
      name: 'Aryaman Bhattacharjee',
      role: 'Embedded Firmware & Autonomous Navigation',
      focus: 'FreeRTOS dual-core task scheduling, sensor polling loops (I2C/SPI), and AESA diagonal exploration pathing.',
      contributions: ['Real-time Safety Interlocks', 'Sensor Ingestion Bus', 'AESA Trajectory Logic'],
    },
    {
      name: 'R Kavin',
      role: 'Applied AI & Computer Vision',
      focus: 'Edge model optimization, camera mast calibration, and foliar stress/pest classification pipelines.',
      contributions: ['OV2640 Driver Setup', 'Edge Object Detection', 'Pest/Defender Tagging'],
    },
    {
      name: 'Rahul Yadav',
      role: 'Ecosystem Modeling & Telemetry Systems',
      focus: 'Mathematical formulation of PDR & AMRI indexes, FastAPI gateway, and ground station WebSocket dashboard.',
      contributions: ['PDR & AMRI Formulations', 'FastAPI Ingestion Gateway', 'Operator Telemetry Console'],
    },
  ];

  const galleryItems = [
    {
      id: 'gal-1',
      category: 'rover',
      title: 'AESAR Ground Rover Prototype Assembly',
      desc: 'All-terrain 4-wheel chassis with dual-deck acrylic mounting plates, BTS7960 drivers, and forward sensor mast.',
      tag: 'PHYSICAL HARDWARE',
      badge: 'PROTOTYPE V1',
    },
    {
      id: 'gal-2',
      category: 'team',
      title: 'Resonance 2026 Engineering Sprint',
      desc: 'Late-night hardware wiring, UART oscilloscope debugging, and chassis calibration during the 48-hour hackathon.',
      tag: 'HACKATHON LAB',
      badge: 'SCOPE RESIDENCY',
    },
    {
      id: 'gal-3',
      category: 'hardware',
      title: 'Dual-ESP32 Upper Electronics Deck',
      desc: 'Brain and Rover microcontrollers interfaced via high-speed hardware UART with isolated power regulation.',
      tag: 'CIRCUIT BENCH',
      badge: 'UART VERIFIED',
    },
    {
      id: 'gal-4',
      category: 'dashboard',
      title: 'Ground Station Telemetry Console',
      desc: 'Real-time WebSocket interface displaying live field coordinates, laser ToF distance, and AMRI risk indexes.',
      tag: 'OPERATOR SOFTWARE',
      badge: 'LIVE TELEMETRY',
    },
    {
      id: 'gal-5',
      category: 'demo',
      title: 'Final Judging Demonstration & Evaluation',
      desc: 'Demonstration of autonomous obstacle avoidance and simulated underleaf pest detection to the hardware track jury.',
      tag: 'JURY EVALUATION',
      badge: 'TOP 5 FINALIST',
    },
  ];

  const filteredGallery = activeGalleryTab === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeGalleryTab);

  return (
    <section id="hackathon" className="py-20 bg-[#FAFBF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Achievement Banner */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              Hackathon Provenance
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-mono text-slate-500">Resonance 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            &ldquo;48 Hours. One Rover. Top 5.&rdquo;
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            AESAR originated at the Resonance 48-Hour Hackathon (7–9 September 2026), organised by SCOPE. From a bare chassis and microcontrollers, the team built a functioning autonomous prototype recognized among the Top 5 in the Hardware Track.
          </p>
        </div>

        {/* Hackathon Statistics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white border border-slate-200 p-5 rounded-lg shadow-2xs">
            <span className="text-xs font-mono text-slate-500 uppercase block">EVENT</span>
            <span className="text-lg sm:text-xl font-bold font-mono text-slate-950 block mt-1">
              Resonance &apos;26
            </span>
            <span className="text-[11px] text-slate-500">SCOPE · 7–9 Sept 2026</span>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-lg shadow-2xs">
            <span className="text-xs font-mono text-slate-500 uppercase block">COMPETITION SCALE</span>
            <span className="text-2xl sm:text-3xl font-bold font-mono text-slate-950 block mt-1 tabular-nums">
              177
            </span>
            <span className="text-[11px] text-slate-500">Engineering Teams</span>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-lg shadow-2xs">
            <span className="text-xs font-mono text-slate-500 uppercase block">PARTICIPANTS</span>
            <span className="text-2xl sm:text-3xl font-bold font-mono text-slate-950 block mt-1 tabular-nums">
              632
            </span>
            <span className="text-[11px] text-slate-500">Builders & Researchers</span>
          </div>

          <div className="bg-emerald-50 border border-emerald-300 p-5 rounded-lg shadow-2xs">
            <span className="text-xs font-mono text-emerald-800 uppercase block font-semibold">ACHIEVEMENT</span>
            <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-950 block mt-1">
              TOP 5
            </span>
            <span className="text-[11px] text-emerald-800 font-medium">Hardware Track Finalist</span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-slate-950 font-mono mb-6 flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-700" />
            <span>Core Engineering Team</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-mono font-bold text-xs text-slate-800 mb-3">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h4 className="text-base font-bold text-slate-950">
                    {member.name}
                  </h4>
                  <p className="text-xs font-mono text-emerald-800 mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {member.focus}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1">
                    {member.contributions.map((c) => (
                      <span key={c} className="text-[9px] font-mono text-slate-600 bg-slate-50 px-1.5 py-0.5 border border-slate-200 rounded-xs">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Placeholders Component */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-950 font-mono flex items-center gap-2">
                <Camera className="w-4 h-4 text-emerald-700" />
                <span>Hardware & Hackathon Gallery</span>
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Physical rover, workbench documentation & evaluation archives
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              {(['all', 'rover', 'team', 'hardware', 'dashboard', 'demo'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveGalleryTab(cat)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-all cursor-pointer ${
                    activeGalleryTab === cat
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Blueprint Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  {/* Photo Blueprint Frame */}
                  <div className="w-full aspect-[16/10] bg-[#FAFBF9] rounded-md border border-slate-200/80 mb-4 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
                    
                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 mb-2">
                      <ImageIcon className="w-5 h-5 text-emerald-700" />
                    </div>
                    
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      ARCHIVE PHOTO PLACEHOLDER
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-800 mt-0.5">
                      {item.title}
                    </span>
                    <span className="text-[9px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200 mt-2">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span>CATEGORY: {item.category.toUpperCase()}</span>
                    <span>{item.tag}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-950 font-mono mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Resonance 2026 Archive</span>
                  <span className="text-emerald-800">SCOPE Track</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
