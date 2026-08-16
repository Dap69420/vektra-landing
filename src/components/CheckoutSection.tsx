import React, {useMemo, useState} from 'react';
import {
  Check,
  Wallet,
  Ticket,
  ShieldCheck,
  Loader2,
  ArrowUpRight,
  MessageSquare,
  Server,
  Gift,
} from 'lucide-react';

const DEPAY_WIDGET_CDN = 'https://integrate.depay.com/widgets/v13.js';
const CHECKOUT_API = 'https://dashboard.vektra.games/api/checkout';

const PLANS: Record<string, {name: string; price: number; period: string; note: string}> = {
  starter: {name: 'Starter', price: 0.01, period: '2 months', note: '2-month minimum'},
  pro: {name: 'Pro', price: 8.99, period: 'per month', note: 'Monthly'},
  pro_plus: {name: 'Pro+', price: 16.99, period: 'per month', note: 'Monthly'},
};

function loadDePayWidgets(): Promise<any> {
  return new Promise((resolve, reject) => {
    const win = window as any;
    if (win.DePayWidgets && typeof win.DePayWidgets.Payment === 'function') {
      resolve(win.DePayWidgets);
      return;
    }
    const existing = document.querySelector(
      `script[src="${DEPAY_WIDGET_CDN}"]`
    ) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve(win.DePayWidgets));
      existing.addEventListener('error', () => reject(new Error('DePay widget failed to load.')));
      return;
    }
    const script = document.createElement('script');
    script.src = DEPAY_WIDGET_CDN;
    script.async = true;
    script.onload = () => resolve(win.DePayWidgets);
    script.onerror = () => reject(new Error('Could not load the DePay widget.'));
    document.head.appendChild(script);
  });
}

