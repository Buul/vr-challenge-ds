import { HTMLAttributes } from 'react';

import { SpacingBottomType } from '../../../types/SpacingBottom';

export type Variant =
  | 'principal'
  | 'secondary'
  | 'base'
  | 'baseBold'
  | 'title'
  | 'value'
  | 'button';

export type TextAlign = 'center' | 'left' | 'right' | 'justify';

export type TypographyStyled = {
  variant?: Variant;
  align?: TextAlign;
  spacing?: SpacingBottomType;
};

export type TypographyProps = HTMLAttributes<HTMLElement> & TypographyStyled;
