/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave-1': 'wave 1.2s ease-in-out infinite alternate',
        'wave-2': 'wave 1.2s ease-in-out infinite alternate 0.2s',
        'wave-3': 'wave 1.2s ease-in-out infinite alternate 0.4s',
        'wave-4': 'wave 1.2s ease-in-out infinite alternate 0.6s',
        'wave-5': 'wave 1.2s ease-in-out infinite alternate 0.8s',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'scaleY(0.2)' },
          '100%': { transform: 'scaleY(1)' },
        }
      }
    },
  },
  plugins: [],
}
