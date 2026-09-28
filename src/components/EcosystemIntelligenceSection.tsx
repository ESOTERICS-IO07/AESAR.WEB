import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, Droplets, Thermometer, Sliders, CheckCircle2, Info } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const EcosystemIntelligenceSection: React.FC = () => {
  // Interactive parameters for concept exploration
  const [pestCount, setPestCount] = useState<number>(32);
  const [defenderCount, setDefenderCount] = useState<number>(24);
  const [temperature, setTemperature] = useState<number>(26); // Celsius
  const [humidity, setHumidity] = useState<number>(68); // %
  const [soilMoisture, setSoilMoisture] = useState<number>(42); // %

  // Illustrative PDR Formulation: Pest Pressure / (Natural Defenders + epsilon)
  // Higher = unfavorable pest surge. Lower = healthy biological control balance.
  const pdr = pestCount / (defenderCount + 1);

  // Illustrative AMRI calculation (Abiotic Microclimate Risk Index):
  // High humidity + warm temp (24-30C) provides optimal vector for fungal/pest spore germination
  const tempFactor = temperature >= 22 && temperature <= 32 ? (temperature - 22) / 10 : 0.2;
  const humidityFactor = humidity > 60 ? (humidity - 60) / 40 : 0.1;
  const amri = Math.min(1.0, Math.max(0.05, (tempFactor * 0.5 + humidityFactor * 0.5 + (soilMoisture > 50 ? 0.2 : 0))));

  // Ecosystem Assessment Logic Gate
  const getEcosystemAssessment = () => {
    if (pdr < 1.0 && amri < 0.5) {
      return {
        status: 'BALANCED ECOSYSTEM',
        color: 'text-emerald-800 bg-emerald-50 border-emerald-300',
        recommendation: 'Hold chemical intervention. Beneficial predator insects (lady beetles, lacewings) are actively regulating pest populations. Re-scout in 48 hours.',
        pesticideAction: 'NO SPRAY RECOMMENDED',
        biologicalAction: 'MAINTAIN PREDATOR HABITAT',
      };
    } else if (pdr >= 1.0 && pdr < 2.0 && amri < 0.6) {
      return {
        status: 'MODERATE PEST PRESSURE · MONITORING',
        color: 'text-amber-800 bg-amber-50 border-amber-300',
        recommendation: 'Pest density elevated, but defender population present. Microclimate abiotic risk is low-to-moderate. Recommend localized biological release or micro-targeted organic repellent.',
        pesticideAction: 'DEFER BROAD-SPECTRUM CHEMICALS',
        biologicalAction: 'TARGETED BENEFICIAL INSECT AUGMENTATION',
      };
    } else {
      return {
        status: 'HIGH OUTBREAK VECTOR · LOCALIZED ACTION',
        color: 'text-rose-900 bg-rose-50 border-rose-300',
        recommendation: 'Pest Defender Ratio exceeded biological equilibrium, accompanied by high humidity/temperature microclimate favorable to rapid pest colonization. Targeted, localized intervention advised.',
        pesticideAction: 'SPOT-TREAT ONLY INFECTED FURROW ZONES',
        biologicalAction: 'POST-INTERVENTION DEFENDER RE-ESTABLISHMENT',
      };
    }
  };

  const assessment = getEcosystemAssessment();

  return (
    <section id="ecosystem" className="py-20 bg-[#FAFBF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              Ecological Decision Matrix
            </span>
            <span className="text-slate-300">·</span>
            <StatusBadge status="RESEARCH" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            Ecosystem Intelligence: PDR & AMRI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            The core philosophy of AESAR: <em className="text-slate-900 font-serif">&ldquo;Instead of simply detecting a pest and immediately recommending an intervention, AESAR aims to understand the surrounding agricultural ecosystem — including pest pressure, natural defenders, soil conditions and microclimate — before suggesting an intervention.&rdquo;</em>
          </p>
        </div>

        {/* The Two Core Formulation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: PDR */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-mono text-xs font-bold rounded-xs">
                    INDEX 01
                  </span>
                  <span className="font-mono text-xs text-slate-500">BIOLOGICAL RATIO</span>
                </div>
                <StatusBadge status="RESEARCH" size="sm" />
              </div>

              <h3 className="text-xl font-bold text-slate-950 font-mono">
                PDR — Pest Defender Ratio
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Measures the spatial balance between destructive agricultural pests and natural beneficial biological defenders (lady beetles, hoverfly larvae, predatory mites, spiders).
              </p>

              <div className="my-4 p-3 bg-[#FAFBF9] border border-slate-200 rounded-sm font-mono text-xs text-center text-slate-800">
                <span className="text-emerald-800 font-bold">PDR</span> = Observed Pest Pressure / (Natural Defenders + &epsilon;)
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Goal: Prevent spraying when defenders are winning</span>
              <span className="font-mono text-emerald-800 font-semibold">Ecological Balance</span>
            </div>
          </div>

          {/* Card 2: AMRI */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 font-mono text-xs font-bold rounded-xs">
                    INDEX 02
                  </span>
                  <span className="font-mono text-xs text-slate-500">MICROCLIMATE VECTOR</span>
                </div>
                <StatusBadge status="RESEARCH" size="sm" />
              </div>

              <h3 className="text-xl font-bold text-slate-950 font-mono">
                AMRI — Abiotic Microclimate Risk Index
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Integrates ambient under-canopy temperature, localized relative humidity, and capacitive soil moisture to calculate the environmental suitability for pest population explosion or fungal outbreak.
              </p>

              <div className="my-4 p-3 bg-[#FAFBF9] border border-slate-200 rounded-sm font-mono text-xs text-center text-slate-800">
                <span className="text-blue-800 font-bold">AMRI</span> = f(T_canopy, RH_boundary, Soil_Moisture, Vapour Pressure Deficit)
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Goal: Anticipate outbreak risk before physical blight</span>
              <span className="font-mono text-blue-800 font-semibold">Microclimate Context</span>
            </div>
          </div>
        </div>

        {/* Interactive Simulation Dashboard: Adjust Parameters & Observe Ecological Advisory */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold text-slate-900 block">
                INTERACTIVE CONCEPT SIMULATOR: ECOSYSTEM ASSESSMENT ENGINE
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Adjust simulated field parameters to evaluate PDR and AMRI decision logic
              </span>
            </div>
            <StatusBadge status="SIMULATION" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider block">
                Simulated Field Sensor Readings
              </span>

              {/* Slider 1: Pest Count */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-700">Observed Pests (Aphids / Spodoptera)</span>
                  <span className="font-bold text-rose-800 tabular-nums">{pestCount} count / m²</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={pestCount}
                  onChange={(e) => setPestCount(Number(e.target.value))}
                  className="w-full accent-rose-700 h-1.5 bg-slate-100 rounded-sm cursor-pointer"
                />
              </div>

              {/* Slider 2: Defender Count */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-700">Observed Beneficial Defenders (Ladybugs)</span>
                  <span className="font-bold text-emerald-800 tabular-nums">{defenderCount} count / m²</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  value={defenderCount}
                  onChange={(e) => setDefenderCount(Number(e.target.value))}
                  className="w-full accent-emerald-700 h-1.5 bg-slate-100 rounded-sm cursor-pointer"
                />
              </div>

              {/* Slider 3: Temperature */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-700">Under-Canopy Temperature</span>
                  <span className="font-bold text-slate-900 tabular-nums">{temperature} °C</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="40"
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full accent-amber-600 h-1.5 bg-slate-100 rounded-sm cursor-pointer"
                />
              </div>

              {/* Slider 4: Humidity */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-700">Canopy Boundary Layer Humidity</span>
                  <span className="font-bold text-blue-800 tabular-nums">{humidity} % RH</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="95"
                  value={humidity}
                  onChange={(e) => setHumidity(Number(e.target.value))}
                  className="w-full accent-blue-600 h-1.5 bg-slate-100 rounded-sm cursor-pointer"
                />
              </div>

              {/* Slider 5: Soil Moisture */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-700">Volumetric Soil Moisture</span>
                  <span className="font-bold text-slate-900 tabular-nums">{soilMoisture} % VWC</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="70"
                  value={soilMoisture}
                  onChange={(e) => setSoilMoisture(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-1.5 bg-slate-100 rounded-sm cursor-pointer"
                />
              </div>
            </div>

            {/* Right Output: Computed Indexes & Advisory */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider block">
                Derived Ecological Indexes & Decision Gate
              </span>

              {/* Computed Score Indicators */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#FAFBF9] border border-slate-200 p-3.5 rounded-md">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    COMPUTED PDR
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold font-mono text-slate-950 tabular-nums">
                      {pdr.toFixed(2)}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {pdr < 1.0 ? 'Defenders Dominant' : pdr < 2.0 ? 'Moderate Ratio' : 'Pest Surge'}
                    </span>
                  </div>
                </div>

                <div className="bg-[#FAFBF9] border border-slate-200 p-3.5 rounded-md">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    COMPUTED AMRI RISK
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold font-mono text-slate-950 tabular-nums">
                      {amri.toFixed(2)}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {amri < 0.4 ? 'Low Abiotic Risk' : amri < 0.7 ? 'Moderate Risk' : 'High Spore Vector'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Synthesized Decision Output Card */}
              <div className={`p-4 rounded-md border ${assessment.color} space-y-2`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider">
                    {assessment.status}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-white/70 px-2 py-0.5 rounded-xs">
                    AGRONOMIC ADVISORY
                  </span>
                </div>
                <p className="text-xs leading-relaxed font-medium">
                  {assessment.recommendation}
                </p>

                <div className="pt-2 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono gap-1">
                  <span>AGROCHEMICAL: {assessment.pesticideAction}</span>
                  <span>BIOCONTROL: {assessment.biologicalAction}</span>
                </div>
              </div>

              {/* Research Disclaimer */}
              <div className="flex items-start gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-sm text-[11px] text-slate-500">
                <Info className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                <span>
                  Illustrative mathematical formulation for prototype visualization. Coefficients will be calibrated during upcoming controlled agricultural field trials.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
