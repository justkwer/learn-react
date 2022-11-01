import styled from 'styled-components';

export const CardsStyled = styled.div`
  ${({ theme }) => theme.flex.row}
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  padding: 20px;
  border-radius: ${({ theme }) => theme.border.secondary};
  box-shadow: ${({ theme }) => theme.shadow};
  max-width: 1100px;
  transform: ${(props: { isActive: boolean }) => (props.isActive ? 'scale(1)' : 'scale(0)')};
  transition: 0.5s;
`;

export const LoadingStyled = styled.div`
  padding: 50px 100px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.secondary};
  font-weight: 700;
  font-size: 2em;
  transform: ${(props: { isActive: boolean }) => (props.isActive ? 'scale(1)' : 'scale(0)')};
  transition: 0.5s;
`;
