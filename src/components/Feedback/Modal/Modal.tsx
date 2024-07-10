import React, { FC } from 'react';

import * as Styled from './Modal.styled';
import { ModalProps } from './Modal.types';

const ModalComponent: FC<ModalProps> = ({ show, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {show && (
        <>
          <Styled.Wrapper
            onClick={(e: any) => {
              e.stopPropagation();
              onClose();
            }}
          />
          <Styled.Content>
            {children}
            <Styled.ButtonClose onClick={handleClose}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.96967 0.96967C1.26256 0.676777 1.73744 0.676777 2.03033 0.96967L11.0303 9.96967C11.3232 10.2626 11.3232 10.7374 11.0303 11.0303C10.7374 11.3232 10.2626 11.3232 9.96967 11.0303L0.96967 2.03033C0.676777 1.73744 0.676777 1.26256 0.96967 0.96967Z"
                  fill="#1B2126"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0303 0.96967C11.3232 1.26256 11.3232 1.73744 11.0303 2.03033L2.03033 11.0303C1.73744 11.3232 1.26256 11.3232 0.96967 11.0303C0.676777 10.7374 0.676777 10.2626 0.96967 9.96967L9.96967 0.96967C10.2626 0.676777 10.7374 0.676777 11.0303 0.96967Z"
                  fill="#1B2126"
                />
              </svg>
            </Styled.ButtonClose>
          </Styled.Content>
        </>
      )}
    </>
  );
};
export default ModalComponent;
