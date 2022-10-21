import React, { ChangeEvent, Component, MouseEvent } from 'react';
import { SearchBarStyled } from './styled';
import { Button } from '../../../styled/theme';
import { SvgGenerator } from '../../../components/SvgGenerator/SvgGenerator';
import { SearchBarProps } from '../Main.model';

export default class SearchBar extends Component<Readonly<SearchBarProps>, { text: string }> {
  constructor(props: Readonly<SearchBarProps>) {
    super(props);
    this.state = {
      text: this.props.getLocalStorage,
    };
  }

  componentWillUnmount() {
    localStorage.setItem('text', this.state.text === '' ? 'Game of Thrones' : this.state.text);
  }

  handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.setSearchText(this.state.text);
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim() === '' ? 'Game of Thrones' : e.target.value;
    this.setState({ text: value });
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
