import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: [
      'Assistant',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#CD5A91',
      light: '#ff8bc1',
      dark: '#AC4C7A'
      
    },
    secondary: {
      main: '#edf2ff',
      dark: '#737373',
      light: '#EBECF0'
    },
  },
});