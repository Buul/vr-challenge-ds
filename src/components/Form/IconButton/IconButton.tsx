import React, { FC } from 'react';

import {
  iconVariantRuleForButtons,
  iconVariantsForButtons,
} from '../../../hook/components/useIcons';
import { Icon } from '../../DataDisplay/Icon';
import {
  Sizes,
  Variants as VariantsIcon,
} from '../../DataDisplay/Icon/Icon.types';
import * as Styled from './IconButton.styled';
import { IconButtonProps } from './IconButton.types';

const sizeIcon = {
  md: 'xs',
  lg: 'sm',
};

const IconButton: FC<IconButtonProps> = ({
  icon,
  variant,
  sizeIconButton,
  disabled,
  ...others
}) => (
  <Styled.IconButtonComponent
    {...others}
    variant={variant}
    disabled={disabled}
    sizeIconButton={sizeIconButton}
  >
    <Icon
      name={icon}
      size={sizeIcon[sizeIconButton || 'md'] as Sizes}
      variant={
        iconVariantsForButtons[
          iconVariantRuleForButtons(disabled, variant || 'primary') || 'primary'
        ] as VariantsIcon
      }
    />
  </Styled.IconButtonComponent>
);

export default IconButton;
