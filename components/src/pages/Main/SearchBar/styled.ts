import styled from 'styled-components';

export const SearchBarStyled = styled.form`
  ${({ theme }) => theme.flex.row};
  gap: 20px;
  justify-content: end;
  padding: 20px;
  border-radius: ${({ theme }) => theme.border.secondary};
  box-shadow: ${({ theme }) => theme.shadow};
  max-width: max-content;

  div {
    display: inline-flex;
    gap: 5px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 100px;
    padding: 5px;

    &:focus {
      border-color: ${({ theme }) => theme.colors.secondary};
    }

    input {
      font-size: 1.133em;
      width: 400px;
      border: none;
      background: none;

      &:focus {
        border-color: ${({ theme }) => theme.colors.secondary};
        outline: none;
      }
    }
  }

  button {
    padding: 5px 20px;
  }
`;
