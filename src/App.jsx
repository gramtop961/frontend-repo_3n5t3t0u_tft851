import React from 'react';
import AuthBar from './components/AuthBar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import RetroTerminalCTA from './components/RetroTerminalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-emerald-100">
      {/* Global CRT feel via a subtle vignette and scanlines (non-interactive overlay) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(16,185,129,0.04) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.9) 100%), repeating-linear-gradient(0deg, rgba(16,185,129,0.03) 0, rgba(16,185,129,0.03) 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 3px)'
        }}
      />

      <AuthBar />

      <main className="relative z-10">
        <Hero />
        <ProductGrid />
        <RetroTerminalCTA />
      </main>

      <Footer />
    </div>
  );
}
