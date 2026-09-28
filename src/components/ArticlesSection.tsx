import React, { useState } from 'react';
import { BookOpen, Clock, Tag, ArrowRight, X } from 'lucide-react';
import { EngineeringArticle } from '../types';

export const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<EngineeringArticle | null>(null);

  const articles: EngineeringArticle[] = [
    {
      id: 'art-1',
      title: 'Building the AESAR Autonomous Rover',
      status: 'Coming Soon',
      category: 'Embedded Robotics',
      estimatedReadTime: '8 min read',
      summary: 'A deep architectural dive into the dual-ESP32 layout, UART inter-chip communication, and BTS7960 high-power motor drivers engineered during the 48-hour Resonance hackathon sprint.',
      topics: ['Dual ESP32', 'FreeRTOS Task Allocation', 'BTS7960 Drivers', '4-Wheel Skid Steering'],
    },
    {
      id: 'art-2',
      title: 'Designing a Multi-Sensor Agricultural Robot',
      status: 'Coming Soon',
      category: 'Sensor Fusion',
      estimatedReadTime: '7 min read',
      summary: 'Why agricultural canopies deceive standard ultrasound sensors, and how combining VL53L0X Time-of-Flight laser rangefinders with sonar arrays provides reliable obstacle avoidance in dense foliage.',
      topics: ['ToF Laser Ranging', 'Ultrasonic Sonar', 'Soil Capacitive Probing', 'I2C Bus Contention'],
    },
    {
      id: 'art-3',
      title: 'Autonomous Exploration for Agricultural Scouting',
      status: 'Coming Soon',
      category: 'Path Planning',
      estimatedReadTime: '10 min read',
      summary: 'Comparing traditional boustrophedon (lawnmower) path coverage with structured diagonal AESA scanning patterns for multi-angle crop illumination and reduced ground compaction.',
      topics: ['AESA Trajectory', 'Swath Geometry', 'Field Coordinates', 'Waypoint Scheduling'],
    },
    {
      id: 'art-4',
      title: 'Ground vs Aerial Crop Observation',
      status: 'Coming Soon',
      category: 'Agronomy & UAVs',
      estimatedReadTime: '9 min read',
      summary: 'The vertical disparity in precision agriculture: why satellite NDVI and high-altitude drones consistently fail to detect underleaf aphid colonies and root-zone moisture deficits.',
      topics: ['Canopy Stratification', 'Underleaf Scouting', 'Drone Limitations', 'Ground-Aerial Synergy'],
    },
    {
      id: 'art-5',
      title: 'From Hackathon Prototype to Research Platform',
      status: 'Coming Soon',
      category: 'Project Evolution',
      estimatedReadTime: '6 min read',
      summary: 'Reflections from the 48-hour Resonance Hackathon (Top 5 Hardware Track out of 177 teams), examining what worked on physical hardware and what required complete architectural redesign.',
      topics: ['Resonance 2026', 'Hardware Prototyping', 'Top 5 Learnings', 'Roadmap Evolution'],
    },
    {
      id: 'art-6',
      title: 'Designing Ecosystem-Level Pest Assessment',
      status: 'Coming Soon',
      category: 'Applied AI & Ecology',
      estimatedReadTime: '11 min read',
      summary: 'Formulating the Pest Defender Ratio (PDR) and Abiotic Microclimate Risk Index (AMRI) to prevent knee-jerk chemical spray recommendations when natural biological predators are thriving.',
      topics: ['PDR Mathematics', 'AMRI Microclimate Vector', 'Biological Control', 'Decision Support'],
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              Engineering Notes & Field Logs
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-mono text-slate-500">Technical Articles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            Engineering Articles & System Notes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Detailed technical writeups documenting the hardware design choices, embedded firmware decisions, and agronomic principles established during the development of AESAR.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-[#FAFBF9] border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <span>{art.category}</span>
                  <span className="text-[10px] font-mono text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-xs font-semibold">
                    {art.status.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 font-mono group-hover:text-emerald-800 transition-colors mb-2 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {art.summary}
                </p>
              </div>

              <div>
                {/* Topic tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80 mb-3">
                  {art.topics.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 border border-slate-200 rounded-xs">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{art.estimatedReadTime}</span>
                  </span>
                  <span className="text-emerald-800 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Preview Outline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Article Outline Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-lg border border-slate-200 max-w-lg w-full p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    {selectedArticle.category} · {selectedArticle.estimatedReadTime}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 font-mono mt-0.5">
                    {selectedArticle.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedArticle.summary}
                </p>

                <div className="bg-[#FAFBF9] border border-slate-200 p-4 rounded-md space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">
                    PLANNED TECHNICAL SECTIONS & OUTLINE:
                  </span>
                  <ul className="space-y-1.5">
                    {selectedArticle.topics.map((t, idx) => (
                      <li key={t} className="flex items-center gap-2 text-xs font-mono text-slate-800">
                        <span className="text-emerald-700 font-bold">0{idx + 1}.</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-md text-[11px] text-amber-900 font-mono">
                  Status: Manuscript currently undergoing drafting. Full article will be published upon conclusion of initial field testing.
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 text-xs font-mono font-semibold bg-slate-900 text-white rounded-md hover:bg-slate-800"
                >
                  Close Outline
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
