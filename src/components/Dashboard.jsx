import { useEffect, useState } from 'react';
import { Shield, Settings, LayoutGrid } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Dashboard({ token, user }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;
    fetch(`${BACKEND_URL}/dashboard`, { headers: { Authorization: `Bearer ${token}` } })
      .then(async (r) => {
        if (!r.ok) throw new Error('Failed to load dashboard');
        return r.json();
      })
      .then(setData)
      .catch((e) => setError(e.message));
  }, [token]);

  if (!token) return null;

  return (
    <section id="dashboard" className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-emerald-300">Dashboard</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded bg-neutral-900 border border-emerald-700/40 text-neutral-200 inline-flex items-center gap-2"><Settings size={16}/> Settings</button>
          <button className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white inline-flex items-center gap-2"><Shield size={16}/> Upgrade</button>
        </div>
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-5 rounded-lg bg-neutral-900 border border-emerald-700/30">
          <div className="text-neutral-400 text-sm">Welcome</div>
          <div className="mt-1 text-white font-mono">{user?.name || user?.email}</div>
          <p className="mt-2 text-neutral-300 text-sm">{data?.greeting}</p>
        </div>
        <div className="p-5 rounded-lg bg-neutral-900 border border-emerald-700/30">
          <div className="text-neutral-400 text-sm">Balance</div>
          <div className="mt-1 text-3xl font-bold text-white">${data?.widgets?.balanceUSD?.toLocaleString?.() || '—'}</div>
        </div>
        <div className="p-5 rounded-lg bg-neutral-900 border border-emerald-700/30">
          <div className="text-neutral-400 text-sm">Shortcuts</div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {data?.shortcuts?.map((s) => (
              <a key={s.label} href={s.href} className="px-2 py-2 rounded bg-black border border-emerald-700/40 text-emerald-300 text-sm flex items-center gap-1 justify-center"><LayoutGrid size={14}/>{s.label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-5 rounded-lg bg-neutral-900 border border-emerald-700/30">
        <div className="text-neutral-400 text-sm mb-2">Holdings</div>
        <div className="grid md:grid-cols-2 gap-3">
          {data?.widgets?.holdings?.map((h) => (
            <div key={h.symbol} className="p-4 rounded bg-black border border-emerald-700/30 flex items-center justify-between">
              <div>
                <div className="font-mono text-white">{h.symbol}</div>
                <div className="text-neutral-400 text-sm">{h.amount} coins</div>
              </div>
              <div className="text-white font-semibold">${h.value.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
