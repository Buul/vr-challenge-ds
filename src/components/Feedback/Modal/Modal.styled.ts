import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(27, 33, 38, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Content = styled.div`
  height: 100vh;
  width: 627px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  top: 0;
  right: 0;
  z-index: 100;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 150;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
