import React, { Component } from 'react';
import { LabelStyled } from '../../styled';

export default class Mail extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <LabelStyled>
        E-mail
        <input type="text" placeholder="example@example.com" />
      </LabelStyled>
    );
  }
}
