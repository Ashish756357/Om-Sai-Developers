'use client';

import { FormEvent, useState } from 'react';
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
  Mountain,
  ShieldCheck,
  Sparkles,
  Trees,
  X,
  Zap,
} from 'lucide-react';
import ShaderHero from './ShaderHero';
import LiquidMetalLogo from './LiquidMetalLogo';

type PlotStatus = 'Available' | 'Booked' | 'Sold';
type Plot = { id: number; status: PlotStatus; size: string; orientation: string };

const plots: Plot[] = [
  { id: 1, status: 'Available', size: '1,800 sq. ft.', orientation: 'East-facing' },
  { id: 2, status: 'Available', size: '2,500 sq. ft.', orientation: 'North-east corner' },
  { id: 3, status: 'Booked', size: '1,800 sq. ft.', orientation: 'West-facing' },
  { id: 4, status: 'Sold', size: '3,000 sq. ft.', orientation: 'South-facing' },
  { id: 5, status: 'Available', size: '2,100 sq. ft.', orientation: 'Garden-facing' },
  { id: 6, status: 'Available', size: '2,500 sq. ft.', orientation: 'East-facing' },
  { id: 7, status: 'Booked', size: '1,800 sq. ft.', orientation: 'North-facing' },
  { id: 8, status: 'Available', size: '3,200 sq. ft.', orientation: 'Hill-facing' },
  { id: 9, status: 'Sold', size: '2,500 sq. ft.', orientation: 'West-facing' },
  { id: 10, status: 'Available', size: '1,500 sq. ft.', orientation: 'East-facing' },
  { id: 11, status: 'Available', size: '4,000 sq. ft.', orientation: 'Valley-facing' },
  { id: 12, status: 'Booked', size: '2,100 sq. ft.', orientation: 'South-east corner' },
];

const whatsappUrl = `https://wa.me/919699657121?text=${encodeURIComponent("Hello Om Sai Developers, I'd like to know more about bungalow plots at Village Gundhle, Boisar East.")}`;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-kicker mb-4 flex items-center gap-3"><span className="h-px w-8 bg-[#b58a53]" />{children}</p>;
}

function LeadForm({ compact = false, onSuccess }: { compact?: boolean; onSuccess?: () => void }) {
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); onSuccess?.(); };
  return (
    <form onSubmit={submit} className={compact ? 'flex flex-col gap-3 lg:flex-row' : 'space-y-4'}>
      <input required name="name" placeholder="Your name" className="field" />
      <input required name="phone" type="tel" placeholder="WhatsApp number" className="field" />
      {compact && <select required name="size" defaultValue="" className="field"><option value="" disabled>Preferred plot size</option><option>2,000 - 3,000 sq. ft.</option><option>3,000 - 5,000 sq. ft.</option><option>5,000+ sq. ft.</option></select>}
      {!compact && <><input name="email" type="email" placeholder="Email address" className="field" /><select name="horizon" defaultValue="Immediate" className="field"><option>Immediate</option><option>Within 3 months</option><option>Just exploring</option></select><input name="visitDate" type="date" className="field" /></>}
      <button className={compact ? 'button-primary whitespace-nowrap' : 'button-primary w-full'} type="submit">{compact ? 'Get the brochure' : 'Request a site visit'} <ArrowUpRight size={16} /></button>
    </form>
  );
}

