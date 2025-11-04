import React from 'react';

const assets = [
  { symbol: 'BTC', name: 'Bitcoin', price: 68231.21, change: +2.14 },
  { symbol: 'ETH', name: 'Ethereum', price: 3685.42, change: -1.02 },
  { symbol: 'SOL', name: 'Solana', price: 172.88, change: +5.66 },
  { symbol: 'ADA', name: 'Cardano', price: 0.62, change: +0.84 },
  { symbol: 'DOT', name: 'Polkadot', price: 7.82, change: -0.45 },
  { symbol: 'AVAX', name: 'Avalanche', price: 41.35, change: +3.27 },
];

function formatNumber(n) {
  return n >= 1000 ? n.toLocaleString(undefined, { maximumFractionDigits: 2 }) : n.toFixed(2);
}

export default function ProductGrid() {
  return (
    <section id="market" className="relative w-full bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-emerald-300">Market</h2>
            <p className="text-emerald-200/70">Live-looking demo prices for a neon trading floor vibe.</p>
          </div>
          <button className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200 transition hover:bg-emerald-500/20">
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {assets.map((a) => (
            <article
              key={a.symbol}
              className="group rounded-xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent p-5 shadow-[0_0_0_1px_rgba(16,185,129,0.15)] transition hover:border-emerald-400/40 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.35)]"
            >
              <header className="mb-4 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-emerald-200">{a.symbol}</span>
                  <span className="text-sm text-emerald-300/60">{a.name}</span>
                </div>
                <span
                  className={
                    'rounded-md px-2 py-0.5 text-xs ' +
                    (a.change >= 0
                      ? 'bg-emerald-500/15 text-emerald-300'
                      : 'bg-red-500/15 text-red-300')
                  }
                >
                  {a.change >= 0 ? '+' : ''}
                  {a.change.toFixed(2)}%
                </span>
              </header>

              <div className="mb-4 text-3xl font-bold text-emerald-100">${formatNumber(a.price)}</div>

              <div className="flex items-center justify-between">
                <button className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-emerald-200 transition hover:bg-emerald-500/20">
                  Buy
                </button>
                <button className="rounded-md border border-emerald-400/20 px-4 py-2 text-emerald-300 transition hover:border-emerald-400/50">
                  Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
