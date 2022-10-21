import React, { Component } from 'react';
import MainCard from '../../../components/MainCard/MainCard';
import { CardsStyled, LoadingStyled } from './styled';
import { CardsProps, CardsState, ImbdSearch } from '../Main.model';

export default class Cards extends Component<CardsProps, CardsState> {
  constructor(props: CardsProps) {
    super(props);
    this.state = {
      error: '',
      isLoaded: false,
      isActive: false,
      items: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps: { searchText: string }) {
    if (this.props.searchText !== prevProps.searchText) {
      this.getMovies();
    }
  }

  getMovies = () => {
    this.setState({ isActive: true });
    fetch(`https://www.omdbapi.com/?s=${this.props.searchText}&apikey=bac3fe50`)
      .then((res) => res.json() as Promise<ImbdSearch>)
      .then((result) => {
        this.setState({ items: result.Search, isLoaded: true });
        this.setState({ isActive: true });
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  };

  render() {
    const { items, isLoaded, error, isActive } = this.state;

    return isLoaded ? (
      <CardsStyled isActive={isActive}>
        {items ? (
          items.map((item) => (
            <MainCard movie={item} key={item.imdbID} setModalId={this.props.setModalId} />
          ))
        ) : (
          <h2>No matches found... Please try another movie title.</h2>
        )}
      </CardsStyled>
    ) : error === '' ? (
      <LoadingStyled isActive={isActive}>Loading...</LoadingStyled>
    ) : (
      <LoadingStyled isActive={isActive}>{error}</LoadingStyled>
    );
  }
}
