import styled from 'styled-components';

export const AvatarStyled = styled.div`
  position: relative;
  top: -10px;
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
    width: 100%;
    ${({ theme }) => theme.flex.colum};
    align-items: center;
    justify-content: space-around;

    span {
      font-size: 0.8em;
    }
  }

  img {
    position: relative;
    top: -130px;
    left: -3px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.border.primary};
    height: 105%;
    width: 105%;
    pointer-events: none;
  }

  p {
    padding-top: 10px;
    font-size: 0.7em;
    text-align: center;
    color: ${({ theme }) => theme.colors.red};
  }
`;
