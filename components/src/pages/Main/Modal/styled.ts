import styled from 'styled-components';

export const ModalWrapper = styled.div`
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

export const ModalForm = styled.div`
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

export const ModalInfoStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.secondary};
  padding: 20px;
  ${({ theme }) => theme.flex.row};
  gap: 20px;
  transform: ${(props: { isActive: boolean }) => (props.isActive ? 'scale(1)' : 'scale(0)')};
  transition: 0.5s;

  figure {
    img {
      border-radius: ${({ theme }) => theme.border.primary};
    }
  }

  figcaption {
    ${({ theme }) => theme.flex.colum};
    max-width: 800px;

    h2 {
      font-family: ${({ theme }) => theme.fonts.familyS};
      color: ${({ theme }) => theme.colors.black};
      font-weight: 700;
      font-size: 1.3em;
      text-align: center;
      padding: 5px 10px;
    }

    h3 {
      text-align: center;
    }
  }

  h6 {
  }
`;

export const ModalInfoGeneratorStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  justify-content: flex-start;

  span {
    font-weight: 700;
  }
`;

export const ModalInfoRatingStyled = styled.div`
  ${({ theme }) => theme.flex.colum};
  align-items: center;
  gap: 10px;

  h3 {
    font-weight: 700;
    padding: 5px 10px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.border.primary};
  }

  ul {
    ${({ theme }) => theme.flex.row};
    gap: 20px;
    width: max-content;

    li {
      list-style-type: none;

      div {
        ${({ theme }) => theme.flex.row};
        justify-content: flex-start;

        span {
          font-weight: 700;
        }

        p {
          text-decoration: underline ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
