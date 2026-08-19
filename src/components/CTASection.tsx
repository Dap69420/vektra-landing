import React from 'react';
import { ArrowUpRight, Music, Sliders, ExternalLink } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#11161a] to-[#0d1215] border border-[#1f2730] shadow-2xl overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-emerald-500/10 blur-3xl pointer-events-none" />

        <h2 className="text-3xl sm:text-4xl font-bold text-[#e7edf3] tracking-tight mb-4">
          Ready to ship your next release?
        </h2>
        
        <p className="text-base text-[#9aa6b2] max-w-xl mx-auto mb-8">
          Artists head to the portal to track submissions. Labels head to the dashboard to review demos and configure bot panels.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://artists.vektra.games"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-950/60 flex items-center justify-center gap-2 group"
          >
            <span>Open Artist Portal</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="https://dashboard.vektra.games"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#161c22] hover:bg-[#1f2730] border border-[#1f2730] text-[#e7edf3] font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Staff Dashboard</span>
            <ArrowUpRight className="w-4 h-4 text-[#9aa6b2]" />
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1f2730]/60 flex items-center justify-center gap-6 text-xs text-[#9aa6b2] font-mono">
          <span>Zero Server Setup</span>
          <span>•</span>
          <span>Instant Discord Auth</span>
          <span>•</span>
          <span>Per-Guild Isolation</span>
        </div>

      </div>
    </section>
  );
}
