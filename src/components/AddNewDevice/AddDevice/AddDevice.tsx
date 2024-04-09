import { Button, IconButton } from '@/components/UI/Buttons';
import Input from '@/components/UI/Input/Input';
import { AddDeviceStyled as S } from './styles';

import { ReactComponent as GeolocationSVG } from '@/assets/svg/geo-location-2.svg';
import { OptionType } from '@/components/UI/Dropdown/types';
import { addDevice, getGateways } from '@/api/devices';
import { useState } from 'react';
import { getLocations } from '@/utils/getLocations';

import { LocationType } from '@/components/Map/types';
import { useMapContext } from '@/context/MapContext';
import { IUserGateway, LocationDataType, MetricsType, TransformedLocationDataType } from '@/types';
import { UserDeviceType } from '@/types';
import { useForm } from 'react-hook-form';
import FormAsyncDropdown from '@/components/UI/FormDropdown/FormAsyncDropdown';
import FormDropdown from '@/components/UI/FormDropdown/FormDropdown';
import useLoadOptions from '@/hooks/useLoadOptions';
import {
  transformGatewayLoadOptions,
  transformLocationLoadOptions,
} from '@/utils/transformLoadOptions';
import { UserInfoType } from '@/components/SettingsPanel/types';

const ZOOM_LEVEL = 16;

const metricsOptions: OptionType<string>[] = [
  { label: 'aqi', value: 'aqi' },
  { label: 'o3', value: 'o3' },
  { label: 'so2', value: 'so2' },
  { label: 'co', value: 'co' },
  { label: 'pm10', value: 'pm10' },
  { label: 'pm25', value: 'pm25' },
  { label: 'pollen_level_tree', value: 'pollen_level_tree' },
  { label: 'pollen_level_grass', value: 'pollen_level_grass' },
  { label: 'pollen_level_weed', value: 'pollen_level_weed' },
  { label: 'mold_level', value: 'mold_level' },
];

type Props = {
  onClose: () => void;
  userInfo: UserInfoType;
  onClick: () => void;
};

