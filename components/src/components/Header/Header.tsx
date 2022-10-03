import React from 'react';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import { HeaderStyle } from './styled';

const Header = () => {
  return (
    <HeaderStyle>
      <section>
        <Logo />
        <Navigation />
      </section>
    </HeaderStyle>
  );
};

export default Header;
