import { createTheme } from '@nextui-org/react';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#0070f3',
      secondary: '#7928ca'
      // Ajoutez d'autres couleurs personnalisées ici
    }
  }
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#0070f3',
      secondary: '#7928ca'
      // Ajoutez d'autres couleurs personnalisées ici
    }
  }
});

export { darkTheme, lightTheme };
