import React, { useEffect, useState } from 'react';
import { ImbdMovies } from './Modal.model';
import { ModalInfoStyled } from './styled';
import ModalInfoGenerator from './ModalInfoGenerator';
import ModalInfoRating from './ModalInfoRating';
import { Loading } from '../styled';

const ModalInfo = ({ id }: { id: string }) => {
  const [movie, setMovie] = useState({} as ImbdMovies);
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isModalActive, setModalIsActive] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=bac3fe50`)
      .then((res) => res.json() as Promise<ImbdMovies>)
      .then((result) => {
        setMovie(result);
        setActive(true);
        setTimeout(() => setModalIsActive(true), 100);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  setTimeout(() => setIsActive(true), 100);

  const movieInfo = [
    ['Rated', movie.Rated],
    ['Box Office', movie.BoxOffice],
    ['Awards', movie.Awards],
    ['Country', movie.Country],
    ['Directed by', movie.Director],
    ['Actors', movie.Actors],
    ['Plot', movie.Plot],
  ];

  return active ? (
    <ModalInfoStyled isActive={isModalActive}>
      <figure>
        <img src={movie.Poster} alt={movie.Title} />
      </figure>
      <figcaption>
        <h2>{movie.Title}</h2>
        <h3>
          {movie.Genre}, {movie.Year}, {movie.Runtime !== 'N/A' ? movie.Runtime : ''}
        </h3>
        {movieInfo.map(
          (info, index) => info[1] !== 'N/A' && <ModalInfoGenerator info={info} key={index} />
        )}
        <ModalInfoRating ratings={movie.Ratings} />
      </figcaption>
    </ModalInfoStyled>
  ) : error === '' ? (
    <Loading isActive={isActive}>Loading...</Loading>
  ) : (
    <Loading isActive={isActive}>{error}</Loading>
  );
};

export default ModalInfo;
