export interface SearchBarProps {
  getLocalStorage: string;
  setSearchText: (value: string) => void;
}

export interface CardsProps {
  searchText: string;
}

export interface CardsState {
  error: null;
  isLoaded: boolean;
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
}

export interface ImbdMovies {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<Rating>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  totalSeasons?: string;
  Response: string;
}

interface Rating {
  Source: string;
  Value: string;
}

