import styled from 'styled-components';

export const ConsentStyled = styled.label`
  ${({ theme }) => theme.flex.row};
  flex-direction: row-reverse;
  gap: 10px;
  justify-content: left;
  color: ${({ theme }) => theme.colors.dark};
`;
