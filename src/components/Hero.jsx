import Spline from '@splinetool/react-spline';
import { ArrowRight, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(0,0,0,0)_0%,rgba(10,10,11,0.2)_40%,rgba(10,10,11,0.7)_70%,rgba(10,10,11,1)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0B]/30 to-[#0A0A0B]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-24 md:pt-32 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-orange-500 to-red-600 shadow-[0_0_40px_rgba(234,88,12,0.35)]" />
          <span className="text-sm uppercase tracking-[0.2em] text-white/70">Vanish Auth</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          Auth that disappears.
        </h1>
        <p className="mt-5 max-w-2xl text-white/70 text-lg md:text-xl">
          Ship passwordless biometric logins in one line. Secure, UX-loved, and enterprise-ready from day one.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a href="#code" className="group inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 font-medium shadow-sm hover:opacity-95 transition">
            Get started <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-white/90 hover:bg-white/5 transition">
            <Github size={18} /> Star on GitHub
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50">
          <span>FIDO2 + WebAuthn</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Face ID • Touch ID • Passkeys</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>SDKs for Web, iOS, Android</span>
        </div>
      </div>
    </section>
  );
}
