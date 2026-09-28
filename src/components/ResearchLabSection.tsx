import React, { useState } from 'react';
import { FileText, Database, FlaskConical, BookOpen, Layers, ExternalLink, Download, Clock } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { ResearchItem } from '../types';

export const ResearchLabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'papers' | 'experiments' | 'datasets' | 'models' | 'documentation'>('papers');

  const researchItems: ResearchItem[] = [
    {
      id: 'paper-1',
      title: 'Contextual Agricultural Scouting: Beyond Single-Camera Threshold Interventions in Multi-Tiered Canopies',
      authors: ['Stephen Paul S', 'Aryaman Bhattacharjee', 'R Kavin', 'Rahul Yadav'],
      status: 'In Preparation',
      expectedDate: 'Q1 2027',
      abstract: 'Investigates the disparity between single-point optical pest counting and holistic agro-ecosystem health. Introduces the mathematical formulation of the Pest Defender Ratio (PDR) and the Abiotic Microclimate Risk Index (AMRI) evaluated on a ground mobile robotic scout.',
      targetVenue: 'Targeting Precision Agriculture & Robotics Conferences (e.g. IEEE AgriRobotics / Precision Ag)',
      type: 'Paper',
    },
    {
      id: 'paper-2',
      title: 'AESA Exploration: Structured Diagonal Swath Trajectories for In-Furrow Multi-Angle Crop Observation',
      authors: ['Stephen Paul S', 'Aryaman Bhattacharjee', 'R Kavin', 'Rahul Yadav'],
      status: 'Planned',
      expectedDate: 'Q2 2027',
      abstract: 'Proposes an autonomous field trajectory model balancing ground soil compaction, swath coverage velocity, and oblique viewpoint acquisition for under-canopy robotic scouting platforms.',
      targetVenue: 'Field Robotics & Autonomous Systems Symposium',
      type: 'Paper',
    },
  ];

  return (
    <section id="research" className="py-20 bg-[#FAFBF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-purple-800 uppercase">
              Academic & Preprints Repository
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-mono text-slate-500">Peer-Review Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            Research Lab & Publications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Transitioning from the Resonance 48-Hour Hackathon prototype to a structured academic research initiative. All ongoing manuscripts, field trial protocols, and open datasets will be cataloged here as they undergo peer-review.
          </p>
        </div>

        {/* Repository Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('papers')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-md transition-all cursor-pointer ${
              activeTab === 'papers'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Papers & Preprints</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('experiments')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-md transition-all cursor-pointer ${
              activeTab === 'experiments'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Field Experiments</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('datasets')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-md transition-all cursor-pointer ${
              activeTab === 'datasets'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Field Datasets</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('documentation')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-md transition-all cursor-pointer ${
              activeTab === 'documentation'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>System Documentation</span>
          </button>
        </div>

        {/* Tab 1: Papers Content */}
        {activeTab === 'papers' && (
          <div className="space-y-6">
            {researchItems.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-purple-50 text-purple-800 border border-purple-200 text-xs font-mono font-bold rounded-xs">
                      {item.status.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-slate-400">EXPECTED {item.expectedDate}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    TARGET: {item.targetVenue}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif leading-snug">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-slate-600 flex flex-wrap gap-2">
                  <span className="text-slate-400">Authors:</span>
                  {item.authors.map((author, i) => (
                    <span key={author} className="font-semibold text-slate-800">
                      {author}{i < item.authors.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>

                <div className="p-4 bg-[#FAFBF9] border border-slate-200/80 rounded-md">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    ABSTRACT PREVIEW
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {item.abstract}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-2 border-t border-slate-100 text-xs font-mono text-slate-500 gap-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Preprint in draft · DOI pending formal submission</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 cursor-not-allowed">PDF [In Prep]</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-400 cursor-not-allowed">BibTeX [Pending]</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Experiments Placeholder */}
        {activeTab === 'experiments' && (
          <div className="bg-white border border-slate-200 rounded-lg p-10 text-center space-y-3">
            <FlaskConical className="w-8 h-8 text-emerald-700 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 font-mono">
              Experimental Results Will Be Published Here
            </h3>
            <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
              Controlled field trials measuring PDR correlation against manual agronomist sweep-net counts and soil moisture variations are planned for the upcoming growing season.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 border border-emerald-200 rounded-xs inline-block">
                PROTOCOL: PDR_VALIDATION_PHASE_1 (Scheduled 2027)
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Datasets Placeholder */}
        {activeTab === 'datasets' && (
          <div className="bg-white border border-slate-200 rounded-lg p-10 text-center space-y-3">
            <Database className="w-8 h-8 text-blue-700 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 font-mono">
              Open Field Datasets & Imagery Catalog
            </h3>
            <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
              Upon publication, annotated underleaf foliage imagery, microclimate sensor telemetry series, and ground coordinate trajectories will be hosted for public open-science access.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 border border-slate-200 rounded-xs inline-block">
                DATASET CATALOG COMING SOON
              </span>
            </div>
          </div>
        )}

        {/* Tab 4: Documentation */}
        {activeTab === 'documentation' && (
          <div className="bg-white border border-slate-200 rounded-lg p-10 text-center space-y-3">
            <BookOpen className="w-8 h-8 text-purple-700 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 font-mono">
              Engineering Documentation & Firmware Specs
            </h3>
            <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
              Full wiring schematics, dual-ESP32 FreeRTOS firmware architecture, UART message schemas, and ground station setup instructions are being consolidated from the hackathon prototype.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-purple-800 bg-purple-50 px-2.5 py-1 border border-purple-200 rounded-xs inline-block">
                RESEARCH DOCUMENTATION REPOSITORY IN PROGRESS
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
