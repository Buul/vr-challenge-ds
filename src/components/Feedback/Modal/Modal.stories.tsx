import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Modal as ModalComponent, ModalProps } from '.';
import {
  Canvas,
  Container,
  Row,
  Title,
} from '../../../utils/StoriesComponents';
import { Button } from '../../Form';

const meta: Meta = {
  title: '🧩 Components/Feedbacks/Modal',
  component: ModalComponent,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

const argsProps: ModalProps = { show: false, onClose: () => {} };

export default meta;

const Template: StoryFn<ModalProps> = (args) => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <Canvas>
      <Title>Modal</Title>
      <Container>
        <Button size="sm" onClick={() => setOpenModal(true)}>
          Open
        </Button>
        <Row>
          <ModalComponent
            {...args}
            show={openModal}
            onClose={() => setOpenModal(false)}
          />
        </Row>
      </Container>
    </Canvas>
  );
};

export const Default = Template.bind({});

Default.parameters = { options: { showPanel: true } };

Default.args = { ...argsProps };
