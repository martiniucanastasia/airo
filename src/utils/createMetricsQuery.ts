import { MetricsType } from '@/types';

export const createMetricsQuery = (array: MetricsType[] | undefined) => {
  if (!array) return '';
  return 'airQuality?metrics=' + array.join(',');
};
