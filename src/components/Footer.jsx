import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-emerald-500/20 bg-black/60">
      <div className="mx-auto max-w-6xl px-6 py-8 text-emerald-200/70">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-mono text-sm text-emerald-300">RETRO • CRYPTO • MARKET</span>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#market" className="hover:text-emerald-300">Market</a>
            <a href="#learn" className="hover:text-emerald-300">Learn</a>
            <a href="#" className="hover:text-emerald-300">Status</a>
            <a href="#" className="hover:text-emerald-300">Privacy</a>
          </nav>
        </div>
        <p className="mt-4 text-xs text-emerald-200/50">© {new Date().getFullYear()} Retro Crypto Market. For demo purposes only.</p>
      </div>
    </footer>
  );
}
