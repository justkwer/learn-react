import { render, screen } from '@testing-library/react';
import App from './App';
import { theme } from './styled/theme';
import GlobalStyles from './styled/globalStyles';
import { ThemeProvider } from 'styled-components';
import React from 'react';

test('render App test', () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  );
  const component = screen.getByText(/components/i);
  const logo = screen.getByText(/ease/i);
  expect(component).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});
