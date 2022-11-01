import styled from 'styled-components';

export const ErrorMainStyle = styled.main`
  background: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    margin: auto;
    padding: 5px 40px;
    ${({ theme }) => theme.flex.row}
    align-items: center;

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

      a {
        padding: 15px 45px;
        letter-spacing: ${({ theme }) => theme.fonts.spacing};
        font-size: 1.133em;
        border-radius: 100px;
        line-height: ${({ theme }) => theme.fonts.height.primary};
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.primary};
        max-width: max-content;

        &:hover {
          background: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
`;
