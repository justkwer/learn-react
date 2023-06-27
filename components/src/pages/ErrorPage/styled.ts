import styled from 'styled-components';
import { AboutStyled } from '../About/styled';

export const ErrorPageStyled = styled(AboutStyled)`
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

    figcaption {
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
