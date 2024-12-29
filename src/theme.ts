import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color
    },
    secondary: {
      main: '#ff4081', // Custom secondary color
    },
    error: {
      main: '#d32f2f', // Error color
    },
    warning: {
      main: '#ffa000', // Warning color
    },
    info: {
      main: '#0288d1', // Info color
    },
    success: {
      main: '#388e3c', // Success color
    },
    background: {
      default: '#f4f6f8', // Background color
      paper: '#ffffff', // Paper color
    },
    text: {
      primary: '#333333', // Primary text color
      secondary: '#666666', // Secondary text color
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
