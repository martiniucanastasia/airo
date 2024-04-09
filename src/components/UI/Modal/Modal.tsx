import { ModalStyled as S } from './styles';
import { ModalType } from './types';

import { ReactComponent as CrossSVG } from '@/assets/svg/close-icon.svg';
import { IconButton } from '../Buttons';
import { createPortal } from 'react-dom';
import useDestroy from '@/hooks/useDestroy';

const Modal = ({ children, isActive, onClose }: ModalType) => {
  const timeToDestroyMS = 300;

  const { isDestroyed } = useDestroy(isActive, timeToDestroyMS);

  return !isDestroyed
    ? createPortal(
        <>
          <S.Backdrop isActive={isActive} onClick={onClose}></S.Backdrop>
          <S.ModalContainer isActive={isActive}>
            {children}

            <S.ButtonContainer>
              <IconButton onClick={onClose} variant="tertiary" size="base">
                <CrossSVG />
              </IconButton>
            </S.ButtonContainer>
          </S.ModalContainer>
        </>,
        document.body
      )
    : null;
};

export default Modal;
