import React from 'react';
import { 
  Box, 
  Container, 
  createTheme, 
  CssBaseline, 
  ThemeProvider, 
  Typography 
} from '@mui/material';

import Copyright from './components/Copyright';
import Header from './components/Header';

import './App.css';
import Posto from './pages/Posto';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider 
      theme={theme}
    >
      <CssBaseline />
      <Header />

      <main>
        <Posto />
      </main>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            TRIAD RESEARCH - PESQUISA DE MERCADO.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
