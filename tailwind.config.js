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
            background: '#e7f7f9',
            textColor: '#071113', // Mise à jour de la couleur du texte
            primary: '#146b7b',
            secondary: '#6ddff3',
            accent: '#05c0e1' // Ajout de la couleur accentuée

            // Ajoutez d'autres couleurs si nécessaire
          }
        },
        dark: {
          colors: {
            background: '#061618',
            textColor: '#ecf6f8', // Mise à jour de la couleur du texte
            primary: '#84dceb',
            secondary: '#0c7e92',
            accent: '#1ed9fa' // Ajout de la couleur accentuée

            // Ajoutez d'autres couleurs si nécessaire
          }
        }
      }
    })
  ]
};
