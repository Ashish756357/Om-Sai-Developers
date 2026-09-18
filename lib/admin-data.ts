export type LeadStatus = 'New' | 'Contacted' | 'Site visit booked' | 'Closed';

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  size: string;
  horizon: string;
  visitDate: string;
  createdAt: string;
  status: LeadStatus;
};

export type ProjectSettings = {
  status: 'On track' | 'In progress' | 'Booking open' | 'Paused';
  rate: number;
  minimumPlotArea: number;
  availablePlots: number;
  nextMilestone: string;
  milestoneDate: string;
  announcement: string;
};

export const defaultProjectSettings: ProjectSettings = {
  status: 'Booking open',
  rate: 750,
  minimumPlotArea: 3000,
  availablePlots: 42,
  nextMilestone: 'Internal road surfacing',
  milestoneDate: '2026-10-15',
  announcement: 'Site visits are open. Call the team for current plot availability.',
};

export const LEADS_STORAGE_KEY = 'om-sai-leads';
export const PROJECT_STORAGE_KEY = 'om-sai-project-settings';

export function readProjectSettings(): ProjectSettings {
  if (typeof window === 'undefined') return defaultProjectSettings;

  try {
    const stored = window.localStorage.getItem(PROJECT_STORAGE_KEY);
    return stored ? { ...defaultProjectSettings, ...JSON.parse(stored) } : defaultProjectSettings;
  } catch {
    return defaultProjectSettings;
  }
}

export function readLeads(): Lead[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = window.localStorage.getItem(LEADS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveLead(lead: Lead) {
  const leads = readLeads();
  window.localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify([lead, ...leads]));
}
