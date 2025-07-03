// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Landing() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('./home'); // Redirect to fake desktop after boot
    }, 4000); // Adjust delay if adding boot animation

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-black text-lime-400 flex items-center justify-center font-mono">
      <h1 className="text-3xl glitch-text">Booting TaahirahOS...</h1>
    </main>
  );
}