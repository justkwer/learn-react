import React, { Component } from 'react';
import { InformationStyled, InformationWrapper } from './styled';
import FirstName from './FirstName/FirstName';
import BirthDate from './BirthDate/BirthDate';
import Mail from './Mail/Mail';
import LastName from './LastName/LastName';
import Gender from './Gender/Gender';
import PhoneNumber from './PhoneNumber/PhoneNumber';

export default class Information extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <InformationStyled>
        <InformationWrapper>
          <FirstName />
          <BirthDate />
          <Mail />
        </InformationWrapper>
        <InformationWrapper>
          <LastName />
          <Gender />
          <PhoneNumber />
        </InformationWrapper>
      </InformationStyled>
    );
  }
}
