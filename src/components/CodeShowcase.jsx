import { useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';

const snippets = {
  React: `import { useEffect } from 'react'
import { useVanish } from '@vanish/auth-react'

export default function LoginButton(){
  const { signIn } = useVanish({ projectId: process.env.VANISH_ID })
  return (
    <button onClick={() => signIn()}>
      Sign in with Passkey
    </button>
  )
}`,
  JavaScript: `import { Vanish } from '@vanish/auth'

// one line
await Vanish.signIn({ projectId: 'proj_123' })`,
  Node: `import express from 'express'
import { session } from '@vanish/server'

const app = express()
app.post('/callback', session.verify())
app.listen(3000)`,
  cURL: `curl -X POST https://api.vanish.dev/v1/sessions \\
  -H 'Authorization: Bearer sk_test_***' \\
  -d '{"userId":"123"}'`,
};

const tabs = Object.keys(snippets);

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1400); } catch {}
  };
  return (
    <div className="relative rounded-xl border border-white/10 bg-[#0B0B0C]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0B0B0C]/60">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <button onClick={onCopy} className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/5 transition">
          {copied ? <CheckCheck size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-white/90"><code>{code}</code></pre>
    </div>
  );
}

export default function CodeShowcase() {
  const [active, setActive] = useState('JavaScript');
  return (
    <section id="code" className="relative py-20 bg-[#0A0A0B]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">One line to live</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Drop-in SDKs for your stack</h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {tabs.map((t) => (
              <button key={t} onClick={() => setActive(t)} className={`rounded-md px-3 py-1.5 text-sm transition border ${active === t ? 'bg-white text-black border-white' : 'text-white/80 border-white/10 hover:bg-white/5'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden mb-4">
          <select value={active} onChange={(e) => setActive(e.target.value)} className="w-full rounded-md bg-[#0B0B0C] border border-white/10 px-3 py-2 text-sm">
            {tabs.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <CodeBlock code={snippets[active]} />

        <div className="mt-4 text-sm text-white/60">
          <span className="rounded-full bg-white/5 px-2 py-1 border border-white/10">npm i @vanish/auth</span>
          <span className="ml-2">• Works with Next.js, Vite, Expo, and more</span>
        </div>
      </div>
    </section>
  );
}
