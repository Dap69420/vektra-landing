import React from 'react';
import { Bot, Sliders, CheckCircle, Disc, ArrowRight, MessageSquare, Shield, Sparkles } from 'lucide-react';

export function ArchitectureSteps() {
  const steps = [
    {
      step: '01',
      title: 'Discord Submission or Web Intake',
      description: 'Artists run /submit in your Discord server or upload via the artist web portal. Audio is fingerprinted and scanned for duplicate links & format compliance.',
      icon: Bot,
      pill: 'Discord Bot & Portal'
    },
    {
      step: '02',
      title: 'A&R Review & Staff Evaluation',
      description: 'Submissions land immediately in your label’s private staff dashboard. Listen with built-in waveforms, vote with fellow A&Rs, and leave timestamped notes.',
      icon: Sliders,
      pill: 'Staff Dashboard'
    },
    {
      step: '03',
      title: 'Automated Status & Artist Sync',
      description: 'One click moves a track to Shortlist or Approved. Artists get instant Discord DM updates and their web portal dashboard updates in real time.',
      icon: CheckCircle,
      pill: 'Real-Time Sync'
    },
    {
      step: '04',
      title: 'Release QC & Master Delivery',
      description: 'Collect 24-bit WAVs, stems, artwork, contracts, and ISRC codes in a structured thread. Export clean release packages ready for DSP distribution.',
      icon: Disc,
      pill: 'QC Delivery Pipeline'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#1f2730]">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
          End-to-End Workflow
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#e7edf3] tracking-tight">
          How Vektra powers modern music labels
        </h2>
        <p className="text-[#9aa6b2] text-base mt-3">
          From the first demo link sent in a Discord server to finalized master files delivered for streaming.
        </p>
      </div>

      {/* Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#11161a] border border-[#1f2730] hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    STEP {item.step}
                  </span>
                  <Icon className="w-5 h-5 text-[#9aa6b2] group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-[#e7edf3] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9aa6b2] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="text-[11px] font-mono text-emerald-400/80 pt-3 border-t border-[#1f2730]">
                {item.pill}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
