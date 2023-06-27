import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Cards from './Cards/Cards';
import { MainStyled } from './styled';
import Modal from './Modal/Modal';

const Main = () => {
  const getLocalStorage = () => localStorage.getItem('text') ?? 'Game of Thrones';

  const [searchText, setSearchText] = useState(getLocalStorage());
  const [modalId, setModalId] = useState('');

  return (
    <MainStyled>
      <SearchBar getLocalStorage={getLocalStorage()} setSearchText={setSearchText} />
      <Cards searchText={searchText} setModalId={setModalId} />
      {modalId !== '' && <Modal id={modalId} setModalId={setModalId} />}
    </MainStyled>
  );
};

export default Main;
