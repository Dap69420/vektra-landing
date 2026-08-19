import React from 'react';
import {
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
  Coins,
  Check,
  ArrowUpRight,
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

const FREQS_PACKS = [
  { freqs: '500', price: '$5', detail: 'Native crypto', bonus: 'Base pack' },
  { freqs: '1,100', price: '$10', detail: 'Native crypto', bonus: '10% introductory bonus', popular: true },
  { freqs: '2,500', price: '$20', detail: 'Crypto or MoonPay', bonus: '25% introductory bonus' },
];

export function FreqsSection() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1f2730]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-5 bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-900/20">
            <Coins className="w-8 h-8" />
          </div>
          <p className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            Freqs
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#e7edf3] tracking-tight mb-4">
            A new digital currency from Vektra
          </h1>
          <p className="text-[#9aa6b2] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Freqs is Vektra credit — <span className="text-emerald-400 font-mono">100 Freqs = $1</span>.
            Use it for plan purchases, discounts, and community rewards.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#1f2730] bg-[#0c100f]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">Buy Freqs</p>
            <h2 className="text-3xl font-bold text-[#e7edf3] tracking-tight mb-3">Choose your pack</h2>
            <p className="text-sm text-[#9aa6b2] max-w-xl mx-auto leading-relaxed">Pay directly with your crypto wallet. MoonPay requires a $20 minimum, so it is available only for the 2,500 Freqs pack.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {FREQS_PACKS.map((pack) => (
              <article key={pack.freqs} className={`relative flex flex-col rounded-xl border p-6 ${pack.popular ? 'border-emerald-500/60 bg-[#0f1714]' : 'border-[#1f2730] bg-[#11161a]'}`}>
                {pack.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-bold font-mono uppercase tracking-wider text-white">Best value</span>}
                <Coins className="w-5 h-5 text-emerald-400 mb-4" />
                <h3 className="font-mono text-lg font-bold text-[#e7edf3]">{pack.freqs} Freqs</h3>
                <div className="mt-2 flex items-baseline gap-2"><strong className="text-3xl font-mono text-[#e7edf3]">{pack.price}</strong><span className="text-xs text-[#9aa6b2]">one time</span></div>
                <p className="mt-3 text-xs text-emerald-400 font-mono">{pack.bonus}</p>
                <p className="mt-2 text-xs text-[#9aa6b2]">{pack.detail}</p>
                <ul className="mt-5 flex-1 space-y-2 text-xs text-[#c3ccd6]"><li className="flex gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />USDT or USDC via direct crypto checkout</li><li className="flex gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />Transaction-hash verification fallback</li></ul>
                <a href={`https://dashboard.vektra.games/checkout?freqs=${pack.freqs.replace(',', '')}`} className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold ${pack.popular ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'border border-[#2a3540] bg-[#161c22] hover:bg-[#1f2730] text-[#e7edf3]'}`}>Buy {pack.freqs} Freqs <ArrowUpRight className="w-3.5 h-3.5" /></a>
              </article>
            ))}
          </div>
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
              Buy Freqs through crypto checkout, earn them in the community, and use them when you are ready to upgrade.
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
