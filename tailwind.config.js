/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark violet theme palette
        bg: '#0E0A1F',
        surface: '#15102A',
        violet: '#7C3AED',
        'violet-2': '#A78BFA',
        cyan: '#22D3EE',
        lime: '#A3E635',
        rose: '#FB7185',
        text: '#EDE9FE',
        muted: '#A1A1AA',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        display: ['VT323', 'monospace'],
        body: ['Inter', 'Manrope', 'sans-serif'],
      },
      spacing: {
        pixel: '8px', // base pixel unit
      },
      animation: {
        'scanline': 'scanline 2s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'pixel-dissolve': 'pixel-dissolve 0.6s ease-out',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 0 5px var(--violet-2), 0 0 10px var(--violet-2)' },
          '100%': { boxShadow: '0 0 10px var(--violet-2), 0 0 20px var(--violet-2)' }
        },
        'pixel-dissolve': {
          '0%': { filter: 'blur(8px)', opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          '100%': { filter: 'blur(0px)', opacity: '1', transform: 'translateY(0px) scale(1)' }
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-2px)' }
        }
      },
      boxShadow: {
        'pixel': '0 0 0 1px rgba(255,255,255,0.05), inset 0 0 0 1px rgba(255,255,255,0.02)',
        'neon': '0 0 12px var(--violet-2)',
        'glow': '0 0 6px rgba(124, 58, 237, 0.3)',
      },
      backdropFilter: {
        'glass': 'blur(8px) saturate(200%)',
      }
    },
  },
  plugins: [],
}