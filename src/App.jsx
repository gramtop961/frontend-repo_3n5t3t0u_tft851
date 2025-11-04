import { useState } from 'react';
import AuthBar from './components/AuthBar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import RetroTerminalCTA from './components/RetroTerminalCTA';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

export default function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <div className="min-h-screen bg-black text-neutral-200">
      <div className="pointer-events-none fixed inset-0 opacity-[0.15]" style={{backgroundImage:'radial-gradient(circle at center, rgba(16,185,129,.25), transparent 60%)'}} />
      <AuthBar onAuthChange={(u, t) => { setUser(u); setToken(t); }} />
      <main className="pt-14">
        <Hero />
        <ProductGrid />
        <RetroTerminalCTA />
        <Dashboard user={user} token={token} />
      </main>
      <Footer />
    </div>
  );
}
