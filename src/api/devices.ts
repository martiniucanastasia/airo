import { get, push, remove, update } from '@/firebase';

import {
  AirQualityType,
  IUpdates,
  IUserDevices,
  IUserGateway,
  MetricsType,
  UserDeviceType,
  UserGatewayType,
} from '@/types';
import { getNumbersInRange, getRandomPredominantPollenType } from '@/utils/transformData';

const defaultPath = 'devices/';

export const getDevices = async (path = defaultPath): Promise<IUserDevices> => {
  try {
    const dataSnapshot = await get(path);
    const dataValue = await dataSnapshot.val();

    return dataValue;
  } catch (error) {
    throw new Error('Error - getDevices: ' + error);
  }
};

export const getGateways = async (): Promise<IUserGateway> => {
  const path = 'gateways/';
  try {
    const dataSnapshot = await get(path);
    const dataValue = await dataSnapshot.val();
    return dataValue;
  } catch (error) {
    throw new Error('Error - getGateways: ' + error);
  }
};

export const addDevice = async (device: UserDeviceType, path = defaultPath) => {
  const newPostKey = push(path).key;

  const updates: IUpdates<UserDeviceType> = {};
  updates[path + newPostKey] = device;
  try {
    await update(updates);
  } catch (error) {
    throw new Error('Error - addDevice: ' + error);
  }
};

export const addGateway = async (gateway: UserGatewayType, path: string) => {
  const newPostKey = push(path).key;

  const updates: IUpdates<UserGatewayType> = {};
  updates[path + newPostKey] = gateway;
  try {
    await update(updates);
  } catch (error) {
    throw new Error('Error - addGateway: ' + error);
  }
};

export const deleteDevice = async (id: string, path = defaultPath) => {
  try {
    await remove(path + id);
  } catch (error) {
    throw new Error('Error - deleteDevice: ' + error);
  }
};

export const updateDevice = async (id: string, device: UserDeviceType, path = defaultPath) => {
  const updates: IUpdates<UserDeviceType> = {};
  updates[path + id] = device;

  try {
    await update(updates);
  } catch (error) {
    throw new Error('Error - updateDevice: ' + error);
  }
};

export const getAirQuality = (query: string) => {
  // acts like get request

  const mapper: Record<MetricsType, string | number> = {
    aqi: getNumbersInRange(40, 60),
    o3: getNumbersInRange(40, 120, true),
    so2: getNumbersInRange(1, 11, true),
    no2: getNumbersInRange(3, 15, true),
    co: getNumbersInRange(160, 340, true),
    pm10: getNumbersInRange(10, 26),
    pm25: getNumbersInRange(1, 10),
    pollen_level_tree: getNumbersInRange(0, 4),
    pollen_level_grass: getNumbersInRange(0, 4),
    pollen_level_weed: getNumbersInRange(0, 4),
    mold_level: getNumbersInRange(0, 4),
    predominant_pollen_type: getRandomPredominantPollenType(),
  };

  if (!query) {
    return mapper;
  }
  const metrics = query.split('metrics=')[1].split(',');

  type Container = Record<string | number, unknown>;
  const result = metrics.reduce((prev, curr) => {
    prev[curr as MetricsType] = mapper[curr as MetricsType]; // ? idk how to add types properly here

    return prev;
  }, {} as Container) as AirQualityType;

  return result;
};
