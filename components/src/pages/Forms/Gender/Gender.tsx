import React, { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import { GenderStyled } from './styled';
import { SelectProps } from '../Forms.model';
import ValidError from '../../../components/ValidErorr/ValidError';
import { LabelStyled } from '../styled';

const Gender = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    !isValid && setIsValid(true);
    !isValid && props.validCallback('genderCheck');
  };

  useEffect(() => {
    setIsValid(props.isValidation as boolean);
  }, [props.isValidation]);

  return (
    <LabelStyled>
      Gender
      <GenderStyled
        ref={ref}
        className="disabled"
        defaultValue="Please Select"
        onChange={handleChange}
      >
        <option className="disabled" disabled value="Please Select">
          Please Select
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </GenderStyled>
      <ValidError isValid={isValid} validMessage="Need pick gender" />
    </LabelStyled>
  );
});

export default Gender;
