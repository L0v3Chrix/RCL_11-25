import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F6F1E7',
        'paper-alt': '#FBF7EF',
        cork: '#B98A53',
        ink: '#2A1D14',
        'cta-orange': '#C7773B',
        'cta-teal': '#2F6F71',
        'text-primary': '#1A1410',
        'text-muted': '#6B5F55',
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#2F6F71', // Brand Teal
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#C7773B', // Brand Orange
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        brand: {
          text: '#2C2C2C',
          accent: '#C7773B',
          success: '#22c55e',
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgie', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        handwritten: ['var(--font-handwritten)', 'cursive'],
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '-1': '-1deg',
        '-2': '-2deg',
      },
      backgroundImage: {
        'cork-texture': "url('/textures/cork.jpg')",
        'paper-texture': "url('/textures/paper.png')",
        'noise-texture': "url('/textures/noise.png')",
      }
    },
  },
}

export default config
