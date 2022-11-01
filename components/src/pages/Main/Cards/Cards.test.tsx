import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styled/theme';
import { movies } from '../../../constants/constants';
import GlobalStyles from '../../../styled/globalStyles';
import React from 'react';
import Cards from './Cards';

test('render FormsCards test', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Cards />
      <GlobalStyles />
    </ThemeProvider>
  );
  const cards = await screen.findAllByTestId(/card/i);
  expect(cards).toHaveLength(movies.length);
});
