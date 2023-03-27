const themes = require('./src/themes/index')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      height: {
        15: '3.813rem',
        hero: '63.063rem',
        2.65: '2.656rem',
        54: '13.688rem',
        7.5: '1.875rem',
      },
      width: {
        30: '7.75rem',
        38: '9.125rem',
        11.18: '11.188rem',
        7.5: '1.875rem',
      },
      maxWidth: {
        32: '32.375rem',
      },

      lineHeight: {
        wider: '1.688rem',
        widen: '3.104rem',
        small: '1.375rem',
        9_5: '2.188rem',
      },
      fontSize: {
        '3_8XL': '2.125rem',
        md: '0.938rem',
        xxs: '0.625rem',
      },
      colors: {
        lightBlue: '#384F63',
        brandBlack: '#061726',
        SoftBackgroundGray: '#EBF3F5',
        BrandGray: '#D3DDE0',
        WhiteBody: '#384F63',
      },
      margin: {
        9.5: '2.375rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0F375A',

          secondary: '#F9AF21',

          accent: '#2CA2CA',

          neutral: '#1D1D1D',

          'base-100': '#040F1A',

          info: '#2A72FF',

          success: '#4DB142',

          warning: '#FDBE44',

          error: '#EA4545',
        },
      },
    ],
  },
}
