import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: alpha('#2196f3', 0.1),
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    secondary: {
      light: alpha('#7c4dff', 0.1),
      main: '#7c4dff',
      dark: '#651fff',
      contrastText: '#fff',
    },
    error: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#c62828',
    },
    warning: {
      light: '#ff9800',
      main: '#ed6c02',
      dark: '#e65100',
    },
    info: {
      light: '#03a9f4',
      main: '#0288d1',
      dark: '#01579b',
    },
    success: {
      light: '#4caf50',
      main: '#2e7d32',
      dark: '#1b5e20',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#546e7a',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.05)',
    '0px 8px 16px rgba(0,0,0,0.05)',
    '0px 16px 24px rgba(0,0,0,0.05)',
    '0px 24px 32px rgba(0,0,0,0.05)',
    '0px 24px 32px rgba(0,0,0,0.05)', // 6
    '0px 24px 32px rgba(0,0,0,0.05)', // 7
    '0px 24px 32px rgba(0,0,0,0.05)', // 8
    '0px 24px 32px rgba(0,0,0,0.05)', // 9
    '0px 24px 32px rgba(0,0,0,0.05)', // 10
    '0px 24px 32px rgba(0,0,0,0.05)', // 11
    '0px 24px 32px rgba(0,0,0,0.05)', // 12
    '0px 24px 32px rgba(0,0,0,0.05)', // 13
    '0px 24px 32px rgba(0,0,0,0.05)', // 14
    '0px 24px 32px rgba(0,0,0,0.05)', // 15
    '0px 24px 32px rgba(0,0,0,0.05)', // 16
    '0px 24px 32px rgba(0,0,0,0.05)', // 17
    '0px 24px 32px rgba(0,0,0,0.05)', // 18
    '0px 24px 32px rgba(0,0,0,0.05)', // 19
    '0px 24px 32px rgba(0,0,0,0.05)', // 20
    '0px 24px 32px rgba(0,0,0,0.05)', // 21
    '0px 24px 32px rgba(0,0,0,0.05)', // 22
    '0px 24px 32px rgba(0,0,0,0.05)', // 23
    '0px 24px 32px rgba(0,0,0,0.05)', // 24
  ] as const,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
          fontWeight: 500,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
          },
        },
        outlined: {
          borderWidth: 1.5,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
        },
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: '1px solid rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#2196f3', 0.05),
          '& .MuiTableCell-root': {
            color: '#2c3e50',
            fontWeight: 600,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '16px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
  },
});

export default theme;
