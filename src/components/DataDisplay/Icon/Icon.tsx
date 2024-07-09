import { FC } from 'react';

import { iconList } from 'hook/components/useIcons';
import { filter } from 'lodash';

import * as Styled from './Icon.styled';
import { IconProps } from './Icon.types';

const filterIconListByName = (name: string) =>
  filter(iconList, ['name', name])[0];

const sizeRootVariants = {
  min: 'width: 18px; height: 18px;',
  xs: 'width: 20px; height: 20px;',
  sm: 'width: 24px; height: 24px;',
  md: 'width: 36px; height: 36px;',
  lg: 'width: 52px; height: 52px;',
};

const Icon: FC<IconProps> = ({ name, variant = 'primary', size = 'md' }) => (
  <Styled.IconRoot
    id="icon-wrapper"
    src={filterIconListByName(name).src}
    variant={variant}
    aria-hidden="true"
    beforeInjection={(svg) => {
      svg.setAttribute('style', `${sizeRootVariants[size]}`);
    }}
  />
);

export default Icon;
