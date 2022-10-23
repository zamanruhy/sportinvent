/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', 'src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',

      'max-sm': { raw: 'not all and (min-width: 576px)' },
      'max-md': { raw: 'not all and (min-width: 768px)' },
      'max-lg': { raw: 'not all and (min-width: 992px)' },
      'max-xl': { raw: 'not all and (min-width: 1200px)' },
      'max-2xl': { raw: 'not all and (min-width: 1400px)' }
    },
    extend: {
      fontFamily: {
        brand: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      minHeight: defaultTheme.height,
      minWidth: defaultTheme.width,
      zIndex: {
        fixed: 1000,
        // backdrop: 2000,
        modal: 3000,
        popup: 4000
      }
    }
  },
  corePlugins: {
    container: false
  },
  plugins: []
}
