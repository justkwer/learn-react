import styled from 'styled-components';

export const HeaderStyle = styled.header`
  section {
    padding: 10px 40px;
    ${({ theme }) => theme.flex.row};
    gap: 50px;
    align-items: center;
    justify-content: center;
  }
`;

export const NavigationStyle = styled.nav`
  ul {
    display: flex;
    gap: 35px;

    li {
      list-style-type: none;

      a {
        color: ${({ theme }) => theme.colors.dark};

        &:hover {
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active {
        color: ${({ theme }) => theme.colors.black};
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        cursor: ${({ theme }) => theme.buttons.cursorD};
      }
    }
  }
`;

export const LogoStyle = styled.div`
  figure {
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }

  figcaption {
    h2 {
      text-align: center;
      font-size: 1.3em;
      letter-spacing: 0.1em;
      margin-block: 0;
      margin-top: -10px;
    }
  }
`;
