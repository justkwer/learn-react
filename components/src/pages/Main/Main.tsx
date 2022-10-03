import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import Cards from './Cards/Cards';
import { MainStyled } from './styled';

const Main = () => {
  return (
    <MainStyled>
      <SearchBar />
      <Cards />
    </MainStyled>
  );
};

export default Main;
