import React from 'react';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import RetroTerminalCTA from './components/RetroTerminalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-emerald-100">
      {/* Subtle retro scanline background */}
      <div className="fixed inset-0 -z-0 pointer-events-none opacity-[0.07] [background-image:repeating-linear-gradient(0deg,rgba(16,185,129,0.6)_0,rgba(16,185,129,0.6)_1px,transparent_1px,transparent_3px)]" />

      <Hero />
      <main>
        <ProductGrid />
        <RetroTerminalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
