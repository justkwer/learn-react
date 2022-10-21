import styled from 'styled-components';
import { ConsentStyled } from '../Consent/styled';

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
