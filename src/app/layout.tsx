// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaahirahOS",
  description: "Windows 95-inspired AI OS interface by Taahirah Denmark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-lime-300 font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
