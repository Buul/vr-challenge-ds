import { FC } from 'react';

import { Icon } from 'components/DataDisplay/Icon';
import { Variants as VariantsIcon } from 'components/DataDisplay/Icon/Icon.types';
import {
  iconVariantRuleForButtons,
  iconVariantsForButtons,
} from 'hook/components/useIcons';

import * as Styled from './Button.styled';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  variant,
  disabled,
  ...others
}) => (
  <Styled.Button
    {...others}
    disabled={disabled}
    variant={variant}
    iconRight={iconRight}
    iconLeft={iconLeft}
  >
    {(iconLeft && (
      <Icon
        name={iconLeft}
        size="xs"
        variant={
          iconVariantsForButtons[
            iconVariantRuleForButtons(disabled, variant || 'primary') ||
              'primary'
          ] as VariantsIcon
        }
      />
    )) ||
      (iconRight && <Styled.IconHidden />)}
    <span>{children}</span>
    {(iconRight && (
      <Icon
        name={iconRight}
        size="xs"
        variant={
          iconVariantsForButtons[
            iconVariantRuleForButtons(disabled, variant || 'primary') ||
              'primary'
          ] as VariantsIcon
        }
      />
    )) ||
      (iconLeft && <Styled.IconHidden />)}
  </Styled.Button>
);

export default Button;
