import { useEffect, useState } from 'react';
import { LogIn, LogOut, User } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function AuthBar({ onAuthChange }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    fetch(`${BACKEND_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (r) => {
        if (!r.ok) throw new Error('Auth failed');
        return r.json();
      })
      .then((u) => {
        setUser(u);
        onAuthChange?.(u, token);
      })
      .catch(() => {
        localStorage.removeItem('token');
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const endpoint = mode === 'login' ? 'login' : 'register';
      const body = mode === 'login' ? { email: form.email, password: form.password } : form;
      const res = await fetch(`${BACKEND_URL}/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || 'Authentication failed');
      localStorage.setItem('token', data.access_token);
      const me = await fetch(`${BACKEND_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${data.access_token}` },
      }).then((r) => r.json());
      setUser(me);
      onAuthChange?.(me, data.access_token);
      setOpen(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    onAuthChange?.(null, null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-emerald-500/30">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 text-emerald-400">
          <span className="font-mono">NEONX</span>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-emerald-300">
                <User size={18} />
                <span className="font-mono text-sm">{user.name || user.email}</span>
              </div>
              <button onClick={logout} className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white">
                <LogOut size={16} /> Logout
              </button>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white">
              <LogIn size={16} /> Sign in
            </button>
          )}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-md p-6 bg-neutral-900 border border-emerald-600/40 rounded-lg shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-emerald-300 font-semibold">{mode === 'login' ? 'Sign in' : 'Create account'}</h3>
              <button onClick={() => setOpen(false)} className="text-neutral-400 hover:text-white">✕</button>
            </div>

            <div className="flex gap-2 mb-4">
              <button onClick={() => setMode('login')} className={`flex-1 py-2 rounded ${mode==='login'?'bg-emerald-600 text-white':'bg-neutral-800 text-neutral-300'}`}>Login</button>
              <button onClick={() => setMode('register')} className={`flex-1 py-2 rounded ${mode==='register'?'bg-emerald-600 text-white':'bg-neutral-800 text-neutral-300'}`}>Register</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {mode === 'register' && (
                <div>
                  <label className="block text-sm text-neutral-300 mb-1">Name</label>
                  <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="w-full px-3 py-2 rounded bg-black border border-neutral-700 text-white focus:outline-none focus:border-emerald-500" required />
                </div>
              )}
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Email</label>
                <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="w-full px-3 py-2 rounded bg-black border border-neutral-700 text-white focus:outline-none focus:border-emerald-500" required />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Password</label>
                <input type="password" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} className="w-full px-3 py-2 rounded bg-black border border-neutral-700 text-white focus:outline-none focus:border-emerald-500" required />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button disabled={loading} className="w-full py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-60">
                {loading ? 'Please wait…' : mode === 'login' ? 'Sign in' : 'Create account'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
