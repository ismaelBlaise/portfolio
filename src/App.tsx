import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4f46e5',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
    },
  },
});

function App() {
  

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    </ThemeProvider>
  );
}

export default App
