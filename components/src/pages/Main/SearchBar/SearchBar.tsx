import React, { ChangeEvent, Component, MouseEvent } from 'react';

export default class SearchBar extends Component<object, { text: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      text: 'Search...',
    };
  }

  componentDidMount() {
    const storageText = localStorage.getItem('text');
    storageText === null
      ? this.setLocalStorage(this.state.text)
      : this.setState({ text: storageText });
  }

  componentWillUnmount() {
    this.setLocalStorage(this.state.text);
  }

  setLocalStorage = (value: string) => {
    localStorage.setItem('text', value);
  };

  handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setLocalStorage(this.state.text);
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <form>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search</button>
      </form>
    );
  }
}
