import React, { Component } from 'react';
import { SubmitStyled } from '../styled';

export default class Submit extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return <SubmitStyled type="submit" value="Submit Application" />;
  }
}
