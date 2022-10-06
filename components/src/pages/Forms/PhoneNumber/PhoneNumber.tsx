import React, { Component } from 'react';

export default class PhoneNumber extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <label>
        Phone Number
        <input type="text" defaultValue="" />
      </label>
    );
  }
}
