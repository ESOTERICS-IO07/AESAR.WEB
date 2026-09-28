import React, { useState } from 'react';
import { Cpu, Zap, Activity, HardDrive, Compass, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { HardwareComponent } from '../types';

export const HardwareLabSection: React.FC = () => {
  const [selectedCompId, setSelectedCompId] = useState<string>('brain-esp32');

  const components: HardwareComponent[] = [
    {
      id: 'brain-esp32',
      name: 'Brain ESP32 Coordinator',
      category: 'Compute',
      status: 'BUILT',
      specs: 'Xtensa Dual-Core LX6 @ 240MHz, 520KB SRAM, 802.11b/g/n Wi-Fi, BLE 4.2',
      role: 'Master mission coordinator. Handles telemetry packet streaming to ground station, schedules I2C/SPI sensor readouts, runs high-level navigation state machine, and issues high-level speed/heading commands to the Rover ESP32 over serial UART.',
      interface: 'Hardware UART1 (115200 Baud), I2C Fast Mode (400kHz)',
      notes: 'Built and verified during Resonance 48h Hackathon.',
    },
    {
      id: 'rover-esp32',
      name: 'Rover ESP32 Motor Controller',
      category: 'Compute',
      status: 'BUILT',
      specs: 'Xtensa Dual-Core LX6, 16-channel LEDC Hardware PWM Timers',
      role: 'Deterministic, low-latency motor control engine. Computes PWM duty cycles for left and right track motor pairs, handles soft-start current ramping, and executes instant hardware safety stops if proximity limits are breached.',
      interface: 'LEDC PWM Channels + Direction GPIOs, UART2 Rx/Tx',
      notes: 'Hardware isolated from network tasks to prevent motor runaway during Wi-Fi latency spikes.',
    },
    {
      id: 'bts7960-driver',
      name: 'BTS7960 High-Power H-Bridge Drivers',
      category: 'Power & Drive',
      status: 'BUILT',
      specs: 'Dual Half-Bridge MOSFET Drivers, 43A Peak Current capacity per bridge, 25kHz PWM input',
      role: 'Drives high-torque DC geared motors with strong stall torque necessary to crawl through loose furrow soil and overcome crop mulch resistance without thermal throttling.',
      interface: 'Optoisolated PWM inputs, Inhibit & Diagnostic flags',
      notes: 'Mounted with aluminum heat sinks for sustained outdoor ambient operation.',
    },
    {
      id: 'dc-motors',
      name: '4x Geared DC Motors & Lug Tires',
      category: 'Power & Drive',
      status: 'BUILT',
      specs: '12V DC High-Torque Metal Gearbox, All-Terrain Deep-Lug Rubber Tires',
      role: 'Differential skid-steer propulsion providing high traction over wet soil, raised bed ridges, and crop residue.',
      interface: 'High-current DC Bus from 12V Li-ion pack',
      notes: 'Tested on varied terrain during Resonance Hackathon hardware evaluation.',
    },
    {
      id: 'vl53l0x-tof',
      name: 'VL53L0X Laser Time-of-Flight Sensor',
      category: 'Sensors',
      status: 'BUILT',
      specs: '940nm VCSEL Laser, FlightSense technology, 30mm to 2000mm ranging',
      role: 'High-precision millimetric proximity detection to crop stalks and furrow sidewalls. Eliminates ultrasonic acoustic beam widening errors around dense foliage.',
      interface: 'I2C Bus (Default Address 0x29)',
      notes: 'Front bumper mounted for forward clearance verification.',
    },
    {
      id: 'hc-sr04-sonar',
      name: 'HC-SR04 Ultrasonic Sonar Array',
      category: 'Sensors',
      status: 'BUILT',
      specs: '40kHz Ultrasound, 2cm to 400cm range, 15° measuring angle',
      role: 'Wide-area acoustic detection of large furrow boundaries, field irrigation pipes, and approaching terrain barriers.',
      interface: 'Digital Trigger / Echo GPIO lines',
      notes: 'Redundant safety layer operating concurrently with laser ToF.',
    },
    {
      id: 'camera-module',
      name: 'ESP32-CAM / OV2640 Module',
      category: 'Perception',
      status: 'PROTOTYPE',
      specs: '2 Megapixel UXGA (1600x1200), JPEG compression engine, adjustable focus',
      role: 'Captures foliage macro images for edge pest detection and foliar health analysis. Mounted on front elevated mast for underleaf canopy line-of-sight.',
      interface: 'DVP 8-bit parallel camera bus to ESP32 internal DMA',
      notes: 'Currently undergoing focal distance optimization for close-range leaf inspection.',
    },
    {
      id: 'env-sensors',
      name: 'Environmental Sensor Cluster',
      category: 'Sensors',
      status: 'INTEGRATING',
      specs: 'DHT22 / SHT3x Temperature & Humidity + Capacitive Soil Moisture Probe',
      role: 'Samples the agricultural microclimate boundary layer: air temperature, relative humidity, and root zone volumetric water content to supply the AMRI model.',
      interface: 'I2C / 1-Wire Digital Bus',
      notes: 'Probe mast extension integrates with chassis lower grounding plate.',
    },
  ];

  const selectedComp = components.find((c) => c.id === selectedCompId) || components[0];

  return (
    <section id="hardware" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              Embedded Systems Lab
            </span>
            <span className="text-slate-300">·</span>
            <StatusBadge status="BUILT" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            Hardware Engineering & Subsystems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered from ground-up during the Resonance 48-Hour Hackathon, the AESAR physical prototype balances power-efficient microcontrollers with industrial-grade motor drivers and precision optical/laser sensing.
          </p>
        </div>

        {/* Interactive Exploded Subsystem Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Diagram: Stylized Exploded Subsystem Layout */}
          <div className="lg:col-span-7 bg-[#FAFBF9] border border-slate-200 rounded-lg p-6 relative">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 text-xs font-mono text-slate-500">
              <span>EXPLODED CHASSIS & SENSOR MAPPING</span>
              <span>SELECT SUBSYSTEM TO INSPECT</span>
            </div>

            {/* Stylized Exploded Hardware Blueprint */}
            <div className="relative w-full aspect-[16/11] bg-white rounded-md border border-slate-200 p-4 overflow-hidden flex flex-col justify-between select-none">
              {/* Engineering Grid Background */}
              <div className="absolute inset-0 bg-tech-grid opacity-30" />

              {/* Exploded Deck Layers */}
              {/* Layer 1: Sensor Mast (Upper) */}
              <div className="relative z-10 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedCompId('camera-module')}
                  className={`px-3 py-1.5 rounded-sm border font-mono text-xs transition-all cursor-pointer ${
                    selectedCompId === 'camera-module'
                      ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                      : 'bg-white text-slate-800 border-slate-300 hover:border-emerald-600'
                  }`}
                >
                  ▲ Mast: OV2640 Camera
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCompId('vl53l0x-tof')}
                  className={`px-3 py-1.5 rounded-sm border font-mono text-xs transition-all cursor-pointer ${
                    selectedCompId === 'vl53l0x-tof'
                      ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                      : 'bg-white text-slate-800 border-slate-300 hover:border-emerald-600'
                  }`}
                >
                  Laser ToF (VL53L0X)
                </button>
              </div>

              {/* Connecting Vertical Standoffs (Dashed lines) */}
              <div className="relative z-10 flex justify-center gap-24 py-1 text-slate-300 font-mono text-[10px]">
                <span>│ (Standoffs)</span>
                <span>│ (Standoffs)</span>
              </div>

              {/* Layer 2: Upper Electronics Deck (Dual ESP32) */}
              <div className="relative z-10 bg-slate-50 border border-slate-200 rounded-md p-3 mx-4">
                <span className="text-[10px] font-mono text-slate-400 block mb-2 text-center uppercase">
                  UPPER ELECTRONICS DECK
                </span>
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedCompId('brain-esp32')}
                    className={`px-4 py-2 rounded-sm border font-mono text-xs transition-all cursor-pointer flex items-center gap-2 ${
                      selectedCompId === 'brain-esp32'
                        ? 'bg-slate-900 text-white border-slate-950 shadow-xs'
                        : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Brain ESP32</span>
                  </button>

                  <span className="text-[10px] font-mono text-emerald-700 font-bold">UART Link</span>

                  <button
                    type="button"
                    onClick={() => setSelectedCompId('rover-esp32')}
                    className={`px-4 py-2 rounded-sm border font-mono text-xs transition-all cursor-pointer flex items-center gap-2 ${
                      selectedCompId === 'rover-esp32'
                        ? 'bg-slate-900 text-white border-slate-950 shadow-xs'
                        : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    <span>Rover ESP32</span>
                  </button>
                </div>
              </div>

              {/* Connecting Standoffs */}
              <div className="relative z-10 flex justify-center gap-24 py-1 text-slate-300 font-mono text-[10px]">
                <span>│ (Power Bus)</span>
                <span>│ (Motor PWM)</span>
              </div>

              {/* Layer 3: Lower Power & Drive Deck */}
              <div className="relative z-10 bg-slate-100/80 border border-slate-300 rounded-md p-3 mx-2">
                <span className="text-[10px] font-mono text-slate-400 block mb-2 text-center uppercase">
                  LOWER DRIVE DECK & CHASSIS
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCompId('bts7960-driver')}
                    className={`p-2 rounded-sm border font-mono text-xs text-center transition-all cursor-pointer ${
                      selectedCompId === 'bts7960-driver'
                        ? 'bg-slate-900 text-white border-slate-950 shadow-xs'
                        : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    BTS7960 Drivers (43A)
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedCompId('dc-motors')}
                    className={`p-2 rounded-sm border font-mono text-xs text-center transition-all cursor-pointer ${
                      selectedCompId === 'dc-motors'
                        ? 'bg-slate-900 text-white border-slate-950 shadow-xs'
                        : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    4x Geared DC Motors
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedCompId('hc-sr04-sonar')}
                    className={`p-2 rounded-sm border font-mono text-xs text-center transition-all cursor-pointer ${
                      selectedCompId === 'hc-sr04-sonar'
                        ? 'bg-slate-900 text-white border-slate-950 shadow-xs'
                        : 'bg-white text-slate-800 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    HC-SR04 Sonar Array
                  </button>
                </div>
              </div>

              {/* Soil Probe Layer at base */}
              <div className="relative z-10 flex justify-center pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedCompId('env-sensors')}
                  className={`px-3 py-1 rounded-sm border font-mono text-[11px] transition-all cursor-pointer ${
                    selectedCompId === 'env-sensors'
                      ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-emerald-600'
                  }`}
                >
                  ▼ Ground: Soil Moisture & Microclimate Probes
                </button>
              </div>
            </div>

            {/* Quick Component Selector Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 mr-1">QUICK SELECT:</span>
              {components.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCompId(c.id)}
                  className={`px-2 py-0.5 text-[11px] font-mono rounded-xs border transition-all cursor-pointer ${
                    selectedCompId === c.id
                      ? 'bg-slate-900 text-white border-slate-950'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {c.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Right Subsystem Specification Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-lg p-6 shadow-xs sticky top-24 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  CATEGORY: {selectedComp.category}
                </span>
                <h3 className="text-xl font-bold text-slate-950 font-mono mt-0.5">
                  {selectedComp.name}
                </h3>
              </div>
              <StatusBadge status={selectedComp.status} />
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  SYSTEM ROLE & AGRO-ROBOTIC FUNCTION
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedComp.role}
                </p>
              </div>

              <div className="bg-[#FAFBF9] border border-slate-200 p-3 rounded-md space-y-2">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">HARDWARE SPECIFICATIONS</span>
                  <span className="text-xs font-mono font-semibold text-slate-900 block">{selectedComp.specs}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">BUS / ELECTRICAL INTERFACE</span>
                  <span className="text-xs font-mono font-semibold text-emerald-800 block">{selectedComp.interface}</span>
                </div>
              </div>

              <div className="p-3 bg-emerald-50/50 border border-emerald-200/80 rounded-md">
                <span className="text-[10px] font-mono text-emerald-950 font-bold uppercase block mb-0.5">
                  PROTOTYPE VERIFICATION STATUS
                </span>
                <p className="text-xs text-slate-700 leading-tight">
                  {selectedComp.notes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
