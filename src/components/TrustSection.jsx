import { ShieldCheck, Lock, Check } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0A0A0B] to-[#0A0A0B]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Trust & Compliance</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Security you can show your CISO</h2>
          <p className="mt-2 max-w-2xl text-white/60">We handle the gnarly bits so you don’t have to. Compliance-ready and privacy-first from the start.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-xl border border-white/10 p-5 bg-white/5">
            <div className="flex items-center gap-2 text-white/80"><ShieldCheck size={18} /><span className="font-medium">Compliance</span></div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/>SOC 2 Type II in progress</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/>ISO 27001 ready controls</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/>GDPR & CCPA aligned</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 p-5 bg-white/5">
            <div className="flex items-center gap-2 text-white/80"><Lock size={18} /><span className="font-medium">Security</span></div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/>End-to-end challenge/response</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/>Hardware-backed key storage</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/>Phishing-resistant by design</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 p-5 bg-white/5">
            <div className="flex items-center gap-2 text-white/80"><ShieldCheck size={18} /><span className="font-medium">Reliability</span></div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/>Global edge infra</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/>99.99% uptime target</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-green-400"/>Audit logs & tracing</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/60">
          {['Acme Bank', 'Stratus Cloud', 'NovaPay', 'Vector AI'].map((name) => (
            <div key={name} className="flex h-14 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
