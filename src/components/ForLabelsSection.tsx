import React, { useState } from 'react';
import { 
  BarChart3, 
  Layers, 
  Shield, 
  Radio, 
  Bot, 
  SlidersHorizontal,
  ExternalLink,
  Database,
  Check,
  Zap,
  Music2,
  Building2,
  Sparkles
} from 'lucide-react';

export function ForLabelsSection() {
  const [activeGuild, setActiveGuild] = useState<'Dap Media' | 'Race Records' | 'Onyx Core Records' | 'Astryx Media'>('Dap Media');

  const stats = [
    { label: 'Total Demos Processed', value: '200+', change: 'High-speed intake' },
    { label: 'A&R Review Acceptance Rate', value: '18.4%', change: 'High-signal filter' },
    { label: 'Average Review SLA', value: '1.8 Days', change: 'Rapid staff response' },
    { label: 'Shipped Release Packages', value: '0', change: 'Intake & A&R focused' }
  ];

  const guildDetails: Record<string, { pending: number; activeQc: number; status: string; region: string }> = {
    'Dap Media': { pending: 14, activeQc: 3, status: 'Active (Electronic/House)', region: 'US-East (Neon Isolated)' },
    'Race Records': { pending: 9, activeQc: 2, status: 'Active (Bass/Techno)', region: 'EU-Central (Postgres DB)' },
    'Onyx Core Records': { pending: 18, activeQc: 4, status: 'Active (Industrial/Leftfield)', region: 'US-West (Managed Cloud)' },
    'Astryx Media': { pending: 7, activeQc: 1, status: 'Active (Trance/DnB)', region: 'AP-East (Isolated Vault)' }
  };

  const currentDetails = guildDetails[activeGuild];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#1f2730]" id="for-labels">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Mock Stats & Live Operations Dashboard */}
        <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
          
          {/* 4-Stat Box Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#11161a] border border-[#1f2730] hover:border-zinc-700 transition-all space-y-1.5 shadow-md"
              >
                <div className="text-xs font-mono text-[#9aa6b2]">{stat.label}</div>
                <div className="text-2xl sm:text-3xl font-bold text-[#e7edf3] tracking-tight">{stat.value}</div>
                <div className="text-[11px] font-mono text-emerald-400">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Interactive Feature Panel for Staff with Label Selector */}
          <div className="p-5 rounded-2xl bg-[#11161a] border border-[#1f2730] space-y-4">
            
            {/* Label Selector Tabs */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-[#9aa6b2] flex items-center justify-between">
                <span>SELECT EXAMPLE GUILD WORKSPACE:</span>
                <span className="text-emerald-400 font-semibold">{activeGuild}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Dap Media', 'Race Records', 'Onyx Core Records', 'Astryx Media'] as const).map((labelName) => (
                  <button
                    key={labelName}
                    onClick={() => setActiveGuild(labelName)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all text-center truncate ${
                      activeGuild === labelName
                        ? 'bg-emerald-600 text-white shadow-sm border border-emerald-500'
                        : 'bg-[#161c22] text-[#9aa6b2] hover:text-[#e7edf3] border border-[#1f2730]'
                    }`}
                  >
                    {labelName}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#1f2730] pt-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-[#e7edf3] font-mono">
                  {activeGuild} — Guild A&amp;R Queue
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#9aa6b2]">Region: {currentDetails.region}</span>
            </div>

            {/* Pipeline Stage Indicators */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#161c22] border border-[#1f2730]">
                <div className="text-[#9aa6b2] text-[10px] uppercase">New Demos</div>
                <div className="text-base font-bold text-amber-400 mt-0.5">{currentDetails.pending} Pending</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#161c22] border border-[#1f2730]">
                <div className="text-[#9aa6b2] text-[10px] uppercase">A&R Shortlist</div>
                <div className="text-base font-bold text-emerald-400 mt-0.5">{currentDetails.activeQc} Active</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#161c22] border border-[#1f2730]">
                <div className="text-[#9aa6b2] text-[10px] uppercase">Distro Handling</div>
                <div className="text-base font-bold text-blue-400 mt-0.5">External / DSP</div>
              </div>
            </div>

            {/* Highlighted Callout on why people use Vektra even with external distributors */}
            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold font-mono">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Works Seamlessly With Any External Distributor</span>
              </div>
              <p className="text-[#9aa6b2] text-[11px] leading-relaxed">
                Our intake &amp; A&amp;R tools are so good that record labels and collectives use Vektra to organize submissions, team voting, and ticket support even when they already have third-party distributors handling final DSP delivery.
              </p>
            </div>

            <div className="text-[11px] text-[#9aa6b2] font-mono bg-[#0c1013] p-3 rounded-lg border border-[#1a232b] flex items-center justify-between">
              <span>⚡ AI Spam Engine: Blocked 58 duplicate / invalid links for {activeGuild}</span>
              <span className="text-emerald-400 font-semibold">100% Protected</span>
            </div>
          </div>

        </div>

        {/* Right Side: Copy Column */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase">
            <span>For Labels &amp; Collectives</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#e7edf3] tracking-tight leading-tight">
            A&amp;R, support, and delivery — without the spreadsheets.
          </h2>

          <p className="text-[#9aa6b2] text-base leading-relaxed">
            Vektra runs per-server so each label keeps its own branding, private staff channel, and dedicated database. Pro and Pro+ tiers unlock rich analytics, message broadcasting, custom Discord bots, and streamlined intake pipelines.
          </p>

          <ul className="space-y-3 text-sm text-[#e7edf3]">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>Trusted by labels</strong> like Dap Media, Race Records, Onyx Core Records, and Astryx Media.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>Demo intake with AI spam checks</strong> and configurable artist cooldowns.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>Branded submit &amp; ticket panels</strong> with custom Discord DM templates.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>Use alongside your distributor:</strong> Perfect for intake and A&R even if you distribute elsewhere.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span><strong>Isolated databases:</strong> Managed cloud or connect your own Neon / PostgreSQL instance.</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="https://dashboard.vektra.games"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#161c22] hover:bg-[#1f2730] border border-[#1f2730] text-[#e7edf3] text-sm font-semibold transition-all"
            >
              <span>Open the Staff Dashboard</span>
              <ExternalLink className="w-4 h-4 text-[#9aa6b2]" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
