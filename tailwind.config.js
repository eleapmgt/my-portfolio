/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
