import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationList } from '../../../constants/constants';

const Navigation = () => {
  return (
    <nav>
      <ul>
        {NavigationList.map(({ href, text }, index) => (
          <li key={index}>
            <NavLink to={href}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
