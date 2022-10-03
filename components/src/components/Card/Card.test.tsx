import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled/theme';
import GlobalStyles from '../../styled/globalStyles';
import React from 'react';
import { movies } from '../../constants/constants';
import Card from './Card';

test('Card test', async () => {
  const { Title, imdbRating, Genre, Released, Runtime, Country, Director, Actors, Plot } =
    movies[0];
  const year = new Date(Released).getFullYear().toString();

  render(
    <ThemeProvider theme={theme}>
      <Card movie={movies[0]} />
      <GlobalStyles />
    </ThemeProvider>
  );

  const regTitle = new RegExp(Title, 'i');
  const regImdbRating = new RegExp(imdbRating, 'i');
  const regGenre = new RegExp(Genre, 'i');
  const regYear = new RegExp(year, 'i');
  const regRuntime = new RegExp(Runtime, 'i');
  const regCountry = new RegExp(Country, 'i');
  const regDirector = new RegExp(Director, 'i');
  const regActors = new RegExp(Actors, 'i');
  const regPlot = new RegExp(Plot, 'i');

  expect(screen.getByAltText(regTitle)).toBeInTheDocument();
  expect(screen.getByText(regTitle)).toBeInTheDocument();
  expect(screen.getByText(regImdbRating)).toBeInTheDocument();
  expect(screen.getByText(regGenre)).toBeInTheDocument();
  expect(screen.getByText(regYear)).toBeInTheDocument();
  expect(screen.getByText(regRuntime)).toBeInTheDocument();
  expect(screen.getByText(regCountry)).toBeInTheDocument();
  expect(screen.getByText(regDirector)).toBeInTheDocument();
  expect(screen.getByText(regActors)).toBeInTheDocument();
  expect(screen.getByText(regPlot)).toBeInTheDocument();
});

