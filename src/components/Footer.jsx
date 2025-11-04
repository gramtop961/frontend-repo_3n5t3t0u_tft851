import React from 'react';

export default function Footer() {
  return (
    <footer className="relative border-t border-emerald-400/20 bg-black/80">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-sm bg-emerald-400/20 ring-1 ring-emerald-400/50" />
            <div className="text-emerald-300 font-semibold tracking-wide">RetroMarket</div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-emerald-200/70">
            <a href="#market" className="hover:text-emerald-300">Market</a>
            <a href="#terminal" className="hover:text-emerald-300">Security</a>
            <a href="#" className="hover:text-emerald-300">Fees</a>
            <a href="#" className="hover:text-emerald-300">Support</a>
          </nav>
        </div>
        <div className="mt-8 text-center text-xs text-emerald-200/50">© {new Date().getFullYear()} RetroMarket. All rights reserved.</div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen" style={{ backgroundImage: `linear-gradient(rgba(16,185,129,0.08) 1px, transparent 1px)`, backgroundSize: '100% 3px' }} />
    </footer>
  );
}
