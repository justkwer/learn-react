import React, { forwardRef, RefObject } from 'react';
import { CommentsStyled, CommentsTextarea } from './styled';

const Comments = forwardRef<HTMLTextAreaElement, { ref: RefObject<HTMLTextAreaElement> }>(
  (props, ref) => {
    return (
      <CommentsStyled>
        Additional Comments
        <CommentsTextarea ref={ref} defaultValue="" rows={5} placeholder="Winter is coming..." />
      </CommentsStyled>
    );
  }
);

export default Comments;
