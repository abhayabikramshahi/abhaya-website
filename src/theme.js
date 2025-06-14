import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // Modern blue
      light: '#60a5fa',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7c3aed', // Vibrant purple
      light: '#a78bfa',
      dark: '#5b21b6',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#f59e0b', // Warm orange
      light: '#fbbf24',
      dark: '#d97706',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
      dark: '#1e293b',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      light: '#94a3b8',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    info: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
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
      fontWeight: 700,
      color: '#1e293b',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1e293b',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#1e293b',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#1e293b',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1e293b',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#1e293b',
    },
    body1: {
      color: '#334155',
    },
    body2: {
      color: '#64748b',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
          fontWeight: 500,
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
          '&:hover': {
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
        contained: {
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1e293b',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#2563eb',
          textDecoration: 'none',
          '&:hover': {
            color: '#1d4ed8',
            textDecoration: 'underline',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 1px 2px rgba(0, 0, 0, 0.05)',
    '0 1px 3px rgba(0, 0, 0, 0.1)',
    '0 1px 4px rgba(0, 0, 0, 0.1)',
    '0 2px 4px rgba(0, 0, 0, 0.1)',
    '0 4px 6px rgba(0, 0, 0, 0.1)',
    '0 8px 12px rgba(0, 0, 0, 0.1)',
    '0 12px 16px rgba(0, 0, 0, 0.1)',
    '0 16px 24px rgba(0, 0, 0, 0.1)',
    '0 20px 32px rgba(0, 0, 0, 0.1)',
    '0 24px 40px rgba(0, 0, 0, 0.1)',
    '0 32px 48px rgba(0, 0, 0, 0.1)',
    '0 40px 56px rgba(0, 0, 0, 0.1)',
    '0 48px 64px rgba(0, 0, 0, 0.1)',
    '0 56px 72px rgba(0, 0, 0, 0.1)',
    '0 64px 80px rgba(0, 0, 0, 0.1)',
    '0 72px 88px rgba(0, 0, 0, 0.1)',
    '0 80px 96px rgba(0, 0, 0, 0.1)',
    '0 88px 104px rgba(0, 0, 0, 0.1)',
    '0 96px 112px rgba(0, 0, 0, 0.1)',
    '0 104px 120px rgba(0, 0, 0, 0.1)',
    '0 112px 128px rgba(0, 0, 0, 0.1)',
    '0 120px 136px rgba(0, 0, 0, 0.1)',
    '0 128px 144px rgba(0, 0, 0, 0.1)',
  ],
});

export default theme; 