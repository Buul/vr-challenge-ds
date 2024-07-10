import React, { FC } from 'react';

import {
  iconVariantRuleForButtons,
  iconVariantsForButtons,
} from '../../../hook/components/useIcons';
import { Icon } from '../../DataDisplay/Icon';
import { Variants as VariantsIcon } from '../../DataDisplay/Icon/Icon.types';
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
