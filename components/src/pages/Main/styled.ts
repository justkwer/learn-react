import styled from 'styled-components';

export const MainStyled = styled.section`
  padding: 20px;
`;

export const SearchBarStyled = styled.form`
  ${({ theme }) => theme.flex.row};
  gap: 20px;
  justify-content: end;
  padding: 20px;

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
  gap: 20px;
  padding: 20px;
`;

export const CardStyled = styled.div`
  max-width: 250px;

  &:hover {
    box-shadow: 0 2px 35px 14px rgba(13, 13, 13, 0.04);
  }

  figure {
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
      height: 350px;
    }

    div {
      position: absolute;
      top: 2%;
      left: 2%;
      padding: 5px 10px;
      border-radius: 100px;
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  figcaption {
    max-width: 250px;

    div {
      display: inline-flex;
      font-size: 0.8em;
      font-weight: 700;
    }

    h3,
    p {
      padding: 3px;
    }

    h2 {
      font-family: ${({ theme }) => theme.fonts.familyS};
      color: ${({ theme }) => theme.colors.black};
      font-weight: 700;
      text-align: center;
      font-size: 1.133em;
      padding: 10px 0;
    }

    p {
      font-size: 0.8em;
    }

    h3 {
      font-size: 0.6em;
      letter-spacing: ${({ theme }) => theme.fonts.spacing};
      max-width: 100%;
    }
  }
`;
