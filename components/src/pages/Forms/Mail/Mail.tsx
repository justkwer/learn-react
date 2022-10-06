import React, { Component } from 'react';

export default class Mail extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <label>
        E-mail
        <input type="text" defaultValue="" />
      </label>
    );
  }
}
