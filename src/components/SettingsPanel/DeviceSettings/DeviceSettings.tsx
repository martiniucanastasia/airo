import {
  AirQualityType,
  LocationDataType,
  MetricsType,
  TransformedLocationDataType,
  UserDeviceType,
} from '@/types';
import { Dispatch, useEffect, useState } from 'react';
import { DeviceSettingsStyled as S, LocationDropdownStyled } from './styles';

import { ReactComponent as GeoSVG } from '@/assets/svg/geo-location-2.svg';
import { ReactComponent as EditSVG } from '@/assets/svg/edit-icon.svg';
import { ReactComponent as DeleteSVG } from '@/assets/svg/delete-icon.svg';
import { createMetricsQuery } from '@/utils/createMetricsQuery';
import { deleteDevice, getAirQuality, updateDevice } from '@/api/devices';
import Accordion from '@/components/UI/Accordion/Accordion';
import AccordionSummary from '@/components/UI/Accordion/AccordionSummary';
import AccordionDetails from '@/components/UI/Accordion/AccordionDetails';
import { Button } from '@/components/UI/Buttons';
import { SingleValue } from 'react-select';
import { AsyncDropdown } from '@/components/UI/Dropdown/AsyncDropdown';
import useLoadOptions from '@/hooks/useLoadOptions';
import { getLocations } from '@/utils/getLocations';
import { transformLocationLoadOptions } from '@/utils/transformLoadOptions';
import { OptionType } from '@/components/UI/Dropdown/types';
import { useMapContext } from '@/context/MapContext';
import Input from '@/components/UI/Input/Input';
import { Switch } from '@/components/UI/Switch/Switch';
import flyToLocation from '@/utils/flyToLocation';

interface Props {
  device: [string, UserDeviceType];
  setDevice: Dispatch<React.SetStateAction<[string, UserDeviceType] | null>>;
  userId: string | undefined;
}

