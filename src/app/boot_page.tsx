'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BootScreen() {
  const router = useRouter();

  useEffect(() => {
    // Auto-redirect after 3 seconds
    const timeout = setTimeout(() => {
      router.push('/login');
    }, 3000);

    // Play boot sound
    const audio = new Audio('./sounds/startup.mp3');
    audio.volume = 0.8;
    audio.play().catch(() => {
      // fallback for browser restrictions
    });

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-lime-400 font-mono text-3xl tracking-wider glitch-text">
      <span className="animate-pulse">TaahirahOS</span>
    </div>
  );
}