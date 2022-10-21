import React from 'react';
import { CardProps } from '../../pages/Main/Main.model';
import { MainCardStyled } from './styled';

const MainCard = (props: CardProps) => {
  const { Poster, Title, Type, Year, imdbID } = props.movie;

  return (
    <MainCardStyled data-testid="MainCard" onClick={() => props.setModalId(imdbID)}>
      <figure>
        <img src={Poster} alt={Title} />
        <h3>{Year}</h3>
        <h4>{Type}</h4>
      </figure>
      <figcaption>
        <h2>{Title}</h2>
      </figcaption>
    </MainCardStyled>
  );
};

export default MainCard;
