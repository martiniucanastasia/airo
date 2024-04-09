import { NonAuthUserStyled as S } from './styles';

import { ReactComponent as SignInSVG } from '@/assets/svg/sign-in-big-icon.svg';
import { Button } from '@/components/UI/Buttons';
import { signIn } from '@/api/authentification';
import { ISettingsPanel, UserInfoType } from '../types';
import { SignInResponseType } from '@/types';
import { useMapContext } from '@/context/MapContext';

const NonAuthUser = ({
  setIsAuthentificated,
  setUserInfo,
}: Pick<ISettingsPanel, 'setIsAuthentificated' | 'setUserInfo'>) => {
  const { setShouldMapDevicesRerender } = useMapContext();

  const signInHandler = async () => {
    const result: SignInResponseType = await signIn();
    setIsAuthentificated((prev: boolean) => {
      prev = result.status === 'success';
      return prev;
    });
    setUserInfo((prev: UserInfoType) => {
      prev = result.user;
      return prev;
    });

    setShouldMapDevicesRerender(true); // rerender devices on map
  };

  return (
    <S.NonAuthUser>
      <S.Title>Settings</S.Title>
      <S.Container>
        <SignInSVG />
        <S.Paragraph>
          Please Log In via Gmail SSO account to have possibility to manage personal devices and
          recieve notifications.
        </S.Paragraph>
        <Button fluid size="large" onClick={signInHandler}>
          Sign In
        </Button>
        <Button variant="tertiary">About this application → </Button>
      </S.Container>
    </S.NonAuthUser>
  );
};

export default NonAuthUser;
