import styled from 'styled-components';

export const FooterStyle = styled.footer`
  section {
    margin: auto;
    padding: 20px 40px;
    ${({ theme }) => theme.flex.row}
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.5em;
      font-family: ${({ theme }) => theme.fonts.familyP};
    }
  }
`;
