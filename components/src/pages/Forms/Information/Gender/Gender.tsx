import React, { Component } from 'react';
import { GenderStyled } from '../styled';
import { LabelStyled } from '../../styled';

export default class Gender extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <LabelStyled>
        Gender
        <GenderStyled className="disabled">
          <option className="disabled" disabled selected>
            Please Select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </GenderStyled>
      </LabelStyled>
    );
  }
}
