import React from 'react';

const products = [
  { symbol: 'BTC', name: 'Bitcoin', price: 67350, change: 1.2 },
  { symbol: 'ETH', name: 'Ethereum', price: 3125, change: -0.8 },
  { symbol: 'SOL', name: 'Solana', price: 158.44, change: 3.6 },
  { symbol: 'ADA', name: 'Cardano', price: 0.48, change: 0.4 },
  { symbol: 'AVAX', name: 'Avalanche', price: 36.2, change: -1.1 },
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.12, change: 8.9 },
];

function PriceTag({ value }) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: value < 1 ? 'USD' : 'USD',
    maximumFractionDigits: value < 1 ? 4 : 2,
  }).format(value);
  return <span>{formatted}</span>;
}

export default function ProductGrid() {
  return (
    <section id="market" className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-300">Market</h2>
          <p className="mt-1 text-sm text-emerald-200/70">Tap a coin to start a purchase. Prices are for demo.</p>
        </div>
        <div className="text-right">
          <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">24h</span>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.symbol}
            className="group rounded-lg border border-emerald-500/20 bg-black/50 p-5 shadow-[0_0_30px_rgba(16,185,129,0.08)] backdrop-blur transition hover:border-emerald-400/40 hover:shadow-[0_0_50px_rgba(16,185,129,0.25)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-sm text-emerald-400/90">{p.symbol}</span>
                <h3 className="text-lg font-medium text-emerald-200">{p.name}</h3>
              </div>
              <span
                className={
                  'rounded px-2 py-1 text-xs font-medium ' +
                  (p.change >= 0
                    ? 'bg-emerald-500/15 text-emerald-300'
                    : 'bg-red-500/10 text-red-300')
                }
              >
                {p.change >= 0 ? '+' : ''}{p.change}%
              </span>
            </div>

            <div className="mt-3 flex items-end justify-between">
              <div className="text-2xl font-semibold text-emerald-300">
                <PriceTag value={p.price} />
              </div>
              <button
                className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20"
                onClick={() => alert(`Buying ${p.symbol} coming soon!`)}
              >
                Buy
              </button>
            </div>

            <div className="mt-4 h-1.5 w-full overflow-hidden rounded bg-emerald-500/10">
              <div
                className="h-full bg-emerald-400 transition-all duration-700 group-hover:w-[85%]"
                style={{ width: `${Math.min(95, Math.max(15, Math.abs(p.change) * 8))}%` }}
              />
            </div>

            <p className="mt-3 text-xs text-emerald-200/60">
              Status: <span className="text-emerald-300">ONLINE</span> · Fees from 0.1%
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
