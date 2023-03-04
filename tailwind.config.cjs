/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js, jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'davys-grey': '#4D4D4D',
        vermillion: '#CD4631',
        'pewter-blue': '#81ADC8',
        champagne: '#F7ED38',
        'alice-blue': '#EDF3F7',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        heading: [
          '96px',
          { lineHeight: '100%', letterSpacing: '-4%', fontWeight: 'bold' },
        ],
        h1: [
          '59.3px',
          { lineHeight: '120%', letterSpacing: '-2%', fontWeight: 'bold' },
        ],
        h2: [
          '36.65px',
          { lineHeight: '100%', letterSpacing: '-4%', fontWeight: 'bold' },
        ],
        h3: ['22.65px', { lineHeight: '140%', fontWeight: '500' }],
        body: ['16px', { lineHeight: '160%', fontWeight: '500' }],
        caption: ['14px', { lineHeight: '160%', fontWeight: '500' }],
        small: ['12px', { lineHeight: '160%', fontWeight: '500' }],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [],
};
