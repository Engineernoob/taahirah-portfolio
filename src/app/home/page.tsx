"use client";

import { useState } from "react";
import Draggable from "react-draggable";

type WindowKey = "recuris" | "indexia" | "encrypted";

export default function HomeOS() {
  const [openWindows, setOpenWindows] = useState<Record<WindowKey, boolean>>({
    recuris: false,
    indexia: false,
    encrypted: false,
  });

  const toggleWindow = (key: WindowKey) => {
    setOpenWindows((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-black text-lime-300 font-mono relative overflow-hidden">
      {/* CRT glow + scanlines */}
      <div className="absolute inset-0 pointer-events-none glitch-overlay z-10" />

      {/* Desktop Icons */}
      <div className="p-6 flex flex-col gap-4 z-20 relative">
        <DesktopIcon
          label="🧠 Recuris"
          onClick={() => toggleWindow("recuris")}
        />
        <DesktopIcon
          label="🗃️ Indexia"
          onClick={() => toggleWindow("indexia")}
        />
        <DesktopIcon
          label="🔐 Messenger"
          onClick={() => toggleWindow("encrypted")}
        />
      </div>

      {/* Terminal Windows */}
      {openWindows.recuris && (
        <Window
          title="Recuris (SwarmFlow)"
          onClose={() => toggleWindow("recuris")}
        >
          Autonomous agent framework that ships SaaS products using CrewAI +
          Ollama.
        </Window>
      )}
      {openWindows.indexia && (
        <Window title="Indexia" onClose={() => toggleWindow("indexia")}>
          Terminal-based AI second brain powered by local LLMs and embedding
          search.
        </Window>
      )}
      {openWindows.encrypted && (
        <Window
          title="Encrypted Messenger"
          onClose={() => toggleWindow("encrypted")}
        >
          Minimal secure messaging app inspired by MySudo + Signal.
        </Window>
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 w-full bg-zinc-900 text-white py-2 px-4 text-sm flex items-center gap-4 z-30">
        <span className="bg-zinc-700 px-2 py-1 rounded">Start</span>
        <span className="text-muted">Welcome, Guest</span>
      </div>
    </div>
  );
}

function DesktopIcon({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:underline text-white"
    >
      {label}
    </div>
  );
}

function Window({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <Draggable>
      <div className="absolute top-20 left-20 bg-black terminal-card z-20 w-[350px]">
        <div className="flex justify-between items-center border-b border-zinc-700 pb-1 mb-2">
          <h3 className="text-lime-400 glitch-text text-sm">{title}</h3>
          <button onClick={onClose} className="text-red-400 hover:text-red-600">
            X
          </button>
        </div>
        <div className="text-sm">{children}</div>
      </div>
    </Draggable>
  );
}
