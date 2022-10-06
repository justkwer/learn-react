import React, { Component } from 'react';
import { LabelStyled } from '../../styled';

export default class FirstName extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <LabelStyled>
        First Name
        <input type="text" placeholder="Jon" />
      </LabelStyled>
    );
  }
}
