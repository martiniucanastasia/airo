import { pxToRem } from '@/styles/_common';
import styled, { css, DefaultTheme, keyframes, ThemedStyledProps } from 'styled-components';
import { ModalType } from './types';

const showAnimation = keyframes` 
  0% {
    opacity: 0;
    }
  100% {
    opacity: 1;
  }
`;

const hideAnimation = keyframes` 
  0% {
    opacity: 1;
    }
  100% {
    opacity: 0;
  }
`;

const showModal = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -20%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const getModalActiveStyles = ({
  isActive,
}: ThemedStyledProps<Pick<ModalType, 'isActive'>, DefaultTheme>) => {
  if (isActive)
    return css`
      animation: ${showModal} 1s;
    `;
  else {
    return css`
      animation: ${showAnimation} 0.3s forwards reverse;
    `;
  }
};

const getBackdropActiveStyles = ({
  isActive,
}: ThemedStyledProps<Pick<ModalType, 'isActive'>, DefaultTheme>) => {
  if (isActive)
    return css`
      animation: ${showAnimation} 1s forwards;
    `;
  else {
    return css`
      animation: ${hideAnimation} 0.3s forwards;
    `;
  }
};

const ModalStyled = {
  Backdrop: styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.45);

    height: 100%;
    width: 100%;
    z-index: 99;
    transition: ease;
    ${getBackdropActiveStyles}
  `,
  ModalContainer: styled.div<Pick<ModalType, 'isActive'>>`
    padding: ${pxToRem(30)};
    background-color: var(--light-black-color);

    ${getModalActiveStyles};

    position: fixed;
    float: left;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    z-index: 100;
  `,
  ButtonContainer: styled.div.attrs({ 'aria-hidden': true })`
    position: absolute;
    right: ${pxToRem(5)};
    top: ${pxToRem(5)};
  `,
};

export { ModalStyled };
