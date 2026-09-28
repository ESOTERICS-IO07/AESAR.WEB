import React, { useState } from 'react';
import { Camera, Cpu, Eye, Sparkles, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { ModelCard } from '../types';

export const ComputerVisionSection: React.FC = () => {
  const [selectedModelIndex, setSelectedModelIndex] = useState<number>(0);

  const pipelineSteps = [
    { title: 'CAMERA', desc: 'OV2640 Macro Lens / Mast Rig', tech: 'RGB 1600x1200' },
    { title: 'RAW FRAME', desc: 'Underleaf Optical Ingestion', tech: 'YUV / JPEG Buffer' },
    { title: 'PRE-PROCESS', desc: 'WhiteBalance & Exposure Normalization', tech: 'Outdoor Lighting Filter' },
    { title: 'COMPUTER VISION', desc: 'Lightweight Quantized Detection', tech: 'Edge CNN Backbone' },
    { title: 'OBSERVATION', desc: 'Pest BBoxes + Leaf Health Mask', tech: 'Dual Taxa Output' },
    { title: 'ECO CONTEXT', desc: 'PDR & AMRI Synthesis', tech: 'Agronomic Logic Gate' },
  ];

  const models: ModelCard[] = [
    {
      id: 'pest-detection',
      name: 'Underleaf Pest & Defender Classifier',
      status: 'PROTOTYPE',
      input: 'RGB Close-Up Foliage Image (640x640)',
      output: 'Bounding boxes, class confidence, pest vs beneficial label',
      technology: 'Lightweight Mobile Architecture / Quantized INT8 weights',
      researchDirection: 'On-device real-time inference on edge microprocessors; expanding multi-pest regional catalog (aphids, fall armyworm, lady beetles, hoverflies).',
      metricsNote: 'Benchmarking in progress. Preliminary mAP evaluation scheduled with regional agricultural university test plots.',
    },
    {
      id: 'crop-stress',
      name: 'Foliar Chlorosis & Stress Segmentation',
      status: 'INTEGRATING',
      input: 'Macro leaf image + localized moisture telemetry',
      output: 'Percentage leaf area affected by necrotic lesions or nutrient chlorosis',
      technology: 'Semantic Segmentation (MobileNet / U-Net lightweight variant)',
      researchDirection: 'Distinguishing biotic chewing damage from abiotic drought or fertilizer burn without cloud round-trip latency.',
      metricsNote: 'Training datasets currently being curated from controlled greenhouse trials. Metrics will be released with technical preprint.',
    },
    {
      id: 'environmental-correlation',
      name: 'Microclimate Spore & Risk Estimator',
      status: 'RESEARCH',
      input: 'Time-series temperature, humidity boundary layer, soil moisture',
      output: 'Abiotic Microclimate Risk Index (AMRI) probability curve',
      technology: 'Bayesian Time-Series Estimator & Agronomic Rules Engine',
      researchDirection: 'Correlating microclimate sensor spikes with subsequent 72-hour spore emergence across diverse micro-terrains.',
      metricsNote: 'Model formulation established; field validation pending multi-season longitudinal farm data.',
    },
    {
      id: 'multimodal-fusion',
      name: 'Ground–Aerial Multimodal Fusion Net',
      status: 'FUTURE',
      input: 'UAV orthomosaic GeoTIFF + Rover underleaf macro coordinate frames',
      output: '3D Volumetric Field Health Voxel Space',
      technology: 'Cross-Attention Spatial Graph Neural Network (Proposed)',
      researchDirection: 'Joint representation aligning macroscopic overhead canopy reflections with ground-level microscopic biology.',
      metricsNote: 'Theoretical architecture phase. Computational resource requirements and simulation frameworks under evaluation.',
    },
  ];

  return (
    <section id="models" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-800 uppercase">
              Vision & Inference Pipeline
            </span>
            <span className="text-slate-300">·</span>
            <StatusBadge status="INTEGRATING" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-mono">
            &ldquo;From pixels to field intelligence.&rdquo;
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Raw camera pixels are only the first step. AESAR translates optical captures into classified biological entities, and immediately binds those entities to environmental context.
          </p>
        </div>

        {/* 6-Step Vision Flow Ribbon */}
        <div className="bg-[#FAFBF9] border border-slate-200 rounded-lg p-5 mb-10 overflow-x-auto">
          <div className="min-w-[700px] flex items-center justify-between">
            {pipelineSteps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <div className="flex flex-col items-center text-center px-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                  <span className="text-xs font-mono font-bold text-slate-900 mt-0.5">{step.title}</span>
                  <span className="text-[11px] text-slate-600 max-w-[110px] leading-tight mt-1">{step.desc}</span>
                  <span className="text-[9px] font-mono text-emerald-800 bg-white px-1.5 py-0.5 border border-slate-200 rounded-xs mt-1.5">
                    {step.tech}
                  </span>
                </div>
                {idx < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-300 shrink-0 mx-1" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {models.map((model, idx) => {
            const isSelected = selectedModelIndex === idx;
            return (
              <div
                key={model.id}
                onClick={() => setSelectedModelIndex(idx)}
                className={`p-5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-emerald-600 ring-2 ring-emerald-600/30 shadow-xs'
                    : 'bg-[#FAFBF9] border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">MODEL 0{idx + 1}</span>
                    <StatusBadge status={model.status} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-950 font-mono mb-2">
                    {model.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {model.technology}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-emerald-800">
                  <span>{isSelected ? 'INSPECTING' : 'VIEW CARD'}</span>
                  <span>➔</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Model Card Inspector */}
        <div className="bg-[#FAFBF9] border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-slate-500">AI MODEL SPECIFICATION</span>
                <span className="text-slate-300">·</span>
                <StatusBadge status={models[selectedModelIndex].status} />
              </div>
              <h4 className="text-2xl font-bold text-slate-950 font-mono">
                {models[selectedModelIndex].name}
              </h4>
            </div>

            <div className="bg-white border border-slate-200 px-3 py-1.5 rounded-sm text-xs font-mono text-slate-700">
              ARCHITECTURE: {models[selectedModelIndex].technology}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white border border-slate-200 p-4 rounded-md space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">INPUT TENSOR</span>
                <span className="text-xs font-mono font-semibold text-slate-900">{models[selectedModelIndex].input}</span>
              </div>

              <div className="bg-white border border-slate-200 p-4 rounded-md space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">OUTPUT INFERENCE</span>
                <span className="text-xs font-mono font-semibold text-emerald-900">{models[selectedModelIndex].output}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-slate-200 p-4 rounded-md space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">RESEARCH DIRECTION</span>
                <p className="text-xs text-slate-700 leading-relaxed">{models[selectedModelIndex].researchDirection}</p>
              </div>

              <div className="bg-amber-50/60 border border-amber-200 p-4 rounded-md space-y-1">
                <span className="text-[10px] font-mono text-amber-900 font-bold uppercase tracking-wider block">VALIDATION STATUS & HONEST BENCHMARK POLICY</span>
                <p className="text-xs text-amber-950 leading-relaxed font-mono">{models[selectedModelIndex].metricsNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
