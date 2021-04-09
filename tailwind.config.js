const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '28rem',
        '120': '32rem',
        '132': '36rem',
        '148': '44rem',
        '164': '52rem',
        '180': '60rem',
      },
      maxWidth: {
        'screen-2xl': '1920px'
      },
      height: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '28rem',
        '120': '32rem',
        '132': '36rem',
        '148': '44rem',
        '164': '52rem',
        '180': '60rem',
      },
      minHeight: {
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '28rem',
        '120': '32rem',
        '132': '36rem',
        '148': '44rem',
        '164': '52rem',
        '180': '60rem',
      },
      padding: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '28rem',
        '120': '32rem',
        '132': '36rem',
        '148': '44rem',
        '164': '52rem',
        '180': '60rem',
      },
      margin: {
        '-72': '-18rem',
        '-84': '-21rem',
        '-96': '-24rem',
        '-108': '-28rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      inset: {
        '1/5': '20%',
        '1/12': '8.333333%'
      },
      textColor: {
        'primary-50': '#0011FF',
        'primary-100': '#000babfc',
        'secondary-50': '#FF6767'
      },
      backgroundColor: theme => ({
        'primary-50': '#0011FF',
        'primary-100': '#000babfc',
        'secondary-50': '#FF6767'
      }),
      borderColor: theme => ({
        'primary-50': '#0011FF',
        'primary-100': '#000babfc',
        'secondary-50': '#FF6767'
      }),
      placeholderColor: {
        'primary-50': '#0011FF',
        'primary-100': '#000babfc',
        'secondary-50': '#FF6767'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1920px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
