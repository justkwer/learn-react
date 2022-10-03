import React, { Component } from 'react';
import { getMovies, ImdbId } from '../../../constants/constants';
import Card from '../../../components/Card/Card';
import { CardsStyled } from '../styled';
import { ImbdMovies } from './Cards.models';

export default class Cards extends Component<Readonly<unknown>, { items: Array<ImbdMovies> }> {
  constructor(props: Readonly<unknown>) {
    super(props);
    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    const movies = ImdbId.map<Promise<ImbdMovies>>(getMovies);
    await Promise.all(movies);
    const itemsMovie: ImbdMovies[] = [];
    movies.map((el) =>
      el.then((value) => {
        itemsMovie.push(value);
      })
    );
    this.setState({ items: itemsMovie });
  }

  componentWillUnmount() {
    this.setState({ items: [] });
  }

  render() {
    const { items } = this.state;
    return (
      <CardsStyled>
        {items.map((item) => (
          <Card movie={item} key={item.Title} />
        ))}
      </CardsStyled>
    );
  }
}
