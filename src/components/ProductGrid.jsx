import React from 'react';

const demoCoins = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', price: 67250.32, change: 2.4 },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', price: 3120.11, change: -1.2 },
  { id: 'sol', name: 'Solana', symbol: 'SOL', price: 168.45, change: 4.8 },
  { id: 'ada', name: 'Cardano', symbol: 'ADA', price: 0.62, change: 0.9 },
  { id: 'dot', name: 'Polkadot', symbol: 'DOT', price: 7.14, change: -0.7 },
  { id: 'link', name: 'Chainlink', symbol: 'LINK', price: 14.92, change: 3.1 },
];

function formatPrice(value) {
  if (value >= 1000) return `$${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  return `$${value.toFixed(2)}`;
}

export default function ProductGrid() {
  return (
    <section id="market" className="relative mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-emerald-300">Market</h2>
          <p className="mt-1 text-emerald-200/70">Top assets with live-like pricing (demo).</p>
        </div>
        <div className="text-xs text-emerald-200/50">Data refreshed every view</div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demoCoins.map((coin) => (
          <div key={coin.id} className="group relative overflow-hidden rounded-xl border border-emerald-400/20 bg-black/60 p-5 shadow-[0_0_0_1px_rgba(16,185,129,0.08)_inset] transition hover:border-emerald-400/40">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-wider text-emerald-400/80">{coin.symbol}</div>
                <div className="text-lg font-semibold text-emerald-200">{coin.name}</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-emerald-300">{formatPrice(coin.price)}</div>
                <div className={"text-sm " + (coin.change >= 0 ? 'text-emerald-400' : 'text-red-400')}>{coin.change >= 0 ? '+' : ''}{coin.change}%</div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="text-xs text-emerald-200/60">Instant checkout</div>
              <button className="rounded-md border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/20">
                Buy
              </button>
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(16,185,129,0.08), transparent 40%)' }} />
          </div>
        ))}
      </div>
    </section>
  );
}
