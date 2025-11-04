import React, { useEffect, useState } from 'react'
import { User, LogIn, LogOut } from 'lucide-react'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AuthBar() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) fetchMe(token)
  }, [])

  async function fetchMe(token) {
    try {
      const res = await fetch(`${BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.ok) {
        const data = await res.json()
        setUser(data)
      } else {
        localStorage.removeItem('token')
      }
    } catch (e) {
      // ignore
    }
  }

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const url = mode === 'login' ? `${BASE_URL}/auth/login` : `${BASE_URL}/auth/register`
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Authentication failed')

      localStorage.setItem('token', data.access_token)
      setUser({ name: data.name, email: data.email })
      setOpen(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function logout() {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <div className="fixed left-0 right-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-emerald-300 font-semibold tracking-wide">NEON DESK</a>
        {user ? (
          <div className="flex items-center gap-3 text-emerald-200">
            <User size={18} />
            <span className="hidden sm:inline">{user.name}</span>
            <button onClick={logout} className="inline-flex items-center gap-1 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 hover:bg-emerald-500/20">
              <LogOut size={16} />
              <span className="text-sm">Log out</span>
            </button>
          </div>
        ) : (
          <button
            onClick={() => { setMode('login'); setOpen(true) }}
            className="inline-flex items-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-emerald-200 hover:bg-emerald-500/20"
          >
            <LogIn size={18} />
            Sign in
          </button>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-xl border border-emerald-500/30 bg-black p-6 text-emerald-100 shadow-[0_0_0_1px_rgba(16,185,129,0.25)]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-emerald-200">
                {mode === 'login' ? 'Welcome back' : 'Create account'}
              </h3>
              <button onClick={() => setOpen(false)} className="text-emerald-300/70 hover:text-emerald-300">✕</button>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="mb-1 block text-sm text-emerald-300/80">Name</label>
                  <input name="name" required className="w-full rounded-md border border-emerald-500/30 bg-black/60 p-2 text-emerald-100 outline-none focus:border-emerald-400" />
                </div>
              )}
              <div>
                <label className="mb-1 block text-sm text-emerald-300/80">Email</label>
                <input type="email" name="email" required className="w-full rounded-md border border-emerald-500/30 bg-black/60 p-2 text-emerald-100 outline-none focus:border-emerald-400" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-emerald-300/80">Password</label>
                <input type="password" name="password" required className="w-full rounded-md border border-emerald-500/30 bg-black/60 p-2 text-emerald-100 outline-none focus:border-emerald-400" />
              </div>

              {error && <div className="rounded-md border border-red-400/40 bg-red-500/10 p-2 text-sm text-red-200">{error}</div>}

              <button disabled={loading} className="w-full rounded-md border border-emerald-500/40 bg-emerald-500/10 p-2 text-emerald-200 hover:bg-emerald-500/20 disabled:opacity-50">
                {loading ? 'Please wait…' : (mode === 'login' ? 'Sign in' : 'Create account')}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-emerald-300/80">
              {mode === 'login' ? (
                <>
                  New here?{' '}
                  <button className="underline hover:text-emerald-200" onClick={() => setMode('register')}>Create an account</button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button className="underline hover:text-emerald-200" onClick={() => setMode('login')}>Sign in</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
