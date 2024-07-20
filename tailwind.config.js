/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'darker-brown': '#a84e1c',
        'lighter-brown': '#c27347',
        'peachy-brown': '#ed9564',
        'piggy-pink': '#fcb8c4',
        'rabbit-body-nude': '#ffe1cf',
      },
    },
  },
  plugins: [],
};

