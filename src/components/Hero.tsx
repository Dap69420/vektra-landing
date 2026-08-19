import React from 'react';
import { ArrowUpRight, Check, ShieldCheck, Database, Disc, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenSubmitModal?: () => void;
}

export function Hero({ onOpenSubmitModal }: HeroProps) {
  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      
      {/* Glow highlight background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Vektra Label Workspace
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#e7edf3] leading-[1.1] mb-6">
        From demo to release,<br className="hidden sm:inline" /> in one workspace.
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-[#9aa6b2] max-w-2xl mx-auto leading-relaxed mb-10">
        Vektra handles demo intake, A&R review, support tickets, and release delivery for record labels and music collectives — with a Discord bot, a staff dashboard, and a portal where artists track everything they've submitted.
      </p>

      {/* Primary Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
        <a
          href="https://artists.vektra.games"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Open Artist Portal</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <a
          href="https://dashboard.vektra.games"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#11161a] hover:bg-[#161c22] border border-[#1f2730] hover:border-zinc-600 text-[#e7edf3] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Staff Dashboard</span>
          <ArrowUpRight className="w-4 h-4 text-[#9aa6b2]" />
        </a>
      </div>

      {/* Core Badges Pill Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-[#9aa6b2]">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#11161a] border border-[#1f2730]">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>Discord OAuth</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#11161a] border border-[#1f2730]">
          <Database className="w-3.5 h-3.5 text-emerald-400" />
          <span>Per-Guild Storage</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#11161a] border border-[#1f2730]">
          <Disc className="w-3.5 h-3.5 text-emerald-400" />
          <span>Release QC Delivery</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#11161a] border border-[#1f2730]">
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span>AI Spam Gating</span>
        </div>
      </div>

    </section>
  );
}
