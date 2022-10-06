import React, { Component } from 'react';
import { AvatarStyled } from './styled';
import { SvgGenerator } from '../../../components/SvgGenerator/SvgGenerator';

export default class Avatar extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <AvatarStyled>
        <label>
          <SvgGenerator id="avatar" />
          <span>Upload avatar</span>
          <input type="file" className="hidden" accept=".jpg, .jpeg, .png" />
        </label>
      </AvatarStyled>
    );
  }
}
