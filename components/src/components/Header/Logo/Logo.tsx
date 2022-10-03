import React from 'react';
import { LogoStyle } from '../styled';

export const Logo = () => {
  return (
    <LogoStyle>
      <figure>
        <img src={require('../../../assets/img/ease.webp')} alt={'Error'} />
      </figure>
      <figcaption>
        <h2>ease</h2>
      </figcaption>
    </LogoStyle>
  );
};

export default Logo;
