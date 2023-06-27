import styled from 'styled-components';
import { LabelStyled } from '../styled';

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
