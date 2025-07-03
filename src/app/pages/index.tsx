// pages/index.tsx

import { Github } from 'lucide-react'

export default function Home() {
  const projects = [
    {
      title: "ResumeTuner.dev",
      description: "AI-powered resume and GitHub optimizer using LangChain, GPT-4, and Notion API.",
      github: "https://github.com/taahirah"
    },
    {
      title: "SwarmFlow (Recuris)",
      description: "Multi-agent CrewAI system for autonomous SaaS development. Includes job outreach agent.",
      github: "https://github.com/taahirah"
    },
    {
      title: "DARiAN",
      description: "Local-first AI assistant with memory, voice (STT/TTS), and semantic recall.",
      github: "https://github.com/taahirah"
    },
    {
      title: "Indexia",
      description: "CLI-based second brain with vector search, document ingestion, and offline LLM queries.",
      github: "https://github.com/taahirah"
    },
    {
      title: "Obscura",
      description: "Encrypted mobile messenger using libsodium, React Native, and secure voice chat.",
      github: "https://github.com/taahirah"
    }
  ]

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-10 font-sans">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-2">Taahirah Denmark</h1>
        <p className="text-xl mb-4">
          Multi-Agent Infra Engineer • LLM-Powered System Architect
        </p>
        <div className="flex gap-4">
          <a
            className="bg-black text-white px-4 py-2 rounded"
            href="/resume.pdf"
            target="_blank"
          >
            Download Résumé
          </a>
          <a
            className="border border-gray-400 px-4 py-2 rounded"
            href="mailto:taahirah.engineer@proton.me"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <div key={i} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm mb-2">{project.description}</p>
              <div className="flex gap-2">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-700 hover:text-black">
                  <Github size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p>
          I build intelligent infrastructure for LLMs, agents, and AI systems. From autonomous job bots to voice-controlled assistants and secure communication tools — I specialize in agent orchestration, persistent memory, and multi-agent AI architecture.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <ul className="list-disc list-inside space-y-1 text-blue-600">
          <li><a href="mailto:taahirah.engineer@proton.me">taahirah.engineer@proton.me</a></li>
          <li><a href="https://github.com/taahirah">GitHub</a></li>
          <li><a href="https://notion.so/taahirah/resume">Notion Portfolio</a></li>
          <li><a href="/resume.pdf">Download Résumé (PDF)</a></li>
        </ul>
      </section>
    </main>
  )
}