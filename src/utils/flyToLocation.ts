import { LocationType } from '@/components/Map/types';
import { Map } from 'leaflet';

const ZOOM_LEVEL = 16;

const flyToLocation = (mapRef: React.MutableRefObject<Map | null>, coords: LocationType) => {
  mapRef?.current?.flyTo(coords, ZOOM_LEVEL);
};

export default flyToLocation;
