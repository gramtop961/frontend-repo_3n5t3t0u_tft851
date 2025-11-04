import { Shield, Zap, CreditCard } from 'lucide-react';

export default function RetroTerminalCTA() {
  return (
    <section className="relative py-12">
      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay" style={{backgroundImage:'linear-gradient(rgba(16,185,129,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,.08) 1px, transparent 1px)', backgroundSize:'24px 24px'}} />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-lg bg-black border border-emerald-700/30">
          <div className="font-mono text-emerald-300 text-sm">$ tail -f system.log</div>
          <div className="mt-3 h-48 overflow-hidden rounded bg-neutral-950 p-3 ring-1 ring-emerald-700/20">
            <pre className="text-emerald-400 text-xs leading-relaxed">
              {`[OK] Boot sequence complete\n[OK] Connected to chain nodes\n[OK] Latency: 24ms\n[OK] Orders queue synchronized\n[OK] Risk engine warmed\n[OK] User auth service online`}
            </pre>
          </div>
        </div>
        <div className="grid gap-4">
          <Feature icon={<Shield className="text-emerald-400" size={18} />} title="Secure by design" desc="JWT auth and encrypted passwords keep your account safe." />
          <Feature icon={<Zap className="text-emerald-400" size={18} />} title="Blazing fast" desc="Vite + FastAPI deliver instant feedback and low latency." />
          <Feature icon={<CreditCard className="text-emerald-400" size={18} />} title="Simple checkout" desc="Streamlined purchase flows for premium assets." />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="p-5 rounded-lg bg-neutral-900 border border-emerald-700/30">
      <div className="flex items-center gap-2 text-emerald-300">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-neutral-300 text-sm">{desc}</p>
    </div>
  );
}
