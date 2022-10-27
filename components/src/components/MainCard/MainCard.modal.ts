import { ImdbSearchProps } from '../../pages/Main/Main.model';
import { Dispatch, SetStateAction } from 'react';

export interface CardProps {
  movie: ImdbSearchProps;
  setModalId: Dispatch<SetStateAction<string>>;
}
