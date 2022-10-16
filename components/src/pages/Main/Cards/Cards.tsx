import React, { Component } from 'react';
import Card from '../../../components/Card/Card';
import { CardsStyled } from '../styled';
import { CardsProps, CardsState, ImbdSearch } from '../Main.model';

export default class Cards extends Component<CardsProps, CardsState> {
  constructor(props: CardsProps) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
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
    fetch(`https://www.omdbapi.com/?s=${this.props.searchText}&apikey=bac3fe50`)
      .then((res) => res.json() as Promise<ImbdSearch>)
      .then((result) => this.setState({ items: result.Search }));
  };

  render() {
    const { items } = this.state;

    return (
      <CardsStyled>
        {items.map((item) => (
          <Card movie={item} key={item.imdbID} />
        ))}
      </CardsStyled>
    );
  }
}
