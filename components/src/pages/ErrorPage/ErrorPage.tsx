import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorPageStyled } from './styled';

const ErrorPage = () => {
  return (
    <ErrorPageStyled>
      <section>
        <figure>
          <img src={require('../../assets/img/404.webp')} alt={'Error'} />
        </figure>
        <figcaption>
          <h1>Oops! Page not found.</h1>
          <p>
            You must have picked the wrong door because i haven&apos;t been able to lay my eye on
            the page you&apos;ve been searching for.
          </p>
          <Link to="/">BACK TO HOME</Link>
        </figcaption>
      </section>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
