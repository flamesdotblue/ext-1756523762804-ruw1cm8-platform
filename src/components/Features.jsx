import { Shield, Fingerprint, Zap, Lock, Cog, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Biometric first',
    desc: 'Passkeys, Touch ID, Face ID, and platform authenticators out of the box.',
  },
  {
    icon: Shield,
    title: 'Defense-grade security',
    desc: 'Built on WebAuthn + FIDO2 with hardware-backed key storage and replay protection.',
  },
  {
    icon: Zap,
    title: 'One-line integration',
    desc: 'Drop-in API and React hooks. Go live in minutes, not sprints.',
  },
  {
    icon: Lock,
    title: 'Privacy by design',
    desc: 'No passwords, no secrets to leak. We never touch biometric data.',
  },
  {
    icon: Cog,
    title: 'Dev-friendly',
    desc: 'Type-safe SDKs, exemplary docs, and sandbox keys for fast iteration.',
  },
  {
    icon: CheckCircle,
    title: 'Enterprise ready',
    desc: 'SLA, SSO, audit logs, and compliance packs when you need them.',
  },
];

export default function Features() {
  return (
    <section className="relative py-20 bg-[#0A0A0B]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Why Vanish</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Login users without passwords, secrets, or pain</h2>
          <p className="mt-2 max-w-2xl text-white/60">Replace email codes and passwords with passkeys in a few lines. Your users tap, and they’re in.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-white/20 transition">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
                <Icon size={18} className="text-white/80" />
              </div>
              <h3 className="font-medium">{title}</h3>
              <p className="mt-1.5 text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
