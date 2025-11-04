import React from 'react';
import { Shield, Zap, CreditCard, Lock } from 'lucide-react';

export default function RetroTerminalCTA() {
  return (
    <section id="learn" className="relative mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-xl border border-emerald-500/30 bg-black/60 p-6 shadow-[0_0_40px_rgba(16,185,129,0.15)] backdrop-blur">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-mono text-lg text-emerald-300">/terminal/log</h3>
          <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">CONNECTED</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-emerald-500/20 bg-black/50 p-5">
            <p className="font-mono text-emerald-300/90">$ connect --secure</p>
            <p className="mt-2 font-mono text-emerald-200/80">› session established</p>
            <p className="mt-2 font-mono text-emerald-200/80">› market feed: OK</p>
            <p className="mt-2 font-mono text-emerald-200/80">› latency: 12ms</p>
            <p className="mt-2 font-mono text-emerald-200/80">› status: <span className="animate-pulse text-emerald-300">READY</span><span className="ml-1 inline-block h-5 w-1.5 animate-pulse bg-emerald-400 align-middle" /></p>
          </div>

          <ul className="grid gap-4">
            <li className="flex items-start gap-3">
              <span className="mt-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-300"><Shield size={18} /></span>
              <div>
                <p className="font-medium text-emerald-200">Secure by default</p>
                <p className="text-sm text-emerald-200/70">Two‑factor auth, cold storage, and real‑time risk checks keep your funds safe.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-300"><Zap size={18} /></span>
              <div>
                <p className="font-medium text-emerald-200">Blazing fast</p>
                <p className="text-sm text-emerald-200/70">Optimized engine routes orders in milliseconds with transparent fees.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-300"><CreditCard size={18} /></span>
              <div>
                <p className="font-medium text-emerald-200">Flexible payments</p>
                <p className="text-sm text-emerald-200/70">On‑ramp via card and bank transfer. Off‑ramp to your wallet anytime.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-300"><Lock size={18} /></span>
              <div>
                <p className="font-medium text-emerald-200">Self‑custody friendly</p>
                <p className="text-sm text-emerald-200/70">Withdraw to hardware wallets and maintain full control over your keys.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-sm text-emerald-200/70">Hint: Use the demo market above to simulate purchases.</p>
          <a href="#market" className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400">Open Market</a>
        </div>
      </div>
    </section>
  );
}
