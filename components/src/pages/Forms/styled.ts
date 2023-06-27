import styled from 'styled-components';

export const FormsStyled = styled.section`
  ${({ theme }) => theme.flex.colum}
  padding: 20px;
  gap: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.border.secondary};

  h1,
  h2,
  label {
    letter-spacing: ${({ theme }) => theme.fonts.spacing};
  }

  h1 {
    font-size: 1.6em;
  }

  h2 {
    color: ${({ theme }) => theme.colors.dark};
  }

  .disabled {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export const LabelStyled = styled.label`
  ${({ theme }) => theme.flex.colum}
  gap: 10px;

  input {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 5px 12px;
    border-radius: 100px;
    font-size: 1.133em;

    &:focus {
      border-color: ${({ theme }) => theme.colors.secondary};
      outline: none;
    }
  }
`;

export const FormStyled = styled.form`
  ${({ theme }) => theme.flex.colum}
  gap: 15px;
  align-items: center;
`;

export const InputStyled = styled.input`
  padding: 15px 45px;
  letter-spacing: ${({ theme }) => theme.fonts.spacing};
  font-size: 1.133em;
  border-radius: 100px;
  line-height: ${({ theme }) => theme.fonts.height.primary};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: gray;
  }
`;

export const InformationStyled = styled.div`
  ${({ theme }) => theme.flex.row}
  gap: 40px;
`;

export const InformationWrapperStyled = styled.div`
  ${({ theme }) => theme.flex.colum};
  gap: 10px;
`;

export const CatImg = styled.img`
  animation: img 0.4s;
  position: absolute;
  bottom: 0;
  right: 0;

  @keyframes img {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
