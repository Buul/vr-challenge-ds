import styled, { css } from 'styled-components';

import breakpoints from '@/utils/mediaQueries/media';

import { ButtonProps } from './Button.types';

const variantStyles = (variant = 'primary') =>
  ({
    primary: css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};

      &:not(#NOTHOVER) {
        &:not([disabled]):hover {
          opacity: 0.7;
        }
      }

      &:disabled {
        background-color: ${({ theme }) => theme.colors.gray[400]};
      }
    `,
    outline: css`
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};

      &:not(#NOTHOVER) {
        &:not([disabled]):hover {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
          border: none;
          svg {
            path {
              stroke: ${({ theme }) => theme.colors.white};
            }
          }
        }
      }

      &:disabled {
        border: 1px solid ${({ theme }) => theme.colors.gray[400]};
        color: ${({ theme }) => theme.colors.gray[400]};
      }
    `,
    text: css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};

      &:not(#NOTHOVER) {
        &:not([disabled]):hover {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
          svg {
            path {
              stroke: ${({ theme }) => theme.colors.white};
            }
          }
        }
      }

      &:disabled {
        color: ${({ theme }) => theme.colors.gray[400]};
      }
    `,
  })[variant];

const sizeLabelVariants = (size = 'md') =>
  ({
    sm: css`
      height: 32px;
      line-height: 0;
    `,
    md: css`
      height: 48px;
    `,
  })[size];

export const Button = styled.button<ButtonProps>`
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: none;

  span {
    letter-spacing: 0.25px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  &:disabled {
    cursor: not-allowed;
    border: none;
  }

  ${({ variant }) => variantStyles(variant)}
  ${({ size }) => sizeLabelVariants(size || 'md')}

  ${({ iconLeft, iconRight }) =>
    (iconRight || iconLeft) &&
    css`
      justify-content: space-between;
      span {
        padding: 0 ${({ theme }) => theme.spacing.xs};
      }
    `}


  @media (max-width: ${breakpoints.sm}) {
    ${() => sizeLabelVariants('sm')}
  }
`;

export const IconHidden = styled.div`
  visibility: hidden;
  width: 20px;
`;
