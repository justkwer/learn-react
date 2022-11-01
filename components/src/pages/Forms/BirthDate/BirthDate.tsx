import React, { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import { LabelStyled } from '../styled';
import { InputProps } from '../Forms.model';
import ValidError from '../../../components/ValidErorr/ValidError';

const BirthDate = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    !isValid && setIsValid(true);
    !isValid && props.validCallback('birthDateCheck');
  };

  useEffect(() => {
    setIsValid(props.isValidation as boolean);
  }, [props.isValidation]);

  return (
    <LabelStyled>
      Birth Date
      <input ref={ref} className="disabled" type="date" defaultValue="" onChange={handleChange} />
      <ValidError isValid={isValid} validMessage="Please, pick Birth Date" />
    </LabelStyled>
  );
});

export default BirthDate;
