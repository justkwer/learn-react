import React, { Component } from 'react';

export default class Comments extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <label>
        Additional Comments
        <input type="textarea" />
      </label>
    );
  }
}
