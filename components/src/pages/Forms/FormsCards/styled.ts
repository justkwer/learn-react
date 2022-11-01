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

export const FormCardStyled = styled.div`
  padding: 7px;
  border: 2px dashed ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.primary};

  ${({ theme }) => theme.flex.colum};
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.border.primary};
  }

  p {
    max-width: 300px;
  }

  animation: div 0.2s;
  @keyframes div {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .name {
    text-transform: capitalize;
  }
`;
