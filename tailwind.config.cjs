module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          blue: {
            50: '#e6f4ff',
            100: '#cce9ff',
            200: '#99d3ff',
            300: '#66bdff',
            400: '#33a7ff',
            500: '#0091ff',
            600: '#0074cc',
            700: '#005799',
            800: '#003a66',
            900: '#001d33',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['Fira Code', 'monospace'],
        },
        animation: {
          'text-gradient': 'text-gradient 1.5s linear infinite',
          'float': 'float 6s ease-in-out infinite',
          'float-reverse': 'float-reverse 7s ease-in-out infinite',
        },
        keyframes: {
          'text-gradient': {
            '0%, 100%': { 'background-position': '0% 50%' },
            '50%': { 'background-position': '100% 50%' },
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          'float-reverse': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(20px)' },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }