'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Droplets,
  Flower2,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Trees,
  X,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ShaderHero from './ShaderHero';
import LiquidMetalLogo from './LiquidMetalLogo';

const MIN_PLOT_AREA = 3000;
const PROJECT_RATE = 750;
const minimumPlotCost = MIN_PLOT_AREA * PROJECT_RATE;

const whatsappUrl = `https://wa.me/919699657121?text=${encodeURIComponent(
  "Hello Om Sai Developers, I'd like to know more about the 10-acre township plots at Nargoli, Dapoli.",
)}`;

const projectStats = [
  { value: '10', label: 'Acre township project' },
  { value: '3,000', label: 'Sq. ft. minimum plot' },
  { value: '₹750', label: 'Rate per sq. ft.' },
  { value: '210/230 km', label: 'From Pune/Mumbai' },
];

const projectDetails: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: MapPin,
    title: 'Nargoli, Dapoli',
    copy: 'A plotted township address in Dapoli, Maharashtra.',
  },
  {
    icon: ChevronRight,
    title: 'Pune and Mumbai access',
    copy: '210 km from Pune and 230 km from Mumbai for planned site visits.',
  },
  {
    icon: ShieldCheck,
    title: 'Demarcated plots',
    copy: 'Each plot is planned with clear demarcation for easier selection and handover.',
  },
  {
    icon: MessageCircle,
    title: 'Direct site assistance',
    copy: 'Call 9699657121 or 8483857121 for availability, pricing and visit coordination.',
  },
];

const highlights: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: MapPin,
    title: '10-acre layout',
    copy: 'A township-scale plotted development with internal movement planned through the site.',
  },
  {
    icon: ShieldCheck,
    title: 'Minimum 3,000 sq. ft.',
    copy: 'A clear starting plot size for buyers comparing land options around Dapoli.',
  },
  {
    icon: Zap,
    title: 'Essential utilities',
    copy: 'Electricity and water connection are part of the project amenity promise.',
  },
  {
    icon: Trees,
    title: 'Green setting',
    copy: 'Garden space and tree plantation support a calmer township environment.',
  },
];

const amenities: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: MapPin, title: 'Internal roads', copy: 'Planned internal access across the plotted layout.' },
  { icon: Sparkles, title: 'Street lights', copy: 'Street lighting for safer evening movement.' },
  { icon: Zap, title: 'Electricity', copy: 'Electricity provision included in the project scope.' },
  { icon: Droplets, title: 'Water connection', copy: 'Water connection planned for the township plots.' },
  { icon: Flower2, title: 'Garden', copy: 'Shared garden area for open-air recreation.' },
  { icon: Droplets, title: 'Swimming pool', copy: 'Pool amenity planned for residents and guests.' },
  { icon: ShieldCheck, title: 'Club house', copy: 'Club house space for community use.' },
  { icon: MapPin, title: 'Demarcated plots', copy: 'Clearly marked plot boundaries for buyer clarity.' },
  { icon: Trees, title: 'Tree plantation', copy: 'Tree plantation across the township landscape.' },
];

const connectivity = [
  ['210 km', 'From Pune to Nargoli, Dapoli'],
  ['230 km', 'From Mumbai to Nargoli, Dapoli'],
  ['Nargoli', 'Township location in Dapoli'],
  ['Site visit', 'Call the team for current availability and route guidance'],
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="section-kicker mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-[#b58a53]" />
      {children}
    </p>
  );
}

function LeadForm({ compact = false, onSuccess }: { compact?: boolean; onSuccess?: () => void }) {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSuccess?.();
  };

  return (
    <form onSubmit={submit} className={compact ? 'flex flex-col gap-3 lg:flex-row' : 'space-y-4'}>
      <input required name="name" placeholder="Your name" className="field" />
      <input required name="phone" type="tel" placeholder="WhatsApp number" className="field" />
      {compact && (
        <select required name="size" defaultValue="" className="field">
          <option value="" disabled>
            Preferred plot size
          </option>
          <option>Minimum 3,000 sq. ft.</option>
          <option>3,000 - 5,000 sq. ft.</option>
          <option>5,000+ sq. ft.</option>
        </select>
      )}
      {!compact && (
        <>
          <input name="email" type="email" placeholder="Email address" className="field" />
          <select name="horizon" defaultValue="Immediate" className="field">
            <option>Immediate</option>
            <option>Within 3 months</option>
            <option>Just exploring</option>
          </select>
          <input name="visitDate" type="date" className="field" />
        </>
      )}
      <button className={compact ? 'button-primary whitespace-nowrap' : 'button-primary w-full'} type="submit">
        {compact ? 'Get project details' : 'Request a site visit'} <ArrowUpRight size={16} />
      </button>
    </form>
  );
}

