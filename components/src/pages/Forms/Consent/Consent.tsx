import React, { Component } from 'react';
import { ConsentStyled } from '../styled';

export default class Consent extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <ConsentStyled>
        <input type="checkbox" /> I agree to give the highest score to this student.
      </ConsentStyled>
    );
  }
}
