/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
      },
      keyframes: {
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        'custom-text': '#313132',
      },
    },
    screens: {
      desktop: '1240px',
      tablet: '768px',
    },
  },
  plugins: [],
};
