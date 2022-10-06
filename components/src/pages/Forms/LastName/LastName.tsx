import React, { Component } from 'react';

export default class LastName extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <label>
        Last Name
        <input type="text" defaultValue="" />
      </label>
    );
  }
}
