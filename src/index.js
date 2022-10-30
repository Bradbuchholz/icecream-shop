import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>

);
