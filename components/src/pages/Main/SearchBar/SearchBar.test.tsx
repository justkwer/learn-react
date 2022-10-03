import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styled/theme';
import SearchBar from './SearchBar';
import GlobalStyles from '../../../styled/globalStyles';

test('SearchBar test', async () => {
  const searchBar = render(
    <ThemeProvider theme={theme}>
      <SearchBar />
      <GlobalStyles />
    </ThemeProvider>
  );
  expect(screen.queryByPlaceholderText(/Test/)).toBeNull();
  fireEvent.change(screen.getByRole(/search/i), {
    target: { value: 'Test' },
  });
  expect(screen.queryByPlaceholderText(/Test/)).toBeInTheDocument();
  expect(localStorage.getItem('text')).toBeNull();

  searchBar.unmount();
  expect(localStorage.getItem('text')).toBe('Test');
});
