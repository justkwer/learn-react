import React, { useEffect, useState } from 'react';
import MainCard from '../../../components/MainCard/MainCard';
import { CardsStyled, LoadingStyled } from './styled';
import { CardsProps, ImbdSearch, ImdbSearchProps } from '../Main.model';

const Cards = ({ searchText, setModalId }: CardsProps) => {
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [items, setItems] = useState([] as Array<ImdbSearchProps>);

  useEffect(() => {
    setIsActive(true);
    fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=bac3fe50`)
      .then((res) => res.json() as Promise<ImbdSearch>)
      .then((result) => {
        setItems(result.Search);
        setIsLoaded(true);
        setIsActive(true);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, [searchText]);

  return isLoaded ? (
    <CardsStyled isActive={isActive}>
      {items ? (
        items.map((item) => <MainCard movie={item} key={item.imdbID} setModalId={setModalId} />)
      ) : (
        <h2>No matches found... Please try another movie title.</h2>
      )}
    </CardsStyled>
  ) : error === '' ? (
    <LoadingStyled isActive={isActive}>Loading...</LoadingStyled>
  ) : (
    <LoadingStyled isActive={isActive}>{error}</LoadingStyled>
  );
};

export default Cards;
