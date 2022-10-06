import React, { Component } from 'react';

export default class FirstName extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <label>
        First Name
        <input type="text" defaultValue="" />
      </label>
    );
  }
}
