import React, { Component } from 'react';
import { movies } from '../../../constants/constants';
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

  componentDidMount() {
    this.setState({ items: movies });
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
