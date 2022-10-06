import React, { Component } from 'react';
import { LabelStyled } from '../../styled';

export default class BirthDate extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <LabelStyled>
        Birth Date
        <input className="disabled" type="date" />
      </LabelStyled>
    );
  }
}
