import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Cards from './Cards/Cards';
import { MainStyled } from './styled';

const Main = () => {
  const getLocalStorage = () => localStorage.getItem('text') ?? 'Game of Thrones';

  const [searchText, setSearchText] = useState(getLocalStorage());

  return (
    <MainStyled>
      <SearchBar getLocalStorage={getLocalStorage()} setSearchText={setSearchText} />
      <Cards searchText={searchText} />
    </MainStyled>
  );
};

export default Main;
