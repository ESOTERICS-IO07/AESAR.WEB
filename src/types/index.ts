export type ProjectStatus = 'BUILT' | 'PROTOTYPE' | 'INTEGRATING' | 'RESEARCH' | 'FUTURE' | 'SIMULATION';

export interface HardwareComponent {
  id: string;
  name: string;
  category: 'Compute' | 'Power & Drive' | 'Perception' | 'Sensors';
  status: ProjectStatus;
  specs: string;
  role: string;
  interface: string;
  notes: string;
}

export interface ModelCard {
  id: string;
  name: string;
  status: ProjectStatus;
  input: string;
  output: string;
  technology: string;
  researchDirection: string;
  metricsNote: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  authors: string[];
  status: 'In Preparation' | 'Planned' | 'Field Trial Phase' | 'Preprint Expected';
  expectedDate: string;
  abstract: string;
  targetVenue: string;
  type: 'Paper' | 'Experiment' | 'Dataset' | 'Model' | 'Documentation';
}

export interface EngineeringArticle {
  id: string;
  title: string;
  status: 'Drafting' | 'Outline Complete' | 'Coming Soon';
  category: string;
  estimatedReadTime: string;
  summary: string;
  topics: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  contributions: string[];
}
