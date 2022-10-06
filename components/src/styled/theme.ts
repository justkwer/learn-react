import styled from 'styled-components';

export const Button = styled.button`
  padding: 15px 45px;
  letter-spacing: ${({ theme }) => theme.fonts.spacing};
  font-size: 1.133em;
  border-radius: 100px;
  line-height: ${({ theme }) => theme.fonts.height.primary};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const theme = {
  colors: {
    primary: '#4D4AE8',
    secondary: '#3733E5',
    dark: '#545454',
    black: '#000000',
    white: '#FFFFFF',
    whiteG: '#F8F8FF',
    green: '#008000',
  },
  sizes: {
    main: '1280px',
  },
  fonts: {
    familyP: 'Georgia, sans-serif',
    familyS: 'Arial, sans-serif',
    style: 'normal',
    weight: '400',
    size: '20px',
    align: 'center',
    line: '30px',
    height: {
      primary: '130%',
      secondary: '160%',
    },
    spacing: '0.06em',
  },
  buttons: {
    decoration: 'none',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    cursorD: 'default',
  },
  flex: {
    row: 'display: flex; justify-content: space-between;',
    colum: 'display: flex; justify-content: space-between; flex-direction: column;',
  },
  shadow: '0 0 10px 5px rgba(221, 221, 221, 1);',
  border: {
    primary: '20px',
    secondary: '40px',
  },
  padding: {
    primary: '20px 40px',
  },
};
