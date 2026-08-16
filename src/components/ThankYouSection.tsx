import React, {useEffect, useState} from 'react';
import {
  CheckCircle2,
  XCircle,
  Loader2,
  Ticket,
  ShieldCheck,
  MessageSquare,
  ArrowLeft,
  Clock,
} from 'lucide-react';

const CHECKOUT_API = 'https://dashboard.vektra.games/api/checkout';

interface OrderStatus {
  status: string;
  plan: string;
  amount: number;
  currency: string;
  coupon_code: string | null;
  tx_hash: string | null;
}

const PLAN_LABELS: Record<string, string> = {
  starter: 'Starter',
  pro: 'Pro',
  pro_plus: 'Pro+',
};

export function ThankYouSection() {
  const orderRef = new URLSearchParams(window.location.search).get('order') || '';
  const [order, setOrder] = useState<OrderStatus | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!orderRef) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const poll = async () => {
      try {
        const response = await fetch(`${CHECKOUT_API}/status?order=${encodeURIComponent(orderRef)}`);
        if (response.ok) {
          const data = await response.json();
          if (!cancelled) {
            setOrder(data);
            if (data.status === 'pending' || data.status === 'created' || data.status === 'traced') {
              timer = setTimeout(poll, 3000);
            }
          }
        } else if (response.status === 404) {
          if (!cancelled) setError('Order not found. Check the link you used.');
        } else {
          if (!cancelled) setError('Could not check the order status.');
        }
      } catch {
        if (!cancelled) {
          setError('Could not reach the order service. Check back in a moment.');
          timer = setTimeout(poll, 5000);
        }
      }
    };

    poll();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [orderRef]);

  const planLabel = order ? PLAN_LABELS[order.plan] || order.plan : '';

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#9aa6b2] hover:text-[#e7edf3] transition-colors font-mono mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to vektra.games
        </a>

        {!orderRef && (
          <div className="rounded-2xl bg-[#11161a] border border-[#1f2730] p-10 text-center">
            <p className="text-sm text-[#9aa6b2]">No order reference found in this link.</p>
          </div>
        )}

        {orderRef && !order && !error && (
          <div className="rounded-2xl bg-[#11161a] border border-[#1f2730] p-10 text-center space-y-4">
            <Loader2 className="w-8 h-8 animate-spin text-emerald-400 mx-auto" />
            <div>
              <h1 className="text-xl font-bold text-[#e7edf3]">Checking your payment…</h1>
              <p className="text-xs text-[#9aa6b2] mt-2 font-mono">
                order {orderRef}
              </p>
            </div>
          </div>
        )}

        {error && !order && (
          <div className="rounded-2xl bg-[#11161a] border border-[#1f2730] p-10 text-center space-y-3">
            <XCircle className="w-8 h-8 text-red-400 mx-auto" />
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {order && (
          <div className="rounded-2xl bg-[#11161a] border border-[#1f2730] p-8 sm:p-10 text-center space-y-5">
            {order.status === 'success' && (
              <>
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <div>
                  <h1 className="text-2xl font-bold text-[#e7edf3]">Payment confirmed</h1>
                  <p className="text-sm text-[#9aa6b2] mt-2">
                    Your {planLabel} plan (${Number(order.amount).toFixed(2)}) is ready.
                  </p>
                </div>

                {order.coupon_code ? (
                  <div className="rounded-xl bg-[#0f1714] border border-emerald-500/40 p-5 space-y-3">
                    <div className="flex items-center justify-center gap-2 text-emerald-400">
                      <Ticket className="w-4 h-4" />
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                        Your coupon code
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold tracking-wider text-[#e7edf3] select-all">
                      {order.coupon_code}
                    </div>
                    <p className="text-[11px] text-[#9aa6b2] leading-relaxed">
                      Redeem it in your server with{' '}
                      <code className="text-emerald-400">/premium redeem {order.coupon_code}</code>{' '}
                      (admin only), or gift the code to someone. Valid until redeemed.
                    </p>
                  </div>
                ) : (
                  <div className="rounded-xl bg-[#0f1714] border border-emerald-500/40 p-4">
                    <div className="flex items-center justify-center gap-2 text-emerald-400 mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                        Plan activated
                      </span>
                    </div>
                    <p className="text-[11px] text-[#9aa6b2]">
                      Your server's {planLabel} plan is now live.
                    </p>
                  </div>
                )}

                {order.tx_hash && (
                  <p className="text-[11px] text-[#9aa6b2] font-mono break-all">
                    tx: {order.tx_hash}
                  </p>
                )}
              </>
            )}

            {order.status === 'failed' && (
              <>
                <XCircle className="w-12 h-12 text-red-400 mx-auto" />
                <div>
                  <h1 className="text-2xl font-bold text-[#e7edf3]">Payment failed</h1>
                  <p className="text-sm text-[#9aa6b2] mt-2">
                    The payment didn't go through. Please try again from the checkout page.
                  </p>
                </div>
                <a
                  href="/checkout"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                >
                  Back to checkout
                </a>
              </>
            )}

            {(order.status === 'created' || order.status === 'pending' || order.status === 'traced') && (
              <>
                <Clock className="w-10 h-10 text-[#9aa6b2] mx-auto" />
                <div>
                  <h1 className="text-xl font-bold text-[#e7edf3]">Waiting for payment</h1>
                  <p className="text-xs text-[#9aa6b2] mt-2 font-mono">
                    order {orderRef} — this page updates automatically.
                  </p>
                </div>
              </>
            )}

            <div className="pt-4 border-t border-[#1f2730] flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://discord.gg/AMUaEFxTDE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161c22] hover:bg-[#1f2730] border border-[#1f2730] text-xs font-semibold text-[#e7edf3] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                Need help? Join the Discord
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161c22] hover:bg-[#1f2730] border border-[#1f2730] text-xs font-semibold text-[#e7edf3] transition-colors"
              >
                Back to vektra.games
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
