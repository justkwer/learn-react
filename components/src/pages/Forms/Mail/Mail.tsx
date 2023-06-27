import React, { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import { LabelStyled } from '../styled';
import { InputProps } from '../Forms.model';
import ValidError from '../../../components/ValidErorr/ValidError';

const Mail = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    !isValid && setIsValid(true);
    !isValid && props.validCallback('mailCheck');
  };

  useEffect(() => {
    setIsValid(props.isValidation as boolean);
  }, [props.isValidation]);

  return (
    <LabelStyled>
      E-mail
      <input ref={ref} type="text" placeholder="example@example.com" onChange={handleChange} />
      <ValidError isValid={isValid} validMessage="Please, enter Mail" />
    </LabelStyled>
  );
});

export default Mail;
