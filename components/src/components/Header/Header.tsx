import React from 'react';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import { HeaderStyled } from './styled';

const Header = () => {
  return (
    <HeaderStyled>
      <section>
        <Logo />
        <Navigation />
      </section>
    </HeaderStyled>
  );
};

export default Header;
