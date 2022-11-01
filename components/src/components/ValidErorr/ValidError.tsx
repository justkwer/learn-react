import React from 'react';
import { ValidErrorStyled } from './styled';

const ValidError = (props: { isValid: boolean; validMessage: string }) => {
  const { isValid, validMessage } = props;
  return (
    <>
      {isValid ? (
        <ValidErrorStyled style={{ opacity: '0' }}>no Error</ValidErrorStyled>
      ) : (
        <ValidErrorStyled>{validMessage}</ValidErrorStyled>
      )}
    </>
  );
};

export default ValidError;
