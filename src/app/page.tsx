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
    <main className="min-h-screen bg-background text-foreground px-6 py-12 font-mono">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <h1 className="text-4xl font-bold tracking-widest text-lime-400 mb-2 glitch-text">
          Taahirah Denmark
        </h1>
        <p className="text-xl text-lime-300 mb-8 transition-all duration-300">
          {titles[index]}
        </p>

        <TerminalFeed />

        {/* Featured */}
        <div className="mt-12">
          <h2 className="text-md text-lime-500 uppercase tracking-wide mb-2">
            // Featured Project
          </h2>
          <div className="terminal-card group hover:border-lime-400 transition-all duration-300">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold glitch-text">
                Recuris <span className="text-sm text-green-500">[agent.swarm]</span>
              </h3>
              <span className="text-sm opacity-70">↳ ACTIVE</span>
            </div>
            <p className="mt-2 text-sm text-lime-300">
              Autonomous multi-agent framework that builds and ships full SaaS platforms using CrewAI + Ollama.
            </p>
            <Button variant="ghost" className="mt-4 text-lime-400 hover:underline">
              View on GitHub →
            </Button>
            <p className="mt-2 text-xs text-lime-500">{'>'} Access granted...</p>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <h2 className="text-md text-lime-500 uppercase tracking-wide mb-2">// Experience</h2>
          <div className="space-y-6">
            <div className="terminal-card">
              <h3 className="text-lg font-semibold glitch-text">Software Engineer Intern @ Series</h3>
              <p className="text-xs text-lime-500 mb-2">May 2024 – Aug 2024</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-lime-300">
                <li>Enhanced mentorship platform UX by 30% via AI/NLP-powered recommendation systems.</li>
                <li>Built scalable services in Node.js + Python; integrated Firebase for real-time data.</li>
                <li>Reduced DB response time by 20% through optimized data handling pipelines.</li>
                <li>Authored full-stack technical docs to streamline future dev onboarding.</li>
              </ul>
            </div>

            <div className="terminal-card">
              <h3 className="text-lg font-semibold glitch-text">Founder & Engineer @ ResumeTuner.dev</h3>
              <p className="text-xs text-lime-500 mb-2">Jun 2025 – Present</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-lime-300">
                <li>Built AI-powered résumé tuning tool for job seekers using Plaid + LLMs.</li>
                <li>Implemented full CI/CD flow with GitHub Actions and Netlify + PostHog analytics.</li>
                <li>Grew waitlist to 120+ CS students in &lt; 1 week via organic social promotion.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16">
          <h2 className="text-md text-lime-500 uppercase tracking-wide mb-2">// Projects</h2>
          <div className="space-y-6">
            <div className="terminal-card">
              <h3 className="text-lg font-semibold glitch-text">Recuris (SwarmFlow)</h3>
              <p className="text-sm text-lime-300">
                Autonomous multi-agent SaaS builder using CrewAI + Ollama with task decomposition, memory, QA and git workflows.
              </p>
            </div>

            <div className="terminal-card">
              <h3 className="text-lg font-semibold glitch-text">DARiAN: Personalized LLM Assistant</h3>
              <p className="text-sm text-lime-300">
                LoRA-tuned AI assistant with wake-word, memory, voice input/output, and a villainous persona. Terminal interface inspired by eDEX-UI.
              </p>
            </div>

            <div className="terminal-card">
              <h3 className="text-lg font-semibold glitch-text">Indexia</h3>
              <p className="text-sm text-lime-300">
                AI second brain CLI tool built in Python with Ollama and FAISS-based memory retrieval.
              </p>
            </div>

            <div className="terminal-card">
              <h3 className="text-lg font-semibold glitch-text">MySudo Messenger (WIP)</h3>
              <p className="text-sm text-lime-300">
                Lightweight, encrypted messaging app prototype using MySudo SDK + Expo + Supabase, designed for secure async communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}