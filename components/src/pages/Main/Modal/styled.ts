import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperStyled = styled.div`
  background: none;
  ${({ theme }) => theme.flex.colum};
  align-items: end;
  gap: 10px;

  button {
    padding: 20px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background: none;
    border-radius: 50%;
    max-width: max-content;
    box-shadow: ${({ theme }) => theme.shadow};

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
