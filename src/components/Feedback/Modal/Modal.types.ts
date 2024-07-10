import { ReactNode } from 'react';

export type ModalStylesProps = {
  show: boolean;
  onClose: () => void;
  children?: ReactNode;
};

export type ModalProps = ModalStylesProps;
