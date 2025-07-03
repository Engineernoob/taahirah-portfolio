'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BootScreen() {
  const router = useRouter();

  useEffect(() => {
    const audio = new Audio('/sounds/boot.mp3');
    audio.play();

    const timer = setTimeout(() => {
      router.push('/login');
    }, 4500); // Adjust delay to match sound

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-black text-lime-400 flex flex-col items-center justify-center font-mono">
      <div className="glitch-text text-3xl mb-2">[🟢] Booting TaahirahOS...</div>
      <div className="glitch-text text-5xl font-bold tracking-widest">TaahirahOS</div>
    </main>
  );
}
