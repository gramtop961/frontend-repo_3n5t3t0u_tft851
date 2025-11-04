import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette + gradient overlays that won't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_140px_40px_rgba(0,0,0,0.8)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300/90 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Live crypto marketplace
          </div>
          <h1 className="mt-5 font-[700] leading-tight text-4xl md:text-6xl text-emerald-300 drop-shadow-[0_0_30px_rgba(16,185,129,0.35)]">
            Retro Crypto Market
          </h1>
          <p className="mt-4 text-emerald-200/80 md:text-lg">
            Buy and sell digital assets in a neon-green, old-computer inspired interface. Fast, secure, and fun.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#market"
              className="rounded-md bg-emerald-500 px-5 py-3 font-medium text-black shadow-[0_0_25px_rgba(16,185,129,0.6)] transition hover:bg-emerald-400"
            >
              Explore Market
            </a>
            <a
              href="#learn"
              className="rounded-md border border-emerald-500/50 bg-black/30 px-5 py-3 font-medium text-emerald-300 transition hover:bg-emerald-500/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
