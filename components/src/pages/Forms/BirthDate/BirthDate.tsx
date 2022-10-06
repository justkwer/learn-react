import React, { Component } from 'react';

export default class BirthDate extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <label>
        Birth Date
        <input type="date" defaultValue="" />
      </label>
    );
  }
}
