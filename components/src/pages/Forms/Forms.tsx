import React, { Component } from 'react';

import Title from './Title/Title';
import FirstName from './FirstName/FirstName';
import LastName from './LastName/LastName';
import BirthDate from './BirthDate/BirthDate';
import Gender from './Gender/Gender';
import Mail from './Mail/Mail';
import PhoneNumber from './PhoneNumber/PhoneNumber';
import Avatar from './Avatar/Avatar';
import Comments from './Comments/Comments';
import Consent from './Consent/Consent';
import Submit from './Submit/Submit';

import { FormsStyled } from './styled';

export default class Forms extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <FormsStyled>
        <Title />
        <form>
          <FirstName />
          <LastName />
          <BirthDate />
          <Gender />
          <Mail />
          <PhoneNumber />
          <Avatar />
          <Comments />
          <Consent />
          <Submit />
        </form>
      </FormsStyled>
    );
  }
}
