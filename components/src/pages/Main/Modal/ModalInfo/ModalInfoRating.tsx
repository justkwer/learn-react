import React from 'react';
import { Rating } from '../Modal.model';
import { ModalInfoRatingStyled } from './styled';

const ModalInfoRating = ({ ratings }: { ratings: Array<Rating> }) => {
  return (
    <ModalInfoRatingStyled>
      <h3>Ratings</h3>
      <ul>
        {ratings?.map((rating, index) => (
          <li key={index}>
            <div>
              <span>Source:&nbsp;</span>
              <p>{rating.Source}</p>
            </div>
            <div>
              <span>Value:&nbsp;</span>
              <p>{rating.Value}</p>
            </div>
          </li>
        ))}
      </ul>
    </ModalInfoRatingStyled>
  );
};

export default ModalInfoRating;
