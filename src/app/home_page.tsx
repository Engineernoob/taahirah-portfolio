'use client';

import { useState } from 'react';
import { TerminalIcon, FolderOpenIcon } from 'lucide-react';

const icons = [
  {
    title: 'Recuris.exe',
    type: 'terminal',
    content: 'Autonomous multi-agent SaaS builder using CrewAI + Ollama. Deploys end-to-end platforms.',
  },
  {
    title: 'Indexia.app',
    type: 'terminal',
    content: 'Local AI knowledge base CLI for note retrieval, embeddings, and research augmentation.',
  },
  {
    title: 'Messenger.exe',
    type: 'terminal',
    content: 'End-to-end encrypted messaging prototype with MySudo integration. Unique, stealth-first UI.',
  },
];

export default function Desktop() {
  const [openApp, setOpenApp] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-[url('/bg95.png')] bg-cover text-white font-mono select-none">
      {/* Icons */}
      <div className="absolute top-6 left-6 flex flex-col gap-4">
        {icons.map((icon) => (
          <button
            key={icon.title}
            onClick={() => setOpenApp(icon.title)}
            className="flex flex-col items-center hover:brightness-125"
          >
            <FolderOpenIcon className="w-8 h-8 text-lime-300" />
            <span className="text-xs mt-1">{icon.title}</span>
          </button>
        ))}
      </div>

      {/* Terminal window */}
      {openApp && (
        <div className="absolute top-24 left-24 w-[400px] bg-black border border-lime-500 text-lime-300 shadow-lg rounded">
          <div className="bg-lime-600 p-2 text-sm font-bold flex justify-between">
            <span>{openApp}</span>
            <button onClick={() => setOpenApp(null)}>✕</button>
          </div>
          <div className="p-4 text-sm leading-relaxed">
            {icons.find((app) => app.title === openApp)?.content}
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 w-full bg-zinc-800 border-t border-zinc-600 p-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-lime-300" />
          <span>TaahirahOS Terminal</span>
        </div>
        <span>{new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  );
}