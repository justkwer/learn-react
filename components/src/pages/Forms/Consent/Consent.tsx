import React, { forwardRef, RefObject } from 'react';
import { ConsentStyled } from './styled';

export const Consent = forwardRef<HTMLInputElement, { ref: RefObject<HTMLInputElement> }>(
  (props, ref) => {
    return (
      <ConsentStyled>
        I agree to give the highest score to this student.
        <input ref={ref} type="checkbox" />
      </ConsentStyled>
    );
  }
);

export default Consent;
