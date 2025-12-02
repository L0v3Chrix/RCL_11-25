import type { Config } from 'tailwindcss'

// Tailwind CSS v4 - Minimal config file
// Colors and theme values are defined in globals.css using @theme directive
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // In Tailwind v4, theme configuration is handled via @theme in CSS
  // Keeping this file minimal for content paths only
  plugins: [],
}

export default config
