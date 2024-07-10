import React from 'react';

import styled from 'styled-components';

import { Meta, StoryFn } from '@storybook/react';

import { Button as ButtonComponent, ButtonProps } from '.';
import {
  Canvas,
  Container,
  Row,
  Title,
} from '../../../utils/StoriesComponents';

const meta: Meta = {
  title: '🧩 Components/Form/Button',
  component: ButtonComponent,
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

const argsProps: ButtonProps = {};

export default meta;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 16px;
`;

const RenderButton = ({ children, ...props }: ButtonProps) => (
  <ButtonWrapper>
    <ButtonComponent {...props}>{children}</ButtonComponent>
  </ButtonWrapper>
);

const ButtonDefault = (args: ButtonProps) => (
  <>
    <Title>Button</Title>
    <Container style={{ marginBottom: 36 }}>
      <Row>
        <RenderButton {...args}>Primary</RenderButton>
        <RenderButton {...args} variant="outline">
          Outline
        </RenderButton>
        <RenderButton {...args} variant="text">
          Text
        </RenderButton>
      </Row>
    </Container>
  </>
);

const ButtonWithIcon = (args: ButtonProps) => (
  <>
    <Title>Button with icon</Title>
    <Container style={{ marginBottom: 36 }}>
      <Row>
        <RenderButton {...args} iconLeft="menu-2">
          Icon Left
        </RenderButton>
        <RenderButton {...args} iconRight="arrow-narrow-right">
          Icon Right
        </RenderButton>
        <RenderButton
          {...args}
          iconRight="arrow-narrow-right"
          iconLeft="menu-2"
        >
          Icon Left and Right
        </RenderButton>
      </Row>
    </Container>
    <Container style={{ marginBottom: 36 }}>
      <Row>
        <RenderButton {...args} variant="outline" iconLeft="menu-2">
          Icon Left
        </RenderButton>
        <RenderButton
          {...args}
          variant="outline"
          iconRight="arrow-narrow-right"
        >
          Icon Right
        </RenderButton>
        <RenderButton
          {...args}
          variant="outline"
          iconRight="arrow-narrow-right"
          iconLeft="menu-2"
        >
          Icon Left and Right
        </RenderButton>
      </Row>
    </Container>
    <Container style={{ marginBottom: 36 }}>
      <Row>
        <RenderButton {...args} variant="text" iconLeft="menu-2">
          Icon Left
        </RenderButton>
        <RenderButton {...args} variant="text" iconRight="arrow-narrow-right">
          Icon Right
        </RenderButton>
        <RenderButton
          {...args}
          variant="text"
          iconRight="arrow-narrow-right"
          iconLeft="menu-2"
        >
          Icon Left and Right
        </RenderButton>
      </Row>
    </Container>
  </>
);

const ButtonSize = (args: ButtonProps) => (
  <>
    <Title>Button Size</Title>
    <Container style={{ marginBottom: 36 }}>
      <Row>
        <RenderButton {...args}>MD</RenderButton>
        <RenderButton {...args} variant="outline">
          MD
        </RenderButton>
        <RenderButton {...args} variant="text">
          MD
        </RenderButton>
      </Row>
    </Container>
    <Container style={{ marginBottom: 36 }}>
      <Row>
        <RenderButton {...args} size="sm">
          SM
        </RenderButton>
        <RenderButton {...args} size="sm" variant="outline">
          SM
        </RenderButton>
        <RenderButton {...args} size="sm" variant="text">
          SM
        </RenderButton>
      </Row>
    </Container>
  </>
);

const Template: StoryFn<ButtonProps> = (args) => (
  <Canvas>
    {ButtonDefault(args)}
    {ButtonSize(args)}
    {ButtonWithIcon(args)}
  </Canvas>
);

export const All = Template.bind({});

All.parameters = { options: { showPanel: true } };

All.args = { ...argsProps };
