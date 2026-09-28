/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { PillarsSection } from './components/PillarsSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { ExplorationSection } from './components/ExplorationSection';
import { MultiLayerCanopySection } from './components/MultiLayerCanopySection';
import { Perception360Section } from './components/Perception360Section';
import { GroundAerialSection } from './components/GroundAerialSection';
import { EcosystemIntelligenceSection } from './components/EcosystemIntelligenceSection';
import { ComputerVisionSection } from './components/ComputerVisionSection';
import { HardwareLabSection } from './components/HardwareLabSection';
import { ResearchLabSection } from './components/ResearchLabSection';
import { ArticlesSection } from './components/ArticlesSection';
import { SimulationSection } from './components/SimulationSection';
import { TimelineSection } from './components/TimelineSection';
import { HackathonSection } from './components/HackathonSection';
import { VisionSection } from './components/VisionSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFBF9] text-[#111827] flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Section 1: The Problem */}
        <ProblemSection />

        {/* Section 2: What is AESAR? (4 Pillars) */}
        <PillarsSection />

        {/* Section 3: System Architecture */}
        <ArchitectureSection />

        {/* Section 4: Autonomous Exploration */}
        <ExplorationSection />

        {/* Section 5: Multi-Layer Crop Observation */}
        <MultiLayerCanopySection />

        {/* Section 6: 360° Perception */}
        <Perception360Section />

        {/* Section 7: Ground + Aerial Intelligence */}
        <GroundAerialSection />

        {/* Section 8: Ecosystem Intelligence (PDR & AMRI) */}
        <EcosystemIntelligenceSection />

        {/* Section 9: Computer Vision + AI */}
        <ComputerVisionSection />

        {/* Section 10: Hardware Lab */}
        <HardwareLabSection />

        {/* Section 11: Research Lab */}
        <ResearchLabSection />

        {/* Section 12: Engineering Articles */}
        <ArticlesSection />

        {/* Section 13: Live / Interactive Simulation */}
        <SimulationSection />

        {/* Section 14: Development Timeline */}
        <TimelineSection />

        {/* Section 15: Resonance Hackathon & Team */}
        <HackathonSection />

        {/* Section 16: Vision */}
        <VisionSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
