import { Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import { LocationSvg, RedSvg, YellowSvg, GreenSvg } from './MarkerSvgData';
import { MetricsType } from '@/types';
import { getAirQuality } from '@/api/devices';
import { useEffect, useState } from 'react';

interface MapMarkerProps {
  variant: string;
  lat: number;
  lng: number;
  metrics?: MetricsType[];
  content: string;
}

export const MapMarker = ({ variant, lat, lng, metrics, content }: MapMarkerProps) => {
  const [particulateMatter, setParticulateMatter] = useState<string | number | undefined>();

  useEffect(() => {
    if (metrics) {
      const query = '/airQuality?metrics=' + metrics.join(',');
      const data = getAirQuality(query).pm25;
      setParticulateMatter(data);
    }
  }, []);

  const getMarkerIcon = () => {
    if (variant === 'location') {
      return LocationSvg;
    }
    if (variant === 'device' && particulateMatter) {
      if (particulateMatter <= 4 && particulateMatter >= 1) return RedSvg;
      if (particulateMatter <= 7 && particulateMatter >= 5) return YellowSvg;
      if (particulateMatter <= 10 && particulateMatter >= 8) return GreenSvg;
    }
  };

  const MarkerIcon = new Leaflet.DivIcon({
    className: variant === 'location' ? 'location-marker' : 'device-marker',
    html: getMarkerIcon(),
    iconAnchor: [12, 24],
    iconSize: [25, 25],
    popupAnchor: [0, 110],
  });
  return (
    <Marker
      icon={MarkerIcon}
      position={[lat, lng]}
      eventHandlers={{
        mouseover: (event) => event.target.openPopup(),
        mouseout: (event) => event.target.closePopup(),
      }}
    >
      <Popup>{content + `${variant}`}</Popup>
    </Marker>
  );
};