export function CheckoutSection() {
  const initialPlan = useMemo(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('plan') || '';
    return PLANS[fromUrl] ? fromUrl : 'pro';
  }, []);

  const [plan, setPlan] = useState<string>(initialPlan);
  const [fulfillment, setFulfillment] = useState<'instant' | 'coupon'>('coupon');
  const [guildId, setGuildId] = useState('');
  const [discordUserId, setDiscordUserId] = useState('');
  const [status, setStatus] = useState<'idle' | 'creating' | 'widget' | 'error'>('idle');
  const [error, setError] = useState('');

  const selected = PLANS[plan];

  const startPayment = async () => {
    setError('');
    setStatus('creating');
    try {
      const response = await fetch(`${CHECKOUT_API}/orders`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          plan,
          fulfillment,
          guild_id: fulfillment === 'instant' ? guildId.trim() : '',
          discord_user_id: discordUserId.trim(),
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || 'Could not create the order.');
      }

      const DePayWidgets = await loadDePayWidgets();
      DePayWidgets.Payment({
        integration: data.integration,
        payload: {order_ref: data.order_ref},
      });
      setStatus('widget');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#1f2730]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            Checkout
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e7edf3] tracking-tight mb-3">
            Complete your order
          </h1>
          <p className="text-[#9aa6b2] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Pay with USDT or USDC — activate instantly on your server, or get a redeemable
            coupon you can gift.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* Left: options */}
          <div className="space-y-8">
            {/* Plan */}
            <div>
              <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#9aa6b2] mb-3">
                1. Choose your plan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(PLANS).map(([key, p]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setPlan(key)}
                    className={`text-left rounded-xl border p-4 transition-colors cursor-pointer ${
                      plan === key
                        ? 'bg-[#0f1714] border-emerald-500/60'
                        : 'bg-[#11161a] border-[#1f2730] hover:border-[#2a3540]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e7edf3]">
                        {p.name}
                      </span>
                      {plan === key && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold font-mono text-[#e7edf3]">${p.price}</span>
                      <span className="text-[11px] text-[#9aa6b2] font-mono">{p.period}</span>
                    </div>
                    <p className="text-[11px] text-[#9aa6b2] mt-1.5">{p.note}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Fulfillment */}
            <div>
              <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#9aa6b2] mb-3">
                2. How do you want it delivered?
              </h2>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setFulfillment('coupon')}
                  className={`w-full text-left rounded-xl border p-4 transition-colors cursor-pointer ${
                    fulfillment === 'coupon'
                      ? 'bg-[#0f1714] border-emerald-500/60'
                      : 'bg-[#11161a] border-[#1f2730] hover:border-[#2a3540]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                        <Ticket className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#e7edf3]">Redeemable coupon</span>
                          <span className="flex items-center gap-1 text-[10px] font-mono text-[#9aa6b2]">
                            <Gift className="w-3 h-3" /> giftable
                          </span>
                        </div>
                        <p className="text-xs text-[#9aa6b2] mt-1 leading-relaxed">
                          No server needed now. You get a single-use code you can redeem later — or
                          gift to someone. Redeem with <code className="text-emerald-400">/premium redeem</code> in
                          Discord.
                        </p>
                      </div>
                    </div>
                    {fulfillment === 'coupon' && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFulfillment('instant')}
                  className={`w-full text-left rounded-xl border p-4 transition-colors cursor-pointer ${
                    fulfillment === 'instant'
                      ? 'bg-[#0f1714] border-emerald-500/60'
                      : 'bg-[#11161a] border-[#1f2730] hover:border-[#2a3540]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                        <Server className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#e7edf3]">
                          Activate instantly on my server
                        </div>
                        <p className="text-xs text-[#9aa6b2] mt-1 leading-relaxed">
                          Pick a server where the Vektra bot is installed — the plan turns on the
                          moment payment confirms.
                        </p>
                      </div>
                    </div>
                    {fulfillment === 'instant' && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </div>

                  {fulfillment === 'instant' && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="block">
                        <span className="text-[11px] font-mono text-[#9aa6b2]">Discord server ID *</span>
                        <input
                          type="text"
                          value={guildId}
                          onChange={(e) => setGuildId(e.target.value.replace(/\D/g, ''))}
                          placeholder="e.g. 1082894562345230336"
                          className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg bg-[#0a0d0c] border border-[#1f2730] text-sm text-[#e7edf3] placeholder-[#4a5560] focus:outline-none focus:border-emerald-500/50"
                        />
                      </label>
                      <label className="block">
                        <span className="text-[11px] font-mono text-[#9aa6b2]">
                          Discord user ID (optional)
                        </span>
                        <input
                          type="text"
                          value={discordUserId}
                          onChange={(e) => setDiscordUserId(e.target.value.replace(/\D/g, ''))}
                          placeholder="Your Discord ID"
                          className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg bg-[#0a0d0c] border border-[#1f2730] text-sm text-[#e7edf3] placeholder-[#4a5560] focus:outline-none focus:border-emerald-500/50"
                        />
                      </label>
                      <p className="text-[11px] text-[#9aa6b2] font-mono sm:col-span-2">
                        Enable Developer Mode in Discord → right-click your server → Copy Server ID.
                      </p>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right: summary */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl bg-[#11161a] border border-[#1f2730] p-6">
              <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#9aa6b2] mb-4">
                Order summary
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#9aa6b2]">Plan</span>
                  <span className="font-semibold text-[#e7edf3]">{selected.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#9aa6b2]">Price</span>
                  <span className="font-mono font-semibold text-[#e7edf3]">${selected.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#9aa6b2]">Billing</span>
                  <span className="text-[#e7edf3]">{selected.period}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#9aa6b2]">Delivery</span>
                  <span className="text-[#e7edf3]">
                    {fulfillment === 'instant' ? 'Instant activation' : 'Redeemable coupon'}
                  </span>
                </div>
                {fulfillment === 'instant' && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#9aa6b2]">Server</span>
                    <span className="font-mono text-xs text-[#e7edf3]">{guildId || '—'}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-[#1f2730] my-5" />

              {error && (
                <div className="mb-4 px-3.5 py-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 text-xs">
                  {error}
                </div>
              )}

              <button
                type="button"
                onClick={startPayment}
                disabled={status === 'creating' || (fulfillment === 'instant' && !guildId)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-semibold shadow-sm shadow-emerald-900/40 transition-all active:scale-[0.99]"
              >
                {status === 'creating' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Creating order…</span>
                  </>
                ) : (
                  <>
                    <Wallet className="w-4 h-4" />
                    <span>Pay ${selected.price.toFixed(2)} with USDT / USDC</span>
                  </>
                )}
              </button>

              {status === 'widget' && (
                <p className="mt-3 text-[11px] text-[#9aa6b2] font-mono text-center">
                  Complete the payment in the DePay window. You'll be redirected after it confirms.
                </p>
              )}

              <div className="mt-5 pt-4 border-t border-[#1f2730] space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-[#9aa6b2] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Payments go directly to the Vektra wallet</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#9aa6b2] font-mono">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Accepted on Polygon, Base, Ethereum &amp; BNB Chain</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#9aa6b2] font-mono">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    Questions?{' '}
                    <a
                      href="https://discord.gg/AMUaEFxTDE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      Join the Discord
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
