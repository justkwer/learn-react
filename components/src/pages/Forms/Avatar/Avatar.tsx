import React, { Component } from 'react';

export default class Avatar extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <label>
        Avatar upload
        <input type="file" />
      </label>
    );
  }
}
