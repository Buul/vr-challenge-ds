import { ButtonHTMLAttributes } from 'react';

import { Icons } from '@/types/Icons';

import { Variants } from '../Button/Button.types';

type Sizes = 'md' | 'lg';

export type IconButtonStyledProps = {
  variant?: Variants;
  sizeIconButton?: Sizes;
};

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  IconButtonStyledProps & { icon: Icons };
