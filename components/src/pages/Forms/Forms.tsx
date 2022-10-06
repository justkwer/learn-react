import React, { Component } from 'react';

import Title from './Title/Title';
import Information from './Information/Information';
import Avatar from './Avatar/Avatar';
import Comments from './Comments/Comments';
import Consent from './Consent/Consent';
import Submit from './Submit/Submit';

import { FormsStyled, FormStyled } from './styled';

export default class Forms extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <FormsStyled>
        <Title />
        <FormStyled>
          <Avatar />
          <Information />
          <Comments />
          <Consent />
          <Submit />
        </FormStyled>
      </FormsStyled>
    );
  }
}
