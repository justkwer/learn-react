import React from 'react';
import { CardStyled } from '../../pages/Main/styled';
import { CardProps } from '../../pages/Main/Main.model';

const Card = ({ movie }: CardProps) => {
  const { Poster, Title, Type, Year } = movie;

  return (
    <CardStyled data-testid="Card">
      <figure>
        <img src={Poster} alt={Title} />
        <h3>{Year}</h3>
        <h4>{Type}</h4>
      </figure>
      <figcaption>
        <h2>{Title}</h2>
      </figcaption>
    </CardStyled>
  );
};

export default Card;
