/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#070A0F',
        card: '#0D121D',
        'card-border': '#1E293B',
        accent: {
          cyan: '#06B6D4',
          amber: '#F59E0B',
          gold: '#EAB308',
          rose: '#F43F5E',
          emerald: '#10B981',
          indigo: '#6366F1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace']
      }
    },
  },
  plugins: [],
}
