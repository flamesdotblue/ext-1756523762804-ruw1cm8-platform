import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20 bg-[#0A0A0B]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_120%_at_0%_0%,rgba(234,88,12,0.15),transparent_50%),radial-gradient(60%_120%_at_100%_100%,rgba(244,63,94,0.12),transparent_50%)]" />
          <div className="relative z-[1] px-6 py-12 md:px-10 md:py-16">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Start free</p>
            <h3 className="mt-2 text-2xl md:text-3xl font-semibold">Add passkeys in minutes</h3>
            <p className="mt-2 max-w-2xl text-white/70">Grab a sandbox key, paste a single line, and let your users sign in with Face ID or Touch ID. No passwords, no OTPs, no problem.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a href="#code" className="group inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 font-medium shadow-sm hover:opacity-95 transition">
                Generate sandbox key <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#docs" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-white/90 hover:bg-white/5 transition">
                Read the docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
