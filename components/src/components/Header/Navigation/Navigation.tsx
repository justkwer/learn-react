import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationList } from '../../../constants/constants';
import { NavigationStyle } from '../styled';

const Navigation = () => {
  return (
    <NavigationStyle>
      <ul>
        {NavigationList.map(({ href, text }, index) => (
          <li key={index}>
            <NavLink end to={href}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyle>
  );
};

export default Navigation;
