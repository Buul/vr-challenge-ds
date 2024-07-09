import { ReactSVG } from 'react-svg';

import styled, { css } from 'styled-components';

import { IconStyledProps } from './Icon.types';

const iconVariants = {
  primary: css`
    path {
      stroke: ${({ theme }) => theme.colors.primary};
    }

    .fill {
      fill: ${({ theme }) => theme.colors.primary};
    }
  `,
  secondary: css`
    path {
      stroke: ${({ theme }) => theme.colors.gray[900]};
    }

    .fill {
      fill: ${({ theme }) => theme.colors.gray[900]};
    }
  `,
  light: css`
    path {
      stroke: ${({ theme }) => theme.colors.gray[400]};
    }

    .fill {
      fill: ${({ theme }) => theme.colors.gray[400]};
    }
  `,
  colorless: css`
    path {
      stroke: ${({ theme }) => theme.colors.white};
    }

    .fill {
      fill: ${({ theme }) => theme.colors.white};
    }
  `,
};

export const IconRoot = styled(ReactSVG)<IconStyledProps>`
  ${({ variant }) => variant && iconVariants[variant]};
`;
