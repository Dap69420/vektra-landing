import React from 'react';
import { Bot, Sliders, Music, ArrowRight, ShieldCheck, Zap, Disc } from 'lucide-react';

export function BentoFeatures() {
  const pillars = [
    {
      id: 'discord-bot',
      emoji: '🤖',
      icon: Bot,
      title: 'Discord Bot',
      subtitle: 'In-Server Intake & Gating',
      description: 'Submit demos, open support tickets, and make release requests right from your Discord server. The bot handles cooldowns, intake gating, and AI demo checks.',
      bullets: ['Automated /submit slash commands', 'AI audio link & spam screening', 'Role-based submission cooldowns', 'Custom DM status updates'],
      linkText: 'Configure Bot in Dashboard',
      linkUrl: 'https://dashboard.vektra.games',
      badge: 'Slash Commands'
    },
    {
      id: 'staff-dashboard',
      emoji: '🎛️',
      icon: Sliders,
      title: 'Staff Dashboard',
      subtitle: 'A&R Review & Operations',
      description: 'Review submissions, manage tickets, edit branding and panel templates, and ship releases through QC — all behind Discord OAuth with per-guild permissions.',
      bullets: ['Dedicated A&R batch review queue', 'Interactive audio player with waveforms', 'Ticket management & panel designer', 'Per-guild Neon / Postgres isolation'],
      linkText: 'Go to Dashboard',
      linkUrl: 'https://dashboard.vektra.games',
      badge: 'For Labels'
    },
    {
      id: 'artist-portal',
      emoji: '🎵',
      icon: Music,
      title: 'Artist Portal',
      subtitle: 'Universal Submission Hub',
      description: 'Artists log in with Discord to see the status of every demo and release they’ve submitted across every label running Vektra — no Discord DM spam required.',
      bullets: ['Live tracker across all signed labels', 'In Queue → Shortlisted → Approved pipeline', 'Direct feedback notes from A&R', 'Release metadata & QC uploads'],
      linkText: 'Go to Artist Portal',
      linkUrl: 'https://artists.vektra.games',
      badge: 'For Artists'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="features">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
          Architecture
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#e7edf3] tracking-tight">
          One platform, three places
        </h2>
        <p className="text-[#9aa6b2] text-base mt-3">
          Seamlessly bridging artists submitting tracks in Discord, A&R staff reviewing in a high-speed dashboard, and a centralized artist portal.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="flex flex-col justify-between p-7 rounded-2xl bg-[#11161a] border border-[#1f2730] hover:border-emerald-500/40 transition-all duration-300 group shadow-lg"
          >
            <div>
              {/* Header Icon + Emoji */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl">{pillar.emoji}</div>
                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-[#161c22] text-emerald-400 border border-[#1f2730]">
                  {pillar.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-[#e7edf3] group-hover:text-emerald-400 transition-colors mb-1">
                {pillar.title}
              </h3>
              <p className="text-xs font-mono text-[#9aa6b2] mb-3">
                {pillar.subtitle}
              </p>
              
              {/* Description */}
              <p className="text-sm text-[#9aa6b2] leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Feature Points */}
              <ul className="space-y-2 mb-8 text-xs text-[#e7edf3]">
                {pillar.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Link Action */}
            <a
              href={pillar.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors pt-4 border-t border-[#1f2730]"
            >
              <span>{pillar.linkText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}
