/* eslint-disable no-unused-vars */
import { User } from 'firebase/auth';

export type Sizes = 'base' | 'large';

export type Variants = 'primary' | 'secondary' | 'tertiary';

export type Statuses = 'error' | 'success' | 'none';

export type UserDeviceType = {
  deviceId: number; // todo: remove
  deviceName: string;
  description: string;
  gatewayId: string;
  fullLocation: string;
  deviceInfo: DeviceType;
  isPublic: boolean;
};

export type DeviceType = {
  lat: number;
  lon: number;
  timezone: string;
  city_name: string;
  country_code: string;
  state_code: string;
  metrics?: MetricsType[];
};

export type AirQualityType = {
  aqi?: number;
  o3?: number;
  so2?: number;
  no2?: number;
  co?: number;
  pm10?: number;
  pm25?: number;
  pollen_level_tree?: number;
  pollen_level_grass?: number;
  pollen_level_weed?: number;
  mold_level?: number;
  predominant_pollen_type?: string;
};

export interface IUpdates<T> {
  [key: string]: T;
}

export type MetricsType =
  | 'aqi'
  | 'o3'
  | 'so2'
  | 'no2'
  | 'co'
  | 'pm10'
  | 'pm25'
  | 'pollen_level_tree'
  | 'pollen_level_grass'
  | 'pollen_level_weed'
  | 'mold_level'
  | 'predominant_pollen_type';

export type ResponseStatuses = 'success' | 'failure';

export type SignInResponseType = {
  status: ResponseStatuses;
  token: string | undefined;
  user: User | null;
};

export interface IUserDevices {
  [key: string]: UserDeviceType;
}

export type LocationDataType = {
  lat: number;
  lon: number;
  display_name: string;
  address: {
    city: string;
    country_code: string;
  };
};

export type TransformedLocationDataType = {
  lat: number;
  lon: number;
  lng: number;
  display_name: string;
  city: string;
  country_code: string;
};

export type addUserDeviceType = {
  lat: string;
  lng: string;
  lon: string;
  display_name: string;
};

export interface IUserGateway {
  [key: string]: UserGatewayType;
}

export type UserGatewayType = {
  gatewayName: string;
  key: string;
};

export type DefaultControlHookFormValues = {
  deviceName: string;
  description: string;
  gateway: string;
  location: string;
  metrics: string;
  publicMetrics: string;
  searchDevice: string;
};

export type DefaultControlHookFormNames =
  | 'deviceName'
  | 'description'
  | 'gateway'
  | 'location'
  | 'metrics'
  | 'publicMetrics'
  | 'searchDevice';

export type LocationPromiseType = (value: string) => Promise<LocationDataType>;
export type GatewayPromiseType = () => Promise<IUserGateway>;
export type DevicesPromiseType = () => Promise<IUserDevices>;
