import React from 'react';
import { AboutStyled } from './styled';

const About = () => {
  return (
    <AboutStyled>
      <section>
        <figure>
          <img src={require('../../assets/img/about.webp')} alt={'About us'} />
        </figure>
        <figcaption>
          <h1>Oops! We are tired.</h1>
          <p>We love sleep &#129316;</p>
        </figcaption>
      </section>
    </AboutStyled>
  );
};

export default About;
