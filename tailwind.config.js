const { nextui } = require('@nextui-org/react');

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
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#f5faf6',
            textColor: '#080c08',
            primary: '#52b661',
            secondary: '#9ddea7',
            accent: '#70da81'
          }
        },
        dark: {
          colors: {
            background: '#15242b',
            textColor: '#ebeff1',
            primary: '#126f99',
            secondary: '#3dbad7',
            accent: '#2dbeff'
          }
        }
      }
    })
  ]
};
