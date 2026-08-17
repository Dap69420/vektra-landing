import React from 'react';
import {
  Coins,
  Sparkles,
  Gift,
  Rocket,
  Tag,
  PartyPopper,
  Megaphone,
  Tv,
  Users,
  ShoppingCart,
  RefreshCcw,
} from 'lucide-react';

const EARN_PLANS = [
  {
    icon: Megaphone,
    title: 'Drops in our Discord',
    detail: 'Random freqs drops posted in our server every few hours — first come, first served.',
  },
  {
    icon: Tv,
    title: 'Watching ads',
    detail: 'Earn freqs by watching ads or completing offers through link shorteners and offerwalls.',
  },
  {
    icon: Users,
    title: 'Referrals',
    detail: 'Invite friends — when someone you referred buys a plan, you earn freqs.',
  },
  {
    icon: ShoppingCart,
    title: 'Purchase cashback',
    detail: 'Every paid plan earns you freqs back on top of what you get.',
  },
  {
    icon: RefreshCcw,
    title: 'Free Starter renewals',
    detail: 'Renew your free Starter tier and pick up freqs along the way.',
  },
];

export function FreqsSection() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1f2730]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Coins className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />
            Freqs
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#e7edf3] tracking-tight mb-4">
            A new digital currency from Vektra
          </h1>
          <p className="text-[#9aa6b2] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Freqs is our own in-platform currency — <span className="text-emerald-400 font-mono">100 freqs = $1</span>.
            Use it for discounts, free services and plans. This is just the beginning.
          </p>
        </div>
      </section>

      {/* What it is + status */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#1f2730]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-[#1f2730] bg-[#11161a] p-7">
            <div className="flex items-center gap-2.5 mb-3">
              <Gift className="w-5 h-5 text-emerald-400" />
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-[#e7edf3]">
                What can you use freqs for?
              </h2>
            </div>
            <ul className="space-y-3 text-[#9aa6b2] text-sm leading-relaxed">
              {[
                'Discounts on paid plans',
                'Free services and perks',
                'Free plans — save up and unlock them',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Tag className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-500/40 bg-[#0f1714] p-7">
            <div className="flex items-center gap-2.5 mb-3">
              <Rocket className="w-5 h-5 text-emerald-400" />
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-[#e7edf3]">
                An experiment to get early momentum
              </h2>
            </div>
            <p className="text-[#9aa6b2] text-sm leading-relaxed mb-4">
              Freqs is a fresh experiment we started to build early momentum for our community.
              Right now we're laying the groundwork — the currency exists, and drops are already
              live in our Discord server.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono font-semibold text-emerald-300">
              <PartyPopper className="w-3.5 h-3.5" />
              Just getting started
            </div>
          </div>
        </div>
      </section>

      {/* Future plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              Roadmap
            </p>
            <h2 className="text-3xl font-bold text-[#e7edf3] tracking-tight mb-3">
              How you'll earn freqs
            </h2>
            <p className="text-[#9aa6b2] text-base max-w-2xl mx-auto leading-relaxed">
              We're rolling out earning methods one by one. Here's what's planned:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EARN_PLANS.map((plan) => (
              <div
                key={plan.title}
                className="rounded-2xl border border-[#1f2730] bg-[#11161a] p-6 transition-colors hover:border-[#2a3540]"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <plan.icon className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-[#e7edf3]">
                    {plan.title}
                  </h3>
                </div>
                <p className="text-[#9aa6b2] text-sm leading-relaxed">{plan.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-[#1f2730] bg-[#0f1714] px-5 py-3 text-sm text-[#9aa6b2]">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Follow the drops in our Discord server to start collecting freqs today.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
