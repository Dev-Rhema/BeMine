/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        'gradient-shift': 'gradientShift 10s ease infinite',
        'fall': 'fall 3s linear infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out infinite',
        'blink': 'blink 2s ease-in-out infinite',
        'tear-fall': 'tearFall 2s ease-in-out infinite',
        'bg-scroll': 'bgScroll 30s linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fall: {
          'to': {
            transform: 'translateY(100vh) rotate(360deg)',
            opacity: '0',
          },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
        blink: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
        tearFall: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(40px)', opacity: '0' },
        },
        bgScroll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '16px 16px' },
        },
      },
      boxShadow: {
        'pixel': '0 0 0 4px #000, 0 0 0 8px currentColor, 8px 8px 0 8px rgba(0, 0, 0, 0.3)',
        'pixel-sm': '4px 4px 0 #000',
        'glow-blue': '0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 30px #0ea5e9',
        'glow-orange': '0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316',
      },
    },
  },
  plugins: [],
}
