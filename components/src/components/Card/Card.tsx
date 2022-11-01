import React from 'react';
import { CardStyled } from '../../pages/Main/styled';
import { CardProps } from '../../pages/Main/Cards/Cards.models';

const Card = ({ movie }: CardProps) => {
  const { Poster, Title, imdbRating, Genre, Released, Runtime, Country, Director, Actors, Plot } =
    movie;
  const year = new Date(Released).getFullYear();

  return (
    <CardStyled data-testid="Card">
      <figure>
        <img src={Poster} alt={Title} />
        <div>{imdbRating}</div>
      </figure>
      <figcaption>
        <h2>{Title}</h2>
        <p>
          {Genre} , {year}, {Runtime}{' '}
        </p>
        <div>
          Countries: <p>{Country}</p>
        </div>
        <div>
          Directed by: <p>{Director}</p>
        </div>
        <div>
          Starring: <p>{Actors}</p>
        </div>
        <h3>{Plot}</h3>
      </figcaption>
    </CardStyled>
  );
};

export default Card;
