import styled, { css } from 'styled-components';
import { addSpacingBottom } from 'utils/components/SpacingBottom/SpacingBottom.styles';

import { TypographyStyled } from './Typography.types';

const TypographyBase = css<TypographyStyled>`
  text-align: ${({ align }) => align};

  ${({ spacing }) => spacing && addSpacingBottom(spacing)};
`;

const variants = {
  principal: () => css`
    font-size: ${({ theme }) => theme.fontSize.intermediary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 120%;
  `,
  secondary: () => css`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.base};
  `,
  value: () => css`
    font-size: ${({ theme }) => theme.fontSize.base3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  `,
  base: () => css`
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 150%;
  `,
  baseBold: () => css`
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 120%;
  `,
  button: () => css`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 150%;
  `,
  title: () => css`
    font-size: ${({ theme }) => theme.fontSize.base2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 120%;
  `,
};

export const Paragraph = styled.p<TypographyStyled>`
  ${TypographyBase}
  ${({ variant }) => variants[variant || 'base']}
`;

export const Span = styled.span<TypographyStyled>`
  ${TypographyBase}
  ${({ variant }) => variants[variant || 'base']}
`;
