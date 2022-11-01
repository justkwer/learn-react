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

export const TitleStyled = styled.div`
  ${({ theme }) => theme.flex.colum}
  gap: 10px;
  align-items: center;
`;

export const ConsentStyled = styled.label`
  ${({ theme }) => theme.flex.row};
  flex-direction: row-reverse;
  gap: 10px;
  justify-content: left;
  color: ${({ theme }) => theme.colors.dark};
`;

export const SwitchCatStyled = styled(ConsentStyled)`
  div {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;

    input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .slider {
        background-color: #2196f3;
      }

      &:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }

      &:checked + .slider:before {
        transform: translateX(16px);
      }
    }

    span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.4s;
      border-radius: 24px;

      &:before {
        position: absolute;
        content: '';
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
      }
    }
  }
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

export const CommentsStyled = styled(LabelStyled)`
  width: 100%;
  text-align: center;
`;
export const CommentsTextarea = styled.textarea`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 5px 12px;
  border-radius: ${({ theme }) => theme.border.primary};
  font-size: 1.133em;
  resize: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

export const InformationStyled = styled.div`
  ${({ theme }) => theme.flex.row}
  gap: 40px;
`;

export const InformationWrapper = styled.div`
  ${({ theme }) => theme.flex.colum};
  gap: 10px;
`;

export const ValidErrorStyled = styled.p`
  font-size: 0.7em;
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
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
