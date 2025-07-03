'use client';

import { useEffect, useState } from 'react';

const messages = [
  'booting DARiAN memory engine...',
  'loading Recuris agent protocols...',
  'verifying semantic vector space...',
  'resolving Ollama local models...',
  'connection: GhostCoder socket linked',
  '🧠 status: system operational'
];

export default function TerminalFeed() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        setLines((prev) => [...prev, messages[i++]]);
      } else {
        clearInterval(interval);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-md font-mono text-green-400 text-sm mt-6">
      {lines.map((line, idx) => (
        <div key={idx}>❯ {line}</div>
      ))}
    </div>
  );
}