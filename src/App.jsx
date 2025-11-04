import React from 'react';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import RetroTerminalCTA from './components/RetroTerminalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-emerald-100">
      {/* CRT vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />

      <Hero />
      <main className="relative">
        <ProductGrid />
        <RetroTerminalCTA />
      </main>
      <Footer />
    </div>
  );
}
