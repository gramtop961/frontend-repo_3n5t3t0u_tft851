const assets = [
  { symbol: 'BTC', name: 'Bitcoin', price: 26834.15, change: +2.4 },
  { symbol: 'ETH', name: 'Ethereum', price: 1693.42, change: -1.1 },
  { symbol: 'SOL', name: 'Solana', price: 22.57, change: +0.6 },
  { symbol: 'ADA', name: 'Cardano', price: 0.26, change: +3.2 },
];

export default function ProductGrid() {
  return (
    <section id="market" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold text-emerald-300 mb-6">Market</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {assets.map((a) => (
          <div key={a.symbol} className="p-4 rounded-lg bg-neutral-900 border border-emerald-700/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-400">{a.name}</p>
                <p className="font-mono text-lg text-white">{a.symbol}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs ${a.change>=0?'bg-emerald-500/20 text-emerald-300':'bg-red-500/20 text-red-300'}`}>{a.change>=0?'+':''}{a.change}%</span>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <p className="text-2xl font-bold text-white">${a.price.toLocaleString()}</p>
              <button className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-sm">Buy</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
