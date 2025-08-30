import Hero from './components/Hero';
import Features from './components/Features';
import CodeShowcase from './components/CodeShowcase';
import TrustSection from './components/TrustSection';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white antialiased">
      <Hero />
      <Features />
      <CodeShowcase />
      <TrustSection />
      <CTA />
      <footer className="border-t border-white/10 py-10 text-sm text-white/60">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-orange-500 to-red-600" />
            <span className="font-semibold tracking-tight">Vanish Auth</span>
          </div>
          <p>© {new Date().getFullYear()} Vanish Labs, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
