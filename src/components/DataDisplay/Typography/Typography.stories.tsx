import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import {
  Canvas,
  Container,
  Row,
  Title,
} from '../../../utils/StoriesComponents';

import { Typography as TypographyComponent, TypographyProps } from '.';

const Table = styled.table`
  border: 1px solid black;
  padding: 12px;
  border-radius: 6px;

  td {
    font-size: 16px;
    padding: 0 6px;
    padding-bottom: 12px;
  }

  tr {
    margin: 0;
    padding: 0;
  }

  th {
    text-align: left;
    font-size: 24px;
    padding: 0 6px;
    font-weight: bold;
    padding-bottom: 8px;
  }

  .bold {
    font-weight: bold;
  }
`;

const meta: Meta = {
  title: '🧩 Components/DataDisplay/Typography',
  component: TypographyComponent,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

const argsProps: TypographyProps = {};

export default meta;

const Template: StoryFn<TypographyProps> = args => (
  <Canvas>
    <Title style={{ color: '#01557D' }}> Typography</Title>
    <Container style={{ marginTop: 48 }}>
      <Row>
        <TypographyComponent variant="principal" {...args}>
          p. Principal
        </TypographyComponent>
      </Row>
    </Container>
    <Container>
      <Row>
        <TypographyComponent variant="value" {...args}>
          span. Value
        </TypographyComponent>
      </Row>
    </Container>
    <Container>
      <Row>
        <TypographyComponent variant="title" {...args}>
          p. Title
        </TypographyComponent>
      </Row>
    </Container>
    <Container>
      <Row>
        <TypographyComponent variant="base" {...args}>
          p. Base
        </TypographyComponent>
      </Row>
    </Container>
    <Container>
      <Row>
        <TypographyComponent variant="baseBold" {...args}>
          p. Base bold
        </TypographyComponent>
      </Row>
    </Container>
    <Container>
      <Row>
        <TypographyComponent variant="secondary" {...args}>
          p. Secondary
        </TypographyComponent>
      </Row>
    </Container>
    <Container style={{ marginBottom: 48 }}>
      <Row>
        <TypographyComponent variant="button" {...args}>
          span. Button
        </TypographyComponent>
      </Row>
    </Container>
    <Title style={{ color: '#01557D' }}> Variants</Title>
    <Container>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>variant</th>
              <th>component</th>
              <th>font-size</th>
              <th>font-weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bold">principal</td>
              <td className="bold">{'<p />'}</td>
              <td className="bold">22px</td>
              <td className="bold">600</td>
            </tr>
            <tr>
              <td className="bold">value</td>
              <td className="bold">{'<span />'}</td>
              <td className="bold">20px</td>
              <td className="bold">600</td>
            </tr>

            <tr>
              <td className="bold">title</td>
              <td className="bold">{'<p />'}</td>
              <td className="bold">18px</td>
              <td className="bold">600</td>
            </tr>
            <tr>
              <td>base</td>
              <td>{'<p />'}</td>
              <td>16px</td>
              <td>400</td>
            </tr>
            <tr>
              <td className="bold">baseBold</td>
              <td className="bold">{'<p />'}</td>
              <td className="bold">16px</td>
              <td className="bold">600</td>
            </tr>
            <tr>
              <td>secondary</td>
              <td>{'<p />'}</td>
              <td>14px</td>
              <td>400</td>
            </tr>
            <tr>
              <td>button</td>
              <td>{'<small />'}</td>
              <td>12px</td>
              <td>500</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  </Canvas>
);

export const Default = Template.bind({});

Default.parameters = { options: { showPanel: true } };

Default.args = { ...argsProps };
