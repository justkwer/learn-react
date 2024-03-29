import React from 'react';
import { FormCardProps } from '../../pages/Forms/Forms.model';
import { FormCardStyled } from './styled';

const FormCard = ({ card }: FormCardProps) => {
  const { firstName, lastName, birthDate, gender, mail, comments, consent, avatar, phoneNumber } =
    card;
  return (
    <FormCardStyled>
      <img src={avatar} alt="Avatar" />
      <p className="name">
        {firstName}&nbsp;{lastName}
      </p>
      <p>{gender}</p>
      <p>{birthDate}</p>
      <p>{mail}</p>
      <p>{phoneNumber}</p>
      <p>Consent: {consent ? 'true' : 'false'}</p>
      <p>Comments: {comments}</p>
    </FormCardStyled>
  );
};

export default FormCard;
