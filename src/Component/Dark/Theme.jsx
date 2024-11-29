// lightTheme
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1f2d5c',
    },
    background: {
      default: '#ffffff',
      paper: '#f4f4f4',
    },
    text: {
      primary: '#000000',
      secondary: '#757575',
    },
  },
});

// darkTheme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
    },
  },
});
