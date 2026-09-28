import React, { useState } from 'react';
import { Eye, Radio, Shield, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const Perception360Section: React.FC = () => {
  const [activeSector, setActiveSector] = useState<'front' | 'rear' | 'flanks' | 'all'>('all');

  const perceptionChannels = [
    {
      id: 'front-camera',
      title: 'Forward Monocular Camera',
      status: 'PROTOTYPE' as const,
      sector: 'Front (0° ± 35°)',
      fov: '70° Horizontal FOV',
      purpose: 'Crop foliage macro capture, edge pest detection, and plant classification.',
      range: '0.2m – 2.0m',
      hardware: 'ESP32-CAM / OV2640 Module',
    },
    {
      id: 'front-tof',
      title: 'Front Time-of-Flight (Laser)',
      status: 'BUILT' as const,
      sector: 'Front Center (0°)',
      fov: '25° Cone',
      purpose: 'Millimetric distance ranging to plant stems, preventing chassis collision.',
      range: '0.03m – 1.8m',
      hardware: 'VL53L0X Laser Ranging Sensor',
    },
    {
      id: 'sonar-array',
      title: 'Front & Flank Sonar Array',
      status: 'BUILT' as const,
      sector: 'Front & Sides (±45°)',
      fov: 'Dual 30° Cones',
      purpose: 'Acoustic obstacle detection across foliage, furrows, and large rocks.',
      range: '0.05m – 3.0m',
      hardware: 'HC-SR04 Ultrasonic Transceivers',
    },
    {
      id: 'omni-camera',
      title: '360° Pan-Tilt / Multi-Camera Mast',
      status: 'RESEARCH' as const,
      sector: 'Full 360° Panoramic',
      fov: '360° Azimuthal Arc',
      purpose: 'Eliminating field blind spots; capturing lateral crop beds without re-orienting wheels.',
      range: '360° Spatial Arc',
      hardware: 'Dual High-Resolution Wide-Angle Sensor Mast (Proposed)',
    },
  ];

  return (
    <section className="py-20 bg-[#FAFBF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              Spatial Field Perception
            </span>
            <span className="text-slate-300">·</span>
            <StatusBadge status="RESEARCH" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            &ldquo;From a single viewpoint to spatial perception.&rdquo;
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conventional rovers only see what lies directly ahead of their front bumper. Agricultural scouting demands spatial awareness across full 360° azimuths to evaluate crop vigor across adjacent planting beds without destructive skid-turns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive 360 Sensing Radar Visualization */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex flex-col items-center">
            <div className="w-full flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-xs font-mono text-slate-500">
              <span>AZIMUTHAL SENSING COVERAGE</span>
              <span className="text-emerald-800 font-bold">RANGE: 3.0m RADIAL</span>
            </div>

            {/* Circular Radar Graphic */}
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center select-none">
              {/* Concentric distance rings */}
              <div className="absolute inset-0 rounded-full border border-slate-200" />
              <div className="absolute inset-8 rounded-full border border-slate-200/80" />
              <div className="absolute inset-16 rounded-full border border-slate-200/60" />
              <div className="absolute inset-24 rounded-full border border-slate-200/40" />

              {/* Crosshair Axes */}
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-slate-200" />
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-slate-200" />

              {/* Angle labels */}
              <span className="absolute top-1 text-[10px] font-mono text-slate-400">0° FRONT</span>
              <span className="absolute bottom-1 text-[10px] font-mono text-slate-400">180° REAR</span>
              <span className="absolute left-1 text-[10px] font-mono text-slate-400">270° LEFT</span>
              <span className="absolute right-1 text-[10px] font-mono text-slate-400">90° RIGHT</span>

              {/* Active Forward Camera Cone (PROTOTYPE - Amber/Emerald) */}
              <div
                className="absolute top-2 w-32 h-36 origin-bottom"
                style={{
                  clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
                  background: 'linear-gradient(to top, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.05))',
                }}
              />

              {/* Sonar Collision Arcs (BUILT - Solid green arcs) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {/* Front Sonar Arc */}
                <path d="M 35 15 A 40 40 0 0 1 65 15" stroke="#059669" strokeWidth="2" fill="none" />
                {/* Flank Sonar Arcs */}
                <path d="M 85 35 A 40 40 0 0 1 85 65" stroke="#059669" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                <path d="M 15 35 A 40 40 0 0 0 15 65" stroke="#059669" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
              </svg>

              {/* Proposed 360 Full Field Arc (RESEARCH - Outer dashed ring) */}
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-purple-400/40 pointer-events-none" />

              {/* Central Rover Chassis Representation */}
              <div className="relative z-10 w-12 h-16 bg-slate-900 border-2 border-emerald-400 rounded-xs flex flex-col items-center justify-between p-1 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white" />
                <div className="text-[7px] font-mono text-emerald-300">AESAR</div>
                <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
              </div>
            </div>

            {/* Radar Legend */}
            <div className="w-full mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-xs" />
                <span>Forward Optics [PROTOTYPE]</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-0.5 bg-emerald-700" />
                <span>Sonar / ToF [BUILT]</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-0.5 border-b-2 border-dashed border-purple-500" />
                <span>360° Omnidirectional [RESEARCH]</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sensor Channel Cards */}
          <div className="lg:col-span-6 space-y-3">
            {perceptionChannels.map((channel) => (
              <div key={channel.id} className="bg-white border border-slate-200 rounded-lg p-4 shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-900">
                    {channel.title}
                  </span>
                  <StatusBadge status={channel.status} />
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-emerald-800">
                  <span>SECTOR: {channel.sector}</span>
                  <span>·</span>
                  <span>FOV: {channel.fov}</span>
                  <span>·</span>
                  <span>RANGE: {channel.range}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {channel.purpose}
                </p>
                <div className="pt-1 text-[11px] font-mono text-slate-500">
                  HARDWARE: {channel.hardware}
                </div>
              </div>
            ))}

            {/* Integrity Transparency Card */}
            <div className="p-4 bg-emerald-50/60 border border-emerald-200/80 rounded-md">
              <span className="text-xs font-mono font-semibold text-emerald-950 block mb-1">
                Accuracy & Implementation Boundary
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                The physical prototype built for the hackathon uses forward-facing optics and front/side proximity sensors. A complete 360° optical imaging system is an active research direction under investigation to prevent blind spots and enable bilateral crop row inspection without rotating the chassis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
