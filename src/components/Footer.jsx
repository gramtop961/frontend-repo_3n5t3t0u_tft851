import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-black py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(16,185,129,0.06) 0, rgba(16,185,129,0.06) 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 3px)'
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-emerald-300/80 sm:flex-row sm:text-left">
        <div className="font-semibold text-emerald-300">NEON DESK</div>
        <nav className="flex gap-6">
          <a href="#market" className="hover:text-emerald-200">Market</a>
          <a href="#secure" className="hover:text-emerald-200">Security</a>
          <a href="/test" className="hover:text-emerald-200">Status</a>
        </nav>
        <div className="text-sm">© {new Date().getFullYear()} Neon Desk. All rights reserved.</div>
      </div>
    </footer>
  );
}
