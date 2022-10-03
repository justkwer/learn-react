import React, { ChangeEvent, Component, MouseEvent } from 'react';
import { SearchBarStyled } from '../styled';
import { Button } from '../../../styled/theme';
import { SvgGenerator } from '../../../components/SvgGenerator/SvgGenerator';

export default class SearchBar extends Component<{ text?: string }, { text: string }> {
  constructor(props: { text?: string }) {
    super(props);
    this.state = {
      text: localStorage.getItem('text') ?? 'Search',
    };
  }

  componentWillUnmount() {
    this.setLocalStorage(this.state.text === '' ? 'Search' : this.state.text);
  }

  setLocalStorage = (value: string) => {
    localStorage.setItem('text', value);
  };

  handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setLocalStorage(this.state.text);
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value.trim() === '' ? 'Search' : e.target.value });
  };

  render() {
    return (
      <SearchBarStyled>
        <div>
          <SvgGenerator id="search" />
          <input type="search" placeholder={this.state.text} onChange={this.handleChange} />
        </div>
        <Button onClick={this.handleClick}>Search</Button>
      </SearchBarStyled>
    );
  }
}
