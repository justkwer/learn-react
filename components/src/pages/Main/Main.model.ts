import { Dispatch, SetStateAction } from 'react';

export interface SearchBarProps {
  getLocalStorage: string;
  setSearchText: (value: string) => void;
}

export interface CardsProps {
  searchText: string;
  setModalId: Dispatch<SetStateAction<string>>;
}

export interface CardsState {
  error: string;
  isLoaded: boolean;
  isActive: boolean;
  items: Array<ImdbSearchProps>;
}

export interface ImbdSearch {
  Response: string;
  Search: Array<ImdbSearchProps>;
  totalResults: string;
}

export interface ImdbSearchProps {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface CardProps {
  movie: ImdbSearchProps;
  setModalId: Dispatch<SetStateAction<string>>;
}
