import React from 'react';
import { FormsCardsStyled } from './styled';
import { FormsCardsProps } from '../Forms.model';
import FormCard from '../../../components/FormCard/FormCard';

const FormsCards = ({ cards }: FormsCardsProps) => {
  return (
    <FormsCardsStyled>
      {cards.length &&
        cards.map((cardInfo) => (
          <FormCard
            card={cardInfo}
            key={((cardInfo.firstName as string) + cardInfo.lastName) as string}
          />
        ))}
    </FormsCardsStyled>
  );
};
export default FormsCards;
