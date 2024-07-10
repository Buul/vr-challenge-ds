import { ButtonHTMLAttributes } from 'react';

import { Icons } from '../../../types/Icons';

export type Variants = 'primary' | 'outline' | 'text';

export type Sizes = 'sm' | 'md';

export type ButtonStyledProps = {
  variant?: Variants;
  fullWidth?: boolean;
  size?: Sizes;
  iconLeft?: Icons;
  iconRight?: Icons;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyledProps;
