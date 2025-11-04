import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[65vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6e3K0n1bCkWvFpgV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/10 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-600">Trade Crypto</span>
          <span className="block text-white/80">in Retro Neon Style</span>
        </h1>
        <p className="mt-3 text-neutral-300 max-w-2xl">Experience a stylized marketplace with scanlines and a CRT glow. Secure auth, fast API, and a 3D cover powered by Spline.</p>
        <div className="mt-6 flex gap-3">
          <a href="#market" className="px-5 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white">Explore Market</a>
          <a href="#dashboard" className="px-5 py-2 rounded border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10">Go to Dashboard</a>
        </div>
      </div>
    </section>
  );
}
