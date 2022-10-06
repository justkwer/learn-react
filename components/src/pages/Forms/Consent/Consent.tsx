import React, { Component } from 'react';

export default class Consent extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <label>
        <input type="checkbox" /> I agree to give the highest score to this student.
      </label>
    );
  }
}
