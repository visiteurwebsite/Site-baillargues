const { nextui } = require('@nextui-org/react');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {}
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#f8fafb',
            textColor: '#172554',
            primary: '#59a0b3',
            secondary: '#58c0dc',
            accent: '#58c0dc',
            bulletColor: '#58c0dc'
          }
        },
        dark: {
          colors: {
            background: '#040506',
            textColor: '#ecf1f3',
            primary: '#567b8f',
            secondary: '#383a5c',
            accent: '#4b4573',
            bulletColor: '#567b8f'
          }
        }
      }
    }),
    plugin(function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--tw-color-secondary': theme('colors.secondary'),
          '--tw-color-primary': theme('colors.primary'),
          '--tw-color-bulletColor': theme('colors.bulletColor')
        }
      });
    })
  ]
};
