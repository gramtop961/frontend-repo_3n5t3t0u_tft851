import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* Spline 3D scene as full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* CRT vignette + scanlines overlay (non-interactive) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.95) 100%), repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0, rgba(0,0,0,0.25) 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 3px)'
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="pointer-events-auto mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-4 bg-gradient-to-b from-emerald-300 to-emerald-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Neon Crypto Marketplace
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-emerald-200/80">
            Trade digital assets in a retro-futuristic terminal. Low latency. High vibes. Fully interactive 3D cover.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#market"
              className="inline-flex items-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-emerald-200 transition hover:bg-emerald-500/20"
            >
              <Zap size={18} />
              Explore Market
            </a>
            <a
              href="#secure"
              className="inline-flex items-center gap-2 rounded-md border border-emerald-400/30 px-5 py-3 text-emerald-300 transition hover:border-emerald-400/60"
            >
              <Shield size={18} />
              Why Secure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
