import { FC, useEffect, useState } from 'react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

import { Loading } from '../Loading';
import * as Styled from './Toast.styled';
import { ToastProps } from './Toast.types';

const icon = {
  success: (
    <Styled.Icon>
      <img alt="ícone sucesso" src="./assets/icons/toast-img-success.svg" />
    </Styled.Icon>
  ),
  error: (
    <Styled.Icon>
      <img alt="ícone erro" src="./assets/icons/toast-img-error.svg" />
    </Styled.Icon>
  ),
  loading: (
    <Styled.Icon>
      <Loading height={22} width={22} />
    </Styled.Icon>
  ),
};

const ToasterComponent: FC<ToastProps> = ({
  variant,
  position = 'bottom-center',
  duration = 3000,
  id,
}) => {
  const [previousId, setPreviousId] = useState<string | null>(null);

  useEffect(() => {
    if (previousId) {
      toast.remove(previousId);
    }
    if (id) {
      setPreviousId(id);
    }
  }, [id]);

  const handleClose = () => {
    toast.remove();
  };

  return (
    <Styled.ToasterWrapper>
      <Toaster
        position={position}
        toastOptions={{
          className: '',
          duration,
          style: {
            width: '100%',
            color: '#545556',
            boxShadow:
              '0px 7px 7px -5px rgba(0, 0, 0, 0.04), 0px 10px 15px -5px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
            backgroundColor: '#ffffff',
            padding: '0 8px',
            minHeight: 56,
            fontSize: 14,
            fontStyle: 'normal',
            border: '1px solid  #E7E7E7',
            fontWeight: 400,
            textAlign: 'left',
            marginRight: 0,
            borderRadius: 4,
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ message }) => (
              <Styled.ToastWrapper>
                {icon[variant]}
                <Styled.MessageWrapper>{message}</Styled.MessageWrapper>
                <Styled.CloseButton onClick={handleClose}>
                  <img alt="ícone com letra X" src="./assets/icons/close.svg" />
                </Styled.CloseButton>
              </Styled.ToastWrapper>
            )}
          </ToastBar>
        )}
      </Toaster>
    </Styled.ToasterWrapper>
  );
};
export default ToasterComponent;
