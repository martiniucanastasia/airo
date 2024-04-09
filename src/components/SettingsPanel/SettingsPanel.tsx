import { SettingsPanelStyled as S } from './styles';

import { ReactComponent as CloseSVG } from '@/assets/svg/close-icon.svg';
import { ISettingsPanel } from './types';
import useDestroy from '@/hooks/useDestroy';
import { createPortal } from 'react-dom';
import NonAuthUser from './NonAuthUser/NonAuthUser';
import AuthUser from './AuthUser/AuthUser';

const SettingsPanel = ({
  isActive,
  onClose,
  container,
  isAuthentificated,
  setIsAuthentificated,
  userInfo,
  setUserInfo,
}: ISettingsPanel) => {
  const timeToDestroyMS = 300;
  const { isDestroyed } = useDestroy(isActive, timeToDestroyMS);

  return (
    <>
      {!isDestroyed
        ? createPortal(
            <S.SettingsPanel isActive={isActive}>
              <S.CloseButton variant="tertiary" onClick={onClose}>
                <CloseSVG />
              </S.CloseButton>
              {isAuthentificated ? (
                <AuthUser
                  setIsAuthentificated={setIsAuthentificated}
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                  onClose={onClose}
                />
              ) : (
                <NonAuthUser
                  setIsAuthentificated={setIsAuthentificated}
                  setUserInfo={setUserInfo}
                />
              )}
            </S.SettingsPanel>,
            container ?? document.body
          )
        : null}
    </>
  );
};

SettingsPanel.displayName = 'Settings Panel';

export default SettingsPanel;
