import { HeaderDropdownStyled, InputStyled as S } from './styles';

import { ReactComponent as AiroLogoSVG } from '@/assets/svg/airo-logo.svg';
import { ReactComponent as SettingsSVG } from '@/assets/svg/settings.svg';
import { ReactComponent as SearchSVG } from '@/assets/svg/search-icon.svg';
import { ReactComponent as NotificationSVG } from '@/assets/svg/notification-bell.svg';
import userImage from '@/assets/png/galina-image.png'; // temporary
import { ReactComponent as ChevronDownSVG } from '@/assets/svg/chevron(arrow)-down.svg';

import { IconButton } from '../UI/Buttons';
import { useState } from 'react';
import { Switch } from '../UI/Switch/Switch';
import { IUserDevices, UserDeviceType } from '@/types';

import { getDevices } from '@/api/devices';
import { onChangeType, OptionType } from '../UI/Dropdown/types';
import { useMapContext } from '@/context/MapContext';
import { LocationType } from '../Map/types';
import { User } from 'firebase/auth';

import { SingleValue } from 'react-select';
import useLoadOptions from '@/hooks/useLoadOptions';
import { transformDevicesLoadOptions } from '@/utils/transformLoadOptions';
import FormAsyncDropdown from '../UI/FormDropdown/FormAsyncDropdown';
import { useForm } from 'react-hook-form';

const ZOOM_LEVEL = 16;

const Header = ({ onClick, userInfo }: { onClick: () => void; userInfo: User | null }) => {
  const [switchIsChecked, setSwitchIsChecked] = useState<boolean>(false);
  const [notificationIsActive] = useState(true);
  const [, setSearchInput] = useState<SingleValue<OptionType<UserDeviceType>> | null>(null);

  const { mapRef } = useMapContext();

  const { control } = useForm({
    defaultValues: {
      deviceName: '',
      description: '',
      gateway: '',
      location: '',
      metrics: '',
      publicMetrics: '',
      searchDevice: '',
    },
  });

  const flyToLocation = (device: UserDeviceType) => {
    const { lat, lon } = device.deviceInfo;
    const location: LocationType = { lat, lng: lon };
    mapRef?.current?.flyTo(location, ZOOM_LEVEL);
  };

  const onDropdownChange: onChangeType<UserDeviceType | null> = (value) => {
    const option = value as SingleValue<OptionType<UserDeviceType>>;
    setSearchInput(option);

    if (option) {
      flyToLocation(option.value);
    }
  };

  let displayName, photoURL;

  if (userInfo) {
    displayName = userInfo.displayName;
    photoURL = userInfo.photoURL;
  }

  const devicesLoadoptions = useLoadOptions<IUserDevices, UserDeviceType>(
    () =>
      getDevices().then((data) => {
        if (userInfo) {
          // if user is logged in fetch list of his devices to display them in search bar
          const userId = userInfo?.uid;
          const path = `users/id-${userId}/userDevices/`;
          const userDevicesData = getDevices(path);
          return { ...data, ...userDevicesData };
        }
        return data;
      }),
    transformDevicesLoadOptions
  );

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.Logo>
          <AiroLogoSVG />
          <S.LogoLabel>by Grid Dynamics</S.LogoLabel>
        </S.Logo>
        <S.Search>
          <S.Clasterization>
            <S.SwitchLabel>Voronoi clasterization</S.SwitchLabel>
            <Switch isChecked={switchIsChecked} setIsChecked={setSwitchIsChecked} />
          </S.Clasterization>
          <S.InputContainer>
            <IconButton variant="tertiary">
              <SettingsSVG />
            </IconButton>
            <FormAsyncDropdown<UserDeviceType>
              name={'searchDevice'}
              control={control}
              styles={HeaderDropdownStyled}
              placeholder={'Type address...'}
              loadOptions={devicesLoadoptions}
              status={'none'}
              rules={{}}
              setOnChangeValue={onDropdownChange}
            />
            <IconButton variant="tertiary">
              <SearchSVG />
            </IconButton>
          </S.InputContainer>
        </S.Search>
        <S.UserContainer>
          <IconButton variant="tertiary">
            <S.NotificationContainer>
              <NotificationSVG />
              {notificationIsActive && <S.NotificationActive />}
            </S.NotificationContainer>
          </IconButton>
          <S.User>
            <S.UserImage>
              <img src={photoURL ?? userImage} alt="user-image" />
            </S.UserImage>
            <span>{displayName ?? 'Sign In'}</span>
            <S.UserSettingsIconButton variant="tertiary" onClick={onClick}>
              <ChevronDownSVG />
            </S.UserSettingsIconButton>
          </S.User>
        </S.UserContainer>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
