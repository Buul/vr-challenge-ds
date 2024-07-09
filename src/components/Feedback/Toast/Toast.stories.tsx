import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { Canvas, Container, Row, Title } from 'utils/StoriesComponents';

import { Meta, StoryFn } from '@storybook/react';

import { Toast as ToastComponent, ToastProps } from '.';
import { Button } from '../../Form';
import { ToastVariants } from './Toast.types';

const meta: Meta = {
  title: '🧩 Components/Feedbacks/Toast',
  component: ToastComponent,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

const argsProps: ToastProps = { variant: 'success' };

export default meta;

const Template: StoryFn<ToastProps> = (args) => {
  const [toastVariant, setToastVariant] = useState<ToastVariants>('success');

  const message = {
    success: 'Mensagem sucesso!',
    error: 'Mensagem erro!',
    loading: 'Mensagem carregando!',
  };

  const handleClick = (type: ToastVariants) => {
    setToastVariant(type);
    toast(message[type], { id: type });
  };
  return (
    <Canvas>
      <Title> Toast (success, error, loading)</Title>
      <Container>
        <div style={{ display: 'flex', width: '100%', marginLeft: 20 }}>
          <Button
            onClick={() => handleClick('success')}
            style={{ backgroundColor: '#BCD952', marginRight: '20px' }}
          >
            Success
          </Button>
          <Button
            onClick={() => handleClick('error')}
            style={{ backgroundColor: '#A20000', marginRight: '20px' }}
          >
            Error
          </Button>
          <Button
            onClick={() => handleClick('loading')}
            style={{ backgroundColor: '#228BE6', marginRight: '20px' }}
          >
            Loading
          </Button>
        </div>
        <Row>
          <ToastComponent {...args} variant={toastVariant} id={toastVariant} />
        </Row>
      </Container>
      <Container style={{ marginTop: 50 }}>
        <Title>
          This Toast use the <strong>react-hot-toast</strong>, see documentation
          at the link below
        </Title>
      </Container>
      <Container>
        <Title>
          <a
            href="https://react-hot-toast.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://react-hot-toast.com/
          </a>
        </Title>
      </Container>
    </Canvas>
  );
};

export const Default = Template.bind({});

Default.parameters = { options: { showPanel: true } };

Default.args = { ...argsProps };
