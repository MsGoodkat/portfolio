/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080b14',
        'bg-card': 'rgba(255,255,255,0.05)',
        primary: '#F0F0F5',
        secondary: '#8B8BA0',
        violet: '#6C63FF',
        cyan: '#00D4FF',
        purple: '#7B2FBE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%)',
        'gradient-accent-hover': 'linear-gradient(135deg, #7d75ff 0%, #33ddff 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite 2s',
        'float-fast': 'float 5s ease-in-out infinite 1s',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
