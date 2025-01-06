import { createTheme } from '@mui/material/styles';

// Material UI theme only since we're not using Chakra UI

// Material UI theme
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#ff6f3c',
    },
    secondary: {
      main: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});
