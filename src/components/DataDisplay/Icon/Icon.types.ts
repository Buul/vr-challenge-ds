import { Icons } from '../../../types/Icons';

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'min';

export type Variants = 'primary' | 'secondary' | 'colorless' | 'light';

export type IconStyledProps = {
  variant?: Variants;
  size?: Sizes;
};

export type IconProps = IconStyledProps & {
  name: Icons;
};