export default function SerenePalmsLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<'visit' | 'plot' | null>(null);
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
  const [area, setArea] = useState(2500);
  const [appreciation, setAppreciation] = useState(12);
  const [nightly, setNightly] = useState(6500);

  const openPlot = (plot: Plot) => { if (plot.status === 'Available') { setSelectedPlot(plot); setModal('plot'); } };
  const fiveYearValue = Math.round(area * 1100 * (Math.pow(1 + appreciation / 100, 5) - 1));
  const monthlyYield = Math.round(nightly * 18);

  return (
    <main className="overflow-hidden bg-[#FAF7F2] text-[#16352a]">
      <header className="glass-panel fixed inset-x-0 top-0 z-40 border-b border-white/15 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-tight"><span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-[#D97757] text-[#FAF7F2]"><LiquidMetalLogo /><Leaf className="relative z-10" size={18} /></span><span>Om Sai Developers <em className="block text-[10px] font-normal tracking-[0.18em] text-[#d8e5d4]">BOISAR EAST BUNGALOW PLOTS</em></span></a>
          <nav className="hidden items-center gap-7 text-xs font-semibold text-[#e6efe7] lg:flex"><a href="#highlights">Highlights</a><a href="#amenities">Amenities</a><a href="#master-plan">Master plan</a><a href="#location">Location</a><a href="#calculator">ROI calculator</a><a href="#contact">Contact</a></nav>
          <div className="flex items-center gap-3"><button onClick={() => setModal('visit')} className="button-light hidden sm:flex">Book site visit <ArrowUpRight size={15} /></button><button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation" className="lg:hidden"><Menu size={22} /></button></div>
        </div>
        {menuOpen && <nav className="space-y-4 border-t border-white/10 px-5 py-5 text-sm lg:hidden"><a onClick={() => setMenuOpen(false)} href="#highlights" className="block">Highlights</a><a onClick={() => setMenuOpen(false)} href="#amenities" className="block">Amenities</a><a onClick={() => setMenuOpen(false)} href="#master-plan" className="block">Master plan</a><a onClick={() => setMenuOpen(false)} href="#location" className="block">Location</a><a onClick={() => setMenuOpen(false)} href="#calculator" className="block">ROI calculator</a><a onClick={() => setMenuOpen(false)} href="#contact" className="block">Contact</a></nav>}
      </header>

      <section id="top" className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-[#1b4332] pb-10 pt-36 text-white lg:min-h-[810px] lg:pb-16">
        <ShaderHero /><div className="hero-shade absolute inset-0 -z-10" /><div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#1b4332]/80 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8"><div className="max-w-4xl"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}><p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f4bd9e]"><MapPin size={14} /> Village Gundhle, Boisar East</p><h1 className="max-w-4xl font-serif text-5xl leading-[.98] tracking-[-.03em] md:text-7xl lg:text-[5.4rem]">Build your own <span className="text-[#f4bd9e]">bungalow.</span></h1><p className="mt-6 max-w-2xl text-base leading-7 text-[#e7eee8] md:text-lg">Secure your own bungalow plot from 2,000 sq. ft. at an incredible starting price of ₹1,500 per sq. ft. Set across 77 acres of green countryside, just 10–15 minutes from Boisar Station and 1.5 hours from Mumbai.</p><div className="builder-proof mt-7"><span><strong>77 acres</strong> of green bliss</span><span><strong>2,000+</strong> sq. ft. plots</span><span><strong>₹1,500</strong> per sq. ft.</span></div></motion.div>
          <div className="glass-panel mt-9 max-w-5xl p-4 md:p-5"><p className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-[#f4bd9e]">Get the Boisar East plot details</p><LeadForm compact onSuccess={() => setModal('visit')} /><p className="mt-3 text-xs text-[#d5e2d6]">Call 9699657121 or 8483857121 for availability and a site visit.</p></div>
        </div></div>
      </section>

      <section className="border-b border-[#d9d8ce] bg-[#f0ede5]"><div className="mx-auto grid max-w-7xl divide-y divide-[#d9d8ce] px-5 py-1 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 lg:px-8">{[['77', 'Acres of green countryside'], ['2,000+', 'Sq. ft. bungalow plots'], ['₹1,500', 'Starting price per sq. ft.'], ['Clear', 'Title with separate 7/12']].map(([big, text]) => <div key={text} className="flex items-center gap-4 py-5 md:px-6 first:md:pl-0"><span className="font-serif text-3xl text-[#D97757]">{big}</span><span className="text-xs font-semibold uppercase leading-5 tracking-[.08em] text-[#496052]">{text}</span></div>)}</div></section>

      <section className="builder-details border-b border-[#d9d8ce] bg-[#FAF7F2] py-14"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><SectionLabel>Why choose Om Sai</SectionLabel><h2 className="heading text-4xl md:text-5xl">A plot with <span>peace of mind.</span></h2></div><div className="grid gap-5 sm:grid-cols-2"><div><ShieldCheck className="mb-3 text-[#D97757]" size={22} /><h3 className="font-bold text-[#16352a]">Clear title, separate 7/12</h3><p className="mt-2 text-sm leading-6 text-[#405247]">Buy with clarity through clear title documentation and a separate 7/12 extract for your plot.</p></div><div><Trees className="mb-3 text-[#D97757]" size={22} /><h3 className="font-bold text-[#16352a]">77 acres of green bliss</h3><p className="mt-2 text-sm leading-6 text-[#405247]">Choose a 2,000 sq. ft. or larger bungalow plot in a verdant countryside setting.</p></div><div><MapPin className="mb-3 text-[#D97757]" size={22} /><h3 className="font-bold text-[#16352a]">Connected to Boisar</h3><p className="mt-2 text-sm leading-6 text-[#405247]">Village Gundhle, just 10–15 minutes from Boisar Station and around 1.5 hours from Mumbai.</p></div><div><MessageCircle className="mb-3 text-[#D97757]" size={22} /><h3 className="font-bold text-[#16352a]">Speak directly with our team</h3><p className="mt-2 text-sm leading-6 text-[#405247]">Call 9699657121 or 8483857121 for availability, pricing, and a site visit.</p></div></div></div></div></section>

      <section id="highlights" className="section-space"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionLabel>Why Serene Palms</SectionLabel><h2 className="heading">A slower way to <span>build wealth.</span></h2><p className="body-copy mt-5">A rare balance of clean paperwork, thoughtful infrastructure and the natural abundance of the Dapoli-Khed corridor.</p><a href="#master-plan" className="button-outline mt-8">Explore the master plan <ChevronRight size={16} /></a></div><div className="grid gap-3 sm:grid-cols-2">{[[ShieldCheck, 'Clear legal titles', 'Demarcated boundaries and transparent documentation for every plot.'], [Sparkles, '24/7 gated security', 'Boundary wall, guarded gate and CCTV coverage for peace of mind.'], [Zap, 'Plug-and-play infrastructure', 'Wide tar roads, underground electricity and independent water lines.'], [Mountain, 'High investment potential', 'Build an agro-tourism retreat, Airbnb or your own second home.']].map(([Icon, title, copy]) => <div key={title as string} className="highlight-card p-7"><Icon size={24} strokeWidth={1.5} className="mb-8 text-[#D97757]" /><h3 className="text-lg font-bold text-[#16352a]">{title as string}</h3><p className="mt-3 text-sm leading-6 text-[#405247]">{copy as string}</p></div>)}</div></div></div></section>

      <section id="amenities" className="bg-[#213c38] py-20 text-[#FAF7F2] lg:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-2xl"><SectionLabel>Amenities & infrastructure</SectionLabel><h2 className="heading text-[#FAF7F2]">Everything you need, <span>nothing you don&apos;t.</span></h2></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[[Trees, 'Recreation & wellness', 'Modern clubhouse, landscaped garden, yoga deck and a playful corner for little explorers.'], [Droplets, 'Sustainability', 'Rainwater harvesting, solar street lights, Alphonso mango, cashew and coconut plantation.'], [Zap, 'Utilities', 'Storm-water drainage, dedicated transformer and overhead storage tanks.'], [Flower2, 'Services', 'On-site caretaker, horticulture assistance and turnkey villa construction support.']].map(([Icon, title, copy]) => <div key={title as string} className="amenity-card"><Icon size={22} className="mb-8 text-[#d9b77f]" /><h3 className="text-lg font-bold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-[#d6dfd9]">{copy as string}</p></div>)}</div></div></section>

      <section id="master-plan" className="section-space"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionLabel>Master plan</SectionLabel><h2 className="heading">Find your <span>place here.</span></h2><p className="body-copy mt-4">Tap an available plot to see its details.</p></div><div className="flex gap-4 text-xs font-semibold text-[#66766a]"><span><i className="status-dot bg-[#508e60]" /> Available</span><span><i className="status-dot bg-[#d7a847]" /> Booked</span><span><i className="status-dot bg-[#ba5b4e]" /> Sold</span></div></div><div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_.6fr]"><div className="plot-panel relative overflow-hidden p-5 md:p-10"><div className="absolute inset-x-10 top-1/2 h-px bg-[#c2cdbf]" /><div className="absolute inset-y-10 left-1/2 w-px bg-[#c2cdbf]" /><div className="relative grid grid-cols-3 gap-3 md:gap-5">{plots.map((plot) => <button key={plot.id} onClick={() => openPlot(plot)} disabled={plot.status !== 'Available'} className={`plot plot-${plot.status.toLowerCase()}`}><span>Plot</span><strong>#{plot.id}</strong><small>{plot.size.replace(' sq. ft.', '')}</small></button>)}</div><div className="mt-8 flex items-center justify-center gap-3 text-xs text-[#617064]"><MapPin size={14} /> Internal avenue road <span className="mx-2 h-px w-12 bg-[#879888]" /> Main entry</div></div><div className="luxury-card p-7"><MapPin className="text-[#b58a53]" size={24} /><h3 className="mt-12 text-xl font-bold">A garden township on the hill.</h3><p className="mt-3 text-sm leading-6 text-[#526267]">Gentle contours, generous green pockets and clear east-west orientation make each address feel open and private.</p><button onClick={() => setModal('visit')} className="button-primary mt-8 w-full">Ask about availability <ArrowUpRight size={16} /></button></div></div></div></section>

      <section className="border-y border-[#d9d8ce] bg-[#f0ede5] py-20 md:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionLabel>Ways to build</SectionLabel><div className="grid gap-5 md:grid-cols-2"><div className="config-card flex flex-col justify-between bg-[#fbfaf6]"><div><span className="text-xs font-bold uppercase tracking-[.18em] text-[#b58a53]">Option A</span><h2 className="section-title mt-5 text-4xl">Bungalow plots</h2><p className="mt-4 max-w-md text-sm leading-6 text-[#526267]">Choose a clear-title plot from 2,000 sq. ft. onwards and create a home that feels entirely your own.</p></div><a href="#contact" className="mt-12 flex items-center gap-2 text-sm font-bold text-[#213c38]">Check availability <ArrowUpRight size={16} /></a></div><div className="config-card flex flex-col justify-between border-[#9e743f] bg-[#b58a53] text-[#fffdf8]"><div><span className="text-xs font-bold uppercase tracking-[.18em] text-[#fff0d2]">Option B</span><h2 className="section-title mt-5 text-4xl">Build your bungalow</h2><p className="mt-4 max-w-md text-sm leading-6 text-[#fff8eb]">Plan a private retreat in 77 acres of countryside, with direct support from the Om Sai Developers team.</p></div><a href="#contact" className="mt-12 flex items-center gap-2 text-sm font-bold">Talk to our team <ArrowUpRight size={16} /></a></div></div></div></section>

      <section id="location" className="section-space"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><SectionLabel>Strategic connectivity</SectionLabel><h2 className="heading">Close to the coast. <span>Connected to life.</span></h2><p className="body-copy mt-5">On SH-96, where the green hills of Dapoli meet the everyday conveniences you need.</p><div className="mt-8 space-y-5">{[['Direct access', 'Dapoli-Khed Road (SH-96)'], ['25-30 min', 'Khed Railway Station, direct trains to Mumbai, Pune and Goa'], ['4.5-5 hrs', 'Mumbai & Pune via NH-66'], ['25-40 min', 'Murud, Karde, Ladghar and Suvarnadurg Fort'], ['10-15 min', 'Dapoli town, hospitals, schools and markets']].map(([time, place]) => <div key={place} className="flex gap-5 border-b border-[#dedfd5] pb-4"><span className="w-24 shrink-0 text-sm font-bold text-[#D97757]">{time}</span><span className="text-sm text-[#536358]">{place}</span></div>)}</div></div><div className="min-h-[420px] overflow-hidden border border-[#cad3c9] bg-[#dfe7db] p-5"><div className="relative h-full min-h-[370px] overflow-hidden bg-[#d1e0d1] bg-[linear-gradient(28deg,transparent_49%,#aec5ad_50%,transparent_51%),linear-gradient(110deg,transparent_49%,#b5cbb3_50%,transparent_51%)]"><div className="absolute left-[18%] top-[26%] h-24 w-24 rounded-full border border-[#91ae91]" /><div className="absolute right-[17%] bottom-[20%] h-36 w-36 rounded-full border border-[#91ae91]" /><div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-[#FAF7F2] bg-[#D97757] p-3 text-center text-xs font-bold text-white shadow-xl"><MapPin size={18} className="mx-auto mb-1" />Serene<br />Palms</div><div className="absolute bottom-5 left-5 bg-[#FAF7F2]/90 px-3 py-2 text-xs font-bold text-[#1b4332]">Village Nargoli, Dapoli</div></div></div></div></div></section>

      <section id="calculator" className="bg-[#173d30] py-20 text-[#FAF7F2] lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><SectionLabel>Investment calculator</SectionLabel><h2 className="heading text-[#FAF7F2]">See the <span>possibility.</span></h2><p className="mt-5 max-w-md text-sm leading-6 text-[#c8d8ca]">A simple illustration to help you think through your next move. Actual returns vary with the plot, build and market.</p></div><div className="grid gap-5 md:grid-cols-2"><div className="space-y-6 border border-white/15 p-7 md:col-span-2"><label className="flex justify-between text-sm"><span>Plot area</span><strong className="text-[#f4bd9e]">{area.toLocaleString()} sq. ft.</strong></label><input type="range" min="1500" max="5000" step="100" value={area} onChange={(e) => setArea(Number(e.target.value))} /><label className="flex justify-between text-sm"><span>Annual capital appreciation</span><strong className="text-[#f4bd9e]">{appreciation}%</strong></label><input type="range" min="5" max="20" value={appreciation} onChange={(e) => setAppreciation(Number(e.target.value))} /></div><div className="border border-white/15 bg-white/5 p-7"><p className="text-xs uppercase tracking-[.15em] text-[#c8d8ca]">Estimated 5-year capital gain</p><p className="mt-5 font-serif text-4xl text-[#f4bd9e]">₹{fiveYearValue.toLocaleString('en-IN')}</p></div><div className="border border-white/15 bg-white/5 p-7"><label className="text-xs uppercase tracking-[.15em] text-[#c8d8ca]">Nightly villa rate</label><div className="mt-5 flex items-center gap-2"><span className="font-serif text-4xl text-[#f4bd9e]">₹{nightly.toLocaleString('en-IN')}</span></div><input className="mt-5" type="range" min="3000" max="12000" step="500" value={nightly} onChange={(e) => setNightly(Number(e.target.value))} /><p className="mt-5 border-t border-white/15 pt-4 text-xs text-[#c8d8ca]">Projected monthly gross yield: <strong className="text-white">₹{monthlyYield.toLocaleString('en-IN')}</strong></p></div></div></div></div></section>

      <section id="contact" className="section-space"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><SectionLabel>Make a visit of it</SectionLabel><h2 className="heading">Come see how <span>it feels.</span></h2><p className="body-copy mt-5">Walk the land, see the views and take your time with the possibilities. We arrange complimentary pickup and drop from Khed Railway Station.</p><div className="mt-8 flex items-start gap-3 text-sm text-[#536358]"><CalendarDays size={18} className="mt-0.5 text-[#D97757]" /><span>Village Nargoli, Dapoli-Khed Road,<br />Taluka Dapoli, District Ratnagiri, Maharashtra</span></div></div><div className="border border-[#d9d8ce] bg-[#f0ede5] p-7 md:p-10"><h3 className="text-xl font-bold">Tell us how we can help</h3><p className="mt-2 mb-7 text-sm text-[#68766b]">A member of our team will get back to you shortly.</p><LeadForm /></div></div></section>

      <footer className="bg-[#102e24] py-12 text-[#b7cbbb]"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row"><div><div className="flex items-center gap-3 text-white"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#D97757]"><Leaf size={18} /></span><strong>Om Sai Developers</strong></div><p className="mt-4 max-w-xs text-sm leading-6">Building places with a little more room for nature, and a lot more room for living.</p></div><div className="flex flex-wrap gap-x-8 gap-y-3 text-xs"><a href="#top">Back to top</a><a href="#contact">Request brochure</a><a href="#contact">Privacy policy</a><a href={whatsappUrl}>WhatsApp us</a></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-xs md:flex-row"><p>MahaRERA registration details available on request. Images and plans are indicative.</p><p>© 2026 Om Sai Developers. All rights reserved.</p></div></div></footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"><MessageCircle size={25} /></a>

      {modal && <div className="fixed inset-0 z-50 grid place-items-center bg-[#102e24]/70 p-5 backdrop-blur-sm" onClick={() => setModal(null)}><div className="relative w-full max-w-lg bg-[#FAF7F2] p-7 text-[#16352a] shadow-2xl md:p-10" onClick={(e) => e.stopPropagation()}><button aria-label="Close" onClick={() => setModal(null)} className="absolute right-5 top-5 text-[#536358]"><X size={20} /></button>{modal === 'plot' && selectedPlot ? <><SectionLabel>Plot #{selectedPlot.id}</SectionLabel><h2 className="heading text-4xl">A good place to begin.</h2><div className="mt-8 grid grid-cols-2 gap-4 border-y border-[#d9d8ce] py-5 text-sm"><div><span className="block text-xs text-[#68766b]">Area</span><strong>{selectedPlot.size}</strong></div><div><span className="block text-xs text-[#68766b]">Orientation</span><strong>{selectedPlot.orientation}</strong></div></div><button onClick={() => setModal('visit')} className="button-primary mt-7 w-full">Enquire about Plot #{selectedPlot.id} <ArrowUpRight size={16} /></button></> : <><SectionLabel>Book a site visit</SectionLabel><h2 className="heading text-4xl">Let&apos;s make a day of it.</h2><p className="body-copy mt-4">Share your details and we&apos;ll arrange a complimentary pickup from Khed Railway Station.</p><div className="mt-7"><LeadForm onSuccess={() => setModal(null)} /></div></>}</div></div>}
    </main>
  );
}
