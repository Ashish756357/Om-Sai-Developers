'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardList,
  ExternalLink,
  HardHat,
  Mail,
  MapPin,
  Phone,
  Save,
  Trash2,
  Users,
} from 'lucide-react';
import {
  defaultProjectSettings,
  LEADS_STORAGE_KEY,
  PROJECT_STORAGE_KEY,
  readLeads,
  type Lead,
  type LeadStatus,
  type ProjectSettings,
} from '@/lib/admin-data';

const leadStatuses: LeadStatus[] = ['New', 'Contacted', 'Site visit booked', 'Closed'];

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium' }).format(new Date(value));
}

export default function AdminPanel() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [settings, setSettings] = useState<ProjectSettings>(defaultProjectSettings);
  const [activeView, setActiveView] = useState<'overview' | 'leads' | 'project'>('overview');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const storedSettings = window.localStorage.getItem(PROJECT_STORAGE_KEY);
        setSettings(storedSettings ? { ...defaultProjectSettings, ...JSON.parse(storedSettings) } : defaultProjectSettings);
      } catch {
        setSettings(defaultProjectSettings);
      }
      setLeads(readLeads());
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const updateLeadStatus = (id: string, status: LeadStatus) => {
    const nextLeads = leads.map((lead) => (lead.id === id ? { ...lead, status } : lead));
    setLeads(nextLeads);
    window.localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(nextLeads));
  };

  const removeLead = (id: string) => {
    const nextLeads = leads.filter((lead) => lead.id !== id);
    setLeads(nextLeads);
    window.localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(nextLeads));
  };

  const saveSettings = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(settings));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  const newLeads = leads.filter((lead) => lead.status === 'New').length;
  const visits = leads.filter((lead) => lead.status === 'Site visit booked').length;

  return (
    <main className="min-h-screen bg-[#f4f1e9] text-[#17352c]">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col bg-[#17352c] px-6 py-7 text-[#eef3e8] lg:flex">
        <Link href="/" className="flex items-center gap-3 border-b border-white/10 pb-7">
          <span className="flex h-10 w-10 items-center justify-center bg-[#d79b67] text-lg font-bold text-[#17352c]">OS</span>
          <span className="text-sm font-bold tracking-wide">OM SAI <span className="block text-xs font-normal text-[#b9cbb7]">ADMIN DESK</span></span>
        </Link>
        <nav className="mt-9 space-y-2" aria-label="Admin navigation">
          <button onClick={() => setActiveView('overview')} className={`admin-nav-item ${activeView === 'overview' ? 'admin-nav-active' : ''}`}><ClipboardList size={17} /> Overview</button>
          <button onClick={() => setActiveView('leads')} className={`admin-nav-item ${activeView === 'leads' ? 'admin-nav-active' : ''}`}><Users size={17} /> Enquiries <span className="ml-auto rounded-full bg-[#d79b67] px-2 py-0.5 text-[10px] text-[#17352c]">{newLeads}</span></button>
          <button onClick={() => setActiveView('project')} className={`admin-nav-item ${activeView === 'project' ? 'admin-nav-active' : ''}`}><HardHat size={17} /> Project details</button>
        </nav>
        <Link href="/" className="mt-auto flex items-center gap-2 text-xs text-[#b9cbb7] transition hover:text-white"><ArrowLeft size={15} /> View public website</Link>
      </aside>

      <div className="lg:pl-64">
        <header className="flex items-center justify-between border-b border-[#d9d8ce] bg-[#faf8f3] px-5 py-5 md:px-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#bd8058]">Operations / Nargoli Township</p>
            <h1 className="mt-1 font-serif text-3xl text-[#17352c]">{activeView === 'overview' ? 'Good morning, admin.' : activeView === 'leads' ? 'Enquiry inbox' : 'Project details'}</h1>
          </div>
          <Link href="/" className="button-outline hidden items-center gap-2 md:inline-flex"><ExternalLink size={15} /> Public site</Link>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-7 md:px-10 md:py-10">
          {activeView === 'overview' && (
            <>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <MetricCard icon={Users} label="Total enquiries" value={leads.length} detail={`${newLeads} need attention`} />
                <MetricCard icon={CalendarDays} label="Site visits booked" value={visits} detail="Across all enquiries" />
                <MetricCard icon={CircleDollarSign} label="Current rate" value={`₹${settings.rate.toLocaleString('en-IN')}`} detail="Per sq. ft." />
                <MetricCard icon={MapPin} label="Plots available" value={settings.availablePlots} detail={`Minimum ${settings.minimumPlotArea.toLocaleString('en-IN')} sq. ft.`} />
              </div>
              <div className="mt-8 grid gap-7 xl:grid-cols-[1.4fr_.8fr]">
                <section className="admin-panel">
                  <div className="flex items-center justify-between border-b border-[#e4e1d9] pb-5"><div><p className="admin-eyebrow">Latest activity</p><h2 className="admin-heading">Recent enquiries</h2></div><button onClick={() => setActiveView('leads')} className="text-xs font-bold text-[#bd8058]">View all</button></div>
                  <LeadTable leads={leads.slice(0, 4)} onStatusChange={updateLeadStatus} onRemove={removeLead} />
                </section>
                <section className="admin-panel">
                  <p className="admin-eyebrow">Live on public site</p><h2 className="admin-heading">Project pulse</h2>
                  <div className="mt-6 flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-[#5d9b69]" /><span className="text-sm font-bold">{settings.status}</span></div>
                  <p className="mt-5 text-sm leading-6 text-[#617069]">{settings.announcement}</p>
                  <div className="mt-6 border-t border-[#e4e1d9] pt-5"><p className="text-xs font-bold uppercase tracking-[.12em] text-[#89958b]">Next milestone</p><p className="mt-2 font-bold">{settings.nextMilestone}</p><p className="mt-1 text-sm text-[#617069]">Target: {formatDate(settings.milestoneDate)}</p></div>
                  <button onClick={() => setActiveView('project')} className="button-primary mt-7 w-full"><HardHat size={15} /> Edit project details</button>
                </section>
              </div>
            </>
          )}

          {activeView === 'leads' && (
            <section className="admin-panel">
              <div className="flex flex-col justify-between gap-3 border-b border-[#e4e1d9] pb-5 md:flex-row md:items-end"><div><p className="admin-eyebrow">Lead management</p><h2 className="admin-heading">All form submissions</h2></div><p className="text-sm text-[#617069]">{leads.length} total records</p></div>
              <LeadTable leads={leads} onStatusChange={updateLeadStatus} onRemove={removeLead} emptyMessage="No enquiries yet. New submissions will appear here." />
            </section>
          )}

          {activeView === 'project' && (
            <form onSubmit={saveSettings} className="admin-panel max-w-4xl">
              <div className="border-b border-[#e4e1d9] pb-5"><p className="admin-eyebrow">Public website controls</p><h2 className="admin-heading">Update ongoing project</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[#617069]">Changes are reflected in the public site in this browser as soon as it is refreshed.</p></div>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <AdminField label="Project status"><select className="admin-input" value={settings.status} onChange={(event) => setSettings({ ...settings, status: event.target.value as ProjectSettings['status'] })}><option>Booking open</option><option>On track</option><option>In progress</option><option>Paused</option></select></AdminField>
                <AdminField label="Rate per sq. ft."><input className="admin-input" type="number" min="0" value={settings.rate} onChange={(event) => setSettings({ ...settings, rate: Number(event.target.value) })} /></AdminField>
                <AdminField label="Minimum plot area"><input className="admin-input" type="number" min="0" value={settings.minimumPlotArea} onChange={(event) => setSettings({ ...settings, minimumPlotArea: Number(event.target.value) })} /></AdminField>
                <AdminField label="Available plots"><input className="admin-input" type="number" min="0" value={settings.availablePlots} onChange={(event) => setSettings({ ...settings, availablePlots: Number(event.target.value) })} /></AdminField>
                <AdminField label="Next milestone"><input className="admin-input" value={settings.nextMilestone} onChange={(event) => setSettings({ ...settings, nextMilestone: event.target.value })} /></AdminField>
                <AdminField label="Target date"><input className="admin-input" type="date" value={settings.milestoneDate} onChange={(event) => setSettings({ ...settings, milestoneDate: event.target.value })} /></AdminField>
                <div className="md:col-span-2"><AdminField label="Public announcement"><textarea className="admin-input min-h-28 resize-y" maxLength={180} value={settings.announcement} onChange={(event) => setSettings({ ...settings, announcement: event.target.value })} /></AdminField></div>
              </div>
              <div className="mt-8 flex items-center gap-4"><button type="submit" className="button-primary"><Save size={15} /> Save project details</button>{saved && <span className="flex items-center gap-1 text-sm font-bold text-[#5d8062]"><Check size={16} /> Saved</span>}</div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

function MetricCard({ icon: Icon, label, value, detail }: { icon: typeof Users; label: string; value: string | number; detail: string }) {
  return <div className="admin-panel"><Icon size={19} className="text-[#bd8058]" /><p className="mt-5 text-xs font-bold uppercase tracking-[.1em] text-[#89958b]">{label}</p><p className="mt-2 font-serif text-3xl text-[#17352c]">{value}</p><p className="mt-1 text-xs text-[#617069]">{detail}</p></div>;
}

function AdminField({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-sm font-bold text-[#334e42]"><span className="mb-2 block text-xs uppercase tracking-[.08em] text-[#89958b]">{label}</span>{children}</label>;
}

function LeadTable({ leads, onStatusChange, onRemove, emptyMessage = 'No recent submissions.' }: { leads: Lead[]; onStatusChange: (id: string, status: LeadStatus) => void; onRemove: (id: string) => void; emptyMessage?: string }) {
  if (!leads.length) return <p className="py-12 text-center text-sm text-[#617069]">{emptyMessage}</p>;

  return <div className="mt-2 divide-y divide-[#e4e1d9]">{leads.map((lead) => <article key={lead.id} className="flex flex-col gap-4 py-5 xl:flex-row xl:items-center xl:justify-between"><div className="min-w-0"><div className="flex flex-wrap items-center gap-3"><h3 className="font-bold text-[#17352c]">{lead.name}</h3><span className={`lead-status lead-status-${lead.status.toLowerCase().replaceAll(' ', '-')}`}>{lead.status}</span></div><div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#617069]"><a href={`tel:${lead.phone}`} className="flex items-center gap-1.5 hover:text-[#bd8058]"><Phone size={13} /> {lead.phone}</a>{lead.email && <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 hover:text-[#bd8058]"><Mail size={13} /> {lead.email}</a>}<span className="flex items-center gap-1.5"><CalendarDays size={13} /> {formatDate(lead.createdAt)}</span></div><p className="mt-3 text-xs text-[#52685b]">{lead.size || 'Plot size not specified'}{lead.horizon && ` · ${lead.horizon}`}{lead.visitDate && ` · Visit requested ${lead.visitDate}`}</p></div><div className="flex shrink-0 items-center gap-2"><label className="sr-only" htmlFor={`status-${lead.id}`}>Update status for {lead.name}</label><div className="relative"><select id={`status-${lead.id}`} value={lead.status} onChange={(event) => onStatusChange(lead.id, event.target.value as LeadStatus)} className="admin-select"><option disabled>Change status</option>{leadStatuses.map((status) => <option key={status}>{status}</option>)}</select><ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#617069]" /></div><button type="button" onClick={() => onRemove(lead.id)} aria-label={`Delete enquiry from ${lead.name}`} className="icon-action"><Trash2 size={15} /></button></div></article>)}</div>;
}
