import styled from 'styled-components';

export const InformationStyled = styled.div`
  ${({ theme }) => theme.flex.row}
  gap: 50px;
`;

export const InformationWrapper = styled.div`
  ${({ theme }) => theme.flex.colum};
  gap: 30px;
`;

export const GenderStyled = styled.select`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 5px 12px;
  border-radius: 100px;
  font-size: 1.133em;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;
