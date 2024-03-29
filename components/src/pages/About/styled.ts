import styled from 'styled-components';

export const AboutStyled = styled.main`
  margin: auto;

  section {
    padding: 5px 40px;
    ${({ theme }) => theme.flex.row};
    align-items: center;

    figure {
      img {
        max-width: 800px;
        height: 100%;
      }
    }

    figcaption {
      padding: 20px 60px;
      ${({ theme }) => theme.flex.colum}
      gap: 40px;
      align-items: center;
      text-align: center;

      h1 {
        font-weight: 700;
        font-size: 3em;
        letter-spacing: ${({ theme }) => theme.fonts.spacing};
      }

      p {
        font-family: ${({ theme }) => theme.fonts.familyS};
        letter-spacing: ${({ theme }) => theme.fonts.spacing};
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  }
}
`;
