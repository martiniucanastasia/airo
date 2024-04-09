import { AuthUserStyled as S } from './styles';

import userImage from '@/assets/png/galina-image.png'; // temporary
import DeviceCard from '@/components/DeviceCard/DeviceCard';

import { ReactComponent as ModemSVG } from '@/assets/svg/modem-icon.svg';

import { ReactComponent as ShieldSVG } from '@/assets/svg/shield-with-checkmark.svg';
import { ReactComponent as SignOutSVG } from '@/assets/svg/sign-out-icon.svg';
import { ISettingsPanel } from '../types';
import { userSignOut } from '@/api/authentification';
import { getDevices } from '@/api/devices';
import { useEffect, useState } from 'react';
import { IUserDevices } from '@/types';
import { UserDeviceType } from '@/types';
import DeviceSettings from '../DeviceSettings/DeviceSettings';
import Modal from '@/components/UI/Modal/Modal';
import AddNewDevice from '@/components/AddNewDevice/AddNewDevice';
import flyToLocation from '@/utils/flyToLocation';
import { useMapContext } from '@/context/MapContext';

const AuthUser = ({
  setIsAuthentificated,
  userInfo,
  setUserInfo,
  onClose,
}: Pick<ISettingsPanel, 'setIsAuthentificated' | 'userInfo' | 'setUserInfo' | 'onClose'>) => {
  const [userDevices, setUserDevices] = useState<IUserDevices | null>(null);
  const [deviceSettings, setDeviceSettings] = useState<[string, UserDeviceType] | null>(null);
  const [modalIsActive, setModalIsActive] = useState(false);

  const { mapRef, setShouldMapDevicesRerender } = useMapContext();

  const singOutHandler = async () => {
    await userSignOut();
    setIsAuthentificated(false);
    setUserInfo(null);
    onClose();

    setShouldMapDevicesRerender(true); // rerender devices on map
  };

  let email, displayName, photoURL, uid;

  if (userInfo) {
    email = userInfo.email;
    displayName = userInfo.displayName;
    photoURL = userInfo.photoURL;
    uid = userInfo.uid; // todo: unique id - use to read/write to databse
  }

  const userPath = `users/id-${uid}/userDevices/`;

  // get user devices
  useEffect(() => {
    (async () => {
      const data = await getDevices(userPath);
      setUserDevices(data);
    })();
  }, [deviceSettings, modalIsActive]);

  return (
    <S.AuthUser>
      {deviceSettings ? (
        <DeviceSettings device={deviceSettings} setDevice={setDeviceSettings} userId={uid} />
      ) : (
        <>
          <S.User>
            <S.UserImage>
              <img src={photoURL ?? userImage} alt="user-image" />
            </S.UserImage>
            <S.UserDescription>
              <S.UserName>{displayName}</S.UserName>
              <S.UserTag>{'@' + email?.split('@')[0]}</S.UserTag>
            </S.UserDescription>
          </S.User>
          <S.DevicesContainer>
            {userDevices &&
              Object.entries(userDevices).map((device) => {
                const [id, userDevice] = device;
                const { deviceName, fullLocation, deviceInfo } = userDevice;
                return (
                  <DeviceCard
                    key={id}
                    title={deviceName}
                    address={fullLocation}
                    svgIcon={<ModemSVG />}
                    onClick={() => {
                      setDeviceSettings(device);
                      const { lat, lon: lng } = deviceInfo;
                      const coords = { lat, lng };
                      flyToLocation(mapRef, coords);
                    }}
                  />
                );
              })}
            <S.AddNewButton variant="tertiary" onClick={() => setModalIsActive(true)}>
              + Add new
            </S.AddNewButton>
          </S.DevicesContainer>
          <S.Buttons>
            <S.ButtonLeft fluid>
              <ShieldSVG />
              <span>Privacy</span>
            </S.ButtonLeft>
            <S.ButtonRight fluid onClick={singOutHandler}>
              <SignOutSVG />
              <span>Sign Out</span>
            </S.ButtonRight>
          </S.Buttons>
        </>
      )}
      <Modal isActive={modalIsActive} onClose={() => setModalIsActive(false)}>
        <AddNewDevice onClose={() => setModalIsActive(false)} userInfo={userInfo} />
      </Modal>
    </S.AuthUser>
  );
};

export default AuthUser;
