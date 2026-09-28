import React, { useState } from 'react';
import { Layers, ArrowDown, Cpu, Wifi, HardDrive, Radio, Shield, Gauge, ExternalLink } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

interface ArchNode {
  id: string;
  title: string;
  category: 'Software / UI' | 'Backend & API' | 'Brain ESP32' | 'Drive & Actuation' | 'Sensors';
  status: 'BUILT' | 'PROTOTYPE' | 'INTEGRATING' | 'RESEARCH';
  desc: string;
  specs: string;
  protocol: string;
  hardwareLevel: string;
}

export const ArchitectureSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('brain-esp32');
  const [viewMode, setViewMode] = useState<'conceptual' | 'prototype'>('prototype');

  const nodes: Record<string, ArchNode> = {
    'react-frontend': {
      id: 'react-frontend',
      title: 'React Operator Console',
      category: 'Software / UI',
      status: 'BUILT',
      desc: 'Ground control interface rendering real-time 2D scouting trajectories, telemetry telemetry charts, rover orientation, and manual override controls.',
      specs: 'TypeScript, Tailwind CSS, Motion, WebSockets',
      protocol: 'HTTPS / WSS JSON packets',
      hardwareLevel: 'Host Ground Station',
    },
    'fastapi-backend': {
      id: 'fastapi-backend',
      title: 'FastAPI Telemetry Gateway',
      category: 'Backend & API',
      status: 'PROTOTYPE',
      desc: 'High-concurrency asynchronous API server handling rover telemetry ingestion, coordinate logging, and coordinating computer vision inference jobs.',
      specs: 'Python 3.11, Uvicorn, AsyncIO, Pydantic data schemas',
      protocol: 'RESTful API + WebSocket Broadcast',
      hardwareLevel: 'Local Field Server / Laptop',
    },
    'brain-esp32': {
      id: 'brain-esp32',
      title: 'Brain ESP32 (Master)',
      category: 'Brain ESP32',
      status: 'BUILT',
      desc: 'High-level coordinator microcontroller. Manages Wi-Fi communication, sensor bus scheduling (I2C/SPI), path waypoints, and sends high-level motion vectors to the Rover ESP32.',
      specs: 'ESP32 Dual-Core Xtensa LX6 @ 240MHz, 520KB SRAM',
      protocol: 'Hardware UART @ 115200 Baud to Rover ESP32',
      hardwareLevel: 'Upper Electronics Deck',
    },
    'rover-esp32': {
      id: 'rover-esp32',
      title: 'Rover ESP32 (Motor Control)',
      category: 'Drive & Actuation',
      status: 'BUILT',
      desc: 'Dedicated deterministic motor controller microcontroller. Computes PWM duty cycles for BTS7960 drivers, enforces collision emergency stops, and monitors wheel encoder signals.',
      specs: 'ESP32 Dual-Core Xtensa LX6, Hardware Timer PWM',
      protocol: 'Bidirectional UART + GPIO Direct Pins',
      hardwareLevel: 'Lower Chassis Deck',
    },
    'bts7960-drivers': {
      id: 'bts7960-drivers',
      title: 'BTS7960 Motor Drivers',
      category: 'Drive & Actuation',
      status: 'BUILT',
      desc: 'High-power H-bridge motor drive modules capable of delivering high peak current without thermal saturation over rough soil furrows.',
      specs: 'Dual BTS7960 Half-Bridges, up to 43A peak current capacity',
      protocol: 'PWM Speed Control + Digital Direction Pins',
      hardwareLevel: 'Chassis Power Bay',
    },
    'dc-motors': {
      id: 'dc-motors',
      title: '4x Geared DC Motors & Wheels',
      category: 'Drive & Actuation',
      status: 'BUILT',
      desc: 'Four high-torque metal-geared DC motors driving rugged agricultural rubber tread wheels, offering skid-steer differential drive maneuverability.',
      specs: '12V High-Torque Geared, Skid-Steer Configuration',
      protocol: 'Analog Power Bus (0-12V DC)',
      hardwareLevel: 'All-Terrain Ground Contact',
    },
    'sensing-stack': {
      id: 'sensing-stack',
      title: 'Perception & Sensor Stack',
      category: 'Sensors',
      status: 'BUILT',
      desc: 'Multi-sensor cluster comprising VL53L0X Time-of-Flight laser rangefinder, HC-SR04 ultrasonic array, OV2640 camera, and environmental probes.',
      specs: 'ToF (Laser), Sonar (Ultrasonic), Optical RGB, Soil / Temp',
      protocol: 'I2C Bus + Digital Interrupts',
      hardwareLevel: 'Sensor Mast & Proximity Bumpers',
    },
  };

  const activeNode = nodes[selectedNodeId] || nodes['brain-esp32'];

  return (
    <section id="architecture" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
                System Decomposition
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs font-mono text-slate-500">Dual-ESP32 Hardware Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
              System Architecture
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              AESAR enforces strict segregation between high-level perception, network communications, and deterministic motor safety loops via a dedicated dual-ESP32 hardware architecture.
            </p>
          </div>

          {/* Toggle View Mode */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-md self-start border border-slate-200">
            <button
              type="button"
              onClick={() => setViewMode('prototype')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-xs transition-all cursor-pointer ${
                viewMode === 'prototype'
                  ? 'bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              PROTOTYPE HARDWARE STACK
            </button>
            <button
              type="button"
              onClick={() => setViewMode('conceptual')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-xs transition-all cursor-pointer ${
                viewMode === 'conceptual'
                  ? 'bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              CONCEPTUAL INFORMATION MODEL
            </button>
          </div>
        </div>

        {viewMode === 'conceptual' ? (
          /* Conceptual High-Level Diagram */
          <div className="bg-[#FAFBF9] border border-slate-200 rounded-lg p-8 mb-8 text-center">
            <p className="text-xs font-mono text-slate-500 mb-6 uppercase tracking-wider">
              Functional Decomposition: Perception to Decision Support
            </p>
            <div className="max-w-xl mx-auto space-y-4">
              <div className="p-3 bg-white border border-slate-300 rounded-md font-mono text-sm font-bold text-slate-900 shadow-2xs">
                AESAR SCOUTING PLATFORM
              </div>
              <div className="w-[1.5px] h-6 bg-slate-400 mx-auto" />
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white border border-emerald-300 rounded-md font-mono text-xs font-semibold text-emerald-900 shadow-2xs">
                  PERCEPTION STACK
                  <span className="block text-[10px] text-slate-500 font-normal mt-0.5">Optics · ToF · Environment</span>
                </div>
                <div className="p-3 bg-white border border-emerald-300 rounded-md font-mono text-xs font-semibold text-emerald-900 shadow-2xs">
                  EXPLORATION STACK
                  <span className="block text-[10px] text-slate-500 font-normal mt-0.5">Diagonal AESA Traversal</span>
                </div>
              </div>
              <div className="w-[1.5px] h-6 bg-slate-400 mx-auto" />
              <div className="p-3 bg-white border border-slate-300 rounded-md font-mono text-sm font-semibold text-slate-900 shadow-2xs">
                AI / ANALYSIS ENGINE
                <span className="block text-[10px] text-slate-500 font-normal mt-0.5">Edge Object Detection & Leaf Segmentation</span>
              </div>
              <div className="w-[1.5px] h-6 bg-slate-400 mx-auto" />
              <div className="p-3 bg-white border border-purple-300 rounded-md font-mono text-sm font-semibold text-purple-900 shadow-2xs">
                ECOSYSTEM MODEL (PDR + AMRI)
                <span className="block text-[10px] text-slate-500 font-normal mt-0.5">Pest Pressure vs Natural Defenders + Microclimate Risk</span>
              </div>
              <div className="w-[1.5px] h-6 bg-slate-400 mx-auto" />
              <div className="p-3 bg-emerald-800 text-white rounded-md font-mono text-sm font-bold shadow-xs">
                ECOLOGICAL DECISION SUPPORT
                <span className="block text-[10px] text-emerald-200 font-normal mt-0.5">Targeted Agronomic Intervention Advisory</span>
              </div>
            </div>
          </div>
        ) : (
          /* Prototype Dual-ESP32 Hardware Pipeline Diagram */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Interactive Architecture Flow Diagram */}
            <div className="lg:col-span-7 bg-[#FAFBF9] border border-slate-200 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-200">
                <span>INTERACTIVE HARDWARE SCHEMATIC</span>
                <span>CLICK NODE TO INSPECT</span>
              </div>

              {/* Node 1: React Frontend */}
              <div
                onClick={() => setSelectedNodeId('react-frontend')}
                className={`p-3.5 rounded-md border transition-all cursor-pointer flex items-center justify-between ${
                  selectedNodeId === 'react-frontend'
                    ? 'bg-white border-emerald-600 ring-2 ring-emerald-600/30 shadow-xs'
                    : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-slate-100 flex items-center justify-center text-slate-700">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-900 block">React Frontend Console</span>
                    <span className="text-[11px] text-slate-500">Ground Control & Operator Telemetry</span>
                  </div>
                </div>
                <StatusBadge status="BUILT" />
              </div>

              {/* Wire 1 */}
              <div className="flex items-center justify-center py-1">
                <span className="text-[10px] font-mono text-emerald-800 bg-white px-2 py-0.5 border border-slate-200 rounded-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  WebSocket Telemetry Stream (JSON)
                </span>
              </div>

              {/* Node 2: FastAPI */}
              <div
                onClick={() => setSelectedNodeId('fastapi-backend')}
                className={`p-3.5 rounded-md border transition-all cursor-pointer flex items-center justify-between ${
                  selectedNodeId === 'fastapi-backend'
                    ? 'bg-white border-emerald-600 ring-2 ring-emerald-600/30 shadow-xs'
                    : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-slate-100 flex items-center justify-center text-slate-700">
                    <Wifi className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-900 block">FastAPI Telemetry Gateway</span>
                    <span className="text-[11px] text-slate-500">Asynchronous Coordinate Ingestion & Routing</span>
                  </div>
                </div>
                <StatusBadge status="PROTOTYPE" />
              </div>

              {/* Wire 2 */}
              <div className="flex items-center justify-center py-1">
                <span className="text-[10px] font-mono text-emerald-800 bg-white px-2 py-0.5 border border-slate-200 rounded-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Wi-Fi 802.11 b/g/n IP Packet Bridge
                </span>
              </div>

              {/* Dual ESP32 Core Box */}
              <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-md space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-emerald-900">
                  <span>ON-BOARD DUAL-ESP32 EMBEDDED SYSTEM</span>
                  <span>ISOLATED CORES</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Node 3: Brain ESP32 */}
                  <div
                    onClick={() => setSelectedNodeId('brain-esp32')}
                    className={`p-3 rounded-md border transition-all cursor-pointer ${
                      selectedNodeId === 'brain-esp32'
                        ? 'bg-white border-emerald-600 ring-2 ring-emerald-600/40 shadow-xs'
                        : 'bg-white/80 border-emerald-200 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-slate-900">Brain ESP32</span>
                      <StatusBadge status="BUILT" />
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      High-Level Planner & Sensor Hub
                    </p>
                  </div>

                  {/* Node 4: Rover ESP32 */}
                  <div
                    onClick={() => setSelectedNodeId('rover-esp32')}
                    className={`p-3 rounded-md border transition-all cursor-pointer ${
                      selectedNodeId === 'rover-esp32'
                        ? 'bg-white border-emerald-600 ring-2 ring-emerald-600/40 shadow-xs'
                        : 'bg-white/80 border-emerald-200 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-slate-900">Rover ESP32</span>
                      <StatusBadge status="BUILT" />
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Deterministic Motor PWM & Safety
                    </p>
                  </div>
                </div>

                {/* Physical UART Bus indicator */}
                <div className="text-center">
                  <span className="text-[10px] font-mono text-emerald-950 font-bold bg-white px-2 py-0.5 border border-emerald-300 rounded-xs inline-block">
                    ◄── Hardware UART Serial Link @ 115200 Baud ──►
                  </span>
                </div>
              </div>

              {/* Wire 3 */}
              <div className="flex items-center justify-center py-1">
                <span className="text-[10px] font-mono text-slate-700 bg-white px-2 py-0.5 border border-slate-200 rounded-xs">
                  Hardware PWM + Direction Logic GPIO
                </span>
              </div>

              {/* Lower Drive & Sensor Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Node 5: BTS7960 Drivers */}
                <div
                  onClick={() => setSelectedNodeId('bts7960-drivers')}
                  className={`p-3 rounded-md border transition-all cursor-pointer ${
                    selectedNodeId === 'bts7960-drivers'
                      ? 'bg-white border-emerald-600 ring-2 ring-emerald-600/30 shadow-xs'
                      : 'bg-white/70 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-slate-900">BTS7960 Drivers</span>
                    <StatusBadge status="BUILT" />
                  </div>
                  <p className="text-[11px] text-slate-500">43A Peak Current H-Bridge</p>
                </div>

                {/* Node 6: DC Motors */}
                <div
                  onClick={() => setSelectedNodeId('dc-motors')}
                  className={`p-3 rounded-md border transition-all cursor-pointer ${
                    selectedNodeId === 'dc-motors'
                      ? 'bg-white border-emerald-600 ring-2 ring-emerald-600/30 shadow-xs'
                      : 'bg-white/70 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-slate-900">4x Geared DC Motors</span>
                    <StatusBadge status="BUILT" />
                  </div>
                  <p className="text-[11px] text-slate-500">High-Torque All-Terrain Drive</p>
                </div>
              </div>

              {/* Node 7: Sensor Stack */}
              <div
                onClick={() => setSelectedNodeId('sensing-stack')}
                className={`p-3 rounded-md border transition-all cursor-pointer ${
                  selectedNodeId === 'sensing-stack'
                    ? 'bg-white border-emerald-600 ring-2 ring-emerald-600/30 shadow-xs'
                    : 'bg-white/70 border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-slate-900">Perception & Sensor Stack</span>
                  <StatusBadge status="BUILT" />
                </div>
                <p className="text-[11px] text-slate-500">VL53L0X Laser ToF + HC-SR04 Sonar + Camera + Soil Probes</p>
              </div>
            </div>

            {/* Component Detail Inspector Card */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-lg p-6 shadow-xs sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    {activeNode.category}
                  </span>
                  <h4 className="text-xl font-bold text-slate-950 font-mono mt-0.5">
                    {activeNode.title}
                  </h4>
                </div>
                <StatusBadge status={activeNode.status} />
              </div>

              <div className="py-4 space-y-4">
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    FUNCTION & ARCHITECTURAL ROLE
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeNode.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-2">
                  <div className="bg-[#FAFBF9] border border-slate-200/80 p-2.5 rounded-sm">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">HARDWARE LEVEL</span>
                    <span className="text-xs font-mono font-semibold text-slate-900">{activeNode.hardwareLevel}</span>
                  </div>

                  <div className="bg-[#FAFBF9] border border-slate-200/80 p-2.5 rounded-sm">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">SPECIFICATION</span>
                    <span className="text-xs font-mono font-semibold text-slate-900">{activeNode.specs}</span>
                  </div>

                  <div className="bg-[#FAFBF9] border border-slate-200/80 p-2.5 rounded-sm">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">INTERFACE / PROTOCOL</span>
                    <span className="text-xs font-mono font-semibold text-emerald-800">{activeNode.protocol}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic font-serif">
                Validated during the Resonance 48-Hour Hackathon 2026 hardware implementation.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
