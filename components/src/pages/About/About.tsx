import React from 'react';
import { AboutStyles } from './styled';

const About = () => {
  return (
    <AboutStyles>
      <section>
        <figure>
          <img src={require('../../assets/img/about.webp')} alt={'About us'} />
        </figure>
        <figcaption>
          <h1>Oops! We are tired.</h1>
          <p>We love sleep &#129316;</p>
        </figcaption>
      </section>
    </AboutStyles>
  );
};

export default About;
