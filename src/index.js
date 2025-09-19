


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles.js'; 
import { ExperienceProvider } from './components/ExperienceContext.jsx';  // importe aqui




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <ExperienceProvider> 
        <GlobalStyles />
        <App />
      </ExperienceProvider>
    </ThemeProvider>
  </React.StrictMode>
);
