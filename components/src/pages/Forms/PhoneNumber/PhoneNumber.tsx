import React, { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import { LabelStyled } from '../styled';
import { InputProps } from '../Forms.model';
import ValidError from '../../../components/ValidErorr/ValidError';

const PhoneNumber = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    !isValid && setIsValid(true);
    !isValid && props.validCallback('phoneNumberCheck');
  };

  useEffect(() => {
    setIsValid(props.isValidation as boolean);
  }, [props.isValidation]);

  return (
    <LabelStyled>
      Phone Number
      <input ref={ref} type="text" placeholder="(000) 000 0000" onChange={handleChange} />
      <ValidError isValid={isValid} validMessage="Please, enter Phone Number" />
    </LabelStyled>
  );
});

export default PhoneNumber;
