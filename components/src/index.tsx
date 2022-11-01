import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styled/globalStyles';
import { theme } from './styled/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
