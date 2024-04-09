import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { TileLayer, ZoomControl } from 'react-leaflet';

import { ReactComponent as GeoSvg } from '@/assets/svg/geo-location.svg';
import { MapStyled as M } from './styles/mapStyles';

import { URL, ATTRIBUTION } from './osm';
import { Spinner } from '../UI/Spinner/Spinner';
import { useMapContext } from '@/context/MapContext';
import { GeolocationType, LocationType } from './types';
import { IUserDevices } from '@/types';
import { getDevices } from '@/api/devices';
import { MapMarker } from './MapMarker/MapMarker';
import { isSignedIn } from '@/api/authentification';

const ZOOM_LEVEL = 16;

export const Map = () => {
  const [location, setLocation] = useState<LocationType>({ lat: 0, lng: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [publicDevices, setPublicDevices] = useState<IUserDevices | null>(null);

  const { mapRef, shoudlMapDevicesRerender, setShouldMapDevicesRerender } = useMapContext();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(renderMap, showError);
    }
  }, []);

  useEffect(() => {
    const fetchDevices = async () => {
      const data = await getDevices();
      setPublicDevices(data);
    };
    fetchDevices();

    //  if user is logged fetch his devices to display them on the map
    (async () => {
      const response = await isSignedIn();
      if (response.status === 'success') {
        const userId = response.user?.uid;
        const userDevicesPath = `users/id-${userId}/userDevices/`;
        const devices = await getDevices(userDevicesPath);
        setPublicDevices((prev) => ({ ...prev, ...devices }));
      }
    })();

    if (shoudlMapDevicesRerender) {
      setShouldMapDevicesRerender(false);
    }
  }, [shoudlMapDevicesRerender]);

  const flyToLocation = () => {
    mapRef?.current?.flyTo(location, ZOOM_LEVEL);
  };

  const renderMap = (geolocation: GeolocationType) => {
    const { coords } = geolocation;
    setLocation({
      lat: coords.latitude,
      lng: coords.longitude,
    });
    setIsLoaded(true);
  };

  const showError = () => setIsError(true);

  if (isError) {
    return (
      <M.ErrorMessage>
        <p>Please provide access to your location to use AIRO</p>
      </M.ErrorMessage>
    );
  }

  return (
    <>
      {isLoaded ? (
        <M.Map
          minZoom={7}
          center={location}
          ref={mapRef}
          zoom={ZOOM_LEVEL}
          zoomControl={false}
          scrollWheelZoom={false}
        >
          <TileLayer url={URL} attribution={ATTRIBUTION} />
          <MapMarker
            variant={'location'}
            lat={location.lat}
            lng={location.lng}
            content={'You are here!'}
          />

          {publicDevices &&
            Object.values(publicDevices).map(({ deviceInfo, deviceName }, index) => {
              return (
                <div key={index}>
                  <MapMarker
                    variant={'device'}
                    lat={deviceInfo.lat}
                    lng={deviceInfo.lon}
                    metrics={deviceInfo.metrics}
                    content={`Here is device ${deviceName} `}
                  />
                </div>
              );
            })}

          <ZoomControl position="bottomright" />
          <M.UserLocationButton onClick={() => flyToLocation()}>
            <GeoSvg />
          </M.UserLocationButton>
        </M.Map>
      ) : (
        <Spinner />
      )}
    </>
  );
};
