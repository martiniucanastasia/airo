import { OptionType } from '@/components/UI/Dropdown/types';
import {
  IUserDevices,
  IUserGateway,
  LocationDataType,
  TransformedLocationDataType,
  UserDeviceType,
  UserGatewayType,
} from '@/types';

import Diacritics from 'diacritic';

export const transformGatewayLoadOptions = (
  data: IUserGateway,
  inputValue: string
): OptionType<string>[] => {
  const transformedData = Object.values(data).map((gateway: UserGatewayType) => {
    const { gatewayName } = gateway;
    return {
      label: gatewayName,
      value: gatewayName,
    };
  });

  return transformedData.filter((gateway) =>
    gateway.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

export const transformLocationLoadOptions = (
  data: LocationDataType[],
  inputValue: string
): OptionType<TransformedLocationDataType>[] => {
  const transformedData = data.map((locationData: LocationDataType) => {
    const { lat, lon, display_name, address } = locationData;
    const { city, country_code } = address;

    return {
      label: display_name,
      value: {
        lat,
        lng: lon,
        lon,
        display_name,
        city: city ?? 'UNKNOWN',
        country_code: country_code ?? 'UNKNOWN',
      },
    };
  });

  return transformedData.filter((locationData: OptionType<TransformedLocationDataType>) => {
    return Diacritics.clean(inputValue.toLowerCase())
      .split('')
      .every((word: string) => Diacritics.clean(locationData.label.toLowerCase()).includes(word));
  });
};

export const transformDevicesLoadOptions = (
  data: IUserDevices,
  inputValue: string
): OptionType<UserDeviceType>[] => {
  const transformedData = Object.values(data).map((device) => ({
    label: `${device.deviceName} - ${device.fullLocation}`,
    value: device,
  })) as OptionType<UserDeviceType>[];

  return transformedData.filter((item) =>
    Diacritics.clean(item.label.toLowerCase()).includes(Diacritics.clean(inputValue.toLowerCase()))
  );
};
