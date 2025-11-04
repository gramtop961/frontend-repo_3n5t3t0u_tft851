import React from 'react';
import { CreditCard, Lock, Zap } from 'lucide-react';

const logs = [
  '[SYS] initializing matching-engine…',
  '[OK ] peers synced [12/12] latency: 12ms',
  '[OK ] APM traces live. risk checks: PASS',
  '[OK ] cold wallet multi-sig online',
];

export default function RetroTerminalCTA() {
  return (
    <section id="secure" className="relative w-full bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Terminal */}
          <div className="rounded-xl border border-emerald-500/30 bg-black/60 p-5 shadow-[inset_0_0_40px_rgba(16,185,129,0.08)]">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs uppercase tracking-widest text-emerald-400/70">/var/log/market</span>
            </div>
            <div className="h-48 overflow-hidden rounded-lg border border-emerald-500/20 bg-black/60 p-3 font-mono text-sm text-emerald-300">
              {logs.map((l, i) => (
                <div key={i} className="whitespace-pre">
                  {l}
                </div>
              ))}
              <div className="mt-2 animate-pulse">$ _</div>
            </div>
          </div>

          {/* Feature bullets */}
          <div className="grid content-center gap-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-300">
                <Zap size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-200">Ultra-low latency</h3>
                <p className="text-emerald-200/70">Optimized order routing with sub-15ms matching for a snappy desk feel.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-300">
                <Lock size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-200">Security-first custody</h3>
                <p className="text-emerald-200/70">Multi-sig cold storage with continuous monitoring and circuit breakers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-300">
                <CreditCard size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-200">Frictionless checkout</h3>
                <p className="text-emerald-200/70">On-ramp/off-ramp with instant settlement. Crypto should feel easy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
