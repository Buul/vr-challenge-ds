import styled from 'styled-components';

import breakpoints from '../../../utils/mediaQueries/media';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(27, 33, 38, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Content = styled.div`
  padding-top: 40px;
  height: 100vh;
  min-width: 300px;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.white};
  top: 0;
  right: 0;
  z-index: 100;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
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
