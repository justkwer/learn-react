import styled from 'styled-components';

export const MainStyled = styled.section`
  padding: 20px;
  ${({ theme }) => theme.flex.colum};
  gap: 30px;
  align-items: end;
`;
