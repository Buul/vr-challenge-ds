import React, { FC, useEffect, useState } from 'react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

import { Loading } from '../Loading';
import * as Styled from './Toast.styled';
import { ToastProps } from './Toast.types';

const icon = {
  success: (
    <Styled.Icon>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#BCD952" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.8048 8.19526C18.0652 8.45561 18.0652 8.87772 17.8048 9.13807L11.1382 15.8047C10.8778 16.0651 10.4557 16.0651 10.1953 15.8047L6.86201 12.4714C6.60166 12.2111 6.60166 11.7889 6.86201 11.5286C7.12236 11.2682 7.54447 11.2682 7.80482 11.5286L10.6667 14.3905L16.862 8.19526C17.1224 7.93491 17.5445 7.93491 17.8048 8.19526Z"
          fill="white"
        />
      </svg>
    </Styled.Icon>
  ),
  error: (
    <Styled.Icon>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#A20000" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.52851 7.52876C7.78886 7.26841 8.21097 7.26841 8.47132 7.52876L11.9999 11.0574L15.5285 7.52876C15.7889 7.26841 16.211 7.26841 16.4713 7.52876C16.7317 7.78911 16.7317 8.21122 16.4713 8.47157L12.9427 12.0002L16.4713 15.5288C16.7317 15.7891 16.7317 16.2112 16.4713 16.4716C16.211 16.7319 15.7889 16.7319 15.5285 16.4716L11.9999 12.943L8.47132 16.4716C8.21097 16.7319 7.78886 16.7319 7.52851 16.4716C7.26816 16.2112 7.26816 15.7891 7.52851 15.5288L11.0571 12.0002L7.52851 8.47157C7.26816 8.21122 7.26816 7.78911 7.52851 7.52876Z"
          fill="white"
        />
      </svg>
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 7L17 17M7 17L17 7"
                      stroke="#01557D"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
