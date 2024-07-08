import styled, { css } from 'styled-components';

import { Button } from '../Button';

import { IconButtonStyledProps } from './IconButton.types';

const sizeLabelVariants = (sizeIconButton = 'md') =>
  ({
    lg: css`
      height: 48px;
      width: 48px;
    `,
    md: css`
      height: 36px;
      width: 36px;
    `,
  })[sizeIconButton];

export const IconButtonComponent = styled(Button)<IconButtonStyledProps>`
  border-radius: 100%;
  ${({ sizeIconButton }) => sizeLabelVariants(sizeIconButton || 'md')}
  min-width: auto;
`;
