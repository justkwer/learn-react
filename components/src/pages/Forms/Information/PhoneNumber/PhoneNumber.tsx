import React, { Component } from 'react';
import { LabelStyled } from '../../styled';

export default class PhoneNumber extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <LabelStyled>
        Phone Number
        <input type="text" placeholder="(000) 000 0000" />
      </LabelStyled>
    );
  }
}
