import { LocationDataType } from "@/types";

const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?';

export const getLocations = (query: string): Promise<LocationDataType[]> => {
  const params = {
    q: query,
    format: 'json',
    addressdetails: '1',
    polygon_geojson: '0',
  };

  const queryString = new URLSearchParams(params).toString();

  return fetch(`${NOMINATIM_BASE_URL}` + `${queryString}`)
    .then((response) => response.text())
    .then((data) => {
      return data ? JSON.parse(data) : {};
    });
};
