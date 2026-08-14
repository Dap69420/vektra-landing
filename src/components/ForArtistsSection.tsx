import React, { useState } from 'react';
import { 
  Music, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  ExternalLink,
  ChevronRight,
  Disc,
  Play,
  Pause,
  Sliders,
  Filter
} from 'lucide-react';
import { INITIAL_DEMOS, DEMO_LABELS } from '../data/vektraData';
import { DemoItem, DemoStatus } from '../types';

export function ForArtistsSection() {
  const [demos, setDemos] = useState<DemoItem[]>(INITIAL_DEMOS);
  const [selectedLabel, setSelectedLabel] = useState('All Labels');
  const [activeDemo, setActiveDemo] = useState<DemoItem>(INITIAL_DEMOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const getStatusBadge = (status: DemoStatus) => {
    switch (status) {
      case 'in_queue':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-500/15 text-zinc-300 border border-zinc-500/20">
            In Queue
          </span>
        );
      case 'shortlist':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/20 animate-pulse">
            Shortlisted
          </span>
        );
      case 'approved':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
            Approved
          </span>
        );
      case 'shipped':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/20">
            Shipped
          </span>
        );
    }
  };

  const filteredDemos = selectedLabel === 'All Labels' 
    ? demos 
    : demos.filter(d => d.label === selectedLabel);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#1f2730]" id="for-artists">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Copy Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase">
            <span>For Artists</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#e7edf3] tracking-tight leading-tight">
            Track your demos and releases in one place.
          </h2>

          <p className="text-[#9aa6b2] text-base leading-relaxed">
            Stop DMing staff to ask <em className="text-zinc-300 font-medium">"any update?"</em>. Log in with your Discord account and see the status of every submission and release you've sent to any Vektra label — In Queue, Shortlisted, Approved, or shipped to DSPs.
          </p>

          <ul className="space-y-3 text-sm text-[#e7edf3]">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>One login, all labels</strong> you've submitted music to.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>Live status pipeline:</strong> In Queue → Shortlisted → Approved.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>Release request tracking</strong> through master QC delivery.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>Decision DMs mirrored</strong> seamlessly on the web portal.</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="https://artists.vektra.games"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-md shadow-emerald-950/50"
            >
              <span>Open the Artist Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Interactive Mock Status Panel */}
        <div className="lg:col-span-7 bg-[#11161a] border border-[#1f2730] rounded-2xl p-6 shadow-2xl space-y-5" id="demo-tracker">
          
          {/* Header of Mock Portal */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[#1f2730]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Music className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#e7edf3]">Artist Submission Portal</h4>
                <p className="text-[11px] font-mono text-[#9aa6b2]">Sample data preview — live statuses live in the portal</p>
              </div>
            </div>

            {/* Label Filter Dropdown */}
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#9aa6b2]" />
              <select
                value={selectedLabel}
                onChange={(e) => setSelectedLabel(e.target.value)}
                className="text-xs font-mono bg-[#161c22] border border-[#1f2730] text-[#e7edf3] rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500"
              >
                {DEMO_LABELS.map((lbl) => (
                  <option key={lbl} value={lbl}>{lbl}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Demos List Rows */}
          <div className="space-y-2.5">
            {filteredDemos.map((demo) => {
              const isSelected = activeDemo.id === demo.id;
              return (
                <div
                  key={demo.id}
                  onClick={() => setActiveDemo(demo)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#161c22] border-emerald-500/50 shadow-sm'
                      : 'bg-[#0e1215] border-[#1f2730] hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDemo(demo);
                        setIsPlaying(!isPlaying || activeDemo.id !== demo.id);
                      }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                        isSelected && isPlaying 
                          ? 'bg-emerald-500 text-black' 
                          : 'bg-[#1a232b] text-zinc-300 hover:bg-emerald-600 hover:text-white'
                      }`}
                    >
                      {isSelected && isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-[#e7edf3]">{demo.title}</span>
                        <span className="text-xs text-[#9aa6b2] font-mono">({demo.genre})</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#9aa6b2]">
                        <span className="text-zinc-300 font-medium">{demo.label}</span>
                        <span>•</span>
                        <span>{demo.submittedAt}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 justify-end">
                    {getStatusBadge(demo.status)}
                    <ChevronRight className="w-4 h-4 text-zinc-600 hidden sm:block" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Demo Feedback Detail Box */}
          {activeDemo && (
            <div className="p-4 rounded-xl bg-[#161c22] border border-[#1f2730] space-y-2 text-xs animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="font-mono text-emerald-400 uppercase font-semibold">
                  A&R Feedback &amp; Stage:
                </span>
                <span className="font-mono text-[#9aa6b2]">{activeDemo.bpm} BPM | {activeDemo.duration}</span>
              </div>
              <p className="text-zinc-300 leading-relaxed font-sans">
                {activeDemo.feedback}
              </p>
              <div className="text-[11px] text-[#9aa6b2] font-mono pt-1">
                Submission Notes: "{activeDemo.notes}"
              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}
