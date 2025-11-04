import React from 'react';
import { Shield, Zap, CreditCard, Lock } from 'lucide-react';

const rows = [
  '[INIT] Connecting to secure node... OK',
  '[SYNC] Pulling order book from edge cache... OK',
  '[RPC] Verifying smart escrow contracts... PASSED',
  '[TLS] Handshake + forward secrecy... ENABLED',
];

const features = [
  { icon: Shield, title: 'Insurance-grade', text: 'Cold-storage custody and audits.' },
  { icon: Zap, title: 'Ultra-fast', text: 'Low-latency matching engine.' },
  { icon: CreditCard, title: 'Instant checkout', text: 'Card, bank, or wallet.' },
  { icon: Lock, title: 'Private by design', text: '2FA and encrypted sessions.' },
];

export default function RetroTerminalCTA() {
  return (
    <section id="terminal" className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-emerald-400/30 bg-black/60 shadow-[0_0_0_1px_rgba(16,185,129,0.08)_inset]">
          <div className="border-b border-emerald-400/20 bg-black/50 px-4 py-2 text-xs text-emerald-300/80">retro-terminal.log</div>
          <div className="space-y-2 p-4 font-mono text-sm leading-relaxed text-emerald-300">
            {rows.map((r, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-emerald-400/70">$</span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <h3 className="text-2xl font-bold text-emerald-300">The safest place to buy crypto</h3>
          <p className="mt-2 text-emerald-200/80">
            We blend modern security with a nostalgic interface. Trade confidently with battle-tested infrastructure and transparent fees.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-3 rounded-lg border border-emerald-400/20 bg-black/50 p-4">
                <div className="mt-0.5">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold text-emerald-200">{title}</div>
                  <div className="text-sm text-emerald-200/70">{text}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="#market" className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-400/50 bg-emerald-500/10 px-5 py-3 font-medium text-emerald-200 hover:bg-emerald-500/20">
            Start Trading
          </a>
        </div>
      </div>
    </section>
  );
}
