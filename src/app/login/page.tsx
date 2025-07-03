"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginScreen() {
  const router = useRouter();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white font-mono">
      <div
        className={`p-6 rounded-lg border border-white/10 backdrop-blur-md bg-black/80 transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-lime-400 text-center mb-6 glitch-text">
          Welcome to TaahirahOS
        </h2>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => router.push("/home")}
            className="bg-zinc-800 text-white px-6 py-2 border border-lime-500 rounded hover:bg-lime-400 hover:text-black transition"
          >
            Log In as Guest
          </button>
        </div>
      </div>
    </div>
  );
}