const DeviceSettings = ({ device, setDevice, userId }: Props) => {
  const [deviceId, userDevice] = device;
  const [editedDevice, setEditedDevice] = useState<UserDeviceType>(
    JSON.parse(JSON.stringify(userDevice))
  );

  const { deviceName, description, deviceInfo } = editedDevice;
  const { metrics } = deviceInfo;
  const metricsQuery = createMetricsQuery(metrics);

  const [commentIsActive, setCommentIsActive] = useState<boolean>(false);
  const [locationIsActive, setLocationIsActive] = useState<boolean>(false);
  const [commentValue, setCommentValue] = useState(description);
  const [deviceLocation, setDeviceLocation] =
    useState<OptionType<TransformedLocationDataType> | null>(null);

  const [deviceIsPublic, setDeviceIsPublic] = useState(userDevice.isPublic);

  const [airQuality, setAirQuality] = useState<
    Record<MetricsType, string | number> | AirQualityType
  >();
  const path = `users/id-${userId}/userDevices/`;

  const { mapRef, setShouldMapDevicesRerender } = useMapContext();

  useEffect(() => {
    // we dont need asyncronous action here, but since airQuality api is mocked I will leave it like that
    (async () => {
      const data = await getAirQuality(metricsQuery);
      setAirQuality(data);
    })();
  }, [editedDevice]);

  // set device location in asyncdropdown
  useEffect(() => {
    const [, description] = device;
    const { deviceInfo, fullLocation } = description;
    const { lat, lon, city_name, country_code } = deviceInfo;

    const option: OptionType<TransformedLocationDataType> = {
      label: fullLocation,
      value: {
        lat,
        lon,
        lng: lon,
        display_name: fullLocation,
        city: city_name,
        country_code,
      },
    };
    setDeviceLocation(option);
  }, []);

  const removeDeviceHandler = () => {
    deleteDevice(deviceId, path);
    setDevice(null);
    setShouldMapDevicesRerender(true);
  };

  const deleteMetricsHandler = (name: string) => {
    editedDevice.deviceInfo.metrics = editedDevice.deviceInfo.metrics?.filter(
      (metric) => metric !== name
    );
    setEditedDevice({ ...editedDevice });
  };

  const editDeviceHandler = () => {
    updateDevice(deviceId, editedDevice, path);
    setDevice(null);

    if (deviceIsPublic) {
      // add device to publice list
      updateDevice(deviceId, editedDevice);
    } else {
      deleteDevice(deviceId);
    }
    setShouldMapDevicesRerender(true);
  };

  const editCommentHandler = () => {
    if (commentIsActive === true) {
      editedDevice.description = commentValue;
      setEditedDevice({ ...editedDevice });
    }
    setCommentIsActive((prev) => !prev);
  };

  const setPublicDeviceHandler = () => {
    setDeviceIsPublic((prev) => {
      editedDevice.isPublic = !prev;
      setEditedDevice({ ...editedDevice });
      return !prev;
    });
  };

  const editLocationHandler = () => {
    if (locationIsActive === true) {
      // edit device
      const { city, country_code, display_name, lat, lon } = (
        deviceLocation as OptionType<TransformedLocationDataType>
      ).value;

      editedDevice.fullLocation = display_name;
      editedDevice.deviceInfo.city_name = city;
      editedDevice.deviceInfo.country_code = country_code;
      editedDevice.deviceInfo.lat = lat;
      editedDevice.deviceInfo.lon = lon;

      setEditedDevice({ ...editedDevice });
    }
    setLocationIsActive((prev) => !prev);
  };

  const locationLoadOptions = useLoadOptions<LocationDataType[], TransformedLocationDataType>(
    (input) => getLocations(input ?? ''),
    transformLocationLoadOptions
  );

  return (
    <S.DeviceSettings>
      <S.DeviceDescription>
        <S.Title>{deviceName}</S.Title>
        <S.Address>
          <S.EditButton variant="tertiary" onClick={editLocationHandler}>
            <GeoSVG />
          </S.EditButton>
          <AsyncDropdown<TransformedLocationDataType>
            loadOptions={locationLoadOptions}
            value={deviceLocation}
            styles={LocationDropdownStyled}
            placeholder={'Enter new address'}
            isDisabled={!locationIsActive}
            onChange={(option) => {
              setDeviceLocation(option as SingleValue<OptionType<TransformedLocationDataType>>);
              if (option !== null) {
                const { lat, lng } = (
                  option as SingleValue<OptionType<TransformedLocationDataType>>
                )?.value as TransformedLocationDataType;
                const coords = { lat, lng };
                flyToLocation(mapRef, coords);
              }
            }}
          />
        </S.Address>
        <S.Comment>
          <S.EditButton variant="tertiary" onClick={editCommentHandler}>
            <EditSVG />
          </S.EditButton>
          <S.CommentInputContainer>
            <Input
              placeholder=""
              value={commentValue}
              onChange={setCommentValue}
              isActive={commentIsActive}
            />
          </S.CommentInputContainer>
        </S.Comment>
      </S.DeviceDescription>
      <S.Public>
        <span>Public</span>
        <Switch isChecked={deviceIsPublic} setIsChecked={setPublicDeviceHandler} />
      </S.Public>
      <S.Metrics>
        <S.MetricsTitle>Metrics</S.MetricsTitle>
        {airQuality &&
          Object.entries(airQuality).map(([name, value], index) => (
            <Accordion key={index}>
              <AccordionSummary>
                <div>Metric #{index + 1}</div>
              </AccordionSummary>
              <AccordionDetails>
                <S.MetricDetails>
                  <S.MetricsValue>
                    {name.toUpperCase()} : {value}
                  </S.MetricsValue>
                  <Button onClick={deleteMetricsHandler.bind(null, name)}>Delete Metrics</Button>
                </S.MetricDetails>
              </AccordionDetails>
            </Accordion>
          ))}

        <S.ButtonsGroup>
          <Button variant="secondary" fluid size="large" onClick={() => setDevice(null)}>
            Cancel
          </Button>
          <Button fluid size="large" onClick={editDeviceHandler}>
            Edit Device
          </Button>
        </S.ButtonsGroup>

        <S.RemoveButtonContainer>
          <S.RemoveButton variant="tertiary" onClick={removeDeviceHandler}>
            <DeleteSVG />
            <span>Remove device</span>
          </S.RemoveButton>
        </S.RemoveButtonContainer>
      </S.Metrics>
    </S.DeviceSettings>
  );
};

export default DeviceSettings;
