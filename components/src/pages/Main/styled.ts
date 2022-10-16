import styled from 'styled-components';

export const MainStyled = styled.section`
  padding: 20px;
  ${({ theme }) => theme.flex.colum};
  gap: 30px;
  align-items: end;
`;

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

export const CardsStyled = styled.div`
  ${({ theme }) => theme.flex.row}
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  padding: 20px;
  border-radius: ${({ theme }) => theme.border.secondary};
  box-shadow: ${({ theme }) => theme.shadow};
  max-width: 1100px;
`;

export const CardStyled = styled.div`
  width: 250px;
  border-radius: ${({ theme }) => theme.border.primary};
  padding: 5px;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
    cursor: pointer;
  }

  figure {
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
      height: 350px;
      border-radius: ${({ theme }) => theme.border.primary};
    }

    h3,
    h4 {
      padding: 5px;
      bottom: 2%;
      letter-spacing: ${({ theme }) => theme.fonts.spacing};
      position: absolute;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      border-radius: ${({ theme }) => theme.border.primary};
    }

    h3 {
      right: 2%;
    }

    h4 {
      left: 2%;
    }
  }

  figcaption {
    max-width: 250px;

    h2 {
      font-family: ${({ theme }) => theme.fonts.familyS};
      color: ${({ theme }) => theme.colors.black};
      font-weight: 700;
      text-align: center;
      font-size: 1.133em;
      padding: 10px 0;
    }
  }
`;
