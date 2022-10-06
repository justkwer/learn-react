import React, { Component } from 'react';

export default class Gender extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <label>
        Gender
        <select>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option selected value="Please Select">
            Please Select
          </option>
        </select>
      </label>
    );
  }
}
