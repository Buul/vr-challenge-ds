import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import {
  Canvas,
  Container,
  Row,
  Title,
} from '../../../utils/StoriesComponents';

import { IconButton as IconButtonComponent, IconButtonProps } from '.';

const meta: Meta = {
  title: '🧩 Components/Form/IconButton',
  component: IconButtonComponent,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const argsProps: IconButtonProps = {
  icon: 'arrow-narrow-down',
};

export default meta;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 16px;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;

const RenderIconButton = ({ ...props }: IconButtonProps) => (
  <ButtonWrapper>
    <IconButtonComponent {...props} />
  </ButtonWrapper>
);

const ButtonDefault = (args: IconButtonProps) => (
  <>
    <Title>Icon Button</Title>
    <Container style={{ marginBottom: 36 }}>
      <Row>
        <RenderIconButton {...args} icon="plus" />
        <RenderIconButton {...args} variant="outline" icon="plus" />
        <RenderIconButton {...args} variant="text" icon="plus" />
      </Row>
    </Container>
  </>
);

const ButtonSize = (args: IconButtonProps) => (
  <>
    <Title>Icon Button Size</Title>
    <Container style={{ marginBottom: 36 }}>
      <Row>
        <RenderIconButton {...args} icon="check" />
        <RenderIconButton {...args} variant="outline" icon="check" />
        <RenderIconButton {...args} variant="text" icon="check" />
      </Row>
    </Container>
    <Container style={{ marginBottom: 36 }}>
      <Row>
        <RenderIconButton {...args} icon="heart" sizeIconButton="lg" />
        <RenderIconButton
          {...args}
          variant="outline"
          icon="heart"
          sizeIconButton="lg"
        />
        <RenderIconButton
          {...args}
          variant="text"
          icon="heart"
          sizeIconButton="lg"
        />
      </Row>
    </Container>
  </>
);

const Template: StoryFn<IconButtonProps> = args => (
  <Canvas>
    {ButtonDefault(args)}
    {ButtonSize(args)}
  </Canvas>
);

export const All = Template.bind({});

All.parameters = { options: { showPanel: true } };

All.args = { ...argsProps };
