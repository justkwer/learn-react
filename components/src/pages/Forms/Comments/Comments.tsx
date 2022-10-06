import React, { Component } from 'react';
import { CommentsStyled, CommentsTextarea } from '../styled';

export default class Comments extends Component<Readonly<unknown>, Readonly<unknown>> {
  render() {
    return (
      <CommentsStyled>
        Additional Comments
        <CommentsTextarea rows={5} placeholder="Winter is coming..." />
      </CommentsStyled>
    );
  }
}
