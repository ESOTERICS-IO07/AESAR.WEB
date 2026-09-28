import React, { useState } from 'react';
import { Layers, Plane, Eye, Shield, Sparkles, AlertTriangle } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const MultiLayerCanopySection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'top' | 'middle' | 'ground'>('all');

  const layers = [
    {
      id: 'top',
      title: 'Top Canopy Layer',
      elevation: '1.2m – 2.5m+',
      phenomena: 'Foliage sunburn, chlorosis, upper bird/insect predation, light interception',
      scoutingChallenge: 'Occludes under-canopy views; visible to aerial sensors, invisible to low-ground chassis without high-mast optics.',
      subsystem: 'FUTURE AERIAL SUBSYSTEM (DRONE)',
      subsystemStatus: 'FUTURE' as const,
      color: 'border-blue-300 bg-blue-50/40 text-blue-900',
    },
    {
      id: 'middle',
      title: 'Middle Canopy & Underleaf',
      elevation: '0.4m – 1.2m',
      phenomena: 'Underleaf aphid colonies, whiteflies, fungal sporulation, high localized humidity pocket',
      scoutingChallenge: 'Completely concealed from satellites and high drones by upper leaf layers. This is where 80% of pest damage begins.',
      subsystem: 'AESAR GROUND ROVER MAST CAMERAS',
      subsystemStatus: 'PROTOTYPE' as const,
      color: 'border-emerald-300 bg-emerald-50/40 text-emerald-900',
    },
    {
      id: 'ground',
      title: 'Ground & Root Zone',
      elevation: '0.0m – 0.4m',
      phenomena: 'Soil moisture deficits, weed seedlings, root collar rot, beneficial ground beetles (Carabidae)',
      scoutingChallenge: 'Requires physical ground contact or direct proximity soil probes (capacitive / TDR).',
      subsystem: 'AESAR GROUND CHASSIS & SOIL PROBES',
      subsystemStatus: 'BUILT' as const,
      color: 'border-amber-300 bg-amber-50/40 text-amber-900',
    },
  ];

  return (
    <section id="canopy" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              Vertical Agronomic Stratification
            </span>
            <span className="text-slate-300">·</span>
            <StatusBadge status="RESEARCH" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            &ldquo;A field is three-dimensional.&rdquo;
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Agricultural canopies are not flat planes. Different biological processes occur at distinct vertical elevations. Pests cluster beneath middle-canopy leaves, diseases emerge in stagnant ground microclimates, and solar stress affects the upper canopy.
          </p>
        </div>

        {/* Interactive Layer Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-500 mr-2">ISOLATE ELEVATION LAYER:</span>
          {(['all', 'top', 'middle', 'ground'] as const).map((layerKey) => (
            <button
              key={layerKey}
              onClick={() => setActiveLayer(layerKey)}
              className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-md border transition-all cursor-pointer ${
                activeLayer === layerKey
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              {layerKey === 'all' ? 'FULL STRATIFICATION (3D VIEW)' : layerKey.toUpperCase() + ' LAYER'}
            </button>
          ))}
        </div>

        {/* Visual Interactive Cross-Section Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Diagram: Cross-Section Graphic */}
          <div className="lg:col-span-7 bg-[#FAFBF9] border border-slate-200 rounded-lg p-6 relative overflow-hidden">
            {/* Elevation Altitude Scale */}
            <div className="absolute left-3 top-8 bottom-8 flex flex-col justify-between text-[10px] font-mono text-slate-400 select-none border-r border-slate-200 pr-2">
              <span>+3.0m</span>
              <span>+2.0m</span>
              <span>+1.0m</span>
              <span>0.0m</span>
            </div>

            <div className="ml-10 space-y-4">
              {/* Future Aerial Zone (Drone) */}
              <div
                className={`p-4 rounded-md border transition-all ${
                  activeLayer === 'top' || activeLayer === 'all'
                    ? 'border-blue-300 bg-blue-50/40 opacity-100'
                    : 'border-slate-100 bg-slate-50/50 opacity-40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-blue-700" />
                    <span className="text-xs font-mono font-bold text-blue-950">AERIAL SUBSYSTEM ELEVATION</span>
                  </div>
                  <StatusBadge status="FUTURE" />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Orthomosaic canopy NDVI, broad-area weed mapping</span>
                  <span className="font-mono text-[11px] text-blue-800">UAV Perspective</span>
                </div>
              </div>

              {/* Plant Visual Graphic Cross-Section */}
              <div className="relative h-64 bg-white rounded-md border border-slate-200 p-4 overflow-hidden flex flex-col justify-between">
                {/* Visual Sky & Drone Graphic (Future) */}
                <div className="flex items-center justify-between border-b border-dashed border-blue-200 pb-2">
                  <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-2 py-1 rounded-xs">
                    <Plane className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[10px] font-mono font-bold text-blue-900">
                      UAV DRONE (FUTURE RESEARCH)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Downward Multispectral FOV ▼</span>
                </div>

                {/* SVG Canopy Illustration */}
                <svg className="w-full h-36" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
                  {/* Drone Scanning Cone (dashed blue) */}
                  <polygon points="200,0 120,60 280,60" fill="rgba(59, 130, 246, 0.08)" stroke="#3B82F6" strokeWidth="0.75" strokeDasharray="3 3" />

                  {/* Crop Plant Stalks and Foliage */}
                  {/* Plant 1 */}
                  <path d="M 90 120 Q 90 60 85 30" stroke="#15803D" strokeWidth="3" fill="none" />
                  <ellipse cx="85" cy="30" rx="20" ry="10" fill="#22C55E" opacity="0.8" />
                  <ellipse cx="65" cy="55" rx="18" ry="8" fill="#16A34A" opacity="0.85" />
                  <ellipse cx="105" cy="50" rx="16" ry="8" fill="#16A34A" opacity="0.85" />
                  <ellipse cx="70" cy="80" rx="14" ry="7" fill="#15803D" opacity="0.9" />

                  {/* Plant 2 */}
                  <path d="M 200 120 Q 200 50 195 25" stroke="#15803D" strokeWidth="3.5" fill="none" />
                  <ellipse cx="195" cy="25" rx="24" ry="12" fill="#22C55E" opacity="0.8" />
                  <ellipse cx="170" cy="55" rx="20" ry="9" fill="#16A34A" opacity="0.85" />
                  <ellipse cx="225" cy="55" rx="22" ry="10" fill="#16A34A" opacity="0.85" />
                  <ellipse cx="180" cy="85" rx="16" ry="8" fill="#15803D" opacity="0.9" />

                  {/* Plant 3 */}
                  <path d="M 310 120 Q 310 65 315 35" stroke="#15803D" strokeWidth="3" fill="none" />
                  <ellipse cx="315" cy="35" rx="18" ry="10" fill="#22C55E" opacity="0.8" />
                  <ellipse cx="290" cy="60" rx="18" ry="8" fill="#16A34A" opacity="0.85" />
                  <ellipse cx="330" cy="65" rx="16" ry="8" fill="#16A34A" opacity="0.85" />

                  {/* AESAR Upward/Oblique Under-Canopy Scanning Rays (Emerald) */}
                  <polygon points="35,115 150,55 120,95" fill="rgba(16, 185, 129, 0.18)" stroke="#10B981" strokeWidth="1" strokeDasharray="3 2" />

                  {/* Ground Line */}
                  <line x1="0" y1="118" x2="400" y2="118" stroke="#78350F" strokeWidth="2" />
                </svg>

                {/* Ground Rover Representation at bottom left */}
                <div className="flex items-center justify-between border-t border-emerald-200 pt-2 bg-emerald-50/70 px-2 rounded-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-emerald-950">
                      AESAR GROUND ROVER (BUILT PROTOTYPE)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800">
                    ▲ Upward Underleaf Scanning Cone
                  </span>
                </div>
              </div>

              {/* Subsystem Callout */}
              <div className="p-3 bg-white border border-slate-200 rounded-md flex items-center justify-between text-xs font-mono">
                <span className="text-slate-600">COMPLEMENTARY OBSERVATION PRINCIPLE</span>
                <span className="font-bold text-slate-900">UAV (MACRO TOP) + AESAR (MICRO UNDERLEAF)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layer Breakdown Details */}
          <div className="lg:col-span-5 space-y-4">
            {layers.map((layer) => (
              <div
                key={layer.id}
                className={`p-5 rounded-lg border transition-all ${
                  activeLayer === layer.id || activeLayer === 'all'
                    ? 'border-slate-300 bg-white shadow-xs'
                    : 'border-slate-100 bg-slate-50/50 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-900">
                    {layer.title}
                  </span>
                  <StatusBadge status={layer.subsystemStatus} />
                </div>
                <div className="text-[11px] font-mono text-emerald-800 mb-2">
                  ELEVATION: {layer.elevation} · {layer.subsystem}
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  <strong className="text-slate-800">Target Phenomena:</strong> {layer.phenomena}
                </p>
                <p className="text-xs text-slate-500 italic">
                  {layer.scoutingChallenge}
                </p>
              </div>
            ))}

            {/* Research Declaration */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
              <span className="text-xs font-mono font-semibold text-slate-900 block mb-1">
                Next-Generation Research Direction
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                The proposed architecture complements ground-based observations with aerial observations of upper crop layers that may not be visible from the rover. Aerial integration remains an active research direction and is not currently deployed on the physical ground prototype.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
