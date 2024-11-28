/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e3e7dd',
          200: '#c5ceb8',
          300: '#a7b594',
          400: '#899c71',
          500: '#6b834f',
          600: '#56693f',
          700: '#414f2f',
          800: '#2b341f',
          900: '#161a10',
        },
        maroon: {
          50: '#fdf2f4',
          100: '#f7d6da',
          200: '#eeadb5',
          300: '#e58490',
          400: '#dc5b6b',
          500: '#d33247',
          600: '#a92838',
          700: '#7f1e2a',
          800: '#54141c',
          900: '#2a0a0e',
        },
      },
    },
  },
  plugins: [],
};