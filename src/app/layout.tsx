// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taahirah Denmark',
  description: 'LLM Infra Engineer + Autonomous Agent Architect',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased font-mono">
        {children}
      </body>
    </html>
  )
}