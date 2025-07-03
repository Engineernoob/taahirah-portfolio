// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import TerminalFeed from './components/TerminalFeed';
import { Button } from '@/components/ui/button';

export default function Home() {
  const titles = [
    '↳ AI Infra Engineer_',
    '↳ Agent System Architect_',
    '↳ DARiAN Creator_',
    '↳ System: Recuris Online_',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-wider text-neon mb-2">
          Taahirah Denmark
        </h1>
        <p className="text-xl text-muted mb-8 transition-all">{titles[index]}</p>

        <TerminalFeed />

        <div className="mt-12">
          <h2 className="text-lg text-muted mb-2">Featured Project</h2>
          <div className="border border-zinc-800 p-4 rounded-lg hover:glitch transition-all">
            <h3 className="text-white text-xl font-semibold">Recuris (SwarmFlow)</h3>
            <p className="text-muted mt-2 text-sm">
              Autonomous multi-agent framework that builds and ships full SaaS platforms using CrewAI + Ollama.
            </p>
            <Button variant="ghost" className="mt-3">
              View on GitHub →
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}