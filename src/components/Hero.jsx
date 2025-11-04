import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LCm0hXc0vJwEwE3U/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Safety overlay gradients (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-500/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/40 px-4 py-1 text-emerald-300 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Realtime crypto marketplace
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-emerald-300 drop-shadow-sm sm:text-6xl">
            Trade the future in retro style
          </h1>
          <p className="mt-4 max-w-xl text-emerald-200/80">
            Neon-green vibes on a dark canvas. Secure, fast, and beautifully nostalgic. Buy and sell top crypto assets with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#market" className="group inline-flex items-center gap-2 rounded-lg border border-emerald-400/60 bg-emerald-500/10 px-5 py-3 font-medium text-emerald-200 transition hover:bg-emerald-500/20">
              Explore Market
              <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#terminal" className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-black/40 px-5 py-3 font-medium text-emerald-200/90 hover:border-emerald-400/40">
              Why Us
            </a>
          </div>
        </div>
      </div>

      {/* Scanline / CRT effect */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen" style={{ backgroundImage: `linear-gradient(rgba(16,185,129,0.08) 1px, transparent 1px)`, backgroundSize: '100% 3px' }} />
    </section>
  );
}
