/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090909',
        'background-secondary': '#111111',
        'background-card': '#141414',
        'background-elevated': '#181818',
        'primary-text': '#F2EFEB',
        'secondary-text': '#A09C9A',
        accent: {
          DEFAULT: '#E32B3C',
          hover: '#FF3347',
          dark: '#B01826',
          glow: 'rgba(227, 43, 60, 0.15)'
        },
        border: 'rgba(255, 255, 255, 0.12)',
        'border-subtle': 'rgba(255, 255, 255, 0.06)',
        'border-strong': 'rgba(255, 255, 255, 0.22)'
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        hand: ['Caveat', 'cursive']
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em'
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        }
      },
      animation: {
        ticker: 'ticker 28s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

