/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#3E92CC',
          500: '#2A7DB7',
          600: '#0A2463',
          700: '#091E57',
          900: '#06133A',
        },
        orange: {
          400: '#FF9B5C',
          500: '#FF8C42',
          600: '#F47D30',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            lineHeight: '1.5',
          },
        },
      },
    },
  },
  plugins: [],
};