export default function NargoliTownshipLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [area, setArea] = useState(MIN_PLOT_AREA);
  const plotCost = area * PROJECT_RATE;

  return (
    <main className="overflow-hidden bg-[#FAF7F2] text-[#16352a]">
      <header className="glass-panel fixed inset-x-0 top-0 z-40 border-b border-white/15 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold">
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-[#D97757] text-[#FAF7F2]">
              <LiquidMetalLogo />
              <Leaf className="relative z-10" size={18} />
            </span>
            <span>
              Om Sai Developers
              <em className="block text-[10px] font-normal text-[#d8e5d4]">
                NARGOLI, DAPOLI TOWNSHIP
              </em>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-semibold text-[#e6efe7] lg:flex">
            <a href="#highlights">Highlights</a>
            <a href="#amenities">Amenities</a>
            <a href="#master-plan">Blueprint</a>
            <a href="#location">Location</a>
            <a href="#calculator">Calculator</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setVisitModalOpen(true)} className="button-light hidden sm:flex">
              Book site visit <ArrowUpRight size={15} />
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation" className="lg:hidden">
              <Menu size={22} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="space-y-4 border-t border-white/10 px-5 py-5 text-sm lg:hidden">
            <a onClick={() => setMenuOpen(false)} href="#highlights" className="block">
              Highlights
            </a>
            <a onClick={() => setMenuOpen(false)} href="#amenities" className="block">
              Amenities
            </a>
            <a onClick={() => setMenuOpen(false)} href="#master-plan" className="block">
              Blueprint
            </a>
            <a onClick={() => setMenuOpen(false)} href="#location" className="block">
              Location
            </a>
            <a onClick={() => setMenuOpen(false)} href="#calculator" className="block">
              Calculator
            </a>
            <a onClick={() => setMenuOpen(false)} href="#contact" className="block">
              Contact
            </a>
          </nav>
        )}
      </header>

      <section
        id="top"
        className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-[#1b4332] pb-10 pt-36 text-white lg:min-h-[810px] lg:pb-16"
      >
        <ShaderHero />
        <div className="hero-shade absolute inset-0 -z-10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#1b4332]/80 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase text-[#f4bd9e]">
                <MapPin size={14} /> Nargoli, Dapoli
              </p>
              <h1 className="max-w-4xl font-serif text-5xl leading-[.98] md:text-7xl lg:text-[5.4rem]">
                10-acre township plots in <span className="text-[#f4bd9e]">Dapoli.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#e7eee8] md:text-lg">
                Own a demarcated plot from 3,000 sq. ft. at ₹750 / sq. ft. in Nargoli, Dapoli, with
                internal roads, utilities, garden, swimming pool and club house amenities planned for the township.
              </p>
              <div className="builder-proof mt-7">
                <span>
                  <strong>10 acres</strong> township project
                </span>
                <span>
                  <strong>3,000 sq. ft.</strong> minimum plot
                </span>
                <span>
                  <strong>₹750</strong> per sq. ft.
                </span>
                <span>
                  <strong>210 | 230 km</strong> from Pune | Mumbai
                </span>
              </div>
            </motion.div>
            <div className="glass-panel mt-9 max-w-5xl p-4 md:p-5">
              <p className="mb-3 text-xs font-bold uppercase text-[#f4bd9e]">
                Get the Nargoli plot details
              </p>
              <LeadForm compact onSuccess={() => setVisitModalOpen(true)} />
              <p className="mt-3 text-xs text-[#d5e2d6]">
                Call 9699657121 or 8483857121 for availability and a site visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d8ce] bg-[#f0ede5]">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#d9d8ce] px-5 py-1 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 lg:px-8">
          {projectStats.map(({ value, label }) => (
            <div key={label} className="flex items-center gap-4 py-5 md:px-6 first:md:pl-0">
              <span className="font-serif text-3xl text-[#D97757]">{value}</span>
              <span className="text-xs font-semibold uppercase leading-5 text-[#496052]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="builder-details border-b border-[#d9d8ce] bg-[#FAF7F2] py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <SectionLabel>Project snapshot</SectionLabel>
              <h2 className="heading text-4xl md:text-5xl">
                Known facts, <span>clearly stated.</span>
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {projectDetails.map(({ icon: Icon, title, copy }) => (
                <div key={title}>
                  <Icon className="mb-3 text-[#D97757]" size={22} />
                  <h3 className="font-bold text-[#16352a]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#405247]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="section-space">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>Why Nargoli township</SectionLabel>
              <h2 className="heading">
                A practical plot address <span>near Dapoli.</span>
              </h2>
              <p className="body-copy mt-5">
                A focused plotted township with a clear rate, clear minimum plot size and a usable amenity plan.
              </p>
              <a href="#master-plan" className="button-outline mt-8">
                Explore the blueprint <ChevronRight size={16} />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="highlight-card p-7">
                  <Icon size={24} strokeWidth={1.5} className="mb-8 text-[#D97757]" />
                  <h3 className="text-lg font-bold text-[#16352a]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#405247]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="amenities" className="bg-[#213c38] py-20 text-[#FAF7F2] lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Amenities</SectionLabel>
            <h2 className="heading text-[#FAF7F2]">
              Township comforts, <span>on the checklist.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="amenity-card">
                <Icon size={22} className="mb-8 text-[#d9b77f]" />
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d6dfd9]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="master-plan" className="section-space">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>HD plot blueprint</SectionLabel>
              <h2 className="heading">
                Inspect the layout <span>before you visit.</span>
              </h2>
              <p className="body-copy mt-4">
                The plot-area diagram shows the proposed subdivision, internal roads, amenity spaces and area
                calculations for the Nargoli, Dapoli township.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/plot-blueprint-hd.jpg" target="_blank" rel="noreferrer" className="button-outline">
                Open HD plan <ArrowUpRight size={16} />
              </a>
              <a href="/plot-blueprint-hd.jpg" download className="button-primary">
                Download blueprint <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.45fr_.55fr]">
            <div className="plot-panel overflow-hidden p-3 md:p-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#cad3c9] bg-white">
                <Image
                  src="/plot-blueprint-preview.jpg"
                  alt="HD plot blueprint for the 10-acre township at Nargoli, Dapoli"
                  fill
                  sizes="(min-width: 1280px) 850px, (min-width: 1024px) 65vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="luxury-card flex flex-col justify-between p-7">
              <div>
                <MapPin className="text-[#b58a53]" size={24} />
                <h3 className="mt-10 text-xl font-bold">Project details</h3>
                <div className="mt-5 space-y-4 text-sm text-[#526267]">
                  <p>
                    <strong className="block text-[#16352a]">Location</strong>
                    Nargoli, Dapoli
                  </p>
                  <p>
                    <strong className="block text-[#16352a]">Plot size</strong>
                    Minimum 3,000 sq. ft.
                  </p>
                  <p>
                    <strong className="block text-[#16352a]">Rate</strong>
                    ₹750 / sq. ft.
                  </p>
                  <p>
                    <strong className="block text-[#16352a]">Connectivity</strong>
                    210 km from Pune | 230 km from Mumbai
                  </p>
                </div>
              </div>
              <button onClick={() => setVisitModalOpen(true)} className="button-primary mt-8 w-full">
                Ask about availability <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9d8ce] bg-[#f0ede5] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel>Ways to plan</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="config-card flex flex-col justify-between bg-[#fbfaf6]">
              <div>
                <span className="text-xs font-bold uppercase text-[#b58a53]">Option A</span>
                <h2 className="section-title mt-5 text-4xl">Choose your plot</h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-[#526267]">
                  Start with a demarcated plot of at least 3,000 sq. ft. and review its position against the
                  blueprint.
                </p>
              </div>
              <a href="#contact" className="mt-12 flex items-center gap-2 text-sm font-bold text-[#213c38]">
                Check availability <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="config-card flex flex-col justify-between border-[#9e743f] bg-[#b58a53] text-[#fffdf8]">
              <div>
                <span className="text-xs font-bold uppercase text-[#fff0d2]">Option B</span>
                <h2 className="section-title mt-5 text-4xl">Plan a Dapoli retreat</h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-[#fff8eb]">
                  Use the township amenities, green spaces and access roads as the base for a future second-home
                  plan.
                </p>
              </div>
              <a href="#contact" className="mt-12 flex items-center gap-2 text-sm font-bold">
                Talk to our team <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="section-space">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <SectionLabel>Connectivity</SectionLabel>
              <h2 className="heading">
                Nargoli, Dapoli. <span>Connected for site visits.</span>
              </h2>
              <p className="body-copy mt-5">
                The township is positioned in Nargoli, Dapoli, with planning distances of 210 km from Pune and
                230 km from Mumbai.
              </p>
              <div className="mt-8 space-y-5">
                {connectivity.map(([time, place]) => (
                  <div key={place} className="flex gap-5 border-b border-[#dedfd5] pb-4">
                    <span className="w-24 shrink-0 text-sm font-bold text-[#D97757]">{time}</span>
                    <span className="text-sm text-[#536358]">{place}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-h-[420px] overflow-hidden border border-[#cad3c9] bg-[#dfe7db] p-5">
              <div className="relative h-full min-h-[370px] overflow-hidden bg-[#d1e0d1] bg-[linear-gradient(28deg,transparent_49%,#aec5ad_50%,transparent_51%),linear-gradient(110deg,transparent_49%,#b5cbb3_50%,transparent_51%)]">
                <div className="absolute left-[12%] top-[28%] h-20 w-20 rounded-full border border-[#91ae91]" />
                <div className="absolute right-[14%] bottom-[18%] h-36 w-36 rounded-full border border-[#91ae91]" />
                <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-[#FAF7F2] bg-[#D97757] p-4 text-center text-xs font-bold text-white shadow-xl">
                  <MapPin size={18} className="mx-auto mb-1" />
                  Nargoli
                  <br />
                  Dapoli
                </div>
                <div className="absolute left-5 top-5 bg-[#FAF7F2]/90 px-3 py-2 text-xs font-bold text-[#1b4332]">
                  Pune 210 km
                </div>
                <div className="absolute bottom-5 right-5 bg-[#FAF7F2]/90 px-3 py-2 text-xs font-bold text-[#1b4332]">
                  Mumbai 230 km
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="bg-[#173d30] py-20 text-[#FAF7F2] lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <SectionLabel>Price calculator</SectionLabel>
              <h2 className="heading text-[#FAF7F2]">
                Work from the <span>real rate.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-[#c8d8ca]">
                Estimate land value using ₹750 / sq. ft. Registration, taxes, development charges and availability
                can affect the final amount.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-6 border border-white/15 p-7 md:col-span-2">
                <label className="flex justify-between gap-4 text-sm">
                  <span>Plot area</span>
                  <strong className="text-[#f4bd9e]">{area.toLocaleString('en-IN')} sq. ft.</strong>
                </label>
                <input
                  type="range"
                  min={MIN_PLOT_AREA}
                  max="10000"
                  step="500"
                  value={area}
                  onChange={(event) => setArea(Number(event.target.value))}
                />
              </div>
              <div className="border border-white/15 bg-white/5 p-7">
                <p className="text-xs uppercase text-[#c8d8ca]">Estimated land cost</p>
                <p className="mt-5 font-serif text-4xl text-[#f4bd9e]">₹{plotCost.toLocaleString('en-IN')}</p>
              </div>
              <div className="border border-white/15 bg-white/5 p-7">
                <p className="text-xs uppercase text-[#c8d8ca]">Minimum plot reference</p>
                <p className="mt-5 font-serif text-4xl text-[#f4bd9e]">
                  ₹{minimumPlotCost.toLocaleString('en-IN')}
                </p>
                <p className="mt-5 border-t border-white/15 pt-4 text-xs text-[#c8d8ca]">
                  Based on 3,000 sq. ft. at ₹750 / sq. ft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-space">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <SectionLabel>Visit the site</SectionLabel>
            <h2 className="heading">
              Walk the land, <span>then decide.</span>
            </h2>
            <p className="body-copy mt-5">
              Compare the blueprint with the actual site, review available plots and confirm the current project
              details directly with the team.
            </p>
            <div className="mt-8 flex items-start gap-3 text-sm text-[#536358]">
              <CalendarDays size={18} className="mt-0.5 text-[#D97757]" />
              <span>
                Nargoli, Dapoli,
                <br />
                District Ratnagiri, Maharashtra
              </span>
            </div>
          </div>
          <div className="border border-[#d9d8ce] bg-[#f0ede5] p-7 md:p-10">
            <h3 className="text-xl font-bold">Tell us how we can help</h3>
            <p className="mb-7 mt-2 text-sm text-[#68766b]">A member of our team will get back to you shortly.</p>
            <LeadForm />
          </div>
        </div>
      </section>

      <footer className="bg-[#102e24] py-12 text-[#b7cbbb]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row">
            <div>
              <div className="flex items-center gap-3 text-white">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#D97757]">
                  <Leaf size={18} />
                </span>
                <strong>Om Sai Developers</strong>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-6">
                10-acre township plots in Nargoli, Dapoli, from 3,000 sq. ft. at ₹750 / sq. ft.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs">
              <a href="#top">Back to top</a>
              <a href="#contact">Request details</a>
              <a href="/plot-blueprint-hd.jpg" target="_blank" rel="noreferrer">
                Open blueprint
              </a>
              <a href={whatsappUrl}>WhatsApp us</a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-6 text-xs md:flex-row">
            <p>Rates, distances, approvals and availability are subject to final confirmation.</p>
            <p>© 2026 Om Sai Developers. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle size={25} />
      </a>

      {visitModalOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#102e24]/70 p-5 backdrop-blur-sm"
          onClick={() => setVisitModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-[#FAF7F2] p-7 text-[#16352a] shadow-2xl md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={() => setVisitModalOpen(false)}
              className="absolute right-5 top-5 text-[#536358]"
            >
              <X size={20} />
            </button>
            <SectionLabel>Book a site visit</SectionLabel>
            <h2 className="heading text-4xl">See Nargoli in person.</h2>
            <p className="body-copy mt-4">
              Share your details and we&apos;ll call back with route support and current plot availability.
            </p>
            <div className="mt-7">
              <LeadForm onSuccess={() => setVisitModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
