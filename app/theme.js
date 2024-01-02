'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#04364A', // Color primario oscuro
      light: '#176B87', // Color primario claro
      dark: '#00212A', // Variante más oscura para el color primario (puede ajustar según sea necesario)
      contrastText: '#ffffff', // Texto que contrasta con el color primario (generalmente blanco o negro)
    },
    secondary: {
      main: '#64CCC5', // Color secundario
      light: '#DAFFFB', // Color secundario claro
      dark: '#2B8B8A', // Variante más oscura para el color secundario (puede ajustar según sea necesario)
      contrastText: '#000000', // Texto que contrasta con el color secundario
    },
    // Puedes agregar más colores como error, warning, info, success, etc.
  },
  // Aquí puedes personalizar otros aspectos del tema (tipografía, breakpoints, etc.)
});

export default theme;
