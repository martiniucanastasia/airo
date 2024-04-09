import {
  createContext,
  useContext,
  useMemo,
  FC,
  useRef,
  MutableRefObject,
  useState,
  Dispatch,
} from 'react';
import Leaflet from 'leaflet';

interface IMapContext {
  mapRef: MutableRefObject<Leaflet.Map | null>;
  shoudlMapDevicesRerender: boolean;
  setShouldMapDevicesRerender: Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: JSX.Element;
}

export const MapContext = createContext({} as IMapContext);

export const MapContextProvider: FC<Props> = ({ children }) => {
  const mapRef = useRef<Leaflet.Map | null>(null);
  const [shoudlMapDevicesRerender, setShouldMapDevicesRerender] = useState(false);

  const contextValue = useMemo(
    () => ({
      mapRef,
      shoudlMapDevicesRerender,
      setShouldMapDevicesRerender,
    }),
    [mapRef, shoudlMapDevicesRerender]
  );

  return <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>;
};

export const useMapContext = () => useContext(MapContext);

export const withMapContext =
  (Component: FC): FC =>
  // eslint-disable-next-line react/display-name
  (props) => {
    return (
      <MapContextProvider>
        <Component {...props} />
      </MapContextProvider>
    );
  };
