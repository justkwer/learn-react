import React, { Component } from 'react';
import { LabelStyled } from '../../styled';

export default class LastName extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <LabelStyled>
        Last Name
        <input type="text" placeholder="Snow" />
      </LabelStyled>
    );
  }
}
