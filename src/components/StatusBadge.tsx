import React from 'react';
import { ProjectStatus } from '../types';

interface StatusBadgeProps {
  status: ProjectStatus;
  size?: 'sm' | 'md';
}

const statusStyles: Record<ProjectStatus, { label: string; text: string; border: string; bg: string; dot: string }> = {
  BUILT: {
    label: 'BUILT',
    text: 'text-emerald-800',
    border: 'border-emerald-300',
    bg: 'bg-emerald-50/80',
    dot: 'bg-emerald-500',
  },
  PROTOTYPE: {
    label: 'PROTOTYPE',
    text: 'text-amber-800',
    border: 'border-amber-300',
    bg: 'bg-amber-50/80',
    dot: 'bg-amber-500',
  },
  INTEGRATING: {
    label: 'INTEGRATING',
    text: 'text-blue-800',
    border: 'border-blue-300',
    bg: 'bg-blue-50/80',
    dot: 'bg-blue-500',
  },
  RESEARCH: {
    label: 'RESEARCH',
    text: 'text-purple-800',
    border: 'border-purple-300',
    bg: 'bg-purple-50/80',
    dot: 'bg-purple-500',
  },
  FUTURE: {
    label: 'FUTURE',
    text: 'text-slate-600',
    border: 'border-slate-300',
    bg: 'bg-slate-100/80',
    dot: 'bg-slate-400',
  },
  SIMULATION: {
    label: 'SIMULATION',
    text: 'text-teal-800',
    border: 'border-teal-300',
    bg: 'bg-teal-50/80',
    dot: 'bg-teal-500',
  },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'sm' }) => {
  const cfg = statusStyles[status] || statusStyles.PROTOTYPE;

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono tracking-wider font-semibold uppercase border ${cfg.border} ${cfg.bg} ${cfg.text} ${
        size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
      } rounded-sm`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      <span>{cfg.label}</span>
    </span>
  );
};
