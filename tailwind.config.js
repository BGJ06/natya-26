/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a16', // Deep dark purple/black
        card: 'rgba(255, 255, 255, 0.05)',
        'neon-purple': '#a855f7',
        'neon-pink': '#ec4899',
        'tech-blue': '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(236, 72, 153, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
