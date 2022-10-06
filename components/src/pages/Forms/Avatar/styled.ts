import styled from 'styled-components';

export const AvatarStyled = styled.div`
  padding: 5px;
  border: 2px dashed ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.primary};
  height: 140px;
  width: 140px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }

  .hidden {
    display: none;
  }

  label {
    height: 100%;
    ${({ theme }) => theme.flex.colum};
    align-items: center;
    justify-content: space-around;

    span {
      font-size: 0.8em;
    }
  }
`;
