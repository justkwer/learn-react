import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { SearchBarStyled } from './styled';
import { Button } from '../../../styled/theme';
import { SvgGenerator } from '../../../components/SvgGenerator/SvgGenerator';
import { SearchBarProps } from '../Main.model';

const SearchBar = ({ getLocalStorage, setSearchText }: SearchBarProps) => {
  const [text, setText] = useState(getLocalStorage);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchText(text);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setText(value === '' ? 'Game of Thrones' : value);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('text', text === '' ? 'Game of Thrones' : text);
    };
  }, [text]);

  return (
    <SearchBarStyled>
      <div>
        <SvgGenerator id="search" />
        <input type="search" placeholder={text} onChange={handleChange} />
      </div>
      <Button onClick={handleClick}>Search</Button>
    </SearchBarStyled>
  );
};

export default SearchBar;
