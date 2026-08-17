import React from 'react';
import {
  Check,
  Crown,
  Sparkles,
  Zap,
  Gift,
  Coins,
  Gamepad2,
  MessageSquare,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  note?: string;
  tagline: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    tagline: 'Start submitting and reviewing without spending a cent.',
    features: [
      'Artist Portal access',
      'Web demo intake',
      'Submission status tracking',
      'Community support',
    ],
    cta: 'Start Free',
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '$3.99',
    period: 'every 2 months',
    note: '2-month minimum · or free with ads',
    tagline: 'Full Discord bot workflow for growing labels and collectives.',
    features: [
      'Everything in Free',
      'Discord bot demo intake panels',
      'A&R queue & staff reviews',
      'Support tickets',
      'Free with ads option',
    ],
    cta: 'Start with Starter',
    popular: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$8.99',
    period: '/month',
    tagline: 'Deep customization, analytics, and priority handling.',
    features: [
      'Everything in Starter',
      'Custom embeds, DM templates & branding',
      'Analytics & CSV exports',
      'Per-guild storage (managed or your own DB)',
      'Priority support',
    ],
    cta: 'Go Pro',
  },
  {
    id: 'pro_plus',
    name: 'Pro+',
    price: '$16.99',
    period: '/month',
    tagline: 'White-label hosting and full control for serious labels.',
    features: [
      'Everything in Pro',
      'White-label custom Discord bot',
      'Hosted bot worker (VPS)',
      'Pro workflow tools & API access',
      'Direct engineering support',
    ],
    cta: 'Go Pro+',
  },
];

const PAYMENT_METHODS = [
  {
    icon: Coins,
    name: 'Crypto',
    detail: 'Stablecoins — USDT & USDC',
  },
  {
    icon: Gift,
    name: 'Gift Cards',
    detail: 'Accepted at checkout',
  },
  {
    icon: Gamepad2,
    name: 'Robux',
    detail: 'Pay with Roblox currency',
  },
  {
    icon: Zap,
    name: 'Discord Nitro',
    detail: 'Nitro & server boosts accepted',
  },
];

export function PricingSection() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1f2730]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#e7edf3] tracking-tight mb-4">
            Plans that scale with your label
          </h1>
          <p className="text-[#9aa6b2] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From free demo intake to a fully white-labeled Discord bot — start small and upgrade
            when your workflow grows. Every plan includes the Artist Portal.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-6 transition-colors ${
                  plan.popular
                    ? 'bg-[#0f1714] border-emerald-500/60 shadow-xl shadow-emerald-900/20 lg:-translate-y-2'
                    : 'bg-[#11161a] border-[#1f2730] hover:border-[#2a3540]'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold font-mono uppercase tracking-wider shadow-md shadow-emerald-900/40 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                )}

                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#9aa6b2] mb-3">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl font-bold text-[#e7edf3] font-mono tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#9aa6b2] font-mono">{plan.period}</span>
                </div>

                {plan.note && (
                  <p className="text-[11px] text-emerald-400 font-mono mb-3">
                    {plan.note}
                  </p>
                )}

                <p className="text-xs text-[#9aa6b2] leading-relaxed mb-5">
                  {plan.tagline}
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-[#c3ccd6]">
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.id === 'free' ? 'https://discord.gg/AMUaEFxTDE' : `https://dashboard.vektra.games/checkout?plan=${plan.id}`}
                  target={plan.id === 'free' ? '_blank' : undefined}
                  rel={plan.id === 'free' ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-900/40'
                      : 'bg-[#161c22] hover:bg-[#1f2730] border border-[#1f2730] text-[#e7edf3]'
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] text-[#9aa6b2] font-mono mt-8">
            Pay instantly with USDT/USDC at the checkout — or use gift cards, Robux, or Discord
            Nitro/boosts via <a href="mailto:support@dapmedia.tech" className="text-emerald-400 hover:underline">support@dapmedia.tech</a> or a Discord ticket.
          </p>
        </div>
      </section>

      {/* Payment methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#1f2730] bg-[#0c100f]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              Payment Methods
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#e7edf3] tracking-tight">
              Accepted payment methods
            </h2>
            <p className="text-[#9aa6b2] text-sm mt-3 max-w-xl mx-auto">
              We keep it flexible — pay the way that works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PAYMENT_METHODS.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.name}
                  className="rounded-xl bg-[#11161a] border border-[#1f2730] p-5 flex items-start gap-3 hover:border-[#2a3540] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#e7edf3]">{method.name}</h3>
                    <p className="text-[11px] text-[#9aa6b2] mt-0.5 leading-relaxed">
                      {method.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-2xl bg-[#11161a] border border-[#1f2730] text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0f1714] border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Starter is the most popular choice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e7edf3] tracking-tight">
            Not sure which plan fits your label?
          </h2>
          <p className="text-sm text-[#9aa6b2] max-w-lg mx-auto leading-relaxed">
            Jump into the Vektra Discord and the team will help you pick the right tier — or set up
            a custom workflow for your label.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://discord.gg/AMUaEFxTDE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm shadow-emerald-900/40 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Join the Support Discord</span>
            </a>
            <a
              href="https://docs.vektra.games"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#161c22] hover:bg-[#1f2730] border border-[#1f2730] text-xs font-semibold text-[#e7edf3] transition-all"
            >
              <Crown className="w-3.5 h-3.5 text-emerald-400" />
              <span>Read the docs</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
