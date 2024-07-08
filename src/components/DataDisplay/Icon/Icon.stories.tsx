import { Meta, StoryFn } from '@storybook/react';
import { uniqueId } from 'lodash';
import styled from 'styled-components';

import { iconList } from '@/hook/components/useIcons';
import { Icons } from '@/types/Icons';

import {
  Canvas,
  Container,
  Row,
  Title,
} from '../../../utils/StoriesComponents';

import { Variants } from './Icon.types';
import { Icon as IconComponent, IconProps } from '.';

const meta: Meta = {
  title: '🧩 Components/DataDisplay/Icon',
  component: IconComponent,
  argTypes: {},
  parameters: {
    controls: { expanded: true, exclude: ['src'] },
  },
};

const argsProps: IconProps = {
  size: 'md',
  variant: 'primary',
  name: 'arrow-narrow-up',
};

export default meta;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  padding: 10px;
`;

const IconsWrapper = styled.div<{ variant?: Variants }>`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ variant }) =>
    variant === 'colorless' ? '#000000' : '#ffffff'};
`;

const Label = styled.span<{ variant?: Variants }>`
  font-size: 10px;
  text-align: center;
  margin-top: 4px;
  color: ${({ variant }) => (variant === 'colorless' ? '#ffffff' : '#000000')};
`;

const Template: StoryFn<IconProps> = args => (
  <Canvas>
    <Title> Icons</Title>
    <Container>
      <Row>
        <IconsWrapper variant={args.variant}>
          {iconList.map(icon => (
            <Item key={uniqueId()}>
              <IconComponent {...args} name={icon.name as Icons} />
              <Label variant={args.variant}>{icon.name}</Label>
            </Item>
          ))}
        </IconsWrapper>
      </Row>
    </Container>
  </Canvas>
);

export const All = Template.bind({});

All.parameters = {
  options: { showPanel: true },
  controls: { exclude: ['name', 'src'] },
  docs: {
    source: {
      code: ``,
    },
  },
};

All.args = { ...argsProps };
