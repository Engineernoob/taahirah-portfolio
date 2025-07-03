import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  plugins: [],
};

export default nextConfig;
