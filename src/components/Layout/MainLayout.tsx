import { isSignedIn } from '@/api/authentification';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import { UserInfoType } from '../SettingsPanel/types';

import { MainLayoutStyled as S } from './styles';

const MainLayout = ({ children }: PropsWithChildren) => {
  const [settingsPangelIsActive, setSettingsPangelIsActive] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [isAuthentificated, setIsAuthentificated] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfoType>(null);

  useEffect(() => {
    (async () => {
      const response = await isSignedIn();
      setIsAuthentificated(response.status === 'success');
      setUserInfo(response.user);
    })();
  }, []);

  return (
    <S.MainLayout>
      <Header onClick={() => setSettingsPangelIsActive((prev) => !prev)} userInfo={userInfo} />
      <S.MainContent ref={contentRef}>
        {children}
        <SettingsPanel
          isActive={settingsPangelIsActive}
          onClose={() => setSettingsPangelIsActive(false)}
          container={contentRef?.current}
          isAuthentificated={isAuthentificated}
          setIsAuthentificated={setIsAuthentificated}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      </S.MainContent>
    </S.MainLayout>
  );
};

export default MainLayout;
