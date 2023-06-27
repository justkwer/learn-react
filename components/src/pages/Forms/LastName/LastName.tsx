import React, { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import { LabelStyled } from '../styled';
import { InputProps } from '../Forms.model';
import ValidError from '../../../components/ValidErorr/ValidError';

const LastName = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    !isValid && setIsValid(true);
    !isValid && props.validCallback('lastNameCheck');
  };

  useEffect(() => {
    setIsValid(props.isValidation as boolean);
  }, [props.isValidation]);

  return (
    <LabelStyled>
      Last Name
      <input ref={ref} type="text" placeholder="Snow" onChange={handleChange} />
      <ValidError isValid={isValid} validMessage="Please, enter Last Name" />
    </LabelStyled>
  );
});

export default LastName;
