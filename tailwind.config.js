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
      borderRadius: {
        ImageRadius: '20% 6px 20% 6px'
      },
      colors: {
        secondary: '#7ab3f0'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#fcf9f8',
            textColor: '#060b0f',
            primary: '#7ab3f0',
            secondary: '#2c7fd8',
            accent: '#4099f7',
            bulletColor: '#060b0f'
          }
        },
        dark: {
          colors: {
            background: '#04070b',
            textColor: '#f0f5f9',
            primary: '#0f4885',
            secondary: '#277ad3',
            accent: '#4099f7',
            bulletColor: '#f0f5f9'
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
