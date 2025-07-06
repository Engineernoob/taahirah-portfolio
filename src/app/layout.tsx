import type React from "react"
import type { Metadata, Viewport } from "next"
import { IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Taahirah Denmark - AI Infrastructure Engineer",
  description: "Engineering the infrastructure behind autonomous systems",
  keywords: ["AI Engineer", "Infrastructure", "Autonomous Systems", "Machine Learning"],
  authors: [{ name: "Taahirah Denmark" }],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  )
}
