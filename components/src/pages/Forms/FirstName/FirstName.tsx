import React, { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import { LabelStyled } from '../styled';
import { InputProps } from '../Forms.model';
import ValidError from '../../../components/ValidErorr/ValidError';

const FirstName = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    !isValid && setIsValid(true);
    !isValid && props.validCallback('firstNameCheck');
  };

  useEffect(() => {
    setIsValid(props.isValidation as boolean);
  }, [props.isValidation]);

  return (
    <LabelStyled>
      First Name
      <input ref={ref} type="text" placeholder="Jon" defaultValue="" onChange={handleChange} />
      <ValidError isValid={isValid} validMessage="Please, enter First Name" />
    </LabelStyled>
  );
});

export default FirstName;
