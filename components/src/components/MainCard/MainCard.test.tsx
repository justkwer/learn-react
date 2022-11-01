import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import MainCard from './MainCard';
import GlobalStyles from '../../styled/globalStyles';
import { render, screen } from '@testing-library/react';

test('MainCard test', async () => {
  const testMovie = {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
    Title: 'Game of Thrones',
    Type: 'series',
    Year: '2011-2019',
    imdbID: 'tt0944947',
  };

  const { Poster, Title, Type, Year, imdbID } = testMovie;

  render(
    <ThemeProvider theme={theme}>
      <MainCard movie={testMovie} setModalId={() => imdbID} />
      <GlobalStyles />
    </ThemeProvider>
  );

  const regTitle = new RegExp(Title, 'i');
  const regType = new RegExp(Type, 'i');
  const regYear = new RegExp(Year, 'i');
  const regImdbID = new RegExp(imdbID, 'i');

  expect(screen.getByText(regTitle)).toBeInTheDocument();
  expect(screen.getByAltText(regTitle)).toBeInTheDocument();
  expect(screen.getByText(regType)).toBeInTheDocument();
  expect(screen.getByText(regYear)).toBeInTheDocument();
});