const AddDevice = ({ onClose, userInfo, onClick }: Props) => {
  const [gateway, setGatewayValue] = useState<OptionType<string> | null>(null);
  const [metricsTracked, setMetricsTracked] = useState<OptionType<string>[] | null>(null);
  const [, setPublicMetrics] = useState<OptionType<string>[] | null>(null);
  const [location, setLocation] = useState<OptionType<TransformedLocationDataType> | null>(null);
  const [deviceName, setDeviceName] = useState<string>('');
  const [deviceDescription, setDeviceDescription] = useState<string>('');

  const { mapRef, setShouldMapDevicesRerender } = useMapContext();

  // device tab is clicked
  onClick();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
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

  const flyToLocation = (deviceLocation: OptionType<TransformedLocationDataType> | null) => {
    if (!deviceLocation) return;

    const { lat, lon } = deviceLocation.value;
    const location: LocationType = { lat, lng: lon };
    mapRef?.current?.flyTo(location, ZOOM_LEVEL);
  };

  const gatewayLoadOptions = useLoadOptions<IUserGateway, string>(
    () => getGateways(),
    transformGatewayLoadOptions
  );

  const locationLoadOptions = useLoadOptions<LocationDataType[], TransformedLocationDataType>(
    (input) => getLocations(input ?? ''),
    transformLocationLoadOptions
  );

  const addDeviceHandler = () => {
    flyToLocation(location);
    if (location !== null && gateway !== null && metricsTracked !== null) {
      const newUserDevice: UserDeviceType = {
        deviceId: 0,
        deviceName,
        description: deviceDescription,
        gatewayId: gateway && gateway.value, // ?
        fullLocation: location.value.display_name,
        deviceInfo: {
          lat: location.value.lat,
          lon: location.value.lon,
          timezone: 'WHATEVER',
          city_name: location.value.city,
          country_code: location.value.country_code,
          state_code: 'WHATEVER',
          metrics: metricsTracked.reduce((prev: MetricsType[], curr) => {
            prev.push(curr.value as MetricsType);
            return prev;
          }, []),
        },
        isPublic: false,
      };

      const userDevicesPath = `users/id-${userInfo?.uid}/userDevices/`;

      // add to global devices database if is public (it is always public)
      // addDevice(newUserDevice);
      onClose();
      // add device to user database
      addDevice(newUserDevice, userDevicesPath);

      setShouldMapDevicesRerender(true); // rerender devices on map
    }
  };

  return (
    <S.DeviceContaier>
      <S.AddDevice>
        <S.Column>
          <S.InputContainer>
            <S.InputLabel>Device&apos;s name</S.InputLabel>
            <Input
              placeholder="Type name..."
              size="large"
              registerValue={register('deviceName', {
                required: true,
                maxLength: 20,
                minLength: 4,
              })}
              onChange={setDeviceName}
              status={errors.deviceName && 'error'}
            />
            {errors.deviceName?.type === 'required' && <S.Error>Field required </S.Error>}
            {errors.deviceName?.type === 'maxLength' && <S.Error>Max Length 20 </S.Error>}
            {errors.deviceName?.type === 'minLength' && <S.Error>Min Length 4 </S.Error>}
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel>Description</S.InputLabel>
            <Input
              placeholder="Type description..."
              size="large"
              registerValue={register('description', {
                required: true,
                maxLength: 100,
                minLength: 4,
              })}
              onChange={setDeviceDescription}
              status={errors.description && 'error'}
            />

            {errors.description?.type === 'required' && <S.Error>Field required </S.Error>}
            {errors.description?.type === 'maxLength' && <S.Error>Max Length 1000 </S.Error>}
            {errors.description?.type === 'minLength' && <S.Error>Min Length 10 </S.Error>}
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel>Gateway</S.InputLabel>
            <FormAsyncDropdown<string>
              name={'gateway'}
              control={control}
              loadOptions={gatewayLoadOptions}
              setOnChangeValue={setGatewayValue}
              status={errors.gateway ? 'error' : ''}
              placeholder={'Type gateway...'}
              rules={{
                required: true,
              }}
            />
            {errors.gateway?.type === 'required' && <S.Error>Field required </S.Error>}
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel>Location</S.InputLabel>
            <S.LocationContainer>
              <S.DropDownContainer>
                <FormAsyncDropdown<TransformedLocationDataType>
                  name={'location'}
                  control={control}
                  loadOptions={locationLoadOptions}
                  setOnChangeValue={setLocation}
                  status={errors.location ? 'error' : ''}
                  placeholder={'Type Location...'}
                  rules={{
                    required: true,
                  }}
                />
                {errors.location?.type === 'required' && <S.Error>Field required </S.Error>}
              </S.DropDownContainer>
              <IconButton variant="tertiary">
                <GeolocationSVG />
              </IconButton>
            </S.LocationContainer>
          </S.InputContainer>
        </S.Column>
        <S.Column>
          <S.InputContainer>
            <S.InputLabel>Metrics to be tracked</S.InputLabel>
            <FormDropdown<string>
              name={'metrics'}
              control={control}
              status={errors.metrics ? 'error' : ''}
              placeholder={'Select metrics'}
              isMulti
              setOnChangeValue={setMetricsTracked}
              options={metricsOptions}
              rules={{
                required: true,
                validate: {
                  includesPM25: (v) => v.some((item: OptionType<string>) => item.value === 'pm25'),
                },
              }}
            />
            {errors.metrics?.type === 'required' && <S.Error>Field required </S.Error>}
            {errors.metrics?.type === 'includesPM25' && (
              <S.Error>Field must contain pm25 metric</S.Error>
            )}
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel>Public metrics</S.InputLabel>
            <FormDropdown<string>
              name={'publicMetrics'}
              control={control}
              status={errors.publicMetrics ? 'error' : ''}
              placeholder={'Select metrics'}
              isMulti
              setOnChangeValue={setPublicMetrics}
              options={metricsOptions}
              rules={{
                required: true,
                validate: {
                  includesPM25: (v) => v.some((item: OptionType<string>) => item.value === 'pm25'),
                },
              }}
            />
            {errors.publicMetrics?.type === 'required' && <S.Error>Field required </S.Error>}
            {errors.publicMetrics?.type === 'includesPM25' && (
              <S.Error>Field must contain pm25 metric</S.Error>
            )}
          </S.InputContainer>
        </S.Column>
      </S.AddDevice>
      <S.ButtonGroup>
        <Button size="large" fluid onClick={handleSubmit(addDeviceHandler)}>
          Add device
        </Button>
        <Button variant="secondary" size="large" fluid onClick={onClose}>
          Cancel
        </Button>
      </S.ButtonGroup>
    </S.DeviceContaier>
  );
};

export default AddDevice;
