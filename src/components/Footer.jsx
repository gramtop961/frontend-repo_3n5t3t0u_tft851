export default function Footer() {
  return (
    <footer className="mt-12 border-t border-emerald-700/30">
      <div className="max-w-6xl mx-auto px-4 py-8 flex items-center justify-between">
        <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} NEONX Markets</p>
        <nav className="flex gap-4 text-neutral-300 text-sm">
          <a href="#market" className="hover:text-white">Market</a>
          <a href="#dashboard" className="hover:text-white">Dashboard</a>
          <a href="/test" className="hover:text-white">Backend Test</a>
        </nav>
      </div>
    </footer>
  );
}
