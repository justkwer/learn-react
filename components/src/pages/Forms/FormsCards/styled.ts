import styled from 'styled-components';

export const FormsCardsStyled = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  ${({ theme }) => theme.flex.colum};
  gap: 10px;
  padding: 10px;
  overflow: hidden;
`;
