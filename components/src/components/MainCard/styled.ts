import styled from 'styled-components';

export const MainCardStyled = styled.div`
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
